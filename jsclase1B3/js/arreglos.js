class Arreglos{
    mayor(){
        //'23;40;4;100' 
         let datos= document.getElementById("datos").value
         let numeros = datos.split(";") //["23","40","4","100"]
         let may=parseInt(numeros[0]) // 23
         //let dat = Json.parse(numeros[0]) // 23
    
         for(let i=1;i < numeros.length;i++){
            if (may < parseInt(numeros[i])){
              may = parseInt(numeros[i])//100
            } 
         }
         let resp = document.getElementById("resp")
         resp.textContent=`El mayor del arreglo[${numeros}] es= ${may}`
      }
    menor(){
        //'23;40;4;100' 
         let datos= document.getElementById("datos").value
         let numeros = datos.split(";") //["23","40","4","100"]
         let may=parseInt(numeros[0]) // 23
         //let dat = Json.parse(numeros[0]) // 23
    
         for(let i=1;i < numeros.length;i++){
            if (may > parseInt(numeros[i])){
              may = parseInt(numeros[i])//100
            } 
         }
         let resp = document.getElementById("resp")
         resp.textContent=`El menor del arreglo[${numeros}] es= ${may}`
      }  
    buscarArreglo() {
         let datos = document.getElementById("datos").value
         let arreglo = datos.split(";")
         let buscado = document.getElementById("buscado").value
         let c = 0, enc = false
         while (c < arreglo.length && enc == false) {
           if (arreglo[c] == buscado){
             enc = true
           }
           else {
             c = c + 1
           }
         }
         let resp = document.getElementById("resp")
         if (enc == true) {
           //console.log(buscado, "se encuentra en la pos: ",c)
           resp.textContent = `el dato: ${buscado} se encuentra en la posicion:${c} del arreglo$${JSON.stringify(arreglo)}`
         } else {
           //console.log(buscado," no se encuentra")
           resp.textContent = `el dato: ${buscado} no se encuentra en el arreglo${JSON.stringify(arreglo)}`
         }
      }
    isExponente(base,exp){
         let res = 1
         for(let i=1;i<=exp;i++){
             res*=base
         }
      return res
      }
    isDigitos(numero,base){
         let  digitos= []
         while(numero > 0){
         digitos.push(numero%base)
         numero = parseInt(numero/base)
      }
      return digitos
      }
    base10_2(){
         let datos=document.getElementById("datos")
         let numero = parseInt(datos.value)
         let arreglo=this.isDigitos(numero,2)
         let base2=""
         for(let i=arreglo.length-1;i>=0;i--){
             base2=base2+arreglo[i].toString()
         }
         let resp = document.getElementById("resp")
         resp.textContent=`[Base10=${numero}] ==> Base2=${base2}`
         
      }
    base2_10(){
         let datos=document.getElementById("datos")
         let numero = parseInt(datos.value)
         let arreglo=this.isDigitos(numero,10)
         let base10=0,limite=arreglo.length-1
         for(let i=arreglo.length-1;i>=0;i--){
             base10= base10 + arreglo[i]*this.isExponente(2,limite)
             limite=limite-1
         }
         let resp = document.getElementById("resp")
          resp.textContent=`[Base2=${numero}] ==> Base10=${base10}`
      }
    acuDivisores(num){
      let acu=0
      for(let c=1;c<num;c++){
         if (num%c==0){
             acu=acu+c
         }
      }
      return acu //1+3=4
      }
    sumaDivisores(){
      //[4,6,9,10]=1+2=3,1+2+3=6,1+3=4,1+2+5=8
      let datos= document.getElementById("datos").value
      let numeros = datos.split(";") //["4","6","9","10"]
      let acu,num=0,resultado=""
      // recorre cada elemento del arreglo
      for(let i=0;i < numeros.length;i++){
          // proceso de suma de divisores
          num=parseInt(numeros[i])
          acu=this.acuDivisores(num)
          resultado=resultado+acu+"|"    //""+"3"="3"+"|"+"6"="3|6"
      }
      let resp = document.getElementById("resp")
      resp.textContent=`La suma de los divisores del arreglo[${numeros}] son= ${resultado}`
      
      }
    perfectos(){
      //[4,6,9,10]=1+2=3,1+2+3=6,1+3=4,1+2+5=8
      let datos= document.getElementById("datos").value
      let numeros = datos.split(";") //["4","6","9","10"]
      let acu,num=0,resultado=""
      // recorre cada elemento del arreglo
      for(let i=0;i < numeros.length;i++){
          // proceso de suma de divisores
          num=parseInt(numeros[i])
          acu=this.acuDivisores(num)
          if (acu==num){
             resultado=resultado+num+" | "    //""+"3"="3"+"|"+"6"="3|6"
          }
       }
      let resp = document.getElementById("resp")
      resp.textContent=`Los numeros perfecto del arreglo[${numeros}] son= ${resultado}`
      }
    vuelto(numero){
         let billetes=[50,20,10,5,2,1] // invertimos el orden para empezar por los billetes grandes
         let  resultado=[]
         for(let i=0 ;i<billetes.length;i++){
             if(numero>=billetes[i]){
                 let cantBilletes = Math.floor(numero/billetes[i]);
                 resultado.push(`${cantBilletes} de $ ${billetes[i]}`); // agregamos un string con la cantidad de billetes y su valor
                 numero=numero%billetes[i]; // actualizamos el valor de numero con el residuo
             }
         }
         return resultado;
      }  
    dvuelto(){
         let datos=document.getElementById("datos");
         let numero=parseInt(datos.value);
         let arreglo=this.vuelto(numero);
         let resp = document.getElementById("resp")
         resp.textContent=`[ cantidad  ingresada =${numero}] ==> su vuelto es= ${arreglo.join(", ")} `;
      }
    eliminarElemento(arreglo, eliminar) {
      let nuevoArreglo = [];
      for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] !== eliminar) {
          nuevoArreglo.push(arreglo[i]);
        }
      }
      return nuevoArreglo;
      }
    eliminarDeArreglo() {
         let input = document.getElementById("datos");
         let arreglo = input.value.split(";");
         let eliminar = document.getElementById("e")
         let e=eliminar.value
         let nuevoArreglo = this.eliminarElemento(arreglo, e);
         let resultado = "";
         for (let i = 0; i < nuevoArreglo.length; i++) {
           if (nuevoArreglo[i] !== "") {
             resultado += nuevoArreglo[i];
             if (i < nuevoArreglo.length - 1 && nuevoArreglo[i+1] !== "") {
               resultado += ",";
             }
           }
         }
         let resp = document.getElementById("resp")
         resp.textContent =`el arreglo = ${arreglo} ya se elimino esta parte ${e} queda asi ${resultado}`
      }
      insertarEnArreglo(arreglo, valor, pos) {
        let nuevoArreglo = [];
        for (let i = 0; i < arreglo.length; i++) {
          if (i === pos) {
            nuevoArreglo.push(valor);
          }
          nuevoArreglo.push(arreglo[i]);
        }
        return nuevoArreglo;
      }
      
       insertar() {
        let $input = document.getElementById("datos");
        let arregloInicial = $input.value.split(";").map(Number);
        let v = document.getElementById("i");
        let valor = parseInt(v.value);
        let pos = parseInt(document.getElementById("posi").value);
      
        let arregloFinal = this.insertarEnArreglo(arregloInicial, valor, pos);
      
        let resp = document.getElementById("resp");
        resp.textContent = `El arreglo [${arregloInicial}] ha sido actualizado con el valor ${valor}. El nuevo arreglo es [${arregloFinal}]`;
      }
    calcularPromedio() {
         let empleados = [];
         let nombre = document.getElementById("nombreEmpleado").value;
         let valorHora = parseInt(document.getElementById("valorHora").value);
         let numeroHoras = parseInt(document.getElementById("numeroHoras").value);
   
         if (nombre && !isNaN(valorHora) && !isNaN(numeroHoras)) {
           empleados.push({ nombre: nombre, vh: valorHora, nh: numeroHoras });
           document.getElementById("nombreEmpleado").value = "";
           document.getElementById("valorHora").value = "";
           document.getElementById("numeroHoras").value = "";
         }
   
         if (empleados.length === 0) {
           document.getElementById("resp").textContent = "Agrega al menos un empleado.";
         } else {
           let totalSueldos = 0;
           for (let i = 0; i < empleados.length; i++) {
             totalSueldos += empleados[i].vh * empleados[i].nh;
           }
   
           let promedioSueldos = totalSueldos / empleados.length;
           document.getElementById("resp").textContent = "Promedio de sueldos: " + promedioSueldos.toFixed(2);
         }
      }
      conteo_numeros_Primos(){
        let arreglo_1 = document.getElementById("datos").value
        let arreglo=arreglo_1.split(";").map(Number)
        let cantidad_de_Primos = 0;
    
        for (let i = 0; i < arreglo.length; i++) {
          let numero = arreglo[i];
          if (numero > 1) {
            let Primo = true;
            for (let j = 2; j <= Math.sqrt(numero); j++) {
              if (numero % j === 0) {
                Primo = false;
                break;
              }
            }
            if (Primo) {
              cantidad_de_Primos++;
            }
          }
        }
    
        document.getElementById("resp").textContent = "cantidad de numeros primos: " + cantidad_de_Primos;
      }

      repeticion_Numero(){
        let num1=document.getElementById("num1").value
         let x= num1.split(";")
       let num2=document.getElementById("num2").value
        let c=0
         for(let i=0;i<x.length;i++){
            if (x[i]===num2)
         c++;
      }
      let resp=document.getElementById("resp")
      resp.textContent=`el numero ${num2} se repite ${c}`
      }

    generar_un_Arreglo() {
      let arregloNum = [];
    for (let i = 0; i < 100; i++) {
      arregloNum.push(Math.floor(Math.random()* 100));
    }
    console.log("Arreglo generado con éxito:", arregloNum);
  
    
    let numeroAdivinar = parseInt(document.getElementById("datos").value);
  
   
    let resp = document.getElementById("resp");
    if (!isNaN(numeroAdivinar) && arregloNum.includes(numeroAdivinar)) {
      resp.textContent = `¡Adivinaste! El número está en el arreglo .`;
    } else {
      resp.textContent = "Error, no adivinaste. El número no está en el arreglo.";
    }
  }

  nombres_alrevez(){
    let nombres = document.getElementById("datos").value;
    let nombre_Separados = nombres.split(";");
    let nombresAlReves = [];

    for (let i = 0; i < nombre_Separados.length; i++) {
        let nombre = nombre_Separados[i];
        let nombreInvertido = "";

        for (let j = nombre.length - 1; j >= 0; j--) {
            nombreInvertido += nombre[j];
        }

        nombresAlReves.push(nombreInvertido);
    }

    let resp = document.getElementById("resp");
    resp.textContent = `Nombres al revés: ${nombresAlReves.join(', ')}`;
  }

  Promedio_de_numeros(){
    let datos = document.getElementById("datos").value;
    let numeros = datos.split(";").map(Number);
     let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
}
      let promedio = suma / numeros.length;

      let resp = document.getElementById("resp");
      resp.textContent = `El promedio del arreglo [${numeros}] es: ${promedio.toFixed(2)}`
}

}
const arr = new Arreglos()
