  /**
   * @param {Array} data - 정렬할 배열
   * @param {string} key - 정렬 기준이 될 객체의 속성명
   * @returns {Array} - 오름차순으로 정렬된 배열
   */
  export function SortASC(data, key) {
    if (!Array.isArray(data)) {
      console.error("[SortASC] data is not an array");
      return [];
    }
    if (!key) {
      console.error("[SortASC] key is not provided");
      return data;
    }

    const sorted = [...data].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      if (typeof valA === "string" && typeof valB === "string") {
        return valA.localeCompare(valB, "ko", { sensitivity: "base" });
      }

      return valA - valB;
    });

    console.log(`[SortASC] ${key} 기준 오름차순 정렬 완료`);
    return sorted;
  }

  /**
   * @param {Array} data - 정렬할 배열
   * @param {string} key - 정렬 기준이 될 객체의 속성명
   * @returns {Array} - 내림차순으로 정렬된 배열
   */
  export function SortDESC(data, key) {
    if (!Array.isArray(data)) {
      console.error("[SortDESC] data is not an array");
      return [];
    }
    if (!key) {
      console.error("[SortDESC] key is not provided");
      return data;
    }

    const sorted = [...data].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      if (typeof valA === "string" && typeof valB === "string") {
        return valB.localeCompare(valA, "ko", { sensitivity: "base" });
      }

      return valB - valA;
    });

    console.log(`[SortDESC] ${key} 기준 내림차순 정렬 완료`);
    return sorted;
  }
