<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>   
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<script type="text/javascript">
		function regi(){
			location.href="insert_form.do";
		}
	</script>

</head>
<body>
	<jsp:include page="index.jsp"/>
	
	<div class="regi" align="center" style="margin-bottom:10px;">
		<input id="reg" type="button" value="상품등록하기" onclick="regi();">
	</div>
	
	<table align="center" width="600" border="1"
		   style="border-collapse:collapse;">
		
		<tr bgcolor="#dedede">
			<th width="12%">모델명</th>
			<th width="20%">이미지</th>
			<th>제품명</th>
			<th width="25%">가격</th>
			<th width="20%">비고</th>
		</tr>
		
		<!-- 카테고리에 상품이 업는 경우 -->
		<c:if test="${ empty list }">
			<tr>
				<td colspan="5" align="center">
					현재 등록된 상품이 없습니다
				</td>
			</tr>
		</c:if>
		
		<c:forEach var="p" items="${ list }">
		
		<tr align="center">
			<td>${ p.p_num }</td>
			<td>
				<img src="../images/${ p.p_image_s }" width="100" height="90">
			</td>
			
			<td>
				<a href="view.do?idx=${p.idx}">${ p.p_name }</a>
			</td>
			
			<td>
				할인가:<fmt:formatNumber value="${ p.p_saleprice }"/>원<br>
				<font color="red">
					( ${ p.sale_rate }% 할인 )
				</font>
			</td>
			
			<td>
				단가:<fmt:formatNumber value="${p.p_price}"/>원
			</td>
			
		</tr>
		
		</c:forEach>
	</table>
	
</body>
</html>










