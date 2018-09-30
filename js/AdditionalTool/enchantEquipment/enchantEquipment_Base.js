
	var cy_enchantEquipment_base = function(){
		this.abilityItem = [];
		for (let i=0; i<this.slotCount; ++i)
		{
			this.abilityItem.push(new cy_enchantAbilityItem());
		}
		this.potentialValue_pre = 1;
		this.potentialValue = 1;
		this.potentialValue_base = 1;
		this.equipFieldType = 0;	//0: weap, 1:body
	};
	
	cy_enchantEquipment_base.prototype.doublePotentialList = [
		['natural_hp_regen', 'natural_mp_regen', 'def', 'mdef', 'physical_resistance', 'magic_resistance', 'dodge', 'fire_resistance', 'water_resistance', 'earth_resistance', 'wind_resistance', 'light_resistance', 'dark_resistance'],
		['atk', 'matk', 'stability', 'physical_pierce', 'magic_pierce', 'accuracy', 'stronger_against_fire', 'stronger_against_water', 'stronger_against_earth', 'stronger_against_wind', 'stronger_against_light', 'stronger_against_dark']
	];
	cy_enchantEquipment_base.prototype.enchantDefaultFrame_list = [];
	
	cy_enchantEquipment_base.prototype.successRateBase = 130;
	cy_enchantEquipment_base.prototype.negativeValue_rate = 30;
	cy_enchantEquipment_base.prototype.slotCount = 6;
	cy_enchantEquipment_base.prototype.potentialMax = 70;
	cy_enchantEquipment_base.prototype.itemList = [];
	cy_enchantEquipment_base.prototype.categoryList = [];
	cy_enchantEquipment_base.prototype.categoryList_name = [
		'Enhance Stats|,|強化能力數值|,|',
		'Enhance HP/MP|,|強化HP、MP|,|',
		'Enhance Attack|,|強化攻擊力|,|',
		'Enhance Defense|,|強化防禦力|,|',
		'Enhance Accuracy|,|強化命中|,|',
		'Enhance Dodge|,|強化迴避|,|',
		'Enhance Speed|,|強化速度|,|',
		'Enhance Critical|,|強化暴擊|,|',
		'Enhance Elements|,|強化屬性|,|',
		'Special Enhancement|,|特殊強化|,|',
		'Awake Elements |,|屬性覺醒|,|'];
	
	cy_enchantEquipment_base.prototype.searchItemListByName = function(name){
		for (let i=0; i<this.itemList.length; ++i)
		{
			if ( name == this.itemList[i].name ) return this.itemList[i];
		}
		return false;
	}
	
	cy_enchantEquipment_base.prototype.get_curAdditionalRate = function(){
		let categoryCountDistribution = [];
		for (let i=0; i<this.categoryList.length; ++i)
		{
			categoryCountDistribution.push(0);
		}
		for (let i=0; i<this.abilityItem.length; ++i)
		{
			if ( this.abilityItem[i].base == 'none' || !this.abilityItem[i].exist ) continue;
			for (let j=0; j<this.categoryList.length; ++j)
			{
				if ( this.abilityItem[i].base.category == this.categoryList[j] )
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
	
	cy_enchantEquipment_base.prototype.item_addValue = function(item, value){
		let _potentialUnit = item.getPotentialUnit();
		if ( item.value + value > this.potentialMax/_potentialUnit )
		{
			console.log('error');
			return;
		}
		item.value += value;
		if ( value < 0 ) value *= (this.negativeValue_rate/100);
		this.potentialValue += parseInt(-1*_potentialUnit*value);
	}

	cy_enchantEquipment_base.prototype.findItemByName = function (itemName, type){
		for (let i=0; i<this.abilityItem.length; ++i)
		{
			if ( this.abilityItem[i].base  == 'none' ) continue;
			if ( this.abilityItem[i].base.name == itemName && this.abilityItem[i].type == type ) return this.abilityItem[i];
		}
		return undefined;
	}
	
	cy_enchantEquipment_base.prototype.nextStep = function(){
		let _value = (this.potentialValue - this.potentialValue_pre)*this.get_curAdditionalRate();
		if ( _value < 0 )
		{
			let _t = (_value == parseInt(_value)) ? 1 : 0;
			_value = -1*parseInt(-1*_value);
			_value += _t;
		}
		else {
			_value = parseInt(_value);
		}
		this.potentialValue = this.potentialValue_pre + _value;
		this.potentialValue_pre = this.potentialValue;
	}
	
	cy_enchantEquipment_base.prototype.stepCalc = function(stepAry) {
		try {
			let _textList = [];
			for (let captionNo=0; captionNo<stepAry.length; ++captionNo)
			{
				/* Init ---------------------------*/
				for (let i=0; i<this.abilityItem.length; ++i)
				{
					this.abilityItem[i].value = 0;
					this.abilityItem[i].exist = false;
				}
				this.potentialValue_pre = this.potentialValue_base;
				this.potentialValue = this.potentialValue_base;
				/* ------------------------------------------------------*/
				
				let _stepCnt = 0, _html = `<div>Base: ${this.potentialValue_base}</div><table>`;
				for (let i=0; i<stepAry[captionNo].length; ++i)
				{
					let normalMode = true;
					if ( stepAry[captionNo][i] == '' ) continue;
					++_stepCnt;
					let _text = '';
					let _item = stepAry[captionNo][i].split(/\s+&\s+/);
					for (let j=0; j<_item.length; ++j)
					{
						let _curItem = _item[j];
						if ( _curItem.split('@_')[1] ) _curItem = _curItem.split('@_')[1];
						_curItem = _curItem.split('#')[0];	
						let _type = 1;
						if ( _item[j].split('#')[1].includes('%') ) _type = 0;
						_curItem = this.findItemByName(_curItem, _type);
						if ( !_curItem.exist ) _curItem.exist = true;
					}
					let _rate = this.get_curAdditionalRate();
					for (let j=0; j<_item.length; ++j)
					{
						if ( _item[j].match(/^\s*$/) ) continue;
						let _curItem = _item[j], _add = 'none';
						if ( _curItem.split('@_')[1] )
						{
							_add = _curItem.split('@_')[0];
							_curItem = _curItem.split('@_')[1];
						}
						_curItem = _curItem.split('#')[0];	
						let _type = 1;
						if ( _item[j].split('#')[1].includes('%') ) _type = 0;
						_curItem = this.findItemByName(_curItem, _type);
						let _potentialUnit = _curItem.getPotentialUnit();
						let _addValue = parseInt(_item[j].split('#')[1].replace('%', ''));
						
						switch (_add)
						{
							case 'stepBy':
								let _deci = parseFloat((_potentialUnit*(_rate-1) - parseInt(_potentialUnit*(_rate-1))).toFixed(2));
								if ( _deci != 0 && _deci < 1 )
								{
									normalMode = false;
									let _step = parseInt(1/_deci);
									let sumOfStep = Math.ceil(_addValue/_step);
									for (let _i1=_curItem.value; _i1<_curItem.value_setting; _i1+=_step)
									{
										if ( _curItem.value + _step > _curItem.value_setting ) _step = _curItem.value_setting - _curItem.value;
										this.item_addValue(_curItem, _step);
										this.nextStep();
									}
									_text += `<tr><td>${_stepCnt}~${_stepCnt+sumOfStep-1}</td><td>${_curItem.get_show()}(<a data-langtext="分${sumOfStep}次"></a>)</td><td>:: ${this.potentialValue}</td></tr>`;
									_stepCnt += (sumOfStep-1);
									break;
								}
							case 'none': //default
								this.item_addValue(_curItem, _addValue);
								_text += `${_curItem.get_show()} | `;
								break;
						}
					}
					let _potentialValue_pre = this.potentialValue_pre;
					this.nextStep();
					if ( normalMode )
					{
						_text = _text.substr(0, _text.length-2);
						_text = `<tr><td>${_stepCnt}</td><td>${_text}</td><td>:: ${this.potentialValue}</td></tr>`;
					}
					if ( this.potentialValue <= 0 )
					{
						let _successRate = parseInt(this.successRateBase + (this.potentialValue*230)/_potentialValue_pre);
						if ( _successRate < 0 ) _successRate = 0;
						_text += '</table><div class="showSuccessRate"><a data-langtext="Success Rate: |,|成功率："></a>' + _successRate + '%</div>';
						_html += _text;
						_textList.push({successRate: _successRate, text: _html});
						break;
					}
					
					if ( i == stepAry[captionNo].length - 1 )
					{
						_text += '</table><div class="showSuccessRate"><a data-langtext="Success Rate: |,|成功率："></a>100%</div>';
						_textList.push({successRate: 100, text: _html});
					}
					_html += _text;
				}
			}
			document.getElementById('enchantEquipment_showText').innerHTML = _textList.sort((a, b) => { return b.successRate - a.successRate; })[0].text;
			resetInnerLang(document.getElementById('enchantEquipment_showText'));
		}
		catch(e) {
			console.log(e);
		}
	}
	
	cy_enchantEquipment_base.prototype.best_performCalc = function(){
		/* let categoryDistribution = []; */
		let positiveValueAbility = [];
		let negativeValueAbility = [];
		/* for (let i=0; i<this.categoryList.length; ++i)
		{
			categoryDistribution.push({category: this.categoryList[i], value: 0});
		} */
		for (let i=0; i<this.abilityItem.length; ++i)
		{
			for (let j=0; j<this.categoryList.length; ++j)
			{
				if ( this.abilityItem[i].base.category == this.categoryList[j] )
				{
					if ( this.abilityItem[i].value_setting < 0 ) negativeValueAbility.push(this.abilityItem[i]); 
					else positiveValueAbility.push(this.abilityItem[i]);
					/* ++categoryDistribution[j].value; */
					break;
				}
			}
		}
		
		/* categoryDistribution.sort((a, b) => { return b.value-a.value; });
		let distributionStr = '';
		for (let i=0; i<categoryDistribution.length; ++i)
		{
			if ( categoryDistribution[i].value > 0 ) distributionStr += categoryDistribution[i].value + '_';
		}
		distributionStr = distributionStr.substr(0, distributionStr.length-1); */
		
		let _stepAry = [[]], _text = '';
		
		let _frameName = cy_enchantEquipment.enchantDefaultFrame_list[parseInt(document.getElementById('enchantEquipment_selList').getAttribute('data-frameno'))].frameName;
		
		for (let i=0; i<this.abilityItem.length; ++i)
		{
			this.abilityItem[i].value_temp = 0;
		}
		
		let _curItem, _pAry = [], _nAry = [], _cnt = 0, _t1 = 0, _text1 = '';
		switch (this.equipFieldType)
		{
			case 0:
			switch (_frameName)
			{
				case 'atk%, cd, c, c%':
					_pAry = []; _nAry = [];
					_pAry.push(this.abilityItem[1], this.abilityItem[2], this.abilityItem[3]);
					_pAry = _pAry.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit;});
					_pAry.push(this.abilityItem[0]); /* 排列成 cd c c% atk% */
					_t1 = this.potentialValue_base - 1 - parseInt(_pAry[1].getPotentialUnit()*1.2) - parseInt(_pAry[2].getPotentialUnit()*1.45);
					_nAry = negativeValueAbility.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});;
					_cnt = 0; _text1 = '';
					while ( _t1 < _pAry[0].getPotentialUnit()*1 )
					{
						_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					if ( _cnt < 0 ) _text1 += (_nAry[1].getStepStr(_cnt) + ' & ');
					_t1 = parseInt(_t1/_pAry[0].getPotentialUnit());
					_stepAry[0].push(_text1 + _pAry[0].getStepStr(_t1));
					_stepAry[0].push(_pAry[1].getStepStr(1));
					_stepAry[0].push(_pAry[2].getStepStr(1));
					
					if ( _nAry[0].base.category == _nAry[1].base.category )
					{
						_stepAry[0].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
						_stepAry[0].push('stepBy@_' + _pAry[0].getStepStr());
						_stepAry[0].push('stepBy@_' + _pAry[1].getStepStr());
						_stepAry[0].push('stepBy@_' + _pAry[2].getStepStr());
						_stepAry[0].push(_pAry[3].getStepStr());
					}
					else {
						_stepAry[0].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
						_stepAry[0].push(_pAry[0].getStepStr() + ' & ' + _pAry[1].getStepStr() + ' & ' + _pAry[2].getStepStr() + ' & ' + _pAry[3].getStepStr());
					}
					break;
			}
			break;
		
		}
		
		/* switch (distributionStr)
		{
			case "1_1_1_1_1_1":
				for (let i=0; i<negativeValueAbility.length;++i)
				{
					let _curItem = negativeValueAbility[i];
					let _unit = ( _curItem.type == 1 ) ? '' : '%';
					_text += `${_curItem.base.name}#${_curItem.value_setting}${_unit}`;
					if ( i != negativeValueAbility.length - 1 ) _text += ' & ';
				}
				_stepAry[0].push(_text);
				_text = '';
				for (let i=0; i<positiveValueAbility.length;++i)
				{
					let _curItem = positiveValueAbility[i];
					let _unit = ( _curItem.type == 1 ) ? '' : '%';
					_text += `${_curItem.base.name}#${_curItem.value_setting}${_unit}`;
					if ( i != positiveValueAbility.length - 1 ) _text += ' & ';
				}
				_stepAry[0].push(_text);
				_text = '';
				break;
			case "4_2":
				let _cateDistri = [categoryDistribution[0], categoryDistribution[1]];
				switch (positiveValueAbility.length)
				{
					case 6:
						for (let i=0; i<positiveValueAbility.length;++i)
						{
							let _curItem = positiveValueAbility[i];
							let _unit = ( _curItem.type == 1 ) ? '' : '%';
							_text += `${_curItem.base.name}#${_curItem.value_setting}${_unit}`;
							if ( i != positiveValueAbility.length - 1 ) _text += ' & ';
							_stepAry[0].push(_text);
						}
						break;
					case 5:
						switch ( _cateDistri.indexOf(negativeValueAbility[0]) )
						{
							case 0:
								break;
							case 1:
								break;
						}
						break;
				}
				_text = '';
				break;
		} */
		return _stepAry;
	}
	
	var cy_enchantItem = function(tcategory, tname, tpotentialUnit, tshowName, tunit = ''){
		this.category = tcategory;
		this.name = tname;
		this.potentialUnit = tpotentialUnit;
		this.showName = tshowName;
		this.unit = tunit;
	}
	
	var cy_enchantAbilityItem = function(){
		this.base = 'none';
		this.type = 0; //rate: 0, countant: 1
		this.value = 0;
		this.value_temp = 0;
		this.value_setting = 0;
	}
	
	cy_enchantAbilityItem.prototype.get_show = function(getSetting = false){
		if ( this.base == 'none' ) return '<a data-langtext="(None)|,|(未選取)"></a>';
		let _unit = ( this.type == 0 ) ? '%' : this.base.unit;
		let _value = ( !getSetting ) ? this.value : this.value_setting;
		let _sign = ( _value >= 0 ) ? '+' : '';
		return `<a data-langtext="${this.base.showName}"></a>${_sign}${_value}<a data-langtext="${_unit}"></a>`;
	}
	
	cy_enchantAbilityItem.prototype.setInit = function(tbase = 'none', ttype = 0){
		for (let i=0; i<cy_enchantEquipment.itemList.length; ++i)
		{
			if ( tbase == 'none' ) break;
			if ( cy_enchantEquipment.itemList[i].name == tbase ) tbase = cy_enchantEquipment.itemList[i];
		}
		this.base = tbase;
		this.type = ttype;
		this.value = 0;
		this.exist = false;
		this.value_temp = 0;
		this.value_setting = 0;
	}
	cy_enchantAbilityItem.prototype.setSettingValue = function(tvalue = 0){
		this.value_setting = tvalue;
	}
	cy_enchantAbilityItem.prototype.getPotentialUnit = function(calcDouble = true){
		if (this.base == 'none') return 0;
		let _t = 1;
		if ( calcDouble && cy_enchantEquipment.doublePotentialList[cy_enchantEquipment.equipFieldType].includes(this.base.name) ) _t = 2;
		return _t*(this.base.potentialUnit[(this.type == 0) ? 1 : 0] || this.base.potentialUnit);
	}
	cy_enchantAbilityItem.prototype.getStepStr = function(_value = 'none'){
		if ( _value == 'none' ) _value = this.value_setting - this.value_temp;
		if ( _value == 0 ) return '';
		this.value_temp += _value;
		return `${this.base.name}#${_value}${(this.type == 0) ? '%' : ''}`;
	}
	
	var cy_enchantDefaultFrame = function(tframeStr, tequipFieldType, tblockedList, tframeName) {
		this.frameStr = tframeStr;
		this.equipFieldType = tequipFieldType;
		this.blockedList = tblockedList;	/* blocked category */
		this.frameName = tframeName;
	}
	cy_enchantDefaultFrame.prototype.get_show = function(){
		let _text = '';
		let _ary = this.frameStr.split(/\s+&\s+/);
		for (let i=0; i<_ary.length; ++i)
		{
			let _t = ( _ary[i].includes('@') ) ? _ary[i].split('@')[1] : _ary[i];
			let _item = cy_enchantEquipment_base.prototype.searchItemListByName(_t.split('#')[0]);
			let _unit = ( _t.split('#')[1].includes('%') ) ? '%' : _item.unit;
			_t = _t.split('#')[0];
			_text += `<a data-langtext="${_item.showName}"></a><a data-langtext="${_unit}"></a>`;
			if ( i != _ary.length - 1) _text += ' | ';
		}
		return _text;
	}
	
	cy_enchantEquipment_base.prototype.enchantDefaultFrame_list.push(
		new cy_enchantDefaultFrame('atk#7% & critical_damage#16 & critical_rate#16 & critical_rate#16% & negative@def#-7% & negative@mdef#-7%', 0, ['', '', '', '', 'Attack|Critical', 'Attack|Critical'], 'atk%, cd, c, c%')
	);