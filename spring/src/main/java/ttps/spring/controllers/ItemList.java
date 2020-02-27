package ttps.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ttps.spring.clasesDAO.FolderItemDAO;
import ttps.spring.clasesDAO.ItemDAO;
import ttps.spring.model.FolderItem;
import ttps.spring.model.Item;

@RestController
@RequestMapping(path = "/itemsList")
public class ItemList {
	
	@Autowired
	private FolderItemDAO folderItemDAO;
	
	@GetMapping("/{id}")
	public ResponseEntity<List<Item>> listItems(@PathVariable("id") long id){
		long startTime = System.nanoTime();
		FolderItem folder = folderItemDAO.recover(id);
		List<Item> items = folder.getItemList();
		long endTime = System.nanoTime();
		System.out.println("Took "+(endTime - startTime) + " ns");
		return new ResponseEntity<List<Item>>(items, HttpStatus.OK);
	}
		
}
