package com.appjava.admin.mantenimiento.resources;

import javax.validation.constraints.Size;

import com.appjava.core.resources.BaseResource;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResourceMecanico extends BaseResource {
	
	private Long id;
	
	@NotNull
	private Long documento;
	
	@NotNull
	@Size(max = 30, message = "El campo no puede tener más de 30 caracteres")
	private String primerNombre;
	
	@Size(max = 30, message = "El campo no puede tener más de 30 caracteres")
	private String segundoNombre;
	
	@NotNull
	@Size(max = 30, message = "El campo no puede tener más de 30 caracteres")
	private String primerApellido;
	
	@Size(max = 30, message = "El campo no puede tener más de 30 caracteres")
	private String segundoApellido;
	
	@NotNull
	@Size(max = 10, message = "El campo no puede tener más de 10 caracteres")
	private String celular;
	
	@NotNull
	@Size(max = 200, message = "El campo no puede tener más de 200 caracteres")
	private String direccion;
	
	@NotNull
	@Size(max = 100, message = "El campo no puede tener más de 100 caracteres")
	private String email;
	
	@NotNull
	private String estado;
	
	@NotNull
	private String tipoDocumento;
	
	@JsonProperty("nombreCompleto")
	private String getNombresYApellidos() {
		return primerNombre + " " + segundoNombre + " " + primerApellido + " " + segundoApellido; 
	}
	
	@Override
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getDocumento() {
		return documento;
	}
	public void setDocumento(Long documento) {
		this.documento = documento;
	}
	public String getPrimerNombre() {
		return primerNombre;
	}
	public void setPrimerNombre(String primerNombre) {
		this.primerNombre = primerNombre;
	}
	public String getSegundoNombre() {
		return segundoNombre;
	}
	public void setSegundoNombre(String segundoNombre) {
		this.segundoNombre = segundoNombre;
	}
	public String getPrimerApellido() {
		return primerApellido;
	}
	public void setPrimerApellido(String primerApellido) {
		this.primerApellido = primerApellido;
	}
	public String getSegundoApellido() {
		return segundoApellido;
	}
	public void setSegundoApellido(String segundoApellido) {
		this.segundoApellido = segundoApellido;
	}
	public String getCelular() {
		return celular;
	}
	public void setCelular(String celular) {
		this.celular = celular;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public String getTipoDocumento() {
		return tipoDocumento;
	}
	public void setTipoDocumento(String tipoDocumento) {
		this.tipoDocumento = tipoDocumento;
	}
	
}
