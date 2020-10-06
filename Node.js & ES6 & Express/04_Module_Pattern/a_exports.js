`use strict`
function edit(){}
function write(){}
class update{

}

//# module.exports를 통해 다른 파일에서 require에서 필요한 엘리먼트들을 내보낼 수 있다.
module.exports = {
    edit : edit,
    write,
    id : 'sjh',
    hello : () => {
        console.log("hello node");
    },
    update : update
}

//하나만 export 할 시
//module.exports = write
//module.exports = update