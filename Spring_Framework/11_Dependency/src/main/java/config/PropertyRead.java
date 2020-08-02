package config;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

//properties에 key값을 읽어들이는 클래스
public class PropertyRead {
	public String res;

	public PropertyRead(String path) {
		Properties properties = new Properties();
		try {
			properties.load(new FileReader(path));
			this.res = properties.getProperty("str");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	}
	
	public String getRes() {
		return res;
	}
}
