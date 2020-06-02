package vo;

public class PersonVO {
	private String name;
	private int age;
	
	public PersonVO(String name, int age) {
		this.name = name;
		this.age = age;
	}

	public String getName() {
		System.out.println("getName() 호출");
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
	
}
