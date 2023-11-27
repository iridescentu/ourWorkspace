package com.ows.owsBackEnd.model;

import jakarta.persistence.*;

@Entity
@Table(name = "bin")
public class Bin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id; // Bin 엔티티의 기본 키

    @ManyToOne
    private Content content; // Content 엔티티와의 관계 (다대일 관계)

    // Content를 통해 loginId를 얻는 메서드를 추가.
    // Content가 null인 경우 NullPointerException을 방지하기 위해 null 체크를 추가.
    public String getLoginId() {
        return content != null ? content.getLoginId() : null;
    }

    // 기본 생성자
    public Bin() {
        super();
    }

    // 생성자
    public Bin(long id, Content content) {
        super();
        this.id = id; // Bin 엔티티의 ID 설정
        this.content = content; // 해당 Bin과 연관된 Content 설정
    }

    // ID getter
    public long getId() {
        return id;
    }

    // ID setter
    public void setId(long id) {
        this.id = id;
    }

    // Content getter
    public Content getContent() {
        return content;
    }

    // Content setter
    public void setContent(Content content) {
        this.content = content;
    }
}
