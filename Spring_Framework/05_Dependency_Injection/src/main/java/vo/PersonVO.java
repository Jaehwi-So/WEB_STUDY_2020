package vo;

public class PersonVO {
	private String name;
	private int age;
	private String tel;
	
	public PersonVO() {
		System.out.println("=== person 기본생성자 ===");
	}
	public PersonVO(String name, int age, String tel) {
		System.out.println("오버로딩 생성자");
		this.name = name;
		this.age = age;
		this.tel = tel;
	}
	public String getName() {
		return name;
	}

	public void setName(String name) {
		System.out.println("---setName---");
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}
}
