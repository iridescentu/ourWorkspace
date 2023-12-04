package com.ows.owsBackEnd.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ows.owsBackEnd.model.Archive;
import com.ows.owsBackEnd.model.Bin;
import com.ows.owsBackEnd.model.Content;
import com.ows.owsBackEnd.service.OwsService;
import java.util.List;

@RestController
@RequestMapping("/universe")
@CrossOrigin(origins = "http://localhost:3000", methods = { RequestMethod.GET, RequestMethod.POST })
public class OwsController {

    private final OwsService owsService;

    public OwsController(OwsService owsService) {
        this.owsService = owsService;
    }

    // ----- Content 부분 -----

    // Content 전체 조회 (사용자 별)
    @GetMapping("/content/{targetId}")
    public ResponseEntity<List<Content>> getAllContent(@PathVariable String targetId) {
        List<Content> allContents = owsService.getAllContent(targetId);
        return new ResponseEntity<>(allContents, HttpStatus.OK);
    }
    
    
    // Content 전체 조회 (관리자 권한)
    @GetMapping("/content/admin")
    public ResponseEntity<List<Content>> getAllContentAdmin() {
    	List<Content> allContents = owsService.getAllContentAdmin();
    	return new ResponseEntity<>(allContents, HttpStatus.OK);
    }
    
    // 내가 작성한 Content 보기
    @GetMapping("/content/mypost/{authorId}")
    public ResponseEntity<List<Content>> getMyContentsByAuthorId(@PathVariable String authorId) {
        List<Content> myContents = owsService.getMyContentsByAuthorId(authorId);
        return new ResponseEntity<>(myContents, HttpStatus.OK);
    }
    
    //content 저장
    @PostMapping("/content/{targetId}")
    public ResponseEntity<Content> saveContent(@RequestBody Content content, @PathVariable String targetId) {
//    public ResponseEntity<Content> saveContent(@RequestBody Content content) {
    	content.setAuthorId(content.getAuthorId());
        content.setTargetId(content.getTargetId());
        return new ResponseEntity<Content>(owsService.saveContent(content), HttpStatus.CREATED);
    }
	
    
//    // NickName으로 Content 선택적 조회
//    @GetMapping("/content/{nickName}")
//    public ResponseEntity<List<Content>> getContentByNickName(@PathVariable String targetId, @PathVariable String nickName) {
//        List<Content> contentsByNickName = owsService.getContentByNickName(nickName);
//        return new ResponseEntity<>(contentsByNickName, HttpStatus.OK);
//    }

    // TargetId와 NickName으로 특정한 곳에서 작성된 Content 선택적 조회
    @GetMapping("/content/{targetId}/{nickName}")
    public ResponseEntity<List<Content>> findByNickNameAndTargetId(@PathVariable String targetId, @PathVariable String nickName) {
    	List<Content> findByNickNameAndTargetId = owsService.findByNickNameAndTargetId(targetId,nickName);
    	  if (findByNickNameAndTargetId.isEmpty()) {
    	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    	    }
    	    return new ResponseEntity<>(findByNickNameAndTargetId, HttpStatus.OK);
    }
    
    // Content ID로 선택적 조회한 글을 수정 (글을 작성한 본인만 수정가능)
    @PutMapping("/content/{id}/{authorId}")
    public ResponseEntity<Content> updateContentById(@RequestBody Content content, @PathVariable long id, @PathVariable String authorId) {
        Content updatedContent = owsService.updateContentById(content, id, authorId);
        return new ResponseEntity<>(updatedContent, HttpStatus.OK);
    }

    // Content ID로 선택적 조회한 글을 삭제(숨김처리) (글을 작성한 본인만 삭제가능)
    @DeleteMapping("/content/{id}/{authorId}")
    public ResponseEntity<String> deleteContentById(@PathVariable long id, @PathVariable String authorId) {
        owsService.deleteContentById(id, authorId);
        return new ResponseEntity<>("Successfully deleted and moved to Bin!", HttpStatus.OK);
    }

 // Content ID로 선택적 조회한 글을 Archive에 추가(즐겨찾기 추가)
    @PostMapping("/content/{id}/archive/{loginId}")
    public ResponseEntity<Archive> addToArchive(@PathVariable long id, @PathVariable String loginId) {
        Archive savedArchive = owsService.saveArchive(id, loginId);
        return new ResponseEntity<>(savedArchive, HttpStatus.OK);
    }

    // ----- Archive 부분 -----

 // (사용자) 로그인한 사용자의 Archive 항목 전체 조회
    @GetMapping("/archive/{loginId}")
    public ResponseEntity<List<Archive>> getArchivesByLoginId(@PathVariable String loginId) {
        List<Archive> archivesByLoginId = owsService.getAllArchivesByUser(loginId);
        return new ResponseEntity<>(archivesByLoginId, HttpStatus.OK);
    }
 //(사용자) 즐겨찾기 항목 ArchiveID로 선택적으로 해제
    @DeleteMapping("/archive/{archiveId}/{loginId}")
    public ResponseEntity<String> removeFromArchive(@PathVariable long archiveId, @PathVariable String loginId) {
        owsService.removeArchiveUser(archiveId, loginId);
        return new ResponseEntity<>("Successfully removed from Archive!", HttpStatus.OK);
    }

