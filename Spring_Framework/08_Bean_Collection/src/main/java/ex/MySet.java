package ex;

import java.util.Set;

public class MySet {
	public Set<String> set;
	
	public MySet() {}
	
	public MySet(Set<String> set) {
		this.set = set;
	}
	
	public Set<String> getSet() {
		return set;
	}

	public void setSet(Set<String> set) {
		this.set = set;
	}
	
}
