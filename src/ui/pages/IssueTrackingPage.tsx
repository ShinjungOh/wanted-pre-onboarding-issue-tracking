import React, { useState } from 'react';
import IssueItem from '../components/issueTracking/IssueItem';
import styled from 'styled-components';
import IssueCreate from '../components/issueTracking/IssueCreate';

const IssueTrackingPage = () => {
  const issueStateData = ['할 일', '진행 중', '완료'];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('김OO');

  const handleOpenCreateModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChangeSelect = (e: any) => {
    setSelected(e.target.value);
  };

  return (
    <Container>
      {isOpen && (
        <IssueCreate
          isOpen={isOpen}
          isModalOpen={handleOpenCreateModal}
          issueStateData={issueStateData}
          selectedState={selected}
          handleChangeSelect={handleChangeSelect}
        />
      )}
      <IssueItem issueState="할 일" handleOpenCreateModal={handleOpenCreateModal} />
      <IssueItem issueState="진행 중" handleOpenCreateModal={handleOpenCreateModal} />
      <IssueItem issueState="완료" handleOpenCreateModal={handleOpenCreateModal} />
    </Container>
  );
};

export default IssueTrackingPage;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;
