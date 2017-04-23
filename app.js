var res= 0;
var result = 0;
//using for loop
function myFunction1(){
	var i;
	for(i=1;i<=1000;i++){
		res+=i;
	}
	console.log(res);
	document.getElementById("myId1").innerHTML=res;
}
//using while loop
	function myFunction2(){
	var j = 1;
	while(j<=1000){
		result+=j;
		j++;
	}
	console.log(result);
	document.getElementById("myId2").innerHTML=result;
}