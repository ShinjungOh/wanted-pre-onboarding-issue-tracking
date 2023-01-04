import React from 'react';
import IssueItem from '../components/issueTracking/IssueItem';
import styled from 'styled-components';

const IssueTrackingPage = () => (
  <Container>
    <IssueItem issueState="할 일" />
    <IssueItem issueState="진행 중" />
    <IssueItem issueState="완료" />
  </Container>
);

export default IssueTrackingPage;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;
