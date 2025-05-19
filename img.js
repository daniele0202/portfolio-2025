// var obj = document.getElementById("div-img");
// obj.style.backgroundColor = "rgb(53, 51, 51)";
//var link = document.getElementById("link").style.display = "none";

function cor1(){
    var obj = document.getElementById("div-img");
    var img = document.getElementById("imgg");
    var link = document.getElementById("link")
    // document.getElementById("texto").style.margin = '20px auto'

    document.getElementById("texto").style.marginTop = '100px'

    obj.style.backgroundColor = "rgba(195, 128, 197, 0.541)";
   
    img.style.display = "none";
    link.style.color = "#fff"
   
    link.style.cssText =
   'margin: 0px auto ; ' +
   'color: #000;' +
   'background-color: #fff;' +
   'padding: 10px ;' +
   'line-height: 2.9;' +
    'border-radius: 5px ';
   
}

function cor2(){
    var obj = document.getElementById("div-img");
    var img = document.getElementById("imgg");
  //  var text = document.getElementById("texto")
   var link = document.getElementById("link")
   document.getElementById("texto").style.margin = '0px auto'
    obj.style.backgroundColor = "rgb(53, 51, 51)";
    
    link.style.cssText =
   'margin: 250px auto 0; ' +
   'color: rgba(255, 255, 255, 0);' ;
    img.style.display = "block";
}


function mouseOver(){

    var obj1 = document.getElementById("div-img");
    //var img = document.getElementById("imgg");
 
   // text.addEventListener("mouseover", cor1);
    obj1.addEventListener("mouseover", cor1);
    
}

function mouseOut(){

    var obj = document.getElementById("div-img");
    // var img = document.getElementById("imgg");
  //  var text = document.getElementById("texto")

    obj.addEventListener("mouseout", cor2);
}



// 2 outro -------------------------------------------------------


function cor4(){
    var obj = document.getElementById("div-img1");
    var img1 = document.getElementById("imgg1");
    var link1 = document.getElementById("link1")
    
    document.getElementById("texto1").style.marginTop = '100px'



    obj.style.backgroundColor = "rgba(195, 128, 197, 0.541)";
    img1.style.display = "none";
   // link1.style.color = "rgba(255, 255, 255, 0);"
    
    link1.style.cssText =
   'margin: 0px auto ; ' +
   'color: #000;' +
   'background-color: #fff;' +
   'padding: 10px ;' +
   'line-height: 2.9;' +
    'border-radius: 5px ';

}

function cor6(){
    var obj = document.getElementById("div-img1");
    var img1 = document.getElementById("imgg1");
    var link1 = document.getElementById("link1")
    document.getElementById("texto1").style.margin = '0px auto'
     
    obj.style.backgroundColor = "rgb(53, 51, 51)";
    img1.style.display = "block";
   
    link1.style.cssText =
   'margin: 250px auto 0; ' +
   'color: rgba(255, 255, 255, 0);' ;
}

function mouseOver1(){

    var obj = document.getElementById("div-img1");
    obj.addEventListener("mouseover", cor4);
}

function mouseOut1(){

    var obj = document.getElementById("div-img1");

    obj.addEventListener("mouseout", cor6);
}


//outro 3---------------------------------------------------

function cor7(){
    var obj = document.getElementById("div-img2");
    var img2 = document.getElementById("imgg2");
    var link2 = document.getElementById("link2")
    
    document.getElementById("texto2").style.marginTop = '100px'
    obj.style.backgroundColor = "rgba(195, 128, 197, 0.541)";
   
    img2.style.display = "none";
    link2.style.color = "#fff"
   
    link2.style.cssText =
   'margin: 0px auto ; ' +
   'color: #000;' +
   'background-color: #fff;' +
   'padding: 10px ;' +
   'line-height: 2.9;' +
    'border-radius: 5px ';
   
}

function cor8(){
    var obj = document.getElementById("div-img2");
    var img2 = document.getElementById("imgg2");

   var link2 = document.getElementById("link2")
   document.getElementById("texto2").style.margin = '0px auto'
    obj.style.backgroundColor = "rgb(53, 51, 51)";
    
    link2.style.cssText =
   'margin: 250px auto 0; ' +
   'color: rgba(255, 255, 255, 0);' ;
    img2.style.display = "block";

}


