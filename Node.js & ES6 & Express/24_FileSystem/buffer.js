//파일을 읽거나 쓰는 방식에는 크게 두가지 방식이 있다.
//버퍼를 이용하는 방식과 스트림을 이용하는 방식
//ex)영상에서의 버퍼링과 스트리밍
//버퍼링 : 영상을 재생할 때 까지 데이터를 모으는 동작
//스트리밍 : 영상 데이터를 조금씩 전송하는 동작. 
//전송이 너무 느리면 최소한의 데이터를 모아야 하고 재생속도보다 전송속도가 빠르면 
//데이터를 저장할 공간이 필요하므로 스트리밍 과정에서 버퍼링이 필요할 수도 있다.

//원본 데이터가 버퍼에 저장되고 일정량이 모이면 데이터가 전송
//버퍼를 직접 다룰 수 있는 클래스가 있다.
const buffer = Buffer.from("버퍼로 변경");  //문자열을 버퍼로 변경한다.
console.log(buffer, buffer.length, buffer.toString());  //toString() : 버퍼를 다시 문자열로 변경한다.

const buffers = [Buffer.from("버퍼"), Buffer.from("합치기"), Buffer.from("concat")];
const buffer_concat = Buffer.concat(buffers);   //concat() : 배열안에 든 버퍼들을 하나로 합친다.
console.log(buffer_concat, buffer_concat.toString());

const buffer_alloc = Buffer.alloc(10);  //alloc(10) : 10바이트의 빈 버퍼 생성
console.log(buffer_alloc);

