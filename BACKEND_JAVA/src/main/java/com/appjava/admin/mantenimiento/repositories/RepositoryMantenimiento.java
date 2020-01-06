package com.appjava.admin.mantenimiento.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.appjava.admin.mantenimiento.entities.EntityMantenimiento;
import com.appjava.core.repository.BaseRepository;

@Repository
public interface RepositoryMantenimiento extends JpaRepository<EntityMantenimiento, Long>, JpaSpecificationExecutor<EntityMantenimiento>, BaseRepository<EntityMantenimiento> {
	
}
