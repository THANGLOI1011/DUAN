function Reset(){
    document.getElementById("1").value = null;
    document.getElementById("2").value = null;
    document.getElementById("3").value = null;
    document.getElementById("4").value = null;
    document.getElementById("5").value = null;
    document.getElementById("6").value = null;
    document.getElementById("7").value = null;
    document.getElementById("8").value = null;
    document.getElementById("9").value = null;
    document.getElementById("10").value = null;
    document.getElementById("11").value = null;
    document.getElementById("12").value = null;
    document.getElementById("13").value = null;
    document.getElementById("14").value = null;
    document.getElementById("15").value = null;
    document.getElementById("16").value = null;
    document.getElementById("17").value = null;
    document.getElementById("kq1").value = null;
    document.getElementById("kq2").value = null;
    document.getElementById("kq3").value = null;
    document.getElementById("kq4").value = null;
    document.getElementById("kq5").value = null;
    document.getElementById("kq6").value = null;
    document.getElementById("kq7").value = null;
    document.getElementById("kq8").value = null;
    document.getElementById("kq9").value = null;
    document.getElementById("kq10").value = null;
    document.getElementById("kq11").value = null;
    document.getElementById("kq12").value = null;
    document.getElementById("kq13").value = null;
    document.getElementById("kq14").value = null;
    document.getElementById("kq15").value = null;
    document.getElementById("kq16").value = null;
    document.getElementById("kq17").value = null;
    document.getElementById("kq18").value = null;
    document.getElementById("kq19").value = null;
    
    document.getElementById("log").innerText= "";
}
// 
var kq = 0;
function Bang(){
    var a1 =document.getElementById("1").value;
    var a2 =document.getElementById("2").value;
    var a3 =document.getElementById("3").value;
    var a4 =document.getElementById("4").value;
    var a5 =document.getElementById("5").value;
    var a6 =document.getElementById("6").value;
    var a7 =document.getElementById("7").value;
    var a8 =document.getElementById("8").value;
    var a9 =document.getElementById("9").value;
    var a10 =document.getElementById("10").value;
    var a11 =document.getElementById("11").value;
    var a12 =document.getElementById("12").value;
    var a13 =document.getElementById("13").value;
    var a14 =document.getElementById("14").value;
    var a15 =document.getElementById("15").value;
    var a16 =document.getElementById("16").value;
    var a17 =document.getElementById("17").value;
    var a18 =document.getElementById("18").value;
    var a19 =document.getElementById("19").value;

    kq1 = parseFloat(a1) - 89;
    kq2 = parseFloat(a2) - 0;
    kq3 = parseFloat(a3) -89;
    kq4 = parseFloat(a4) - 89;
    kq5 = parseFloat(a5) - 39;
    kq6 = parseFloat(a6) - 108;
    kq7 = parseFloat(a7) - 108;
    kq8 = parseFloat(a8) - 108;
    kq9 = parseFloat(a9) - 180;
    kq10 = parseFloat(a10) - 180;
    kq11 = parseFloat(a11) - 50;
    kq12 = parseFloat(a12) - 50;
    kq13 = parseFloat(a13) - 43;
    kq14 = parseFloat(a14) - 43;
    kq15 = parseFloat(a15) - 43;
    kq16 = parseFloat(a16) - 50;
    kq17 = parseFloat(a17) - 50;
    kq18 = parseFloat(a18) - 312;
    kq19 = parseFloat(a19) - 108;
    check(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,
        kq1,kq2,kq3,kq4,kq5,kq6,kq7,kq8,kq9,kq10,kq11,kq12,kq13,kq14,kq15,kq16,kq17,kq18,kq19)
}
function check(a,b,c){
        // c là giá trị số
        if(isNaN(c)==false){
            document.getElementById("kq1").value = kq1;
            document.getElementById("kq2").value = kq2;
            document.getElementById("kq3").value = kq3;
            document.getElementById("kq4").value = kq4;
            document.getElementById("kq5").value = kq5;
            document.getElementById("kq6").value = kq6;
            document.getElementById("kq7").value = kq7;
            document.getElementById("kq8").value = kq8;
            document.getElementById("kq9").value = kq9;
            document.getElementById("kq10").value = kq10;
            document.getElementById("kq11").value = kq11;
            document.getElementById("kq12").value = kq12;
            document.getElementById("kq13").value = kq13;
            document.getElementById("kq14").value = kq14;
            document.getElementById("kq15").value = kq15;
            document.getElementById("kq16").value = kq16;
            document.getElementById("kq17").value = kq17;
            document.getElementById("kq18").value = kq18;
            document.getElementById("kq19").value = kq19;
            

            document.getElementById("log").innerText="";
            
        }
        else{
            if(isNaN(a)==true && isNaN(b)==true){
                document.getElementById("log").innerText="Vui lòng nhập a và b là 1 giá trị số!";
                document.querySelector("#a").value = null;
                document.querySelector("#b").value = null;
                document.querySelector("#kq").value = null;
            }
            else
            if(isNaN(a)==true){
                document.getElementById("log").innerText="Vui lòng nhập a là 1 giá trị số!";
                document.querySelector("#a").value = null;
                document.querySelector("#kq").value = null;
            }
            else{
                document.getElementById("log").innerText="Vui lòng nhập b là 1 giá trị số!";
                document.querySelector("#b").value = null;
                document.querySelector("#kq").value = null;
            }
        }
}
var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }
