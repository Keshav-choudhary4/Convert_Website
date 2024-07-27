//console.log(50+"20");
//console.log (true + true);


//var myNumber=9693905869
//var name="keshav"

//console.log(isNaN(myNumber));
//let x=7;
//let y=10;
// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)
// console.log(x%y)
//console.log(x<y && y>x)
//console.log(x<y || x>y)
//console.log(x!=7)
//console.log(x<y && x>y)
// var x=10;
// var y=80;
// var c=x+y;
// console.log(c)

// function sum(x,y=5) {
//      var a;
//      var b;
//     var c = x+y;
//     console.log(c)
// }
//   sum(10,90);


//   function sum1(a,b=5) {
    
//    var m = a+b;
//    console.log(m)
// }
//  sum1(10,90);



//celsius to farenhite funtion
function convert1(){
   
 var c=document.getElementById("kesu").value;
 var f=(c*1.8)+32;
 
  document.getElementById("response1").innerHTML=`${c} &#176C = ${f} F`;
 
}


//meter to km function
function convert2(){
    var meter=document.getElementById("kesumet").value;
    var km=(meter/1000);
    document.getElementById("response3").innerHTML=`${meter} m = ${km} km`;
}




 //marks to percentage function
 function convert3(){
    var sub1=parseInt(document.getElementById("kesu1").value);
     var sub2=parseInt(document.getElementById("kesu2").value);
     var sub3=parseInt(document.getElementById("kesu3").value);
    var sub4=parseInt(document.getElementById("kesu4").value);
   var sub5=parseInt(document.getElementById("kesu5").value);

    var total = (sub1 + sub2 + sub3 + sub4 + sub5);
    var final = (total/5);
     document.getElementById("response2").innerHTML=`You got = ${final}%`;
 }
