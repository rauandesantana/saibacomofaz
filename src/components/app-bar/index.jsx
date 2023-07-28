import React from "react";

import {
  ActionsList,
  ActionsItem,
  Container,
  Content,
  ImageLogo,
  Title,
  Header,
  ActionsTap,
} from "./style";

/* ### Actions Status ###
  > gone => oculto
  > disabled => desabilitado
  > selected => selecionado
  > default => normal
*/

const AppBar = ({ title, actions }) => {
  return (
    <Container>
      <Content>
        <Header>
          <ImageLogo src="https://logopng.com.br/logos/akatsuki-147.png" />
          <Title>{title ?? 'Saiba Como Fazer'}</Title>
        </Header>
        <ActionsList>
          {actions.map((item) => (
            <ActionsTap href={item.status === "default" ? item.link : null}>
              <ActionsItem status={item.status}>{item.title}</ActionsItem>
            </ActionsTap>
          ))}
        </ActionsList>
      </Content>
    </Container>
  );
};

export default AppBar;
