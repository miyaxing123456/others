<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			#indexId{
				font-size:30px;
				text-align: center;
			}
			
			#menuId{
				background-color: black;
				height: 50px;
				padding-top: 18px;
			}
			
			#menuId a{
				color: white;
				font-size: 20px;
				text-decoration: none;
				margin-left: 15px;
			}
			
			#loginContent{
				background-color: yellowgreen;
				height: 700px;
				margin-top: 30px;
			}
			
				#loginCon{
				height: 300px;
				width: 700px;
				border: 5px gainsboro solid;
				background-color: whitesmoke;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
			}
			
			#divForm{
				height: 100px;
				width: 300px;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
			}
			
			#divYq{
				background-color:cornflowerblue;
				height: 60px;
				margin-top: 20px;
				text-align: center;
				padding-top: 30px;
			}
			
			#divYq a{
				font-size: 15px;
				color: ghostwhite;
				margin-left: 20px;
			}
		</style>
	</head>
	<body>
		<!--整个的登录功能分为三块-->
		<!--第一块登录页面信息展示-->
		<div id="indexId">
			imooc注册页面展示
		</div>
		<!--第二块横向菜单展示-->
		<div id="menuId">
			<a href="">首页</a>
			<a href="">数码</a>
			<a href="">家用电器</a>
			<a href="">书籍</a>
			<a href="">母婴</a>
			<a href="">手机</a>
		</div>
		<!--第三块登录功能的展示-->
		<div id="loginContent">
			<div id="loginCon">
				<div id="divForm">
					<form method="post" action="${pageContext.request.contextPath}/register">
						<table>
							<tr>
								<td>账户:</td>
								<td>
									<input type="text" name="username" />
								</td>
							</tr>
							<tr>
								<td>密码:</td>
								<td>
									<input type="password" name="password" />
								</td>
							</tr>
							<tr>
								<td>中文名:</td>
								<td>
									<input type="text" name="name" />
								</td>
							</tr>
							<tr>
								<td>邮箱:</td>
								<td>
									<input type="text" name="email" />
								</td>
							</tr>
							<tr>
								<td>生日:</td>
								<td>
									<input type="date" name="birthday" style="width: 170px;"/>
								</td>
							</tr>
							<tr>
								<td colspan="2" align="center">
									<input type="submit" value="登录" />
								</td>
							</tr>
						</table>
					</form>
				</div>
			</div>
		</div>
		<!--第四块友情链接的展示-->
		<div id="divYq">
			<a href="">imooc友情</a>
			<a href="">JAVA</a>
			<a href="">PHP</a>
			<a href="">C</a>
			<a href="">C++</a>
			<a href="">C#</a>
		</div>
	</body>
</html>
    