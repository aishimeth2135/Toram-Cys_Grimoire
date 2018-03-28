
	
	var Section_4_Page_Current = '';
	function Section_4_Update(temp) {
		let T_No = temp.getAttribute('data-menuno');
		if ( T_No == Section_4_Page_Current )
		{
			return;
		}
		if ( !document.getElementById('Section_4_Page_' + T_No) )
		{
			return;
		}
		
		document.getElementById('Section_4_Page_' + T_No).style.display = 'block';
		document.getElementById('Section_4_Menu_' + T_No).className = 'SectionMenu_CurBtn';
		switch (T_No)
		{
			case "0":
				if( $(window).scrollTop() <= 68.8)
				{
					document.getElementById("SkillAlloSimu_MenuBlock").style.top = 68.8 - parseFloat($(window).scrollTop()) + 'px';
				}
				break;
		}
	
		if ( Section_4_Page_Current != '' )
		{
			document.getElementById('Section_4_Page_' + Section_4_Page_Current).style.display = 'none';
			document.getElementById('Section_4_Menu_' + Section_4_Page_Current).className = '';
		}
		Section_4_Page_Current = T_No;
	}