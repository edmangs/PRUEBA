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
@Table(name = "FOTO")
public class EntityFoto extends BaseEntity {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long id;
	
	@Column(name = "CODIGO", nullable = false, unique = true)
    private Long codigo;
	
	@Column(name = "RUTA", nullable = false, unique = true, columnDefinition = "VARCHAR(200) NOT NULL")
    private Long ruta;
	
	@NotFound(action = NotFoundAction.IGNORE)
	@ManyToOne(fetch = FetchType.EAGER)
	@Cascade({ CascadeType.REFRESH })
	@JoinColumn(name = "MANTENIMIENTO_ID", foreignKey = @ForeignKey(name = "FOTO_FK1"))
	private EntityMantenimiento mantenimiento;
	
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

	public Long getRuta() {
		return ruta;
	}

	public void setRuta(Long ruta) {
		this.ruta = ruta;
	}

	public EntityMantenimiento getMantenimiento() {
		return mantenimiento;
	}

	public void setMantenimiento(EntityMantenimiento mantenimiento) {
		this.mantenimiento = mantenimiento;
	}
	
}
