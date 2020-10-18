// 몽구스 스키마 정의

const mongoose = require('mongoose');

const { Schema } = mongoose;
//몽구스 모듈에서 Schema 생성자를 사용해 스키마를 만든다.
const userSchema = new Schema({
    //몽구스는 기본으로 _id를 기본키로 생성하므로 _id필드는 적어줄 필요 x
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    married: {
        type: Boolean,
        required: true
    },
    comment: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});
//몽구스 스키마의 자료형 
//String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array

//model 메서드로 스키마와 몽고DB 컬렉션을 연결하는 모델을 만든다.
module.exports = mongoose.model('User', userSchema);
//(몽고DB의 컬렉션, 스키마)의 형태로 컬렉션 이름은 단수적 표현으로 넣으며, 자동으로 복수형태로 변환하여 사용한다.
//users 컬렉션을 생성하여 사용하게 된다.
//이러한 강제 개명이 싫다면 세번째 인수로 컬렉션 이름을 지정할 수 있다.
//mongoose.mode('User', userSchema, 'user_table');
