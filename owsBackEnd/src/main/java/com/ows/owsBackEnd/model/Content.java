package com.ows.owsBackEnd.model;

import java.util.ArrayList;
import java.util.List;

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
    private String image; // 이미지 URL = 행성 icon

    @Column(name = "hidden")
    private Boolean hidden = false; // 숨김 상태를 나타내는 필드, 기본값은 false (숨김 상태 아님)
    
//    @Column
//    private String position;
    
////    content의 top, left 값을 받아온다
//    @Column
//    private double top;
//    
//    @Column(name = "`left`")
//    private double left;

//    @Column//(columnDefinition = "INT")
//    private int index; // 이미지의 인덱스 값
    
    @Column
	private String authorId; // content 작성자
    
    @Column
    private String targetId; // 작성할 content 홈페이지의 주인 id
    
    // Content와 Archive 사이에 CascadeType을 설정 
    // JPA에서 제공하는 기능으로, 한 엔티티의 상태 변화를 관계를 맺고 있는 다른 엔티티에게 전파시키는 역할
    // 예를 들어, Content 엔티티에 CascadeType.REMOVE를 설정하면 Content 엔티티가 삭제될 때 관련된 Archive 엔티티도 함께 삭제
    // Content와 Archive 사이에 양방향 관계를 설정하면, Content의 상태가 변경될 때 Archive도 자동으로 변경.
    // 따라서 Content 클래스에서 Archive와의 관계를 아래와 같이 설정함.
    @OneToMany(mappedBy = "content", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Archive> archives = new ArrayList<>();
    
//    @OneToMany(mappedBy = "content")
//    private List<Archive> archives;

    // 기본 생성자
    public Content() {
        super();
    }

public Content(long id, String loginId, String nickName, String text, String image, Boolean hidden, String authorId, String targetId) {
	super();
	this.id = id; //엔티티의 ID 설정
	this.loginId = loginId; // 로그인 아이디 설정 
	this.nickName = nickName; ; // 닉네임 설정
	this.text = text; // 텍스트 내용 설정
	this.image = image;  // 이미지 URL 설정
	this.hidden = hidden;  // 숨김 상태 설정
//	this.position = position;
//	this.index = index;
//	this.top = top; // content의 위치정보(top) double top,
//	this.left = left; // content의 위치정보(left) double left,
	this.authorId = authorId;
	this.targetId = targetId;
	//this.archives = archives;(//List<Archive> archives)
}

//ID getter
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

//숨김 상태 setter
public void setHidden(Boolean hidden) {
	this.hidden = hidden;
}


//
//public String getPosition() {
//	return position;
//}
//
//public void setPosition(String position) {
//	this.position = position;
//}

//
//// index 필드의 getter 및 setter
//public double getIndex() {
//    return index;
//}
//
//public void setIndex(int index) {
//    this.index = index;
//}
//// 위치정보 Top getter
//public double getTop() {
//	return top;
//}
//
//// 위치정보 Top setter
//public void setTop(double top) {
//	this.top = top;
//}
//
//// 위치정보 Left getter
//public double getLeft() {
//	return left;
//}
//
////위치정보 Left setter
//public void setLeft(double left) {
//	this.left = left;
//}

public String getAuthorId() {
	return authorId;
}

//로그인 아이디 = 작성자 
public void setAuthorId(String loginId) {
	this.authorId = loginId;
}

public String getTargetId() {
	return targetId;
}

// 작성자가 content를 남길 홈페이지 주인Id
public void setTargetId(String targetId) {
	this.targetId = targetId;
}

//public List<Archive> getArchives() {
//	return archives;
//}
//
//public void setArchives(List<Archive> archives) {
//	this.archives = archives;
//}



}