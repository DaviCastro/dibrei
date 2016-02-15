package com.belbin.service;

import java.lang.reflect.ParameterizedType;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Example;
import org.hibernate.criterion.MatchMode;

/**
 * 
 * @author Davidson
 *
 * @param <E>
 */
public class EntityServiceImpl<E> implements EntityService<E> {

	@PersistenceContext
	protected EntityManager entityManager;

	private Class<E> persistentClass;

	@Override
	public E create(E e) {
		e = update(e);
		entityManager.flush();
		return e;

	}

	@Override
	public E find(int id) {
		return entityManager.find(getTypeClass(), id);
	}

	@Override
	public E update(E e) {
		return entityManager.merge(e);
	}

	@Override
	public void delete(int id) {
		entityManager.remove(entityManager.find(getTypeClass(), id));
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<E> find() {
		Criteria criteria = getSession().createCriteria(getTypeClass());

		return (List<E>) criteria.list();
	}

	@SuppressWarnings({ "unchecked" })
	public Class<E> getTypeClass() {
		if (this.persistentClass == null) {
			this.persistentClass = (Class<E>) ((ParameterizedType) getClass().getGenericSuperclass())
					.getActualTypeArguments()[0];
		}
		return this.persistentClass;
	}

	@SuppressWarnings("unchecked")
	public List<E> find(E e) {

		Example example = Example.create(e).ignoreCase().enableLike(MatchMode.START);

		Criteria criteria = getSession().createCriteria(getTypeClass());
		criteria.add(example);
		return (List<E>) criteria.list();
	}

	@SuppressWarnings("unchecked")
	public E findOne(E e) {

		Example example = Example.create(e);

		Criteria criteria = getSession().createCriteria(getTypeClass());
		criteria.add(example);
		return (E) criteria.uniqueResult();
	}

	public Session getSession() {
		return (Session) entityManager.getDelegate();
	}

	public EntityManager getEntityManager() {
		return entityManager;
	}

}
