
// arrow functions //

function demo(a,b,c,d,e)
{
    console.log(a+b+c+d+e)
    return a-b-c-d-e
}
console.log(demo(10,20,30,40,50))

// two numbers of arrow function 
var x=() =>y();
var y=() =>"javaScript is Awesome"
console.log(x());

 var demo1 = () =>console.log("hello world");
    demo1();

    var demo2 = a =>console.log(a+10);
    demo2(10);

    var demo3 = (a,b)=>{
        console.log(a+b)
    }
    demo3(10,20);

var demo4 = () => "hello aravind";
console.log(demo4());

// var demo5 =str=> str.to lowerCase();
// console.log(demo5("hello beautiful"));

var demo6=(a,b)=> a+b
console.log(demo6(10,10));
