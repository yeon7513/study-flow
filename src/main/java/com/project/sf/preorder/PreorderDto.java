package com.project.sf.preorder;

// 사전 예약 리스트
public class PreorderDto {
  Long preNo; // 예약 고유 번호
  String email; // 예약자 이메일
  int ageGroup; // 연령대
  int status; // 예약자 활동 상태 -> 1이면 정상, 0이면 블랙리스트(차단)
  String createdAt; // 예약한 날짜

  public Long getPreNo() {
    return preNo;
  }

  public void setPreNo(Long preNo) {
    this.preNo = preNo;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public int getAgeGroup() {
    return ageGroup;
  }

  public void setAgeGroup(int ageGroup) {
    this.ageGroup = ageGroup;
  }

  public int getStatus() {
    return status;
  }

  public void setStatus(int status) {
    this.status = status;
  }

  public String getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(String createdAt) {
    this.createdAt = createdAt;
  }

}
