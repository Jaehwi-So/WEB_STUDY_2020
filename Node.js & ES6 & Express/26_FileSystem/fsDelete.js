const fs = require('fs');

fs.readdir('./folder', (err, dir) => {  //readdir(경로, 콜백) : 폴더 안의 내용을 확인
  if (err) {
    throw err;
  }
  console.log('폴더 내용 확인', dir);
  fs.unlink('./folder/newFile.js', (err) => { //unlink(경로, 콜백) : 파일을 지움, 파일이 없다면 에러 발생
    if (err) { 
      throw err;
    }
    console.log('파일 삭제 성공');
    fs.rmdir('./folder', (err) => { //rmdir(경로, 콜백) : 폴더를 지움, 폴더 안에 파일이 있다면 에러 발생
      if (err) {
        throw err;
      }
      console.log('폴더 삭제 성공');
    });
  });
});