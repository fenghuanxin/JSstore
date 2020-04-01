$(document).ready(function(e){
	$("#form1").validate();
	//页面加载调用
	totalprices();
	//取消
	$("#shoppinglist .cancel").each(function(index, element){
		$(this).click(function(e){
			$(this).parent().parent().remove();
			//重新计算
			totalprices();
		});
	});
});

function totalprices()
{
	$("#shoppinglist .price").each(function(){
		var price = $(this).text();
		var num=$(this).parent().parent().children("td").find(".count").text();
		
		$(this).parent().parent().children("td").find(".smalltotal").text(price*num);
	});
	
	var total = 0.00;
	var rows = 0;
	$("#shoppinglist .smalltotal").each(function(index, element){
		total = total + parseFloat($(this).text())
		rows++;
		$("#count").text(rows);
		$("#total").text(total);
	});
}

//验证优惠卡是否有数据
function yanzhengyouhuika()
{
	var cardNo = document.getElementById("cardNo");
	var cardPassword = document.getElementById("cardPassword");
	if(cardNo.value==''){
		alert("优惠卡号不能为空！");
		return false;
	}
	if(cardPassword.value==''){
		alert("密码不能为空!");
		return false;
	}
	return true;
}
//验证优惠卡是否有数据
function yanzhenguserinfo()
{
	var username = document.getElementById("username");
	var mobile = document.getElementById("mobile");
	var email = document.getElementById("Email");
	if(username.value==''){
		alert("姓名不能为空！");
		return false;
	}			
	if(mobile.value==''){
		alert("电话不能为空!");
		return false;
	}
	
	var mobilechar=/^((\(\d{3}\))|(\d{3}\-))?13\d{9}|15\d{9}$/ ;
	
	if(!mobile.value.match(mobilechar)){
		alert("手机号码不正确!");
		return false;
	}
	
	var emailchar=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	
	if(!email.value.match(emailchar)){
		alert("请输入正确的邮件格式,如15988652@qq.com!");
		return false;
	}
	return true;
}