# Módulo 14 - JavaScript III

## DOM

- Document Object Model
- Estrutura de um arquivo na web
- Representa os arquivos HTML ou XML
- Interface de programação
- Não é uma linguagem de programação
- É essencial para o javaScript entender o modelo da página web

### Pra que serve?

- Alterar a estrutura
- Alterar o estilo
- Alterar o conteúdo

### Como?

- Disponibilza API (Application Programming Interface)
- Rotinas e padrões estabelecidos
- Método (funções)
- Árvore de elementos
- Seletores
- Objetos (nodes)

### DOM VS JS

- O DOM pode ser usado por outras linguagens de programação
- Sem o DOM o JS não teria noção da página

### Vantagens do JS

- Código é executado pelos navegadores  
- Torna as páginas dinâmicas  
- Evita requisições desnecessárias (performance)  
- SPA (Single Page Application)  
- Reagir rapidamente a ações do usuário  

### Desvantagens do JS

- Código é executado pelos navegadores  
- O conteúdo não fica visível para indexadores de busca  
- Alterações no tempo de execução não ficam salvas em documento  

### Exemplos

- Primeiro ele seleciona o objeto (métodos/funções)
- Para depois relizar um callback
- Ex.: objeto.callback()
  
- document.getElementById(id)
- document.getElementByTagName('div')
- document.createElement('div')
- parentNode.appendChild(node) // html.apprendChild('body') - vai inserir um novo node dentro do html chamado body

- element.innerHTML - insere itens no html
- element.style
- element.setAttribute('name')
- element.getAttribute('name')
- element.addEventListener() - fica observando o elemento

- window.location - informação
- window.onload(en-US) - informação
- window.scrollTo()

- console.log()

### Seletores

- Tipo de seletores = Tag, Id, Class, Name, Query
- Callback
- getElementById()
- getElementByTagName()
- getElementByName()
- getElementByClassName()
- querySelectorAll() // ('.class) ('#id)

### Resources

- https://dom.spec.whatwg.org
- https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer
    - https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/The_web_and_web_standards 
    - https://developer.mozilla.org/en-US/docs/Learn/Learning_and_getting_help

### Formulários

- 
