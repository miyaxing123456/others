package com.imooc.service;

import java.sql.SQLException;

import com.imooc.bean.User;

public interface UserService {

	//登录功能的方法
	public User getUserByUsernameAndPassword(String username,String password) throws SQLException;
	//注册功能的方法
	public void registerUser(User user) throws SQLException;
}
