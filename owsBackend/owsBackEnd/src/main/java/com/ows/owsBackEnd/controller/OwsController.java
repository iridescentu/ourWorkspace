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

    // Content 전체 조회
    @GetMapping("/content")
    public ResponseEntity<List<Content>> getAllContents() {
    	List<Content> allContents = owsService.getAllContents();
    	return new ResponseEntity<>(allContents, HttpStatus.OK);
    }
    
    // content 저장
    @PostMapping("/content")
	public ResponseEntity<Content> saveContent(@RequestBody Content content) {
		return new ResponseEntity<Content>(
				owsService.saveContent(content), HttpStatus.CREATED);
	}
	
    
    // NickName으로 Content 선택적 조회
    @GetMapping("/content/nickname/{nickName}")
    public ResponseEntity<List<Content>> getContentByNickName(@PathVariable String nickName) {
        List<Content> contentsByNickName = owsService.getContentByNickName(nickName);
        return new ResponseEntity<>(contentsByNickName, HttpStatus.OK);
    }

    // Content ID로 선택적 조회한 글을 수정
    @PutMapping("/content/{id}/{loginId}")
    public ResponseEntity<Content> updateContentById(@RequestBody Content content, @PathVariable long id, @PathVariable String loginId) {
        Content updatedContent = owsService.updateContentById(content, id, loginId);
        return new ResponseEntity<>(updatedContent, HttpStatus.OK);
    }

    // Content ID로 선택적 조회한 글을 삭제(숨김처리)
    @DeleteMapping("/content/{id}/{loginId}")
    public ResponseEntity<String> deleteContentById(@PathVariable long id, @PathVariable String loginId) {
        owsService.deleteContentById(id, loginId);
        return new ResponseEntity<>("Successfully deleted and moved to Bin!", HttpStatus.OK);
    }

    // Content ID로 선택적 조회한 글을 Archive에 추가(즐겨찾기 추가)
    @PostMapping("/content/{id}/archive")
    public ResponseEntity<Archive> addToArchive(@PathVariable long id) {
        Archive savedArchive = owsService.saveArchive(id);
        return new ResponseEntity<>(savedArchive, HttpStatus.OK);
    }

    // ----- Archive 부분 -----

    // 즐겨찾기 항목 전체 조회
    @GetMapping("/archive")
    public ResponseEntity<List<Archive>> getAllArchive() {
        List<Archive> allArchives = owsService.getAllArchives();
        return new ResponseEntity<>(allArchives, HttpStatus.OK);
    }

    // 즐겨찾기 항목 NickName으로 선택적 조회
    @GetMapping("/archive/nickname/{nickName}")
    public ResponseEntity<List<Archive>> getArchiveByNickName(@PathVariable String nickName) {
        List<Archive> archivesByNickName = owsService.getArchiveByNickName(nickName);
        return new ResponseEntity<>(archivesByNickName, HttpStatus.OK);
    }

    // 즐겨찾기 항목 ArchiveID로 선택적으로 해제
    @DeleteMapping("/archive/{id}")
    public ResponseEntity<String> removeFromArchive(@PathVariable long id) {
        owsService.removeArchive(id);
        return new ResponseEntity<>("Successfully removed from Archive!", HttpStatus.OK);
    }

    // ----- Bin 부분 -----

    // 숨김처리 항목 전체 조회
    @GetMapping("/bin")
    public ResponseEntity<List<Bin>> getAllBins() {
        List<Bin> allBins = owsService.getAllBins();
        return new ResponseEntity<>(allBins, HttpStatus.OK);
    }

    // BinID로 숨김처리 항목 선택적 조회
//    @GetMapping("/bin/{id}")
//    public ResponseEntity<List<Bin>> getBinById(@PathVariable long id) {
//        List<Bin> binById = owsService.getBinById(id);
//        return new ResponseEntity<>(binById, HttpStatus.OK);
//    }

    // contentID로 숨김처리 항목 선택하여 복구(숨김처리 해제, binDB에서는 삭제됨)
    @PutMapping("/bin/restore/{id}")
    public ResponseEntity<String> restoreContentById(@PathVariable long id) {
        owsService.restoreContentById(id);
        return new ResponseEntity<>("Successfully restored from Bin!", HttpStatus.OK);
    }

    // contentID로 숨김처리 항목 선택하여 영구삭제(bin DB와 ContentDB에서 모두 삭제, archiveDB도 contentDB에 따라 자동적으로 삭제)
    @DeleteMapping("/bin/{id}")
    public ResponseEntity<String> permanentlyDeleteContent(@PathVariable long id) {
        owsService.permanentlyDeleteContent(id);
        
        return new ResponseEntity<>("Successfully deleted from Bin!", HttpStatus.OK);
    }

    // 숨김처리 항목 전체 조회하여 영구 삭제
    @DeleteMapping("/bin/all")
    public ResponseEntity<String> deleteAllBins() {
        owsService.deleteAllBins();
        return new ResponseEntity<>("Successfully deleted all from Bin!", HttpStatus.OK);
    }
}
