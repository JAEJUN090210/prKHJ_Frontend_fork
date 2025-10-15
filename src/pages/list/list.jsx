import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/reset.css";
import icon1 from "../../assets/search_icon.png";
import { downloadExcel } from "./down";
import BoardList from "../../components/boardList/boardList";
import InfoTooltip from "../../components/Tooltip/Tooltip";
import { Info } from "lucide-react";
import { SortASC, SortDESC } from "./sort";
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

  // const API_BASE = "/data/members.json"; // 테스트용 로컬 JSON 파일 경로
  const API_env = import.meta.env.VITE_REACT_APP_API_BASE_URL;
  const API_BASE = `${API_env}/member`; // 실제 API 엔드포인트

  const lerterror = () => {
    alert("해당 기능은 이용할 수 없습니다.\n추후 업데이트 예정입니다.");
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("학번");
  const [grade, setGrade] = useState("");
  const [classNum, setClassNum] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [sortKey, setSortKey] = useState(""); // 선택한 정렬 기준
  const [sortOrder, setSortOrder] = useState("asc"); // asc | desc

  // API에서 데이터 가져오기
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // console.log("[fetchAllData] Fetching from:", API_BASE);
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

  useEffect(() => {
    console.group("[Filtering & Sorting Logic]");
    console.log("원본 데이터(data):", data);

    let result = [...data];

    // --- 필터링 ---
    if (grade) {
      const studentGrade = parseInt(grade, 10);
      result = result.filter(
        (item) => Math.floor(item.student_no / 1000) === studentGrade
      );
    }
    if (classNum) {
      const studentClass = parseInt(classNum, 10);
      result = result.filter(
        (item) => Math.floor((item.student_no % 1000) / 100) === studentClass
      );
    }
    if (submissionStatus === "풀이") {
      result = result.filter((item) => item.solved_today > 0);
    } else if (submissionStatus === "미풀이") {
      result = result.filter((item) => item.solved_today === 0);
    }

    const normalizedSearchTerm = searchTerm.trim();
    const isStudentNo = /^[0-9]+$/.test(normalizedSearchTerm);

    result = result.filter((item) => {
      if (!normalizedSearchTerm) return true;
      if (isStudentNo) return String(item.student_no).includes(normalizedSearchTerm);
      return item.name.toLowerCase().includes(normalizedSearchTerm.toLowerCase());
    });

    // --- 정렬 ---
    if (sortKey) {
      console.group(`[Sorting] Key: ${sortKey}, Order: ${sortOrder}`);
      console.log(
        "정렬 전 데이터:",
        result.map((item) => ({
          name: item.name,
          tier: item.tier,
          solved_today: item.solved_today,
        }))
      );

      result = sortOrder === "asc" ? SortASC(result, sortKey) : SortDESC(result, sortKey);

      console.log(
        "정렬 후 데이터:",
        result.map((item) => ({
          name: item.name,
          tier: item.tier,
          solved_today: item.solved_today,
        }))
      );
      console.groupEnd();
    }

    setFilteredItems(result);
    console.log("최종 filteredItems:", result);
    console.groupEnd();
  }, [data, searchTerm, grade, classNum, submissionStatus, sortKey, sortOrder]);

  const handleReset = () => {
    console.log("[handleReset] Resetting all filters & search");
    setSearchTerm("");
    setSearchType("학번");
    setGrade("");
    setClassNum("");
    setSubmissionStatus("");
    setSortKey("");
    setSortOrder("asc");
  };

  const getTodayString = () => {
    // 현재 UTC → 한국 시간 변환
    const now = new Date();
    const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);

    // 업데이트 시각 목록 (KST 기준)
    const updateHours = [8, 10, 12, 14, 16, 18, 20, 22];

    const kstHour = kst.getHours();
    let displayDate = new Date(kst);
    let lastUpdateHour = null;

    // 현재 시간보다 작거나 같은 가장 최근 업데이트 시각 찾기
    for (let i = updateHours.length - 1; i >= 0; i--) {
      if (kstHour >= updateHours[i]) {
        lastUpdateHour = updateHours[i];
        break;
      }
    }

    // 오늘 안에 업데이트된 게 없다면 → 어제 마지막 업데이트(22시)를 기준으로
    if (lastUpdateHour === null) {
      displayDate.setDate(displayDate.getDate() - 1);
    }

    // YYYY-MM-DD 형식 반환
    const year = displayDate.getFullYear();
    const month = String(displayDate.getMonth() + 1).padStart(2, "0");
    const day = String(displayDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <Content>
      <BoardContainer>
        <BoardTitle>
          <div>
            List{" "}
            <InfoTooltip
              text={`마지막 업데이트: ${getTodayString()} 05:00(KST)`}
              position="top">
              <span>
                <Info size={18} />
              </span>
            </InfoTooltip>
          </div>

          <SearchInputContainer>
            <SearchInput
              type="text"
              placeholder="학번 또는 이름으로 검색"
              value={searchTerm}
              maxLength={9}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon>
              <img src={icon1} alt="icon" style={{ width: "auto", height: "100%" }} />
            </SearchIcon>
          </SearchInputContainer>
        </BoardTitle>

        {filteredItems.length > 0 ? (
          <BoardList
            items={filteredItems.map((item) => ({
              ...item,
              tierName: tierMap[item.tier] || "Unknown",
            }))}
          />
        ) : (
          <div
            style={{
              padding: "40px 20px",
              textAlign: "center",
              color: "#555", // 기본 텍스트 색
              fontSize: "18px",
              fontWeight: "500",
              backgroundColor: "#fdfdfd", // 밝은 배경
              border: "2px solid #CDD1D5", // primary 컬러 테두리
              borderRadius: "12px",
              marginTop: "20px",
              boxShadow: "0 6px 12px rgba(0,0,0,0.1)", // 그림자 더 진하게
              lineHeight: "1.6",
            }}>
            <span style={{ color: "#2E7DFF" }}>"검색 결과가 없습니다"</span>
            <br />
            철자를 확인해주세요
          </div>
        )}
      </BoardContainer>
      <SearchFilterBox>
        <SectionContainer>
          <SectionTitle>Sort</SectionTitle>
          <RadioGroup>
            <RadioLabel>
              <input
                type="radio"
                name="sortOrder"
                value="asc"
                checked={sortOrder === "asc"}
                onChange={(e) => setSortOrder(e.target.value)}
              />
              오름차순
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="sortOrder"
                value="desc"
                checked={sortOrder === "desc"}
                onChange={(e) => setSortOrder(e.target.value)}
              />
              내림차순
            </RadioLabel>
          </RadioGroup>

          <FilterSelect value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
            <option value="">정렬 기준 선택</option>
            <option value="name">이름</option>
            <option value="tier">티어</option>
            <option value="solved_total">총 풀이</option>
            <option value="accuracy_pct">정답률</option>
            <option value="solved_today">일일 풀이</option>
            <option value="streak_days">연속일수</option>
          </FilterSelect>
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
          <FilterLabel>
            일일 풀이 현황{" "}
            <InfoTooltip
              text="오늘 코딩 테스트를 풀었는지에 대한 여부입니다."
              position="top">
              <span>
                <Info size={16} />
              </span>
            </InfoTooltip>
          </FilterLabel>
          <RadioGroup>
            <RadioLabel>
              <input
                type="radio"
                name="submissionStatus"
                value="풀이"
                checked={submissionStatus === "풀이"}
                onChange={(e) => {
                  console.log("[SubmissionStatus Changed] 풀이");
                  setSubmissionStatus(e.target.value);
                }}
              />
              풀이
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="submissionStatus"
                value="미풀이"
                checked={submissionStatus === "미풀이"}
                onChange={(e) => {
                  console.log("[SubmissionStatus Changed] 미풀이");
                  setSubmissionStatus(e.target.value);
                }}
              />
              미풀이
            </RadioLabel>
          </RadioGroup>
          <ResetButton onClick={handleReset}>초기화</ResetButton>
        </SectionContainer>
        <SectionContainer>
          <FilterLabel>
            Excel Download{" "}
            <InfoTooltip
              text="다운로드 시 현재 적용된 검색 및 필터 상태가 반영됩니다."
              position="top">
              <span>
                <Info size={16} />
              </span>
            </InfoTooltip>
          </FilterLabel>
          <ExcelButton
            onClick={() => {
              console.log("[Excel Download] Items:", filteredItems);
              // tierName을 포함한 데이터 전달
              const excelData = filteredItems.map((item) => ({
                ...item,
                tierName: tierMap[item.tier] || "Unknown",
              }));
              downloadExcel(excelData);
            }}>
            Excel Download
          </ExcelButton>
        </SectionContainer>
      </SearchFilterBox>
    </Content>
  );
}

export default List;
