function tipCalculator(){
var billamount=document.getElementById('billamount').value;
var noOfPeople=document.getElementById('npeople').value;
var servQlty= document.getElementById('sbill').value;

if(billamount===""||noOfPeople<1){
    alert("Please enter value")
    return;
}
if(billamount===""||noOfPeople===1){
    noOfPeople=1;
    document.getElementById("each").style.display = "none";
}else{
    document.getElementById("each").style.display = "block";
}
var totaltip=(billamount*servQlty)/noOfPeople;

totaltip = Math.round(totaltip * 100) / 100;
totaltip = totaltip.toFixed(2);
document.getElementById("totalTip").style.display = "block";
document.getElementById("billshow").innerHTML = totaltip;
}
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// function showTip(){
//    var tip= tipCalculator();
//    console.log(tip);
//    document.getElementById('billshow').innerHTML="Your tip is Rs:"+tip;
// }