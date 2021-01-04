/* 배열의 선언 */
let scores : number[] = [1, 2, 3];
let names : Array<string> = ["kim", "lee", "park"];
console.log(scores);
console.log(names);

class Member{
    name : string;
    age : number;
    constructor(name : string, age : number){
        this.name = name,
        this.age = age
    }
}
let members : Member[] = [new Member("kim", 20), new Member("lee", 22)];    //클래스 타입
console.log(members);