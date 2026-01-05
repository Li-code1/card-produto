## 📄 README.md

```markdown
# 🛒 Loja Virtual - Card de Produto

Este projeto é uma aplicação **React + Vite** que simula uma loja virtual com cards de produtos interativos.  
Cada produto pode ser adicionado ou removido do carrinho, com feedback visual, contador de itens e persistência no `localStorage`.

---

## ✨ Funcionalidades

- **Cards responsivos** com nome, preço e botão de ação.  
- **Botão dinâmico**:
  - Azul refinado quando o produto não está no carrinho.
  - Verde elegante quando o produto foi adicionado.  
- **Contador de itens** no carrinho exibido no topo da página.  
- **Mensagens de feedback animadas** ao adicionar ou remover produtos.  
- **Persistência no localStorage**: os itens permanecem no carrinho mesmo após recarregar a página.  
- **Tema global com Styled Components** para cores, fontes e espaçamentos consistentes.  

---

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/)  
- [Vite](https://vitejs.dev/)  
- [Styled Components](https://styled-components.com/)  
- [LocalStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)  

---

## 🚀 Como executar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/loja-virtual.git
cd loja-virtual
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Rodar em ambiente de desenvolvimento
```bash
npm run dev
```

### 4. Gerar build de produção
```bash
npm run build
```

### 5. Publicar no GitHub Pages
```bash
npm run deploy
```

---

## 📂 Estrutura de Pastas

```
src/
 ├── App.jsx          # Componente principal com contador e feedback
 ├── CardProduto.jsx  # Card de produto estilizado e responsivo
 ├── main.jsx         # Ponto de entrada da aplicação
 ├── theme.js         # Tema global (cores, fontes, espaçamentos)
 └── assets/          # Imagens e recursos estáticos
```

---

## 🎨 Estilo e Tema

- **Cores principais**:  
  - Azul refinado (`#0d6efd`)  
  - Verde elegante (`#198754`)  
  - Dourado para foco (`#ffc107`)  

- **Fontes**:  
  - Corpo: Roboto  
  - Títulos: Poppins  

- **Responsividade**:  
  - Cards ocupam 100% da largura em telas pequenas.  
  - Layout flexível com `flex-wrap`.  

---

## 📌 Melhorias Futuras

- Implementar **modo escuro (dark mode)** com alternância de tema.  
- Adicionar **lista detalhada do carrinho** com quantidade e total.  
- Integração com API para produtos dinâmicos.  

---

## 👩‍💻 Autora

Projeto desenvolvido por **Liliane** 🌸  
```

---