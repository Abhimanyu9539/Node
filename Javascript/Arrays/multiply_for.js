const nums = [1,2,3,4]
const nums2 = nums.map(myFunction);

function myFunction(value,index, array){
     return value * 2;
}


console.log(nums2);