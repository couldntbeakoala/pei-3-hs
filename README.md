# HIDROSMART

## Sobre o projeto

"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."

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
- Integrar a API de usuário & sensor.