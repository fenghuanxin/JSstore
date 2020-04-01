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
		var num=$(this).parent().parent().children("td").find("input").val();
		
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