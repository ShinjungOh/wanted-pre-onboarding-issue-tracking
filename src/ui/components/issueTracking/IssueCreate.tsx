import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { managers } from '../../../lib/dummydata/managerData';

interface Props {
  isOpen: boolean;
  isModalOpen: () => void;
  issueStateData: string[];
  selectedState: string;
  handleChangeSelect: any;
}

const IssueCreate = ({ isOpen, isModalOpen, selectedState, handleChangeSelect, issueStateData }: Props) => {
  const [userInput, setUserInput] = useState('');
  // const [issues, setIssues] = useState([]);

  // const nextId = useRef(0);

  const onChangeMangerInput = (e: any) => {
    const { value } = e.target;
    setUserInput(value);
  };

  const searchManager = managers.filter((manager) => manager.includes(userInput));
  console.log(searchManager);

  return (
    <Container isOpen={isOpen}>
      {isOpen ? (
        <InputContainer>
          <CloseBox onClick={isModalOpen}>
            <AiOutlineClose color="#cdcdcd" />
          </CloseBox>
          <InputDetailContainer>
            <Label htmlFor="고유번호">고유번호</Label>
            <Input id="고유번호" type="text" readOnly={true} />
            <SelectState onChange={handleChangeSelect} value={selectedState}>
              {issueStateData.map((item: string) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </SelectState>
          </InputDetailContainer>
          <InputDetailContainer>
            <Label htmlFor="담당자">담당자</Label>
            <Input id="담당자" type="text" placeholder="담당자를 입력하세요." onChange={onChangeMangerInput} />
          </InputDetailContainer>
          {searchManager.length > 0 &&
            userInput.length > 0 &&
            searchManager.map((manager) => <SearchInput key={manager}>{searchManager}</SearchInput>)}
          <InputDetailContainer>
            <Label htmlFor="제목">제목</Label>
            <Input type="text" placeholder="제목을 입력하세요." />
          </InputDetailContainer>
          <Textarea placeholder="내용을 입력하세요." />
          <InputDetailContainer>
            <Label htmlFor="마감일">마감일</Label>
            <Input id="마감일" type="datetime-local" />
          </InputDetailContainer>
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
  top: 21%;
  right: 27%;
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
  width: 200px;
  height: 30px;
  padding: 2px 12px;
  background-color: #e1efff;
  border: none;
  border-radius: 8px;
  outline: none;
`;

const InputDetailContainer = styled.label`
  width: 360px;
  height: 35px;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 8px;
  padding: 2px 5px;
`;

const Label = styled.label`
  width: 55px;
  font-size: 12px;
  padding: 2px 5px;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  padding: 2px 5px;
  outline: none;
  border: 1px solid #8d8d8d;
  border-radius: 2px;

  &:read-only {
    border: none;
    width: 94px;
  }
`;

const Textarea = styled.textarea`
  width: 350px;
  height: 100px;
  margin-top: 10px;
  padding: 5px 5px;
  border: 1px solid #8d8d8d;
  border-radius: 2px;
  resize: none;
  outline: none;
  overflow-y: auto;
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

const SearchInput = styled.div`
  width: 295px;
  height: auto;
  padding: 2px 5px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 2px;
  outline: none;
  position: fixed;
  top: 221px;
  left: 380px;
  overflow-y: auto;
  z-index: 1;
  box-shadow: 0 4px 5px rgba(134, 133, 133, 0.3);
`;
