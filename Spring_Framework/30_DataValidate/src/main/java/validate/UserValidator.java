package validate;

import java.util.regex.Pattern;

import javax.xml.bind.JAXBException;
import javax.xml.bind.PropertyException;
import javax.xml.bind.ValidationEventHandler;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import vo.UserVO;


public class UserValidator implements Validator{

	@Override
	public boolean supports(Class<?> clazz) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void validate(Object target, Errors errors) {
		UserVO vo = (UserVO) target; 
		String email_regex = "^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\\.[a-zA-Z]{2,3}$";
		String int_regex = "^[0-9]*$";
		
		if(!Pattern.matches(email_regex, vo.getEmail())) {
			errors.rejectValue("email", "not matched type");
			System.out.println("error email");
		}
		if(vo.getName() == null || vo.getName() == "") {
			errors.rejectValue("name", "not matched type");
			System.out.println("error name");
		}
		if(vo.getAge() == null || !Pattern.matches(int_regex, vo.getAge())) {
			errors.rejectValue("age", "not matched type");
			System.out.println("error age");
		}
	}
		
}
