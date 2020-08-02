package config;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Properties;

import org.springframework.core.io.ClassPathResource;

//properties에 key값을 추가하는 클래스
public class PropertyWrite {

	public PropertyWrite(String path) {
		Properties properties = new Properties();
		properties.setProperty("str", "this is value");
		OutputStream os;
		try {
			os = new FileOutputStream(path);
			properties.store(os, null);
			properties.list(System.out);
			os.flush();
			os.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
