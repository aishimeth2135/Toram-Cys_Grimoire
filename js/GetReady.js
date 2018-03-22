

	Section_2_InputMenuList();
	Desc_Page_InputTextButton();
	
	Section_3_InputMenuList();
	Section_3_Update(document.getElementById('Section_3_Menu_1'));
	
	$(window).scroll( function(){
		if( $(window).scrollTop() <= 20)
		{
			$("#Btn_ToTop").hide(600);
		}
		else {
			$("#Btn_ToTop").show(600);
		}
	});