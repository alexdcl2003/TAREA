class Numeros{
    vuelto(){
        let cantidad= document.getElementById("cantidad").value
        let  precio= document.getElementById("precio").value
        let  pago= document.getElementById("Pago").value
        let iva=document.getElementById("chek").checked
        let resp = document.getElementById("resp")
        let vuelto=0
        let total=0
        let totaliva=0
        let tt=0

        cantidad=parseInt(cantidad)
        precio=parseInt(precio)
        pago=parseInt(pago)
        total=cantidad*precio
        vuelto=pago-total
       // resp.textContent = `el valor del vuelto es ${vuelto}`  
       if(iva){
        iva==true
        totaliva= total*0.12
        tt=vuelto-totaliva
    resp.textContent = `el valor del vuelto es ${tt}`  
       }else{
        iva==false
          resp.textContent = `el valor del vuelto es ${vuelto}`  
       }  
    }
    multiplo(){
        let num = document.getElementById("num").value
        let mul = document.getElementById("multi").value
        let resp = document.getElementById("resp")
        //console.log(resp.textContent)
        num = parseInt(num)
        mul = parseInt(mul)
        if (num % mul == 0) {
          resp.textContent = `${mul} Es multiplo de ${num}`  
        }else{
            resp.textContent = `${mul} No es multiplo de ${num}`
        }
    }
    divisores(){
        let c=1
        let num=document.getElementById("num").value
        let resp=document.getElementById("resp")
        let divisores=""
        let sd=0
        let cd=0
        num = parseInt(num)
        while(c < num){
            if(num % c == 0){
                console.log(c)
                divisores= divisores +" "+c.toString()
                sd=sd+c
                cd=cd+1
            }
            c=c+1
        }
        resp.textContent=divisores
    }
    suma_divisores(){
        let c=1
        let num=document.getElementById("num").value
        let resp=document.getElementById("resp")
        let sd=0
    
        num = parseInt(num)
        while(c < num){
            if(num % c == 0){
                sd=sd+c
            }
            c=c+1
        }
        resp.textContent=sd
    }
    contidad_divisores(){
        let c=1
        let num=document.getElementById("num").value
        let resp=document.getElementById("resp")
        let cd=0
        num = parseInt(num)
        while(c < num){
            if(num % c == 0){
                cd=cd+1
            }
            c=c+1
        }
        resp.textContent=cd

    }
    perfectos(){
        let c=1
        let num=document.getElementById("num").value
        let resp=document.getElementById("resp")
        let sd=0
        num = parseInt(num)
        while(c < num){
            if(num % c == 0){
                sd=sd+c
            }
            c=c+1
        }
        if(sd==num){
            resp.textContent="si es perfecto"
        }else{
            resp.textContent="no es perfecto"
        }
        
    }
    Amigos(){
        let div1 = 0;
        let div2 = 0;
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let resp = document.getElementById("resp");
      
        for (let i = 1; i < num1; i++) {
          if (num1 % i === 0) {
            div1 += i;
          }
        }
      
        for (let j = 1; j < num2; j++) {
          if (num2 % j === 0) {
            div2 += j;
          }
        }
      
        if (div1 === num2 && div2 === num1) {
          resp.textContent = "Son números amigos";
        } else {
          resp.textContent = "No son números amigos";
        }
      }
      Primos(){
        let num=document.getElementById("num").value;
        let resp=document.getElementById("resp")
        let esPrimo = true;

if (num < 2) {
  esPrimo = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      esPrimo = false;
      break;
    }
  }
}
if (esPrimo && num >= 2) {
  resp.textContent = "Es un numero primo"
} else {
  resp.textContent = "No es un numero primo"
}
              }
    Primos_gemelos(){
      let num=document.getElementById("num").value
      let num2=document.getElementById("num2").value
      let resp=document.getElementById("resp")
      let p=num
      let q=num2
      let cant=0
      let cant2=0
      let j=1
      let h=1

      while(j<=p){
          if(p%j==0){
              cant=cant+1
          }
          j=j+1


      }
      while(h<=q){
          if(q%h==0){
              cant2=cant2+1
          }
          h=h+1


      }
      if(cant==2 && cant2==2){
          if((p>q ||q>p)&&(p-q==2||q-p==2)){
              resp.textContent=`Los numero ${p} y ${q} son primos gemelos`
          }else{
              resp.textContent=`Los numero ${p} y ${q} no son primos gemelos`
  
          }
      }else{
          resp.textContent=`Los numeros ${p} y ${q} no son primos`
      }
    }
    
    tablademultiplicar(){
        let num = document.getElementById("num").value
        let resp = document.getElementById("resp")
        let tem = ''
        for (let i = 1; i <= 12; i++) {
         tem +=(num + "x" + i + "=" + num * i+"   ") 
        }
        resp.textContent=( tem )

    }
  
    exponente(){
       
        let base = document.getElementById("base").value
        let exponent = document.getElementById("exponent").value
        let resp = document.getElementById("resp")
        let resultado = base
          
        for (let i = 1; i < exponent; i++) {
          resultado *= base;
        }
          
        resp.textContent=("El resultado es: " + resultado);
        
          
          
    }

    fibonaci(){
        let x = 0;
        let valor = document.getElementById("num").value
        let resp = document.getElementById("resp")
        let arreglo = []
        valor = parseInt(valor)
        for (x; x<valor; x++){
            if(x==0){
                arreglo.push(0)
            }
            else if(x==1){
                arreglo.push(1)
            }
            else{
                arreglo.push(arreglo[x-1]+arreglo[x-2])
            }
        }
        resp.textContent=(arreglo)
    }
    invertirnumero(){
        let num=document.getElementById("num").value
        let resp=document.getElementById("resp")
        let r=0
        let invertir=""
        while(num>0){
            r= num%10
            invertir=invertir+r.toString()
            num=parseInt(num/10)

        }
        resp.textContent=invertir

    }
    cantidadDigitos(){
        let num=document.getElementById("num").value
        let resp=document.getElementById("resp")
        let con=0
        while(num>0){
            num=parseInt(num/10)
            con=con+1

        }
        resp.textContent=`La cantidad de digitios son ${con}`
    
    }
    factorial(){
        let num=document.getElementById("num").value
        num=parseFloat(num)
        let resp=document.getElementById("resp")
        let l=1
        let com=0
        let factorial=1
        if(num>com){
            while(l<=num){
                factorial=factorial*l
                l=l+1
            }
            resp.textContent=`La  factorial de ${num} es ${factorial}`

        }else{
            resp.textContent=`Solo numero positivos`
           
        }
       
        
    }
 }
const numero = new Numeros();
