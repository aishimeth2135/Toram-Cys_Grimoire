		
	var cy_character_base = function() {
		this.characterLv = 1;
		this.charaEquipments = [];
		
		this.statList = [];
		this.setInit_statList();
		
		this.statPoint = [this.statList[0], this.statList[1], this.statList[2], this.statList[3], this.statList[4], {name: 'none', base: this.statList[5]}];
	
		this.passiveSkill_lv = [];
		
		this.equipTypeStats = [];
		for (let i=0; i<3; ++i)
		{
			this.equipTypeStats.push(new cy_ability());
		}
		//console.log(this.passiveSkill_list.length);
	}
	
	cy_character_base.prototype.showPassiveSkillDetail = false;
	
	cy_character_base.prototype.weap_map = {'1hSword': 0, '2hSword': 1, 'Bow': 2, 'Bowgun': 3, 'Staff': 4, 'MagicDevice': 5, 'Knuckles': 6, 'Halberd': 7, 'Katana': 8, 'none': 9};
	cy_character_base.prototype.au_map = {'Dagger': 0, 'Shield': 1, 'Arrow': 2, 'MagicDevice': 3, 'Knuckles': 4, 'Katana': 5, 'none': 6, '1hSword': 7};
	cy_character_base.prototype.body_map = {'Normal': 0, 'Dodge': 1, 'Defense': 2, 'none': 3};
	
	cy_character_base.prototype.allWeapType = [];
	cy_character_base.prototype.allAuType = [];
	cy_character_base.prototype.allBodyType = [];
	
	cy_character_base.prototype.statPoint_name = ['STR', 'DEX', 'INT', 'AGI', 'VIT', ['LUK', 'MEN', 'CRT', 'TEC', 'none']];
	
	cy_character_base.prototype.passiveSkill_list = [];
	
	cy_character_base.prototype.getStatLoc = function(t_baseName){
		let T_obj = this.statList;
		for (let i=0; i<T_obj.length; ++i)
		{
			if (T_obj[i].baseName == t_baseName) return i;
		}
		showWarningMsg('Error');
		return -1;
	}
	cy_character_base.prototype.getStatPointer = function(statName){
		let T = this.getStatLoc(statName);
		if ( T == -1 ) return '';
		return this.statList[T];
	}
	
	cy_character_base.prototype.general_skillLvCode = function(){
		let T_code = '';
		for (let i=0; i<all_skilltree_type.length; ++i)
		{
			for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
			{
				let _isEmpty = true;
				for (let k=0; k<all_skilltree_type[i].STt_skilltree[j].ST_skill.length; ++k)
				{
					if (all_skilltree_type[i].STt_skilltree[j].ST_skill[k].Sk_calcLv != 0)
					{
						_isEmpty = false;
						break;
					}
				}
				for (let k=0; k<all_skilltree_type[i].STt_skilltree[j].ST_skill.length; ++k)
				{
					if ( _isEmpty )
					{
						T_code += "#";
						break;
					}
					switch (all_skilltree_type[i].STt_skilltree[j].ST_skill[k].Sk_calcLv )
					{
						case 0: T_code += "C"; break;
						case 1: T_code += "Y"; break;
						case 2: T_code += "S"; break;
						case 3: T_code += "G"; break;
						case 4: T_code += "R"; break;
						case 5: T_code += "I"; break;
						case 6: T_code += "M"; break;
						case 7: T_code += "O"; break;
						case 8: T_code += "A"; break;
						case 9: T_code += "R"; break;
						case 10: T_code += "E"; break;
					}
				}
			}
		}
		return T_code;
	}
	
	cy_character_base.prototype.loading_skillCode = function(loadingCode){
		try {
			if (loadingCode == '') return;
			//初始化
			
			let codeAry = [];
			let Tstr = loadingCode;
			
			let strCnt = 0;
			for (let i=0; i<all_skilltree_type.length; ++i)
			{
				codeAry.push([]);
				for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
				{
					codeAry[i].push([]);
					for (let k=0,T_length=all_skilltree_type[i].STt_skilltree[j].ST_skill.length; k<T_length; ++k)
					{
						let T = 0;
						switch ( Tstr.charAt(strCnt) )
						{
							case "C":
							case "#": T = 0; break;
							case "Y": T = 1; break;
							case "S": T = 2; break;
							case "G": T = 3; break;
							case "R": T = 4; break;
							case "I": T = 5; break;
							case "M": T = 6; break;
							case "O": T = 7; break;
							case "A": T = 8; break;
							case "R": T = 9; break;
							case "E": T = 10; break;
							default:
								alert('Error: Unable to load the code.');
								return;
						}
						codeAry[i][j].push(T);
						if (Tstr.charAt(strCnt) != "#" || k == T_length - 1)
						{
							++strCnt;
						}
					}
				}
			}
			
			for (let i=0; i<all_skilltree_type.length; ++i)
			{
				for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
				{
					for (let k=0; k<all_skilltree_type[i].STt_skilltree[j].ST_skill.length; ++k)
					{
						all_skilltree_type[i].STt_skilltree[j].ST_skill[k].Sk_calcLv = codeAry[i][j][k];
					}
				}
			}
			updateAllPassiveSkillAddition();
		}
		catch {
			showWarningMsg('Incorrect Code. Please try again.');
		}
	}
	
	cy_character_base.prototype.general_saveCode = function(){
		let _code = '';
		_code += '[' + this.characterLv + ',';
		
		_code += '['
		for (let i=0; i<this.charaEquipments.length; ++i)
		{
			_code += this.charaEquipments[i].general_saveCode();
			_code += (i != this.charaEquipments.length - 1) ? ',' : '';
		}
		_code += '],';
		
		_code += '[';
		for (let i=0; i<this.statPoint.length; ++i)
		{
			if ( !this.statPoint[i].baseValue )
			{
				_code += `['${this.statPoint[i].name}',${this.statPoint[i].base.baseValue}]`;
			}
			else {
				_code += this.statPoint[i].baseValue;
			}
			_code += (i != this.statPoint.length - 1) ? ',' : '';
		}
		_code += '],';
		
		_code += `'${this.general_skillLvCode()}'`;
		_code += ']';
		//console.log(_code);
		return _code;
	}
	cy_character_base.prototype.loading_saveCode = function(saveCode){
		try {
			let codeAry = eval(saveCode);
			this.characterLv = codeAry[0];
			for (let i=0; i<codeAry[1].length; ++i)
			{
				this.charaEquipments[i].loading_saveCode('', codeAry[1][i]);
			}
			let _listCnt = 0;
			for (let i=0; i<codeAry[2].length; ++i)
			{
				let t5_ary = codeAry[2];
				let t_statPointTypeName = '';
				if ( typeof t5_ary[i] == 'object' )
				{	
					let t_loc;
					switch (_listCnt)
					{
						case 0: t_loc = 5; break;
					}
					//console.log(t5_ary[i][0]);
					this.statPoint[t_loc].name = t5_ary[i][0];
					this.statPoint[t_loc].base.showName = t5_ary[i][0];
					this.statPoint[t_loc].base.statName = t5_ary[i][0];
					this.statPoint[t_loc].base.alwaysShow = ( this.statPoint[t_loc].base.showName == 'none' ) ? 'hid' : true;
					this.statPoint[t_loc].base.baseValue = t5_ary[i][1];
					++_listCnt;
					continue;
				}
				this.statPoint[i].baseValue = t5_ary[i];
			}
			if (codeAry[3]) this.loading_skillCode(codeAry[3]);
		}
		catch {
			showWarningMsg('Incorrect Code. Please try again.');
			return;
		}
		showWarningMsg('Loading Success.');
	}
	
	var cy_ability = function(){
		this.base = '';
		this.value = 0;
		this.abilityType = -1;	//-1:default, 0: rate, 1:constant, 2:extraRate
		this.isAble = true;
	}
	
	cy_ability.prototype.setInit = function(t_baseName, t_abilityType, t_isAble = true, t_value = 0){
		this.remove();
		
		this.isAble = t_isAble;
		
		this.base = cy_character.getStatPointer(t_baseName);
		this.abilityType = t_abilityType;
		this.addValue(t_value);
	}
	
	cy_ability.prototype.addValue = function(add){
		if (this.base == '' || this.abilityType == -1 ) return; 
		//console.log(this.base);
		
		this.value += add;
		
		if ( !this.isAble ) return;
		switch (this.abilityType)
		{
			case 0: this.base.rate += add; break;
			case 1: this.base.constant += add; break;
			case 2: this.base.extraRate += add; break;
			default: console.log('error: cy_stat : addValue : false abilityType : ' + this.base.baseName); return;
		}
		if ( isNaN(this.base.rate) || isNaN(this.base.constant) || isNaN(this.base.extraRate) )
		{
			console.log('error');
			console.log(this);
		}
	}
	
	cy_ability.prototype.setValue = function(set){
		if (this.base == '' || this.abilityType == -1 ) return; 
		
		this.removeValue();
		this.addValue(set);
	}
	
	cy_ability.prototype.removeValue = function() {
		if (this.base == '' || this.abilityType == -1 ) return; 
		
		let _value = this.value;
		this.value = 0;
		
		if ( !this.isAble ) return;
		switch (this.abilityType)
		{
			case 0: this.base.rate -= _value; break;
			case 1: this.base.constant -= _value; break;
			case 2: this.base.extraRate -= _value; break;
			default: console.log('error: cy_stat : removeValue : false abilityType : ' + this.base.baseName);
		}
		
	}
	cy_ability.prototype.remove = function() {
		if (this.base == '' || this.abilityType == -1 ) return; 
		this.removeValue();
		this.base = '';
		this.abilityType = -1;
	}
	
	cy_ability.prototype.close = function() {
		if (this.base == '' || this.abilityType == -1 ) return;
		if ( !this.isAble ) return;
		switch (this.abilityType)
		{
			case 0: this.base.rate -= this.value; break;
			case 1: this.base.constant -= this.value; break;
			case 2: this.base.extraRate -= this.value; break;
			default: console.log('error: ' + this.base.baseName);
		}
		this.isAble = false;
	}
	
	cy_ability.prototype.open = function() {
		if (this.base == '' || this.abilityType == -1 ) return;
		if ( this.isAble ) return;
		switch (this.abilityType)
		{
			case 0: this.base.rate += this.value; break;
			case 1: this.base.constant += this.value; break;
			case 2: this.base.extraRate += this.value; break;
			default: console.log('error: ' + this.base.baseName);
		}
		this.isAble = true;
	}
	
	var cy_itemAbilitys = function(){
		this.ability = [];
		for (let i=0; i<10; ++i)			//能力數量上限: 10
		{
			this.ability.push(new cy_ability());
		}
	}
	cy_itemAbilitys.prototype.close = function(){
		for (let i=0; i<this.ability.length; ++i)
		{
			this.ability[i].close();
		}
	}
	cy_itemAbilitys.prototype.open = function(){
		for (let i=0; i<this.ability.length; ++i)
		{
			this.ability[i].open();
		}
	}
	cy_itemAbilitys.prototype.isEmpty = function(){
		for (let i=0; i<this.ability.length; ++i)
		{
			if (this.ability[i].base != '') return false;
		}
		return true;
	}
	
	var cy_equipmentField = function(t_no, tfieldName, default_type, haveXtal, tisAble){
		this.no = t_no;
		this.fieldName = tfieldName;
		this.name = '';
		this.type = default_type;
		this.defaultType = default_type;
		this.fieldValue = 0;
		this.stability = 0;
		this.refining = 0;
		this.fieldAbilitys = new cy_itemAbilitys();
		this.xtals = [];
		this.xtalNames = ['', ''];
		if ( haveXtal )
		{
			for (let i=0; i<2; ++i)			//兩顆
			{
				this.xtals.push(new cy_itemAbilitys());
			}
		}
		
		this.isAble = tisAble;
	}
	cy_equipmentField.prototype.close = function(){
		this.isAble = false;
		this.fieldAbilitys.close();
		for (let i=0; i<this.xtals.length; ++i)
		{
			this.xtals[i].close();
		}
	}
	cy_equipmentField.prototype.open = function(){
		this.isAble = true;
		this.fieldAbilitys.open();
		for (let i=0; i<this.xtals.length; ++i)
		{
			this.xtals[i].open();
		}
	}
	
	cy_equipmentField.prototype.reset = function(controlStr){
		/* all:全部, base:素質, ability: 能力, xtal1: 鍛晶1, xtal2: 鍛晶2*/
		try {
			let _ary = controlStr.split(/\s*,\s&/);
			for (let i=0; i<_ary.length; ++i)
			{
				switch (_ary[i])
				{
					case 'all':
					case 'base':
						this.name = '';
						this.type = this.defaultType;
						this.fieldValue = 0;
						this.stability = 0;
						this.refining = 0;
						if (_ary != 'all') break;
					case 'ability':
						for (let i=0; i<this.fieldAbilitys.ability.length; ++i)
						{
							this.fieldAbilitys.ability[i].remove();
						}
						if (_ary != 'all') break;
					case 'xtal1':
						if (this.xtals.length != 0)
						{
							for (let i=0; i<this.xtals[0].ability.length; ++i)
							{
								this.xtals[0].ability[i].remove();
							}
							this.xtalNames[0] = '';
						}
						if (_ary != 'all') break;
					case 'xtal2':
						if (this.xtals.length != 0)
						{
							for (let i=0; i<this.xtals[1].ability.length; ++i)
							{
								this.xtals[1].ability[i].remove();
							}
							this.xtalNames[1] = '';
						}
						if (_ary != 'all') break;
				}
			}
		} catch {
			showWarningMsg('<Reser Equipment Field> Error.');
		}
	}
	
	cy_equipmentField.prototype.general_saveCode = function(){
		let T1 = this;
		let _code = '[';
		
		_code += `'${T1.name}',`;
		_code += T1.type + ',';
		_code += T1.fieldValue + ',';
		_code += T1.stability + ',';
		_code += T1.refining + ',';
		
		//========================================
		_code += '[';
		for (let j=0; j<T1.fieldAbilitys.ability.length; ++j)
		{
			let T2 = T1.fieldAbilitys.ability[j];
			if (T2.base == '') continue;
			_code += '[';
			
			_code += `'${T2.base.baseName}',`;
			_code += T2.value + ',';
			_code += T2.abilityType;
			
			_code += '],';
		}
		if (_code.charAt(_code.length-1) == ',') _code = _code.substr(0, _code.length-1);
		_code += '],';
		
		//========================================
		_code += '[';
		for (let j=0; j<T1.xtals.length; ++j)
		{
			_code += '[';
			for (let k=0; k<T1.xtals[j].ability.length; ++k)
			{
				let T3 = T1.xtals[j].ability[k];
				if (T3.base == '') continue;
				_code += '[';
				
				_code += `'${T3.base.baseName}',`;
				_code += T3.value + ',';
				_code += T3.abilityType;
				
				_code += '],';
			}
			if (_code.charAt(_code.length-1) == ',') _code = _code.substr(0, _code.length-1);
			_code += (j != T1.xtals.length - 1) ? '],' : ']';
		}
		_code += '],';
		//========================================
		_code += '[';
		for (let j=0; j<T1.xtalNames.length; ++j)
		{
			_code += `'${T1.xtalNames[j]}'`;
			_code += (j != T1.xtalNames.length - 1) ? ',' : '';
		}
		_code += ']';
		
		//========================================
		_code +=  ']';
		
		return _code;
	}
	
	cy_equipmentField.prototype.loading_saveCode = function(saveCode = '', codeAry = []){
		try {
			if ( saveCode == '' && codeAry == []) throw "No code or obj input.";
			let T1 = this;
			let t1_ary = (saveCode != '') ? eval(saveCode) : codeAry;
			this.reset('all');
			for (let j=0; j<t1_ary.length; ++j)
			{
				switch (j)
				{
					case 0: T1.name = t1_ary[j]; break;
					case 1: T1.type = t1_ary[j]; break;
					case 2: T1.fieldValue = t1_ary[j]; break;
					case 3: T1.stability = t1_ary[j]; break;
					case 4: T1.refining = t1_ary[j]; break;
					case 5:
						for (let k=0; k<t1_ary[j].length; ++k)
						{
							let T2 = T1.fieldAbilitys.ability[k];
							let t2_ary = t1_ary[j][k];
							let _isAble = true;
							if ( ( T1.fieldName == 'Main_Weapon' && T1.type == 9 ) || ( T1.fieldName == 'Sub_Weapon' && T1.type == 6 ) || ( T1.fieldName == 'Body_Armor' && T1.type == 3 ) ) _isAble = false;
							T2.setInit(t2_ary[0], t2_ary[2], _isAble, t2_ary[1]);
						}
						break;
					case 6:
						for (let k=0; k<t1_ary[j].length; ++k)
						{
							for (let l=0; l<t1_ary[j][k].length; ++l)
							{
								let T3 = T1.xtals[k].ability[l];
								let t3_ary = t1_ary[j][k][l];
								let _isAble = true;
								if ( ( T1.fieldName == 'Main_Weapon' && T1.type == 9 ) || ( T1.fieldName == 'Sub_Weapon' == 1 && T1.type == 6 ) || ( T1.fieldName == 'Body_Armor' && T1.type == 3 ) ) _isAble = false;
								T3.setInit(t3_ary[0], t3_ary[2], _isAble, t3_ary[1]);
							}
						}
						break;
					case 7:
						for (let k=0; k<t1_ary[j].length; ++k)
						{
							let t4_ary = t1_ary[j];
							T1.xtalNames[k] = t4_ary[k];
						}
						break;
				}
			}
			this.cy_refresh();
		} catch (e) {
			showWarningMsg('[Equipment Field] Incorrect Code. Please try again.');
			console.log(e);
		}
	}
	
	cy_equipmentField.prototype.cy_refresh = function (){
		charaSimu_selEquipType([this.no, this.type], true);//重置open
	}
	
	var cy_statBase = function(tshowName, tstatName, tbaseName, thaveRate, talwaysShow, tcanSelect, tbaseValue, tunit = '', tmaxValue = '', tminValue = '', textraRate = 1, tdigitNum = 0){
		//this.no = cy_character.statList.length;
		this.baseName = tbaseName;
		this.showName = tshowName;
		this.statName = tstatName;
		this.haveRate = thaveRate;
		this.alwaysShow = talwaysShow;
		this.canSelect = tcanSelect;
		this.textTitle = '';
		
		this.baseValue = tbaseValue;
		this.rate = 0;
		this.constant = 0;
		
		this.unit = tunit;
		
		this.maxValue = tmaxValue;
		this.minValue = tminValue;
		this.extraRate = textraRate;
		this.digitNum = tdigitNum;
		
		this.formula = 'this.baseValue';
		this.formula_add = {addC: 0, addR: 0};
		this.preValue = 0;
	}
	
	cy_statBase.prototype.calcValue = function(inputFormula = ''){
		function getV(name) {
			let T;
			switch (name)
			{
				case 'CLv': return cy_character.characterLv;
				case 'Cstr': return cy_character.statPoint[0].baseValue;
				case 'Cdex': return cy_character.statPoint[1].baseValue;
				case 'Cint': return cy_character.statPoint[2].baseValue;
				case 'Cagi': return cy_character.statPoint[3].baseValue;
				case 'Cvit': return cy_character.statPoint[4].baseValue;
				
				case 'Ctec': case 'Cluk': case 'Cmen': case 'Ccrt':
					return ( cy_character.statPoint[5].name.toLowerCase() == name.replace('C', '') ) ? cy_character.statPoint[5].base.baseValue : 0;
					
				case '0_value': case '1_value': case '2_value': case '3_value': case '4_value':
					T = parseInt(name.charAt(0));
					return ( cy_character.charaEquipments[T].isAble || (T == 1 && cy_character.charaEquipments[1].type == 7) ) ? cy_character.charaEquipments[T].fieldValue : 0;
				case '0_refining': case '1_refining': case '2_refining': case '3_refining':
					T = parseInt(name.charAt(0));
					return ( cy_character.charaEquipments[T].isAble || (T == 1 && cy_character.charaEquipments[1].type == 7) ) ? cy_character.charaEquipments[T].refining : 0;
				case '0_stability': case '1_stability':
					T = parseInt(name.charAt(0));
					return ( cy_character.charaEquipments[T].isAble || (T == 1 && cy_character.charaEquipments[1].type == 7) ) ? cy_character.charaEquipments[T].stability : 0;
				case '0_type': case '1_type': case '2_type':
					T = parseInt(name.charAt(0));
					return cy_character.charaEquipments[T].type;
			}
			
			if ( name.includes('#') )
			{
				let _ary = name.split('#');
				for (let i=0; i<cy_character.statList.length; ++i)
				{
					if ( cy_character.statList[i].baseName != _ary[1] ) continue;
					switch ( _ary[0] )
					{
						case 'R': return cy_character.statList[i].rate;
						case 'C': return cy_character.statList[i].constant;
						case 'E': return cy_character.statList[i].extraRate;
						default: console.log('error');
					}
				}
			}
			
			for (let i=0; i<cy_character.statList.length; ++i)
			{
				if ( cy_character.statList[i].baseName == name ) return cy_character.statList[i].calcValue();
			}
			return 0;
		}
		
		if ( this.baseValue == 'none' ) return this.constant;
		
		let B = 0;
		let C = (this.formula_add.addC == 0) ? this.constant : this.constant + eval(this.formula_add.addC);
		let R = (this.formula_add.addR == 0) ? (100 + this.rate)/100 : (100 + this.rate + eval(this.formula_add.addR)/100);
		let E = this.extraRate;	
		
		let ans = 0;
		
		if ( Array.isArray(this.formula) )
		{
			//console.log(this.baseName);
			B = eval(this.formula[1][cy_character.charaEquipments[this.formula[0]].type]);
			ans = (B*R + C)*E;
			//if ( this.baseName == 'au_atk') debugger;
		}
		else {
			B = eval(this.formula);
			ans = (B*R + C)*E;
		}
		
		if ( inputFormula != '' )
		{
			ans = eval(inputFormula);
		}
		
		ans = (this.digitNum == 0) ? parseInt(ans) : ans.toFixed(this.digitNum);
		if ( inputFormula == '' && !document.getElementById('charaSimu_closeAbilityValueMaxMin').checked )
		{
			if ( this.minValue != '' && ans < this.minValue ) ans = this.minValue;
			if ( this.maxValue != '' && ans > this.maxValue ) ans = this.maxValue;
		}
		//if (this.baseName == 'weaponatk') debugger;
		return ans;
	}
	cy_statBase.prototype.have_signStatName = function(){
		return this.statName.match(/\[.+\<\|\>.+\]/) ? true : false;
	}
	cy_statBase.prototype.get_signStatName = function(noSign = false){
		if ( !this.have_signStatName() ) return this.statName;
		let _ary = this.statName.split('|,|');
		let _text = '';
		for (let i=0; i<_ary.length; ++i)
		{
			if ( !_ary[i].match(/\[([^\[]+)\<\|\>([^\]]+)\]/) ) continue;
			_text += (!noSign) ? (_ary[i].replace(/\[[^\[]+\<\|\>[^\]]+\]/, (this.calcValue() >= 0) ? RegExp.$1 : RegExp.$2)) : (_ary[i].replace(/\[([^\[]+)\<\|\>([^\]]+)\]/, ''));
			_text += (i != _ary.length-1) ? '|,|' : '';
		}
		return _text;
	}
	
	var cy_defaultEquip = function(tsel_fieldName, ttitle, tcode, tprovider = 'someone'){
		this.sel_fieldName = tsel_fieldName;
		this.title = ttitle;
		this.code = tcode;
		this.provider = tprovider;
	}
	//cy_character_base.prototype.defaultEquip_list = [];