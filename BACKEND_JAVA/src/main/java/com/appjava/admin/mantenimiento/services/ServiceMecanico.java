package com.appjava.admin.mantenimiento.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Service;

import com.appjava.admin.mantenimiento.entities.EntityMecanico;
import com.appjava.admin.mantenimiento.repositories.RepositoryMecanico;
import com.appjava.core.repository.BaseRepository;
import com.appjava.core.services.BaseService;
import com.appjava.core.utils.SortAndPagination;

@Service
public class ServiceMecanico extends BaseService<EntityMecanico> {
	
	@Autowired(required=true)
	private RepositoryMecanico repositorio;

	public ServiceMecanico() {
		super();
	}

	public PagingAndSortingRepository<EntityMecanico, Long> getRepository() {
		return repositorio;
	}

	public JpaSpecificationExecutor<EntityMecanico> getSpecificationExecutor() {
		return repositorio;
	}

	public BaseRepository<EntityMecanico> getCustomRepository() {
		return repositorio;
	}

	public Page<EntityMecanico> search(Specification<EntityMecanico> specification,
			SortAndPagination sortAndPagination) {
		PageRequest pageRequest;
		pageRequest = PageRequest.of(sortAndPagination.getPage(), sortAndPagination.getSize(),
				constructSort(sortAndPagination.getSortBy(), sortAndPagination.getSortOrder()));
		return repositorio.findAll(specification, pageRequest);
	}
	
	public List<EntityMecanico> mecanicosDisponibles(){
		List<EntityMecanico> items = new ArrayList<EntityMecanico>();
		
		items = this.repositorio.mecanicosDisponibles();
		
		return items;
	}
}