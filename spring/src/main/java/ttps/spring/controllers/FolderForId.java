package ttps.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ttps.spring.clasesDAO.FolderItemDAO;
import ttps.spring.clasesDAO.ItemDAO;
import ttps.spring.model.FolderItem;
import ttps.spring.model.Item;

@RestController
@RequestMapping(path = "/folderForId")
public class FolderForId {
	
	@Autowired
	private FolderItemDAO folderItemDAO;
	
	@GetMapping("/{id}")
	public ResponseEntity<?> folderForId(@PathVariable("id") long id){
		
		FolderItem folder =  folderItemDAO.recover(id);
		return new ResponseEntity<FolderItem>(folder, HttpStatus.OK);
	}
		
}
