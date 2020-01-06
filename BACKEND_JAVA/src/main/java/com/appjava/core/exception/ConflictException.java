package com.appjava.core.exception;

public final class ConflictException extends RuntimeException {

	private static final long serialVersionUID = 1L;


    public ConflictException(final String message, final Throwable cause) {
        super(message, cause);
    }

    public ConflictException(final String message) {
        super(message);
    }

    public ConflictException(final Throwable cause) {
        super(cause);
    }
}