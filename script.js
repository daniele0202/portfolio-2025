    
function cor1(){
    var obj = document.getElementById("div-img");
    obj.style.backgroundColor= ' rgb(133, 94, 134)'  ;
    obj.style.color= '#fff';
    document.getElementById("div-img").style.transition=  'all 0.5s ease';
    var link =  document.getElementById("link")
    document.getElementById("link").style.visibility = "visible";
    link.style.display = 'block';
    link.style.target = "_blank";
    document.getElementById("link").innerHTML = "ABRIR SITE </br> Berçario e Educacional" 
    document.getElementById("link").style.zIndex = '100';
    link = document.getElementById("link").href = 'http://vitoriamotos.dnsite.com.br';
    document.getElementById("imgg").style.display = "none";
    document.getElementById("imgg").style.visibility = "hidden"; 
    document.getElementById("texto").innerHTML = "" 
    document.getElementById("texto").style.cssText =
    'margin: 250px auto 0; ' +
    'color: #fff;' ;
}

function cor2(){
    var obj = document.getElementById("div-img")
    obj.style.backgroundColor= "rgb(53, 51, 51)" 
    var link =  document.getElementById("link")

    document.getElementById("link").style.visibility = "hidden";
    document.getElementById("link").style.display = 'none';
    link.style.display = 'none';
    document.getElementById("imgg").style.display = "none";
    document.getElementById("imgg").style.visibility = "visible";
    document.getElementById("imgg").style.display = "block";
    document.getElementById("imgg").src = "img/bercario.png";
    document.getElementById("texto").innerHTML = "<h3>Site Berçario educacional </h3><p> Tecnologia: Html Css JavaScript</p>" 
    document.getElementById("imgg").style.margin = '0 auto';
    document.getElementById("texto").style.cssText =
    "margin: 10px auto 0;  font: normal 18px 'Raleway', sans-serif; " ;
}

function addEventos(){
    var obj = document.getElementById("div-img");
    var img =  document.getElementById("imgg");
    var texto =  document.getElementById("texto");
    var link = document.getElementById("link");

    link.addEventListener("click", cor1);
   // addEventListener("click", abreLink);
    texto.addEventListener("mouseover", cor1);
    img.addEventListener("mouseover", cor1);
    obj.addEventListener("mouseover", cor1);
    obj.addEventListener("mouseout", cor2);
}



window.addEventListener("load", addEventos);
// OUTRO    
  
// function cor4(){
//     var obj1 = document.getElementById("div-img1");
//     obj1.style.backgroundColor= ' rgb(133, 94, 134)'  ;
//     obj1.style.color= '#fff';
//     document.getElementById("div-img1").style.transition=  'all 0.5s ease';
//     var link1 =  document.getElementById("link1")
//     document.getElementById("link1").style.visibility = "visible";
//     link1.style.display = 'block';
//     link1.style.target = "_blank";
//     document.getElementById("link1").innerHTML = "ABRIR SITE </br> Berçario e Educacional" 
//     document.getElementById("link1").style.zIndex = '100';
//     link1 = document.getElementById("link1").href = 'http://vitoriamotos.dnsite.com.br';
//     document.getElementById("imgg1").style.display = "none";
//     document.getElementById("imgg1").style.visibility = "hidden"; 
//     document.getElementById("texto1").innerHTML = "" 
//     document.getElementById("texto1").style.cssText =
//     'margin: 250px auto 0; ' +
//     'color: #fff;' ;
// }

// function cor6(){
//     var obj1 = document.getElementById("div-img1")
//     obj1.style.backgroundColor= "rgb(53, 51, 51)" 
//     var link1 =  document.getElementById("link1")

//     document.getElementById("link1").style.visibility = "hidden";
//     document.getElementById("link1").style.display = 'none';
//     link1.style.display = 'none';
//     document.getElementById("imgg1").style.display = "none";
//     document.getElementById("imgg1").style.visibility = "visible";
//     document.getElementById("imgg1").style.display = "block";
//     document.getElementById("imgg1").src = "img/bercario.png";
//     document.getElementById("texto1").innerHTML = "<h3>Site Berçario educacional </h3><p> Tecnologia: Html Css JavaScript</p>" 
//     document.getElementById("imgg1").style.margin = '0 auto';
//     document.getElementById("texto1").style.cssText =
//     "margin: 10px auto 0;  font: normal 18px 'Raleway', sans-serif; " ;
// }

// function addEventos(){
//     var obj1 = document.getElementById("div-img1");
//     var img1 =  document.getElementById("imgg1");
//     var texto1 =  document.getElementById("texto1");
//     var link1 = document.getElementById("link1");

//     link1.addEventListener("click", cor4);
//     texto1.addEventListener("mouseover", cor4);
//     img1.addEventListener("mouseover", cor4);
//     obj1.addEventListener("mouseover", cor4);
//     obj1.addEventListener("mouseout", cor6);
// }





// window.addEventListener("load", addEventos);