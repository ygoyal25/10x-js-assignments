function CreateObject(arr) {
    // Write your code here
    var obj={}
    for(var i=0; i<arr.length; i=i+2){
        obj[arr[i]]=arr[i+1]
    }
    return obj
}

module.exports = CreateObject;
