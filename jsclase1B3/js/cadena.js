class Cadena{
    vocales(){
        // "hola que tal"
        let frase = document.getElementById("datos").value
        let cv=0,cc=0
        for(let i=0;i < frase.length;i++){
            if (frase[i]== 'a' || frase[i]== 'e' || frase[i]== 'i' || frase[i]== 'o' || frase[i]== 'u' ) {
               cv=cv+1
            }
            if (frase[i]>= 'a' && frase[i]<= 'z' ) {
               cc=cc+1
            }
        }
        console.table({cv,cc})
        let resp = document.getElementById("resp")
        resp.textContent=`cantidad de vocales:= ${cv} cantidad de consonantes:= ${cc}`
   }
   caracterespecial(){
      let $input = document.getElementById("datos");
      let cadena = $input.value;
      let contpunto=0,contcoma=0,cont2=0,contpc=0
      for(let i=0;i<cadena.length;i++){
          if(cadena[i]=="."){
              contpunto+=1
          }
          if(cadena[i]==","){
              contcoma+=1
          }
          if(cadena[i]==":"){
              cont2+=1
          }
          if(cadena[i]==";"){
              contpc+=1
          }
      }
      let resp = document.getElementById("resp")
      resp.textContent = `La cadena ${cadena} tiene ${contpunto} ".", ${contcoma} ",", ${cont2} ":", ${contpc} ";"`
  }
  quitaEspacio(conespacio) {
   let sinEspacio="";
   conespacio = conespacio.trim();
   for (let i = 0; i < conespacio.length; i++) {
     if (conespacio[i] !== " ") {
       sinEspacio += conespacio[i];
     }
   }
   return sinEspacio;
 }
  buscacadena(){
   let resp = document.getElementById("resp")
   let $input=document.getElementById("datos");
   let conespacio=$input.value
   let scadena=document.getElementById("buscado")
   //let cadena=this.quitaEspacio(conespacio)
   let subcadena=scadena.value
   let cadena=conespacio
   let posfinal=-1
   for (let i = 0; i <= cadena.length - subcadena.length; i++) {
     let coincidencias = 0;
     for (let j = 0; j < subcadena.length; j++) {
       if (cadena[i + j] == subcadena[j]) {
         coincidencias++;
       }
     }
     if (coincidencias == subcadena.length) {
       posfinal=i;
     }
   }
   if(posfinal!=-1){
       resp.textContent=`La subcadena "${subcadena}" se encuentra en la posicion: ${posfinal} de la cadena "${conespacio}"`;
   }else{
       resp.textContent=`La subcadena "${subcadena}" no se encuentró dentro de la cadena`;
   }
   
 }
 insertar() {
   // "hola que tal"
   let cadena = document.getElementById("cadena").value
   let subcadena = document.getElementById("subcadena").value
   let posicion = parseInt(document.getElementById("posicion").value)
   let aux=""
   if (posicion >= 0 && posicion <= cadena.length){ 
       for (let i = 0; i < posicion; i++) {
           aux=aux+cadena[i]
       }
       // for (let i = 0; i < subcadena.length; i++) {
       //     aux = aux + subcadena[i]
       // }
       aux=aux+subcadena
       
       for (let i = posicion; i < cadena.length; i++) {
           aux = aux + cadena[i]
       }
        cadena=aux
        let resp = document.getElementById("resp")
        resp.textContent = `cadena nueva:= ${cadena}`
   }
   else{
       alert("la posicion no es valida")
   }

}
cadenarreglo(){
let $input = document.getElementById("datos");
let cadena = ($input.value);
let caracter = ";";
let arreglo = [];

let numero = "";
for (let i = 0; i < cadena.length; i++) {
if (cadena[i] === caracter) {
  arreglo.push((numero));
  numero = "";
} else {
  numero += cadena[i];
}
}

arreglo.push((numero));
let resp = document.getElementById("resp")
resp.textContent= ` cantidad  ingresada = "${cadena}" ==> su numero en arreglo es = [${arreglo}]`;
}
sumardigitoscadenas(){
  let datos= document.getElementById("datos");
  let inputCadena=(datos.value)
  let numero = "";
  let suma = 0;

  for (let i = 0; i < inputCadena.length; i++) {
    if (inputCadena[i] === ";") {
      suma += parseFloat(numero);
      numero = "";
    } else {
      numero += inputCadena[i];
    }
  }

  // Sumar el último número después del último coma (o el único número si no hay comas)
  suma += parseFloat(numero);
  let resp = document.getElementById("resp")
  resp.textContent= ` Cadena ingresada = "${inputCadena}" ==> la suma sus dijitos es = [${suma}]`;
}
buscarPosicion() {
  let frase = document.getElementById("frase").value;
  let subcadena = document.getElementById("subcadena").value;
  let posicion = -1;

  for (let i = 0; i <= frase.length - subcadena.length; i++) {
      let coincide = true;
      for (let j = 0; j < subcadena.length; j++) {
          if (frase[i + j] !== subcadena[j]) {
              coincide = false;
              break;
          }
      }
      if (coincide) {
          posicion = i;
          break;
      }
  }

  let resp = document.getElementById("resp");

  if (posicion !== -1) {
      resp.textContent = `La subcadena "${subcadena}" se encuentra en la posición: ${posicion}`;
  } else {
      resp.textContent = "La subcadena no se encontró en la frase.";
  }
}
concatenarfrase(){
  let cadena = document.getElementById("cadena").value
      let subcadena = document.getElementById("subcadena").value
      let resp= document.getElementById("resp")
      let newcad= ""
      newcad= cadena + " " + subcadena;
      resp.textContent= newcad

}
frase_invertida(){
  let str  = document.getElementById("datos").value
  let arrayFromStr = str.split();
  let result = [  ];
  
  for (let word of arrayFromStr) {
    result.push(word.split("").reverse(  ).join(""));
  }
  
  resp.textContent=(result.join(" "));
 }
 frase_igual(){
  let str  = document.getElementById("datos").value
  let arrayFromStr = str.split();
  let result = [];
  
  for (let word of arrayFromStr) {
    result.push(word.split("").reverse().join(""));
  }
  if(str=result){
      resp.textContent= `se lee igual [${str}]`
  }else{
      resp.textContent= `[${str}] no se lee igual a [${result}]`
  }
  }
 
  Palabras_de_frase() {
    
    let frase = document.getElementById("datos").value;
    let palabras = frase.trim().split(/\s+/);
     let cantidadPalabras = palabras.length;
  
    document.getElementById("resp").textContent = "Cantidad de palabras: " + cantidadPalabras;
  }
  eliminarSubcadena() {
    let frase = document.getElementById("frase").value;
    let subcadenaEliminar = document.getElementById("subcadenaEliminar").value;
    let nuevaFrase = "";

    let i = 0;
    let j = 0;

    while (i < frase.length) {
        if (frase[i] === subcadenaEliminar[j]) {
            j++;
            if (j === subcadenaEliminar.length) {
                // Se encontró la subcadena a eliminar, se salta esos caracteres
                j = 0;
            }
        } else {
            nuevaFrase += frase[i];
            j = 0;
        }
        i++;
    }

    let resp = document.getElementById("resp");
    resp.textContent = `Frase resultante: ${nuevaFrase}`;
}
}
let cad = new Cadena()