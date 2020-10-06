const fs = require('fs');

const readStream = fs.createReadStream('./test_read.txt');
//readStream으로 파일을 읽고 그 스트림을 전달받아 파일을 쓸 수 있다.
//스트림끼리 연결되는 것을 파이핑한다고 표현한다.
const writeStream = fs.createWriteStream('./test_write.txt');
readStream.pipe(writeStream);

//pipe는 스트림들 사이에 여러번 연결이 가능하다.
//파일을 읽은 후 gzip방식으로 압축을 거친 후 파일로 써진다.
const zlib = require('zlib');
const rs = fs.createReadStream("./test.txt");
const zlibStream = zlib.createGzip();
const ws = fs.createWriteStream('./test.txt.gz');
rs.pipe(zlibStream).pipe(ws);

//일반적으로 스트림을 사용하여 파일을 복사하면 메모리가 절약되고 큰 파일을 조각내어 작은 버퍼 단위로 옮기기 때문에 효과적으로 데이터를 전송할 수 있다.
//따라서 용량이 큰 파일들을 전송할 때 스트림을 사용한다.