//open("URL", "새 창 이름", "새 창 옵션")
//새창 옵션의 종류
//width : 너비, height : 높이 / left : x축 위치, top : y축 위치
//scrollbars : 스크롤바의 숨김, 노출(no, yes)
//location : 새 창의 주소 입력 영역의 숨김, 노출
//status : 새 창의 상태 표시줄 영역의 숨김, 노출
//toolbars : 새 창의 도구상자 영역의 숨김, 노출
function popup_open(scr){
    alert_open();
    window.open(scr, "팝업창", "width=800, height=400, left=300, top=50, scrollbars=yes");
}

function popup_close(){
    //alert("창을 닫습니다.");
    alert_close();
    window.close();
}
