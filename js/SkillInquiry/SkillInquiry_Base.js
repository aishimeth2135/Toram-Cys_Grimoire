	
	// ======= 各類按鈕, 預設欄位數量
	var SkillTree_Size = 7;
	
	// ====== Array for Search
	var All_WeapType = [],
	All_AuType = [],
	All_bodyType = [];
	
	// ====== Record Of Current Arm
	var WeapType_Cur = '',
	AuType_Cur = '',
	bodyType_Cur = '';
	
	// ====== 記錄當前點擊按鈕, 處理按鈕變色
	var SkillTreeType_CurBtn = '',
	SkillTree_CurBtn = '',
	Skill_CurBtn = '',
	Weap_CurBtn = '',
	Au_CurBtn = '',
	body_CurBtn = '';
	
	// =============================== [ SkillItem ]
	var skill_item = function(tSI_No, tSI_name, tSI_value, tSI_unit){
		this.SI_No = tSI_No;
		this.SI_name = tSI_name;       //String, SkillItem名稱
		this.SI_value = tSI_value;     //Number or String, SkillItem值
		this.SI_unit = tSI_unit;       //String, 單位、後綴
	}
	
	
	var all_SI = [];
	// ================================== [ 通用 0~7]
	all_SI.push(
		new skill_item(0, '', '', ''),					//0, 傷害、治癒量......
		new skill_item(1, '', '', ''),    				//1,有效atk/matk
		new skill_item(2, '+', 0, ''), 					//2, 技能常數
		new skill_item(3, ' ×', 0, ''), 					//3, 技能倍率
		new skill_item(4, '<u>額外加成</u>', '', ''),		//4
		new skill_item(5, '', 0, ''), 						//5, BUFF-1
		new skill_item(6, '', 0, ''), 						//6, BUFF-2
		new skill_item(7, '', 0, ''), 						//7, BUFF-3
		
		//8~15
		new skill_item(8, '適用｜', '', ''),				//8
		new skill_item(9, 'MP消耗：', 0, ''),				//9
		new skill_item(10, '射程：', '', 'm'),				//10
		new skill_item(11, '類型：', '', ''),				//11
		new skill_item(12, '<br />', '', ''),					//12
		new skill_item(13, '<br /><u>', '', '</u>放入連撃。'),//13
		new skill_item(14, '', '', ''),  					//14, 遊戲內技能說明
		new skill_item(15, '', '', ''),  					//15, 額外說明
		
		// ================================== [ 變動 16~24]
		new skill_item(16, '作用方式：', '', ''),			//16
		new skill_item(17, '動作時間：', '', ''),			//17
		new skill_item(18, '詠唱時間：', '', '秒'),			//18
		new skill_item(19, '蓄力時間：', '', '秒'),			//19
		new skill_item(20, '傷害次數：', '', '次'),			//20
		new skill_item(21, '作用次數：', '', '次'),			//21
		new skill_item(22, '<br>範圍中心：', '', ''),		//22
		new skill_item(23, '影響半徑：', '', 'm'),			//23
		new skill_item(24, '<br />持續時間：', '', '秒'),		//24
		
		// ================================== [ 機率 ]
		new skill_item(25, '_@命中成功後，有', '', '%機率使敵人'),	//25
		new skill_item(26, '', '', '。'),	//異常狀態			//26
		
		new skill_item(27, '', '', ''),							//27, 額外說明
		new skill_item(28, '', '', ''), 							//28, 額外說明
		new skill_item(29, '', '', '')); 							//29, 額外說明
	
	
	/*=============================================================*/
	var SkillItem_Gain = function(tSG_Sbranch, tSG_SINo, tSG_value, tW_Type, tAu_Type, tB_Type){
		this.SG_Sbranch = tSG_Sbranch;  			 //String, 判定之Branch location in array
		this.SG_SINo = tSG_SINo;               //String, 判定之Skill_ItemNo
		this.SG_value = tSG_value;               //Number or String, 輸入SkillItem之值
		this.W_Type = tW_Type;                   //String, 符合條件之WeaponType
		this.Au_Type = tAu_Type;                 //String, 符合條件之AuxType
		this.B_Type = tB_Type;                   //String, 符合條件之BodyType
	}
	
	var all_SI_gain = [];
	//Skill_Item_Gain_List.js
	
	function InputGainToSkill(SName, SBranch, SINo, InputValue, W_type, Au_Type, B_Type){
		for (let i=0; i<all_skilltree_type.length; ++i)
		{
			for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
			{
				for (let k=0; k<all_skilltree_type[i].STt_skilltree[j].ST_skill.length; ++k)
				{
					if ( all_skilltree_type[i].STt_skilltree[j].ST_skill[k].Sk_name.includes(SName) )
					{
						all_skilltree_type[i].STt_skilltree[j].ST_skill[k].Sk_Gain.push(new SkillItem_Gain(SBranch, SINo, InputValue, W_type, Au_Type, B_Type));
					}
				}
			}
		}
	}
	
	/*=============================================================*/
	var the_skill = function(tSk_no, tSk_name, tSk_Pre, tSk_type, baseAbilityStr, tSk_addDesc = ""){
		this.Sk_no = tSk_no;     //Int
		this.Sk_name = tSk_name.replace('_#', '#'); //String
		this.Sk_pre = tSk_Pre;
		this.Sk_lv = 0;
		this.Sk_W_type  = [];   //Array of String<WeaponType>
		this.Sk_Au_type = [];   //Array of String<AuxiliaryWeaponType>
		this.Sk_B_type  = [];   //Array of String<BodyType>
		this.Sk_branch  = ['技能效果'];   //Array of String<SkillBranch>
		this.Sk_Gain = [];
		
		this.Sk_type = tSk_type;
		//this.Sk_baseAbility = tSk_baseAbility;
		this.Sk_calcLv = 0;
		
		this.Sk_charaAddition = [];
		this.Sk_charaAddition_list = [];
		this.Sk_charaAddition_armsConfirm = [];
		
		this.Sk_addDesc = tSk_addDesc;
		
		if ( baseAbilityStr == '' ) return;
		let _str = baseAbilityStr;
		
		let _list = _str.split(/\s*&\s*/);
		let _cnt = 0, _additionStr = [];
		for (let i=0; i<_list.length; ++i)
		{
			if ( !_list[i].match(/(.+)\[(.+)\]/) )
			{
				console.log(baseAbilityStr);
				return;
			}
			let t_ary = _list[i].match(/(.+)\[(.+)\]/);
			this.Sk_charaAddition_armsConfirm.push(t_ary[1]);
			this.Sk_charaAddition_list.push([]);
			_additionStr = t_ary[2].split(/\s*,\s*(?!\s*[a-zA-Z0-9_]+\s*\))/);
			
			for (let i=0; i<_additionStr.length; ++i)
			{
				if (_additionStr[i].match(/(.+)#.+%/) )
				{
					let isHave = false;
					for (let j=0; j<this.Sk_charaAddition.length; ++j)
					{
						if ( this.Sk_charaAddition[j].base.baseName == RegExp.$1 && this.Sk_charaAddition[j].abilityType == 0 )
						{
							isHave = true;
						}
					}
					if ( isHave ) continue;
					
					this.Sk_charaAddition.push(new cy_ability());
					//console.log(RegExp.$1);
					this.Sk_charaAddition[_cnt].setInit(RegExp.$1, 0);
					++_cnt;
					continue;
				}
				if (_additionStr[i].match(/(.+)#.+/) )
				{
					let isHave = false;
					for (let j=0; j<this.Sk_charaAddition.length; ++j)
					{
						//console.log(`${this.Sk_charaAddition[j].base.baseName}, ${RegExp.$1}, ${this.Sk_charaAddition[j].abilityType}`);
						if ( this.Sk_charaAddition[j].base.baseName == RegExp.$1 && this.Sk_charaAddition[j].abilityType == 1 )
						{
							isHave = true;
						}
					}
					if ( isHave ) continue;
					
					this.Sk_charaAddition.push(new cy_ability());
					//console.log(RegExp.$1);
					this.Sk_charaAddition[_cnt].setInit(RegExp.$1, 1);
					++_cnt;
					continue;
				}
				console.log('error: ' + baseAbilityStr);
				console.log('error: '+ i + ' : ' + _additionStr[i]);
				return;
			}
		}
		//console.log(this.Sk_charaAddition);
		for (let i=0; i<this.Sk_charaAddition_armsConfirm.length; ++i)
		{
			for (let j=0; j<this.Sk_charaAddition.length; ++j)
			{
				this.Sk_charaAddition_list[i].push("0");
			}
			
			let t_ary = _list[i].match(/(.+)\[(.+)\]/);
			_additionStr = t_ary[2].split(/\s*,\s*(?!\s*[a-zA-Z0-9_]+\s*\))/);
			
			for (let j=0; j<_additionStr.length; ++j)
			{
				if (_additionStr[j].match(/(.+)#([^%]+)/) )
				{
					let isHave = false;
					for (let k=0; k<this.Sk_charaAddition.length; ++k)
					{
						if ( this.Sk_charaAddition[k].base.baseName == RegExp.$1 ) this.Sk_charaAddition_list[i][k] = RegExp.$2;
					}
					continue;
				}
				console.log('error');
				return;
			}
		}
	}
	
	the_skill.prototype.armsConfirm = function(T_W, T_Au, T_B){
		if (T_W != -1)
		{
			for (let i=0;i<this.Sk_W_type.length;++i)
			{
				if (T_W == this.Sk_W_type[i] || this.Sk_W_type[i] == 10) return true;
			}
		}
		if (T_Au != -1)
		{
			for (let i=0;i<this.Sk_Au_type.length;++i)
			{
				if (T_Au == this.Sk_Au_type[i] || this.Sk_Au_type[i] == 6) return true;
			}
		}
		if (T_B != -1)
		{
			for (let i=0; i<this.Sk_B_type.length; ++i)
			{
				if (T_B == this.Sk_B_type[i]) return true;
			}
		}
		return false;
	}
	
	the_skill.prototype.resetSkillAddition = function(W_type = '', Au_type = '', B_type = ''){
		W_type = W_type | cy_character.charaEquipments[0].type;
		Au_type = Au_type | cy_character.charaEquipments[1].type;
		B_type = B_type | cy_character.charaEquipments[2].type;
		
		for (let i=0; i<this.Sk_charaAddition_armsConfirm.length; ++i)
		{
			let isConfirm = false;
			let t_ary = this.Sk_charaAddition_armsConfirm[i].split(',');
			for (let j=0; j<t_ary.length; ++j)
			{
				let armsConfirm_ary = t_ary[j].split('_');
				
				switch ( armsConfirm_ary[0] )
				{
					case "M":	//main-weapon
						if ( W_type == cy_character.weap_map[armsConfirm_ary[1]] ) isConfirm = true;
						break;
					case "S":	//sub-weapon
						if ( Au_type == cy_character.au_map[armsConfirm_ary[1]] ) isConfirm = true;
						break;
					case 'b':
						if ( B_type == cy_character.body_map[armsConfirm_ary[1]] ) isConfirm = true;
						break;
					case "B":	//main-weapon or sub-weapon
						if ( W_type == cy_character.weap_map[armsConfirm_ary[1]] || Au_type == cy_character.au_map[armsConfirm_ary[1]] ) isConfirm = true;
						break;
					case "D":	//main-weapon and sub-weapon
						let dual_ary = armsConfirm_ary[1].split('+');
						if ( W_type == cy_character.weap_map[dual_ary[0]] && Au_type == cy_character.au_map[dual_ary[1]] ) isConfirm = true;
						break;
					case "all":	//all
						isConfirm = true;
						break;
					case "noSub":	//no have sub-weapon
						if ( Au_type == 6 ) isConfirm = true;
						break;
				}
				
				
				for (let j=0; j<this.Sk_charaAddition_list[i].length; ++j)
				{
					let SLv = this.Sk_calcLv;
					let CLv = cy_character.characterLv;
					if ( !isConfirm || this.Sk_calcLv == 0)
					{
						this.Sk_charaAddition[j].setValue(0);
						continue;
					}
					
					this.Sk_charaAddition[j].setValue(eval(this.Sk_charaAddition_list[i][j]));
				}
				if ( isConfirm ) break;
			}
			if ( isConfirm ) break;
		}
	}
	
	/*=============================================================*/
	var the_skilltree = function(ST_no, ST_name){
		this.ST_no = ST_no;     	//Int, NO of SkillTree, For Array
		this.ST_name = ST_name; 	//String
		this.ST_skill = [];     	//Array of Object<Skill>
		this.ST_beSel = false;
	}
	the_skilltree.prototype.Sk_No_FindLocation = function(No){
		for (let i=0;i <this.ST_skill.length; ++i)
		{
			if (No == this.ST_skill[i].Sk_no) return i;
		}
	}
	
	var the_skilltree_type = function(tSTt_name){
		this.STt_name = tSTt_name;
		this.STt_skilltree = [];	//Array of Object<SkillTree>
	}
	
	var all_skilltree_type = [];
	
	all_skilltree_type.push(new the_skilltree_type('武器技能'), new the_skilltree_type('強化技能'), new the_skilltree_type('輔助技能'));
	
	//SkillTreeType_List_0~2.js
	
	/*=============================================================*/
	function input_SI_value_bySelection(T_gear, ArmsName, value){
		/* let WeapArms_map = {'1hSword': 0, '2hSword': 1, 'Bow': 2, 'Bowgun': 3, 'Staff': 4, 'MagicDevice': 5, 'Knuckles': 6, 'Halberd': 7, 'DualSword': 8, 'Katana': 9, 'Other': 10};
		let AuArms_map = {'Dagger': 0, 'Shield': 1, 'Arrow': 2, 'MagicDevice': 3, 'Knuckles': 4, 'Katana': 5, 'Other': 6}; */
		if ( T_gear == 'Weap_Au' )
		{
			T_gearAry = [WeapType_Cur, AuType_Cur];
			T_mapAry = [
				{'1hSword': 0, '2hSword': 1, 'Bow': 2, 'Bowgun': 3, 'Staff': 4, 'MagicDevice': 5, 'Knuckles': 6, 'Halberd': 7, 'DualSword': 8, 'Katana': 9, 'Other': 10},
				{'Dagger': 0, 'Shield': 1, 'Arrow': 2, 'MagicDevice': 3, 'Knuckles': 4, 'Katana': 5, 'Other': 6}
			];
			if ( T_gearAry[0] == -1 && T_gearAry[1] == -1)
			{
				return value[value.length-1];
			}
			for (let T=0; T<T_gearAry.length; ++T)
			{
				if ( T_gearAry[T] != -1 )
				{
					for (let i=0; i<ArmsName.length; ++i)
					{
						if (T_gearAry[T] == T_mapAry[T][ArmsName[i]])
						{
							return value[i];
						}
					}
				}
			}
			return value[value.length-1];
		}
		
		if ( T_gear == 'Weap' )
		{
			T_gear = WeapType_Cur;
			T_map = {'1hSword': 0, '2hSword': 1, 'Bow': 2, 'Bowgun': 3, 'Staff': 4, 'MagicDevice': 5, 'Knuckles': 6, 'Halberd': 7, 'DualSword': 8, 'Katana': 9, 'Other': 10};
		}
		if ( T_gear == 'Au' )
		{
			T_gear = AuType_Cur;
			T_map = {'Dagger': 0, 'Shield': 1, 'Arrow': 2, 'MagicDevice': 3, 'Knuckles': 4, 'Katana': 5, 'Other': 6};
		}
		if ( T_gear != -1 )
		{
			for (let i=0; i<ArmsName.length; ++i)
			{
				if (T_gear == T_map[ArmsName[i]])
				{
					return value[i];
				}
			}
			return value[value.length-1];
		}
		else {
			return value[value.length-1];
		}
	}
	
	/*======================================================*/
	function build_branch_onclick(Tstring, BranchAry){
		for (let i=0; i<BranchAry.length; ++i)
		{
			Tstring = replaceAll(Tstring, '_&' + i + '_', '<a onclick="BranchText_onclick(this.innerHTML)">' + BranchAry[i] + '</a>');
		}
		return Tstring;
	}
	
	function BranchText_onclick(BranchName){
		let cnt = 1;
		while ( document.getElementById('skillBranch_' + String(cnt)) )
		{
			if ( BranchName == document.getElementById('skillBranch_' + String(cnt)).innerHTML )
			{
				updateSite_skillBranch( document.getElementById('skillBranch_' + String(cnt)) );
				return;
			}
			++cnt;
		}
		alert("Error <BranchText_onclick>");
	}
	
	
	function open_ShowCaption_Body_1(temp){
		let T_modeno = parseInt(temp.getAttribute('data-modeno'));
		let Ttext = '';
		
		switch (T_modeno)
		{
			case 0:
				switch (getCur_languageNo())
				{
					case 0: Ttext = '&gt;&nbsp;隱藏遊戲內技能說明'; break;
					case 1: Ttext = '&gt;&nbsp;隱藏遊戲內技能說明'; break;
					case 2: Ttext = '&gt;&nbsp;隱藏遊戲內技能說明'; break;
				}
				document.getElementById('ShowCaption_Body_1').style.display = 'inline-block';
				temp.setAttribute('data-modeno', "1");
				break;
			case 1:
				switch (getCur_languageNo())
				{
					case 0: Ttext = '&gt;&nbsp;顯示遊戲內技能說明'; break;
					case 1: Ttext = '&gt;&nbsp;顯示遊戲內技能說明'; break;
					case 2: Ttext = '&gt;&nbsp;顯示遊戲內技能說明'; break;
				}
				document.getElementById('ShowCaption_Body_1').style.display = 'none';
				temp.setAttribute('data-modeno', "0");
				break;
		}
		temp.innerHTML = Ttext;
	}
		