    //(사용자) 즐겨찾기 항목 NickName으로 선택적 조회
    @GetMapping("/archive/{nickName}/{loginId}")
    public ResponseEntity<List<Archive>> getArchiveByNickName(@PathVariable String nickName, @PathVariable String loginId) {
        List<Archive> archivesByNickName = owsService.getArchiveByNickNameUser(nickName, loginId);
        return new ResponseEntity<>(archivesByNickName, HttpStatus.OK);
    }

    //(관리자 권한) 즐겨찾기 항목 전체 조회
    @GetMapping("/archive/admin")  //관리자 권한 모든 archive에 접근 가능
    public ResponseEntity<List<Archive>> getAllArchive() {
    	List<Archive> allArchives = owsService.getAllArchives();
    	return new ResponseEntity<>(allArchives, HttpStatus.OK);
    }
    //(관리자 권한) 즐겨찾기 항목 ArchiveID로 선택적으로 해제  //관리자 권한 모든 archive에 접근하여 archiveID로 선택적 해제 가능
    @DeleteMapping("/archive/admin/{archiveId}") 
    public ResponseEntity<String> removeArchiveAdmin(@PathVariable long archiveId) {
    	owsService.removeArchiveAdmin(archiveId);
    	return new ResponseEntity<>("Successfully removed from Archive!", HttpStatus.OK);
    }
    
    //(관리자 권한) 즐겨찾기 항목 NickName으로 선택적 조회 //관리자 권한 모든 archive에 접근 가능
    @GetMapping("/archive/admin/{nickName}")
    public ResponseEntity<List<Archive>> getArchiveByNickNameAdmin(@PathVariable String nickName) {
    	List<Archive> archivesByNickName = owsService.getArchiveByNickNameAdmin(nickName);
    	return new ResponseEntity<>(archivesByNickName, HttpStatus.OK);
    }
    
    

    // ----- Bin 부분 -----

    
    //(사용자) 자신의 Bin의 모든 항목을 조회
    @GetMapping("/bin/{loginId}")
    public ResponseEntity<List<Bin>> getAllBinsByUser(@PathVariable String loginId) {
    	List<Bin> binByLoginId = owsService.getAllBinsByUser(loginId);
    	return new ResponseEntity<>(binByLoginId, HttpStatus.OK);
    }
    
 // (사용자) contentID로 숨김처리 항목 선택하여 복구(숨김처리 해제, binDB에서는 삭제됨)
    @PutMapping("/bin/restore/{contentId}/{loginId}")
    public ResponseEntity<String> restoreContentByIdUser(@PathVariable long contentId, @PathVariable String loginId) {
        owsService.restoreContentByIdUser(contentId,loginId);
        return new ResponseEntity<>("Successfully restored from Bin!", HttpStatus.OK);
    }
    // (사용자) contentID로 숨김처리 항목 선택하여 영구삭제(bin DB와 ContentDB에서 모두 삭제, archiveDB도 contentDB에 따라 자동적으로 삭제)
    @DeleteMapping("/bin/{contentId}/{loginId}")
    public ResponseEntity<String> permanentlyDeleteContentUser(@PathVariable long contentId, @PathVariable String loginId) {
    	owsService.permanentlyDeleteContentUser(contentId,loginId);
    	return new ResponseEntity<>("Successfully deleted from Bin!", HttpStatus.OK);
    }

    //(사용자) 숨김처리 항목 전체 조회하여 영구 삭제 
    @DeleteMapping("/bin/all/{loginId}")
    public ResponseEntity<String> deleteAllBinsUser(@PathVariable String loginId) {
    	owsService.deleteAllBinsUser(loginId);
    	return new ResponseEntity<>("Successfully deleted all from Bin!", HttpStatus.OK);
    }
    
    //(관리자 권한) 숨김처리 항목 전체 조회 //관리자 권한 모든 bin에 접근 가능
    @GetMapping("/bin/admin")
    public ResponseEntity<List<Bin>> getAllBins() {
    	List<Bin> allBins = owsService.getAllBins();
    	return new ResponseEntity<>(allBins, HttpStatus.OK);
    	
    }
    
    // (관리자 권한) contentID로 숨김처리 항목 선택하여 복구(숨김처리 해제, binDB에서는 삭제됨)
    @PutMapping("/bin/admin/restore/{contentId}")
    public ResponseEntity<String> restoreContentByIdAdmin(@PathVariable long contentId) {
    	owsService.restoreContentByIdAdmin(contentId);
    	return new ResponseEntity<>("Successfully restored from Bin!", HttpStatus.OK);
    }
    
    // (관리자 권한) contentID로 숨김처리 항목 선택하여 영구삭제(bin DB와 ContentDB에서 모두 삭제, archiveDB도 contentDB에 따라 자동적으로 삭제)
    @DeleteMapping("/bin/admin/{contentId}")
    public ResponseEntity<String> permanentlyDeleteContentAdmin(@PathVariable long contentId) {
    	owsService.permanentlyDeleteContentAdmin(contentId);
    	return new ResponseEntity<>("Successfully deleted from Bin!", HttpStatus.OK);
    }
    
    //(관리자 권한) 숨김처리 항목 전체 조회하여 영구 삭제  //관리자 권한 모든 bin에 접근하여 영구삭제 가능
    @DeleteMapping("/bin/admin/all")
    public ResponseEntity<String> deleteAllBinsAdmin() {
    	owsService.deleteAllBinsAdmin();
    	return new ResponseEntity<>("Successfully deleted all from Bin!", HttpStatus.OK);
    }



}
