$(function(){
	$("#bodyDiv_intro .body_menu_left .nav-list li").click(function(){
		var strNav = $(this).html();
		if(strNav.indexOf("研究方向")>0){
			$(this).addClass("body_menu_left_selected");
			$("#bodyDiv_intro .body_menu_left .nav-list .li_2").removeClass("body_menu_left_selected");
			$("#bodyDiv_intro .body_menu_left .nav-list .li_3").removeClass("body_menu_left_selected");
			$("#bodyDiv_intro .body_info_right_1").show();
			$("#bodyDiv_intro .body_info_right_2").hide();
			$("#bodyDiv_intro .body_info_right_3").hide();
		}else if(strNav.indexOf("导师信息")>0){
			$(this).addClass("body_menu_left_selected");
			$("#bodyDiv_intro .body_menu_left .nav-list .li_1").removeClass("body_menu_left_selected");
			$("#bodyDiv_intro .body_menu_left .nav-list .li_3").removeClass("body_menu_left_selected");
			$("#bodyDiv_intro .body_info_right_2").show();
			$("#bodyDiv_intro .body_info_right_1").hide();
			$("#bodyDiv_intro .body_info_right_3").hide();
		}else if(strNav.indexOf("学生信息")>0){
			$(this).addClass("body_menu_left_selected");
			$("#bodyDiv_intro .body_menu_left .nav-list .li_1").removeClass("body_menu_left_selected");
			$("#bodyDiv_intro .body_menu_left .nav-list .li_2").removeClass("body_menu_left_selected");
			$("#bodyDiv_intro .body_info_right_3").show();
			$("#bodyDiv_intro .body_info_right_1").hide();
			$("#bodyDiv_intro .body_info_right_2").hide();
		}
	});

    var timer = null;
    $(window).resize(function(){
    	window.clearTimeout(timer);
    	timer = window.setTimeout(function(){
    		var winHeight = $(window).height();
    		$("#bodyDiv_acad .modal-dialog").css({top:winHeight/2-150});
    	},500);
    });
   
	$("#topDiv .nav-pills li").click(function(){
		var strMenu = $(this).html();
		if(strMenu.indexOf("学术信息")>0){
			$("#showMessage").modal("toggle");
		}
	});
});