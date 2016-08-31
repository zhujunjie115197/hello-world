//页面加载完成
$(document).ready(function() {
	/*下拉列表  登录  注册*/
	$(".user").hover(function() {
			$("header .user .user-link").slideToggle().css("display", "block");
			$("header .user .main .arrow").css("transform", "rotate(180deg)")
		}, function() {
			$("header .user .main .arrow").css("transform", "rotate(0deg)")
			$("header .user .user-link").slideToggle().css("display", "block");
		})
		/*登录遮罩效果*/
	var b_width = screen.availWidth;
	var b_height = screen.availHeight;
	$(".login").width(b_width);
	$(".login").height(b_height);
	/*登录框屏幕居中显示*/
	var w_width = $(".login-w").width();
	var w_height = $(".login-w").height();
	$(".login-w").css("left", (b_width - w_width) / 2);
	$(".login-w").css("top", (b_height - w_height) / 2);
	/*登录*/
	$(".user-link ul li:first").click(function() {
			$(".login").css("display", "block");
			$(".login-w").css("display", "block");
			$(document.body).css({
				"overflow-x": "hidden",
				"overflow-y": "hidden"
			});
		})
		/*关闭登录*/
	$(".login-w img").click(function() {
		$(".login").css("display", "none");
		$(".login-w").css("display", "none");
		//启用滚动条
		$(document.body).css({
			"overflow-x": "auto",
			"overflow-y": "auto"
		});
	})
});