
//offset permite al usuario seleccionar sus desplazamientos
let offset = document.getElementById("offset").value;   

//obtener el mensaje a codificar
/*let saveTexto = document.getElementById("text").value;*/

// llama al boton para obtener y guardar el nombre y mostralo en la pantalla
document.getElementById("nick_name").addEventListener("click", () => {
let user = document.getElementById("user").value;
document.getElementById("nick").innerHTML = `Hola ${user}`
});

document.getElementById("category_codificar").addEventListener("click", () => {

    let text = document.getElementById("text").value;
    let offset = parseInt(document.getElementById("offset").value);
 
      let finalResult = cipher.encode(offset,text);
      document.getElementById("answer").innerHTML = `${finalResult}`
    //aqui se deberia mostrar al usuario su nuevo codigo
    //}
  });
  
  document.getElementById("category_decodificar").addEventListener("click", () =>{
     let text =document.getElementById("text").value;
     let offset =parseInt(document.getElementById("offset").value);
     let finalResult = cipher.decode(offset,text);
    document.getElementById("answer").innerHTML = `${finalResult}`
  });
  
