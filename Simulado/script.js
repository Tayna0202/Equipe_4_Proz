document.addEventListener('DOMContentLoaded', function() {
    const perguntas = document.querySelectorAll('ol > li');
    let indiceAtual = 0;
    let acertos = 0;
    const tempoTotal = 90 * 60 * 1000; // 90 minutos em milissegundos
    let tempoRestante = tempoTotal;
    let timerInterval;

    function mostrarPergunta(indice) {
        perguntas.forEach((pergunta, i) => {
            pergunta.style.display = i === indice ? 'block' : 'none';
        });
    }

    function atualizarNavegacao() {
        document.getElementById('btnAnterior').style.display = indiceAtual > 0 ? 'inline' : 'none';
        document.getElementById('btnProxima').style.display = indiceAtual < perguntas.length - 1 ? 'inline' : 'none';
        document.getElementById('btnFinalizar').style.display = indiceAtual === perguntas.length - 1 ? 'inline' : 'none';
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

    perguntas.forEach((pergunta, indice) => {
        const checkboxes = pergunta.querySelectorAll('input[type="checkbox"]');
        const radios = pergunta.querySelectorAll('input[type="radio"]');
        const divResposta = pergunta.querySelector('.answer');

        if (checkboxes.length > 0) {
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    const respostasSelecionadas = Array.from(pergunta.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);

                    // Permitir apenas 2 seleções para questões de múltipla escolha
                    if (respostasSelecionadas.length > 2) {
                        this.checked = false; // Desmarcar o checkbox se o limite for excedido
                        return;
                    }

                    const respostaCorreta = () => {
                        let correto = false;
                        switch (indice) {
                            case 14:
                                correto = respostasSelecionadas.includes('a') && respostasSelecionadas.includes('b') && respostasSelecionadas.length === 2;
                                break;
                            case 17:
                                correto = respostasSelecionadas.includes('b') && respostasSelecionadas.includes('d') && respostasSelecionadas.length === 2;
                                break;
                            case 22:
                                correto = respostasSelecionadas.includes('a') && respostasSelecionadas.includes('d') && respostasSelecionadas.length === 2;
                                break;
                            case 24:
                                correto = respostasSelecionadas.includes('a') && respostasSelecionadas.includes('d') && respostasSelecionadas.length === 2;
                                break;
                            case 32:
                                correto = respostasSelecionadas.includes('a') && respostasSelecionadas.includes('b') && respostasSelecionadas.length === 2;
                                break;
                            case 34:
                                correto = respostasSelecionadas.includes('b') && respostasSelecionadas.includes('e') && respostasSelecionadas.length === 2;
                                break;
                            case 44:
                                correto = respostasSelecionadas.includes('b') && respostasSelecionadas.includes('d') && respostasSelecionadas.length === 2;
                                break;
                            case 46:
                                correto = respostasSelecionadas.includes('c') && respostasSelecionadas.includes('e') && respostasSelecionadas.length === 2;
                                break;
                            case 50:
                                correto = respostasSelecionadas.includes('a') && respostasSelecionadas.includes('c') && respostasSelecionadas.length === 2;
                                break;
                            case 60:
                                correto = respostasSelecionadas.includes('b') && respostasSelecionadas.includes('c') && respostasSelecionadas.length === 2;
                                break;
                            case 61:
                                correto = respostasSelecionadas.includes('a') && respostasSelecionadas.includes('e') && respostasSelecionadas.length === 2;
                                break;
                            case 64:
                                correto = respostasSelecionadas.includes('c') && respostasSelecionadas.includes('e') && respostasSelecionadas.length === 2;
                                break;
                            default:
                                correto = false;
                        }
                        return correto;
                    }

                    if (respostasSelecionadas.length === 2) {
                        // Se 2 opções forem marcadas, bloquear os checkboxes
                        checkboxes.forEach(cb => cb.disabled = true);

                        if (respostaCorreta()) {
                            divResposta.textContent = 'Acertou Míseravi!';
                            divResposta.classList.add('correta');
                            divResposta.classList.remove('incorreta');
                            acertos++;
                        } else {
                            divResposta.textContent = 'Que Pena, Tente outra vez';
                            divResposta.classList.remove('correta');
                            divResposta.classList.add('incorreta');
                        }
                    }
                });
            });
        } else {
            radios.forEach(radio => {
                radio.addEventListener('change', function() {
                    const valorSelecionado = this.value;
                    const respostaCorreta = () => {
                        switch (indice) {
                            case 0:
                                return valorSelecionado === 'Postos avançados da AWS';
                            case 1:
                                return valorSelecionado === 'Para permitir a comunicação entre a VPC e a internet';
                            case 2:
                                return valorSelecionado === 'AWS Transit Gateway';
                            case 3:
                                return valorSelecionado === 'Backup and restore';
                            case 4:
                                return valorSelecionado === 'Projetar estratégias de criptografia em repouso';
                            case 5:
                                return valorSelecionado === 'Armazenamento de instâncias do Amazon EC2';
                            case 6:
                                return valorSelecionado === 'Amazon AppStream2.0';
                            case 7:
                                return valorSelecionado === 'Segurança';
                            case 8:
                                return valorSelecionado === 'Postos avançados da AWS';
                            case 9:
                                return valorSelecionado === 'O usuário raiz é a primeira identidade de login disponível quando uma conta da AWS é criada.';
                            case 10:
                                return valorSelecionado === 'Valor-chave';
                            case 11:
                                return valorSelecionado === 'Preços pré-pagos';
                            case 12:
                                return valorSelecionado === 'Amazon CloudFront';
                            case 13:
                                return valorSelecionado === 'Escudo AWS (AWS SHIELD)';
                            case 15:
                                return valorSelecionado === 'AWS Storage Gateway';
                            case 16:
                                return valorSelecionado === 'AWS Organizations';
                            case 18:
                                return valorSelecionado === 'AWS CloudTrail';
                            case 19:
                                return valorSelecionado === 'AWS KMS';
                            case 20:
                                return valorSelecionado === 'Não há compromissos de custos iniciais';
                            case 21:
                                return valorSelecionado === 'AWS Snowball';
                            case 23:
                                return valorSelecionado === 'Calculadora de definição de preço da AWS';
                            case 25:
                                return valorSelecionado === 'Excelência operacional';
                            case 26:
                                return valorSelecionado === 'Amazon GuardDuty';
                            case 27:
                                return valorSelecionado === 'Use o AWS CloudTrail para ver se o security group foi alterado.';
                            case 28:
                                return valorSelecionado === 'ACL de rede';
                            case 29:
                                return valorSelecionado === 'AWS IAM Access Analyzer';
                            case 30:
                                return valorSelecionado === 'AWS Global Accelerator';
                            case 31:
                                return valorSelecionado === 'VPC Flow Logs';
                            case 33:
                                return valorSelecionado === 'Organizações da AWS';
                            case 35:
                                return valorSelecionado === 'Coloque as instâncias do EC2 em duas zonas de disponibilidade separadas na mesma região da AWS.';
                            case 36:
                                return valorSelecionado === 'Amazon Comprehend';
                            case 37:
                                return valorSelecionado === 'Cost Explorer';
                            case 38:
                                return valorSelecionado === 'Amazon Polly';
                            case 39:
                                return valorSelecionado === 'Grupos de segurança';
                            case 40:
                                return valorSelecionado === 'Zonas locais da AWS';
                            case 41:
                                return valorSelecionado === 'Amazon Simple Queue Service (Amazon SQS)';
                            case 42:
                                return valorSelecionado === 'VPC peering';
                            case 43:
                                return valorSelecionado === 'AWS Shield';
                            case 45:
                                return valorSelecionado === 'AWS Artifact';
                            case 47:
                                return valorSelecionado === 'Uma VPC pode abranger todas as zonas de disponibilidade em uma região da AWS.';
                            case 48:
                                return valorSelecionado === 'Grupo de segurança';
                            case 49:
                                return valorSelecionado === 'Amazon Simple Queue Service (Amazon SQS) e AWS Lambda';
                            case 51:
                                return valorSelecionado === 'AWS Pricing Calculator';
                            case 52:
                                return valorSelecionado === 'Availability Zone';
                            case 53:
                                return valorSelecionado === 'Sub-redes; Gateways de Internet';
                            case 54:
                                return valorSelecionado === 'Controle de versão do S3';
                            case 55:
                                return valorSelecionado === 'Evite a arquitetura monolítica segmentando cargas de trabalho.';
                            case 56:
                                return valorSelecionado === 'AWS Fargate';
                            case 57:
                                return valorSelecionado === 'Ilimitado';
                            case 58:
                                return valorSelecionado === 'Todas as instâncias reservadas iniciais';
                            case 59:
                                return valorSelecionado === 'Regiões da AWS';
                            case 62:
                                return valorSelecionado === 'Crie uma função do IAM com as permissões necessárias. Anexe a função à instância do EC2.';
                            case 63:
                                return valorSelecionado === 'AWS WAF';
                            case 64:
                                return valorSelecionado === 'AWS Secrets Manager';
                           
                            default:
                                return false;
                        }
                    }

                    if (respostaCorreta()) {
                        divResposta.textContent = 'Acertou Míseravi!';
                        divResposta.classList.add('correta');
                        divResposta.classList.remove('incorreta');
                        acertos++;
                        // Desativar rádios após resposta correta
                        radios.forEach(r => r.disabled = true);
                    } else {
                        divResposta.textContent = 'Que Pena, Tente outra vez';
                        divResposta.classList.remove('correta');
                        divResposta.classList.add('incorreta');
                    }

                    // Desabilitar todos os rádios após uma seleção
                    radios.forEach(r => r.disabled = true);
                });
            });
        }
    });

    document.getElementById('btnAnterior').addEventListener('click', function() {
        if (indiceAtual > 0) {
            indiceAtual--;
            mostrarPergunta(indiceAtual);
            atualizarNavegacao();
        }
    });

    document.getElementById('btnProxima').addEventListener('click', function() {
        if (indiceAtual < perguntas.length - 1) {
            indiceAtual++;
            mostrarPergunta(indiceAtual);
            atualizarNavegacao();
        }
    });

    document.getElementById('btnFinalizar').addEventListener('click', function() {
        // Calcular a porcentagem de acertos
        const porcentagemAcertos = (acertos / perguntas.length) * 100;
    
        // Determinar se o usuário está aprovado ou reprovado
        const statusFinal = porcentagemAcertos >= 70 ? 'Aprovado' : 'Reprovado';
    
        // Atualizar a mensagem do resultado com a porcentagem e status
        document.getElementById('resultadoMensagem').textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas. (${porcentagemAcertos.toFixed(2)}% de acertos). Status: ${statusFinal}`;
    
        // Exibir o modal
        const modal = document.getElementById('resultadoModal');
        modal.style.display = 'block';
    
        // Fechar o modal ao clicar no botão "Fechar"
        document.getElementById('btnFecharModal').addEventListener('click', function() {
            modal.style.display = 'none';
        });
    
        // Fechar o modal ao clicar no "X"
        document.querySelector('.modal .close').addEventListener('click', function() {
            modal.style.display = 'none';
        });
    
        // Fechar o modal ao clicar fora da área do modal
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    mostrarPergunta(indiceAtual);
    atualizarNavegacao();
    iniciarTimer();
});