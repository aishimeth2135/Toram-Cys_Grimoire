	
	function updateSite_WeapArms(temp){
		weapArms_TypePass(temp);
		
		let T_armsno = parseInt(temp.getAttribute('data-armsno'));
		WeapType_Cur = T_armsno;
		
		if (Weap_CurBtn != '')
		{
			document.getElementById(Weap_CurBtn).className = 'Arm_button';
		}
		Weap_CurBtn = temp.id;
		document.getElementById(Weap_CurBtn).className = 'Arm_button_current';
		
		arms_resetSkillSite(T_armsno);
	}
	function updateSite_AuArms(temp){
		AuArms_TypePass(temp);
		
		let T_armsno = parseInt(temp.getAttribute('data-armsno'));
		AuType_Cur = T_armsno;
		
		if (Au_CurBtn != '')
		{
			document.getElementById(Au_CurBtn).className = 'Arm_button';
		}
		Au_CurBtn = temp.id;
		document.getElementById(Au_CurBtn).className = 'Arm_button_current';
		
		arms_resetSkillSite(T_armsno);
	}
	function updateSite_bodyArms(temp){
		
		let T_armsno = temp.getAttribute('data-armsno');
		bodyType_Cur = T_armsno;
		
		if (body_CurBtn != '')
		{
			document.getElementById(body_CurBtn).className = 'Arm_button';
		}
		body_CurBtn = temp.id;
		document.getElementById(body_CurBtn).className = 'Arm_button_current';
		
		arms_resetSkillSite(T_armsno);
	}
	
	
	/* 
	All_WeapType = ['單手劍'0, '雙手劍'1, '弓'2, '弩'3, '法杖'4, '魔導具'5, '拳套'6, '旋風槍'7, '雙劍'8, '拔刀劍'9, '其它'10]
	All_AuType = ['小刀'0, '盾牌'1, '箭矢'2, '魔導具'3, '拳套'4, '拔刀劍'5, '其它'6] 
	*/
	function weapArms_TypePass(temp){
		if ( AuType_Cur == -1 )
		{
			return;
		}
		
		let typeAry = [];
		switch ( parseInt(temp.getAttribute('data-armsno')) )
		{
			case 0: case 3: typeAry = [0, 1, 2, 3, 4, 6];
				break;
			case 1: typeAry = [6];
				break;
			case 2: typeAry = [2, 5, 6];
				break;
			case 4: typeAry = [0, 1, 2, 4, 6];
				break;
			case 5: typeAry = [6];
				break;
			case 6: typeAry = [0, 1, 2, 3, 6];
				break;
			case 7: typeAry = [0, 2, 6];
				break;
			case 9: typeAry = [0, 6];
				break;
			default: return;
		}
		for (let i=0; i<typeAry.length; ++i)
		{
			if ( AuType_Cur == typeAry[i] )
			{
				return;
			}
		}
		if (Au_CurBtn != '')
		{
			document.getElementById(Au_CurBtn).className = 'Arm_button';
		}
		AuType_Cur = -1;
		Au_CurBtn = '';
	}
	function AuArms_TypePass(temp){
		if ( WeapType_Cur == -1 )
		{
			return;
		}
		
		let typeAry = [];
		switch ( parseInt(temp.getAttribute('data-armsno')) )
		{
			case 0: typeAry = [0, 3, 4, 6, 7, 9, 10];
				break;
			case 1: typeAry = [0, 3, 4, 6, 10];
				break;
			case 2: typeAry = [0, 2, 3, 4, 6, 7, 10];
				break;
			case 3: typeAry = [0, 6, 10];
				break;
			case 4: typeAry = [0, 3, 4, 10];
				break;
			case 5: typeAry = [2, 10];
				break;
			default: return;
		}
		for (let i=0; i<typeAry.length; ++i)
		{
			if ( WeapType_Cur == typeAry[i] )
			{
				return;
			}
		}
		if (Weap_CurBtn != '')
		{
			document.getElementById(Weap_CurBtn).className = 'Arm_button';
		}
		WeapType_Cur = -1;
		Weap_CurBtn = '';
	}
	
	function arms_resetSkillSite(armsNo = -1){
	/* 	//初始化說明、技能區塊
		initialization_of_ShowCaption();
		//initialization_of_skill(); */
		
		for (let i=0; i<SkillTable_size; ++i)
		{
			let doc = document.getElementById('Skill_' + String(i+1));
			if (doc.innerHTML != "(尚未開放)")
			{
				doc.className = "Skill_td_default";
			}	
		}
		if ( armsNo != -1)
		{
			for (let i=0; i<all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill.length; ++i)
			{
				let T_obj = all_skilltree_type[No_SkillTreeType].STt_skilltree[No_SkillTree].ST_skill[i];
				if ( !(T_obj.armsConfirm(WeapType_Cur, AuType_Cur, BodyType_Cur)) )
				{
					document.getElementById('Skill_' + String(T_obj.Sk_no)).className = "Skill_td_unable";
				}
			}
		}
		
		if ( Skill_CurBtn != '')
		{
			update_of_skill( document.getElementById(Skill_CurBtn) , true);
		}
	}
	