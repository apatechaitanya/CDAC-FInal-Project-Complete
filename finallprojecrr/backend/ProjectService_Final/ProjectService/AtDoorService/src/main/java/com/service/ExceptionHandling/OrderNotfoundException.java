package com.service.ExceptionHandling;

public class OrderNotfoundException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public OrderNotfoundException(String message)
	{
		super(message);
	}
}
