package com.jh.restf.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import com.jh.restf.vo.UserVO;

public class UserDAO {
	@Autowired
	private SqlSession sqlSession;

	//유저 목록 가져오기
	public List<UserVO> select_userList(){
		List<UserVO> list = null;
		list = sqlSession.selectList("user.selectList");
		return list;
	}
	//유저 한 명 정보 가져오기
	public UserVO select_userOne(int idx){
		UserVO vo = sqlSession.selectOne("user.selectOne", idx);
		return vo;
	}
	//유저 추가하기
	public int insert_user(UserVO vo){
		int res = sqlSession.insert("user.insert", vo);
		return res;
	}
	//유저정보 수정하기
	public int update_user(UserVO vo){
		int res = sqlSession.update("user.update", vo);
		return res;
	}
	//유저 삭제하기
	public int delete_user(int idx){
		int res = sqlSession.delete("user.delete", idx);
		return res;
	}
	
}
