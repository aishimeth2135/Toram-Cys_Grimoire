
	function update_of_skill(temp, callByArmsProg = false){
		
		let doc;
		
		if (temp.className == "Skill_td_unable")
		{
			return;
		}
		document.getElementById('ShowCaption_Site_2').style.opacity = '1';
		document.getElementById('site_SkillBranch').style.opacity = '1';
		
		if (Skill_CurBtn != '')
		{
			doc = document.getElementById(Skill_CurBtn);
			if (doc.className != 'Skill_td_unable')
			{
				doc.className = 'Skill_td_default';
			}
		}
		document.getElementById(temp.id).className = 'Skill_td_current';
		Skill_CurBtn = temp.id;
		let T_curBtn_skillBranch;
		if ( callByArmsProg )
		{
			T_curBtn_skillBranch_id = get_curBtn_skillBranch().id;
		}
		init_skillBranch();
		
		//填入分支
		No_Skill = parseInt(temp.getAttribute('data-skillno'));
		
		let Ttext = '';
		for (let i=0; i<all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill[No_Skill].Sk_branch.length; ++i)
		{
			let T = all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill[No_Skill].Sk_branch[i];
			Ttext += `<div id='skillBranch_${i+1}' class= "button_SkillBranch" onclick='updateSite_skillBranch(this)'>${T}</div>`;
		}
		document.getElementById('site_SkillBranch').innerHTML = Ttext;
		
		updateSite_skillCaption_1(No_SkillTreeType, No_SkillTree, No_Skill);
		
		if ( callByArmsProg )
		{
			updateSite_skillBranch( document.getElementById(T_curBtn_skillBranch_id) );
		}
		else {
			updateSite_skillBranch(document.getElementById('skillBranch_1'));
		}
	}
	
	function get_curBtn_skillBranch(){
		let cnt = 1;
		let doc = document.getElementById('skillBranch_' + String(cnt));
		while ( doc )
		{
			if ( doc.className == "button_SkillBranch_current" )
			{
				return doc;
			}
			++cnt;
			doc = document.getElementById('skillBranch_' + String(cnt));
		}
		return document.getElementById('skillBranch_1');
	}
	
	function updateSite_skillBranch(temp){
		updateSite_skillCaption_2(No_SkillTreeType, No_SkillTree, No_Skill, parseInt(temp.id.charAt(temp.id.length - 1)) - 1);
		
		let doc = get_curBtn_skillBranch();
		doc.className = 'button_SkillBranch';
		
		temp.className = "button_SkillBranch_current";
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
		updateSite_skillCaption_1(No_SkillTreeType, No_SkillTree, Tno_skill);
		
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
			updateSite_skillCaption_1(No_SkillTreeType, No_SkillTree, Tno_skill);
		}
		
		document.getElementById('ShowCaption_Site_2').style.opacity = '1';
		document.getElementById('site_SkillBranch').style.opacity = '1';
	}