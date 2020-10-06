const fs = require('fs');


//access() : 폴더나 파일에 접근이 가능한지를 체크함. 
//인수로는 constants를 통해 가져오며 각각(경로, 파일 존재 여부, 읽기 권한 여부, 쓰기 원한 여부)
fs.access('./folder', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
  if (err) {
    if (err.code === 'ENOENT') {    //파일, 폴더가 없거나 권한이 없을 시 에러 코드 'ENOENT'
      console.log('폴더 없음');
      fs.mkdir('./folder', (err) => {   //mkdir() : 폴더를 만드는 메서드
        if (err) {
          throw err;
        }
        console.log('폴더 생성');
        //open() : 파일의 아이디(fd변수)를 가져옴. 해당 아이디를 사용해 fs.read나 write로 읽거나 쓸 수 있음
        //파일이 없다면 파일을 생성한 뒤 아이디를 가져옴.
        //인수(경로, 동작(w:쓰기 r:읽기 a:추가), 콜백)
        fs.open('./folder/file.js', 'w', (err, fd) => { 
          if (err) {
            throw err;
          }
          console.log('빈 파일 생성', fd);
          fs.rename('./folder/file.js', './folder/newFile.js', (err) => {   //rename() : 파일의 이름을 변경함
            if (err) {
              throw err;
            }
            console.log('파일명 변경');
          });
        });
      });
    } else {
      throw err;
    }
  } else {
    console.log('폴더 존재');
  }
});