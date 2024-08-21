document.addEventListener('DOMContentLoaded', function() {
    const perguntas = document.querySelectorAll('ol > li');
    let indiceAtual = 0;
    let acertos = 0;

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

    perguntas.forEach((pergunta, indice) => {
        const checkboxes = pergunta.querySelectorAll('input[type="checkbox"]');
        const radios = pergunta.querySelectorAll('input[type="radio"]');
        const divResposta = pergunta.querySelector('.answer');

        if (checkboxes.length > 0) {
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    const respostasSelecionadas = Array.from(pergunta.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
                    let respostaCorreta = false;

                    switch (indice) {
                        case 14:
                            if (respostasSelecionadas.includes('a') && respostasSelecionadas.includes('b') && respostasSelecionadas.length === 2) {
                                respostaCorreta = true;
                            }
                            break;

                        case 17:
                            if (respostasSelecionadas.includes('b') && respostasSelecionadas.includes('d') && respostasSelecionadas.length === 2) {
                                respostaCorreta = true;
                            }
                            break;

                        case 22:
                            if (respostasSelecionadas.includes('a') && respostasSelecionadas.includes('d') && respostasSelecionadas.length === 2) {
                                respostaCorreta = true;
                            }
                            break;

                        case 24:
                            if (respostasSelecionadas.includes('a') && respostasSelecionadas.includes('d') && respostasSelecionadas.length === 2) {
                                respostaCorreta = true;
                            }
                            break;

                        case 32:
                            if (respostasSelecionadas.includes('a') && respostasSelecionadas.includes('b') && respostasSelecionadas.length === 2) {
                                respostaCorreta = true;
                            }
                            break;

                        case 34:
                            if (respostasSelecionadas.includes('b') && respostasSelecionadas.includes('e') && respostasSelecionadas.length === 2) {
                                respostaCorreta = true;
                            }
                            break;

                        case 44:
                            if (respostasSelecionadas.includes('b') && respostasSelecionadas.includes('d') && respostasSelecionadas.length === 2) {
                                respostaCorreta = true;
                            }
                            break;

                        case 46:
                            if (respostasSelecionadas.includes('c') && respostasSelecionadas.includes('e') && respostasSelecionadas.length === 2) {
                                respostaCorreta = true;
                            }
                            break;

                        case 50:
                            if (respostasSelecionadas.includes('a') && respostasSelecionadas.includes('c') && respostasSelecionadas.length === 2) {
                                respostaCorreta = true;
                            }
                            break;

                        case 60:
                            if (respostasSelecionadas.includes('b') && respostasSelecionadas.includes('c') && respostasSelecionadas.length === 2) {
                                respostaCorreta = true;
                            }
                            break;

                        case 61:
                            if (respostasSelecionadas.includes('a') && respostasSelecionadas.includes('e') && respostasSelecionadas.length === 2) {
                                respostaCorreta = true;
                            }
                            break;

                        case 64:
                            if (respostasSelecionadas.includes('c') && respostasSelecionadas.includes('e') && respostasSelecionadas.length === 2) {
                                respostaCorreta = true;
                            }
                            break;

                        default:
                            break;
                    }

                    if (respostaCorreta) {
                        divResposta.textContent = 'Acertou Mizavil!';
                        divResposta.classList.add('correta');
                        divResposta.classList.remove('incorreta');
                        acertos++;
                    } else {
                        divResposta.textContent = 'Que Pena, Tente outra vez';
                        divResposta.classList.remove('correta');
                        divResposta.classList.add('incorreta');
                    }
                });
            });
        } else {
            radios.forEach(radio => {
                radio.addEventListener('change', function() {
                    const valorSelecionado = this.value;
                    let respostaCorreta = false;

                    switch (indice) {
                        case 0:
                            if (valorSelecionado === 'Postos avançados da AWS') respostaCorreta = true;
                            break;
                        case 1:
                            if (valorSelecionado === 'Para permitir a comunicação entre a VPC e a internet') respostaCorreta = true;
                            break;
                        case 2:
                            if (valorSelecionado === 'AWS Transit Gateway') respostaCorreta = true;
                            break;
                        case 3:
                            if (valorSelecionado === 'Backup and restore') respostaCorreta = true;
                            break;
                        case 4:
                            if (valorSelecionado === 'Projetar estratégias de criptografia em repouso') respostaCorreta = true;
                            break;
                        case 5:
                            if (valorSelecionado === 'Armazenamento de instâncias do Amazon EC2') respostaCorreta = true;
                            break;
                        case 6:
                            if (valorSelecionado === 'Amazon AppStream2.0') respostaCorreta = true;
                            break;
                        case 7:
                            if (valorSelecionado === 'Segurança') respostaCorreta = true;
                            break;
                        case 8:
                            if (valorSelecionado === 'Postos avançados da AWS') respostaCorreta = true;
                            break;
                        case 9:
                            if (valorSelecionado === 'O usuário raiz é a primeira identidade de login disponível quando uma conta da AWS é criada.') respostaCorreta = true;
                            break;
                        case 10:
                            if (valorSelecionado === 'Valor-chave') respostaCorreta = true;
                            break;
                        case 11:
                            if (valorSelecionado === 'Preços pré-pagos') respostaCorreta = true;
                            break;
                        case 12:
                            if (valorSelecionado === 'Amazon CloudFront') respostaCorreta = true;
                            break;
                        case 13:
                            if (valorSelecionado === 'Escudo AWS (AWS SHIELD)') respostaCorreta = true;
                            break;
                        case 15:
                            if (valorSelecionado === 'AWS Storage Gateway') respostaCorreta = true;
                            break;
                        case 16:
                            if (valorSelecionado === 'AWS Organizations') respostaCorreta = true;
                            break;
                        case 18:
                            if (valorSelecionado === 'AWS CloudTrail') respostaCorreta = true;
                            break;
                        case 19:
                            if (valorSelecionado === 'AWS KMS') respostaCorreta = true;
                            break;
                        case 20:
                            if (valorSelecionado === 'Não há compromissos de custos iniciais') respostaCorreta = true;
                            break;
                        case 21:
                            if (valorSelecionado === 'AWS Snowball') respostaCorreta = true;
                            break;
                        case 23:
                            if (valorSelecionado === 'Calculadora de definição de preço da AWS') respostaCorreta = true;
                            break;
                        case 25:
                            if (valorSelecionado === 'Excelência operacional') respostaCorreta = true;
                            break;
                        case 26:
                            if (valorSelecionado === 'Amazon GuardDuty') respostaCorreta = true;
                            break;
                        case 27:
                            if (valorSelecionado === 'Use o AWS CloudTrail para ver se o security group foi alterado.') respostaCorreta = true;
                            break;
                        case 28:
                            if (valorSelecionado === 'ACL de rede') respostaCorreta = true;
                            break;
                        case 29:
                            if (valorSelecionado === 'AWS IAM Access Analyzer') respostaCorreta = true;
                            break;
                        case 30:
                            if (valorSelecionado === 'AWS Global Accelerator') respostaCorreta = true;
                            break;
                        case 31:
                            if (valorSelecionado === 'VPC Flow Logs') respostaCorreta = true;
                            break;
                        case 33:
                            if (valorSelecionado === 'Organizações da AWS') respostaCorreta = true;
                            break;
                        case 35:
                            if (valorSelecionado === 'Coloque as instâncias do EC2 em duas zonas de disponibilidade separadas na mesma região da AWS.') respostaCorreta = true;
                            break;
                        case 36:
                            if (valorSelecionado === 'Amazon Comprehend') respostaCorreta = true;
                            break;
                        case 37:
                            if (valorSelecionado === 'AWS Organizations') respostaCorreta = true;
                            break;
                        case 38:
                            if (valorSelecionado === 'Amazon Polly') respostaCorreta = true;
                            break;
                        case 39:
                            if (valorSelecionado === 'Grupos de segurança') respostaCorreta = true;
                            break;
                        case 40:
                            if (valorSelecionado === 'Zonas locais da AWS') respostaCorreta = true;
                            break;
                        case 41:
                            if (valorSelecionado === 'Amazon Simple Queue Service (Amazon SQS)') respostaCorreta = true;
                            break;
                        case 42:
                            if (valorSelecionado === 'VPC peering') respostaCorreta = true;
                            break;
                        case 43:
                            if (valorSelecionado === 'AWS Shield') respostaCorreta = true;
                            break;
                        case 45:
                            if (valorSelecionado === 'AWS Artifact') respostaCorreta = true;
                            break;
                        case 47:
                            if (valorSelecionado === 'Uma VPC pode abranger todas as zonas de disponibilidade em uma região da AWS.') respostaCorreta = true;
                            break;
                        case 48:
                            if (valorSelecionado === 'Grupo de segurança') respostaCorreta = true;
                            break;
                        case 49:
                            if (valorSelecionado === 'Amazon Simple Queue Service (Amazon SQS) e AWS Lambda') respostaCorreta = true;
                            break;
                        case 51:
                            if (valorSelecionado === 'AWS Pricing Calculator') respostaCorreta = true;
                            break;
                        case 52:
                            if (valorSelecionado === 'Availability Zone') respostaCorreta = true;
                            break;
                        case 53:
                            if (valorSelecionado === 'Sub-redes; Gateways de Internet') respostaCorreta = true;
                            break;
                        case 54:
                            if (valorSelecionado === 'Controle de versão do S3') respostaCorreta = true;
                            break;
                        case 55:
                            if (valorSelecionado === 'Evite a arquitetura monolítica segmentando cargas de trabalho.') respostaCorreta = true;
                            break;
                        case 56:
                            if (valorSelecionado === 'AWS Fargate') respostaCorreta = true;
                            break;
                        case 57:
                            if (valorSelecionado === 'Ilimitado') respostaCorreta = true;
                            break;
                        case 58:
                            if (valorSelecionado === 'Todas as instâncias reservadas iniciais') respostaCorreta = true;
                            break;
                        case 59:
                            if (valorSelecionado === 'Regiões da AWS') respostaCorreta = true;
                            break;
                        case 62:
                            if (valorSelecionado === 'Crie uma função do IAM com as permissões necessárias. Anexe a função à instância do EC2.') respostaCorreta = true;
                            break;
                        case 63:
                            if (valorSelecionado === 'AWS WAF') respostaCorreta = true;
                            break;

                        default:
                            break;
                    }

                    if (respostaCorreta) {
                        divResposta.textContent = 'Acertou Mizavil!';
                        divResposta.classList.add('correta');
                        divResposta.classList.remove('incorreta');
                        acertos++;
                    } else {
                        divResposta.textContent = 'Que Pena, Tente outra vez';
                        divResposta.classList.remove('correta');
                        divResposta.classList.add('incorreta');
                    }
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
        const percentualAcertos = (acertos / perguntas.length) * 100;
        console.log(`Percentual de acertos: ${percentualAcertos.toFixed(2)}%`); // Debugging

        const resultadoFinal = document.getElementById('resultadoFinal');
        const mensagemFinal = document.getElementById('mensagemFinal');
        const percentualAcertoTexto = document.getElementById('percentualAcerto');

        percentualAcertoTexto.textContent = `Você acertou ${percentualAcertos.toFixed(2)}% das perguntas.`;

        if (percentualAcertos >= 70) {
            mensagemFinal.textContent = 'Parabéns, você foi aprovado!';
            mensagemFinal.classList.add('aprovado');
            mensagemFinal.classList.remove('reprovado');
        } else {
            mensagemFinal.textContent = 'Infelizmente, você foi reprovado.';
            mensagemFinal.classList.add('reprovado');
            mensagemFinal.classList.remove('aprovado');
        }

        resultadoFinal.style.display = 'block';
    });

    mostrarPergunta(indiceAtual);
    atualizarNavegacao();
});