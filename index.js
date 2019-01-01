var iPhoneData = {
     "color":{
          "color1":"GOLD",
          "color2":"BLACK",
          "color3":"BLUE"
     },
     "specs" :{
    'spec1':'$299.99',
     'spec2' : '$199.99',
     'spec3' : '$99.99'
     }
}

function dispname1(){
     document.getElementById("disp-color").innerHTML = "GOLD";
}
function dispname2(){
     document.getElementById("disp-color").innerHTML = "BLACK";
}
function dispname3(){
     document.getElementById("disp-color").innerHTML = "BLUE";
}
function dispprice1()
{
     document.getElementById("price1").innerHTML = iPhoneData.specs.spec1;
}
function dispprice2()
{
     document.getElementById("price1").innerHTML = iPhoneData.specs.spec2;
}
function dispprice3()
{
     document.getElementById("price1").innerHTML = iPhoneData.specs.spec3;
}
