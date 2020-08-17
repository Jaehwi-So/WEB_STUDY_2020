package conf;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


//servlet-context.xml에 해당하는 자식 어플리케이션 컨텍스트 구현. @Configuration을 통해 설정파일임을 명시해준다.
@ComponentScan({"controller"})
//EnableWebMvc는 어노테이션 설정 방식을 활용하겠다는 <annotation-driven> 역할을 해 준다.
@EnableWebMvc
@Configuration
//servlet-context에서 할 수 있는 설정들을 WebMvcConfiguer 인터페이스의 메서드들을 구현하여 사용한다.
public class WebContextConfig extends WebMvcConfigurerAdapter{

	//view resolver의 역할을 한다.
	@Override
	public void configureViewResolvers(ViewResolverRegistry registry) {
		InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
		viewResolver.setPrefix("/WEB-INF/views/");
		viewResolver.setSuffix(".jsp");
		registry.viewResolver(viewResolver);
		
	}
	
}
