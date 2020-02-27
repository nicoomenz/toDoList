package ttps.spring.clasesDAO;

import java.util.List;

import ttps.spring.model.FolderItem;

public interface FolderItemDAO extends GenericDAO<FolderItem> {
	
	public List<FolderItem> listar();

}
