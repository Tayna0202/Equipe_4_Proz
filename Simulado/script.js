document.addEventListener('DOMContentLoaded', function() {
   let indiceAtual = 0;
   let acertos = 0;
const tempoTotal = 90 * 60 * 1000; 
let tempoRestante = tempoTotal;
let timerInterval;
   var titulo =document.getElementById("questao-titulo");
   var descricao = document.getElementById("descricao");
   var pergunta = document.getElementById("pergunta");
   var ulAlternativas = document.getElementById("alternativas-content");
   const statusQuestao = document.getElementById('status');
   
   function carregarQuestao() {
        let questao = questoes[indiceAtual]

        titulo.innerText = questao.titulo;
        descricao.innerText = questao.descricao;
        pergunta.innerText = questao.pergunta;

        // Limpa as alternativas anteriores
        ulAlternativas.innerHTML = "";
        statusQuestao.innerText = "";

        if (questao.respondida && questao.correta) {
            statusQuestao.innerText = 'Acertou Míseravi!';
            statusQuestao.classList.add('correta');
            statusQuestao.classList.remove('incorreta');
        } else if (questao.respondida && !questao.correta) {
            statusQuestao.innerText = 'Que Pena, Tente outra vez';
            statusQuestao.classList.remove('correta');
            statusQuestao.classList.add('incorreta');
        }


        questao.alternativas.forEach(qst => {
            var li = document.createElement("li");
            var input = document.createElement("input")
            var h4 = document.createElement("h4")
            input.type = questao.multipla ? "checkbox" : "radio"
            input.name = `q${indiceAtual + 1}`
            input.value = qst.titulo
            h4.innerText = qst.titulo
            
            // Se a questão foi respondida, desabilitar as alternativas
            input.disabled = questao.respondida ? true : false

            // Se a questão foi respondida, marca a resposta selecionada
            if (questao.respondida) {
                if (questao.multipla && questao.respostasSelecionadas.includes(qst.titulo)) {
                    input.checked = true;
                } else if (!questao.multipla && questao.respostasSelecionadas[0] === qst.titulo) {
                input.checked = true;
            }
        }

            li.style.display = "flex";
            h4.style.marginLeft = "10px"

            li.appendChild(input);
            li.appendChild(h4);
            ulAlternativas.appendChild(li);
        })
    }

    document.getElementById("btnProxima").addEventListener("click", () => {
        let questao = questoes[indiceAtual]
        let respostasSelecionadas 

        // Valida se o número de respostas selecionadas está correto
        if(questao.multipla)
            respostasSelecionadas = Array.from(ulAlternativas.querySelectorAll('input[type="checkbox"]:checked'));
        else
            respostasSelecionadas = Array.from(ulAlternativas.querySelectorAll('input[type="radio"]:checked'));
        
        if (questao.multipla && !questao.respondida && respostasSelecionadas.length != 2) {
            exibirModal("Atenção", "Selecione duas alternativas!", "alerta")
            return
        }

        if (!questao.multipla && !questao.respondida && respostasSelecionadas.length < 1) {
            exibirModal("Atenção", "Selecione uma alternativa!", "alerta")
            return
        }

        verificarQuestao(questao, respostasSelecionadas)
        
        if (indiceAtual + 1>= questoes.length ) {
            finalizarSimulado();
            return;
        }


        indiceAtual++;

        carregarQuestao()
    })

    document.getElementById("btnAnterior").addEventListener("click", () => {
        indiceAtual--;
        carregarQuestao()
    })

    document.getElementById('btnFinalizar').addEventListener('click', finalizarSimulado);

    function verificarQuestao(questao, respostasSelecionadas) {
        // Filtra as alternativas corretas
        let alternativasCorretas = questao.alternativas.filter(alt => alt.correta);
        
        // Extrai os títulos das alternativas corretas
        let titulosCorretos = alternativasCorretas.map(alt => alt.titulo);
    
        // Verifica se as respostas selecionadas estão entre as corretas
        let respostasValidas = respostasSelecionadas.every(resp => 
            titulosCorretos.includes(resp.value)
        );
    
        // Verifica se o número de respostas é o correto
        let todasCorretas = respostasSelecionadas.length === titulosCorretos.length && respostasValidas;

        
        // Armazena as respostas selecionadas
        questao.respostasSelecionadas = respostasSelecionadas.map(resp => resp.value);
        
        questao.correta = todasCorretas;
        
        if (todasCorretas)
            acertos++;
            
        exibirModal("Resposta", todasCorretas ? "Acertou Míseravi!" : "Que Pena, Tente outra vez", todasCorretas ? "correta" : "incorreta")            
        questoes[indiceAtual].respondida = true;
    }

    function finalizarSimulado() {
        // Calcular a porcentagem de acertos
        const porcentagemAcertos = (acertos / questoes.length) * 100;
    
        // Determinar se o usuário está aprovado ou reprovado
        const statusFinal = porcentagemAcertos >= 70 ? 'Aprovado' : 'Reprovado';
    
        // Atualizar a mensagem do resultado com a porcentagem e status
        const resultadoMensagem = `Você acertou ${acertos} de ${questoes.length} perguntas. (${porcentagemAcertos.toFixed(2)}% de acertos). Status: ${statusFinal}`;

        exibirModal("Resultado", resultadoMensagem, statusFinal == "Aprovado" ? "aprovado" : "reprovado", true)
    
    }

    function exibirModal(titulo, mensagem, classeEstilo, recarregar = false) {
        // Setar o titulo
        const modalTitulo = document.getElementById('modal-titulo');
        modalTitulo.textContent = titulo ;

        // Setar a mensagem
        const mensagemModal = document.getElementById('modal-mensagem');
        mensagemModal.textContent = mensagem ;

        if (classeEstilo != "")
            mensagemModal.classList.add(classeEstilo);

        // Exibir o modal
        const modal = document.getElementById('modal');
        modal.style.display = 'block';

        // Fechar o modal ao clicar no botão "Fechar"
        document.getElementById('btnFecharModal').addEventListener('click', function() {
            modal.style.display = 'none';
            if (classeEstilo != "")
                mensagemModal.classList.remove(classeEstilo)

            if(recarregar)
                window.location.reload();
        });

        // Fechar o modal ao clicar no "X"
        document.querySelector('.modal .close').addEventListener('click', function() {
            modal.style.display = 'none';
            if (classeEstilo != "")
                mensagemModal.classList.remove(classeEstilo)
        });
    
        // Fechar o modal ao clicar fora da área do modal
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                if (classeEstilo != "")
                    mensagemModal.classList.remove()
            }
        });
    }

    function atualizarTimer() {
        const minutos = Math.floor(tempoRestante / (1000 * 60));
        const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
        document.getElementById('timer').textContent = `Tempo restante: ${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

        if (tempoRestante <= 0) {
            clearInterval(timerInterval);
            document.getElementById('btnFinalizar').click(); // Simula um clique no botão Finalizar
        } else {
            tempoRestante -= 1000;
        }
    }

    function iniciarTimer() {
        timerInterval = setInterval(atualizarTimer, 1000);
    }

iniciarTimer();
window.onload = carregarQuestao;
   
});