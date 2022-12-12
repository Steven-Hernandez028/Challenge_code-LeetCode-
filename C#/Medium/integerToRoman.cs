using System.Text;

namespace medium
{

    public class method
    {

        public static string intToRom(int number)
        {
            var NumList = new Dictionary<int, string>()
            {
                {1000, "M"},  {900, "CM"},{500, "D"}, {400,"CD"},
                {100, "C"}, {90, "XC"}, {50, "L"}, {40, "XL"}, {10, "X"},
                {9, "IX"}, {5, "V"}, {4,"IV"}, {1, "I"}
            };

            var res = new StringBuilder();

                do{
                    foreach(var values in  NumList){
                        if(number - values.Key >= 0){
                            res.Append(values.Value);
                            number -= values.Key;
                            break;
                        }
                    }
                }while(number >0 );
             return res.ToString();
        }
    }
}