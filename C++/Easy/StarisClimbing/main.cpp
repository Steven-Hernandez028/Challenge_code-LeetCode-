#include <iostream>

using namespace std;

int main()
{
        int n1 = 0, n2 = 1, result = 0;
            for(int i =1; i<=9;i++){
                result = n1 +n2;
                n1 = n2;
                n2 = result;

            }
            cout<<result<<endl;

}
