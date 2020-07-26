package ex;

import java.util.Map;

public class MyMap {
	public Map<String, String> map;
	
	public MyMap() {}
	
	public MyMap(Map<String, String> map) {
		this.map = map;
	}
	
	public Map<String, String> getMap() {
		return map;
	}
	
	public void setMap(Map<String, String> map) {
		this.map = map;
	}
	
}
