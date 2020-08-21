package dto;

import java.io.Serializable;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size; 
/*
직접 검증을 하고 싶을 때 사용 
@AssertTrue
@AssertFalse
/**
문자열을 다룰 때 사용
@NotNull // null 불가능
@NotEmpty // null, 빈 문자열(스페이스 포함X) 불가
@NotBlank // null, 빈 문자열, 스페이스만 포함한 문자열 불가
@Size(min=?, max=?) // 최소 길이, 최대 길이 제한
@Null // null만 가능 
 숫자를 다룰 때 사용
@Positive // 양수만 허용
@PositiveOrZero // 양수와 0만 허용
@Negative // 음수만 허용
@NegativeOrZero // 음수와 0만 허용
@Min(?) // 최소값 제한
@Max(?) // 최대값 제한
 정규식 관련
@Email // 이메일 형식만가능 (기본 제공)
@Pattern(regexp="?") // 직접 정규식을 쓸 수 있음
 */
public class UserDTO implements Serializable {

    @NotBlank(message = "이름을 입력해주세요.")
    @Size(min = 2, max = 8, message = "이름을 2~8자 사이로 입력해주세요.")
    private String name;

    @Pattern(regexp="[a-zA-Z1-9]{6,12}", message = "나이는 정수로 입력해주세요")
    private String age;
    
    @NotBlank(message = "이메일을 입력해주세요.")
    @Email(message = "이메일 형식을 확인하세요")
    private String email;

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
}