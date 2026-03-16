package com.project.sf.aggregate;

// 관심 분야 집계
public class AggDto {
  Long aggNo; // 집계 고유 번호
  Long preNo; // 예약자 고유 번호 -> 누가 선택했는지?
  Long kwdNo; // 선택된 키워드 -> 무엇을 선택했는지?
  String createdAt; // 집계된 날짜 -> 날짜별로 정렬하기 위해 추가

  public Long getAggNo() {
    return aggNo;
  }

  public void setAggNo(Long aggNo) {
    this.aggNo = aggNo;
  }

  public Long getPreNo() {
    return preNo;
  }

  public void setPreNo(Long preNo) {
    this.preNo = preNo;
  }

  public Long getKwdNo() {
    return kwdNo;
  }

  public void setKwdNo(Long kwdNo) {
    this.kwdNo = kwdNo;
  }

  public String getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(String createdAt) {
    this.createdAt = createdAt;
  }
}
