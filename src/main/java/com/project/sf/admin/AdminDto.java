package com.project.sf.admin;

// 관리자 정보
public class AdminDto {
  Long admNo; // 관리자 고유 번호
  String id; // 관리자 아이디
  String pw; // 관리자 비밀번호
  String name; // 관리자 이름
  String admRole; // 관리자 등급
  int status; // 관리자 승인 상태
  String createdAt; // 관리자가 가입한 날짜

  public Long getAdmNo() {
    return admNo;
  }

  public void setAdmNo(Long admNo) {
    this.admNo = admNo;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getPw() {
    return pw;
  }

  public void setPw(String pw) {
    this.pw = pw;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getAdmRole() {
    return admRole;
  }

  public void setAdmRole(String admRole) {
    this.admRole = admRole;
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
