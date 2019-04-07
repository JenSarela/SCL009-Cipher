/*
/ Funcion para guardar nombre desde el input
document.getElementById("nick_name").addEventListener("click", () => {
 let name = document.getElementById("user").value;
 document.getElementById("nick").innerHTML = `Hola ${name}!`;

})

//offset 
let offset = document.getElementById("offset").value;   

//obtener el mensaje a codificar
let saveTexto = document.getElementById("text").value;
//llamar al boton para codificar y decodificar usando un evento
*/
document.getElementById("nick_name").addEventListener("click", () => {
let user = document.getElementById("user").value;
document.getElementById("nick").innerHTML = `Hola ${user}`
});

document.getElementById("category_codificar").addEventListener("click", () => {

    let text = document.getElementById("text").value;
    let offset = parseInt(document.getElementById("offset").value);
    //let resultado = document.getElementById("answer").value;
    //if (text != ""){
      let finalResult = cipher.encode(offset,text);
      document.getElementById("answer").innerHTML = `${finalResult}`
    //aqui se deberia mostrar al usuario su nuevo codigo
    //}
  });
  
  document.getElementById("category_decodificar").addEventListener("click", () =>{
     let text =document.getElementById("text").value;
     let offset =document.getElementById("offset").value;
     let finalResult = cipher.decode(offset,text);
    document.getElementById("answer").innerHTML = `${finalResult}`
  });
  
  