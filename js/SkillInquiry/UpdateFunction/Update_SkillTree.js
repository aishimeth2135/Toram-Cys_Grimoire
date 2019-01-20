	
	function update_of_skilltree(temp){
		if ( !temp ) return;
		//初始化說明、技能、裝備區塊
		//initialization_of_ShowCaption();
		initialization_of_arm();
		
		let cnt = 0;
		let doc = document.getElementById('skilltree_' + cnt);
		while ( doc )
		{
			if ( doc.className.includes('cur') )
			{
				doc.className = '';
				break;
			}
			++cnt;
			doc = document.getElementById('skilltree_' + cnt);
		}
		
		temp.className = 'SkillTree_button_cur';
		
		doc = document.getElementById('site_SkillTree');
		let tno_stt = parseInt(doc.getAttribute('data-skillcode'));
		let tno_st = parseInt(temp.id.charAt(temp.id.length-1));
		
		doc = document.getElementById('site_Skill');
		doc.style.display = 'none';
		doc.innerHTML = Build_SkillTree_TableText(tno_stt, tno_st) || '(待建構的技能樹)';
		doc.setAttribute('data-skillcode', `${tno_stt}_${tno_st}`);
		doc.setAttribute('data-isinit', 'T');
		
		let Skill_InputCt = 0;
		let Skill_InputCt_max = cy_skillSystem.skillTreeType[tno_stt].skillTree[tno_st].skill.length;
		for (let i=0; i<SkillTable_size; ++i)
		{
			let T_obj = cy_skillSystem.skillTreeType[tno_stt].skillTree[tno_st].skill[Skill_InputCt];
			if (T_obj.no == i+1)
			{
				doc = document.getElementById('skill_' + i);
				doc.innerHTML = T_obj.skillName;
				doc.className = "Skill_td_default";
				doc.setAttribute('data-skillno', String(Skill_InputCt))
				if (Skill_InputCt + 1 < Skill_InputCt_max )
				{
					Skill_InputCt++;
				}
			}
			else {
				let doc = document.getElementById('skill_' + i);
				doc.innerHTML = '<a data-langtext="(Unknow)|,|(尚未開放)"></a>';
				doc.setAttribute('onclick', '');
				doc.setAttribute('onmouseover', '');
				doc.setAttribute('onmouseout', '');
			}
		}
		$('#site_Skill').fadeIn(400);

		//武器
		
		//主手武器
		let WeapNum = 0, Weap_text = '';
		for (let i=0; i<All_WeapType.length; ++i)
		{
			let no_repeat = true;
			for (let j=0; (j<cy_skillSystem.skillTreeType[tno_stt].skillTree[tno_st].skill.length && no_repeat ); ++j)
			{
				for (let k=0; k<cy_skillSystem.skillTreeType[tno_stt].skillTree[tno_st].skill[j].mainWeaponType.length; ++k)
				{
					if (cy_skillSystem.skillTreeType[tno_stt].skillTree[tno_st].skill[j].mainWeaponType[k] == i)
					{
						Weap_text += `<div id="WeapArms_${WeapNum}" data-armsno="${i}" class="Arm_button" onclick='updateSite_WeapArms(this)'>${All_WeapType[i]}</div>`;
						++WeapNum;
						no_repeat = false;
					}
				}
			}
		}
		
		//副手武器
		let AuNum = 0, Au_text = '';
		for (let i=0; i<All_AuType.length; ++i)
		{
			let no_repeat = true;
			for (let j=0; (j<cy_skillSystem.skillTreeType[tno_stt].skillTree[tno_st].skill.length && no_repeat ); ++j)
			{
				for (let k=0; k<cy_skillSystem.skillTreeType[tno_stt].skillTree[tno_st].skill[j].subWeaponType.length; ++k)
				{
					if (cy_skillSystem.skillTreeType[tno_stt].skillTree[tno_st].skill[j].subWeaponType[k] == i)
					{
						Au_text += `<div id="AuArms_${AuNum}" data-armsno="${i}" class="Arm_button" onclick='updateSite_AuArms(this)'>${All_AuType[i]}</div>`;
						++AuNum;
						no_repeat = false;
					}
				}
			}
		}
		
		//副手武器
		let bodyNum = 0, body_text = '';
		for (let i=0; i<All_AuType.length; ++i)
		{
			let no_repeat = true;
			for (let j=0; (j<cy_skillSystem.skillTreeType[tno_stt].skillTree[tno_st].skill.length && no_repeat ); ++j)
			{
				for (let k=0; k<cy_skillSystem.skillTreeType[tno_stt].skillTree[tno_st].skill[j].bodyArmorType.length; ++k)
				{
					if (cy_skillSystem.skillTreeType[tno_stt].skillTree[tno_st].skill[j].bodyArmorType[k] == i)
					{
						body_text += `<div id="bodyArms_${bodyNum}" data-armsno="${i}" class="Arm_button" onclick='updateSite_bodyArms(this)'>${All_bodyType[i]}</div>`;
						++bodyNum;
						no_repeat = false;
					}
				}
			}
		}
		let armsNone_text = 'none';
		switch (getCur_languageNo())
		{
			case 0: armsNone_text = 'None'; break;
			case 1: armsNone_text = '未選擇'; break;
			case 2: armsNone_text = '未選択'; break;
		}
		//初始化裝備區塊
		if (Au_text == '')	//副手
		{
			document.getElementById('AuArms_site').innerHTML = `<div id="AuArmsO" class="Arm_button" data-armsno="-1" onclick='updateSite_AuArms(this)'>${armsNone_text}</div>`;
			updateSite_AuArms(document.getElementById('AuArmsO'));
		}
		else {
			document.getElementById('AuArms_site').innerHTML = Au_text ;
			updateSite_AuArms(document.getElementById('AuArms_0'));
		}
		
		if (Weap_text == '')	//主手優先
		{
			document.getElementById('WeapArms_site').innerHTML = `<div id="WeapArmsO" class="Arm_button" data-armsno="-1" onclick='updateSite_WeapArms(this)'>${armsNone_text}</div>`;
			updateSite_WeapArms(document.getElementById('WeapArmsO'));
		}
		else {
			document.getElementById('WeapArms_site').innerHTML = Weap_text ;
			updateSite_WeapArms(document.getElementById('WeapArms_0'));
		}
		
		if (body_text == '')	//身體
		{
			document.getElementById('bodyArms_site').innerHTML = `<div id="bodyArmsO" class="Arm_button" data-armsno="-1" onclick='updateSite_bodyArms(this)'>${armsNone_text}</div>`;
			updateSite_bodyArms(document.getElementById('bodyArmsO'));
		}
		else {
			document.getElementById('bodyArms_site').innerHTML = body_text ;
			updateSite_bodyArms(document.getElementById('bodyArms_0'));
		}
		
		$("#site_SkillBranch__ShowCaption1456").fadeIn(400);
		$("#site_SkillLv").fadeIn(400);
		
		document.getElementById('site_Skill').setAttribute('data-isinit', 'F');
		document.getElementById('Section_1_Block_1_1').style.display = 'block';
		document.getElementById('ShowCaption_Body_1_openBtn').style.display = 'block';
		resetInnerLang(document.getElementById('site_Skill'));
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
						SkillTable_size = 14;
						return Build_SkillTree_Table([[4, 1, 1, -2], [1, 1, 1, 1], [1, 1, -2],[1, 1, -2]]);
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
			case 3:
				switch (SkillTree_No)
				{
					case 0:
						SkillTable_size = 15;
						return Build_SkillTree_Table([[4, 1, 1, 1, 1], [1, 1, -2], [2, 1, -2], [1, 1, 1], [-5]]);
					case 1:
						SkillTable_size = 12;
						return Build_SkillTree_Table([[3, 1, 1, 1, 1], [1, 1, -2], [1, 1, -2], [1]]);
					case 2:
						SkillTable_size = 7;
						return Build_SkillTree_Table([[3, 1, 1], [1, 1], [1, 1]]);
				}
				break;
			case 4:
				switch (SkillTree_No)
				{
					case 0:
						SkillTable_size = 6;
						return Build_SkillTree_Table([[1, 1, 1], [1, 1, 1]]);
					case 1:
						SkillTable_size = 6;
						return Build_SkillTree_Table([[1, 1, 1], [1, 1, 1]]);
				}
				break;
		}
	}
	function Build_SkillTree_Table(T_Ary){
		let SkillNo_ct = 0;
	
		let Ttext = "";
		Ttext += "<table>";
		for (let i=0; i<T_Ary.length; ++i)
		{
			Ttext += "<tr>";
			for (let j=0; j<T_Ary[i].length; j++)
			{
				if (T_Ary[i][j] > 1)
				{
					Ttext += `<td data-skillno="-1" rowspan=${T_Ary[i][j]} id="skill_${SkillNo_ct}" onclick="update_of_skill(this)" onmouseout="onmouseout_of_skill(this)" onmouseover="onmouseover_of_skill(this)"></td>`;
				}
				if (T_Ary[i][j] == 1)
				{
					Ttext += `<td data-skillno="-1" id="skill_${SkillNo_ct}" onclick="update_of_skill(this)" onmouseout="onmouseout_of_skill(this)" onmouseover="onmouseover_of_skill(this)"></td>`;
				}
				if (T_Ary[i][j] < -1)
				{
					Ttext += `<td data-skillno="-1" id="skill_${SkillNo_ct}" onclick="update_of_skill(this)" onmouseout="onmouseout_of_skill(this)" onmouseover="onmouseover_of_skill(this)"></td>`;
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
		if ( !temp ) return;
		let Ttext = '';
		let tno_stt = parseInt(document.getElementById('site_SkillTree').getAttribute('data-skillcode'));
		switch (tno_stt)
		{
			case 0:
				switch (parseInt(temp.id.charAt(temp.id.length - 1)))
				{
				case 0:
					Ttext = '可使用劍士的強力戰鬥招式。<br />須裝備單手劍或雙手劍。';
					break;
				case 1:
					Ttext = '可使用弓箭手的強力戰鬥招式。<br />須裝備弓或連弩。';
					break;	
				case 2:
					Ttext = '可使用魔法師的強力戰鬥招式。<br />詠唱中遭到攻擊則發動失敗，<br />適合強者挑戰。';
					break;
				case 3:
					Ttext = '可使用空手打鬥時的強力戰鬥招式。<br />裝備拳套後威力更強。';
					break;
				case 4:
					Ttext = '可自由操控使用兩把劍。<br />使出強力招式。<br />發動技能需裝備兩把單手劍。';
					break;
				case 5:
					Ttext = '使用旋風槍時可用的強大戰鬥招式。<br />需裝備旋風槍。';
					break;
				case 6:
					Ttext = '可使用武士的強力戰鬥招式。<br />需裝備拔刀劍。';
					break;
				}
				break;
			case 1:
				switch (parseInt(temp.id.charAt(temp.id.length - 1)))
				{			
				case 0:
					Ttext = '可將鐵匠鋪改造過的身體防具，<br />加以強化。';
					break;
				case 1:
					Ttext = '可強化盾的性能，使用盾進行攻擊。<br />需裝備盾。';
					break;
				case 2:
					Ttext = '可強化小刀的性能，使用小刀進行攻擊。<br />需裝備小刀。';
					break;
				case 3:
					Ttext = '守護騎士技能可保護友軍。<br />容易被敵人鎖定，成為標靶。<br />發動此技能需裝備單手劍或雙手劍。';
					break;
				case 4:
					Ttext = '善於射箭的狩獵者專用技能。<br />可使用陷阱攻擊、或牽制敵人行動。<br />可習得與弓、弩槍相輔相成的技能。';
					break;
				case '祭司技能':
					Ttext = '懲罰惡徒的祭司技能！<br />可習得方便的小型恢復技能，<br />以及光屬性攻擊技能。';
					break;
				}
				break;
			case 2:
				switch (parseInt(temp.id.charAt(temp.id.length - 1)))
				{
				case 0:
					Ttext = '可使用冒險路上的好用技能。<br />多與ＨＰ、ＭＰ有關。';
					break;
				case 1:
					Ttext = '可使用組隊打怪時的有用技能。<br />獨行俠可忽略此項...';
					break;
				case 2:
					Ttext = '可使用強化角色數值的技能。<br />效果不大、有多餘點數時<br>再嘗試看看吧。';
					break;
				}
				break;
		}
		document.getElementById('SkillTree_Caption').innerHTML = Ttext;
	}
	function onmouseover_of_SkillTree(temp){
		onclick_of_SkillTree(temp);
	}
	function onmouseout_of_SkillTree(temp){
		let cnt = 0;
		let doc = document.getElementById('skilltree_' + cnt);
		while ( doc )
		{
			if ( doc.className.includes('cur') )
			{
				onclick_of_SkillTree( doc );
				break;
			}
			++cnt;
			doc = document.getElementById('skilltree_' + cnt);
		}	
	}