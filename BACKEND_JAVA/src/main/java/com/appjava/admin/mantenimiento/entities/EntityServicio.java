package com.appjava.admin.mantenimiento.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.appjava.core.entity.BaseEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "SERVICIO_MANTENIMIENTO")
public class EntityServicio extends BaseEntity {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long id;
	
	@Column(name = "CODIGO", nullable = false, unique = true)
    private Long codigo;
	
	@Column(name = "TIEMPO_ESTIMADO", nullable = false)
    private Long timpoEstimado;
	
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

	public Long getTimpoEstimado() {
		return timpoEstimado;
	}

	public void setTimpoEstimado(Long timpoEstimado) {
		this.timpoEstimado = timpoEstimado;
	}
	
}
