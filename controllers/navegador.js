let despliegue= document.getElementById('despliegue');

let despliegue__opciones_capa1=document.getElementById('despliegue__opciones-capa1');

let despliegue__opciones_capa2=document.getElementById('despliegue__opciones-capa2');

let cerrar=document.getElementById('cerrar');



despliegue.addEventListener('click',()=>{
    
    despliegue__opciones_capa1.classList.add('despliegue__opciones-capa1__activado');
    
    despliegue__opciones_capa1.classList.remove('despliegue__opciones-capa1');
})


despliegue__opciones_capa1.addEventListener('click',()=>{
    
    despliegue__opciones_capa2.classList.add('despliegue__opciones-capa2__activado');
    
    despliegue__opciones_capa2.classList.remove('despliegue__opciones-capa2');
})

cerrar.addEventListener('click',()=>{
    despliegue__opciones_capa2.classList.add('despliegue__opciones-capa2');
    
    despliegue__opciones_capa2.classList.remove('despliegue__opciones-capa2__activado');
    
    despliegue__opciones_capa1.classList.remove('despliegue__opciones-capa1__activado');

    despliegue__opciones_capa1.classList.add('despliegue__opciones-capa1');

})
