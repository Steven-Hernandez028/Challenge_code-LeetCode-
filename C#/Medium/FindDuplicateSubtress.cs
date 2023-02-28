public class Solution {
    public IList<TreeNode> FindDuplicateSubtrees(TreeNode root) {
        var map = new Dictionary<string, int>(); 
    var result = new List<TreeNode>(); 
    
    Traverse(root, map, result); 
    
    return result;
    }

    private string Traverse(TreeNode node, Dictionary<string, int> map, List<TreeNode> result) {
    if (node == null) {
        return "#"; 
    }
    
    string key = $"{node.val},{Traverse(node.left, map, result)},{Traverse(node.right, map, result)}";
    

    if (!map.ContainsKey(key)) {
        map[key] = 0;
    }
    map[key]++;

    if (map[key] == 2) {
        result.Add(node);
    }
    
    return key; 
}
}