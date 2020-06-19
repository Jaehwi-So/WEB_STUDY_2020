<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<script type="text/javascript">
		function check( f ){
			var category = f.category.value;
			var p_price = f.p_price.value;
			var p_saleprice = f.p_saleprice.value;
			var p_image_s = f.p_image_s.value;
			var p_image_l = f.p_image_l.value;
			
			//유효성 체크
			if( category == '' ){
				alert("카테고리를 선택하세요");
				return;
			}
			
			var pattern = /^[0-9]+$/;
			if( !pattern.test(p_price) ){
				alert("가격은 정수로 입력하세요");
				return;
			}
			
			if( !pattern.test(p_saleprice) ){
				alert("할인가격은 정수로 입력하세요");
				return;
			}
			
			if( p_image_s == '' ){
				alert("작은 이미지를 선택하세요");
				return;
			}
			
			if( p_image_l == '' ){
				alert("큰 이미지를 선택하세요");
				return;
			}
			
			f.submit();
		}
	</script>

</head>
<body>
	<jsp:include page="index.jsp"/>

	<form name="f"
		  method="post"
		  enctype="multipart/form-data"
		  action="insert.do">
	
		<table align="center" width="600" border="1"
		       style="border-collapse:collapse;">
		
			<tr>
				<td>제품 카테고리</td>
				<td>
					<select name="category">  
						<option value="">카테고리 선택</option>
						<option value="com001">컴퓨터</option>
						<option value="ele002">가전제품</option>
						<option value="sp003">스포츠</option>
					</select>
				</td>
			</tr>
		
			<tr>
				<td>모델명</td>
				<td><input name="p_num"></td>
			</tr>
		
			<tr>
				<td>상품명</td>
				<td><input name="p_name"></td>
			</tr>
			
			<tr>
				<td>제조사</td>
				<td><input name="p_company"></td>
			</tr>
			
			<tr>
				<td>제품 가격</td>
				<td><input name="p_price"></td>
			</tr>
			
			<tr>
				<td>제품 할인가</td>
				<td><input name="p_saleprice"></td>
			</tr>
			
			<tr>
				<td>제품 상세설명</td>
				<td><textarea name="p_content" rows="5" cols="63"></textarea></td>
			</tr>
			
			<tr>
				<td>제품사진(small)</td>
				<td><input type="file" name="p_image_s"></td>
			</tr>
			
			<tr>
				<td>제품사진(large)</td>
				<td><input type="file" name="p_image_l"></td>
			</tr>
			
			<tr>
				<td colspan="2" align="center">
					<input type="button" value="등록" onclick="check( this.form );">
					<input type="reset" value="다시등록">
				</td>
			</tr>
		</table>
	
	</form>

</body>
</html>














