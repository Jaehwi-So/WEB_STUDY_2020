using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03_Array_and_String_and_Enum
{
    class Ex_Enum
    {
      /* Enum : 열거형 상수를 표현. 상수를 의미있는 데이터로 표현하는 것이 목적*/
        public enum Rank
        {
            Bronze, //0
            Silver, //1
            Gold,   //2
            Platinum,   //3
            Diamond = 10,   //10
            Challenger = 100    //100
        }

        public void test_enum()
        {
            //enum 타입에 값 대입
            Rank rank = Rank.Gold;

            //enum을 int로 캐스팅
            int rankValue = (int)rank;

            System.Console.WriteLine(rank + "" + rankValue);

            if(rank == Rank.Gold)
            {
                System.Console.WriteLine("this is gold");
            }
        }

        /* flag enum : 각 멤버들은 비트별로 구분되는 값들을 가 */
        [Flags]
        public enum Border
        {
            None = 0,
            Top = 1,
            Right = 2,
            Bottom = 4,
            Left = 8
        }

        public void test_flag_enum()
        {
            // OR 연산자로 다중 플래그 할당
            Border b = Border.Top | Border.Bottom;  //다중 값을 표현한다.

            // & 연산자 혹은 HasFlag()를 통해 플래그 체크
            if ((b & Border.Top) != 0)
            {
                if (b.HasFlag(Border.Bottom))
                {
                    Console.WriteLine(b.ToString());    //Top, Bottom
                }
            }
        }


    }
}
