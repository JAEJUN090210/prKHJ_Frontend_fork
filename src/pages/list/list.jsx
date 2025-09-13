import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/reset.css";
import icon1 from "../../assets/search_icon.png";
import { downloadExcel } from "./down";
import BoardList from "../../components/boardList/boardList";
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
  const tierMap = {
    0: "Banned",
    1: "Bronze 5",
    2: "Bronze 4",
    3: "Bronze 3",
    4: "Bronze 2",
    5: "Bronze 1",
    6: "Silver 5",
    7: "Silver 4",
    8: "Silver 3",
    9: "Silver 2",
    10: "Silver 1",
    11: "Gold 5",
    12: "Gold 4",
    13: "Gold 3",
    14: "Gold 2",
    15: "Gold 1",
    16: "Platinum 5",
    17: "Platinum 4",
    18: "Platinum 3",
    19: "Platinum 2",
    20: "Platinum 1",
    21: "Diamond 5",
    22: "Diamond 4",
    23: "Diamond 3",
    24: "Diamond 2",
    25: "Diamond 1",
    26: "Ruby 5",
    27: "Ruby 4",
    28: "Ruby 3",
    29: "Ruby 2",
    30: "Ruby 1",
    31: "Master",
  };

  const [data, setData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const API_BASE = "/data/members.json";

  const lerterror = () => {
    alert("해당 기능은 이용할 수 없습니다.\n추후 업데이트 예정입니다.");
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("학번");
  const [grade, setGrade] = useState("");
  const [classNum, setClassNum] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");

  // API에서 데이터 가져오기
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        console.log("[fetchAllData] Fetching from:", API_BASE);
        const res = await fetch(API_BASE);
        if (!res.ok) {
          console.warn("[fetchAllData] Response not OK", res.status);
          setData([]);
          return;
        }
        const apiData = await res.json();
        console.log("[fetchAllData] Raw API Data:", apiData);

        setData(Array.isArray(apiData.list) ? apiData.list : []);
        console.log(
          "[fetchAllData] Parsed Data:",
          Array.isArray(apiData.list) ? apiData.list : []
        );
      } catch (err) {
        console.error("[fetchAllData] Error:", err);
        setData([]);
      }
    };
    fetchAllData();
  }, []);

  // 검색 및 필터링 로직
  useEffect(() => {
    console.group("[Filtering Logic]");
    console.log("원본 데이터(data):", data);
    console.log("검색어(searchTerm):", searchTerm);
    console.log("검색 타입(searchType):", searchType);
    console.log("학년(grade):", grade);
    console.log("반(classNum):", classNum);
    console.log("제출 상태(submissionStatus):", submissionStatus);

    let result = data;

    if (grade) {
      const studentGrade = parseInt(grade, 10);
      result = result.filter(
        (item) => Math.floor(item.student_no / 1000) === studentGrade
      );
      console.log("학년 필터링 결과:", result);
    }
    if (classNum) {
      const studentClass = parseInt(classNum, 10);
      result = result.filter(
        (item) => Math.floor((item.student_no % 1000) / 100) === studentClass
      );
      console.log("반 필터링 결과:", result);
    }

    if (submissionStatus === "제출") {
      result = result.filter((item) => item.solved_today > 0);
      console.log("제출 필터링 결과:", result);
    } else if (submissionStatus === "미제출") {
      result = result.filter((item) => item.solved_today === 0);
      console.log("미제출 필터링 결과:", result);
    }

    if (searchTerm) {
      const normalizedSearchTerm = searchTerm.toLowerCase();
      result = result.filter((item) => {
        if (searchType === "학번") {
          return String(item.student_no).includes(normalizedSearchTerm);
        } else if (searchType === "이름") {
          return item.name.toLowerCase().includes(normalizedSearchTerm);
        }
        return true;
      });
      console.log("검색어 적용 결과:", result);
    }

    setFilteredItems(result);
    console.log("최종 filteredItems:", result);
    console.groupEnd();
  }, [data, searchTerm, searchType, grade, classNum, submissionStatus]);

  const handleReset = () => {
    console.log("[handleReset] Resetting all filters & search");
    setSearchTerm("");
    setSearchType("학번");
    setGrade("");
    setClassNum("");
    setSubmissionStatus("");
  };

  return (
    <Content>
      <BoardContainer>
        <BoardTitle>List</BoardTitle>
        <BoardList
          items={filteredItems.map((item) => ({
            ...item,
            tierName: tierMap[item.tier] || "Unknown",
          }))}
        />
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
                onChange={(e) => {
                  console.log("[SearchType Changed] 학번");
                  setSearchType(e.target.value);
                }}
              />
              학번
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="searchType"
                value="이름"
                checked={searchType === "이름"}
                onChange={(e) => {
                  console.log("[SearchType Changed] 이름");
                  setSearchType(e.target.value);
                }}
              />
              이름
            </RadioLabel>
          </RadioGroup>
          <SearchInputContainer>
            <SearchInput
              type="text"
              placeholder="내용을 입력하세요"
              value={searchTerm}
              onChange={(e) => {
                console.log("[SearchTerm Changed]", e.target.value);
                setSearchTerm(e.target.value);
              }}
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
            onChange={(e) => {
              console.log("[Grade Changed]", e.target.value);
              setGrade(e.target.value);
            }}>
            <option value="">선택해주세요.</option>
            <option value="1">1학년</option>
            {/* <option value="2">2학년</option> */}
            {/* <option value="3">3학년</option> */}
          </FilterSelect>
          <FilterLabel htmlFor="classNum">반</FilterLabel>
          <FilterSelect
            id="classNum"
            value={classNum}
            onChange={(e) => {
              console.log("[ClassNum Changed]", e.target.value);
              setClassNum(e.target.value);
            }}>
            <option value="">선택해주세요.</option>
            <option value="1">1반</option>
            <option value="2">2반</option>
            <option value="3">3반</option>
            <option value="4">4반</option>
          </FilterSelect>
          <FilterLabel>과제 제출 여부</FilterLabel>
          <RadioGroup>
            <RadioLabel>
              <input
                type="radio"
                name="submissionStatus"
                value="제출"
                checked={submissionStatus === "제출"}
                onChange={(e) => {
                  console.log("[SubmissionStatus Changed] 제출");
                  setSubmissionStatus(e.target.value);
                }}
              />
              제출
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="submissionStatus"
                value="미제출"
                checked={submissionStatus === "미제출"}
                onChange={(e) => {
                  console.log("[SubmissionStatus Changed] 미제출");
                  setSubmissionStatus(e.target.value);
                }}
              />
              미제출
            </RadioLabel>
          </RadioGroup>
          <ResetButton onClick={handleReset}>초기화</ResetButton>
        </SectionContainer>
        <SectionContainer>
          <ExcelButton
            onClick={() => {
              console.log("[Excel Download] Items:", filteredItems);
              downloadExcel(filteredItems);
            }}>
            Excel Download
          </ExcelButton>
        </SectionContainer>
      </SearchFilterBox>
    </Content>
  );
}

export default List;
