import React, { useRef, useState } from 'react';
import IssueItem from '../components/issueTracking/IssueItem';
import styled from 'styled-components';
import IssueCreate from '../components/issueTracking/IssueCreate';
import { IssueProps } from '../../lib/type/IssueProps';

const IssueTrackingPage = () => {
  const issueStateData = ['할 일', '진행 중', '완료'];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('할 일');
  const [issues, setIssues] = useState<IssueProps[]>([]);

  const nextId = useRef(0);

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOpenCreateModal = (issueState: string) => {
    setSelectedState(issueState);
    handleToggleOpen();
  };

  const handleChangeSelect = (e: any) => {
    setSelectedState(e.target.value);
  };

  const handleIssueSubmit = () => {
    nextId.current += 1;
    handleToggleOpen();
  };

  return (
    <Container>
      {isOpen && (
        <IssueCreate
          isOpen={isOpen}
          isModalOpen={handleToggleOpen}
          issueStateData={issueStateData}
          selectedState={selectedState}
          handleChangeSelect={handleChangeSelect}
          onSubmit={handleIssueSubmit}
        />
      )}
      <IssueItem issueState="할 일" handleOpenCreateModal={handleOpenCreateModal} issues={issues} />
      <IssueItem issueState="진행 중" handleOpenCreateModal={handleOpenCreateModal} issues={issues} />
      <IssueItem issueState="완료" handleOpenCreateModal={handleOpenCreateModal} issues={issues} />
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
