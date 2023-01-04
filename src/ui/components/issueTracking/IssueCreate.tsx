import React from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

interface Props {
  isOpen: boolean;
  isModalOpen: () => void;
  issueStateData: string[];
  selectedState: string;
  handleChangeSelect: any;
}

const IssueCreate = ({ isOpen, isModalOpen, selectedState, handleChangeSelect, issueStateData }: Props) => {
  return (
    <Container isOpen={isOpen}>
      {isOpen ? (
        <InputContainer>
          <CloseBox onClick={isModalOpen}>
            <AiOutlineClose color="#cdcdcd" />
          </CloseBox>
          <SelectState onChange={handleChangeSelect} value={selectedState}>
            {issueStateData.map((item: any) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </SelectState>
          <Input type="text" placeholder="담당자를 입력하세요." />
          <Input type="text" placeholder="제목을 입력하세요." />
          <Textarea placeholder="내용을 입력하세요." />
          <Input type="datetime-local" />
          <Button>등록하기</Button>
        </InputContainer>
      ) : null}
    </Container>
  );
};

export default IssueCreate;

const Container = styled.div<{ isOpen: boolean }>`
  display: flex;
  width: 1000px;
  height: 600px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(56, 56, 56, 0.6);
  z-index: 10;

  ${(props) =>
    !props.isOpen &&
    css`
      display: none;
    `};
`;

const CloseBox = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
  position: absolute;
  top: 4%;
  right: 3%;
  cursor: pointer;
`;

const InputContainer = styled.div`
  width: 500px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
`;

const SelectState = styled.select`
  margin-top: 10px;
  width: 360px;
`;

const Input = styled.input`
  margin-top: 10px;
  width: 360px;
  padding: 2px 5px;
`;

const Textarea = styled.textarea`
  width: 360px;
  height: 130px;
  margin-top: 10px;
  padding: 2px 5px;
  resize: none;
`;

const Button = styled.button`
  margin-top: 10px;
  width: 360px;
  height: 30px;
  background-color: #5d90fc;
  color: #ffffff;
  font-weight: 600;
  font-size: 17px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
