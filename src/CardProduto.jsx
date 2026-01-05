import React from "react";
import styled from "styled-components";

// Card responsivo e refinado
const Card = styled.article`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.radius.medium};
  padding: ${({ theme }) => theme.spacing.medium};
  max-width: 280px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const Nome = styled.h2`
  font-size: 1.3rem;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const Preco = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.muted};
`;

const Botao = styled.button`
  background-color: ${(props) =>
    props.adicionado ? props.theme.colors.success : props.theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.radius.small};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 0.95;
  }

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.highlight};
    outline-offset: 2px;
  }
`;

export default function CardProduto({ nome, preco, adicionado, onToggle }) {
  return (
    <Card>
      <Nome>{nome}</Nome>
      <Preco>{preco}</Preco>
      <Botao adicionado={adicionado} onClick={onToggle} aria-pressed={adicionado}>
        {adicionado ? "Adicionado" : "Adicionar ao carrinho"}
      </Botao>
    </Card>
  );
}
