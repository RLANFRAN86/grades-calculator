document.getElementById('calcular').onclick = conversorTemp   //accion de hacer click en el boton conversar

function conversorTemp(){
   let celcius = document.getElementById("valorCelcius");
   let kelvin = document.getElementById("valorKelvin");

   if((celcius.value=="") && (kelvin.value=="")){
      alert("ingresa valor");

   }else if(kelvin.value !== ""){
      celcius.value= (parseFloat(kelvin.value)-273.15).toFixed(1)

   }else if(celcius.value!== ""){
      kelvin.value= (parseFloat(celcius.value)+273.15).toFixed(1 )
   }
}

