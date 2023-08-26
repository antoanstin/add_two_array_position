var a=[1,0,2,3,4];
var b=[3,5,6,7,8,13];
var arr=[];
function sum(array1,array2){
      for(i=0;i<array2.length;i++){
		  arr.push((array1[i]||0)+(array2[i]||0))
	  }
      return arr
}

console.log(sum(a,b));