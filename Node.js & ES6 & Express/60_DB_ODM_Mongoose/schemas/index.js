const mongoose = require('mongoose');

//몽고DB 연결 메서드
const connect = () => {

    //개발 환경일 때만 콘솔을 통해 몽구스가 생성하는 쿼리 내용을 확인할 수 있게 함
    if(process.env.NODE_ENV !== 'production'){
        mongoose.set('debug', true);
    }
    //몽구스와 몽고DB 연결
    mongoose.connect('mongodb://sjh:1111@localhost:27017/admin', {  //몽고db 주소로 접속시도
        dbName: 'test', //admin 데이터베이스가 아닌 test 데이터베이스 사용
        useNewUrlParser: true,  //입력하지 않아도 작동하지만 콘솔경고가 뜨므로 true설정
        useCreateIndex: true,
    }, (error) => {
        if(error){
            console.log("몽고DB Connect Error", error);
        }
        else{
            console.log("몽고DB Connection Success");
        }
    });

    //연결 에러 시 에러 내용 기록
    mongoose.connection.on('error', (error) => {
        console.log('"몽고DB Connect Error', error);
    });

    //연결 종료 시 재연결 시도
    mongoose.connection.on('disconnected', () => {
        console.log('몽고DB 연결이 끊겼습니다. 연결을 시도합니다.');
        connect();
    });
};

module.exports = connect;