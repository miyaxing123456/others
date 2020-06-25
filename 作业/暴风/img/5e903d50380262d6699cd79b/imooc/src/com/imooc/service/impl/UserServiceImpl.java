package com.imooc.service.impl;

import java.sql.SQLException;

import com.imooc.bean.User;
import com.imooc.dao.UserDao;
import com.imooc.dao.impl.UserDaoImpl;
import com.imooc.service.UserService;

public class UserServiceImpl implements UserService{

	@Override
	public User getUserByUsernameAndPassword(String username, String password) throws SQLException {
		UserDao ud = new UserDaoImpl();
		return ud.getUserByUsernameAndPassword(username, password);
	}

	@Override
	public void registerUser(User user) throws SQLException {
		// TODO Auto-generated method stub
		UserDao ud = new UserDaoImpl();
		ud.registerUser(user);
	}

}
