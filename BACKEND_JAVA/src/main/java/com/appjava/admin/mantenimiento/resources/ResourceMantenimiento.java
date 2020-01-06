package com.appjava.admin.mantenimiento.resources;

import java.util.Date;

import com.appjava.core.resources.BaseResource;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResourceMantenimiento extends BaseResource {
	
	private Long id;
	
	@NotNull
	private Long codigo;
	
	@NotNull
	private String estado;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy", locale = "es-CO", timezone = "America/Bogota")
	private Date fecha;
	
	private ResourceMecanico mecanico;
	
	@Override
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public ResourceMecanico getMecanico() {
		return mecanico;
	}

	public void setMecanico(ResourceMecanico mecanico) {
		this.mecanico = mecanico;
	}
	
}
