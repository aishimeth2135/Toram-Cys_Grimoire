
	
	function Section_4_Update(temp) {
		document.getElementById('ATool_Menu').style.display = 'inline-block';
		let T_No = temp.getAttribute('data-menuno');
		let Section_4_Page_Current = parseInt(document.getElementById('Section_4').getAttribute('data-curpageno'));
		if ( T_No == Section_4_Page_Current ) return;
		if ( !document.getElementById('Section_4_Page_' + T_No) ) return;
		
		document.getElementById('Section_4_Page_' + T_No).style.display = 'block';
		document.getElementById('Section_4_Menu_' + T_No).className = 'SectionMenu_CurBtn';
		document.getElementById('ATool_MenuBlock_' + T_No).style.display = 'block';
		document.getElementById('ATool_MenuList_' + T_No).style.display = 'block';
		
		switch (T_No)
		{
			case "0":
				if( $(window).scrollTop() <= 68.8)
				{
					document.getElementById("ATool_MenuBlock").style.top = 68.8 - parseFloat($(window).scrollTop()) + 'px';
					
				}
				break;
		}
	
		if ( Section_4_Page_Current != -1 )
		{
			document.getElementById('Section_4_Page_' + Section_4_Page_Current).style.display = 'none';
			document.getElementById('Section_4_Menu_' + Section_4_Page_Current).className = '';
			document.getElementById('ATool_MenuBlock_' + Section_4_Page_Current).style.display = 'none';
			document.getElementById('ATool_MenuList_' + Section_4_Page_Current).style.display = 'none';
		}
		document.getElementById('Section_4').setAttribute('data-curpageno', T_No);
	}
	
	/*========================================*/
	function open_ATool_MenuList(){
		let doc = document.getElementById('ATool_MenuList');
		if (doc.style.display == 'block')
		{
			$(doc).fadeOut(400);
		}
		else {
			$(doc).fadeIn(400);
		}
	}
	
	function ATool_toMenuListSecond(){
		document.getElementById('ATool_MenuList_Main').style.display = 'none';
		document.getElementById('ATool_MenuList_Second').style.display = 'block';
	}
	function close_ATool_MenuList_Second(){
		document.getElementById('ATool_MenuList_Main').style.display = 'block';
		document.getElementById('ATool_MenuList_Second').style.display = 'none';
	}
	