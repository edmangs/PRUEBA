package com.appjava.admin.mantenimiento.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.appjava.admin.mantenimiento.entities.EntityMecanico;
import com.appjava.core.repository.BaseRepository;

@Repository
public interface RepositoryMecanico extends JpaRepository<EntityMecanico, Long>, JpaSpecificationExecutor<EntityMecanico>, BaseRepository<EntityMecanico> {
	@Query(value = "SELECT DISTINCT ME.*, ( " + 
			"	SELECT count(*) FROM MANTENIMIENTO SM WHERE SM.MECANICO_ID = ME.id " + 
			") AS MANTENIMIENTOS FROM MECANICO ME " + 
			"LEFT JOIN MANTENIMIENTO MA ON MA.MECANICO_ID = ME.ID " + 
			"WHERE ME.ESTADO = 'A' " + 
			"ORDER BY MANTENIMIENTOS ASC LIMIT 10", nativeQuery = true)
	List<EntityMecanico> mecanicosDisponibles();
}
