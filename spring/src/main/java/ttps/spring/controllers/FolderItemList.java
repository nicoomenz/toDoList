package ttps.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ttps.spring.clasesDAO.FolderItemDAO;
import ttps.spring.model.FolderItem;

@RestController
@RequestMapping(path = "/folderItemsList")
public class FolderItemList {
	
	@Autowired
	private FolderItemDAO folderItemDAO;
	
	@GetMapping()
	public ResponseEntity<List<FolderItem>> listItems(){
		long startTime = System.nanoTime();
		List<FolderItem> items = folderItemDAO.listar();
		long endTime = System.nanoTime();
		System.out.println("Took "+(endTime - startTime) + " ns");
		return new ResponseEntity<List<FolderItem>>(items, HttpStatus.OK);
	}
		
}
