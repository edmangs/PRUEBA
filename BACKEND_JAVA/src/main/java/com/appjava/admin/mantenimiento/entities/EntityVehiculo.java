package com.appjava.admin.mantenimiento.entities;

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
@Table(name = "VEHICULO")
public class EntityVehiculo extends BaseEntity {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long id;
	
	@Column(name = "PLACA", nullable = false, unique = true, columnDefinition = "VARCHAR(6) NOT NULL")
    private Long placa;
	
	@Column(name = "COLOR", nullable = false, unique = true, columnDefinition = "VARCHAR(30) NOT NULL")
    private Long color;
	
	@NotFound(action = NotFoundAction.IGNORE)
	@ManyToOne(fetch = FetchType.EAGER)
	@Cascade({ CascadeType.REFRESH })
	@JoinColumn(name = "MARCA_ID", foreignKey = @ForeignKey(name = "VEHICULO_FK1"))
	private EntityMarca marca;
	
	@NotFound(action = NotFoundAction.IGNORE)
	@ManyToOne(fetch = FetchType.EAGER)
	@Cascade({ CascadeType.REFRESH })
	@JoinColumn(name = "CLIENTE_ID", foreignKey = @ForeignKey(name = "VEHICULO_FK2"))
	private EntityCliente cliente;
	
	@Override
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}

	public Long getPlaca() {
		return placa;
	}

	public void setPlaca(Long placa) {
		this.placa = placa;
	}

	public Long getColor() {
		return color;
	}

	public void setColor(Long color) {
		this.color = color;
	}

	public EntityMarca getMarca() {
		return marca;
	}

	public void setMarca(EntityMarca marca) {
		this.marca = marca;
	}

	public EntityCliente getCliente() {
		return cliente;
	}

	public void setCliente(EntityCliente cliente) {
		this.cliente = cliente;
	}
	
}
