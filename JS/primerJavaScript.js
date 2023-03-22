alert("Alerta en archivo")

//ASYNC-AWAIT FUNCION QUE LLAMA A UNA API 
async function traePersona(){
    const respuesta=await fetch("https://randomuser.me/api/");
    const datos=await respuesta.json();
    console.log(datos.results[0].name.first+" "+datos.results[0].name.last);
    
}


function quitarSitec(){
    let pregunta=confirm("seguro quiere quitar sitec");
    if(!pregunta == false){
        alert("SITEC borrado perrxx");
        let si =document.getElementById("Sitec");
        si.innerHTML ="ESTAS DEMENTE VIEJOO###";
    }
}

function funcionAlerta(){//funciones javaScript
    alert("di click");
}
