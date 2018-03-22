
	var SkillTree_LastBtn = [-1, -1];
	function update_of_skilltree_type(temp){
		
		//彩蛋觸發
		Hide_TheBag();
		if (All_BagItem[0].BI_HasGet && All_BagItem[1].BI_HasGet && !All_BagItem[2].BI_HasGet && Picture_HintDiv_door)
		{
			Get_StarStick();
		}
		
		//初始化
		initialization_of_skilltree();
		
		if (SkillTreeType_CurBtn == temp.id)
		{
			document.getElementById(SkillTreeType_CurBtn).className = 'SkillTreeType_li';
			SkillTreeType_CurBtn = '';
			return ;
		}
		
		if (SkillTreeType_CurBtn != '')
		{
			document.getElementById(SkillTreeType_CurBtn).className = 'SkillTreeType_li';
		}
		temp.className = 'SkillTreeType_li_current';
		SkillTreeType_CurBtn = temp.id;
		
		No_SkillTreeType = parseInt(temp.id.charAt(temp.id.length - 1)) - 1;

		$('#site_SkillTree').fadeIn(400);
		document.getElementById('site_SkillTree').style.display = "inline-block";
		onclick_of_SkillTreeType(temp);

		for (let i=0; i<all_skilltree_type[No_SkillTreeType].STt_skilltree.length; ++i)
		{
			let doc = document.getElementById('skilltree_' + String(i+1));
			doc.innerHTML = all_skilltree_type[No_SkillTreeType].STt_skilltree[i].ST_name;
			doc.style.display = 'inline-block';
		}
		
		if (SkillTree_LastBtn[0] == No_SkillTreeType)
		{
			let doc = document.getElementById('skilltree_' + String(No_SkillTree + 1));
			doc.className = 'SkillTree_button_current';
			SkillTree_CurBtn = doc.id;
		}
		document.getElementById('SkillTreeType_Caption').style.display = 'none';
	}
		
	function onclick_of_SkillTreeType(temp){
		let Ttext = '';
		temp = document.getElementById((temp.id).replace("li_", ""));
		switch (temp.innerHTML)
			{
			case '武器技能':
				Ttext = '各武器專用的必備招式。<br>建議專攻同一種武器！';
				break;
			case '強化技能':
				Ttext = '能使戰況更為有利的技能。<br>使盾、身體防具的性能更加完備！';
				break;	
			case '輔助技能':
				Ttext = '冒險路上的好用技能。<br>有多餘的技能點數時，不妨學習一下！';
				break;
			case '？？？？':
				Ttext = '未知的領域。<br>必須先找到特殊的道具。<br>(純屬虛構，與遊戲內容無關)';
				All_BagItem[3].BI_HasGet = true;
				break;
			}
		document.getElementById('SkillTreeType_Caption').innerHTML = Ttext;
	}
	function onmouseover_of_SkillTreeType(temp){
		/* onclick_of_SkillTreeType(temp); */
	}
	function onmouseout_of_SkillTreeType(temp){
		/* if (SkillTreeType_CurBtn != '')
			{
			onclick_of_SkillTreeType(document.getElementById(SkillTreeType_CurBtn));
			}
		else {
			document.getElementById('SkillTreeType_Caption').innerHTML = '請點選上方「武器技能」、「強化技能」、「輔助技能」中任一按鈕以繼續。';
			} */
	}	