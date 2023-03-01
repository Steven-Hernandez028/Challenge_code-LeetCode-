#include <vector>
#include <string>

using namespace std;

void generateParentheses(int n, int open, int close, string current, vector<string>& result){

    if (open ==n && close == n){
        result.push_back(current);
        return;
    }
    if( open < n){
        generateParentheses(n, open+1, close, current + "(", result);
    }
    if(close < open){
        generateParentheses(n, open, close + 1, current + ")", result);
    }

}

vector<string>  generateParentheses(int n){
    vector<string> result;
    generateParentheses(n, 0,0, "", result);
    return result;
}