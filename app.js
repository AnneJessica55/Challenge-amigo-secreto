//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
let amigoAleatorio;
let presenteadoAleatorio;
let amigosSorteados = [];
let presenteadosSorteados = [];
let listaDeSorteados = [];

function adicionarAmigo(){
   let amigoAdicionado = document.getElementById('amigo').value; 
   if(amigoAdicionado != "" && listaDeAmigos.includes(amigoAdicionado) == false){
     listaDeAmigos.push(amigoAdicionado);
     
        escreverNaTela('listaAmigos', listaDeAmigos);  
    
   }else{
    if(listaDeAmigos.includes(amigoAdicionado) == true){
    alert("Esse nome já foi adicionado");
        } else{
            alert("Nome inválido.");
        }
        
    }
    limparCampo();
    amigosSorteados = [];
    presenteadosSorteados = [];
}

function aleatorizar (){
    let aleatorio = parseInt(Math.random() * listaDeAmigos.length - 0.5);
    return aleatorio;
}


function escreverNaTela(id, lista){
    let taG = document.createElement('li');
    for(var i = 0; i < lista.length; i++){
        
        taG.textContent = lista[i];
                
    }
    document.getElementById(id).appendChild(taG);
   
}

function limparCampo(){
   amigoAdicionado = document.getElementById('amigo');
   document.getElementById('resultado').innerHTML = '';
    amigoAdicionado.value = '';
}
function sortearAmigo(){
    amigoAleatorio = aleatorizar();
    presenteadoAleatorio = aleatorizar();
    if(listaDeAmigos.length % 2 == 0){
        if(amigosSorteados.length != listaDeAmigos.length){
            while(amigoAleatorio == presenteadoAleatorio){
                amigoAleatorio = aleatorizar();
                presenteadoAleatorio = aleatorizar();
            }

            while(amigosSorteados.includes(amigoAleatorio) == true || presenteadosSorteados.includes(presenteadoAleatorio) == true){
                amigoAleatorio = aleatorizar();
                presenteadoAleatorio = aleatorizar();
            }

            amigosSorteados.push(amigoAleatorio);
            presenteadosSorteados.push(presenteadoAleatorio);
            //Criando um array de texto
            listaDeSorteados.push(`${listaDeAmigos[amigoAleatorio]} ---> ${listaDeAmigos[presenteadoAleatorio]}`);

            escreverNaTela('resultado', listaDeSorteados);

        }else{
            document.getElementById('resultado').innerHTML = "Todos ja foram Sorteados"
            listaDeSorteados = [];
            amigosSorteados = [];
            presenteadosSorteados = [];
        }

    } else{
        document.getElementById('resultado').innerHTML = 'A quantidade de participantes deve ser par.'
    }
}