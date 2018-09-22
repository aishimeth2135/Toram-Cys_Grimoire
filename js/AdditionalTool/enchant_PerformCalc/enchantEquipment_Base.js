
	var cy_enchantEquipment_base = function(){
		this.abilityItem = [];
		this.abilityItem_Select = [];
		this.potentialValue = 1;
	};
	cy_enchantEquipment_base.prototype.slotCount = 6;
	cy_enchantEquipment_base.prototype.potentialMax = 70;
	cy_enchantEquipment_base.prototype.itemList = [];
	cy_enchantEquipment_base.prototype.categoryList = [];
	cy_enchantEquipment_base.prototype.categoryList_name = [
		'Enhance |,|強化能力數值|,|',
		'Enhance |,|強化HP、MP|,|',
		'Enhance |,|強化攻擊力|,|',
		'Enhance |,|強化防禦力|,|',
		'Enhance Accuracy|,|強化命中|,|',
		'Enhance Dodge|,|強化迴避|,|',
		'Enhance Speed|,|強化速度|,|',
		'Enhance Critical|,|強化暴擊|,|',
		'Enhance Elements|,|強化屬性|,|',
		'Enhance |,|特殊強化|,|',
		'Enhance |,|屬性覺醒|,|'];
	
	cy_enchantEquipment_base.prototype.get_additionalRate = function(){
		let categoryCountDistribution = [];
		for (let i=0; i<this.categoryList.length; ++i)
		{
			categoryCountDistribution.push(0);
		}
		for (let i=0; i<this.abilityItem.length; ++i)
		{
			for (let j=0; j<this.categoryList.length; ++j)
			{
				if ( this.abilityItem[i].category == this.categoryList[j] )
				{
					++categoryCountDistribution[j];
					break;
				}
			}
		}
		
		let sum_rate = 1;
		for (let i=0; i<categoryCountDistribution.length; ++i)
		{
			sum_rate += parseInt(categoryCountDistribution[i]*categoryCountDistribution[i]/2)/10;
		}
		return sum_rate;
	}
	
	cy_enchantEquipment_base.prototype.process_addItem = function(item, value){
		let _potentialUnit = item.base.potentialUnit;
		if ( Array.isArray(_potentialUnit) ) _potentialUnit = _potentialUnit[(item.type == 0) ? 1 : 0];
		if ( !this.abilityItem.includes(item) )
		{
			this.abilityItem.push(item);
			item.value = 0;
		}
		if ( item.value + value > this.potentialMax/_potentialUnit )
		{
			console.log('error')
			return;
		}
		let _rate = this.get_additionalRate();
		this.potentialValue += parseInt(-1*_potentialUnit*value*_rate);
		item.value += value;
	}
	
	cy_enchantEquipment_base.prototype.performCalcBest = function(){
		let categoryDistribution = [];
		let positiveValueAbility = [];
		let negativeValueAbility = [];
		for (let i=0; i<this.categoryList.length; ++i)
		{
			categoryDistribution.push([]);
		}
		for (let i=0; i<this.abilityItem_Select.length; ++i)
		{
			for (let j=0; j<this.categoryList.length; ++j)
			{
				if ( this.abilityItem_Select[i].category == this.categoryList[j] )
				{
					if ( this.abilityItem_Select[i].value < 0 ) negativeValueAbility.push(this.abilityItem_Select[i]); 
					else positiveValueAbility.push(this.abilityItem_Select[i]);
					categoryDistribution[j].push(this.abilityItem_Select[i]);
					break;
				}
			}
		}
		
		let distributionStr = '';
		for (let i=0; i<categoryDistribution.length; ++i)
		{
			if ( categoryDistribution[j].length > 1 ) distributionStr += categoryDistribution[j].length + '_';
		}
		distributionStr = distributionStr.substr(0, distributionStr.length-1);
		
		let t_abilityItem = [];
		let _text = '', _stepCnt = 1;
		
		switch (distributionStr)
		{
			case "1_1_1_1_1_1":
				_text += `${_stepCnt}. `;
				for (let i=0; i<negativeValueAbility.length;++i)
				{
					let _curItem = negativeValueAbility[i];
					this.process_addItem(_curItem, _curItem.value_setting);
					_text += `${_curItem.get_show()}、`;
				}
				_text = _text.substr(0, _text.length-1);
				
				++_stepCnt;
				
				_text += `<br />${_stepCnt}. `;
				for (let i=0; i<positiveValueAbility.length;++i)
				{
					let _curItem = positiveValueAbility[i];
					this.process_addItem(_curItem, _curItem.value_setting);
					_text += `${_curItem.get_show()}、`;
				}
				_text = _text.substr(0, _text.length-1);
				break;
		}
		
	}
	
	var cy_enchantItem = function(tcategory, tname, tpotentialUnit, tshowName, tunit = ''){
		this.category = tcategory;
		this.name = tname;
		this.potentialUnit = tpotentialUnit;
		this.showName = tshowName;
		this.unit = tunit;
	}
	
	var cy_enchantAbilityItem = function(tbase, tvalue = 0, ttype){
		for (let i=0; i<cy_enchantEquipment_base.prototype.itemList.length; ++i)
		{
			if ( cy_enchantEquipment_base.prototype.itemList[i].name == tbase ) tbase = cy_enchantEquipment_base.prototype.itemList[i];
		}
		this.base = tbase;
		this.value = 0;
		this.value_setting = tvalue;
		this.type = ttype; //rate: 0, countant: 1
	}
	
	cy_enchantAbilityItem.prototype.get_show = function (){
		let _sign = ( this.value > 0 ) ? '+' : '';
		let _unit = ( this.type == 0 ) ? '%' : this.base.unit;
		return `${this.showName.split(|,|)[getCur_languageNo()]}${_sign}${this.value}${_unit}`;
	}