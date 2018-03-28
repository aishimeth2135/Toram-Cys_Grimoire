
	function arm_pass(T_name){
		if (T_name.innerHTML == '未選擇')
		{
			return;
		}
		let T_a_have = false;
		let T_au_have = false;
		for (let i=0; i<Weap_Size; ++i)
		{
			if (T_name.id == "arm_" + String(i+1))
			{
				T_a_have = true;
			}
		}
		for (let i=0; i<Au_Size; ++i)
		{
			if (T_name.id == "au_arm_" + String(i+1))
			{
				T_au_have = true;
			}
		}
		if (T_a_have)
		{	
			let THave = false;
			switch (T_name.innerHTML)
			{
				case '雙手劍':
					if (AuType_Cur != '' && AuType_Cur != '其它')
					{ THave = true; } break;
				case '弓':
					if (AuType_Cur != '' && AuType_Cur != '箭矢' && AuType_Cur != '其它') 
					{ THave = true; } break;
				case '魔導具':
					if (AuType_Cur != '' && AuType_Cur != '其它') 
					{ THave = true; } break;
				case '拳套':
					if (AuType_Cur == '拳套') 
					{ THave = true; } break;
				case '旋風槍':
					if (AuType_Cur != '' && AuType_Cur != '箭矢' && AuType_Cur != '小刀' && AuType_Cur != '其它') 
					{ THave = true; } break;
				case '拔刀劍':
					if (AuType_Cur != '' && AuType_Cur != '小刀' && AuType_Cur != '其它') 
					{ THave = true; } break;
			}
			if (THave)
			{
				if (Au_CurBtn != '')
				{
					document.getElementById(Au_CurBtn).className = 'Arm_button';
				}
				AuType_Cur = '';
				Au_CurBtn = '';
			}
			return;
		}
		if (T_au_have)
		{
			let THave = false;
			switch (T_name.innerHTML)
			{
				case '小刀':
					if (WeapType_Cur == '雙手劍' || WeapType_Cur == '弓' || WeapType_Cur == '魔導具' || WeapType_Cur == '雙劍')
					{ THave = true; } break;
				case '盾牌':
					if (WeapType_Cur == '雙手劍' || WeapType_Cur == '弓' || WeapType_Cur == '魔導具' || WeapType_Cur == '雙劍' || WeapType_Cur == '旋風槍')
					{ THave = true; } break;
				case '箭矢':
					if (WeapType_Cur == '雙手劍' || WeapType_Cur == '魔導具' || WeapType_Cur == '雙劍')
					{ THave = true; } break;
					break;
				case '魔導具':
					if (WeapType_Cur == '雙手劍' || WeapType_Cur == '弓' || WeapType_Cur == '魔導具' || WeapType_Cur == '雙劍' || WeapType_Cur == '旋風槍')
					{ THave = true; } break;
					break;
				case '拳套':
					if (WeapType_Cur == '雙手劍' || WeapType_Cur == '弓' || WeapType_Cur == '魔導具' || WeapType_Cur == '雙劍' || WeapType_Cur == '旋風槍' || WeapType_Cur == '拳套')
					{ THave = true; } break;
					break;
				case '拔刀劍':
					if (WeapType_Cur != '弓')
					{ THave = true; } break;
					break;
			}
			if (THave)
			{
				if (Weap_CurBtn != '')
				{
					document.getElementById(Weap_CurBtn).className = 'Arm_button';
				}
				WeapType_Cur = '';
				Weap_CurBtn = '';
			}
		}
	}
	
	function input_arm_name(temp){
		for (let i=0; i<Weap_Size; ++i)
		{
			if (temp.id == 'arm_' + String(i+1) || temp.id == 'armO')
			{
				if (Weap_CurBtn != '')
				{
					document.getElementById(Weap_CurBtn).className = 'Arm_button';
				}
				
				if (temp.id == 'armO')
				{
					WeapType_Cur = '';
				}
				else {
					WeapType_Cur = temp.innerHTML;
				}
				
				Weap_CurBtn = temp.id;
				document.getElementById(temp.id).className = 'Arm_button_current';
				return ;
			}
		}
		for (let i=0; i<Au_Size; ++i)
		{
			if (temp.id == 'au_arm_' + String(i+1) || temp.id == 'au_armO')
			{
				if (Au_CurBtn != '')
				{
					document.getElementById(Au_CurBtn).className = 'Arm_button';
				}
				
				if (temp.id == 'au_armO')
				{
					AuType_Cur = '';
				}
				else {
					AuType_Cur = temp.innerHTML;
				}
				
				Au_CurBtn = temp.id;
				document.getElementById(temp.id).className = 'Arm_button_current';
				return ;
			}
		}
		for (let i=0; i<Body_Size; ++i)
		{
			if (temp.id == 'body_arm_' + String(i+1) || temp.id == 'body_armO')
			{
				if (Body_CurBtn != '' )
				{
					document.getElementById(Body_CurBtn).className = 'Arm_button';
				}
				
				if (temp.id == 'body_armO')
				{
					BodyType_Cur = '';
				}
				else {
					BodyType_Cur = temp.innerHTML;
				}
				
				Body_CurBtn = temp.id;
				document.getElementById(temp.id).className = 'Arm_button_current';
				return ;
			}
		}
	}
	
	var SkillBranch_CallBy_Update = false;
	function update_of_arm(temp){
		
		arm_pass(temp)	
		input_arm_name(temp);
			
		//初始化說明、技能區塊
		initialization_of_ShowCaption();
		//initialization_of_skill();
		
		for (let i=0; i<SkillTable_size; ++i)
		{
			let doc = document.getElementById('Skill_' + String(i+1));
			if (doc.innerHTML != "(尚未開放)")
			{
				doc.className = "Skill_td_default";
			}	
		}
		if (temp.innerHTML != '未選擇')
		{
			for (let i=0; i<all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill.length; ++i)
			{
				let T_obj = all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill[i];
				if ( !(T_obj.arm_confirm(WeapType_Cur, AuType_Cur, BodyType_Cur)) )
				{
					document.getElementById('Skill_' + String(T_obj.Sk_no)).className = "Skill_td_unable";
				}
			}
		}
		
		if ( Skill_CurBtn != '')
		{
			SkillBranch_CallBy_Update = true;
			update_of_skill( document.getElementById(Skill_CurBtn) );
			SkillBranch_CallBy_Update = false;
		}
	}