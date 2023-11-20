package com.ows.owsBackEnd.model;

import jakarta.persistence.*;

@Entity
@Table(name = "contents")
public class Content {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id; // Content 엔티티의 기본 키

    @Column(name = "login_id")
    private String loginId; // 로그인 아이디

    @Column
    private String nickName; // 닉네임

    @Column
    private String text; // 텍스트 내용

    @Column
    private String image; // 이미지 URL

    @Column(name = "hidden")
    private Boolean hidden = false; // 숨김 상태를 나타내는 필드, 기본값은 false (숨김 상태 아님)

//    @OneToMany(mappedBy = "content")
//    private List<Archive> archives;

    // 기본 생성자
    public Content() {
        super();
    }

    // 생성자
    public Content(long id, String loginId, String nickName, String text, String image, Boolean hidden) {
        super();
        this.id = id; // Content 엔티티의 ID 설정
        this.loginId = loginId; // 로그인 아이디 설정
        this.nickName = nickName; // 닉네임 설정
        this.text = text; // 텍스트 내용 설정
        this.image = image; // 이미지 URL 설정
        this.hidden = hidden; // 숨김 상태 설정
    }

    // ID getter
    public long getId() {
        return id;
    }

    // ID setter
    public void setId(long id) {
        this.id = id;
    }

    // 로그인 아이디 getter
    public String getLoginId() {
        return loginId;
    }

    // 로그인 아이디 setter
    public void setLoginId(String loginId) {
        this.loginId = loginId;
    }

    // 닉네임 getter
    public String getNickName() {
        return nickName;
    }

    // 닉네임 setter
    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    // 텍스트 내용 getter
    public String getText() {
        return text;
    }

    // 텍스트 내용 setter
    public void setText(String text) {
        this.text = text;
    }

    // 이미지 URL getter
    public String getImage() {
        return image;
    }

    // 이미지 URL setter
    public void setImage(String image) {
        this.image = image;
    }

    // 숨김 상태 getter
    public Boolean getHidden() {
        return hidden;
    }

    // 숨김 상태 setter
    public void setHidden(Boolean hidden) {
        this.hidden = hidden;
    }
    
//    // Archives getter
//    public List<Archive> getArchives() {
//        return archives;
//    }
//
//    // Archives setter
//    public void setArchives(List<Archive> archives) {
//        this.archives = archives;
//    }

}
