package com.appjava.admin.mantenimiento.controllers;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ServerErrorException;

import com.appjava.admin.mantenimiento.entities.EntityMantenimiento;
import com.appjava.admin.mantenimiento.resources.ResourceMantenimiento;
import com.appjava.admin.mantenimiento.services.ServiceMantenimiento;
import com.appjava.core.controllers.BaseController;
import com.appjava.core.exception.BadRequestException;
import com.appjava.core.exception.ConflictException;
import com.appjava.core.services.BaseService;

import io.swagger.annotations.Api;

@Api("Application Mecanico")
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1/mantenimiento")
public class ControllerMantenimiento extends BaseController<ResourceMantenimiento, EntityMantenimiento> {
	
	@Autowired
	private ServiceMantenimiento servicio;
	
	@Autowired
	protected ModelMapper modelMapper;
	
	@Override
	@RequestMapping(method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<List<ResourceMantenimiento>> list()
			throws ServerErrorException, EntityNotFoundException, BadRequestException, ConflictException,
			MethodArgumentNotValidException, Exception {
		return super.list();
	}
	
	@Override
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<ResourceMantenimiento> create(@RequestBody @Validated ResourceMantenimiento recurso) throws Exception, BadRequestException,
			MethodArgumentNotValidException, ServerErrorException, EntityNotFoundException, ConflictException {
		return super.create(recurso);
	}
	
	@Override
	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<ResourceMantenimiento> update(@RequestBody @Validated ResourceMantenimiento recurso) throws Exception, BadRequestException,
			MethodArgumentNotValidException, ServerErrorException, EntityNotFoundException, ConflictException {
		return super.update(recurso);
	}
	
	@Override
	@RequestMapping(method = RequestMethod.GET, path = "/{id}")
	public ResponseEntity<ResourceMantenimiento> detail(@PathVariable("id") Long id) throws Exception, BadRequestException,
			MethodArgumentNotValidException, ServerErrorException, EntityNotFoundException, ConflictException {
		return super.detail(id);
	}
	
	@Override
	@RequestMapping(method = RequestMethod.DELETE, path = "/{id}")
	public ResponseEntity<ResourceMantenimiento> delete(@PathVariable("id") Long id) throws Exception, BadRequestException,
			MethodArgumentNotValidException, ServerErrorException, EntityNotFoundException, ConflictException {
		return super.delete(id);
	}
	
	@Override
	protected BaseService<EntityMantenimiento> getService() {
		return servicio;
	}

	@Override
	protected ResourceMantenimiento convertEntityToResource(EntityMantenimiento entidad) {
		return modelMapper.map(entidad, ResourceMantenimiento.class);
	}

	@Override
	protected EntityMantenimiento convertResourceToEntity(ResourceMantenimiento recurso) {
		return modelMapper.map(recurso, EntityMantenimiento.class);
	}
}
