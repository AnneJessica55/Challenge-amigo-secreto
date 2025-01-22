//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo(){
   let amigoAdicionado = document.getElementById('amigo').value; 
   if(amigoAdicionado != "" && listaDeAmigos.includes(amigoAdicionado) == false){
     listaDeAmigos.push(amigoAdicionado);
     
        escreverNaTela('listaAmigos');  
    
   }else{
    if(listaDeAmigos.includes(amigoAdicionado) == true){
    alert("Esse nome já foi adicionado");
        } else{
            alert("Nome inválido.");
        }
        
    }
    limparCampo();
}


function escreverNaTela(id){
    let campo = document.getElementById(id);
    campo.innerHTML = listaDeAmigos.map(item => `<li>${item}</li>`).join("");
}
function limparCampo(){
   amigoAdicionado = document.getElementById('amigo');
   document.getElementById('resultado').innerHTML = '';
    amigoAdicionado.value = '';
}
function sortearAmigo(){
    let amigoAleatorio = parseInt(Math.random() * listaDeAmigos.length);
    
    document.getElementById('resultado').innerHTML = listaDeAmigos[amigoAleatorio];
}