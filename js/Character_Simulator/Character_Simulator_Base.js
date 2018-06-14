		
	var cy_character = {
		statList: [],
		charaEquipments: [],
		//stat_map: {},
		//charaEquipments_map: {},
		getStatLoc: function(t_baseName){
			let T_obj = this.statList;
			for (let i=0; i<T_obj.length; ++i)
			{
				if (T_obj[i].baseName == t_baseName) return i;
			}
		},
		getStatPointer: function(statName){
			return this.statList[this.getStatLoc(statName)];
		}
	};
	
	var cy_ability = function(){
		this.base = '';
		this.value = 0;
		this.abilityType = -1;	//-1:default, 0: rate, 1:constant, 2:extraRate
	}
	
	cy_ability.prototype.setInit = function(t_baseName, t_abilityType, t_value = 0){
		this.removeValue();
		
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
		if ( haveXtal )
		{
			for (let i=0; i<2; ++i)			//兩顆
			{
				this.xtals.push(new cy_itemAbilitys());
			}
		}
	}
	
	cy_character.charaEquipments.push(
		new cy_equipmentField('MainWeapon'		, 'none'	, true),
		new cy_equipmentField('SubWeapon'		, 'none'	, false),
		new cy_equipmentField('BodyArmor'		, 'normalA'		, true),
		new cy_equipmentField('AdditionalGear'	, 'additional', true),
		new cy_equipmentField('SpecialGear'		, 'special', true)
	);
	
	var cy_statBase = function(tbaseName, thaveRate, tbaseValue, tunit = '', tvalueMax = '', tvalueMin = '', textraRate = 1){
		this.no = cy_character.statList.length;
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
	}
	
	
	
	
	