# Projeto: Podcast Manager

### Nome do aplicativo: 
    Podcast Manager

### Descrição: 
    Criar um app ao estilo Netflix onde seja possível centralizar diferentes episódios de podcasts separados por categorias.

### Domínio:
    Podcasts em vídeo

### Funcionalidade(s):

    1 - Listar os episódios dos Podcasts em sessões por categorias
       [ Saúde
         Fitness
         Mentalidade
         Humor
         Esporte
       ]

    2 - Filtrar episódios por nome de Podcast

### Implementação:
#### Funcionalidade: 
    Listar os episódios dos Podcasts em sessões por categorias

#### Como vou implementar:
   GET: retorna a lista de episódios
       1- nome do podcast
       2- nome do episódio
       3- imagem da capa
       4- link do podcast
       5- categoria
    response:
    
    {
        podcastName: "Flow",
        episodeName: "CRUM - Flow #467",
        videoId: "TECEWo71Qjc",
        categories: ["saúde", "bodybuilder"]
    }


#### Funcionalidade: 
    Filtrar episódios por nome de Podcast


#### Como vou implementar:
   GET: retorna lista de episódios baseado em um parametro enviado pelo cliente com o nome do podcast
   
       1- nome do podcast
       2- nome do episódio
       3- imagem da capa
       4- link do podcast
       5- categoria
    response:

    Vou retornar em uma API Rest um arquivo (json) para que consiga alimentar um frontend as seguintes informações:
       1- nome do podcast
       2- nome do episódio
       3- imagem da capa
       4- link do podcast
       5- categoria
       6- política
 
    [
        {
            podcastName: "Flow",
            episodeName: "Lucia Helena Galvão - Flow #467",
            videoId: "TECEWo71Qjc",
            categories: ["saúde", "bodybuilder"]
        },
         {
            podcastName: "Flow",
            episodeName: "Renan Santos - Flow #472",
            videoId: "K4IxPBLZKoI",
            categories: ["política"]
        }
    ]
 