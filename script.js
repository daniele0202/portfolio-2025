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






// document.getElementById("skill").addEventListener(
//     "mouseover", skilss);

// const myDiv = document.getElementById("skil");


// function handleMouseover() {
//       myDiv.style.backgroundColor = "lightcoral";
//     } 

//     myDiv.addEventListener("mouseover", handleMouseover);
    

// document.addEventListener("DOMContentLoaded", function() {
//     const colorBox = document.getElementById("skil");
//     const coordinates = document.getElementById("quandro");

//     colorBox.addEventListener("mouseover", function() {
        
//         // colorBox.style.transition="translateX(30px)";
//     });

//     coordinates.addEventListener("mouseover", function() {
//         // colorBox.style.margin= "0 40px 0 0px";
//         // colorBox.style.transition="translateX(30px)";
//     });

//     colorBox.addEventListener("mouseout", function() {
//         // colorBox.style.margin = "0px";
//         // colorBox.style.justifyContent= "center";
//     });

// });



const btContato = document.getElementById("btContato");
var caixaContato = document.getElementById("caixaContato");
//btContato.addEventListener("click", buttomContato);

function contVisibilidade() {
  document.getElementById("caixaContato").classList.toggle("cont-escondido");
}