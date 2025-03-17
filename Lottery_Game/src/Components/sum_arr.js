function sum_array(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum);
    return sum;
}
export {sum_array}