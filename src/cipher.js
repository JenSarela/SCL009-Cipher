window.cipher = {
  encode: (offset,text) => {
   /*console.log(offset,text)*/
    let finalResult=""; 
   /* Acá va tu código */
       for (let i = 0; i < text.length; i++){ 
           let positionAscii= text.charCodeAt(i); 
           /*console.log(positionAscii);*/
         
           //paso a converti a  codigo ASCII
         if (positionAscii >= 65 && positionAscii <= 90){
           let cifrado = parseInt((positionAscii-65 + offset)% 26 + 65);
           finalResult += String.fromCharCode(cifrado);
           
         }

           //transformar a minusculas
          else if (positionAscii >= 97 && positionAscii <= 122){
            let cifrado = parseInt((positionAscii-97 + offset)%26 + 97);
            finalResult += String.fromCharCode(cifrado);
          }
          //conservar espacio
         else if (positionAscii ===32){
            let cifrado =parseInt((positionAscii-32)%26+32);
            finalResult += String.fromCharCode(cifrado);
          }
         /* if (positionAscii === 32);
          positionAscii +=String.fromCharCode(positionAscii);*/
          
          //utilizacion de coma
          else if (positionAscii ===44){
            let cifrado =parseInt((positionAscii-44)%26+44);
            finalResult += String.fromCharCode(cifrado);
          }

          //numeros
          else if (positionAscii >=48 && positionAscii<=57){
            let cifrado =parseInt((positionAscii-48 + offset)%10 + 48);
            finalResult += String.fromCharCode(cifrado);
          }          
         /*else{
          finalResult += text[i]
         }*/
         }
         /*console.log(finalResult)*/
        return finalResult;     
     
     },
   //document.getElementById(finalResult)


   decode: (offset,text) => {
     /* Acá va tu código */
       /*console.log(offset,text)*/
        let finalResult=""; 
       /* Acá va tu código */
           for (let i = 0; i < text.length; i++){ 
               let positionAscii= text.charCodeAt(i); 
               /*console.log(positionAscii);*/
              
             
               //paso a converti a  codigo ASCII
             if (positionAscii >= 65 && positionAscii <= 90 ){
               let descifrado = parseInt((positionAscii+ 65 - offset)% 26 + 65);
              

               finalResult += String.fromCharCode(descifrado);
      
             }
             //transformar a minusculas
             else if (positionAscii >=97 && positionAscii<=122){
              let descifrado = parseInt((positionAscii-122 - offset)%26 + 122);
              finalResult += String.fromCharCode(descifrado);
            }
             //conservar espacio
         else if (positionAscii ===32){
          let descifrado =parseInt((positionAscii-32)%26+32);
          finalResult += String.fromCharCode(descifrado);
        }
           /* //utilizacion de espacio
            if (positionAscii ===32){
              let descifrado =parseInt((positionAscii-32)%26+32);
              finalResult += String.fromCharCode(descifrado);
            }*/
            //utilizacion de coma
            else if (positionAscii ===44){
              let descifrado =parseInt((positionAscii-44)%26+44);
              finalResult += String.fromCharCode(descifrado);
            }
             //numeros
          else if (positionAscii >=48 && positionAscii<=57){
            let descifrado =parseInt((positionAscii-57 - offset)%10 + 57);
            finalResult += String.fromCharCode(descifrado);
          }          
             /*else{
               finalResult += text[i]
             }*/
             }
             /*console.log(finalResult)*/
            return finalResult;     
           //document.getElementById(finalResult)
         }
     
     
       };
 





     