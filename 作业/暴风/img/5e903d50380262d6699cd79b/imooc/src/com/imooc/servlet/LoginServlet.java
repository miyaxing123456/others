package com.imooc.servlet;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.imooc.bean.User;
import com.imooc.service.UserService;
import com.imooc.service.impl.UserServiceImpl;

public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			//获取前台数据
			String username = request.getParameter("username");
			String password = request.getParameter("password");
			//创建Service层对象
			UserService us = new UserServiceImpl();
			User user = us.getUserByUsernameAndPassword(username, password);
			//判断
			if(user!=null) {
				//登录成功页面
				request.getRequestDispatcher("/success.jsp").forward(request, response);
			}else {
				//登录失败页面
				request.getRequestDispatcher("/fail.jsp").forward(request, response);
				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
