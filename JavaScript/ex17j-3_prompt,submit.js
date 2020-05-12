//#prompt("message") : 질의응답 창을 나타냄. 입력된 답변을 문자열 형태로 반환한다.
function prompt_survey(){
    var age = prompt("당신의 연령은 무엇인가요?");
    var sex = prompt("당신의 성별은 무엇인가요?", "남자")
    var score = prompt("이 노래를 100점 만점에 몇 점만큼 좋아하나요?")

//#confirm("message") : 확인, 취소 창을 나타낼 때 사용한다. true,false값을 반환
    var submit = confirm("제출하시겠습니까?");

    if(submit == true){
        alert("나이 : " + age + " 성별 : " + sex + " 점수 : " + score + " 로 제출되었습니다.");
        alert("경과 시간 : " + time_ck);
    }
}