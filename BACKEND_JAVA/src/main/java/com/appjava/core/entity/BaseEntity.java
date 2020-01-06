package com.appjava.core.entity;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class BaseEntity {
	public abstract Long getId();
}

