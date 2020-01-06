package com.appjava.admin.mantenimiento.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import com.appjava.core.entity.BaseEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "MANTENIMIENTO")
public class EntityMantenimiento extends BaseEntity {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long id;

	@Column(name = "CODIGO", nullable = false, unique = true)
    private Long codigo;
	
	@Column(name = "ESTADO")
    private Long estado;
	
	@Column(name = "FECHA", columnDefinition = "TIMESTAMP (6)")
	private Date fecha;
	
	@NotFound(action = NotFoundAction.IGNORE)
	@ManyToOne(fetch = FetchType.EAGER)
	@Cascade({ CascadeType.REFRESH })
	@JoinColumn(name = "MECANICO_ID",  columnDefinition="BIGINT NOT NULL", foreignKey = @ForeignKey(name = "MANTENIMIENTO_FK1"))
	private EntityMecanico mecanico;
	
	@NotFound(action = NotFoundAction.IGNORE)
	@ManyToOne(fetch = FetchType.EAGER)
	@Cascade({ CascadeType.REFRESH })
	@JoinColumn(name = "VEHICULO_ID", foreignKey = @ForeignKey(name = "MANENIMIENTO_FK2"))
	private EntityVehiculo vehiculo;
	
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

	public Long getEstado() {
		return estado;
	}

	public void setEstado(Long estado) {
		this.estado = estado;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public EntityMecanico getMecanico() {
		return mecanico;
	}

	public void setMecanico(EntityMecanico mecanico) {
		this.mecanico = mecanico;
	}

	public EntityVehiculo getVehiculo() {
		return vehiculo;
	}

	public void setVehiculo(EntityVehiculo vehiculo) {
		this.vehiculo = vehiculo;
	}
	
}
