package vo;
public class PersonVO {
	private String first_name;
	private String last_name;
	private int age;
	
	public PersonVO(String fn, String ln, int age) {
		this.first_name = fn;
		this.last_name = ln;
		this.age = age;
	}
	
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	
}
