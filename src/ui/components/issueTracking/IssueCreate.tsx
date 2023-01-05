import React, { useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { managers } from '../../../lib/dummydata/managerData';
import { IssueProps } from '../../../lib/type/IssueProps';

const MODAL_TYPE = {
  CREATE: '등록하기',
  EDIT: '수정하기',
};

interface Props {
  isOpen: boolean;
  modalType: 'CREATE' | 'EDIT';
  isModalOpen: () => void;
  issueStateData: string[];
  selectedState: string;
  issue: IssueProps;
  onSubmit: any;
}

const IssueCreate = ({ isOpen, modalType, isModalOpen, selectedState, issueStateData, issue, onSubmit }: Props) => {
  const [userInput, setUserInput] = useState(
    modalType === 'CREATE'
      ? {
          state: selectedState,
          title: '',
          text: '',
          due: '',
          manager: '',
        }
      : issue,
  );
  console.log(userInput);
  const [isOpenSearchList, setIsOpenSearchList] = useState(false);
  const [searchManagerList, setSearchManagerList] = useState<string[]>([]);

  const handleChangeInput = (e: any) => {
    const { value, name } = e.target;
    if (value === '') {
      setIsOpenSearchList(false);
    }
    setUserInput({
      ...userInput,
      [name]: value,
    });

    if (name === 'manager') {
      const regexp = new RegExp(value, 'gi');
      const searchManager = managers.filter((manager) => manager.match(regexp));
      // console.log(searchManager, managers, value);
      setSearchManagerList(searchManager);
      setIsOpenSearchList(true);
    }
  };

  const handleSearchInputClick = (searchInputText: string) => {
    // console.log('searchInputText', searchInputText);
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      manager: searchInputText,
    }));
    setIsOpenSearchList(false);
  };

  const isValidate = useMemo(
    () =>
      !(
        userInput.title.length > 1 &&
        userInput.text.length > 1 &&
        userInput.due &&
        managers.includes(userInput.manager)
      ),
    [userInput.title, userInput.text, userInput.due, userInput.manager, managers],
  );

  return (
    <Container isOpen={isOpen}>
      {isOpen ? (
        <InputContainer>
          <CloseBox onClick={isModalOpen}>
            <AiOutlineClose color="#cdcdcd" />
          </CloseBox>
          <InputDetailContainer>
            {modalType === 'EDIT' && (
              <div style={{ width: '200px' }}>
                <Label htmlFor="id">고유번호</Label>
                <span style={{ marginLeft: '10px' }}>{issue.id}</span>
              </div>
            )}
            <SelectState onChange={handleChangeInput} name="state" value={userInput.state}>
              {issueStateData.map((item: string) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </SelectState>
          </InputDetailContainer>
          <InputDetailContainer>
            <Label htmlFor="manager">담당자</Label>
            <Input
              id="manager"
              name="manager"
              type="text"
              placeholder="담당자를 입력하세요."
              onChange={handleChangeInput}
              value={userInput.manager}
            />
          </InputDetailContainer>
          {isOpenSearchList && searchManagerList.length > 0 && (
            <SearchInput>
              {searchManagerList.map((manager) => (
                <li
                  onClick={() => {
                    handleSearchInputClick(manager);
                  }}
                >
                  {manager}
                </li>
              ))}
            </SearchInput>
          )}
          <InputDetailContainer>
            <Label htmlFor="title">제목</Label>
            <Input
              id="title"
              type="text"
              name="title"
              placeholder="제목을 입력하세요."
              value={userInput.title}
              onChange={handleChangeInput}
            />
          </InputDetailContainer>
          <Textarea name="text" placeholder="내용을 입력하세요." value={userInput.text} onChange={handleChangeInput} />
          <InputDetailContainer>
            <Label htmlFor="due">마감일</Label>
            <Input id="due" name="due" type="datetime-local" value={userInput.due} onChange={handleChangeInput} />
          </InputDetailContainer>
          <Button onClick={() => onSubmit(userInput, modalType)} disabled={isValidate}>
            {MODAL_TYPE[modalType]}
          </Button>
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
  width: 100%;
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

  &:disabled {
    background-color: #c7c7c7;
    cursor: not-allowed;
  }
`;

const SearchInput = styled.ul`
  width: 295px;
  height: auto;
  padding: 2px 5px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 2px;
  outline: none;
  position: fixed;
  top: 205px;
  left: 380px;
  overflow-y: auto;
  z-index: 1;
  box-shadow: 0 4px 5px rgba(134, 133, 133, 0.3);
  list-style: none;

  li {
    margin: 0;
    padding: 0;
    cursor: pointer;
    &:hover {
      background: #e2e2e2;
    }
  }
`;
