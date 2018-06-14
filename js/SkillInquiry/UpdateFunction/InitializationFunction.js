
	function initialization_of_ShowCaption(){
		let cnt = 1;
		while ( document.getElementById('ShowCaption_' + String(cnt)) )
		{
			document.getElementById('ShowCaption_' + String(cnt)).innerHTML = '';
			++cnt;
		}
		/* document.getElementById('ShowCaption_Body_1').style.display = 'none'; */
		document.getElementById('ShowCaption_5').style.display = 'none';
		//init_skillBranch();
	}
	
	function init_skillBranch(){
		document.getElementById('site_SkillBranch').innerHTML = '';
	}
	
	function initialization_of_arm(){
		document.getElementById('WeapArms_site').innerHTML = '';
		document.getElementById('AuArms_site').innerHTML = '';
		document.getElementById('bodyArms_site').innerHTML = '';
			
		//初始化按鈕紀錄
		Weap_CurBtn = '';
		Au_CurBtn = '';
		body_CurBtn = '';
	}
	
	function initialization_of_skilltree(){
		document.getElementById('site_SkillTree').style.display = 'none';
		document.getElementById('ShowCaption_Body_1_openBtn').style.display = 'none';
	}