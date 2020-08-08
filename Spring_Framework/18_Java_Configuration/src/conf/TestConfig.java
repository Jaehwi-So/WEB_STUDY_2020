package conf;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import service.InfoService;
//xml 설정파일을 자바 클래스로 구현할 수 있다. 
//이를 위해 설정파일임을  @Configuration을 통해 명시하며 @ComponentScan으로	
//<context:component-scan base-package="service, vo"/>를 대체한다.

@ComponentScan({"service", "vo"})
@Configuration
public class TestConfig {
	
	/* 빈의 생성은 @Bean을 통해서 인스턴스를 생성한다.
	 * <bean id="infoServiceBean" class="service.InfoService"> <property
	 * name="service" ref="studentServiceDetailBean"></property> </bean>
	 * 반환형은 생성하고자 하는 빈의 클래스, 함수명은 빈의 id에 해당하는 이름을 사용한다. */
	@Bean
	public InfoService infoServiceBean() {	
		return new InfoService();
	}
}
