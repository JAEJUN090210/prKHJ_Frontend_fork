import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/reset.css";
import icon1 from "../../assets/search_icon.png";
// import { BoardList } from "../../components/boardList/boardList";
import {
  Content,
  BoardContainer,
  BoardTitle,
  SearchFilterBox,
  SectionContainer,
  SectionTitle,
  RadioGroup,
  RadioLabel,
  SearchInputContainer,
  SearchInput,
  SearchIcon,
  FilterSelect,
  FilterLabel,
  ResetButton,
  ExcelButton,
} from "./list.styles";

function List() {
  const lerterror = () => {
    alert("해당 기능은 이용할 수 없습니다.\n추후 업데이트 예정입니다.");
  };

  // 상태 관리
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("학번");
  const [grade, setGrade] = useState("");
  const [classNum, setClassNum] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");

  // 필터 초기화 함수
  const handleReset = () => {
    setSearchTerm("");
    setSearchType("학번");
    setGrade("");
    setClassNum("");
    setSubmissionStatus("");
  };

  // 기존 코드에 있던 prop 변수들을 임시로 정의
  const activeFilter = "name";
  const currentPage = 1;
  const pageSize = 10;
  const token = "dummy_token";
  const selectedCategories = [];

  return (
    <Content>
      <BoardContainer>
        <BoardTitle>List</BoardTitle>
        {/* <BoardList /> */}
      </BoardContainer>
      <SearchFilterBox>
        <SectionContainer>
          <SectionTitle>Search</SectionTitle>
          <RadioGroup>
            <RadioLabel>
              <input
                type="radio"
                name="searchType"
                value="학번"
                checked={searchType === "학번"}
                onChange={(e) => setSearchType(e.target.value)}
              />
              학번
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="searchType"
                value="이름"
                checked={searchType === "이름"}
                onChange={(e) => setSearchType(e.target.value)}
              />
              이름
            </RadioLabel>
          </RadioGroup>
          <SearchInputContainer>
            <SearchInput
              type="text"
              placeholder="내용을 입력하세요"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon>
              <img src={icon1} alt="icon" style={{ width: "auto", height: "100%" }} />
            </SearchIcon>
          </SearchInputContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionTitle>Filter</SectionTitle>
          <FilterLabel htmlFor="grade">학년</FilterLabel>
          <FilterSelect
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}>
            <option value="">선택해주세요.</option>
            <option value="1">1학년</option>
            <option value="2">2학년</option>
            <option value="3">3학년</option>
          </FilterSelect>

          <FilterLabel htmlFor="classNum">반</FilterLabel>
          <FilterSelect
            id="classNum"
            value={classNum}
            onChange={(e) => setClassNum(e.target.value)}>
            <option value="">선택해주세요.</option>
            <option value="1">1반</option>
            <option value="2">2반</option>
            <option value="3">3반</option>
            <option value="3">4반</option>
          </FilterSelect>

          <FilterLabel>과제 제출 여부</FilterLabel>
          <RadioGroup>
            <RadioLabel>
              <input
                type="radio"
                name="submissionStatus"
                value="제출"
                checked={submissionStatus === "제출"}
                onChange={(e) => setSubmissionStatus(e.target.value)}
              />
              제출
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="submissionStatus"
                value="미제출"
                checked={submissionStatus === "미제출"}
                onChange={(e) => setSubmissionStatus(e.target.value)}
              />
              미제출
            </RadioLabel>
          </RadioGroup>

          <ResetButton onClick={handleReset}>초기화</ResetButton>
        </SectionContainer>
        <SectionContainer>
          <ExcelButton onClick={lerterror}>Excel Download</ExcelButton>
        </SectionContainer>
      </SearchFilterBox>
    </Content>
  );
}

export default List;
