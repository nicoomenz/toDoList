package ttps.spring.clasesDAOImpl;

import java.util.List;

import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import ttps.spring.clasesDAO.ItemDAO;
import ttps.spring.model.Item;

@Repository
public class ItemDAOImpl extends GenericDAOImpl<Item> implements ItemDAO{

	public ItemDAOImpl() {
		
		super(Item.class);
		
	}

	@Override
	public List<Item> listar(long id) {
		Query consult = this.getEntityManager().createQuery("select e from " + getPersistentClass().getSimpleName() + " e where myFolder.id = '" + id + "'");
		List<Item> itemList = (List<Item>) consult.getResultList();
		return itemList;
	}
	
	
	
	
}
