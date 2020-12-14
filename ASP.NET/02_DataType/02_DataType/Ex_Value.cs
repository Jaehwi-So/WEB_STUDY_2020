using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02_DataType
{
    public class Ex_Value
    {
        public int globalVar = 10; //필드 : 클래스 내에서 공통적으로 사용하는 전역변수

        public const int MAX = 20000; //상수 : 값 초기화 불가능
        readonly int MIN = -20000;  //readonly를 통한 상수선언

        public void method()
        {
            int localVar = 20;  // 지역변수
        }
    }
}
