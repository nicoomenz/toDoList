package ttps.spring.clasesDAO;


import java.util.List;

import ttps.spring.model.Item;

public interface ItemDAO extends GenericDAO<Item>{
	
	List<Item> listar(long id);

	
}
