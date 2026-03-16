package com.project.sf.keywords;

// 관심 분야 키워드
public class KeywordsDto {
  Long kwdNo; // 키워드 고유 번호
  String word; // 관심 분야 단어
  String createdAt; // 등록된 날짜

  public Long getKwdNo() {
    return kwdNo;
  }

  public void setKwdNo(Long kwdNo) {
    this.kwdNo = kwdNo;
  }

  public String getWord() {
    return word;
  }

  public void setWord(String word) {
    this.word = word;
  }

  public String getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(String createdAt) {
    this.createdAt = createdAt;
  }
}
