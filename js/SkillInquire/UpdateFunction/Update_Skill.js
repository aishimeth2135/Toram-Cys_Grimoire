
	function update_of_skill(temp){
		
		let doc;
		
		if (temp.className == "Skill_td_unable")
		{
			return;
		}
		document.getElementById('ShowCaption_Site_2').style.opacity = '1';
		document.getElementById('site_SkillBranch').style.opacity = '1';
		
		if (Skill_CurBtn != '')
		{
			let doc = document.getElementById(Skill_CurBtn);
			if (doc.className != 'Skill_td_unable')
			{
				doc.className = 'Skill_td_default';
			}
		}
		document.getElementById(temp.id).className = 'Skill_td_current';
		Skill_CurBtn = temp.id;
		
		//初始化分支
		for (let i=0; i<SkillBranch_Size; ++i)
		{
			doc = document.getElementById('SkillBranch_' + String(i+1));
			doc.innerHTML = '';
			doc.style.display = 'none';
		}
		
		//填入分支
		No_Skill = temp.getAttribute('data-skillno');
		
		if (all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill[No_Skill].Sk_branch.length == 0)
		{
			doc = document.getElementById('SkillBranch_1');
			doc.innerHTML = '技能效果';
			doc.style.display = 'inline-block';
		}
		else {
			for (let i=0; i<all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill[No_Skill].Sk_branch.length; ++i)
			{
				doc = document.getElementById('SkillBranch_' + String(i+1));
				doc.innerHTML = all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill[No_Skill].Sk_branch[i];
				doc.style.display = 'inline-block';
			}
		}
		
		input_the_skillvalue_1(No_SkillTreeType, No_SkillTree, No_Skill);
		show_discription_1();
		
		if ( SkillBranch_CallBy_Update )
		{
			update_of_skill_branch(document.getElementById(SkillBranch_CurBtn));
		}
		else {
			update_of_skill_branch(document.getElementById('SkillBranch_1'));
		}
	}
	
	
	function update_of_skill_branch(temp){
		input_the_skillvalue_2(No_SkillTreeType, No_SkillTree,No_Skill, (parseInt(temp.id.charAt(temp.id.length - 1)) - 1));
		show_discription_2();
		
		if (SkillBranch_CurBtn != '')
		{
			document.getElementById(SkillBranch_CurBtn).className = "button_SkillBranch";
		}
		SkillBranch_CurBtn = temp.id;
		document.getElementById(SkillBranch_CurBtn).className = "button_SkillBranch_current";
	}
	
	function onmouseover_of_skill(temp){
		if (temp.innerHTML == '(尚未開放)')
		{
			return;
		}
		if (temp.id == Skill_CurBtn)
		{
			return;
		}
		let Tno_skill = temp.getAttribute('data-skillno');
		input_the_skillvalue_1(No_SkillTreeType, No_SkillTree, Tno_skill);
		show_discription_1();
		
		document.getElementById('ShowCaption_Site_2').style.opacity = '0.4';
		document.getElementById('site_SkillBranch').style.opacity = '0.4';
	}
	
	function onmouseout_of_skill(temp){
		if (temp.innerHTML == '(尚未開放)')
		{
			return;
		}
		if (temp.id == Skill_CurBtn)
		{
			return;
		}
		if (Skill_CurBtn == '')
		{
			initialization_of_ShowCaption();
		}
		else {
			let Tno_skill = document.getElementById(Skill_CurBtn).getAttribute('data-skillno');
			input_the_skillvalue_1(No_SkillTreeType, No_SkillTree, Tno_skill);
			show_discription_1();
		}
		
		document.getElementById('ShowCaption_Site_2').style.opacity = '1';
		document.getElementById('site_SkillBranch').style.opacity = '1';
	}