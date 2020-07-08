let num = 0;
 
function incrementNum() {
    console.log("working")
    num = num + 1;
    document.getElementById("result").innerHTML =num;
} 

function decrementNum() {
    console.log("working")
    num=num-1;
    document.getElementById("result").innerHTML = num;
} 

function plusTen() {
    console.log("working")
    num=num+10;
    document.getElementById("result").innerHTML = num;
} 

function minusTen() {
    console.log("working")
    num=num-10;
    document.getElementById("result").innerHTML = num;
} 

function plusHundred() {
    console.log("working")
    num=num+100;
    document.getElementById("result").innerHTML = num;
} 

function minusHundred() {
    console.log("working")
    num=num-100;
    document.getElementById("result").innerHTML = num;
} 

function reset() {
    console.log("working")
    num = 0;
    document.getElementById("result").innerHTML = num;
} 

function double() {
    console.log("working")
    num = num*2;
    document.getElementById("result").innerHTML = num;
} 