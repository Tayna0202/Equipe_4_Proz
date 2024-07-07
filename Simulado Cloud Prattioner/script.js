document.addEventListener('DOMContentLoaded', function() {
    const perguntas = document.querySelectorAll('ol > li');

    perguntas.forEach((pergunta, indice) => {
        const checkboxes = pergunta.querySelectorAll('input[type="checkbox"]');
        const radios = pergunta.querySelectorAll('input[type="radio"]');
        const divResposta = pergunta.querySelector('.answer');

        if (checkboxes.length > 0) { 
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    const respostasSelecionadas = Array.from(pergunta.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
                    let respostasCorretas = getRespostasCorretas(indice);
                    
                
                    const respostaCorreta = arraysIguais(respostasSelecionadas, respostasCorretas);
                    
                
                    if (respostaCorreta) {
                        divResposta.textContent = 'Acertou Mizavil!';
                        divResposta.classList.add('correta');
                        divResposta.classList.remove('incorreta');
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
                        case 14:
                            if (valorSelecionado === 'AWS DataSync') respostaCorreta = true;
                            break;
                        case 15:
                            if (valorSelecionado === 'AWS Storage Gateway') respostaCorreta = true;
                            break;
                        case 16:
                            if (valorSelecionado === 'AWS Organizations') respostaCorreta = true;
                            break;
                        case 17:
                            if (valorSelecionado === 'projeto') respostaCorreta = true;
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
                        case 22:
                            if (valorSelecionado === 'servico-atualizacao-automatica-ec2') respostaCorreta = true;
                            break;
                        case 23:
                            if (valorSelecionado === 'Calculadora de definição de preço da AWS') respostaCorreta = true;
                            break;
                        case 24:
                            if (valorSelecionado === 'AWS-IoT') respostaCorreta = true;
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
                        case 32:
                            if (valorSelecionado === 'servicos-simples-aws') respostaCorreta = true;
                            break;
                        case 33:
                            if (valorSelecionado === 'Organizações da AWS') respostaCorreta = true;
                            break;
                        case 34:
                            if (valorSelecionado === 'comunicacao-permitir-segura') respostaCorreta = true;
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
                        case 44:
                            if (valorSelecionado === 'AWS-Kinesis') respostaCorreta = true;
                            break;
                        case 45:
                            if (valorSelecionado === 'AWS Artifact') respostaCorreta = true;
                            break;
                        case 46:
                            if (valorSelecionado === 'vpc') respostaCorreta = true;
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
                        case 50:
                            if (valorSelecionado === 'grupos-seguranca') respostaCorreta = true;
                            break;
                        case 51:
                            if (valorSelecionado === ' <!-- QUESTÃO ESPECIAL DE MULTIESCOLHA-->') respostaCorreta = true;
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
                        case 60:
                            if (valorSelecionado === 'cargas-dinamicas-aws') respostaCorreta = true;
                            break;
                        case 61:
                            if (valorSelecionado === 'designar-estrategia-crip') respostaCorreta = true;
                            break;
                        case 62:
                            if (valorSelecionado === 'Crie uma função do IAM com as permissões necessárias. Anexe a função à instância do EC2.') respostaCorreta = true;
                            break;
                        case 63:
                            if (valorSelecionado === 'AWS WAF') respostaCorreta = true;
                            break;
                        case 64:
                            if (valorSelecionado === '') respostaCorreta = true;
                            break;

                        default:
                            break;
                    }
                    
                    
                    if (respostaCorreta) {
                        divResposta.textContent = 'Acertou Mizavil!';
                        divResposta.classList.add('correta');
                        divResposta.classList.remove('incorreta');
                    } else {
                        divResposta.textContent = 'Que Pena, Tente outra vez';
                        divResposta.classList.remove('correta');
                        divResposta.classList.add('incorreta');
                    }
                });
            });
        }
    });

    function getRespostasCorretas(indice) {
        switch (indice) {
            case 0:
                return ['Postos avançados da AWS'];
            case 1:
                return ['Para permitir a comunicação entre a VPC e a internet'];
            case 2:
                return ['AWS Transit Gateway'];
            case 3:
                return ['Backup and restore'];
            case 4:
                return ['Projetar estratégias de criptografia em repouso'];
            case 5:
                return ['Armazenamento de instâncias do Amazon EC2'];
            case 6:
                return ['Amazon AppStream2.0'];
            case 7:
                return ['Segurança'];
            case 8:
                return ['Postos avançados da AWS'];
            case 9:
                return ['O usuário raiz é a primeira identidade de login disponível quando uma conta da AWS é criada.'];
            case 10:
                return ['Valor-chave'];
            case 11:
                return ['Preços pré-pagos'];
            case 12:
                return ['Amazon CloudFront'];
            case 13:
                return ['Escudo AWS (AWS SHIELD)'];
            case 14:
                return ['AWS DataSync'];
            case 15:
                return ['AWS Storage Gateway'];
            case 16:
                return ['AWS Organizations'];
            case 17:
                return ['projeto'];
            case 18:
                return ['AWS CloudTrail'];
            case 19:
                return ['AWS KMS'];
            case 20:
                return ['Não há compromissos de custos iniciais'];
            case 21:
                return ['AWS Snowball'];
            case 22:
                return ['servico-atualizacao-automatica-ec2'];
            case 23:
                return ['Calculadora de definição de preço da AWS'];
            case 24:
                return ['AWS-IoT'];
            case 25:
                return ['Excelência operacional'];
            case 26:
                return ['Amazon GuardDuty'];
            case 27:
                return ['Use o AWS CloudTrail para ver se o security group foi alterado.'];
            case 28:
                return ['ACL de rede'];
            case 29:
                return ['AWS IAM Access Analyzer'];
            case 30:
                return ['AWS Global Accelerator'];
            case 31:
                return ['VPC Flow Logs'];
            case 32:
                return ['servicos-simples-aws'];
            case 33:
                return ['Organizações da AWS'];
            case 34:
                return ['comunicacao-permitir-segura'];
            case 35:
                return ['Coloque as instâncias do EC2 em duas zonas de disponibilidade separadas na mesma região da AWS.'];
            case 36:
                return ['Amazon Comprehend'];
            case 37:
                return ['AWS Organizations'];
            case 38:
                return ['Amazon Polly'];
            case 39:
                return ['Grupos de segurança'];
            case 40:
                return ['Zonas locais da AWS'];
            case 41:
                return ['Amazon Simple Queue Service (Amazon SQS)'];
            case 42:
                return ['VPC peering'];
            case 43:
                return ['AWS Shield'];
            case 44:
                return ['AWS-Kinesis'];
            case 45:
                return ['AWS Artifact'];
            case 46:
                return ['vpc'];
            case 47:
                return ['Uma VPC pode abranger todas as zonas de disponibilidade em uma região da AWS.'];
            case 48:
                return ['Grupo de segurança'];
            case 49:
                return ['Amazon Simple Queue Service (Amazon SQS) e AWS Lambda'];
            case 50:
                return ['grupos-seguranca'];
            case 51:
                return [' <!-- QUESTÃO ESPECIAL DE MULTIESCOLHA-->'];
            case 52:
                return ['Availability Zone'];
            case 53:
                return ['Sub-redes; Gateways de Internet'];
            case 54:
                return ['Controle de versão do S3'];
            case 55:
                return ['Evite a arquitetura monolítica segmentando cargas de trabalho.'];
            case 56:
                return ['AWS Fargate'];
            case 57:
                return ['Ilimitado'];
            case 58:
                return ['Todas as instâncias reservadas iniciais'];
            case 59:
                return ['Regiões da AWS'];
            case 60:
                return ['cargas-dinamicas-aws'];
            case 61:
                return ['designar-estrategia-crip'];
            case 62:
                return ['Crie uma função do IAM com as permissões necessárias. Anexe a função à instância do EC2.'];
            case 63:
                return ['AWS WAF'];
            case 64:
                return [''];

            default:
                return [];
        }
    }

    function arraysIguais(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        return arr1.every(val => arr2.includes(val)) && arr2.every(val => arr1.includes(val));
    }
});
