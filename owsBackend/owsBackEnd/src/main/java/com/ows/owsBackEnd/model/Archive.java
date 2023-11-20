package com.ows.owsBackEnd.model;

import jakarta.persistence.*;

@Entity
@Table(name = "archive")
public class Archive {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    //cascade = CascadeType.PERSIST,
    // Content와 관계를 맺을 때, cascade 옵션을 이용하여 연쇄적으로 업데이트되도록 설정 
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "content_id")
    private Content content;

    //기본 생성자
	public Archive() {
		super();
	}

	public Archive(long id, Content content) {
		super();
		this.id = id;
		this.content = content;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Content getContent() {
		return content;
	}

	public void setContent(Content content) {
		this.content = content;
	}

   
//
//    // Content의 숨김 상태에 따라 자동으로 업데이트되도록 수정
//    @Transient //@Transient 어노테이션은 데이터베이스에 매핑되지 않는 것을 나타냅니다. 이것은 getHidden 메소드가 데이터베이스에 저장되지 않는 가상의 필드임을 의미합니다.
//    public Boolean getHidden() {
//        return content != null && content.getHidden();
//    }

}
