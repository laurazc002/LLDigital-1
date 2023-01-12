let despliegue= document.getElementById('despliegue');

let despliegue__opciones_capa1=document.getElementById('despliegue__opciones-capa1');

let despliegue__opciones_capa2=document.getElementById('despliegue__opciones-capa2');
let ampliarServicio=document.getElementById('ampliarServicio');

 let cerrar=document.getElementById('cerrar');

// navegador pantalla amplia


let botonServicio=document.getElementById('botonServicio');
let botonservicio__lista=document.getElementById('botonservicio__lista');




botonServicio.addEventListener('mouseover',()=>{
        
    botonservicio__lista.classList.remove('botonservicio__lista');
    botonservicio__lista.classList.add('botonservicio__lista__activo');    
});


botonservicio__lista.addEventListener('mouseleave',()=>{
    botonservicio__lista.classList.add('botonservicio__lista');
    botonservicio__lista.classList.remove('botonservicio__lista__activo'); 
})

// let imagenBanner=document.getElementById('imagenBanner');
// imagenBanner.addEventListener('mouseover',()=>{
//     botonservicio__lista.classList.add('botonservicio__lista');
//     botonservicio__lista.classList.remove('botonservicio__lista__activo'); 
// })













 // davegador pantalla pequeña


despliegue.addEventListener('click',()=>{
    
    despliegue__opciones_capa1.classList.add('despliegue__opciones-capa1__activado');
    
    despliegue__opciones_capa1.classList.remove('despliegue__opciones-capa1');
})



 cerrar.addEventListener('click',()=>{
   despliegue__opciones_capa1.classList.remove('despliegue__opciones-capa1__activado');
    
    despliegue__opciones_capa1.classList.add('despliegue__opciones-capa1');
    
    })
    ampliarServicio.addEventListener('mouseover',function(){
        despliegue__opciones_capa2.classList.remove('despliegue__opciones-capa2');
        
        despliegue__opciones_capa2.classList.add('despliegue__opciones-capa2__activo');
    });
    
    
    despliegue__opciones_capa2.addEventListener('mouseleave',()=>{
        
        despliegue__opciones_capa2.classList.remove('despliegue__opciones-capa2__activo');
        despliegue__opciones_capa2.classList.add('despliegue__opciones-capa2');    
    });
    
    
    despliegue__opciones_capa1.addEventListener('mouseover',()=>{
        despliegue__opciones_capa1.classList.add('despliegue__opciones-capa1'); 
        despliegue__opciones_capa1.classList.remove('despliegue__opciones-capa1__activo');
            });

