using System.Text;

namespace easy
{
    public class method
    {

        public static bool powerOfTwo(int number)
        { 
            if (number == 1) return true;
            do
            {
                if (number % 2 != 0  || number == 0) return false;
                number = number / 2;
            } while (number != 1);

            return true;
        }
    }
}