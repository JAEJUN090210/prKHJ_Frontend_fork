// excelExport.js
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

// 엑셀 다운로드 함수
export const downloadExcel = (data, filePrefix = "백준_1학년") => {
  if (!data || data.length === 0) {
    alert("다운로드할 데이터가 없습니다.");
    return;
  }

  // 파일명에 사용할 현재 날짜와 시간을 포맷
  const now = new Date();
  const year = now.getFullYear().toString().substring(2);
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const fileName = `${filePrefix}_${year}${month}${day}_${hours}${minutes}.xlsx`;

  // 엑셀 헤더
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

  // 데이터를 제목 순서에 맞게 변환
  const exportData = data.map((item) => [
    item.student_no,
    item.name,
    item.id,
    item.tier,
    item.solved_total,
    item.accuracy_pct,
    item.solved_today,
    item.streak_days,
  ]);

  // 헤더 + 데이터
  const finalData = [headers, ...exportData];

  // 워크시트 변환
  const worksheet = XLSX.utils.aoa_to_sheet(finalData);

  // 헤더 스타일 (굵게)
  for (let i = 0; i < headers.length; i++) {
    const cellRef = XLSX.utils.encode_cell({ c: i, r: 0 });
    if (worksheet[cellRef]) {
      worksheet[cellRef].s = { font: { bold: true } };
    }
  }

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
