		
	var cy_character_base = function() {
		this.characterLv = 1;
		this.charaEquipments = [];
		this.statPoint = [1, 1, 1, 1, 1, {name: 'none', value: 1}];
		
		this.statList = [];
		this.setInit_statList();
	}
	
	cy_character_base.prototype.weap_map = {'1hSword': 0, '2hSword': 1, 'Bow': 2, 'Bowgun': 3, 'Staff': 4, 'MagicDevice': 5, 'Knuckles': 6, 'Halberd': 7, 'Katana': 8, 'none': 9};
	cy_character_base.prototype.au_map = {'Dagger': 0, 'Shield': 1, 'Arrow': 2, 'MagicDevice': 3, 'Knuckles': 4, 'Katana': 5, 'none': 6, '1hSword': 7};
	cy_character_base.prototype.body_map = {'Normal': 0, 'Dodge': 1, 'Defense': 2, 'none': 3};
	
	cy_character_base.prototype.allWeapType = [];
	cy_character_base.prototype.allAuType = [];
	cy_character_base.prototype.allBodyType = [];
	
	cy_character_base.prototype.statPoint_name = ['STR', 'DEX', 'INT', 'AGI', 'VIT', ['LUK', 'MEN', 'CRT', 'TEC', 'none']];
	
	cy_character_base.prototype.getStatLoc = function(t_baseName){
		let T_obj = this.statList;
		for (let i=0; i<T_obj.length; ++i)
		{
			if (T_obj[i].baseName == t_baseName) return i;
		}
	}
	cy_character_base.prototype.getStatPointer = function(statName){
		return this.statList[this.getStatLoc(statName)];
	}
	
	cy_character_base.prototype.general_saveCode = function(){
		let _code = '';
		_code += '[' + this.characterLv + ',';
		
		_code += '['
		for (let i=0; i<this.charaEquipments.length; ++i)
		{
			let T1 = this.charaEquipments[i];
			_code += '[';
			
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
			_code += (i != this.charaEquipments.length - 1) ? '],' : ']';
		}
		_code += '],';
		
		_code += '[';
		for (let i=0; i<this.statPoint.length; ++i)
		{
			if ( typeof this.statPoint[i] == 'object' )
			{
				_code += `['${this.statPoint[i].name}',${this.statPoint[i].value}]`;
				continue;
			}
			_code += this.statPoint[i];
			_code += (i != this.statPoint.length - 1) ? ',' : '';
		}
		_code += ']';
		
		_code += ']';
		//console.log(_code);
		return _code;
	}
	cy_character_base.prototype.loading_saveCode = function(saveCode){
		let codeAry = eval(saveCode);
		this.characterLv = codeAry[0];
		for (let i=0; i<codeAry[1].length; ++i)
		{
			for (let j=0; j<codeAry[1][i].length; ++j)
			{
				let T1 = this.charaEquipments[i];
				let t1_ary = codeAry[1][i];
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
							T2.setInit(t2_ary[0], t2_ary[2], t2_ary[1]);
						}
						break;
					case 6:
						for (let k=0; k<t1_ary[j].length; ++k)
						{
							for (let l=0; l<t1_ary[j][k].length; ++l)
							{
								let T3 = T1.xtals[k].ability[l];
								let t3_ary = t1_ary[j][k][l];
								T3.setInit(t3_ary[0], t3_ary[2], t3_ary[1]);
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
		}
		let _listCnt = 0;
		for (let i=0; i<codeAry[2].length; ++i)
		{
			let t5_ary = codeAry[2];
			let t_statPointTypeName = '';
			if ( Array.isArray(t5_ary[i]) )
			{	
				switch (_listCnt)
				{
					case 0: t_loc = 5; break;
				}
				this.statPoint[t_loc].name = t5_ary[i][0];
				this.statPoint[t_loc].value = t5_ary[i][1];
				continue;
			}
			this.statPoint[i] = t5_ary[i];
		}
	}
	
	var cy_ability = function(){
		this.base = '';
		this.value = 0;
		this.abilityType = -1;	//-1:default, 0: rate, 1:constant, 2:extraRate
	}
	
	cy_ability.prototype.setInit = function(t_baseName, t_abilityType, t_value = 0){
		this.removeValue();
		this.abilityType = -1;
		this.base = '';
		
		this.base = cy_character.getStatPointer(t_baseName);
		this.abilityType = t_abilityType;
		this.addValue(t_value);
	}
	
	cy_ability.prototype.addValue = function(add){
		if (this.base == '' || this.abilityType == -1 ) return; 
		
		switch (this.abilityType)
		{
			case 0: this.base.rate += add; break;
			case 1: this.base.constant += add; break;
			case 2: this.base.extraRate += add; break;
			default: console.log('error: cy_stat : addValue : false abilityType : ' + this.base.baseName); return;
		}
		this.value += add;
	}
	
	cy_ability.prototype.removeValue = function() {
		if (this.base == '' || this.abilityType == -1 ) return; 
		switch (this.abilityType)
		{
			case 0: this.base.rate -= this.value; break;
			case 1: this.base.constant -= this.value; break;
			case 2: this.base.extraRate -= this.value; break;
			default: console.log('error: cy_stat : removeValue : false abilityType : ' + this.base.baseName);
		}
		this.value = 0;
	}
	cy_ability.prototype.remove = function() {
		if (this.base == '' || this.abilityType == -1 ) return; 
		this.removeValue();
		this.base = '';
		this.abilityType = -1;
	}
	
	var cy_itemAbilitys = function(){
		this.ability = [];
		for (let i=0; i<10; ++i)			//能力數量上限: 10
		{
			this.ability.push(new cy_ability());
		}
	}
	
	var cy_equipmentField = function(tfieldName, default_type, haveXtal){
		this.fieldName = tfieldName;
		this.name = '';
		this.type = default_type;
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
	}
	
	var cy_statBase = function(tbaseName, thaveRate, tbaseValue, tunit = '', tvalueMax = '', tvalueMin = '', textraRate = 1){
		//this.no = cy_character.statList.length;
		this.baseName = tbaseName;
		this.statName = '';
		this.haveRate = thaveRate;
		this.textTitle = '';
		this.baseValue = tbaseValue;
		this.rate = 0;
		this.constant = 0;
		this.extraRate = textraRate;
		this.unit = tunit;
		this.valueMax = tvalueMax;
		this.valueMin = tvalueMin;
		this.formula = '(B*R + C)*E';
		this.preValue = 0;
	}
	
	cy_statBase.prototype.calcValue = function(inputFormula = ''){
		function getV(name) {
			let T;
			switch (name)
			{
				case 'CLv': return cy_character.characterLv;
				case 'Cstr': return cy_character.statPoint[0];
				case 'Cdex': return cy_character.statPoint[1];
				case 'Cint': return cy_character.statPoint[2];
				case 'Cagi': return cy_character.statPoint[3];
				case 'Cvit': return cy_character.statPoint[4];
					
				case '0_value': case '1_value': case '2_value': case '3_value': case '4_value':
					T = parseInt(name.charAt(0));
					return cy_character.charaEquipments[T].fieldValue;
				case '0_refining': case '1_refining': case '2_refining': case '3_refining':
					T = parseInt(name.charAt(0));
					return cy_character.charaEquipments[T].refining;
				case '0_stability': case '1_stability':
					T = parseInt(name.charAt(0));
					return cy_character.charaEquipments[T].stability;
			}			
			for (let i=0; i<cy_character.statList.length; ++i)
			{
				if ( cy_character.statList[i].baseName == name ) return cy_character.statList[i].calcValue();
			}
			return 0;
		}
			
		let B = this.baseValue;
		let R = (100 + this.rate)/100;
		let C = this.constant;
		let E = this.extraRate;
		
		if ( Array.isArray(this.formula) )
		{
			//console.log(this.baseName);
			B = eval(this.formula[1][cy_character.charaEquipments[this.formula[0]].type]);
			return (B*R + C)*E;
		}
		
		if ( inputFormula == '' ) return parseInt(eval(this.formula));
		
		return eval(inputFormula);
	}
	
	
	