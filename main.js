 let hola = prompt("Cuantos nombres y edades deseas ingresar?");
let acumulado = 0;
let acc = 0;
if(hola != 0){

    for(i = 1; i<=hola; i++){
      
       let entrada = prompt("Ingrese su nombre");
       let edad = parseInt (prompt("Ingrese su edad"));
       let trabajo = prompt("Cual es su oficio?");
       edad,entrada,trabajo = [edad,entrada,trabajo,];
       console.log(edad,entrada,trabajo);
       acc += edad;

    }alert("Cantidad de personas registradas " + (acumulado,hola));

    let prom = Promedio (acc,hola);
    alert ("El promedio de las edades es " + prom);

}else{
    alert("No es valido el numero 0");
}

function Promedio(a,c){
     return a/c
}


alert("Hoy les dare una rutina de gym a cada uno");

alert("Hoy te toca pecho y biceps");
let rutina = parseInt (prompt("Elegi un numero entre el 1 y 5 , te asignare los ejercicios del lunes"));

if (rutina !=0 && rutina <=5){

  switch (rutina){
      case 1:
          alert("Curl de biceps y alternado");
      break;

      case 2:
          alert("Banco plano e inclinado");
      break;

      case 3:
          alert("Banco scoop con barra y flexiones inclinadas");
      break;

      case 4:
          alert("Curl concentrado y flexiones diamantes");
      break;
      
      case 5:
          alert("Fondos y martillo");
      break;
  }
  

} else{
    alert("No es valido el numero ");
} 

alert("Quieres saber la rutina de mañana");

alert("Pierna y hombro");

rutina = parseInt (prompt("Elegi un numero entre el 6 y 10 , te asignare los ejercicios del martes"));

if (rutina !=5 && rutina <=10){

    switch (rutina){
        case 6:
            alert("Sentadilla y press militar con barra");
        break;
  
        case 7:
            alert("Peso muerto con barra y vuelo lateral");
        break;
  
        case 8:
            alert("Prensa a una pierna y press arnold");
        break;
  
        case 9:
            alert("Sentadilla a una pierna y vuelo frontal");
        break;
        
        case 10:
             alert("Estocadas bulgaras y handstand push up");
        break;
    }
  
  
  } else{
      alert("No es valido el numero ");
  } 


alert("Quieres saber la rutina de mañana");

 alert("Espalda y triceps");

 rutina = parseInt (prompt("Elegi un numero entre el 10 y 14 , te asignare los ejercicios del miercoles"));

if (rutina !=9 && rutina <=14){

    switch (rutina){
        case 10:
            alert("Dominadas pronas y jalon de triceps");
        break;
  
        case 11:
            alert("Doimandas supinas y curl de triceps a un brazo");
        break;
  
        case 12:
            alert("Polea al pecho con triangulo y extension de triceps en polea");
        break;
  
        case 13:
            alert("Serrucho y press frances");
        break;
        
        case 14:
             alert("Remo con barra y rompecraneo");
        break;
    }
  
  
  } else{
      alert("No es valido el numero ");
  } 

 alert("Vuelva a comenzar otra vez");

 

 

























