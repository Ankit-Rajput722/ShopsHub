let qa1=1;
let qa2=1;
let qa3=1;
let qa4=1;

let ra=500;
let rb=800;
let rc=200;
let rd=100;

let total1=  0;
let GrandTotal=0;

qa=document.getElementById("qa");
qb=document.getElementById("qb");
qc=document.getElementById("qc");
qd=document.getElementById("qd");

r1=document.getElementById("r1");
r2=document.getElementById("r2");
r3=document.getElementById("r3");
r4=document.getElementById("r4");

total=document.getElementById("total");

GrandT=document.getElementById("GrandT");

document.getElementById("minus1").onclick = function() {m1fun()};
document.getElementById("plus1").onclick = function() {p1fun()};

document.getElementById("minus2").onclick = function() {m2fun()};
document.getElementById("plus2").onclick = function() {p2fun()};

document.getElementById("minus3").onclick = function() {m3fun()};
document.getElementById("plus3").onclick = function() {p3fun()};

document.getElementById("minus4").onclick = function() {m4fun()};
document.getElementById("plus4").onclick = function() {p4fun()};




function p1fun(){
    qa1++; 
    qa.innerText=qa1;
    
    ra=ra+500;
    r1.innerText=ra;

    cfun();
    gfun();
  
}
function m1fun(){
    qa1--;
    qa.innerText=qa1;
   
    ra=ra-500;
    r1.innerText=ra;

    cfun();
    gfun();
}
function p2fun(){
    qa2++;
   qb.innerText=qa2;

   rb=rb+800;
   r2.innerText=rb;

   cfun();
   gfun();
}
function m2fun(){
    qa2--;
    qb.innerText=qa2;

    rb=rb-800;
    r2.innerText=rb;
   
    cfun();
    gfun();
}
function p3fun(){
    qa3++;
 qc.innerText=qa3;

 rc=rc+200;
 r3.innerText=rc;

 cfun();
 gfun();
}
function m3fun(){
    qa3--;  
    qc.innerText=qa3;
   
    rc=rc-200;
 r3.innerText=rc;

 cfun();
 gfun();
}
function p4fun(){
    qa4++;
    qd.innerText=qa4;

    rd=rd+100;
    r4.innerText=rd;
    cfun();
    gfun();
}
function m4fun(){
    qa4--;
    qd.innerText=qa4;

    rd=rd-100;
    r4.innerText=rd;
    cfun();
    gfun();
   
}
function cfun(){
total1=ra+rb+rc+rd;
total.innerText=total1;
}
cfun();

function gfun(){
    GrandTotal=total1+150;
GrandT.innerText=GrandTotal;
}