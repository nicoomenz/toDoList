package ttps.spring.clasesDAOImpl;

import java.io.Serializable;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.transaction.annotation.Transactional;

import ttps.spring.clasesDAO.GenericDAO;
import ttps.spring.model.Item;

@Transactional
public class GenericDAOImpl<T> implements GenericDAO<T> {
	
	protected Class<T> persistentClass;
	private EntityManager entityManager;
	
	public GenericDAOImpl(Class<T> t) {
		this.persistentClass = t;
	}
	
	
	public void setPersistentClass(Class<T> persistentClass) {
		this.persistentClass = persistentClass;
	}
	public Class<T> getPersistentClass(){
		return persistentClass;
	}
	
	@PersistenceContext
	public void setEntityManager(EntityManager entityManager) {
		this.entityManager = entityManager;
	}
	public EntityManager getEntityManager() {
		return entityManager;
	}
	
	@Override
	public T recover(long id) {
		Query consult = this.getEntityManager().createQuery("select e from " + getPersistentClass().getSimpleName() + " e where e.id = '"+ id + "'" );
		T resultado =(T) consult.getSingleResult();
		return resultado;
	}
	
	@Override
	public T persistItem(T t) {
		this.getEntityManager().persist(t);
		return t;
	}

	@Override
	public T modifyItem(T t) {
		this.getEntityManager().merge(t);
		return t;
	}

	@Override
	public void deleteItem(T t) {
		this.getEntityManager().remove(this.getEntityManager().merge(t));
	}


	@Override
	public T merge(T t) {
		this.getEntityManager().merge(t);
		return t;
	}


	

}
