package ttps.spring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ttps.spring.clasesDAO.FolderItemDAO;
import ttps.spring.clasesDAO.ItemDAO;
import ttps.spring.clasesDTO.ItemDTO;
import ttps.spring.model.FolderItem;
import ttps.spring.model.Item;

@RestController
public class ItemController {
	
	@Autowired
	private FolderItemDAO folderItemDAO;
	@Autowired
	private ItemDAO itemDAO;
	
	@PostMapping(path = "/addItem")
	public ResponseEntity<?> add(@RequestBody ItemDTO itemDTO){
		
		long startTime = System.nanoTime();
		
		FolderItem folder = folderItemDAO.recover( itemDTO.getIdFolder());
		folderItemDAO.merge(folder);
		Item item = new Item(itemDTO.getDescription());
		itemDAO.persistItem(item);
		item.setMyFolder(folder);
		itemDAO.merge(item);
		folder.getItemList().add(item);
		long endTime = System.nanoTime();
		System.out.println("Took "+(endTime - startTime) + " ns");
		return ResponseEntity.ok(HttpStatus.OK);
		
		
		 
		
	}	
	
	@PostMapping(path = "/modifyItem")
	public ResponseEntity<?> modify(@RequestBody Item item){
		long startTime = System.nanoTime();
		Item itemComplete = itemDAO.recover(item.getId());
		itemComplete.setDescripcion(item.getDescription());
		itemDAO.modifyItem(itemComplete);
		long endTime = System.nanoTime();
		System.out.println("Took "+(endTime - startTime) + " ns");
		return ResponseEntity.ok(HttpStatus.OK);	
	}	
	
	@PostMapping(path = "/deleteItem")
	public ResponseEntity<?> delete(@RequestBody Item item){
		long startTime = System.nanoTime();
		Item itemComplete = itemDAO.recover(item.getId());
		FolderItem folder = folderItemDAO.recover(itemComplete.getMyFolder().getId());
		folder.getItemList().remove(item);
		folderItemDAO.merge(folder);
		itemDAO.deleteItem(item);		
		long endTime = System.nanoTime();
		System.out.println("Took "+(endTime - startTime) + " ns");
		return ResponseEntity.ok(HttpStatus.OK);	
	}	
	
	
}
