package com.imooc.servlet;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import com.imooc.bean.User;
import com.imooc.service.UserService;
import com.imooc.service.impl.UserServiceImpl;

public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			//获取前台传递的注册数据
			Map<String, String[]> map = request.getParameterMap();
			User user = new User();
			BeanUtils.populate(user, map);
			//创建service对象
			UserService us = new UserServiceImpl();
			us.registerUser(user);
			//注册成功
			request.getRequestDispatcher("/login.jsp").forward(request, response);
		} catch (Exception e) {
			//注册失败
			request.getRequestDispatcher("/registerFail.jsp").forward(request, response);
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
