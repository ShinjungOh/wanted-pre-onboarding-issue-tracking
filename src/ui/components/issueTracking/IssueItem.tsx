import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import IssueCreate from './IssueCreate';

interface IssueItemProps {
  issueState: string;
  issueStateData: string[];
}

const IssueItem = ({ issueState, issueStateData }: IssueItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('김OO');

  const isCreateModalOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChangeSelect = (e: any) => {
    setSelected(e.target.value);
  };

  return (
    <Container>
      <Header>
        <Title>{issueState}</Title>
        <PlusBox onClick={isCreateModalOpen}>
          <FaPlus />
        </PlusBox>
      </Header>
      <IssueContainer>
        <Issue>issue tracking</Issue>
      </IssueContainer>
      {isOpen && (
        <IssueCreate
          isOpen={isOpen}
          isModalOpen={isCreateModalOpen}
          issueStateData={issueStateData}
          selectedState={selected}
          handleChangeSelect={handleChangeSelect}
        />
      )}
    </Container>
  );
};

export default IssueItem;

const Container = styled.div`
  width: 300px;
  height: 560px;
  background-color: #f6f6f6;
`;

const Header = styled.div`
  width: 270px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 20px 10px 20px 15px;
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
`;

const PlusBox = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #ababab;
  cursor: pointer;
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
