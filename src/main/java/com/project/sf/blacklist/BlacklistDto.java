package com.project.sf.blacklist;

// 블랙리스트
public class BlacklistDto {
  Long bkNo; // 블랙리스트 고유 번호
  String bkEmail; // 차단된 사용자의 이메일
  String reason; // 차단 사유
  String createdAt; // 차단된 날짜

  public Long getBkNo() {
    return bkNo;
  }

  public void setBkNo(Long bkNo) {
    this.bkNo = bkNo;
  }

  public String getBkEmail() {
    return bkEmail;
  }

  public void setBkEmail(String bkEmail) {
    this.bkEmail = bkEmail;
  }

  public String getReason() {
    return reason;
  }

  public void setReason(String reason) {
    this.reason = reason;
  }

  public String getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(String createdAt) {
    this.createdAt = createdAt;
  }

}
