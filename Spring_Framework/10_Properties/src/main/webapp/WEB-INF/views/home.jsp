<%@page import="java.util.Properties"%>
<%@page import="org.springframework.web.context.support.WebApplicationContextUtils"%>
<%@page import="org.springframework.web.context.WebApplicationContext"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<%
	WebApplicationContext wc = WebApplicationContextUtils.getWebApplicationContext(application);
	Properties prop = (Properties)wc.getBean("newProperties");
	String str1 = prop.getProperty("str1");
	request.setAttribute("str1", str1); 
%>
<html>
<head>
	<title>Home</title>
</head>
<body>
${str1 } / ${str2 }
</body>
</html>
