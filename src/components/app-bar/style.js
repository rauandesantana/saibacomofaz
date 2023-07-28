import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 25px;
  background-color: #121212;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  -webkit-box-shadow: 0px 11px 20px -10px rgba(0,0,0,0.7);
  -moz-box-shadow: 0px 11px 20px -10px rgba(0,0,0,0.7);
  box-shadow: 0px 11px 20px -10px rgba(0,0,0,0.7);
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1300px;
  height: 100%;
  margin: 0px 10px 0px 10px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageLogo = styled.img`
  width: 80px;
  height: 50px;
  margin-right: 10px;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 18px;
  margin-right: 10px;
`;

export const ActionsList = styled.ul`
  list-style-type: none;
  overflow: hidden;
`;

export const ActionsItem = styled.li`
  float: left;
  margin: 0px 5px;
  padding: 8px 15px;
  text-align: center;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 15px;
  font-weight: 500;

  ${({ status }) => (status === 'gone') && css`
    display: none;
  `}

  ${({ status }) => (status === 'disabled') && css`
    display: flex;
    background-color: #1f1f1f;
    cursor: default;
  `}

  ${({ status }) => (status === 'selected') && css`
    display: flex;
    background-color: grey;
    cursor: default;
  `}
  
  ${({ status }) => (status === 'default') && css`
    display: flex;
    cursor: pointer;

    &:hover {
      background-color: #383838;
    }
  `}
`;

export const ActionsTap = styled.a``;
