package com.imooc.dao.impl;

import java.sql.SQLException;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;

import com.imooc.bean.User;
import com.imooc.dao.UserDao;
import com.imooc.utils.DataSourceUtils;

public class UserDaoImpl implements UserDao{

	@Override
	public User getUserByUsernameAndPassword(String username, String password) throws SQLException {
		//创建QueryRunner对象
		QueryRunner qr = new QueryRunner(DataSourceUtils.getDataSource());
		//编写sql语句
		String sql = "select * from user where username = ? and password = ?";
		//执行sql语句
		User user = qr.query(sql, new BeanHandler<>(User.class), username,password);
		return user;
	}

	@Override
	public void registerUser(User user) throws SQLException {
		//创建QueryRunner对象
		QueryRunner qr = new QueryRunner(DataSourceUtils.getDataSource());
		//编写sql语句
		String sql = "insert into user(username,password,name,email,birthday)values(?,?,?,?,?)";
		//执行sql语句
		qr.update(sql, user.getUsername(),user.getPassword(),user.getName(),user.getEmail(),user.getBirthday());
	}

}
