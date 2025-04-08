const colores = ["Blue","Green","Red"]
let recorrido = 0;

function cambioColores(idContenedor){
  document.getElementById(idContenedor).style.color =  colores[recorrido]
  if(recorrido < colores.length-1){
    recorrido ++
  } else {
    recorrido = 0
  }
}