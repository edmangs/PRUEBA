package com.appjava.admin.mantenimiento.entities;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.appjava.core.entity.BaseEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "MECANICO", 
	uniqueConstraints = { 
			@UniqueConstraint(name = "MECANICO_PK", columnNames = { "DOCUMENTO", "TIPO_DOCUMENTO" }) 
	}
)
public class EntityMecanico extends BaseEntity {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long id;
	
	@Basic(optional = false)
	@Column(name = "DOCUMENTO", nullable = false)
    private Long documento;
	
	@Column(name = "PRIMER_NOMBRE", columnDefinition = "VARCHAR(30) NOT NULL")
    private String primerNombre;
	
	@Column(name = "SEGUNDO_NOMBRE", columnDefinition = "VARCHAR(30)")
    private String segundoNombre;
	
	@Column(name = "PRIMER_APELLIDO", columnDefinition = "VARCHAR(30) NOT NULL")
    private String primerApellido;
	
	@Column(name = "SEGUNDO_APELLIDO", columnDefinition = "VARCHAR(30)")
    private String segundoApellido;
	
	@Column(name = "CELULAR", nullable = false)
    private String celular;
	
	@Column(name = "DIRECCION", columnDefinition = "VARCHAR(200) NOT NULL")
    private String direccion;
	
	@Column(name = "EMAIL", columnDefinition = "VARCHAR(100) NOT NULL")
    private String email;
	
	@Column(name = "ESTADO", columnDefinition = "VARCHAR(1) NOT NULL")
    private String estado;
	
	@Column(name = "TIPO_DOCUMENTO", columnDefinition = "VARCHAR(2) NOT NULL")
    private String tipoDocumento;

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
