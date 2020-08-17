package conf;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

//root-context.xml에 해당하는 웹 어플리케이션 컨텍스트 구현. @Configuration을 통해 설정파일임을 명시해준다.
@Configuration
//ComponentScan을 통해 dao, service패키지에 있는 클래스들의 빈 생성
@ComponentScan(basePackages = { "dao", "service"})
public class RootContextConfig {

}
