// document.getElementById para seleccionar un objeto por su id
document.getElementById("main-header").addEventListener("click",function(){
    document.body.style.fontSize = "15px";// Asi se modifica una propiedad de estilos
    })

var muestraFoto = document.getElementById("visor");

document.getElementById("boton-gloria").addEventListener("click", function(){
    muestraFoto.src = "images/gloria_nieto.jpg";
});

document.getElementById("boton-rolando").addEventListener("click",function(){
    muestraFoto.src = "images/rolando_mamani.jpg";
});

document.getElementById("boton-vidal").addEventListener("click", function(){
    muestraFoto.src = "images/vidal_urtecho.jpg";
});

document.getElementById("boton-cetpro-jicr").addEventListener("click", function(){
    muestraFoto.src = "images/cetpro_jicr.jpg";
});

document.getElementById("boton-cetpro").addEventListener("click", function(){
    muestraFoto.src = "images/cetpro.jpg";
});

/***********************************/

let bOscuro = document.getElementById("boton_oscuro");
let bClaro = document.getElementById("boton_claro");
let enfoque_steam = document.getElementById("enfoque_steam");

bOscuro.addEventListener("click", function(){
    enfoque_steam.style.backgroundColor = "#0430A8";
    enfoque_steam.style.color = "#FFFFFF";
});

bClaro.addEventListener("click", function(){
    enfoque_steam.style.backgroundColor = "#B096E0";
    enfoque_steam.style.color = "#333333";

});

/***********************************/
let bOscuro2 = document.getElementById("boton_oscuro2");
let bClaro2 = document.getElementById("boton_claro2");
let reduccion_brecha = document.getElementById("reduccion_brecha");

bOscuro2.addEventListener("click", function(){
    reduccion_brecha.style.backgroundColor = "#FA6672";
    reduccion_brecha.style.color = "#FFFFFF";
});

bClaro2.addEventListener("click", function(){
    reduccion_brecha.style.backgroundColor = "#90FBF9";
    reduccion_brecha.style.color = "#333333";
});

/***********************************/
let frases =[];
frases[0] = "La igualdad es el alma de la libertad";
frases[1] = "No hay barrera, cerradura ni cerrojo que puedas imponer a la libertad de mi mente";
frases[2] = "Yo no deseo que las mujeres tengan poder sobre los hombres, sino sobre ellas mismas";
frases[3] = "No son los dos sexos superiores o inferiores el uno al otro. Son, simplemente, distintos";

let fdia = document.getElementById("frases");

/*
console.log(Math.floor(Math.random()*3));
let aleatorio = Math.floor(Math.random()*3);

fdia.innerHTML = frases[aleatorio];
*/

document.getElementById("frase_llamado1").addEventListener("click", function(){
    fdia.innerHTML = frases[0];
});

document.getElementById("frase_llamado2").addEventListener("click", function(){
    fdia.innerHTML = frases[1];
});

document.getElementById("frase_llamado3").addEventListener("click", function(){
    fdia.innerHTML = frases[2];
});

document.getElementById("frase_llamado4").addEventListener("click", function(){
    fdia.innerHTML = frases[3];
});

//NUMEROS ALEATORIOS
//console.log(Math.floor(Math.random() * 20 ));
let nombrePersonaje = document.getElementById("nombre-personaje");
let personajes = [];
personajes[0] = "Frida Kahlo";
personajes[1] = "Marie Curie";
personajes[2] = "Lise Meitner";
personajes[3] = "Cecilia Payne-Gaposchkin";
personajes[4] = "Rachel Louis Carson"; 
personajes[5] = "María Teresa Blandón"; 
personajes[6] = "Ana Frank";
personajes[7] = "Clara Campoamor"; 
personajes[8] = "Virginia Woolf"; 
personajes[9] = "Virginia Woolf "; 

let aleatorio = Math.floor(Math.random() * 10 )
nombrePersonaje.innerHTML = personajes[aleatorio];

//INTERVALOS DE TIEMPO - setTimeout
let personajedia = document.getElementById("personajedia");
function cambiarColorPersonaje(){
    personajedia.style.backgroundColor = "#000000";
    personajedia.style.color = "#FFFFFF";
}
setTimeout(cambiarColorPersonaje, 3000);

//INTERVALOS DE TIEMPO - setInterval
function cambiarPersonaje(){
    let aleatorio = Math.floor(Math.random() * 10 )
    nombrePersonaje.innerHTML = personajes[aleatorio];
}
setInterval(cambiarPersonaje, 1000);


//GALERIA con botones
let paisajes = [];
paisajes[0] = "images/mujer.jpg";
paisajes[1] = "images/conferencia.jpg";
paisajes[2] = "images/mundo.jpg";
paisajes[3] = "images/era.jpg";
paisajes[4] = "images/ejecutiva.jpg";

let muestra = document.getElementById("muestra");
let bAvanzar = document.getElementById("boton-avanzar");
let bRetroceder = document.getElementById("boton-retroceder");
let posicion = 0;
muestra.src = paisajes[posicion]; 

bAvanzar.addEventListener("click", function(){
    posicion++;//Incrementa el valor de la variable en uno
    if(posicion === 5){
        posicion = 0;
    }
    muestra.src = paisajes[posicion]; 
})
bRetroceder.addEventListener("click", function(){
    posicion--;//Disminuye el valor de la variable en uno
    if(posicion === -1){
        posicion = 4;
    }
    muestra.src = paisajes[posicion]; 
})

function avanzar(){
    posicion++;//Incrementa el valor de la variable en uno
    if(posicion === 5){
        posicion = 0;
    }
    muestra.src = paisajes[posicion]; 
}

setInterval(avanzar,2000);


