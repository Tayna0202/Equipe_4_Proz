const questoes =
   [
    {
        titulo: "Pergunta 01",
        descricao: "Qual serviço da AWS oferece suporte a uma arquitetura híbrida que oferece aos usuários a capacidade de estender a infraestrutura da AWS, os serviços da AWS, as APIs e as ferramentas para data centers, ambientes de co-localização ou instalações locais?",
        pergunta: "",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "AWS Fargate", correta: false},
            {titulo: "Zonas locais da AWS", correta: false},
            {titulo: "Postos avançados da AWS", correta: true},
            {titulo: "AWS Snowmobile", correta: false},
        ]
    },
    {
        titulo: "Pergunta 15",
        descricao: "Uma empresa deseja migrar seus aplicativos de seu data center local para uma VPC na Nuvem AWS. Esses aplicativos precisarão acessar recursos locais.",
        pergunta: "Quais ações atenderão a esses requisitos? (Escolha dois.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Configure uma conexão do AWS Direct Connect entre o data center local e a AWS.", correta: true},
            {titulo: "Crie uma conexão VPN entre um dispositivo local e um gateway privado virtual na VPC.", correta: true},
            {titulo: "Use o AWS Service Catalog para identificar uma lista de recursos locais que podem ser migrados.", correta: false},
            {titulo: "Use o Amazon CloudFront para restringir o acesso ao conteúdo estático da Web fornecido por meio dos servidores Web locais.", correta: false},
            {titulo: "Use uma distribuição do Amazon CloudFront e configure-a para acelerar a entrega de conteúdo perto dos recursos locais.", correta: false},
        ]
    },
    {
        titulo: "Pergunta 09",
        descricao: "Uma empresa está operando várias fábricas onde constrói produtos. A empresa precisa da capacidade de processar dados, armazenar dados e executar aplicativos com interdependências de sistema local que exigem baixa latência.",
        pergunta: "Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
        multipla: false,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Postos avançados da AWS", correta: true},
            {titulo: "AWS IoT Greengrass", correta: false},
            {titulo: "AWS Lambda", correta: false},
            {titulo: "AWS Snowball Edge", correta: false},
        ]
    },
    {
        titulo: "Pergunta 18",
        descricao: "",
        pergunta: "Quais controles de TI a AWS e o cliente compartilham, de acordo com o modelo de responsabilidade compartilhada da AWS? (Escolha dois.)",
        multipla: true,
        respondida: false,
        correta: false,
        alternativas: [
            {titulo: "Criptografia de dados do aplicativo", correta: false},
            {titulo: "Reconhecimento e treinamento em nuvem", correta: true},
            {titulo: "Segurança de zona", correta: false},
            {titulo: "Gerenciamento de patches", correta: true},
            {titulo: "Controles físicos e ambientais", correta: false},
        ]
    },
   ];