import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

// 엑셀 다운로드 함수
export const downloadExcel = (data, filePrefix = "백준_1학년") => {
  if (!data || data.length === 0) {
    alert("다운로드할 데이터가 없습니다.");
    return;
  }

  // 현재 날짜/시간 포맷
  const now = new Date();
  const year = now.getFullYear().toString().substring(2);
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const fileName = `${filePrefix}_${year}${month}${day}_${hours}${minutes}.xlsx`;

  // 헤더
  const headers = [
    "학번",
    "이름",
    "백준 아이디",
    "solved.ac",
    "Total",
    "정답률",
    "Today",
    "연속일수",
  ];

  // 데이터 변환 (tier -> tierName)
  const exportData = data.map((item) => [
    item.student_no,
    item.name,
    item.id,
    item.tierName || item.tier,
    item.solved_total,
    item.accuracy_pct,
    item.solved_today,
    item.streak_days,
  ]);

  // 워크시트 배열 (헤더 + 데이터)
  const worksheetData = [headers, ...exportData];
  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

  // 열 너비 자동 계산 (각 열의 최대 문자 길이에 기반)
  const colWidths = headers.map((_, colIndex) => {
    const maxLength = Math.max(
      ...worksheetData.map((row) => (row[colIndex] ? row[colIndex].toString().length : 0))
    );
    return { wch: maxLength + 3 }; // 여유 2칸 추가
  });
  worksheet["!cols"] = colWidths;

  // 워크북 생성
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "유저_데이터");

  // 파일 생성 후 다운로드
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  });
  saveAs(blob, fileName);
};
