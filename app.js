//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
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
    if(listaDeAmigos.length > 2){
        
        //Embaralhar lista de nomes
        const sorteados = [...listaDeAmigos].sort(() => Math.random() - 0.5);

        //criar pares
        const resultado = [];
        for(let contador_1 = 0; contador_1 < sorteados.length; contador_1++){
            const amigo = sorteados[(contador_1 + 1) % sorteados.length];
            resultado.push(`${sorteados[contador_1]} ---> ${amigo}`);
        }

        //Escrevendo o resultado na tela
        const resultadoUl = document.getElementById('resultado');
        resultado.forEach(par => {
            const uL = document.createElement('li');
            uL.textContent = par;
            resultadoUl.appendChild(uL);
        })

    } else{
        document.getElementById('resultado').innerHTML = 'Insira mais participantes'
    }
}