function mouseOver2(){

    var obj = document.getElementById("div-img2");

    obj.addEventListener("mouseover", cor7);
    
}

function mouseOut2(){

    var obj = document.getElementById("div-img2");
    obj.addEventListener("mouseout", cor8);
}




//outro 4---------------------------------------------------

function cor9(){
    var obj = document.getElementById("div-img3");
    var img3 = document.getElementById("imgg3");
    var link3 = document.getElementById("link3")
    
    document.getElementById("texto3").style.marginTop = '100px'
    obj.style.backgroundColor = "rgba(195, 128, 197, 0.541)";
   
    img3.style.display = "none";
    link3.style.color = "#fff"
   
    link3.style.cssText =
   'margin: 0px auto ; ' +
   'color: #000;' +
   'background-color: #fff;' +
   'padding: 10px ;' +
   'line-height: 2.9;' +
    'border-radius: 5px ';
   
}

function cor10(){
    var obj = document.getElementById("div-img3");
    var img3 = document.getElementById("imgg3");
    var link3 = document.getElementById("link3")
   document.getElementById("texto3").style.margin = '0px auto'
    obj.style.backgroundColor = "rgb(53, 51, 51)";
    
    link3.style.cssText =
   'margin: 250px auto 0; ' +
   'color: rgba(255, 255, 255, 0);' ;
    img3.style.display = "block";

}

function mouseOver3(){
    var obj = document.getElementById("div-img3");
    obj.addEventListener("mouseover", cor9);
}

function mouseOut3(){
    var obj = document.getElementById("div-img3");
    obj.addEventListener("mouseout", cor10);
}



//outro 5---------------------------------------------------

function cor11(){
    var obj = document.getElementById("div-img4");
    var img4 = document.getElementById("imgg4");
    var link4 = document.getElementById("link4")
    
    document.getElementById("texto4").style.marginTop = '100px'
    obj.style.backgroundColor = "rgba(195, 128, 197, 0.541)";
   
    img4.style.display = "none";
    link4.style.color = "#fff"
   
    link4.style.cssText =
   'margin: 0px auto ; ' +
   'color: #000;' +
   'background-color: #fff;' +
   'padding: 10px ;' +
   'line-height: 2.9;' +
    'border-radius: 5px ';
   
}

function cor12(){
    var obj = document.getElementById("div-img4");
    var img4 = document.getElementById("imgg4");
    var link4 = document.getElementById("link4")
    document.getElementById("texto4").style.margin = '0px auto'
    obj.style.backgroundColor = "rgb(53, 51, 51)";
    
    link4.style.cssText =
   'margin: 250px auto 0; ' +
   'color: rgba(255, 255, 255, 0);' ;
    img4.style.display = "block";

}

function mouseOver4(){
    var obj = document.getElementById("div-img4");
    obj.addEventListener("mouseover", cor11);
}

function mouseOut4(){
    var obj = document.getElementById("div-img4");
    obj.addEventListener("mouseout", cor12);
}




//outro 6---------------------------------------------------

function cor13(){
    var obj = document.getElementById("div-img5");
    var img5 = document.getElementById("imgg5");
    var link5 = document.getElementById("link5")
    
    document.getElementById("texto5").style.marginTop = '100px'
    obj.style.backgroundColor = "rgba(195, 128, 197, 0.541)";
   
    img5.style.display = "none";
    link5.style.color = "#fff"
   
    link5.style.cssText =
   'margin: 0px auto ; ' +
   'color: #000;' +
   'background-color: #fff;' +
   'padding: 10px ;' +
   'line-height: 2.9;' +
    'border-radius: 5px ';
   
}

function cor14(){
    var obj = document.getElementById("div-img5");
    var img5 = document.getElementById("imgg5")
    var link5 = document.getElementById("link5")
    document.getElementById("texto5").style.margin = '0px auto'
    obj.style.backgroundColor = "rgb(53, 51, 51)";
    
    link5.style.cssText =
   'margin: 250px auto 0; ' +
   'color: rgba(255, 255, 255, 0);' ;
    img5.style.display = "block";

}

function mouseOver5(){
    var obj = document.getElementById("div-img5");
    obj.addEventListener("mouseover", cor13);
}

function mouseOut5(){
    var obj = document.getElementById("div-img5");
    obj.addEventListener("mouseout", cor14);
}