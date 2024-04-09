# Churrascômetro

O projeto Churrascômetro foi desenvolvido como requisito de conclusão do módulo Javascript da bolsa de estudos Santander Coders 2023/2. Turma: 1121

Este projeto apresenta uma versão de Calculadora para churrasco desenvolvido para facilitar a sua festa e ter o controle dos ingredientes.

## Enunciado do projeto prático
### Objetivo
O objetivo desta atividade é desenvolver uma calculadora chamada "Churrascômetro" que tem o intuito de calcular os itens para um churrasco. A página deve funcionar em 3 passos, sendo que cada passo pode ser uma tela montada dinamicamente dentro do mesmo arquivo HTML ou simplesmente os componentes sendo atualizados dinamicamente.

### Requisitos
- O primeiro passo deve exibir 4 campos para digitar "nome, e-mail e CEP além de checkbox de consentimento com o texto "aceito receber e-mails com promoções".
- Os campos "nome", "e-mail" e CEP devem ser obrigatórios;
- O campo "e-mail" deve conter um e-mail válido;
- O checkbox deve ser carregado marcado automaticamente;
- Caso algum campo esteja inválido, deve haver uma indicação visual na tela;
- Uma vez que o usuário já tenha preenchido estes campos, não devemos solicitá-los novamente após a página ser recarregada.
- O passo seguinte deve conter 3 ou 4 campos para indicar a quantidade de pessoas entre (homens, mulheres/adultos, crianças e pessoas que bebem bebidas alcoólicas).
- Os campos devem permitir somente inteiros não negativos;
- O terceiro passo deve exibir uma tabela com o resultado do cálculo com a quantidade indicada para cada um dos itens. Os itens são: carne, cerveja, sal grosso, refrigerante, água, carvão, gelo e pão de alho.

### Tabela de referência (sugestão)
- **Carne**
  - Homem • 400g
  - Mulher • 320g
  - Criança • 200g

- **Pão de Alho**
  - Homem • 2 unidades
  - Mulher • 2 unidades
  - Criança • 1 unidade

- **Carvão**
  - Homem • 1kg
  - Mulher • 1kg
  - Criança • 1kg

- **Sal**
  - Homem • 40g
  - Mulher • 40g
  - Criança • 40g

- **Gelo**
  - Homem • 500g
  - Mulher • 500g
  - Criança • 500g

- **Refrigerane**
  - Homem • 400ml
  - Mulher • 400ml
  - Criança • 400ml

- **Água**
  - Homem • 200ml
  - Mulher • 200ml
  - Criança • 200ml

- **Cerveja**
  - Homem • 3 garrafas de 600ml
  - Mulher • 3 garrafas de 600ml
  - Criança • Não bebe

### Critérios
- [x] A calculadora deve funcionar corretamente e atender aos requisitos especificados;
- [x] O código deve fazer uso de seletores e métodos para manipulação do DOM;
- [x] O código deve fazer uso de adição e remoção de classes e estilização através do Javascript;
- [x] O código deve fazer uso de eventos ligados aos elementos da página;
- [x] O código deve fazer uso de armazenamento no browser (Web Storage API);
- [x] O código deve fazer uso de chamadas assíncronas e seus derivados.

![GIF]()

## Ferramentas e Tecnologias
- HTML 5
- CSS
- JS Vanilla
  
## 🚀 Iniciando com fins de Teste
Estas instruções abaixo permitirão que você obtenha uma cópia do projeto em operação na sua máquina local.

#### 🔗 Clonar o Repositório

```bash

http: git clone https://github.com/arthurcaaldas/Projeto-Adatech-Churras-DOM.git
ssh: git clone git@github.com:arthurcaaldas/Projeto-Adatech-Churras-DOM.git
```

#### 📋 Pré-requisitos
Antes de começar, certifique-se de ter os seguintes requisitos instalados em sua máquina:

1. **Git:** [Download e Instalação do Git](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git)

2. **Visual Studio Code (opcional, mas recomendado):** [Download e Instalação do Visual Studio Code](https://code.visualstudio.com/)

Certifique-se de seguir as instruções de instalação adequadas para o sistema operacional que você está usando.

Após a instalação, você pode verificar se o Git foi instalado corretamente usando o seguinte comando no terminal:


```bash
git --version
```

## ⚙️ Executando os Testes

Para testar o seu website localmente utilizando o Live Server no Visual Studio Code, siga os passos abaixo:

1. **Instale a Extensão Live Server:**
  - Caso ainda não tenha a extensão Live Server instalada, você pode encontrá-la na [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

2. **Abra o Arquivo HTML Principal:**
  - Certifique-se de que o seu arquivo HTML principal está aberto no Visual Studio Code.
     
3. **Inicie o Live Server:**
  - Clique com o botão direito do mouse no arquivo HTML aberto.
  - Selecione a opção "Open with Live Server".
     
O Live Server iniciará um servidor local e abrirá o seu website no navegador padrão. Qualquer alteração que você fizer nos arquivos do projeto será automaticamente refletida no navegador.

Certifique-se de testar as diferentes funcionalidades e visualizar o seu website localmente.

## 📌 Versão
#v1.0
Usamos Git para controle de versão. Para as versões disponíveis, observe as tags neste repositório.

## ✒️ Desenvolvedor
[Arthur Caldas](https://github.com/arthurcaaldas)