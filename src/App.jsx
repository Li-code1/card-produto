import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import CardProduto from "./CardProduto";

// 🎨 Animações para feedback
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-10px); }
`;

// 🔔 Mensagem de feedback estilizada
const Mensagem = styled.div`
  margin-top: ${({ theme }) => theme.spacing.small};
  background: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.radius.small};
  color: #fff;
  font-weight: 500;
  animation: ${(props) => (props.visivel ? fadeIn : fadeOut)} 0.5s ease forwards;
`;

// 🛒 Header estilizado
const Header = styled.header`
  padding: ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.text};
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.small};
`;

const Main = styled.main`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing.large};
  justify-content: center;
`;

export default function App() {
  const produtosIniciais = [
    { id: 1, nome: "Notebook Dell", preco: "R$ 3.500,00" },
    { id: 2, nome: "Mouse Gamer", preco: "R$ 150,00" },
    { id: 3, nome: "Teclado Mecânico", preco: "R$ 450,00" }
  ];

  // ✅ Estado inicial do carrinho vindo do localStorage
  const [adicionados, setAdicionados] = useState(() => {
    const saved = localStorage.getItem("carrinho");
    return saved ? JSON.parse(saved) : {};
  });

  const [mensagem, setMensagem] = useState("");
  const [visivel, setVisivel] = useState(false);

  // 💾 Salvar carrinho no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(adicionados));
  }, [adicionados]);

  // Alternar produto no carrinho
  const toggleProduto = (id, nome) => {
    setAdicionados((prev) => {
      const novo = { ...prev, [id]: !prev[id] };
      setMensagem(novo[id] ? `${nome} adicionado ao carrinho` : `${nome} removido do carrinho`);
      setVisivel(true);
      return novo;
    });

    // Esconde a mensagem após 3 segundos
    setTimeout(() => setVisivel(false), 3000);
  };

  // Contador de itens adicionados
  const contador = Object.values(adicionados).filter(Boolean).length;

  return (
    <div>
      <Header>
        <h1>Loja Virtual</h1>
        <p aria-live="polite">Itens no carrinho: {contador}</p>
        {mensagem && (
          <Mensagem role="status" aria-live="assertive" visivel={visivel}>
            {mensagem}
          </Mensagem>
        )}
      </Header>

      <Main>
        {produtosIniciais.map((produto) => (
          <CardProduto
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            adicionado={!!adicionados[produto.id]}
            onToggle={() => toggleProduto(produto.id, produto.nome)}
          />
        ))}
      </Main>
    </div>
  );
}
