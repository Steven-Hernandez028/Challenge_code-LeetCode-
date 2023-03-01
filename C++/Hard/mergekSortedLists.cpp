#include <iostream>
#include <vector>
#include <queue>

using namespace std;

struct ListNode
{

    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

struct CompareNode
{
    bool operator()(ListNode *node1, ListNode *node2)
    {
        return node1->val > node2->val;
    }
};

ListNode *mergeKLists(vector<ListNode *> &lists)
{
    priority_queue<ListNode *, vector<ListNode *>, CompareNode> pq;

    for (ListNode *node : lists)
    {
        if (node)
        {
            pq.push(node);
        }
    }

    ListNode *head = new ListNode(0);
    ListNode *tail = head;

    while (!pq.empty())
    {
        ListNode *node = pq.top();
        pq.pop();
        tail->next = node;
        tail = node;
        if (node->next)
        {
            pq.push(node->next);
        }
    }
};aznpkWv@K^M&%3fBA
1029393ste@protonmail.com

int main(){
    ListNode* list1 = new ListNode(1);
    list1->next = new ListNode(4);
    list1->next->next = new ListNode(5);

    ListNode* list2 = new ListNode(1);
    list2->next = new ListNode(3);
    list2->next->next = new ListNode(4);

    ListNode* list3 = new ListNode(2);
    list3->next = new ListNode(6);

vector<ListNode*> lists = {list1, list2, list3};

ListNode* mergedList = mergeKLists(lists);
while(mergedList){
    cout<< mergedList->val <<" ";
    mergedList = mergedList->next;


}
cout << endl;
return 0;

};


