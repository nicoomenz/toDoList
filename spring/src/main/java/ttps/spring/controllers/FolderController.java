package ttps.spring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ttps.spring.clasesDAO.FolderItemDAO;
import ttps.spring.model.FolderItem;

@RestController
public class FolderController {
	
	@Autowired
	private FolderItemDAO folderItemDAO;
	
	@PostMapping(path = "/addFolderItem")
	public ResponseEntity<?> add(@RequestBody FolderItem folderItem){
		long startTime = System.nanoTime();
		folderItemDAO.persistItem(folderItem);		
		long endTime = System.nanoTime();
		System.out.println("Took "+(endTime - startTime) + " ns");
		return ResponseEntity.ok(HttpStatus.OK);	
		
	}	
	
	@PostMapping(path = "/modifyFolderItem")
	public ResponseEntity<?> modify(@RequestBody FolderItem folderItem){	
		long startTime = System.nanoTime();
		folderItemDAO.modifyItem(folderItem);
		long endTime = System.nanoTime();
		System.out.println("Took "+(endTime - startTime) + " ns");
		return ResponseEntity.ok(HttpStatus.OK);	
	}	
	
	@PostMapping(path = "/deleteFolderItem")
	public ResponseEntity<?> delete(@RequestBody FolderItem folderItem){
		long startTime = System.nanoTime();
		folderItemDAO.deleteItem(folderItem);	
		long endTime = System.nanoTime();
		System.out.println("Took "+(endTime - startTime) + " ns");
		return ResponseEntity.ok(HttpStatus.OK);	
	}	
	
	
}

