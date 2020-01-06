package com.appjava.admin.mantenimiento.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Service;

import com.appjava.admin.mantenimiento.entities.EntityMantenimiento;
import com.appjava.admin.mantenimiento.repositories.RepositoryMantenimiento;
import com.appjava.core.repository.BaseRepository;
import com.appjava.core.services.BaseService;
import com.appjava.core.utils.SortAndPagination;

@Service
public class ServiceMantenimiento extends BaseService<EntityMantenimiento> {
	
	@Autowired(required=true)
	private RepositoryMantenimiento repositorio;

	public ServiceMantenimiento() {
		super();
	}

	public PagingAndSortingRepository<EntityMantenimiento, Long> getRepository() {
		return repositorio;
	}

	public JpaSpecificationExecutor<EntityMantenimiento> getSpecificationExecutor() {
		return repositorio;
	}

	public BaseRepository<EntityMantenimiento> getCustomRepository() {
		return repositorio;
	}

	public Page<EntityMantenimiento> search(Specification<EntityMantenimiento> specification,
			SortAndPagination sortAndPagination) {
		PageRequest pageRequest;
		pageRequest = PageRequest.of(sortAndPagination.getPage(), sortAndPagination.getSize(),
				constructSort(sortAndPagination.getSortBy(), sortAndPagination.getSortOrder()));
		return repositorio.findAll(specification, pageRequest);
	}
	
}