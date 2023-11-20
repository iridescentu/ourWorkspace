package com.ows.owsBackEnd.model;

import jakarta.persistence.*;

@Entity
@Table(name = "bin")
public class Bin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id; // Bin 엔티티의 기본 키

    // Content와 관계를 맺을 때, cascade 옵션을 이용하여 연쇄적으로 업데이트되도록 설정
    @ManyToOne
    private Content content; // Content 엔티티와의 관계 (다대일 관계)

//    // DB에서 관리하는 이름
//    @Column(name = "login_id")
//    private String loginId; // 로그인 아이디

    // 기본 생성자
    public Bin() {
        super();
    }

    // 생성자
    public Bin(long id, Content content) {
        super();
        this.id = id; // Bin 엔티티의 ID 설정
        this.content = content; // 해당 Bin과 연관된 Content 설정
//        this.loginId = loginId; // 로그인 아이디 설정
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

//    // 로그인 아이디 getter
//    public String getLoginId() {
//        return loginId;
//    }
//
//    // 로그인 아이디 setter
//    public void setLoginId(String loginId) {
//        this.loginId = loginId;
//    }
}
