	
	var cy_skillSystem = {
		skillTreeType: [],
		skillCaptionItem: []
	};
	
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
	var Weap_CurBtn = '',
	Au_CurBtn = '',
	body_CurBtn = '';
	
	// =============================== [ SkillItem ]
	var cy_skillCaptionItem = function(tno, tname, tvalue, tunit){
		this.no = tno;
		this.name = tname;       //String, SkillItem名稱
		this.value = tvalue;     //Number or String, SkillItem值
		this.unit = tunit;       //String, 單位、後綴
		this.def_name = tname;
		this.def_unit = tunit;
	}
	
	
	// ================================== [ 通用 0~7]
	cy_skillSystem.skillCaptionItem.push(
		new cy_skillCaptionItem(0	, '', '', ''),					//0, 傷害、治癒量......
		new cy_skillCaptionItem(1	, '', '', ''),    				//1,有效atk/matk
		new cy_skillCaptionItem(2	, '+', 0, ''), 					//2, 技能常數
		new cy_skillCaptionItem(3	, ' ×', 0, ''), 					//3, 技能倍率
		new cy_skillCaptionItem(4	, '<u>Add.</u>|,|<u>額外加成</u>', '', ''),		//4
		new cy_skillCaptionItem(5	, '', 0, ''), 						//5, BUFF-1
		new cy_skillCaptionItem(6	, '', 0, ''), 						//6, BUFF-2
		new cy_skillCaptionItem(7	, '', 0, ''), 						//7, BUFF-3
		
		//8~15
		new cy_skillCaptionItem(8	, 'Equipping｜|,|適用｜', '', ''),				//8
		new cy_skillCaptionItem(9	, 'MP Cost｜|,|MP消耗｜', 0, ''),				//9
		new cy_skillCaptionItem(10	, 'Range｜|,|射程｜', '', 'm'),				//10
		new cy_skillCaptionItem(11	, 'Category｜|,|類型｜', '', ''),				//11
		new cy_skillCaptionItem(12	, '<br />', '', ''),					//12
		new cy_skillCaptionItem(13	, '<br /><u>', '', '</u>&nbsp;added in Combo.|,|</u>放入連撃。'),//13
		new cy_skillCaptionItem(14	, '', '', ''),  					//14, 遊戲內技能說明
		new cy_skillCaptionItem(15	, '', '', ''),  					//15, 額外說明
		
		// ================================== [ 變動 16~24]
		new cy_skillCaptionItem(16	, 'Skill Type｜|,|作用方式：', '', ''),			//16
		new cy_skillCaptionItem(17	, 'Action Time｜|,|動作時間：', '', ''),			//17
		new cy_skillCaptionItem(18	, 'Casting Time｜|,|詠唱時間：', '', ' secs.|,|秒'),			//18
		new cy_skillCaptionItem(19	, 'Charging Time｜|,|蓄力時間：', '', ' secs.|,|秒'),			//19
		new cy_skillCaptionItem(20	, 'Hit Count｜|,|傷害次數：', '', ' times|,|次'),			//20
		new cy_skillCaptionItem(21	, 'Frequency｜|,|作用次數：', '', ' times|,|次'),			//21
		new cy_skillCaptionItem(22	, 'AOE Center｜|,|<br>範圍中心：', '', ''),		//22
		new cy_skillCaptionItem(23	, 'AOE Radius｜|,|影響半徑：', '', 'm'),			//23
		new cy_skillCaptionItem(24	, 'Duration｜|,|<br />持續時間：', '', ' secs.|,|秒'),		//24
		
		// ================================== [ 機率 ]
		new cy_skillCaptionItem(25	, 'After successful hit, there is |,|_@命中成功後，有', '', '% chance to make the enemy |,|%機率使敵人'),	//25
		new cy_skillCaptionItem(26	, '', '', '。'),	//異常狀態			//26
		
		new cy_skillCaptionItem(27	, '', '', ''),							//27, 額外說明
		new cy_skillCaptionItem(28	, '', '', ''), 							//28, 額外說明
		new cy_skillCaptionItem(29	, '', '', '')); 							//29, 額外說明
	
	
	/*=============================================================*/
	var cy_skillGain = function(tcaptionBranchConfirm, titemNoConfirm, taddValue, tmainWeaponConfirm, tsubWeaponConfirm, tbodyArmorConfirm){
		this.captionBranchConfirm = tcaptionBranchConfirm;  //String, 判定之Branch location in array
		this.itemNoConfirm = titemNoConfirm;				//String, 判定之Skill_ItemNo
		this.addValue = taddValue;             			  	//Number or String, 輸入SkillItem之值
		this.mainWeaponConfirm = tmainWeaponConfirm;		//String, 符合條件之WeaponType
		this.subWeaponConfirm = tsubWeaponConfirm;			//String, 符合條件之AuxType
		this.bodyArmorConfirm = tbodyArmorConfirm;			//String, 符合條件之BodyType
	}
	
	//Skill_Item_Gain_List.js
	
	function InputGainToSkill(SName, SBranch, SINo, InputValue, W_type, subWeaponConfirm, bodyArmorConfirm){
		for (let i=0; i<cy_skillSystem.skillTreeType.length; ++i)
		{
			for (let j=0; j<cy_skillSystem.skillTreeType[i].skillTree.length; ++j)
			{
				for (let k=0; k<cy_skillSystem.skillTreeType[i].skillTree[j].skill.length; ++k)
				{
					if ( cy_skillSystem.skillTreeType[i].skillTree[j].skill[k].skillName.includes(SName) )
					{
						cy_skillSystem.skillTreeType[i].skillTree[j].skill[k].equipGain.push(new cy_skillGain(SBranch, SINo, InputValue, W_type, subWeaponConfirm, bodyArmorConfirm));
					}
				}
			}
		}
	}
	
	/*=============================================================*/
	var cy_skill = function(tno, tskillName, tpreSkill, tskillType, baseAbilityStr, tSk_addDesc = ""){
		this.no = tno;     //Int
		this.showName = tskillName; //String
		this.preSkill = tpreSkill;
		this.level = 0;
		this.mainWeaponType  = [];   //Array of String<WeaponType>
		this.subWeaponType = [];   //Array of String<AuxiliaryWeaponType>
		this.bodyArmorType  = [];   //Array of String<BodyType>
		this.captionBranch  = ['技能效果'];   //Array of String<SkillBranch>
		this.equipGain = [];
		
		this.skillType = tskillType;
		//this.Sk_baseAbility = tSk_baseAbility;
		this.calcLevel = 0;
		
		Object.defineProperty(this, 'skillName', {
			get: function(){
				let _t = ( this.skillType == 'passive' ) ? '*' : '';
				return _t + '<a data-langtext="' + this.showName + '"></a>';		
			},
			set: function(value){
				console.log("warring: " + value);
			}
		});
		
		this.charaSkillAddition = [];
		this.charaSkillAddition_list = [];
		this.charaSkillAddition_armsConfirm = [];
		
		this.Sk_addDesc = tSk_addDesc;
		
		if ( baseAbilityStr == '' ) return;
		let _str = baseAbilityStr;
		
		let _list = _str.split(/\s+&\s+/);
		let _cnt = 0, _additionStr = [];
		for (let i=0; i<_list.length; ++i)
		{
			if ( !_list[i].match(/(.+)\[(.+)\]/) )
			{
				console.log(baseAbilityStr);
				return;
			}
			let t_ary = _list[i].match(/(.+)\[(.+)\]/);
			this.charaSkillAddition_armsConfirm.push(t_ary[1]);
			this.charaSkillAddition_list.push([]);
			_additionStr = t_ary[2].split(/\s*,\s*(?!\s*[a-zA-Z0-9_]+\s*\))/);
			
			for (let i=0; i<_additionStr.length; ++i)
			{
				if (_additionStr[i].match(/(.+)#.+%/) )
				{
					let isHave = false;
					for (let j=0; j<this.charaSkillAddition.length; ++j)
					{
						if ( this.charaSkillAddition[j].base.baseName == RegExp.$1 && this.charaSkillAddition[j].abilityType == 0 )
						{
							isHave = true;
						}
					}
					if ( isHave ) continue;
					
					this.charaSkillAddition.push(new cy_ability());
					//console.log(RegExp.$1);
					this.charaSkillAddition[_cnt].setInit(RegExp.$1, 0);
					++_cnt;
					continue;
				}
				if (_additionStr[i].match(/(.+)#.+/) )
				{
					let isHave = false;
					for (let j=0; j<this.charaSkillAddition.length; ++j)
					{
						//console.log(`${this.charaSkillAddition[j].base.baseName}, ${RegExp.$1}, ${this.charaSkillAddition[j].abilityType}`);
						if ( this.charaSkillAddition[j].base.baseName == RegExp.$1 && this.charaSkillAddition[j].abilityType == 1 )
						{
							isHave = true;
						}
					}
					if ( isHave ) continue;
					
					this.charaSkillAddition.push(new cy_ability());
					//console.log(RegExp.$1);
					this.charaSkillAddition[_cnt].setInit(RegExp.$1, 1);
					++_cnt;
					continue;
				}
				console.log('error: ' + baseAbilityStr);
				console.log('error: '+ i + ' : ' + _additionStr[i]);
				return;
			}
		}
		//console.log(this.charaSkillAddition);
		for (let i=0; i<this.charaSkillAddition_armsConfirm.length; ++i)
		{
			for (let j=0; j<this.charaSkillAddition.length; ++j)
			{
				this.charaSkillAddition_list[i].push("0");
			}
			
			let t_ary = _list[i].match(/(.+)\[(.+)\]/);
			_additionStr = t_ary[2].split(/\s*,\s*(?!\s*[a-zA-Z0-9_]+\s*\))/);
			
			for (let j=0; j<_additionStr.length; ++j)
			{
				if (_additionStr[j].match(/(.+)#([^%]+)%/) )
				{
					let isHave = false;
					for (let k=0; k<this.charaSkillAddition.length; ++k)
					{
						if ( this.charaSkillAddition[k].base.baseName == RegExp.$1 && this.charaSkillAddition[k].abilityType == 0 ) this.charaSkillAddition_list[i][k] = RegExp.$2;
					}
					continue;
				}
				if (_additionStr[j].match(/(.+)#([^%]+)/) )
				{
					let isHave = false;
					for (let k=0; k<this.charaSkillAddition.length; ++k)
					{
						if ( this.charaSkillAddition[k].base.baseName == RegExp.$1 && this.charaSkillAddition[k].abilityType == 1 ) this.charaSkillAddition_list[i][k] = RegExp.$2;
					}
					continue;
				}
				console.log('error');
				return;
			}
		}
	}
	
	cy_skill.prototype.armsConfirm = function(T_W, T_Au, T_B){
		if (T_W != -1)
		{
			for (let i=0;i<this.mainWeaponType.length;++i)
			{
				if (T_W == this.mainWeaponType[i] || this.mainWeaponType[i] == 10) return true;
			}
		}
		if (T_Au != -1)
		{
			for (let i=0;i<this.subWeaponType.length;++i)
			{
				if (T_Au == this.subWeaponType[i] || this.subWeaponType[i] == 6) return true;
			}
		}
		if (T_B != -1)
		{
			for (let i=0; i<this.bodyArmorType.length; ++i)
			{
				if (T_B == this.bodyArmorType[i]) return true;
			}
		}
		return false;
	}
	
	cy_skill.prototype.resetSkillAddition = function(W_type = '', S_type = '', B_type = ''){
		W_type = W_type || cy_character.charaEquipments[0].type;
		S_type = S_type || cy_character.charaEquipments[1].type;
		B_type = B_type || cy_character.charaEquipments[2].type;
		
		for (let i=0; i<this.charaSkillAddition_armsConfirm.length; ++i)
		{
			let isConfirm = false;
			let t_ary = this.charaSkillAddition_armsConfirm[i].split(',');
			for (let j=0; j<t_ary.length; ++j)
			{
				let armsConfirm_ary = t_ary[j].split('_');
				
				switch ( armsConfirm_ary[0] )
				{
					case "M":	//main-weapon
						if ( W_type == cy_character.weap_map[armsConfirm_ary[1]] ) isConfirm = true;
						break;
					case "S":	//sub-weapon
						if ( S_type == cy_character.au_map[armsConfirm_ary[1]] ) isConfirm = true;
						break;
					case 'b':
						if ( B_type == cy_character.body_map[armsConfirm_ary[1]] ) isConfirm = true;
						break;
					case "B":	//main-weapon or sub-weapon
						if ( W_type == cy_character.weap_map[armsConfirm_ary[1]] || S_type == cy_character.au_map[armsConfirm_ary[1]] ) isConfirm = true;
						break;
					case "D":	//main-weapon and sub-weapon
						let dual_ary = armsConfirm_ary[1].split('+');
						if ( W_type == cy_character.weap_map[dual_ary[0]] && S_type == cy_character.au_map[dual_ary[1]] ) isConfirm = true;
						break;
					case "all":	//all
						isConfirm = true;
						break;
					case "noSub":	//no have sub-weapon
						if ( armsConfirm_ary[1] )
						{
							if ( W_type == cy_character.weap_map[armsConfirm_ary[1]] && S_type == 6 ) isConfirm = true;
							break;
						}
						if ( S_type == 6 ) isConfirm = true;
						break;
				}
				
				
				for (let j=0; j<this.charaSkillAddition_list[i].length; ++j)
				{
					let SLv = this.calcLevel;
					let CLv = cy_character.characterLv;
					if ( !isConfirm || this.calcLevel == 0)
					{
						this.charaSkillAddition[j].setValue(0);
						continue;
					}
					
					this.charaSkillAddition[j].setValue(eval(this.charaSkillAddition_list[i][j]));
				}
				if ( isConfirm ) break;
			}
			if ( isConfirm ) break;
		}
	}
	
	cy_skill.prototype.getShowDetail = function(){
		if ( this.skillType == 'passive' )
		{
			let _skill = this;
			let _text = '';
			let _obj = _skill.charaSkillAddition;
			for (let i=0; i<_obj.length; ++i)
			{
				if ( _obj[i].base != '' )
				{
					let _splitUnit = (i != 0) ? '｜' : '';
					if ( _obj[i].base.baseValue == 'none' )
					{
						_text += `${_splitUnit}<a data-langtext="${_obj[i].base.statName}"></a>`;
						continue;
					}
					let _unit = ( _obj[i].abilityType == 0 ) ? '%' : _obj[i].base.unit;
					let _sign = ( _obj[i].value >= 0 ) ? '+' : '';
					_text += `${_splitUnit}<a data-langtext="${_obj[i].base.statName}"></a>${_sign}${_obj[i].value}<a data-langtext="${_unit}"></a>`;
				}
			}
			if ( _skill.Sk_addDesc != '' )
			{
				let _splitUnit = (_obj.length != 0) ? '｜' : '';
				let SLv = _skill.calcLevel;
				let _ary = _skill.Sk_addDesc.split(/\s+&\s+/);
				let W_type = cy_character.charaEquipments[0].type;
				let S_type = cy_character.charaEquipments[1].type;
				let B_type = cy_character.charaEquipments[2].type;
				for (let l=0; l<_ary.length; ++l)
				{
					if ( _ary[l].match(/(.+)\[(.+)\]/) )
					{
						let armsConfirm_ary = RegExp.$1.split('_');
						let isConfirm = false;
						switch ( armsConfirm_ary[0] )
						{
							case "M":	//main-weapon
								if ( W_type == cy_character.weap_map[armsConfirm_ary[1]] ) isConfirm = true;
								break;
							case "S":	//sub-weapon
								if ( S_type == cy_character.au_map[armsConfirm_ary[1]] ) isConfirm = true;
								break;
							case 'b':
								if ( B_type == cy_character.body_map[armsConfirm_ary[1]] ) isConfirm = true;
								break;
							case "B":	//main-weapon or sub-weapon
								if ( W_type == cy_character.weap_map[armsConfirm_ary[1]] || S_type == cy_character.au_map[armsConfirm_ary[1]] ) isConfirm = true;
								break;
							case "D":	//main-weapon and sub-weapon
								let dual_ary = armsConfirm_ary[1].split('+');
								if ( W_type == cy_character.weap_map[dual_ary[0]] && S_type == cy_character.au_map[dual_ary[1]] ) isConfirm = true;
								break;
							case "all":	//all
								isConfirm = true;
								break;
							case "noSub":	//no have sub-weapon
							if ( armsConfirm_ary[1] )
							{
								if ( W_type == cy_character.weap_map[armsConfirm_ary[1]] && S_type == 6 ) isConfirm = true;
								break;
							}
							if ( S_type == 6 ) isConfirm = true;
							break;
						}
						if ( isConfirm )
						{
							_text += _splitUnit + eval("`" + RegExp.$2 + "`");
							break;
						}
					}
					else { console.log('error');console.log( _skill.Sk_addDesc); }
				}
			}
			return _text;
		}
	}	
	/* =============================================================*/
	var cy_skillTree = function(tno, tname){
		this.no = tno;     	//Int, NO of SkillTree, For Array
		this.showName = tname; 	//String
		this.skill = [];     	//Array of Object<Skill>
		this.selected = false;
		Object.defineProperty(this, 'name', {
			get: function(){
				return '<a data-langtext="' + this.showName + '"></a>';		
			},
			set: function(value){
				console.log("warring: " + value);
			}
		});
	}
	cy_skillTree.prototype.getSkillIndexByNo = function(no){
		for (let i=0;i <this.skill.length; ++i)
		{
			if (no == this.skill[i].no) return i;
		}
	}
	
	var cy_skillTreeType = function(tname){
		this.showName = tname;
		this.skillTree = [];	//Array of Object<SkillTree>
		Object.defineProperty(this, 'name', {
			get: function(){
				return '<a data-langtext="' + this.showName + '"></a>';		
			},
			set: function(value){
				console.log("warring: " + value);
			}
		});
	};
	
	cy_skillSystem.skillTreeType.push(
		new cy_skillTreeType('Weapon Skills|,|武器技能|,|武器スキル'), 
		new cy_skillTreeType('Buff Skills|,|強化技能|,|強化スキル'), 
		new cy_skillTreeType('Assist Skills|,|輔助技能|,|補助スキル'),
		new cy_skillTreeType('Production Skills|,|生產技能|,|生活関連スキル'),
		new cy_skillTreeType('Skill-Tree Books|,|技能書|,|'));
	
	
	//SkillTreeType_List_0~2.js
	
	/*=============================================================*/
	function input_value_bySelection(gear, ArmsName, value){
		/* let WeapArms_map = {'1hSword': 0, '2hSword': 1, 'Bow': 2, 'Bowgun': 3, 'Staff': 4, 'MagicDevice': 5, 'Knuckles': 6, 'Halberd': 7, 'DualSword': 8, 'Katana': 9, 'Other': 10};
		let AuArms_map = {'Dagger': 0, 'Shield': 1, 'Arrow': 2, 'MagicDevice': 3, 'Knuckles': 4, 'Katana': 5, 'Other': 6}; */
		if ( gear == 'Weap_Au' )
		{
			gearAry = [WeapType_Cur, AuType_Cur];
			T_mapAry = [
				{'1hSword': 0, '2hSword': 1, 'Bow': 2, 'Bowgun': 3, 'Staff': 4, 'MagicDevice': 5, 'Knuckles': 6, 'Halberd': 7, 'DualSword': 8, 'Katana': 9, 'Other': 10},
				{'Dagger': 0, 'Shield': 1, 'Arrow': 2, 'MagicDevice': 3, 'Knuckles': 4, 'Katana': 5, 'Other': 6}
			];
			if ( gearAry[0] == -1 && gearAry[1] == -1)
			{
				return value[value.length-1];
			}
			for (let T=0; T<gearAry.length; ++T)
			{
				if ( gearAry[T] != -1 )
				{
					for (let i=0; i<ArmsName.length; ++i)
					{
						if (gearAry[T] == T_mapAry[T][ArmsName[i]]) return value[i];
					}
				}
			}
			return value[value.length-1];
		}
		
		if ( gear == 'Weap' )
		{
			gear = WeapType_Cur;
			T_map = {'1hSword': 0, '2hSword': 1, 'Bow': 2, 'Bowgun': 3, 'Staff': 4, 'MagicDevice': 5, 'Knuckles': 6, 'Halberd': 7, 'DualSword': 8, 'Katana': 9, 'Other': 10};
		}
		if ( gear == 'Au' )
		{
			gear = AuType_Cur;
			T_map = {'Dagger': 0, 'Shield': 1, 'Arrow': 2, 'MagicDevice': 3, 'Knuckles': 4, 'Katana': 5, 'Other': 6};
		}
		if ( gear != -1 )
		{
			for (let i=0; i<ArmsName.length; ++i)
			{
				if (gear == T_map[ArmsName[i]])
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
			Tstring = replaceAll(Tstring, '_&amp;' + i + '_', '<span onclick="BranchText_onclick(this.innerHTML)">' + BranchAry[i] + '</span>');
			Tstring = replaceAll(Tstring, '_&;' + i + '_', '<span onclick="BranchText_onclick(this.innerHTML)">' + BranchAry[i] + '</span>');
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
	
	
	document.getElementById('ShowCaption_Body_1_openBtn').addEventListener('click', function(){
		let temp = this;
		let _modeno = parseInt(temp.getAttribute('data-modeno'));
		
		switch (_modeno)
		{
			case 0:
				temp.innerHTML = '<a data-langtext="Hid Skill Information|,|&gt;&nbsp;隱藏遊戲內技能說明"></a>';
				resetInnerLang(temp);
				document.getElementById('ShowCaption_Body_1').style.display = 'inline-block';
				temp.setAttribute('data-modeno', "1");
				break;
			case 1:
				temp.innerHTML = '<a data-langtext="Show Skill Information|,|&gt;&nbsp;顯示遊戲內技能說明"></a>';
				resetInnerLang(temp);
				document.getElementById('ShowCaption_Body_1').style.display = 'none';
				temp.setAttribute('data-modeno', "0");
				break;
		}
	});
		