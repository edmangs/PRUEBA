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
@Table(name = "RESPUESTO")
public class EntityRepuesto extends BaseEntity {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long id;
	
	@Column(name = "CODIGO", nullable = false, unique = true)
    private Long codigo;
	
	@Column(name = "NOMBRE_RESPUESTO", columnDefinition = "VARCHAR(100)")
    private String nombreRepuesto;

	@Column(name = "PRECIO_UNITARIO", nullable = false)
    private Long precioUnitario;
	
	@Column(name = "UNIDAD_INVENTARIO", nullable = false)
    private Long unidadInventario;
	
	@Column(name = "PROVEEDOR", columnDefinition = "VARCHAR(300)")
    private String proveedor;
	
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

	public String getNombreRepuesto() {
		return nombreRepuesto;
	}

	public void setNombreRepuesto(String nombreRepuesto) {
		this.nombreRepuesto = nombreRepuesto;
	}

	public Long getPrecioUnitario() {
		return precioUnitario;
	}

	public void setPrecioUnitario(Long precioUnitario) {
		this.precioUnitario = precioUnitario;
	}

	public Long getUnidadInventario() {
		return unidadInventario;
	}

	public void setUnidadInventario(Long unidadInventario) {
		this.unidadInventario = unidadInventario;
	}

	public String getProveedor() {
		return proveedor;
	}

	public void setProveedor(String proveedor) {
		this.proveedor = proveedor;
	}
	
}
