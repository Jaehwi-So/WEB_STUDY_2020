const fs = require('fs');

const rs = fs.createReadStream('./test.txt', { highWaterMark: 16 });    //16B 단위로 읽는다.
const data = [];

//이벤트 리스너. chunk는 16b 단위로 파일의 끝까지 chunk 단위로 읽어들인다.
rs.on('data', (chunk) => {
  data.push(chunk);
  console.log('data :', chunk, chunk.length);
});

rs.on('end', () => {
  console.log('end :', Buffer.concat(data).toString());
});

rs.on('error', (err) => {
  console.log('error :', err);
});

