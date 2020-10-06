const fs = require('fs');

//copyFile(복사할 파일, 복사될 경로, 콜백) : 파일 복사 메서드
fs.copyFile('origin.txt', 'origin_copy.txt', (error) => {
  if (error) {
    return console.error(error);
  }
  console.log('복사');
});

//watch(경로, 콜백(이벤트타입, 파일명)) : 파일의 변경 사항(이벤트 발생)을 감시
fs.watch('origin.txt', (eventType, fileName) => {
  console.log(eventType, fileName);
})