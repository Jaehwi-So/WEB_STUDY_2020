using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03_Array_and_String_and_Enum
{
    class Ex_String
    {
        string str = "First string";
        string str2 = "Second String";

        public void test_string()
        {
            //문자열 결합
            string str3 = str + " " + str2;

            //부분 문자열
            string str4 = str3.Substring(0, 5);

            //문자열 -> 문자 배열
            char[] chArray = str4.ToCharArray();

            //문자 배열 -> 문자열
            string str5 = new string(chArray);

            System.Console.WriteLine("\n" + str4);
            System.Console.WriteLine(str5);
        }

        public void test_string_builder()
        {
            //StringBuilder 클래스 : 문자열 갱신이 많은 곳에서 사용하기 적절하다. 별도 메모리를 생성, 소멸하지 않고 일정한 버퍼로 문자열 갱신을 효율적으로 처리한다.
            StringBuilder sb = new StringBuilder();
            for(int i = 1; i <= 26; i++)
            {
                sb.Append(i.ToString());
                sb.Append(System.Environment.NewLine);
            }
            string s = sb.ToString();   //stringbuilder의 버퍼를 문자열 형태로 변환
            Console.WriteLine(s);
        }
    }
}
