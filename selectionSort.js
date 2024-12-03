let arr=[89,34,1,10,55]
for(let i=0;i<arr.length;i++){
    let index=i;
    for(let j=i+1;j<arr.length;j++){
        if(arr[index]>arr[j]){
           index=j
        }
    }
    if(i!=index){
        let temp=arr[i]
        arr[i]=arr[index]
        arr[index]=temp
    }
}
console.log(arr);
