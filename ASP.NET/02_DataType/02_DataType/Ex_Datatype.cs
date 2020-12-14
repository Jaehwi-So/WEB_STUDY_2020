using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02_DataType
{
    class Ex_Datatype
    {
        /* 자료형 */
        byte by = 12;   //byte : 1byte
        short sh = -12345;  //short : 2byte
        int i = -12345;  //int : 4byte
        long l = 1234L; //long(L을 붙여 int type이 아닌 long임을 명시) : 8byte
        float f = 123.45F;  //float(F를 붙여 double type이 아닌 float임을 명시) : 4byte
        double d1 = 123.45; //double : 8byte
        double d2 = 123D;    //double(D를 붙여 int type이 아닌 double임을 명시)
        bool b = true;  // boolean 
        decimal d = 123.45M; //decimal(M을 붙여 decimal type임을 명시) : 16byte

        char ch = 'a';  //char : 2byte 유니코드 문자
        char ch2 = (char)72;
        string str = "hello";   //string
        int? null_val = null;   //Nullable type : ?를 붙여 null을 허용하는 형태의 자료형으로 만든다.

        //unsigned : 0부터 양수 범위 
        sbyte sby = 12;
        ushort us = 10;
        uint ui = 15;
        ulong ul = 18;
        static void Main(string[] args)
        {
            Ex_Datatype ex1 = new Ex_Datatype();
            Ex_Value ex2 = new Ex_Value();
            System.Console.WriteLine(ex1.ch);
            System.Console.WriteLine(ex2.globalVar);
            System.Console.WriteLine(Ex_Value.MAX);
            ex2.method();
        }
    }
}
