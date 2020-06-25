package com.imooc.dao;

import java.sql.SQLException;

import com.imooc.bean.User;

public interface UserDao {

	//登录功能
	public User getUserByUsernameAndPassword(String username,String password) throws SQLException;
	
	//注册功能
	public void registerUser(User user) throws SQLException;
}
