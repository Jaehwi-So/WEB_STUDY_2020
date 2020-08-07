package test;

public class PrototypeClass {
	private String name;
	private String age;
	public PrototypeClass() {
		System.out.println("prototype class 생성");
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	
}
