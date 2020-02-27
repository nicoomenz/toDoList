package ttps.spring.clasesDTO;

public class ItemDTO {
	
	private long idFolder;
	private String description;
	
	public ItemDTO() {
		super();
	}

	public ItemDTO(long idFolder, String description) {
		super();
		this.idFolder = idFolder;
		this.description = description;
	}
	
	public long getIdFolder() {
		return idFolder;
	}
	public void setIdFolder(long idFolder) {
		this.idFolder = idFolder;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

}
