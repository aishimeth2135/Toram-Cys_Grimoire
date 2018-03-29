	
	// ============================================== [ ReplaceAll ]
	function replaceAll(Tstring, beReplace, ReplaceTo){
		return Tstring.replace(new RegExp(beReplace, 'g'),ReplaceTo);
	}
	//===========================================================//
	
	var MenuNo_Current = 1;
	function Upadate_Menu(temp) {
		let T_No = temp.id.charAt(temp.id.length-1);
		
		if (T_No == MenuNo_Current)
		{
			return;
		}
		
		document.getElementById('Section_' + String(MenuNo_Current)).style.display = 'none';
		MenuNo_Current = T_No;
		document.getElementById('Section_' + String(MenuNo_Current)).style.display = 'block';
	}
	
	
	function ToTop(){
		$('html, body').animate({scrollTop: 0}, 600);
	}
	
	HiddenEgg_controlNo = 1;