	
	function update_of_skilltree(temp){
		
		let doc;
		
		//關閉SkillTree視窗
		/* document.getElementById('site_SkillTree').style.display = "none";
		document.getElementById(SkillTreeType_CurBtn).className = 'SkillTreeType_li';
		SkillTreeType_CurBtn = ''; */
		
		//初始化說明、技能、裝備區塊
		initialization_of_ShowCaption();
		initialization_of_skill();
		initialization_of_arm();
		
		//按鈕變色
		if (SkillTree_CurBtn != '')
		{
			document.getElementById(SkillTree_CurBtn).className = 'SkillTree_button';
		}
		document.getElementById(temp.id).className = 'SkillTree_button_current';
		SkillTree_CurBtn = temp.id;
		C_SkillTree_innerHTML = temp.innerHTML;
		
		No_SkillTree = parseInt(temp.id.charAt(temp.id.length-1)) - 1;
		
		document.getElementById('site_Skill').style.display = 'none';
		document.getElementById('site_Skill').innerHTML = Build_SkillTree_TableText(No_SkillTreeType, No_SkillTree);
		
		let Skill_InputCt = 0;
		let Skill_InputCt_max = all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill.length;
		for (let i=0; i<SkillTable_size; i++)
		{
			let T_obj = all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill[Skill_InputCt];
			if (T_obj.Sk_no == i+1)
			{
				let doc = document.getElementById('Skill_' + String(i+1));
				doc.innerHTML = T_obj.Sk_name;
				doc.className = "Skill_td_default";
				doc.setAttribute('data-skillno', String(Skill_InputCt))
				if (Skill_InputCt + 1 < Skill_InputCt_max )
				{
					Skill_InputCt++;
				}
			}
			else {
				let doc = document.getElementById('Skill_' + String(i+1));
				doc.innerHTML = "(尚未開放)";
				doc.onclick = '';
			}
		}
		$('#site_Skill').fadeIn(400);

		//武器
		
		//主手武器
		let Tno_Weap = 1, WeapType_none = true;
		for (let i=0;i<All_WeapType.length;i++)
		{
			let no_repeat_W = true;
			for (let j=0; ( j<all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill.length && no_repeat_W ); ++j)
			{
				for (let k=0;k<all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill[j].Sk_W_type.length; k++)
				{
					if (all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill[j].Sk_W_type[k] == All_WeapType[i])
					{
						doc = document.getElementById('arm_' + String(Tno_Weap));
						doc.innerHTML = All_WeapType[i];
						doc.style.display = 'inline-block';
						Tno_Weap++;
						no_repeat_W = false;
						WeapType_none = false;
					}
				}
			}
		}
		
		//副手武器
		let Tno_Au = 1, AuType_none = true;
		for (let i=0; i<All_AuType.length; ++i)
		{
			let no_repeat_AW = true;
			for (let j=0;(j<all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill.length && no_repeat_AW); ++j)
			{
				for (let k=0;k<all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill[j].Sk_AW_type.length; ++k)
				{
					if (all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill[j].Sk_AW_type[k] == All_AuType[i])
					{
						doc = document.getElementById('au_arm_' + String(Tno_Au));
						doc.innerHTML = All_AuType[i];
						doc.style.display = 'inline-block';
						Tno_Au++;
						no_repeat_AW = false;
						AuType_none = false;
					}
				}
			}
		}
		
		//身體裝備
		let Tno_Body = 1, BodyType_none = true;
		for (let i=0;i<All_BodyType.length; ++i)
		{
			let no_repeat_B = true;
			for (let j=0;(j<all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill.length && no_repeat_B); ++j)
			{
				for (let k=0;k<all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill[j].Sk_B_type.length; ++k)
				{
					if (all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill[j].Sk_B_type[k] == All_BodyType[i])
					{
						doc = document.getElementById('body_arm_' + String(Tno_Body));
						doc.innerHTML = All_BodyType[i];
						doc.style.display = 'inline-block';
						Tno_Body++;
						no_repeat_B = false;
						BodyType_none = false;
					}
				}
			}
		}
		
		//初始化裝備區塊
		if (AuType_none)	//副手
		{
			doc = document.getElementById('au_armO');
			doc.style.display = 'inline-block';
			update_of_arm(doc);
		}
		else {
			update_of_arm(document.getElementById('au_arm_1'));
		}
		
		if (WeapType_none)	//主手優先
		{
			doc = document.getElementById('armO');
			doc.style.display = 'inline-block';
			update_of_arm(doc);
		}
		else {
			update_of_arm(document.getElementById('arm_1'));
		}
		
		if (BodyType_none)	//身體
		{
			doc = document.getElementById('body_armO');
			doc.style.display = 'inline-block';
			update_of_arm(doc);
		}
		else {
			update_of_arm(document.getElementById('body_arm_1'));
		}
		
		$("#site_SkillBranch__ShowCaption1456").fadeIn(400);
		$("#site_SkillLv").fadeIn(400);
	
		document.getElementById('Section_1_Block_1_1').style.display = 'block';
	}
	var SkillTable_size = 0;
	function Build_SkillTree_TableText(SkillTreeType_No, SkillTree_No){
		switch (SkillTreeType_No)
		{
			case 0:
				switch (SkillTree_No)
				{
					case 0:
						SkillTable_size = 14;
						return Build_SkillTree_Table([[4, 2, 2, 1], [1], [2, 2, 1], [1], [2, 2, -2], [1, 1]]);
					case 1:
						SkillTable_size = 14;
						return Build_SkillTree_Table([[3, 2, -3], [1, -2], [1, 1, 1, 1], [2, -4], [1, 1, -2]]);
					case 2:
						SkillTable_size = 14;
						return Build_SkillTree_Table([[2, 1, 1, 1, 1], [1, 1, 1, 1], [-5],[1, 1, 1, -2]]);
					case 3:
						SkillTable_size = 14;
						return Build_SkillTree_Table([[2, 1, 1, 1, 1], [1, 1, 1, 1], [1, 1, -3],[1, -4]]);
					case 4:
						SkillTable_size = 11;
						return Build_SkillTree_Table([[4, 1, 1, 1], [1, 1, 1], [1, -2],[1, -2]]);
					case 5:
						SkillTable_size = 14;
						return Build_SkillTree_Table([[4, 2, 2, 1], [1], [2, 1, 1], [-2], [1, -3], [1, 1, -2]]);
					case 6:
						SkillTable_size = 14;
						return Build_SkillTree_Table([[2, 2, 2, 2, 1], [1], [1, 1, -3], [2, -4], [1, 1, -2]]);
				}
				break;
			case 1:
				switch (SkillTree_No)
				{
					case 0:
						SkillTable_size = 8;
						return Build_SkillTree_Table([[2, 1, 1], [-2], [2, 1, 1], [-2]]);
					case 1:
						SkillTable_size = 9;
						return Build_SkillTree_Table([[2, 1, 1, 1], [1, -2], [1, 1, -2]]);
					case 2:
						SkillTable_size = 9;
						return Build_SkillTree_Table([[2, 1, 1, 1], [1, -2], [1, 1, -2]]);
					case 3:
						SkillTable_size = 8;
						return Build_SkillTree_Table([[1, 1, 1, 1], [1, 1, 1, 1]]);
					case 4:
						SkillTable_size = 8;
						return Build_SkillTree_Table([[1, 1, 1, 1], [1, 1, 1, 1]]);
					case 5:
						SkillTable_size = 8;
						return Build_SkillTree_Table([[1, 1, 1, 1], [1, 1, 1, 1]]);
				}
				break;
			case 2:
				switch (SkillTree_No)
				{
					case 0:
						SkillTable_size = 9;
						return Build_SkillTree_Table([[-2], [-2], [-2], [2, 1], [1], [2, 1], [1]]);
					case 1:
						SkillTable_size = 13;
						return Build_SkillTree_Table([[-4], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]);
					case 2:
						SkillTable_size = 15;
						return Build_SkillTree_Table([[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]);
				}
				break;
		}
	}
	function Build_SkillTree_Table(T_Ary){
		var SkillNo_ct = 1;
	
		var Ttext = "";
		Ttext += "<table>";
		for (let i=0; i<T_Ary.length; i++)
		{
			Ttext += "<tr>";
			for (let j=0; j<T_Ary[i].length; j++)
			{
				if (T_Ary[i][j] > 1)
				{
					Ttext += `<td data-skillno="-1" rowspan=${T_Ary[i][j]} id="Skill_${SkillNo_ct}" onclick="update_of_skill(this)" onmouseout="onmouseout_of_skill(this)" onmouseover="onmouseover_of_skill(this)"></td>`;
				}
				if (T_Ary[i][j] == 1)
				{
					Ttext += `<td data-skillno="-1" id="Skill_${SkillNo_ct}" onclick="update_of_skill(this)" onmouseout="onmouseout_of_skill(this)" onmouseover="onmouseover_of_skill(this)"></td>`;
				}
				if (T_Ary[i][j] < -1)
				{
					Ttext += `<td data-skillno="-1" id="Skill_${SkillNo_ct}" onclick="update_of_skill(this)" onmouseout="onmouseout_of_skill(this)" onmouseover="onmouseover_of_skill(this)"></td>`;
					for (let t1=0; t1<(-T_Ary[i][j])-1; t1++)
					{
					Ttext += "<td></td>";
					}
				}
				SkillNo_ct++;
			}
			Ttext += "</tr>";
		}
		Ttext += "</table>";
		return Ttext;
	}
		
	function onclick_of_SkillTree(temp){
		var Ttext = '';
		switch (temp.innerHTML)
			{
			case '劍術技能':
				Ttext = '可使用劍士的強力戰鬥招式。<br>須裝備單手劍或雙手劍。';
				break;
			case '射擊技能':
				Ttext = '可使用弓箭手的強力戰鬥招式。<br>須裝備弓或連弩。';
				break;	
			case '魔法技能':
				Ttext = '可使用魔法師的強力戰鬥招式。<br>詠唱中遭到攻擊則發動失敗，<br>適合強者挑戰。';
				break;
			case '格鬥技能':
				Ttext = '可使用空手打鬥時的強力戰鬥招式。<br>裝備拳套後威力更強。';
				break;
			case '雙劍技能':
				Ttext = '可自由操控使用兩把劍。<br>使出強力招式。<br>發動技能需裝備兩把單手劍。';
				break;
			case '斧槍技能':
				Ttext = '使用旋風槍時可用的強大戰鬥招式。<br>需裝備旋風槍。';
				break;
			case '武士技能':
				Ttext = '可使用武士的強力戰鬥招式。<br>需裝備拔刀劍。';
				break;
				
			case '防衛技能':
				Ttext = '可將鐵匠鋪改造過的身體防具，<br>加以強化。';
				break;
			case '防護技能':
				Ttext = '可強化盾的性能，使用盾進行攻擊。<br需裝備盾。';
				break;
			case '刀術技能':
				Ttext = '可強化小刀的性能，使用小刀進行攻擊。<br>需裝備小刀。';
				break;
			case '騎士精神':
				Ttext = '守護騎士技能可保護友軍。<br>容易被敵人鎖定，成為標靶。<br>發動此技能需裝備單手劍或雙手劍。';
				break;
			case '狩獵技能':
				Ttext = '善於射箭的狩獵者專用技能。<br>可使用陷阱攻擊、或牽制敵人行動。<br>可習得與弓、弩槍相輔相成的技能。';
				break;
			case '祭司技能':
				Ttext = '懲罰惡徒的祭司技能！<br>可習得方便的小型恢復技能，<br>以及光屬性攻擊技能。';
				break;
				
			case '生存本能':
				Ttext = '可使用冒險路上的好用技能。<br>多與ＨＰ、ＭＰ有關。';
				break;
			case '輔助技能':
				Ttext = '可使用組隊打怪時的有用技能。<br>獨行俠可忽略此項...';
				break;
			case '好戰份子':
				Ttext = '可使用強化角色數值的技能。<br>效果不大、有多餘點數時<br>再嘗試看看吧。';
				break;
			}
		document.getElementById('SkillTree_Caption').innerHTML = Ttext;
	}
	function onmouseover_of_SkillTree(temp){
		onclick_of_SkillTree(temp);
	}
	function onmouseout_of_SkillTree(temp){
		if (SkillTree_CurBtn != '')
			{
			onclick_of_SkillTree(document.getElementById(SkillTree_CurBtn));
			}
		else {
			onclick_of_SkillTreeType(document.getElementById(SkillTreeType_CurBtn));
			}
	}	