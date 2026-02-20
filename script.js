function calculateROI(){
let i=parseFloat(document.getElementById("investment").value);
let r=parseFloat(document.getElementById("revenue").value);
let result=document.getElementById("result");
if(i<=0||isNaN(i)||isNaN(r)){result.innerHTML="Enter valid numbers";return;}
let roi=((r-i)/i)*100;
result.innerHTML="ROI: "+roi.toFixed(2)+"%";
}

function calculateProfit(){
let revenue=parseFloat(document.getElementById("rev").value);
let cost=parseFloat(document.getElementById("cost").value);
document.getElementById("result").innerHTML="Profit: "+(revenue-cost).toFixed(2);
}

function calculateBreakEven(){
let fixed=parseFloat(document.getElementById("fixed").value);
let price=parseFloat(document.getElementById("price").value);
let variable=parseFloat(document.getElementById("variable").value);
let result=fixed/(price-variable);
document.getElementById("result").innerHTML="Break-even units: "+result.toFixed(0);
}

function calculateLoan(){
let amount=parseFloat(document.getElementById("amount").value);
let rate=parseFloat(document.getElementById("rate").value)/100/12;
let years=parseFloat(document.getElementById("years").value)*12;
let payment=(amount*rate)/(1-Math.pow(1+rate,-years));
document.getElementById("result").innerHTML="Monthly Payment: "+payment.toFixed(2);
}

function calculateInvestment(){
let principal=parseFloat(document.getElementById("principal").value);
let rate=parseFloat(document.getElementById("irate").value)/100;
let years=parseFloat(document.getElementById("iyears").value);
let total=principal*Math.pow((1+rate),years);
document.getElementById("result").innerHTML="Future Value: "+total.toFixed(2);
}

function calculateVAT(){
let price=parseFloat(document.getElementById("pricevat").value);
let vat=parseFloat(document.getElementById("vat").value)/100;
let total=price+(price*vat);
document.getElementById("result").innerHTML="Price with VAT: "+total.toFixed(2);
}

