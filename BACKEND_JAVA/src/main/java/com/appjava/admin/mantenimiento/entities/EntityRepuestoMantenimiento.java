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
@Table(name = "REPUESTO_MANTENIMIENTO")
public class EntityRepuestoMantenimiento extends BaseEntity {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long id;
	
	@Column(name = "CODIGO", nullable = false, unique = true)
    private Long codigo;
	
	@Column(name = "UNIDADES", nullable = false)
    private Long unidades;
	
	@Column(name = "TIEMPO_ESTIMADO", nullable = false)
    private Long tiempoEstimado;
	
	@NotFound(action = NotFoundAction.IGNORE)
	@ManyToOne(fetch = FetchType.EAGER)
	@Cascade({ CascadeType.REFRESH })
	@JoinColumn(name = "REPUESTO_ID", foreignKey = @ForeignKey(name = "REPUESTO_MANENIMIENTO_FK1"))
	private EntityRepuesto respuesto;
	
	@NotFound(action = NotFoundAction.IGNORE)
	@ManyToOne(fetch = FetchType.EAGER)
	@Cascade({ CascadeType.REFRESH })
	@JoinColumn(name = "MANTENIMIENTO_ID", foreignKey = @ForeignKey(name = "REPUESTO_MANENIMIENTO_FK2"))
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

	public Long getUnidades() {
		return unidades;
	}

	public void setUnidades(Long unidades) {
		this.unidades = unidades;
	}

	public Long getTiempoEstimado() {
		return tiempoEstimado;
	}

	public void setTiempoEstimado(Long tiempoEstimado) {
		this.tiempoEstimado = tiempoEstimado;
	}

	public EntityRepuesto getRespuesto() {
		return respuesto;
	}

	public void setRespuesto(EntityRepuesto respuesto) {
		this.respuesto = respuesto;
	}

	public EntityMantenimiento getMantenimiento() {
		return mantenimiento;
	}

	public void setMantenimiento(EntityMantenimiento mantenimiento) {
		this.mantenimiento = mantenimiento;
	}
	
}
