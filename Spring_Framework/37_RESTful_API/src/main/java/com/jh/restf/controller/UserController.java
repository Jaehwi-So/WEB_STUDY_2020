package com.jh.restf.controller;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.util.CollectionUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.jh.restf.dao.UserDAO;
import com.jh.restf.vo.UserVO;



@RestController(value="/user")
public class UserController {
	//첫 번째, URI는 정보의 자원을 표현해야 한다.
	//두 번째, 자원에 대한 행위(CRUD)는 HTTP Method(GET, POST, PUT, DELETE)로 표현한다.
	//GET, POST, PUT, DELETE(READ, CREATE, UPDATE, DELETE)
	
	//POST /members/2  : 
	@Autowired
	private UserDAO user_dao;

	public static final String VIEW_PATH = "/WEB-INF/views/";

	//유저정보 전체 조회	(http://../restful/user , GET)
	//@RequestMapping(value="/{idx}", method = {RequestMethod.GET})
	
	@GetMapping(value = "")
	//@ResponseBody
	public List<UserVO> getUserList() {
	    List<UserVO> list = user_dao.select_userList();
	    return list;
	}
	
	//유저정보 한 명 조회 (http://../restful/user/1 , GET)
	//@RequestMapping(value="/", method = {RequestMethod.GET})
	
	@GetMapping(value = "/{idx}")
	//@ResponseBody
	public UserVO getUserInfo(@PathVariable("idx") int idx) {
	    UserVO vo = user_dao.select_userOne(idx);
	    return vo;
	}
	
	//유저 추가	(http://../restful/user , POST)
	//@RequestMapping(value="/", method = {RequestMethod.POST})
	
	@PostMapping(value = "")
	//@ResponseBody
	public Map<String, Object> insertUser(@RequestBody UserVO params) {
		Map<String, Object> result = new HashMap<String, Object>();
	    int res = user_dao.insert_user(params);
	    if(res == 1) {
	    	result.put("result", "success");
	    }
	    else {
	    	result.put("result", "fail");
	    }
	    return result;
	}
	
	//유저 삭제	(http://../restful/user/1 , DELETE)
	//@RequestMapping(value="/", method = {RequestMethod.DELETE})
	
	@DeleteMapping(value = "/{idx}")
	//@ResponseBody
	public Map<String, Object> deleteUser(@PathVariable("idx") int idx) {
	    int res = user_dao.delete_user(idx);
		Map<String, Object> result = new HashMap<String, Object>();
	    if(res == 1) {
	    	result.put("result", "success");
	    }
	    else {
	    	result.put("result", "fail");
	    }
	    return result;
	}
	
	//유저 수정(http://../restful/user , PUT)
	//@RequestMapping(value="/", method = {RequestMethod.PUT})
	@PutMapping(value = "")
	@ResponseBody
	public Map<String, Object> updateUser(@RequestBody UserVO params) {
		Map<String, Object> result = new HashMap<String, Object>();
		int res = user_dao.update_user(params);
		if(res == 1) {
			result.put("result", "success");
		}
		else {
			result.put("result", "fail");
		}
		return result;
	}		
}
