
	function initialization_of_ShowCaption(){
		for (let i=0; i<size_of_ShowCaption; ++i)
		{
			document.getElementById('ShowCaption_' + String(i+1)).innerHTML = '';
		}
		document.getElementById('ShowCaption_Body_1').style.display = 'none';
		document.getElementById('ShowCaption_5').style.display = 'none';
		for (let i=0; i<SkillBranch_Size; ++i)
		{
			document.getElementById('SkillBranch_' + String(i+1)).innerHTML = '';
			document.getElementById('SkillBranch_' + String(i+1)).style.display = 'none';
		}
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
		//清空按鈕內容
		for (let i=0; i<Weap_Size; ++i)
		{
			document.getElementById('arm_' + String(i+1)).innerHTML = '';
			document.getElementById('arm_' + String(i+1)).style.display = 'none';
		}
		for (let i=0; i<Au_Size; ++i)
		{
			document.getElementById('au_arm_' + String(i+1)).innerHTML = '';
			document.getElementById('au_arm_' + String(i+1)).style.display = 'none';
		}
		for (let i=0; i<Body_Size; ++i)
		{
			document.getElementById('body_arm_' + String(i+1)).innerHTML = '';
			document.getElementById('body_arm_' + String(i+1)).style.display = 'none';
		}
		//初始化背景顏色	
		if (Weap_CurBtn != '')
		{
			document.getElementById(Weap_CurBtn).className = "Arm_button";
		}
		if (Au_CurBtn != '')
		{
			document.getElementById(Au_CurBtn).className = "Arm_button";
		}
		if (Body_CurBtn != '')
		{
			document.getElementById(Body_CurBtn).className = "Arm_button";
		}
			
		//初始化按鈕紀錄
		Weap_CurBtn = '';
		Au_CurBtn = '';
		Body_CurBtn = '';
		
		WeapType_Cur = '';
		AuType_Cur = '';
		BodyType_Cur = '';
		
		//顯示初始按鈕
		document.getElementById('armO').style.display = "none";
		document.getElementById('au_armO').style.display = "none";
		document.getElementById('body_armO').style.display = "none";
	}
	
	function initialization_of_skilltree(){
		//清空按鈕內容
		for (var i=0;i<SkillTree_Size;i++)
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
	}