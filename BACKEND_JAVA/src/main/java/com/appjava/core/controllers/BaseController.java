package com.appjava.core.controllers;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.EntityNotFoundException;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.server.ServerErrorException;

import com.appjava.core.entity.BaseEntity;
import com.appjava.core.exception.BadRequestException;
import com.appjava.core.exception.ConflictException;
import com.appjava.core.resources.BaseResource;
import com.appjava.core.services.BaseService;
import com.appjava.core.utils.SortAndPagination;
import springfox.documentation.swagger2.mappers.ModelMapper;
import com.google.common.base.Converter;

@ControllerAdvice
public abstract class BaseController<R extends BaseResource, E extends BaseEntity> {
	
	@PersistenceContext
	private EntityManager entityManager;

	@Autowired
	protected ModelMapper modelMapper;
	
	protected abstract BaseService<E> getService();

	protected abstract R convertEntityToResource(E entidad);

	protected abstract E convertResourceToEntity(R recurso);
	
	@RequestMapping(value = "/list", method = RequestMethod.GET)
    public ResponseEntity<List<R>> list() throws ServerErrorException, EntityNotFoundException, BadRequestException,
	ConflictException, MethodArgumentNotValidException, Exception {
		List<R> listado = getService().listAll().stream().map(entity -> convertEntityToResource((E) entity))
				.collect(Collectors.toList());
		return new ResponseEntity<List<R>>(listado, HttpStatus.OK);
    }
	
	public ResponseEntity<R> detail(Long id) throws Exception, EntityNotFoundException {
		entityManager.clear();
		E entidad = getService().detail(id);
		if (entidad == null) {
			throw new EntityNotFoundException("No existe el elemento");
		}
		R detalle = convertEntityToResource(entidad);
		return new ResponseEntity<R>(detalle, HttpStatus.OK);
	}
	
	public ResponseEntity<R> create(R recurso) throws Exception, BadRequestException {
		E entidad = getService().create(convertResourceToEntity(recurso));
		entityManager.clear();
		E creada = getService().detail(entidad.getId());
		R nuevoRecurso = convertEntityToResource(creada);
		return new ResponseEntity<R>(nuevoRecurso, HttpStatus.CREATED);
	}
	
	public ResponseEntity<R> update(R recurso)
			throws ServerErrorException, EntityNotFoundException, BadRequestException, ConflictException,
			MethodArgumentNotValidException, Exception {
		E entidad = convertResourceToEntity(recurso);
		entidad = getService().update(entidad);
		recurso = convertEntityToResource(entidad);
		return new ResponseEntity<R>(recurso, HttpStatus.OK);
	}
	
	public ResponseEntity<R> delete(Long id) throws Exception, EntityNotFoundException, ConflictException {

		E entidad = getService().detail(id);
		if (entidad == null) {
			throw new EntityNotFoundException("No existe el elemento");
		}
		
		getService().delete(id);
		return new ResponseEntity<R>(HttpStatus.OK);
	}
	
}
