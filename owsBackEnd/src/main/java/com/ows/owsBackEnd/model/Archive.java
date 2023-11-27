package com.ows.owsBackEnd.model;

import jakarta.persistence.*;

@Entity
@Table(name = "archive")
public class Archive {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "content_id")
    private Content content;

    // Content를 통해 loginId를 얻는 메서드를 추가
    //rchive 클래스에 loginId를 직접 저장하는 필드가 없어도 Content를 통해 loginId를 얻어올 수 있음.
    // 이는 null 체크를 통해 Content가 null이 아닐 때만 loginId를 반환하도록 보장.
    public String getLoginId() {
        return content != null ? content.getLoginId() : null;
    }

    //기본 생성자
	public Archive() {
		super();
	}

	//생성자
	public Archive(long id, Content content) {
		super();
		this.id = id;
		this.content = content;
	}

	//Id getter
	public long getId() {
		return id;
	}

	//Id setter
	public void setId(long id) {
		this.id = id;
	}

	//content getter
	public Content getContent() {
		return content;
	}

	//content setter
	public void setContent(Content content) {
		this.content = content;
	}


}
