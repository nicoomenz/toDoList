package ttps.spring.clasesDAOImpl;

import java.util.List;

import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import ttps.spring.clasesDAO.FolderItemDAO;
import ttps.spring.model.FolderItem;
import ttps.spring.model.Item;

@Repository
public class FolderItemDAOImpl extends GenericDAOImpl<FolderItem> implements FolderItemDAO{

	public FolderItemDAOImpl() {
		super(FolderItem.class);
	}
	
	@Override
	public List<FolderItem> listar() {
		Query consult = this.getEntityManager().createQuery("select e from " + getPersistentClass().getSimpleName() + " e");
		List<FolderItem> folderItemList = (List<FolderItem>) consult.getResultList();
		return folderItemList;
	}
}
