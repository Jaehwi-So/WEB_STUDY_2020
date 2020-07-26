package ex;

import java.util.List;

public class MyList {
	public List<String> list;

	public MyList() {};
	public MyList(List<String> list) {
		this.list = list;
	};

	public List<String> getList() {
		return list;
	}

	public void setList(List<String> list) {
		this.list = list;
	}

	
}
