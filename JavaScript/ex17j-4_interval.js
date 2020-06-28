//# 브라우저 내장 객체 interval
var time_ck = 0;

//setInterval : 일정 시간 간격으로 자동으로 반복 실행한다.
var set_time = setInterval(function(){
time_ck++;}
,1000);

//clearInterval : 자동 반복 실행을 멈춘다.
function stop_interval(){
    alert("정지");
    clearInterval(set_time);
}

//일정 시간 후에 코드를 실행 후 종료한다.
var timeout = setTimeout(function(){
    alert("10초 경과");
}, 10000);