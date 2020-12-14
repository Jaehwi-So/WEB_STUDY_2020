using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03_Array_and_String_and_Enum
{
    class Ex_Array
    {
        /* 1차원 배열 선언 */
        string[] colors = new string[3];    
        string[] fruits = { "apple", "grape", "orange" };
        int[] numbers = { 1, 2, 3, 4 };
        public void init_color()
        {
            this.colors[0] = "red";
            this.colors[1] = "blue";
            this.colors[2] = "yellow";
        }

        /* 2차원 배열 선언 */
        int[,] arr = { { 1, 2 }, { 3, 4 } };
        int[,] arr2 = new int[2, 2];
        public void init_arr2()
        {
            this.arr2[0, 0] = 1;
            this.arr2[0, 1] = 2;
            this.arr2[1, 0] = 3;
            this.arr2[1, 1] = 4;
        }

        /* 3차원 배열 선언 */
        int[,,] arr3 = { { { 1, 2 }, { 3, 4 } }, { { 5, 6 }, { 7, 8 } } };

        /* 가변 배열 선언 */
        int[][] arr4 = new int[3][];    //1차원 배열의 크기는 명시해야 한다.

        public void init_arr4()
        {
            this.arr4[0] = new int[2];
            this.arr4[1] = new int[4] { 1, 2, 3, 4 };
            //this.arr4[2] = { 1, 2, 3, 4 }; 불가능
            this.arr4[2] = new int[3] { 5, 6, 7 };

            this.arr4[0][0] = 10;
            this.arr4[0][1] = 20;
        }

        public int calc(int[] array)
        {
            int sum = 0;
            for(int i = 0; i < array.Length; i++)
            {
                sum += array[i];
                array[i] = 0;
            }
            return sum;
        }

        //main
        static void Main(string[] args)
        {
            Ex_Array ex1 = new Ex_Array();
            ex1.init_color();
            ex1.init_arr2();
            ex1.init_arr4();
            System.Console.WriteLine(ex1.colors[1]);
            System.Console.WriteLine(ex1.arr2[0, 1]);
            System.Console.WriteLine(ex1.arr4[1][1]);
            System.Console.WriteLine(ex1.arr4[0][1]);

            System.Console.WriteLine(ex1.arr4.Length);
            System.Console.WriteLine(ex1.arr4[0].Length);

            /* 반복문에서의 배열 */
            for (int i = 0; i < ex1.arr4.Length; i++)
            {
                for(int j = 0; j < ex1.arr4[i].Length; j++)
                {
                    System.Console.Write(ex1.arr4[i][j] + " ");
                }
                System.Console.WriteLine();
            }

            //Call by Reference, 배열 전체를 가리키는 참조 값 전달.
            System.Console.WriteLine(ex1.calc(ex1.numbers));    
            for (int i = 0; i < ex1.numbers.Length; i++)
            {
                System.Console.Write(ex1.numbers[i] + " "); //모두 0으로 초기화되어있다.
            }

            Ex_String ex2 = new Ex_String();
            ex2.test_string();
            ex2.test_string_builder();

            Ex_Enum ex3 = new Ex_Enum();
            ex3.test_enum();
            ex3.test_flag_enum();
        }
    }
}
