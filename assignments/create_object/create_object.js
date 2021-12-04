function CreateObject(arr) {
    // Write your code here
    var ans={}
    for (var i=0;i<arr.length;i=i+2)
    {
        ans[arr[i]]=arr[i+1];
    }
    return ans
}

module.exports = CreateObject;
