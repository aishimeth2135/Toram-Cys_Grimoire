
	function update_of_Lv_skill(temp){
	
		if (SkillLv_CurBtn != '')
		{
			document.getElementById(SkillLv_CurBtn).className = 'SkillLv_button';
		}
		document.getElementById(temp.id).className = 'SkillLv_button_current';
		SkillLv_CurBtn = temp.id;
		
		Lv_skill = Number(temp.id.charAt(temp.id.length - 1));
		if ( Lv_skill == 0)
		{
			Lv_skill = 10;
		}
		
		if (Skill_CurBtn != '')
		{
			SkillBranch_CallBy_Update = true;
			document.getElementById('ShowCaption_5').style.display = 'none';
			update_of_skill( document.getElementById(Skill_CurBtn) );
			SkillBranch_CallBy_Update = false;
		}
	}