package com.appjava.admin.mantenimiento.controllers;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ServerErrorException;

import com.appjava.admin.mantenimiento.entities.EntityMecanico;
import com.appjava.admin.mantenimiento.resources.ResourceMecanico;
import com.appjava.admin.mantenimiento.services.ServiceMecanico;
import com.appjava.core.controllers.BaseController;
import com.appjava.core.exception.BadRequestException;
import com.appjava.core.exception.ConflictException;
import com.appjava.core.services.BaseService;

import io.swagger.annotations.Api;

@Api("Application Mecanico")
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1/mecanico")
public class ControllerMecanico extends BaseController<ResourceMecanico, EntityMecanico> {
	
	@Autowired
	private ServiceMecanico servicio;
	
	@Autowired
	protected ModelMapper modelMapper;
	
	@Override
	@RequestMapping(method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<List<ResourceMecanico>> list()
			throws ServerErrorException, EntityNotFoundException, BadRequestException, ConflictException,
			MethodArgumentNotValidException, Exception {
		return super.list();
	}

	@GetMapping( path = "/mecanicosDisponibles")
	public ResponseEntity<List<ResourceMecanico>> mecanicosDisponibles() {
		List<EntityMecanico> mecanicos = (List<EntityMecanico>) servicio.mecanicosDisponibles();
		List<ResourceMecanico> result = mecanicos.stream().map(entity -> modelMapper.map(entity, ResourceMecanico.class)).collect(Collectors.toList());
		return new ResponseEntity<List<ResourceMecanico>>(result,HttpStatus.OK);
	}
	
	@Override
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<ResourceMecanico> create(@RequestBody @Validated ResourceMecanico recurso) throws Exception, BadRequestException,
			MethodArgumentNotValidException, ServerErrorException, EntityNotFoundException, ConflictException {
		return super.create(recurso);
	}
	
	@Override
	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<ResourceMecanico> update(@RequestBody @Validated ResourceMecanico recurso) throws Exception, BadRequestException,
			MethodArgumentNotValidException, ServerErrorException, EntityNotFoundException, ConflictException {
		return super.update(recurso);
	}
	
	@Override
	@RequestMapping(method = RequestMethod.GET, path = "/{id}")
	public ResponseEntity<ResourceMecanico> detail(@PathVariable("id") Long id) throws Exception, BadRequestException,
			MethodArgumentNotValidException, ServerErrorException, EntityNotFoundException, ConflictException {
		return super.detail(id);
	}
	
	@Override
	@RequestMapping(method = RequestMethod.DELETE, path = "/{id}")
	public ResponseEntity<ResourceMecanico> delete(@PathVariable("id") Long id) throws Exception, BadRequestException,
			MethodArgumentNotValidException, ServerErrorException, EntityNotFoundException, ConflictException {
		return super.delete(id);
	}
	
	@Override
	protected BaseService<EntityMecanico> getService() {
		return servicio;
	}

	@Override
	protected ResourceMecanico convertEntityToResource(EntityMecanico entidad) {
		return modelMapper.map(entidad, ResourceMecanico.class);
	}

	@Override
	protected EntityMecanico convertResourceToEntity(ResourceMecanico recurso) {
		return modelMapper.map(recurso, EntityMecanico.class);
	}
}
