package ttps.spring.clasesDAO;

public interface GenericDAO<T> {
	
	public T merge (T t);
	
	public T recover(long id);
	
	public T persistItem(T t);
	
	public T modifyItem(T t);
	
	public void deleteItem(T t);
	
}
