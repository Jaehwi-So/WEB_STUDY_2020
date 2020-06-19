<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
	
	<script type="text/javascript" src="../js/httpRequest.js"></script>
	<script type="text/javascript">
		function addCart( p_idx, m_idx ){
			var url = "cart_insert.do";
			var param = "p_idx="+p_idx+"&m_idx="+m_idx;
			sendRequest( url, param, resultFn, "GET" );
		}
		
		function resultFn(){
			
			if( xhr.readyState == 4 && xhr.status == 200 ){
				var data = xhr.responseText;
				var json = eval(data);
				
				if( json[0].res == 'yes' ){
					alert("상품을 장바구니에 담았습니다");
					if( !confirm("장바구니로 이동하시겠습니까?") ){
						return;
					}
					location.href="cart_list.do";					
				}else{
					alert("장바구니에 이미 담긴 상품입니다.");
					if( !confirm("장바구니로 이동하시겠습니까?") ){
						return;
					}
					location.href="cart_list.do";		
				}
			}
			
		}
		
	</script>

</head>
<body>
	<jsp:include page="index.jsp"/>

	<table align="center" width="600" border="1"
	       style="border-collapse:collapse;">
	
		<tr>
			<td width="40%">제품분류</td>
			<td width="60%">${ vo.category }</td>
		</tr>
	
		<tr>
			<td width="40%">모델명</td>
			<td width="60%">${ vo.p_num }</td>
		</tr>
		
		<tr>
			<td width="40%">제품명</td>
			<td width="60%">${ vo.p_name }</td>
		</tr>
		
		<tr>
			<td width="40%">제조사</td>
			<td width="60%">${ vo.p_company }</td>
		</tr>
		
		<tr>
			<td width="40%">제품가격</td>
			<td width="60%">
				<fmt:formatNumber value="${ vo.p_price }"/>
				(할인가 : <fmt:formatNumber value="${ vo.p_saleprice }"/>원)
			</td>
		</tr>
		
		<tr>
			<td colspan="2">제품설명</td>
		</tr>
		
		<tr>
			<td colspan="2" align="center">
				<img src="../images/${ vo.p_image_l }" width="500">
			</td>
		</tr>
		
		<tr>
			<td colspan="2"><pre>${ vo.p_content }</pre></td>
		</tr>
		
		<tr>
			<td colspan="2" align="center">
				<input type="button" value="장바구니 담기"
				       onclick="addCart('${vo.idx}', '${ 1 }');">
				       
				<input type="button" value="장바구니 보기"
					   onclick="location.href='cart_list.do'">       
			</td>
		</tr>
		
	</table>

</body>
</html>









