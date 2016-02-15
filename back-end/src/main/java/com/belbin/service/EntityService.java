package com.belbin.service;

import java.util.List;

/**
 * Apenas para convencao de nomes de metodo
 * 
 * @author Davidson
 *
 * @param <E>
 */
public interface EntityService<E> {

	E create(E e);

	E find(int id);

	E update(E e);

	List<E> find(E e);

	void delete(int id);

	List<E> find();

	E findOne(E e);

}
