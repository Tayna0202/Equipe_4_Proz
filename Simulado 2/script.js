document.addEventListener('DOMContentLoaded', function() {
    const perguntas = document.querySelectorAll('ol > li');
    let indiceAtual = 0;
    let acertos = 0;
    const tempoTotal = 90 * 60 * 1000; // 90 minutos em milissegundos
    let tempoRestante = tempoTotal;
    let timerInterval;

    perguntas.forEach(pergunta => {
        pergunta.style.userSelect = 'none';
    });

    perguntas.forEach(pergunta => {
        pergunta.addEventListener('copy', function(event) {
            event.preventDefault();
            return false;
        });
    });

    function mostrarPergunta(indice) {
        perguntas.forEach((pergunta, i) => {
            pergunta.style.display = i === indice ? 'block' : 'none';
        });
    }

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
                                correto = respostasSelecionadas.includes('b') && respostasSelecionadas.includes('c') && respostasSelecionadas.length === 2;
                                break;
                            case 17:
                                correto = respostasSelecionadas.includes('a') && respostasSelecionadas.includes('b') && respostasSelecionadas.length === 2;
                                break;
                            case 22:
                                correto = respostasSelecionadas.includes('b') && respostasSelecionadas.includes('d') && respostasSelecionadas.length === 2;
                                break;
                            case 24:
                                correto = respostasSelecionadas.includes('b') && respostasSelecionadas.includes('e') && respostasSelecionadas.length === 2;
                                break;
                            case 32:
                                correto = respostasSelecionadas.includes('b') && respostasSelecionadas.includes('e') && respostasSelecionadas.length === 2;
                                break;
                            case 34:
                                correto = respostasSelecionadas.includes('a') && respostasSelecionadas.includes('c') && respostasSelecionadas.length === 2;
                                break;
                            case 44:
                                correto = respostasSelecionadas.includes('a') && respostasSelecionadas.includes('e') && respostasSelecionadas.length === 2;
                                break;
                            case 46:
                                correto = respostasSelecionadas.includes('c') && respostasSelecionadas.includes('e') && respostasSelecionadas.length === 2;
                                break;
                            case 50:
                                correto = respostasSelecionadas.includes('a') && respostasSelecionadas.includes('c') && respostasSelecionadas.length === 2;
                                break;
                            case 60:
                                correto = respostasSelecionadas.includes('a') && respostasSelecionadas.includes('e') && respostasSelecionadas.length === 2;
                                break;
                            case 61:
                                correto = respostasSelecionadas.includes('b') && respostasSelecionadas.includes('c') && respostasSelecionadas.length === 2;
                                break;
                            case 64:
                                correto = respostasSelecionadas.includes('b') && respostasSelecionadas.includes('e') && respostasSelecionadas.length === 2;
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
                                return valorSelecionado === 'Usar AWS Budgets para estabelecer orçamentos para cada conta de desenvolvedor. Configurar alertas de orçamento para valores reais e previstos para notificar os desenvolvedores quando excederem ou estiverem prestes a exceder seu orçamento designado. Usar ações do AWS Budgets para aplicar uma política DenyAll à função IAM do desenvolvedor para impedir que recursos adicionais sejam lançados quando o orçamento designado for atingido.';
                            case 1:
                                return valorSelecionado === 'Implante o Amazon DynamoDB com DynamoDB Acecelerator(DAX).';
                            case 2:
                                return valorSelecionado === 'Use o AWS Config. Configure o identificador encrypted-volumes. Aplique a chave padrão do AWS Key Management Service (AWS KMS)';
                            case 3:
                                return valorSelecionado === 'Use um fluxo de dados no Amazon Kinesis Data Streams em modo on-demand para capturar os dados de clickstream. Use o AWS Lambda para processar os dados em tempo real.';
                            case 4:
                                return valorSelecionado === 'Usar o Amazon S3 Storage Lens para identificar todos os buckets do S3 que não têm versionamento habilitado em todas as regiões.';
                            case 5:
                                return valorSelecionado === 'Criar uma política de ciclo de vida do S3 para mover os arquivos para o S3 Glacier Instant Retrieval 30 dias após a criação do objeto. Excluir os arquivos 4 anos após a criação do objeto.';
                            case 6:
                                return valorSelecionado === 'Configurar o Amazon S3 para usar pontos de acesso Multi-Region em uma configuração ativo-ativo com um único endpoint global. Configurar a replicação entre regiões do S3.';
                            case 7:
                                return valorSelecionado === 'Criar uma Imagem de Máquina da Amazon (AMI) de cada instância da aplicação. Lançar duas novas instâncias EC2 a partir da AMI. Colocar cada instância EC2 em uma Zona de Disponibilidade separada. Configurar um Network Load Balancer que tenha as instâncias EC2 como alvos.';
                            case 8:
                                return valorSelecionado === 'Usar o AWS Organizations para implantar contas. Criar uma conta de rede que tenha uma VPC com sub-redes privadas e sub-redes públicas. Usar o AWS Resource Access Manager (AWS RAM) para compartilhar as sub-redes com as contas de carga de trabalho.';
                            case 9:
                                return valorSelecionado === 'Mover o site para um bucket do Amazon S3. Configurar uma distribuição do Amazon CloudFront para o bucket S3.';
                            case 10:
                                return valorSelecionado === 'Criar um sistema de arquivos Amazon FSx for Windows File Server.Conectar o servidor de aplicação ao sistema de arquivos.';
                            case 11:
                                return valorSelecionado === 'Converter o cluster Aurora em um banco de dados global Aurora. Configurar o failover gerenciado.';
                            case 12:
                                return valorSelecionado === 'Criar um contêiner para o trabalho. Agendar o trabalho para ser executado como uma tarefa AWS Fargate em um cluster Amazon Elastic Container Service (Amazon ECS) usando o Amazon EventBridge Scheduler.';
                            case 13:
                                return valorSelecionado === 'Implementar um transit gateway com associações entre o transit gateway e as VPCs das aplicações e a VPC de serviços compartilhados. Adicionar rotas entre as VPCs das aplicações em suas sub-redes e das VPCs das aplicações para a VPC de serviços compartilhados através do transit gateway.';
                            case 15:
                                return valorSelecionado === 'Configurar um data lake no Amazon Security Lake para coletar os dados de segurança. Fazer upload dos dados para um bucket do Amazon S3.';
                            case 16:
                                return valorSelecionado === 'Migrar os bancos de dados para uma instância Multi-AZ do Amazon RDS para SQL Server. Utilizar uma chave gerenciada pela AWS Key Management Service (AWS KMS) para criptografia.';
                            case 18:
                                return valorSelecionado === 'Criar um grupo de Auto Scaling que contenha várias instâncias Amazon EC2 que hospedam a aplicação em duas Zonas de Disponibilidade. Configurar um Application Load Balancer (ALB) e definir o grupo de Auto Scaling como o alvo. Conectar um WAF ao ALB.';
                            case 19:
                                return valorSelecionado === 'Criar pontos de acesso dedicados do S3 e políticas de ponto de acessopara cada aplicação.';
                            case 20:
                                return valorSelecionado === 'Usar Notificações de Evento do S3 para escrever uma mensagem com detalhes da imagem em uma fila do Amazon Simple Queue Service (Amazon SQS). Configurar uma função AWS Lambda para ler as mensagens da fila e processar as imagens.';
                            case 21:
                                return valorSelecionado === 'AWS Storage Gateway';
                            case 23:
                                return valorSelecionado === 'Criar regras de grupo de segurança usando o ID do grupo de segurança como origem ou destino.';
                            case 25:
                                return valorSelecionado === 'Criar um cofre de backup no AWS Backup para reter os backups do RDS. Criar um novo plano de backup com uma programação diária e um período de expiração de 2 anos após a criação. Atribuir as instâncias do RDS ao plano de backup.';
                            case 26:
                                return valorSelecionado === 'Configurar uma distribuição do Amazon CloudFront com o ALB como origem. Configurar as configurações de comportamento de cache para fazer cache com base no cabeçalho de solicitação HTTP Accept-Language.';
                            case 27:
                                return valorSelecionado === 'Configure o grupo de segurança para as instâncias do EC2 para permitir apenas o tráfego que vem do grupo de segurança para o ALB.';
                            case 28:
                                return valorSelecionado === 'Criar um sistema de arquivos do Amazon Elastic File System (Amazon EFS). Montar o sistema de arquivos do EFS em todos os servidores web.';
                            case 29:
                                return valorSelecionado === 'Utilize o AWS Storage Gateway e configure um gateway de volume armazenado. Execute o appliance de software do Storage Gateway localmente e mapeie os volumes de armazenamento do gateway para o armazenamento local. Monte os volumes de armazenamento do gateway para fornecer acesso local aos dados.';
                            case 30:
                                return valorSelecionado === '10.0.1.0/28';
                            case 31:
                                return valorSelecionado === 'Provisione uma sub-rede em cada Zona de Disponibilidade. Configure o grupo de dimensionamento automático para distribuir as instâncias EC2 em ambas as Zonas de Disponibilidade. Configure a instância de banco de dados para implantação Multi-AZ.';
                            case 33:
                                return valorSelecionado === 'AWS Data Sync';
                            case 35:
                                return valorSelecionado === 'Use Amazon EFS Replication';
                            case 36:
                                return valorSelecionado === 'AWS Storage Gateway Volume Gateway cached volumes';
                            case 37:
                                return valorSelecionado === 'Implemente uma distribuição do Amazon CloudFront com o bucket S3 existente como a origem. Direcione as solicitações dos clientes para a URL do CloudFront. Mude para URLs assinadas do CloudFront para controle de acesso.';
                            case 38:
                                return valorSelecionado === 'Use o Amazon CloudFront. Forneça URLs assinadas para transmitir o conteúdo.';
                            case 39:
                                return valorSelecionado === 'Amazon Aurora Serverless for MySQL';
                            case 40:
                                return valorSelecionado === 'Criar um ponto de extremidade HTTPS no Amazon API Gateway. Configurar o ponto de extremidade do API Gateway para invocar uma função AWS Lambda para processar as mensagens e salvar os resultados em uma tabela Amazon DynamoDB.';
                            case 41:
                                return valorSelecionado === 'Criar uma fila Amazon Simple Queue Service (AmazonSQS). Envie as solicitações para a fila. Configure a fila como uma fonte de eventos para o Lambda.';
                            case 42:
                                return valorSelecionado === 'Os usuários podem encerrar uma instância do EC2 com o endereço IP 10.100.100.1 na região us-east-1.';
                            case 43:
                                return valorSelecionado === 'Configure uma conexão de emparelhamento de VPC entre VPC-A e VPC-B.';
                            case 45:
                                return valorSelecionado === 'Use consultas SQL padrão no AmazonAthena para analisar os logs do Cloud Front no bucket S3. Visualize os resultados com o AWS Glue.';
                            case 47:
                                return valorSelecionado === 'Use um VPC endpoint para DynamoDB.';
                            case 48:
                                return valorSelecionado === 'Copie os dados de ambos os volumes do EBS para o Amazon EFS. Modifique o aplicativo para salvar novos documentos no Amazon EFS.';
                            case 49:
                                return valorSelecionado === 'Use o Amazon MQ com agentes ativos/em espera configurados em duas zonas de disponibilidade. Adicione uma instância EC2 de consumidor adicional em outra zona de disponibilidade. Use o Amazon RDS for MySQL com Multi-AZ ativado';
                            case 51:
                                return valorSelecionado === 'Plano de economia de instância EC2';
                            case 52:
                                return valorSelecionado === 'Migrar o aplicativo para ser executado como contêineres no Amazon Elastic Kubernetes Service (Amazon EKS). Use o Amazon Elastic Block Store (Amazon EBS) para armazenamento.';
                            case 53:
                                return valorSelecionado === 'Use um endpoint de interface.';
                            case 54:
                                return valorSelecionado === 'Crie um relatório no Explorador de custos (Cost Explorer) e baixe o relatório.';
                            case 55:
                                return valorSelecionado === 'Estenda o ambiente de compartilhamento de arquivos para o Amazon FSx for Windows File Server com uma configuração Multi-AZ. Migre todos os dados para o FSx for Windows File Server.';
                            case 56:
                                return valorSelecionado === 'Crie uma função do IAM que tenha acesso de leitura ao parâmetro Parameter Store. Permita o acesso Decrypt a uma chave do AWS Key Management Service (AWS KMS) usada para criptografar o parâmetro. Atribua esta função do IAM à instância do EC2.';
                            case 57:
                                return valorSelecionado === 'Criptografe uma cópia do snapshot de banco de dados mais recente. Substitua a instância de banco de dados existente restaurando o snapshot criptografado.';
                            case 58:
                                return valorSelecionado === 'Mova o catálogo para o Amazon ElastiCache for Redis';
                            case 59:
                                return valorSelecionado === 'Armazene os documentos carregados em um bucket do Amazon S3 com S3 Versioning e S3 Object Lock ativados.';
                            case 62:
                                return valorSelecionado === 'Crie uma análise no Amazon QuickSight. Conecte todas as fontes de dados e crie novos conjuntos de dados. Publique painéis para visualizar os dados. Compartilhe os painéis com os usuários e grupos apropriados.';
                            case 63:
                                return valorSelecionado === 'Crie um snapshot do banco de dados. Adicione a conta da AWS da empresa adquirente à política de chaves do KMS. Compartilhe o snapshot com a conta da AWS da empresa adquirente.';
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