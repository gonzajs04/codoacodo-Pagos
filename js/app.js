document.addEventListener('DOMContentLoaded',()=>{
    seleccionarItems();
})


function seleccionarItems(){
    const valorTicket = 200;
    const botonResumen= document.querySelector(".btn-resumen");
    const cantidad = document.querySelector(".input-cantidad");
    const categoria = document.querySelector(".select-categoria");
    const totalPagar = document.querySelector(".total-pagar p");

    botonResumen.addEventListener('click',(e)=>{
     e.preventDefault();
        calcularTotal(cantidad,categoria,totalPagar,valorTicket);
    });

}


function calcularTotal(cantidad,categoria,totalPagar,valorTicket){

    const total = 0;
    cantidadInt = parseInt(cantidad.value)
     const idCategoria = parseInt(categoria.value);

    if(cantidadInt == 0 || idCategoria == 0 ||cantidadInt ==''){
        generarAlerta("Debes añadir una cantidad mayor a 0 o elegir una categoria",0);
    }else{
    
    if(idCategoria === 1){
        const porcentaje = 80;
         const total  = (valorTicket*cantidadInt) - ((valorTicket*cantidadInt)*porcentaje)/100;
         totalPagar.textContent = "Total a pagar $:  "+ total;
        
     } else if(idCategoria ===2){
    
        const porcentaje = 50;
        const total  = (valorTicket*cantidadInt) - ((valorTicket*cantidadInt)*porcentaje)/100;
        totalPagar.textContent = "Total a pagar $:  "+ total;

    } else{
        const porcentaje = 15;
        const total  = (valorTicket*cantidadInt) - ((valorTicket*cantidadInt)*porcentaje)/100;
       
        totalPagar.textContent = "Total a pagar $:  "+ total;
    }

    generarAlerta("Total calculado correctamente",1);

}


}



function generarAlerta(msg, error){
    const seccionPagos = document.querySelector(".pagos");

    const divError = document.createElement("div");

    const mensaje = document.createElement("p");
    mensaje.textContent = msg;
  


    if(error === 0){
        divError.classList.add('alerta');
        divError.classList.add('error');
      
        setTimeout(()=>{
            divError.remove();
        },2000);
        
        
        
        
    }else{

        divError.classList.add('alerta');
        divError.classList.add('exito');
        setTimeout(()=>{
            divError.remove();
        },2000);
     
     
    }
   
    seccionPagos.appendChild(divError);
    divError.appendChild(mensaje);

}




