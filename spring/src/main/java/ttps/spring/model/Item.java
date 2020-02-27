package ttps.spring.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;



@Entity
public class Item {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private FolderItem myFolder;
	
	private String description;
	
	public Item() {
		super();
	}

	public Item(String descripcion) {
		super();
		this.description = descripcion;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescripcion(String description) {
		this.description = description;
	}
	
	public FolderItem getMyFolder() {
		return myFolder;
	}

	public void setMyFolder(FolderItem myFolder) {
		this.myFolder = myFolder;
	}

	@Override
	public String toString() {
		return "description: " + this.getDescription();
	}
	
}
