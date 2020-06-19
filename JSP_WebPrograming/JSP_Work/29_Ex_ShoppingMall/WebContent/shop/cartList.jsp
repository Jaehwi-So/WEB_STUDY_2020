<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<script type="text/javascript">
		function modify(f){
			//수량수정
			var c_cnt = f.c_cnt.value;
			var pattern = /^[1-9][0-9]{0,2}$/;
			
			if( !pattern.test( c_cnt ) ){
				alert("수량은 1 ~ 3자리 숫자만 입력하세요");
				return;
			}
			
			f.submit();
			
		}
		
		function del(c_idx){
			if( !confirm("정말로 삭제하시겠습니까?") ){
				return;
			}
			
			location.href = "cart_delete.do?c_idx="+c_idx;
		}
		
	</script>

</head>
<body>
	<jsp:include page="index.jsp"/>
	
	<table align="center" width="600" border="1"
		   style="border-collapse:collapse;">
	
		<tr>
			<td colspan="6" align="center">:::장바구니:::</td>
		</tr>
		
		<tr>
			<th>모델명</th>
			<th>제품명</th>
			<th>단가</th>
			<th width="20%">수량</th>
			<th>금액</th>
			<th>삭제</th>
		</tr>
	
	
	<c:forEach var="vo" items="${list}">
		<tr align="center">
			<td>${ vo.p_num }</td>
			<td>${ vo.p_name }</td>
			<td>
				<fmt:formatNumber value="${vo.p_price}"/><br>
				<font color="red">
					세일가 : <b><fmt:formatNumber value="${vo.p_saleprice}"/></b>
				</font>
			</td>
			
			<td>
				<!-- 수량 조정 폼 -->
				<form action="cart_update.do">
					<input type="hidden" name="c_idx" value="${vo.c_idx}">
					<input size="4" name="c_cnt" align="center" value="${vo.c_cnt}">
					<input type="button" value="수정" onclick="modify(this.form);">
				</form>
			</td>
			
			<td>
				<fmt:formatNumber value="${ vo.c_cnt * vo.p_saleprice }"/> 
			</td>
			
			<td>
				<input type="button" value="삭제" onclick="del('${vo.c_idx}');">
			</td>
			
		</tr>
		</c:forEach>
		
		<c:if test="${ empty list }">
			<tr>
				<td colspan="6" align="center">
					<b>장바구니가 비었습니다</b>
				</td>
			</tr>
		</c:if>
	
		<tr>
			<td colspan="5" align="right">
				총 결제액 : 
			</td>
			<td><fmt:formatNumber value="${ total_amount }"/></td>
		</tr>
		<tr>
			<td colspan="5" align="right">
				총 결제액(할인가) : 
			</td>
			<td><fmt:formatNumber value="${ sale_amount }"/></td>
		</tr>
	
	</table>
</body>
</html>















