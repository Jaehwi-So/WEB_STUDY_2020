/* 열거형 enum */
// 상수들을 명명하여 나열한 집합을 정의한다. 숫자 혹은 문자열 상수를 대신하여 의미있는 레이블을 부여한다.

/* 숫자 열거형 */
// 숫자 상수에 레이블을 붙인다. 해당 상수를 의미있는 레이블로 치환한다.
enum FileAccess {
    None = 1,   //레이블 = 숫자상수
    Read,
    Write = 4, //특정 숫자 정의
    ReadWrite = Read | Write //연산 가능(예시는 비트 연산)
}

//enum 변수값 숫자 출력
console.log(FileAccess.None, FileAccess.Read, FileAccess.Write, FileAccess.ReadWrite);

//enum 문자열 출력
const action : string = FileAccess[4];
console.log(action);

/* 문자열 열거형 */
// 문자열 열거형은 숫자가 아니므로 자동 증가의 개념은 없으며 각 요소마다 독립된 값을 가진다.
enum Dictionary {
    Apple = "사과",
    Banana = "바나나",
    Grape = "포도"
}
console.log(Dictionary.Apple);