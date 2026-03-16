package com.project.sf.qnaboard;

public class QnaBoardDto {
  Long postNo; // 게시글 고유 번호
  String authorEmail; // 작성자 이메일
  String postPw; // 게시글 비밀번호
  String title; // 게시글 제목
  String content; // 게시글 본문
  int answerYn; // 답변 여부 -> 1이면 답변완료, 0이면 대기중
  String admId; // 답변한 관리자 아이디
  String answerContent; // 답변 내용
  int status; // 게시글 상태 -> 1이면 활성, 0이면 블라인드 (신고게시글)
  String admMemo; // 관리자 전용, 신고 조회 후 처리 메모용
  String processedAt; // 신고 처리 날짜
  int reportCount; // 신고된 횟수
  String createdAt; // 게시글 등록 날짜
  String updatedAt; // 게시글 수정 날짜

  public Long getPostNo() {
    return postNo;
  }

  public void setPostNo(Long postNo) {
    this.postNo = postNo;
  }

  public String getAuthorEmail() {
    return authorEmail;
  }

  public void setAuthorEmail(String authorEmail) {
    this.authorEmail = authorEmail;
  }

  public String getPostPw() {
    return postPw;
  }

  public void setPostPw(String postPw) {
    this.postPw = postPw;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public int getAnswerYn() {
    return answerYn;
  }

  public void setAnswerYn(int answerYn) {
    this.answerYn = answerYn;
  }

  public String getAdmId() {
    return admId;
  }

  public void setAdmId(String admId) {
    this.admId = admId;
  }

  public String getAnswerContent() {
    return answerContent;
  }

  public void setAnswerContent(String answerContent) {
    this.answerContent = answerContent;
  }

  public int getStatus() {
    return status;
  }

  public void setStatus(int status) {
    this.status = status;
  }

  public String getAdmMemo() {
    return admMemo;
  }

  public void setAdmMemo(String admMemo) {
    this.admMemo = admMemo;
  }

  public String getProcessedAt() {
    return processedAt;
  }

  public void setProcessedAt(String processedAt) {
    this.processedAt = processedAt;
  }

  public int getReportCount() {
    return reportCount;
  }

  public void setReportCount(int reportCount) {
    this.reportCount = reportCount;
  }

  public String getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(String createdAt) {
    this.createdAt = createdAt;
  }

  public String getUpdatedAt() {
    return updatedAt;
  }

  public void setUpdatedAt(String updatedAt) {
    this.updatedAt = updatedAt;
  }
}
