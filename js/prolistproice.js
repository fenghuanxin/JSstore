$(document).ready(function(e) {
	var color = "#eee";
	$(".tbprolist tr:odd td").css("background-color",color); //改变偶数行背景色
		/*把背景色保持到属性中 */
		$(".tbprolist tr:odd").attr("bg",color);
		$(".tbprolist tr:even").attr("bg","#fff");
		
		/* 鼠标移动到上面的时候显示浅蓝色 */
		$(".tbprolist tr td").mouseover(function(){
			$(this).parent().find("td").css("background-color","#d5f4fe");
		});
		
		/* 当鼠标在表格上移动时，离开的那一行背景恢复 */
		$(document).ready(function() {
			$(".tbprolist tr td").mouseout(function(){
				var bgc = $(this).parent().attr("bg");
				$(this).parent().find("td").css("background-color",bgc);
			});
		})
});