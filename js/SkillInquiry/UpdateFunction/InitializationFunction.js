
	function initialization_of_ShowCaption(){
		let cnt = 1;
		while ( document.getElementById('ShowCaption_' + String(cnt)) )
		{
			document.getElementById('ShowCaption_' + String(cnt)).innerHTML = '';
			++cnt;
		}
		/* document.getElementById('ShowCaption_Body_1').style.display = 'none'; */
		document.getElementById('ShowCaption_5').style.display = 'none';
		init_skillBranch();
	}
	
	function init_skillBranch(){
		document.getElementById('site_SkillBranch').innerHTML = '';
	}
	
	function initialization_of_skill(){
		//初始化背景顏色
		if (Skill_CurBtn != '')
		{
			document.getElementById(Skill_CurBtn).className = "Skill_td_default";
		}
		//初始化按鈕紀錄
		Skill_CurBtn = '';
	}
	
	function initialization_of_arm(){
		document.getElementById('WeapArms_site').innerHTML = '';
		document.getElementById('AuArms_site').innerHTML = '';
		document.getElementById('bodyArms_site').innerHTML = '';
			
		//初始化按鈕紀錄
		Weap_CurBtn = '';
		Au_CurBtn = '';
		Body_CurBtn = '';
	}
	
	function initialization_of_skilltree(){
		//清空按鈕內容
		for (let i=0; i<SkillTree_Size; ++i)
		{
			document.getElementById('skilltree_' + String(i+1)).innerHTML = '';
			document.getElementById('skilltree_' + String(i+1)).style.display = 'none';
		}
		//初始化背景顏色
		if (SkillTree_CurBtn != '')
		{
			document.getElementById(SkillTree_CurBtn).className = "SkillTree_button";
		}
		//初始化按鈕紀錄
		SkillTree_CurBtn = '';
		
		document.getElementById('site_SkillTree').style.display = 'none';
		document.getElementById('ShowCaption_Body_1_openBtn').style.display = 'none';
	}