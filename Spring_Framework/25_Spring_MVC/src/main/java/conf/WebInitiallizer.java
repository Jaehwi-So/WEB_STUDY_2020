package conf;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

//web.xml에 해당하는 설정파일을 대신한다. Initializer 클래스를 사용해 Servlet-context를 프로그램에서 설정하고
//DispatcherServlet과 ContextLoaderListener를 서블릿 컨텍스트에 등록한다.
//자바 기반 설정을 하기 위해서 pom.xml에서 스프링 버전과 서블릿 설정을 변경해준다.
public class WebInitiallizer extends AbstractAnnotationConfigDispatcherServletInitializer{

	//루트 웹 애플리케이션 컨텍스트에 등록될 root-context에 해당하는 Configuration을 반환해준다. 
	//AbstractAnnotationConfigDispatcherServletInitializer는
	//ContextLoaderListener의 인스턴스를 루트 웹 애플리케이션 컨텍스트에 제공한다.
	@Override
	protected Class<?>[] getRootConfigClasses() {
		return new Class[] { RootContextConfig.class };
	}

	//자식 웹 애플리케이션 컨텍스트에 등록될 servlet-context에 해당하는 Configuration을 반환해준다.
	//AbstractAnnotationConfigDispatcherServletInitializer는
	//Dispatcher Servlet의 인스턴스를 자식 웹 애플리케이션 컨텍스트에 제공한다.
	@Override
	protected Class<?>[] getServletConfigClasses() {
		return new Class[] { WebContextConfig.class };
	}

	//DispatcherServlet의 서블릿 매핑을 지원한다.
	@Override
	protected String[] getServletMappings() {
		return new String[] { "/" };
	}
	
}
