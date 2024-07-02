# HIDROSMART

## Sobre o projeto

Nascido de uma ideia de um *brainstorm* como tópico de sustentabilidade, inicialmente proposta em virtude do tempo gasto para uma atividade que envolva água, foi se tornando mais complexa ao decorrer de seu desenvolvimento até se tornar um **projeto** que se trata do **desenvolvimento de um sistema de monitoramento do consumo de água** por meio de *sensores de arduino* e um *aplicativo móvel*.

Pois, dada a dificuldade encontrada para o monitoramento específico do uso da água e o desperdício desta, surge a necessidade de inovar em uma ideia capaz de auxiliar na economia desse recurso precioso.

O projeto visa criar um sistema de monitoramento de água utilizando sensores de Arduino, que transmitem os dados coletados pelo mesmo, visando um controle prático nas mãos dos usuários sobre o que é diretamente utilizado de modo isolado, como, por exemplo, um cômodo especifico, chuveiro ou torneira, tendo em vista sempre a inovação e sustentabilidade.

## O que faz?

### Explicação dos Arquivos

<details>
  <summary>
    Páginas
  </summary>
  
  - `index.html` é a página principal do site em si.
  - `sign-in.html` é a página de login & cadastro de usuário.
  - `home.html` é a página principal após o login de usuário.
    > `chart-home.html` é a página em que serão apresentados os gráficos a partir da página da listagem & configuração de sensores.
    
    > `sensor-home.html` é a página em que serão apresentados os sensores pertencentes àquele usuário, com sua listagem e opção de configurações razoáveis.

</details>

<details>
  <summary>
    Estilos
  </summary>
  
  - `styles.css` é a folha de estilos geral que afeta todas as páginas.
  - `sign-access.css` é a folha de estilos específica para os elementos existentes nesta página (formulário).
  - `home-assets.css` é a folha de estilos específica para os elementos existentes nesta página (tabela).

</details>

<details>
  <summary>
    Scripts
  </summary>
  
  - `script.js` é o código responsável por todas as interações básicas (de elementos repetidos em todas as páginas) ocorrentes nas páginas.
  - `home-assets.js` é o código responsável pela interação com tabela para copiar o conteúdo interno (específico da página `home.html` porque atualmente somente ela utiliza a tabela).
    <!-- Verificar como será mostrada a tabela com as informações, se será na mesma página da apresentação de gráfico ou um redirecionamento a outra página ainda para existir -->
  
</details>

## O que está faltando?

- Terminar a lista de sensores e a lógica por trás.
- Relacionar login de usuário com a página (`home.html`).
- ~~Decidir & adicionar perguntas no cadastro (`sign-in.html`) em relação à tarifa para que o usuário selecione as devidas informações, resultando no site relacionando-as ao banco de dados da Cesan sobre as tarifas; adequando-se ao que o usuário informou.~~
- Integrar a API de ~~usuário &~~ sensor.