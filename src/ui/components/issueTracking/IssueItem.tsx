import React from 'react';
import styled from 'styled-components';

interface IssueItemProps {
  issueState: string;
}

const IssueItem = ({ issueState }: IssueItemProps) => (
  <Container>
    <Title>{issueState}</Title>
    <IssueContainer>
      <Issue>issue tracking</Issue>
    </IssueContainer>
  </Container>
);

export default IssueItem;

const Container = styled.div`
  width: 300px;
  height: 560px;
  background-color: #f6f6f6;
`;

const Title = styled.h3`
  width: 70px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff1ba;
  border-radius: 8px;
  padding: 5px;
  margin: 20px 10px 25px 15px;
`;

const IssueContainer = styled.div`
  width: 100%;
  height: 470px;
  overflow-y: auto;
`;

const Issue = styled.div`
  width: 270px;
  height: 70px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fffdfd;
  box-shadow: 5px 5px 5px #e5e5e5;
  border-radius: 8px;
`;
