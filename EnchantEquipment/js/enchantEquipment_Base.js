
	var cy_enchantEquipment_base = function(){
		this.abilityItem = [];
		for (let i=0; i<this.slotCount; ++i)
		{
			this.abilityItem.push(new cy_enchantAbilityItem());
		}
		this.potential_pre = 1;
		this.potential = 1;
		this.potential_base = 1;
		this.potential_equipBase = 30;
		this.equipFieldType = 0;	//0: weap, 1:body
		this.potential_base_locked = false;
		this.curMenuNo = 0;
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
	cy_enchantEquipment_base.prototype.lvPotentialMax = 17;
	cy_enchantEquipment_base.prototype.itemList = [];
	cy_enchantEquipment_base.prototype.categoryList = [];
	cy_enchantEquipment_base.prototype.categoryList_name = [
		'Enhance Stats|,|強化能力數值|,|ステータス強化',
		'Enhance HP/MP|,|強化HP、MP|,|HP．MP強化',
		'Enhance Attack|,|強化攻擊力|,|攻擊力強化',
		'Enhance Defense|,|強化防禦力|,|防御力強化',
		'Enhance Accuracy|,|強化命中|,|命中強化',
		'Enhance Dodge|,|強化迴避|,|回避強化',
		'Enhance Speed|,|強化速度|,|速度強化',
		'Enhance Critical|,|強化暴擊|,|クリティカル強化',
		'Enhance Elements|,|強化屬性|,|属性強化',
		'Special Enhancement|,|特殊強化|,|特殊強化',
		'Awake Elements (100pt)|,|屬性覺醒(100潛)|,|属性覚醒(100pt)',
		'Awake Elements (Base, 10pt)|,|屬性覺醒(原屬、10潛)|,|属性覚醒(得意属性、10pt)'];
	
	cy_enchantEquipment_base.prototype.resetCalcStep = function(){
		for (let i=0; i<this.abilityItem.length; ++i)
		{
			this.abilityItem[i].value_temp = 0;
		}
	}
	
	cy_enchantEquipment_base.prototype.isFull = function(){
		for (let i=0; i<this.abilityItem.length; ++i)
		{
			if ( !this.abilityItem[i].exist ) return false;
		}
		return true;
	}
	
	cy_enchantEquipment_base.prototype.getBestDistribution = function(N, a, b, maxAry = ['none', 'none'], minAry = ['none', 'none']){
		let best_a = 1, best_b = 1, min = '?';
		let hasSwap = false;
		if ( a < b )
		{
			let __t = a;
			a = b;
			b = __t;
			hasSwap = true;
			__t = maxAry[0];
			maxAry[0] = maxAry[1];
			maxAry[1] = __t;
			__t = minAry[0];
			minAry[0] = minAry[1];
			minAry[1] = __t;
		}
		let _t = parseInt(N/a);
		for (let i=_t; i>0; --i)
		{
			let temp_a = i;
			let temp_b = parseInt((N - i*a)/b);
			let __t = N - a*temp_a - b*temp_b;
			if ( min == '?' || __t <= min )
			{
				if ( temp_a == 0 || temp_b == 0 ) continue;
				if ( min == __t )
				{
					if ( best_a + best_b < temp_a + temp_b ) continue;
				}
				if ( maxAry[0] != 'none' && maxAry[0] < temp_a ) continue;//temp_a = maxAry[0];
				if ( maxAry[1] != 'none' && maxAry[1] < temp_b ) continue;//temp_b = maxAry[1];
				if ( minAry[0] != 'none' && minAry[0] > temp_a ) continue;//temp_a = minAry[0];
				if ( minAry[1] != 'none' && minAry[1] > temp_b ) continue;//temp_b = minAry[1];
				best_a = temp_a;
				best_b = temp_b;
				min = __t;
			}
		}
		if ( hasSwap ) return [best_b, best_a];
		return [best_a, best_b];
	}
	
	cy_enchantEquipment_base.prototype.searchItemListByName = function(name){
		for (let i=0; i<this.itemList.length; ++i)
		{
			if ( name == this.itemList[i].name ) return this.itemList[i];
		}
		return false;
	}
	
	cy_enchantEquipment_base.prototype.get_curAdditionalRate = function(expInput = 'none'){
		let categoryCountDistribution = [];
		for (let i=0; i<this.categoryList.length; ++i)
		{
			categoryCountDistribution.push(0);
		}
		let _o = (expInput == 'none') ? this.abilityItem : expInput;
		for (let i=0; i<_o.length; ++i)
		{
			if ( _o[i].base == 'none' || !_o[i].exist ) continue;
			for (let j=0; j<this.categoryList.length; ++j)
			{
				if ( _o[i].base.category == this.categoryList[j] )
				{
					++categoryCountDistribution[j];
					break;
				}
			}
		}
		
		let sum_rate = 1;
		for (let i=0; i<categoryCountDistribution.length; ++i)
		{
			if ( categoryCountDistribution[i] == 1 ) continue;
			sum_rate += parseInt(5*categoryCountDistribution[i]*categoryCountDistribution[i])/100;
		}
		return sum_rate;
	}
	
	cy_enchantEquipment_base.prototype.item_addValue = function(item, value, test = false){
		let _potentialUnit = item.getPotentialUnit(false);
		if ( !item.confirmRange('both', item.value + value) )
		{
			console.log('error');
			console.log(item);
			console.log(this.potential_base);
			return;
		}
		_potentialUnit = item.getPotentialUnit();
		let _value = value;
		if ( value < 0 ) value *= (this.negativeValue_rate/100);
		if ( test )
		{
			if ( !this.nextStep(parseInt(-1*_potentialUnit*value)) ) return false;
			else return true;
		}
		item.value += _value;
		this.potential += parseInt(-1*_potentialUnit*value);
		//console.log(this.potential);
	}

	cy_enchantEquipment_base.prototype.findItemByName = function (itemName, type, categoryConfirm = false, ingnoreNo = 'none'){
		let _haveCategory = itemName.includes('@');
		let _categoryName = (_haveCategory) ? itemName.split('@')[1] : '';
		for (let i=0; i<this.abilityItem.length; ++i)
		{
			if ( ingnoreNo == i ) continue;
			let _t = this.abilityItem[i];
			if ( _t.base  == 'none' ) continue;
			if ( _t.base.name == itemName && _t.type == type ) return _t;
			if ( categoryConfirm && _haveCategory && _t.base.name.includes('@' + _categoryName) ) return _t;
		}
		return undefined;
	}
	
	cy_enchantEquipment_base.prototype.nextStep = function(testValue = 'none'){
		let _value = (this.potential - this.potential_pre)*this.get_curAdditionalRate();
		if ( testValue != 'none' ) _value = (this.potential + testValue - this.potential_pre)*this.get_curAdditionalRate();
		if ( _value < 0 )
		{
			let _t = (_value == parseInt(_value) && (this.get_curAdditionalRate() == 1.8 || this.get_curAdditionalRate() == 2.8) ) ? 1 : 0;
			_value = -1*parseInt(-1*_value);
			_value += _t;
		}
		else {
			_value = parseInt(_value);
		}
		//console.log(":: " + this.potential + " pre:: " + this.potential_pre + " v:: " + _value + " r:: " + this.get_curAdditionalRate());
		if ( testValue != 'none' )
		{
			if ( this.potential_pre + _value < 1 ) return false;
			return true;
		}
		//console.log(this.get_curAdditionalRate());
		this.potential = this.potential_pre + _value;
		this.potential_pre = this.potential;
	}
	
	cy_enchantEquipment_base.prototype.getMaterialCostBase = function(_potentialUnit, name = ""){
		let _costUnit = 0;
		switch(_potentialUnit)
		{
			case 1:
				_costUnit = 5;
				if ( name == 'aspd' || name == 'cspd' ) _costUnit = 1.5;
				break;
			case 3: _costUnit = 16.5; break;
			case 5: _costUnit = 25; break;
			case 6: _costUnit = 33.5; break;
			case 10: 
				_costUnit = 50;
				if ( name.includes('@elements') ) _costUnit = 150;
				break;
			case 20: _costUnit = 100; break;
			case 100: _costUnit = 150; break;
		}
		return _costUnit;
	}
	cy_enchantEquipment_base.prototype.getMaterialCost = function(onlyText = false){
		let _text = '<table><tbody>';
		let _materialAry = ['Metal', 'Cloth', 'Beast', 'Wood', 'Medicine', 'Mana'];
		let _materialStrAry = ['Metal|,|金屬|,|金属', 'Cloth|,|布料|,|布地', 'Beast|,|獸品|,|獣品', 'Wood|,|木材|,|木材', 'Medicine|,|藥品|,|薬品', 'Mana|,|魔素|,|魔素'];
		let _materialValueAry = [0, 0, 0, 0, 0, 0];
		let _materialAddText = ['', '', '', '', '', ''];
		for (let i=0; i<this.abilityItem.length; ++i)
		{
			let _sum = 0, _costUnit = 0;
			let _t = this.abilityItem[i];
			if (_t.base == 'none') continue;
			_costUnit = this.getMaterialCostBase(_t.getPotentialUnit(false), _t.base.name);
			let _end = (_t.value_setting > 0) ? _t.value_setting : -1*_t.value_setting;
			for (let j=1; j<=_end; ++j)
			{
				_sum += parseInt(j*j*_costUnit);
			}
			for (let j=0; j<_materialAry.length; ++j)
			{
				if ( _materialAry[j] == _t.base.materialType )
				{
					_materialValueAry[j] += _sum;
					_materialAddText[j] += (_t.get_show(true) + '<br />[ ' + _sum + ' ]<hr style="color:#AAA;" />');
					break;
				}
			}
		}
		if ( onlyText )
		{
			_text = '';
			for (let i=0; i<_materialAry.length; ++i)
			{
				if (_materialValueAry[i] != 0) _text += `<a data-langtext="${_materialStrAry[i]}"></a>${_materialValueAry[i]} | `;
			}
			_text = _text.substr(0, _text.length - 3);
			return _text;
		}
		for (let i=0; i<_materialAry.length; ++i)
		{
			if (_materialAddText[i].length != 0) _materialAddText[i] = _materialAddText[i].substr(0, _materialAddText[i].length-('<hr style="color:#AAA;" />'.length));
			if (_materialValueAry[i] != 0) _text += `<tr><td class="_td1"><a data-langtext="${_materialStrAry[i]}"></a></td><td class="_td2">${_materialValueAry[i]}<span class="_detail">${_materialAddText[i]}</span></td></tr>`;
		}
		_text += '</tbody></table>';
		return _text;
	}
	
	cy_enchantEquipment_base.prototype.stepCalc = function(stepAry) {
		try {
			//console.log(stepAry);
			if (stepAry[0].length == 0) return {text: "", successRate: -1};
			let _textList = [];
			for (let captionNo=0; captionNo<stepAry.length; ++captionNo)
			{
				/* Init ---------------------------*/
				for (let i=0; i<this.abilityItem.length; ++i)
				{
					this.abilityItem[i].value = 0;
					this.abilityItem[i].exist = false;
				}
				this.potential_pre = this.potential_base;
				this.potential = this.potential_base;
				let isEnd = false;
				for (let i=0; i<stepAry[captionNo].length; ++i)
				{
					if ( stepAry[captionNo][i] == "stepBy@_" )
					{
						for (let j=i; j<stepAry[captionNo].length-1; ++j)
						{
							stepAry[captionNo][j] = stepAry[captionNo][j+1];
						}
						--stepAry[captionNo].length;
						--i;
					}
				}
				/* ------------------------------------------------------*/
				if ( stepAry[captionNo][0] != 'ByADD@' ) {
					let _o = stepAry[captionNo];
					if ( _o[_o.length-1] == 'END@' && _o[_o.length-2].includes('stepBy@_') )
					{
						let _start = 0;
						let _ary = _o[_o.length-2].replace('stepBy@_', '').split('#');
						let _itemName = _ary[0];
						let _unit = ( _ary[1].includes('%') ) ? '%' : '';
						for (let i1=0; i1<_o.length-2; ++i1)
						{
							if ( _o[i1].includes(_itemName) )
							{
								let _ary = _o[i1].split(/\s+&\s+/);
								for (let i2=0; i2<_ary.length; ++i2)
								{
									if ( _ary[i2].includes(_itemName) )
									{
										let __t = _ary[i2];
										if ( __t.includes('@_') ) __t = __t.split('@_')[1];
										__t = __t.split('#')[1];
										if ( __t.includes('%') )
										{
											__t = __t.replace('%', '');
										}
										_start += parseInt(__t);
									}
								}
								
							}
						}
						let _end = this.findItemByName(_itemName, (_unit == '%') ? 0 : 1);
						if ( !_end )
						{
							console.log(_o[_o.length-2]);
							console.log(_itemName);
							throw "ERROR";
						}
						_end = _end.value_setting;
						for (let i1=_start+1; i1<_end; ++i1)
						{
							let _L = stepAry.length;
							stepAry.push(['ByADD@']);
							for (let i2=0; i2<_o.length-2; ++i2)
							{
								stepAry[_L].push(_o[i2]);
							}
							stepAry[_L].push(`stepBy@_${_itemName}#${i1-_start}${_unit}`);
							stepAry[_L].push('END@');
						}
					}
				}
				/* ------------------------------------------------------*/
				let _showStepDetail = ( document.getElementById('enchantEquip_showStepDetail_btn').getAttribute('data-mode') == "1" );
				let _frame = cy_enchantEquipment.enchantDefaultFrame_list[parseInt(document.getElementById('enchantEquipment_selList').getAttribute('data-frameno'))];
				let _equipBasePotential_text = ( _frame.needEquipBase ) ? `、<a data-langtext="Base Potential |,|裝備基礎潛力 |,|基礎潜在力 "></a> ${this.potential_equipBase}` : '';
				let _fieldTypeText = (this.equipFieldType == 0) ? "Weapon|,|武器|,|武器" : "Body Armor|,|身體裝備|,|体装備";
				let _stepCnt = 0, _html = `<div class="showBasePotential"><a data-langtext="${_fieldTypeText}"></a>、<a data-langtext="Initial Potential|,|初始潛力值|,|潜在力"></a> ${this.potential}${_equipBasePotential_text}</div>`;
				let _html2 = '<div class="showBasePotential">';
				for (let i=0; i<this.abilityItem.length; ++i)
				{
					_html2 += this.abilityItem[i].get_show(true);
					if ( i != this.abilityItem.length - 1 ) _html2 += ' | ';
				}
				_html2 += '</div>';
				if ( document.getElementById('enchantEquipment_showMeterialCost').getAttribute('data-mode') == "1" )
				{
					_html2 += `<div class="showBasePotential">${this.getMaterialCost(true)}</div>`;
				}
				_html += `${_html2}<table class="showCalc"><thead><tr><td><a data-langtext="Step|,|步驟|,|手順"></a></td><td><a data-langtext="Ability|,|附上能力 / 退潛|,|強化手順"></a></td><td><a data-langtext="PT|,|剩潛|,|残り値"></a></td></tr></thead><tbody>`;
				for (let i=0; i<stepAry[captionNo].length; ++i)
				{
					let normalMode = true;
					if ( stepAry[captionNo][i] == '' || stepAry[captionNo][i] == 'ByADD@' ) continue;
					let _text = '';
					let _item = stepAry[captionNo][i].split(/\s+&\s+/);
					_item = _item.sort((a, b) => {
						let _a = a, _b = b;
						_a = _a.split('#')[1].replace('%', '');
						if ( _b ) _b = _b.split('#')[1].replace('%', '');
						else _b = 0;
						return parseInt(_a) - parseInt(_b);
					});
					for (let j=0; j<_item.length; ++j)
					{
						let _curItem = _item[j];
						
						if ( !_curItem.includes('#') ) continue;
						if ( _curItem == 'END@' )
						{
							isEnd = true;
							break;
						}
						if ( _curItem.split('@_')[1] ) _curItem = _curItem.split('@_')[1];
						_curItem = _curItem.split('#')[0];
						let _type = 1;
						if ( _item[j].split('#')[1].includes('%') ) _type = 0;
						_curItem = this.findItemByName(_curItem, _type);
						if ( !_curItem.exist ) _curItem.exist = true;
					}
					//console.log(this);
					let _rate = this.get_curAdditionalRate();
					let stepBy_jump = false;
					for (let j=0; j<_item.length; ++j)
					{
						let _curItem = _item[j], _add = 'none';
						if ( !_curItem.includes('#') && _curItem != 'END@' )
						{
							normalMode = false;
							continue;
						}
						if ( _curItem == 'END@' )
						{
							for (let i=0; i<this.abilityItem.length; ++i)
							{
								let _t = this.abilityItem[i];
								if ( _t.value != _t.value_setting )
								{
									if ( !_t.exist ) _t.exist = true;
									this.item_addValue(_t, _t.value_setting - _t.value);
									_text += `${_t.get_show()} | `;
								}
							}
							isEnd = true;
							break;
						}
						
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
						
						let _deci = parseFloat((_potentialUnit*(_rate-1) - parseInt(_potentialUnit*(_rate-1))).toFixed(2));
						{
							_step = parseInt(1/_deci);
							if ( _step == 1/_deci ) --_step;
							if ( _addValue == 1 || (_deci != 0 && _step >= _addValue) ) _add = 'none';
						}
						switch (_add)
						{
							case 'stepBy':
								if (_curItem.value == _curItem.value_setting) _deci = 0;
								if ( _deci != 0 && _deci < 1)
								{
									++_stepCnt;
									normalMode = false;
									let _step = parseInt(1/_deci);
									if ( _step == 1/_deci ) --_step;
									let __step = _step;
									let sumOfStep = Math.ceil(_addValue/_step);
									let _initValue = _curItem.value;
									for (let _i1=_initValue; _i1<_initValue + _addValue; _i1+=__step)
									{
										if ( _curItem.value + _step > _initValue + _addValue ) _step = _initValue + _addValue - _curItem.value;
										if ( !this.item_addValue(_curItem, _step, true) )
										{
											addValue = _i1 - _initValue;
											break;
										}
										this.item_addValue(_curItem, _step);
										this.nextStep();
									}
									_text += `<tr><td class="td1">${_stepCnt}~${_stepCnt+sumOfStep-1}</td><td class="td2"><a data-langtext="Enchant |,|分次附、每次附|,|"></a>${_curItem.get_show(false, __step, ['@none', '@none', __step + 'ずつ増やして'])}<a data-langtext=" each time until |,|，直到|,|"></a>${_curItem.get_show()}<a data-langtext=".|,|。|,|を付与する。"></a></td><td class="td3">${this.potential}</td></tr>`;
									_stepCnt += (sumOfStep-1);
									break;
								}
								else {
									stepBy_jump = true;
								}
							case 'none': //default
								if ( this.item_addValue(_curItem, _addValue, true) )
								{
									this.item_addValue(_curItem, _addValue);
									_text += `${_curItem.get_show()} | `;
								}
								break;
						}
					}
					//if ( stepBy_jump ) continue;
					let _potential_pre = this.potential_pre;
					this.nextStep();
					if ( normalMode && _text != "")
					{
						++_stepCnt;
						_text = _text.substr(0, _text.length-2);
						_text = `<tr><td class="td1">${_stepCnt}</td><td class="td2"><a data-langtext="Enchant |,|附|,|"></a>${_text}<a data-langtext=".|,|。|,|を付与する。"></a></td><td class="td3">${this.potential}</td></tr>`;
					}
					if ( _showStepDetail )
					{
						_text += '<tr><td colspan="3">';
						for (let i1=0; i1<this.abilityItem.length; ++i1)
						{
							if ( this.abilityItem[i1].value != 0 ) _text += this.abilityItem[i1].get_show() + ' | ';
						}
						_text = _text.substr(0, _text.length - 3);
						_text += '</td></tr>';
					}
					if ( this.isFull() && !isEnd )
					{
						let _successRate = -3;
						_text += '</tbody><tfoot><tr><td colspan="3"><a data-langtext="Success Rate: |,|成功率：|,|成功率："></a>' + _successRate + '%</div></td></tr></tfoot></table>';
						_html += _text;
						_textList.push({successRate: _successRate, text: _html});
						break;
					}
					
					if ( this.potential <= 0 )
					{
						let _successRate = parseInt(this.successRateBase + (this.potential*230)/Math.max(_potential_pre, this.potential_equipBase));
						if ( _successRate < 0 ) _successRate = 0;
						if ( !isEnd ) _successRate = -2;
						_text += '</tbody><tfoot><tr><td colspan="3"><a data-langtext="Success Rate: |,|成功率：|,|成功率："></a>' + _successRate + '%</div></td></tr></tfoot></table>';
						_html += _text;
						_textList.push({successRate: _successRate, text: _html});
						if ( !isEnd )
						{
							console.log(this.potential_base);
							console.log(_textList);
							console.log(stepAry);
						}
						break;
					}
					
					if ( i == stepAry[captionNo].length - 1 )
					{
						let _successRate = this.successRateBase;
						if ( !isEnd ) _successRate = -1;
						_text += '</tbody><tfoot><tr><td colspan="3"><a data-langtext="Success Rate: |,|成功率：|,|成功率："></a>' + _successRate + '%</div></td></tr></tfoot></table>';
						_html += _text;
						_textList.push({successRate: _successRate, text: _html});
						if ( !isEnd )
						{
							console.log(this.potential_base);
							console.log(_textList);
							console.log(stepAry);
						}
						break;
					}
					_html += _text;
				}
			}
			let _t = _textList.sort((a, b) => { return b.successRate - a.successRate; })[0];
			return {text: _t.text, successRate: _t.successRate};
		}
		catch(e) {
			console.log(e);
			return {text: "", successRate: -1};
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
		
		let _doc = cy_enchantEquipment.enchantDefaultFrame_list[parseInt(document.getElementById('enchantEquipment_selList').getAttribute('data-frameno'))];
		let _frameName = '';
		if ( _doc ) _frameName = _doc.frameName;
		
		if ( _frameName == '' ) return;
		
		for (let i=0; i<this.abilityItem.length; ++i)
		{
			this.abilityItem[i].value_temp = 0;
		}
		
		let _curItem, _pAry = [], _nAry = [], _cnt = 0, _t1 = 0, _t2 = 0, _t3 = 0, _t4 = 0, _t5 = 0, _remain = 0, _text1 = '', haveAdd = false, add_t = 0;
		switch (this.equipFieldType)
		{
			case 0:
			switch (_frameName)
			{
				case '+1 +3 -2':
					_pAry = []; _nAry = []; haveAdd = false;
					_pAry.push(this.abilityItem[1], this.abilityItem[2], this.abilityItem[3]);
					_pAry = _pAry.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					_pAry.push(this.abilityItem[0]); /* 排列成 cd c c% atk% */
					_t1 = this.potential_base - 1 - parseInt(_pAry[1].getPotentialUnit()*1.2);
					_nAry = negativeValueAbility.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					//console.log(_pAry[0].getPotentialUnit() + " " + _pAry[1].getPotentialUnit() + " " + _pAry[2].getPotentialUnit());
					_cnt = 0;
					while ( _t1 < _pAry[0].getPotentialUnit()*1 )
					{
						_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					
					add_t = 0;
					{
						_t3 = 1;
						let _pUnit = parseInt(_pAry[1].getPotentialUnit()*1.45);
						let __t1 = -1*parseInt((_nAry[0].getPotentialUnit()*_nAry[0].value_setting + _nAry[1].getPotentialUnit()*(_nAry[1].value_setting - _cnt))*this.negativeValue_rate/100);
						let __t2 = __t1 - _pUnit*_t3;
						let __rate = 1.45;
						if ( _nAry[0].base.category == _nAry[1].base.category ) __rate += 0.2;
						if ( parseInt(__t1*__rate) - _pUnit*_t3 == parseInt(__t2*__rate) )
						{
							haveAdd = true;
							 __t2 = __t1 - _pUnit*(_t3+1);
							while ( parseInt(__t1*__rate) - _pUnit*(_t3+1) == parseInt(__t2*__rate) )
							{
								++_t3;
								__t2 = __t1 - _pUnit*(_t3+1);
							}
						}
					}
					
					if ( haveAdd ) add_t = _t3;
					if ( !haveAdd ) _t1 = this.potential_base - 1 - parseInt(_pAry[1].getPotentialUnit()*1.2) - parseInt(_pAry[2].getPotentialUnit()*1.45);
					else _t1 = this.potential_base - 1 - parseInt(_pAry[1].getPotentialUnit()*1.2);
					
					_cnt = 0; _text1 = '';
					while ( _t1 < _pAry[0].getPotentialUnit()*1 )
					{
						_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					if ( _cnt < 0 ) _text1 = _nAry[1].getStepStr() + ' & ';
					_t2 = parseInt(_pAry[1].getPotentialUnit()*1.2); _t3 = parseInt(_pAry[2].getPotentialUnit()*1.45);
					if ( parseInt(_t1/_pAry[0].getPotentialUnit()) > _pAry[0].value_setting )
					{
						_t2 = _t1 - _pAry[0].value_setting*_pAry[0].getPotentialUnit() + parseInt(_pAry[1].getPotentialUnit()*1.2);
						//console.log("t2:: " + _t2 + " t1:: " + _t1);
						_t1 = _pAry[0].value_setting;
					}
					else {
						let __t1 = _t1;
						_t1 = parseInt(_t1/_pAry[0].getPotentialUnit()) || 1;
						let __t = __t1 - _t1*_pAry[0].getPotentialUnit() + parseInt(_pAry[1].getPotentialUnit()*1.2);
						while ( __t >= _t2 + parseInt(_pAry[1].getPotentialUnit()*1.2))
						{
							_t2 += parseInt(_pAry[1].getPotentialUnit()*1.2);
						}
					}
					if ( parseInt(_t2/parseInt(_pAry[1].getPotentialUnit()*1.2)) > _pAry[1].value_setting )
					{
						_t3 = _t2 - _pAry[1].value_setting*parseInt(_pAry[1].getPotentialUnit()*1.2) + parseInt(_pAry[2].getPotentialUnit()*1.45);
						//console.log("t3:: " + _t3 + " t2:: " + _t2);
						_t2 = _pAry[1].value_setting;
					}
					else {
						let __t2 = _t2;
						_t2 = parseInt(_t2/parseInt(_pAry[1].getPotentialUnit()*1.2)) || 1;
						let __t = __t2 - _t2*parseInt(_pAry[1].getPotentialUnit()*1.2) + parseInt(_pAry[2].getPotentialUnit()*1.45);
						while ( __t >= _t3 + parseInt(_pAry[2].getPotentialUnit()*1.45) )
						{
							_t3 += parseInt(_pAry[2].getPotentialUnit()*1.45);
						}
					}
					
					_stepAry[0].push(_text1 + _pAry[0].getStepStr(_t1));
					_stepAry[0].push('stepBy@_' + _pAry[1].getStepStr(_t2));
					if ( !haveAdd )
					{
						if ( parseInt(_t3/parseInt(_pAry[2].getPotentialUnit()*1.45)) > _pAry[2].value_setting ) _t3 = _pAry[2].value_setting;
						else _t3 = parseInt(_t3/parseInt(_pAry[2].getPotentialUnit()*1.45)) || 1;
						_stepAry[0].push('stepBy@_' + _pAry[2].getStepStr(_t3));
						_stepAry[0].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
					}
					else {
						_t3 = add_t;
						_stepAry[0].push(_pAry[2].getStepStr(_t3) + ' & ' + _nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
					}
					
					//--
					_stepAry[1] = []; _stepAry[2] = []; _stepAry[3] = [];
					for (let i1=0; i1<_stepAry[0].length; ++i1)
					{
						_stepAry[1].push(_stepAry[0][i1]);
						_stepAry[2].push(_stepAry[0][i1]);
						_stepAry[3].push(_stepAry[0][i1]);
					}
					{
						let _str1 = 'stepBy@_' + _pAry[1].getStepStr();
						let _str2 = 'stepBy@_' + _pAry[2].getStepStr();
						_stepAry[0].push('stepBy@_' + _pAry[0].getStepStr());
						_stepAry[0].push(_str1);
						_stepAry[0].push(_str2);
						_stepAry[0].push('END@');
						_stepAry[1].push('END@');
						_stepAry[2].push(_str1);
						_stepAry[2].push(_str2);
						_stepAry[2].push('END@');
						_stepAry[3].push(_str2);
						_stepAry[3].push('END@');
					}
					break;
				case '+1 +1 +2 -2':
					_pAry = []; _nAry = []; haveAdd = false;
					_pAry.push(this.abilityItem[2], this.abilityItem[3]);
					_pAry = _pAry.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					_pAry.push(this.abilityItem[0], this.abilityItem[1]); /* 排列成 cd c atk% str% */
					_t1 = this.potential_base - 1;
					_nAry = negativeValueAbility.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					
					_cnt = 0;
					while ( _t1 < _pAry[0].getPotentialUnit()*1 )
					{
						_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					
					add_t = 0;
					{
						_t2 = 1;
						let _pUnit = parseInt(_pAry[1].getPotentialUnit()*1.2);
						let __t1 = -1*parseInt((_nAry[0].getPotentialUnit()*_nAry[0].value_setting + _nAry[1].getPotentialUnit()*(_nAry[1].value_setting - _cnt))*this.negativeValue_rate/100);
						let __t2 = __t1 - _pUnit*_t2;
						let __rate = 1.2;
						if ( _nAry[0].base.category == _nAry[1].base.category ) __rate += 0.2;
						if ( parseInt(__t1*__rate) - _pUnit*_t2 == parseInt(__t2*__rate) )
						{
							haveAdd = true;
							 __t2 = __t1 - _pUnit*(_t2+1);
							while ( parseInt(__t1*__rate) - _pUnit*(_t2+1) == parseInt(__t2*__rate) )
							{
								++_t2;
								__t2 = __t1 - _pUnit*(_t2+1);
							}
						}
					}
					
					if ( haveAdd ) add_t = _t2;
					if ( !haveAdd ) _t1 = this.potential_base - 1 - parseInt(_pAry[1].getPotentialUnit()*1.2);
					else _t1 = this.potential_base - 1;
					
					_cnt = 0; _text1 = '';
					while ( _t1 < _pAry[0].getPotentialUnit()*1 )
					{
						_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					if ( _cnt < 0 ) _text1 += (_nAry[1].getStepStr(_cnt) + ' & ');
					_t2 = parseInt(_pAry[1].getPotentialUnit()*1.2);
					if ( parseInt(_t1/_pAry[0].getPotentialUnit()) > _pAry[0].value_setting )
					{
						_t2 = _t1 - _pAry[0].value_setting*_pAry[0].getPotentialUnit() + parseInt(_pAry[1].getPotentialUnit()*1.2);
						//console.log("t2:: " + _t2 + " t1:: " + _t1);
						_t1 = _pAry[0].value_setting;
					}
					else {
						let __t1 = _t1;
						_t1 = parseInt(_t1/_pAry[0].getPotentialUnit()) || 1;
						let __t = __t1 - _t1*_pAry[0].getPotentialUnit() + parseInt(_pAry[1].getPotentialUnit()*1.2);
						while ( __t >= _t2 + parseInt(_pAry[1].getPotentialUnit()*1.2))
						{
							_t2 += parseInt(_pAry[1].getPotentialUnit()*1.2);
						}
					}
					_stepAry[0].push(_text1 + _pAry[0].getStepStr(_t1));
					if ( !haveAdd )
					{
						if ( parseInt(_t2/parseInt(_pAry[1].getPotentialUnit()*1.2)) > _pAry[1].value_setting ) _t2 = _pAry[1].value_setting;
						else _t2 = parseInt(_t2/parseInt(_pAry[1].getPotentialUnit()*1.2)) || 1;
						_stepAry[0].push('stepBy@_' + _pAry[1].getStepStr(_t2));
						_stepAry[0].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
					}
					else {
						_t2 = add_t;
						_stepAry[0].push(_pAry[1].getStepStr(_t2) + ' & ' + _nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
					}
					
					_stepAry[1] = [];
					for (let i1=0; i1<_stepAry[0].length; ++i1)
					{
						_stepAry[1].push(_stepAry[0][i1]);
					}
					_stepAry[0].push('stepBy@_' + _pAry[1].getStepStr());
					_stepAry[0].push('END@');
					_stepAry[1].push('END@');
					if ( _pAry[3].getPotentialUnit() == 5 )
					{
						let __t = _pAry[2];
						_pAry[2] = _pAry[3];
						_pAry[3] = __t;
					}
					if ( _pAry[2].getPotentialUnit() == 5 )
					{
						this.resetCalcStep();
						let _L = _stepAry.length;
						_stepAry.push([], []);
						_t1 = this.potential_base - 1;
						_cnt = 0; _text1 = '';
						while ( _t1 < _pAry[0].getPotentialUnit() + _pAry[2].getPotentialUnit() )
						{
							_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
							--_cnt;
						}
						if ( _cnt < 0 ) _text1 += (_nAry[1].getStepStr(_cnt) + ' & ');
						let _ary = this.getBestDistribution(_t1, _pAry[0].getPotentialUnit(), _pAry[2].getPotentialUnit(), [_pAry[0].value_setting, _pAry[2].value_setting]);
						_stepAry[_L].push(_text1 + _pAry[0].getStepStr(_ary[0]) + ' & ' + _pAry[2].getStepStr(_ary[1]));
						_stepAry[_L].push(_pAry[1].getStepStr(1) + ' & ' + _nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
						for (let i1=0; i1<_stepAry[_L].length; ++i1)
						{
							_stepAry[_L+1].push(_stepAry[_L][i1]);
						}
						_stepAry[_L].push('stepBy@_' + _pAry[1].getStepStr());
						_stepAry[_L].push('END@');
						_stepAry[_L+1].push('END@');
					}
					if ( _pAry[2].getPotentialUnit() == 5 && _pAry[2].getPotentialUnit() > _pAry[0].getPotentialUnit() && _pAry[2].getPotentialUnit() > _pAry[1].getPotentialUnit() )
					{
						this.resetCalcStep();
						let _L = _stepAry.length;
						_stepAry.push([], [], []);
						if ( _nAry[0].base.category != _nAry[1].base.category )
						{
							_t1 = this.potential_base - 1;
							_cnt = 0; _text1 = '';
							while ( _t1 < _pAry[2].getPotentialUnit() )
							{
								_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
								--_cnt;
							}
							if ( _cnt < 0 ) _text1 += (_nAry[1].getStepStr(_cnt) + ' & ');
							_t2 = Math.min(parseInt(_t1/_pAry[2].getPotentialUnit()), _pAry[2].value_setting);
							_stepAry[_L].push(_text1 + _pAry[2].getStepStr(_t2));
							_stepAry[_L].push(_pAry[0].getStepStr(1) + ' & ' + _pAry[1].getStepStr(1) + ' & ' + _nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
						}
						else {
							_t1 = this.potential_base - 1 - _pAry[0].getPotentialUnit();
							_cnt = 0; _text1 = '';
							while ( _t1 < _pAry[2].getPotentialUnit()*1 )
							{
								_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
								--_cnt;
							}
							if ( _cnt < 0 ) _text1 += (_nAry[1].getStepStr(_cnt) + ' & ');
							_t2 = Math.min(parseInt(_t1/_pAry[2].getPotentialUnit()), _pAry[2].value_setting);
							_t1 -= _t2*_pAry[2].getPotentialUnit();
							_t1 += _pAry[0].getPotentialUnit();
							_t3 = Math.min(parseInt(_t1/_pAry[0].getPotentialUnit()), _pAry[0].value_setting);
							_stepAry[_L].push(_text1 + _pAry[2].getStepStr(_t2));
							_stepAry[_L].push(_pAry[0].getStepStr(_t3));
							_stepAry[_L].push(_pAry[1].getStepStr(1) + ' & ' + _nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
						}
						for (let i1=0; i1<_stepAry[_L].length; ++i1)
						{
							_stepAry[_L+1].push(_stepAry[_L][i1]);
							_stepAry[_L+2].push(_stepAry[_L][i1]);
						}
						let _str1 = 'stepBy@_' + _pAry[0].getStepStr();
						_stepAry[_L].push(_str1);
						_stepAry[_L].push('stepBy@_' + _pAry[1].getStepStr());
						_stepAry[_L].push('END@');
						_stepAry[_L+1].push(_str1);
						_stepAry[_L+1].push('END@');
						_stepAry[_L+2].push('END@');
					}
					break;
				case 'atk%, cd%, cd':
					_pAry = []; _nAry = []; haveAdd = false;
					_pAry.push(this.abilityItem[1], this.abilityItem[2]);
					_pAry = _pAry.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					_pAry.push(this.abilityItem[0]); /* 排列成 cd c atk% */
					_t1 = this.potential_base - 1;
					_nAry = negativeValueAbility.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					
					_cnt = 0;
					while ( _t1 < _pAry[0].getPotentialUnit()*1 )
					{
						_t1 += _nAry[2].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					
					add_t = 0;
					{
						_t2 = 1;
						let _pUnit = parseInt(_pAry[1].getPotentialUnit()*1.2);
						let __t1 = -1*parseInt((_nAry[0].getPotentialUnit()*_nAry[0].value_setting + _nAry[1].getPotentialUnit()*_nAry[1].value_setting +  _nAry[2].getPotentialUnit()*(_nAry[2].value_setting - _cnt))*this.negativeValue_rate/100);
						let __t2 = __t1 - _pUnit*_t2;
						let __rate = 1.2;
						__rate += (cy_enchantEquipment.get_curAdditionalRate(_nAry[0].base.category, _nAry[1].base.category, _nAry[2].base.category) - 1);
						if ( parseInt(__t1*__rate) - _pUnit*_t2 == parseInt(__t2*__rate) )
						{
							haveAdd = true;
							 __t2 = __t1 - _pUnit*(_t2+1);
							while ( parseInt(__t1*__rate) - _pUnit*(_t2+1) == parseInt(__t2*__rate) )
							{
								++_t2;
								__t2 = __t1 - _pUnit*(_t2+1);
							}
						}
					}
					
					if ( haveAdd ) add_t = _t2;
					if ( !haveAdd ) _t1 = this.potential_base - 1 - parseInt(_pAry[1].getPotentialUnit()*1.2);
					else _t1 = this.potential_base - 1;
					
					_cnt = 0; _text1 = '';
					while ( _t1 < _pAry[0].getPotentialUnit()*1 )
					{
						_t1 += _nAry[2].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					if ( _cnt < 0 ) _text1 += (_nAry[2].getStepStr(_cnt) + ' & ');
					_t2 = parseInt(_pAry[1].getPotentialUnit()*1.2);
					if ( parseInt(_t1/_pAry[0].getPotentialUnit()) > _pAry[0].value_setting )
					{
						_t2 = _t1 - _pAry[0].value_setting*_pAry[0].getPotentialUnit() + parseInt(_pAry[1].getPotentialUnit()*1.2);
						//console.log("t2:: " + _t2 + " t1:: " + _t1);
						_t1 = _pAry[0].value_setting;
					}
					else {
						let __t1 = _t1;
						_t1 = parseInt(_t1/_pAry[0].getPotentialUnit()) || 1;
						let __t = __t1 - _t1*_pAry[0].getPotentialUnit() + parseInt(_pAry[1].getPotentialUnit()*1.2);
						while ( __t >= _t2 + parseInt(_pAry[1].getPotentialUnit()*1.2))
						{
							_t2 += parseInt(_pAry[1].getPotentialUnit()*1.2);
						}
					}
					_stepAry[0].push(_text1 + _pAry[0].getStepStr(_t1));
					if ( !haveAdd )
					{
						if ( parseInt(_t2/parseInt(_pAry[1].getPotentialUnit()*1.2)) > _pAry[1].value_setting ) _t2 = _pAry[1].value_setting;
						else _t2 = parseInt(_t2/parseInt(_pAry[1].getPotentialUnit()*1.2)) || 1;
						_stepAry[0].push('stepBy@_' + _pAry[1].getStepStr(_t2));
						_stepAry[0].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr());
					}
					else {
						_t2 = add_t;
						_stepAry[0].push(_pAry[1].getStepStr(_t2) + ' & ' + _nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr());
					}
					
					_stepAry[1] = [];
					for (let i1=0; i1<_stepAry[0].length; ++i1)
					{
						_stepAry[1].push(_stepAry[0][i1]);
					}
					_stepAry[0].push('stepBy@_' + _pAry[1].getStepStr());
					_stepAry[0].push('END@');
					_stepAry[1].push('END@');
					
					if ( _pAry[0].getPotentialUnit() == 10 && _pAry[1].getPotentialUnit() == 3 )
					{
						this.resetCalcStep();
						_stepAry[2] = [];
						_t1 = this.potential_base - 1;
						_cnt = 0; _text1 = '';
						while ( _t1 < _pAry[0].getPotentialUnit() + _pAry[1].getPotentialUnit() )
						{
							_t1 += _nAry[2].getPotentialUnit()*this.negativeValue_rate/100;
							--_cnt;
						}
						if ( _cnt < 0 ) _text1 += (_nAry[2].getStepStr(_cnt) + ' & ');
						let _ary = this.getBestDistribution(_t1, _pAry[0].getPotentialUnit(), _pAry[1].getPotentialUnit(), [_pAry[0].value_setting, _pAry[1].value_setting]);
						_stepAry[2].push(_text1 + _pAry[0].getStepStr(_ary[0]));
						_stepAry[2].push('stepBy@_' + _pAry[1].getStepStr(_ary[1]));
						_stepAry[2].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr());
						_stepAry[2].push('END@');
					}
					break;
				case '+1 +1 +1 -1 -1 -1':
					_pAry = positiveValueAbility;
					_nAry = negativeValueAbility;
					_stepAry[0].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr());
					_stepAry[0].push('END@');
					break;
				case '+1 +1 +1 +1 -1 -1':
					_pAry = positiveValueAbility;
					_nAry = negativeValueAbility;
					_stepAry[0].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
					_stepAry[0].push('END@');
					break;
				case '+1 +2 -1 -1 -1':
					_pAry = []; _nAry = [];
					_pAry.push(this.abilityItem[1], this.abilityItem[2]);
					_pAry = _pAry.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					_pAry.push(this.abilityItem[0]); /* 排列成 stat% stat atk% */
					_nAry = negativeValueAbility.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					_t1 = this.potential_base - 1;
					if ( _pAry[1].getPotentialUnit() == 10) _t1 -= parseInt( (_pAry[1].getPotentialUnit() - parseInt(_nAry[0].getPotentialUnit()*this.negativeValue_rate/100))*1.2);	//(10-6)*1.2
					
					_cnt = 0; _text1 = '';
					while ( _t1 < _pAry[0].getPotentialUnit()*1 )
					{
						_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					if ( _cnt < 0 ) _text1 += (_nAry[1].getStepStr(_cnt) + ' & ');
					_t2 = 1;
					_t1 = Math.min(parseInt(_t1/_pAry[0].getPotentialUnit()), _pAry[0].value_setting);
					
					_stepAry[0].push(_text1 + _pAry[0].getStepStr(_t1));
					_stepAry[0].push(_pAry[1].getStepStr(1) + ' & ' + _nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr());
					_stepAry.push([]);
					_stepAry[0].push('END@');
					
					this.resetCalcStep();
					_stepAry[1].push(_pAry[0].getStepStr(1));
					_stepAry[1].push(_pAry[1].getStepStr(1) + ' & ' + _nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr());
					_stepAry[1].push('END@');
					if ( _pAry[0].getPotentialUnit() == 10)
					{
						let _L = _stepAry.length;
						this.resetCalcStep();
						_stepAry.push([], []);
						_t1 = this.potential_base - 5;
						_cnt = 0; _text1 = '';
						while ( _t1 < _pAry[1].getPotentialUnit() )
						{
							_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
							--_cnt;
						}
						if ( _cnt < 0 ) _text1 += (_nAry[1].getStepStr(_cnt) + ' & ');
						_t1 = parseInt(_t1/_pAry[1].getPotentialUnit());
						_stepAry[_L].push(_text1 + _pAry[1].getStepStr(_t1));
						_stepAry[_L].push(_pAry[0].getStepStr(1) + ' & ' + _nAry[1].getStepStr(-1));
						_stepAry[_L].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr());
						for (let i1=0; i1<_stepAry[_L].length; ++i1)
						{
							_stepAry[_L+1].push(_stepAry[_L][i1]);
						}
						_stepAry[_L].push('stepBy@_' + _pAry[2].getStepStr());
						_stepAry[_L].push('END@');
						_stepAry[_L+1].push('END@');
					}
					break;
				case '+1 +1 +1-1 -1 -1':
					_pAry = []; _nAry = [];
					{
						let _ary = [this.abilityItem[0], this.abilityItem[1]];
						_ary = _ary.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
						_pAry.push(this.abilityItem[2], _ary[0], _ary[1]);
					}
					_nAry.push(this.abilityItem[4], this.abilityItem[5]);
					_nAry = _nAry.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					_nAry.push(this.abilityItem[3]);
					
					_t1 = this.potential_base - 1;
					_cnt = 0; _text1 = '';
					while ( _t1 < _pAry[0].getPotentialUnit() )
					{
						_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					if ( _cnt < 0 ) _text1 += (_nAry[1].getStepStr(_cnt) + ' & ');
					
					_t2 = _t1;
					_t1 = Math.min(parseInt(_t1/_pAry[0].getPotentialUnit()), _pAry[0].value_setting);
					_t2 -= _t1*_pAry[0].getPotentialUnit();
					_t3 = _t2;
					_t2 = Math.min(parseInt(_t2/_pAry[1].getPotentialUnit()), _pAry[1].value_setting);
					_t3 -= _t2*_pAry[1].getPotentialUnit();
					_t3 = Math.min(parseInt(_t3/_pAry[2].getPotentialUnit()), _pAry[2].value_setting);
					_text1 += _pAry[0].getStepStr(_t1);
					if ( _t2 > 0 ) _text1 += (' & ' + _pAry[1].getStepStr(_t2));
					if ( _t3 > 0 ) _text1 += (' & ' + _pAry[2].getStepStr(_t3));
					_stepAry[0].push(_text1);
					_stepAry[0].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr());
					_stepAry[0].push('END@');
					break;
				case 'c% aspd% stat stat%':
					_pAry = []; _nAry = [];
					_pAry.push(this.abilityItem[2], this.abilityItem[3]);
					_pAry = _pAry.sort((a, b) => { return a.getPotentialUnit() - b.getPotentialUnit();});
					_pAry.push(this.abilityItem[0], this.abilityItem[1]); /* 排列成 stat% stat ...*/
					_nAry = negativeValueAbility.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					_t1 = this.potential_base - 1;
					if ( _pAry[1].getPotentialUnit() == 10) _t1 -= parseInt( (_pAry[1].getPotentialUnit() - parseInt(_nAry[0].getPotentialUnit()*this.negativeValue_rate/100))*1.2);	//(10-6)*1.2
					
					_cnt = 0; _text1 = '';
					while ( _t1 < _pAry[0].getPotentialUnit()*1 )
					{
						_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					if ( _cnt < 0 ) _text1 += (_nAry[1].getStepStr(_cnt) + ' & ');
					_t2 = 1;
					_t1 = Math.min(parseInt(_t1/_pAry[0].getPotentialUnit()), _pAry[0].value_setting);
					
					_stepAry[0].push(_text1 + _pAry[0].getStepStr(_t1));
					if ( _pAry[1].getPotentialUnit() == 10)
					{
						_stepAry[0].push(_pAry[1].getStepStr(1) + ' & ' + _nAry[1].getStepStr(-1));
						_stepAry[0].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
					}
					else {
						_stepAry[0].push(_pAry[1].getStepStr(1) + ' & ' + _nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
					}
					_stepAry.push([], []);
					
					for (let i1=0; i1<_stepAry[0].length; ++i1)
					{
						_stepAry[1].push(_stepAry[0][i1]);
					}
					
					_stepAry[0].push('stepBy@_' + _pAry[0].getStepStr());
					_stepAry[0].push('END@');
					_stepAry[1].push('END@');
					this.resetCalcStep();
					_pAry = _pAry.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					_stepAry[2].push(_pAry[0].getStepStr(1));
					_stepAry[2].push(_pAry[1].getStepStr(1) + ' & ' + _nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
					_stepAry[2].push('END@');
					break;
				case '+2 -1 -1 -1 -1':
					_pAry = []; _nAry = [];
					_pAry = positiveValueAbility;
					_nAry = negativeValueAbility;
					_stepAry[0].push(_pAry[0].getStepStr(1) + ' & ' + _pAry[0].getStepStr(2) + ' & ' + _nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr());
					_stepAry[0].push('END@');
					break;
				case 'stat% stat stat':
					_pAry = []; _nAry = [];
					_pAry = positiveValueAbility.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					_nAry = negativeValueAbility.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					_t1 = this.potential_base - 5;
					_cnt = 0; _text1 = '';
					while ( _t1 < _pAry[1].getPotentialUnit()*1 )
					{
						_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					if ( _cnt < 0 ) _text1 += (_nAry[1].getStepStr(_cnt) + ' & ');
					_t1 = Math.min(parseInt(_t1/_pAry[1].getPotentialUnit()), _pAry[1].value_setting);
					_stepAry[0].push(_text1 + _pAry[1].getStepStr(_t1));
					_stepAry[0].push(_pAry[0].getStepStr(1) + ' & ' + _nAry[0].getStepStr(-1));
					_stepAry[0].push(_pAry[2].getStepStr(1) + ' & ' + _nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
					_stepAry[0].push('END@');
					break;
				case 'stat% stat cd c':
					_pAry = []; _nAry = [];
					{
						let _ary1 = [this.abilityItem[0], this.abilityItem[1]].sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
						let _ary2 = [this.abilityItem[2], this.abilityItem[3]].sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
						_pAry = [_ary1[0], _ary1[1], _ary2[0], _ary2[1]];
					}
					_nAry = negativeValueAbility.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					
					_t1 = this.potential_base - 1 - parseInt(_pAry[1].getPotentialUnit()*1.2) - parseInt(_pAry[2].getPotentialUnit()*1.2);
					_remain = this.potential_base - 1;;
					
					_t2 = -1*_nAry[1].value_setting; _t3 = parseInt(_pAry[2].getPotentialUnit()*1.2)*(_pAry[2].value_setting-1);
					while ( parseInt(parseInt((_t2-1)*_nAry[1].getPotentialUnit()*this.negativeValue_rate/100)*1.2) > _t3 )
					{
						--_t2;
					}
					
					_cnt = 0; _text1 = '';
					while ( _t1 < _pAry[0].getPotentialUnit()*1 )
					{
						_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					if ( -1*(_nAry[1].value_setting - _cnt) >= _t2 ) _cnt -= parseInt(-1*(_nAry[1].value_setting - _cnt + _t2)/2)*2;
					_t2 = _nAry[1].value_setting - _cnt;
					if ( _cnt < 0 ) _text1 += (_nAry[1].getStepStr(_cnt) + ' & ');
					
					_t1 += parseInt((-1*_cnt)*_nAry[1].getPotentialUnit()*this.negativeValue_rate/100);
					_t1 = parseInt(_t1/_pAry[0].getPotentialUnit());
					
					_stepAry[0].push(_text1 + _pAry[0].getStepStr(_t1));
					_remain -= _pAry[0].getPotentialUnit()*_t1;
					_remain += parseInt(_cnt*-1*_nAry[1].getPotentialUnit()*this.negativeValue_rate/100);
					_stepAry[0].push(_pAry[1].getStepStr(1));
					_remain -= parseInt(_pAry[1].getPotentialUnit()*1.2);
					_stepAry[0].push(_pAry[2].getStepStr(1));
					_remain -= parseInt(_pAry[2].getPotentialUnit()*1.2);
					_stepAry[0].push(_nAry[1].getStepStr());
					_remain += parseInt(parseInt(_t2*-1*_nAry[1].getPotentialUnit()*this.negativeValue_rate/100)*1.2);
					
					_t3 = 0;
					while ( (_t3+1)*parseInt(_pAry[2].getPotentialUnit()*1.2) < _remain )
					{
						++_t3;
						if ( _t3 >= _pAry[2].value_setting - 1 ) break;
					}
					
					_stepAry[0].push('stepBy@_' + _pAry[2].getStepStr(_t3));
					_remain -= parseInt(_pAry[2].getPotentialUnit()*1.2)*_t3;
					
					if ( _remain > 0)
					{
						_t4 = Math.min(parseInt(_remain/parseInt(_pAry[3].getPotentialUnit()*1.8)), _pAry[3].value_setting-1);
						_stepAry[0].push('stepBy@_' + _pAry[3].getStepStr(_t4));
						_stepAry[0].push('END@');
					}
					else {
						_stepAry[0].push('END@');
					}
					break;
			}
			break;
			case 1:
			switch (_frameName)
			{
				case 'cd%, cd, c, c%':
					_pAry = []; _nAry = [];
					_pAry = positiveValueAbility.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					_nAry = negativeValueAbility.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					
					_t1 = this.potential_base - 1 - parseInt(_pAry[1].getPotentialUnit()*1.2)*Math.max(_pAry[1].value_setting-12, 1);
					_remain = this.potential_base - 1;;
					_cnt = 0; _text1 = '';
					while ( _t1 < _pAry[0].getPotentialUnit()*1 )
					{
						_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					if ( _cnt < 0 ) _text1 += (_nAry[1].getStepStr(_cnt) + ' & ');
				
					_t2 = parseInt(_pAry[1].getPotentialUnit()*1.2);
					if ( parseInt(_t1/_pAry[0].getPotentialUnit()) > _pAry[0].value_setting )
					{
						_t2 = _t1 - _pAry[0].value_setting*_pAry[0].getPotentialUnit() + parseInt(_pAry[1].getPotentialUnit()*1.2);
						//console.log("t2:: " + _t2 + " t1:: " + _t1);
						_t1 = _pAry[0].value_setting;
					}
					else {
						_t1 = parseInt(_t1/_pAry[0].getPotentialUnit()) || 1;
						let __t = _remain - _t1*_pAry[0].getPotentialUnit();
						while ( __t >= _t2 + parseInt(_pAry[1].getPotentialUnit()*1.2) )
						{
							_t2 += parseInt(_pAry[1].getPotentialUnit()*1.2);
						}
					}
					if ( parseInt(_t2/parseInt(_pAry[1].getPotentialUnit()*1.2)) > _pAry[1].value_setting ) _t2 = _pAry[1].value_setting;
					else _t2 = parseInt(_t2/parseInt(_pAry[1].getPotentialUnit()*1.2)) || 1;
					
					_stepAry[0].push(_text1 + _pAry[0].getStepStr(_t1));
					_remain -= _pAry[0].getPotentialUnit()*_t1;
					_stepAry[0].push('stepBy@_' + _pAry[1].getStepStr(_t2));
					_remain -= parseInt(_pAry[1].getPotentialUnit()*1.2)*_t2;
					
					_t2 = _pAry[1].value_setting - _t2;
					
					_t3 = 0;
					while ( _t2*parseInt(_pAry[1].getPotentialUnit()*1.2) > _remain + parseInt(-1*_t3*parseInt(_nAry[0].getPotentialUnit()*this.negativeValue_rate/100)*1.2) )
					{
						if ( _t3 <= _nAry[0].value_setting ) break;
						--_t3;
					}
					
					_stepAry[0].push(_nAry[0].getStepStr(_t3));
					_remain += parseInt(-1*_t3*parseInt(_nAry[0].getPotentialUnit()*this.negativeValue_rate/100)*1.2);
					_t5 = _t2;
					_t2 = _remain - parseInt(_pAry[2].getPotentialUnit()*1.45) - parseInt(_pAry[3].getPotentialUnit()*1.8);
					_t4 = Math.min(parseInt(_t2/parseInt(_pAry[1].getPotentialUnit()*1.2)), _t5);
					_stepAry[0].push('stepBy@_' + _pAry[1].getStepStr(_t4));
					_remain -= _t4*parseInt(_pAry[1].getPotentialUnit()*1.2);
					
					_stepAry[0].push(_pAry[2].getStepStr(1));
					_remain -= 1;
					_stepAry[0].push(_pAry[3].getStepStr(1));
					_remain -= 1;
					
					_stepAry[0].push(_nAry[0].getStepStr());
					
					_t3 = _nAry[0].value_setting - _t3;
					_remain += parseInt(-1*_t3*parseInt(_nAry[0].getPotentialUnit()*this.negativeValue_rate/100)*1.8)
					_t4 = Math.min(parseInt(_remain/parseInt(_pAry[2].getPotentialUnit()*1.45)), _pAry[2].value_setting-1);
					
					_stepAry[0].push('stepBy@_' + _pAry[2].getStepStr(_t4));
					_remain -= parseInt(_pAry[2].getPotentialUnit()*1.45)*_t4;
					if ( _remain > 0)
					{
						_t4 = Math.min(parseInt(_remain/parseInt(_pAry[3].getPotentialUnit()*1.8)), _pAry[3].value_setting-1);
						_stepAry[0].push('stepBy@_' + _pAry[3].getStepStr(_t4));
						_stepAry[0].push('END@');
					}
					else {
						_stepAry[0].push('END@');
					}
					break;
				case '+1 +3 -1 -1':
					_pAry = []; _nAry = []; haveAdd = false;
					_pAry.push(this.abilityItem[1], this.abilityItem[2], this.abilityItem[3]);
					_pAry = _pAry.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					_pAry.push(this.abilityItem[0]); /* 排列成 cd c c% atk% */
					_t1 = this.potential_base - 1 - parseInt(_pAry[1].getPotentialUnit()*1.2);
					_nAry = negativeValueAbility.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					//console.log(_pAry[0].getPotentialUnit() + " " + _pAry[1].getPotentialUnit() + " " + _pAry[2].getPotentialUnit());
					_cnt = 0;
					while ( _t1 < _pAry[0].getPotentialUnit()*1 )
					{
						_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					
					add_t = 0;
					{
						_t3 = 1;
						let _pUnit = parseInt(_pAry[1].getPotentialUnit()*1.45);
						let __t1 = -1*parseInt((_nAry[0].getPotentialUnit()*_nAry[0].value_setting + _nAry[1].getPotentialUnit()*(_nAry[1].value_setting - _cnt))*this.negativeValue_rate/100);
						let __t2 = __t1 - _pUnit*_t3;
						let __rate = 1.45;
						if ( _nAry[0].base.category == _nAry[1].base.category ) __rate += 0.2;
						if ( parseInt(__t1*__rate) - _pUnit*_t3 == parseInt(__t2*__rate) )
						{
							haveAdd = true;
							 __t2 = __t1 - _pUnit*(_t3+1);
							while ( parseInt(__t1*__rate) - _pUnit*(_t3+1) == parseInt(__t2*__rate) )
							{
								++_t3;
								__t2 = __t1 - _pUnit*(_t3+1);
							}
						}
					}
					
					if ( haveAdd ) add_t = _t3;
					if ( !haveAdd ) _t1 = this.potential_base - 1 - parseInt(_pAry[1].getPotentialUnit()*1.2) - parseInt(_pAry[2].getPotentialUnit()*1.45);
					else _t1 = this.potential_base - 1 - parseInt(_pAry[1].getPotentialUnit()*1.2);
					
					_cnt = 0; _text1 = '';
					while ( _t1 < _pAry[0].getPotentialUnit() )
					{
						_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					if ( _cnt < 0 ) _text1 = _nAry[1].getStepStr(_cnt) + ' & ';
					_t2 = parseInt(_pAry[1].getPotentialUnit()*1.2); _t3 = parseInt(_pAry[2].getPotentialUnit()*1.45);
					if ( parseInt(_t1/_pAry[0].getPotentialUnit()) > _pAry[0].value_setting )
					{
						_t2 = _t1 - _pAry[0].value_setting*_pAry[0].getPotentialUnit() + parseInt(_pAry[1].getPotentialUnit()*1.2);
						//console.log("t2:: " + _t2 + " t1:: " + _t1);
						_t1 = _pAry[0].value_setting;
					}
					else {
						let __t1 = _t1;
						_t1 = parseInt(_t1/_pAry[0].getPotentialUnit()) || 1;
						let __t = __t1 - _t1*_pAry[0].getPotentialUnit() + parseInt(_pAry[1].getPotentialUnit()*1.2);
						while ( __t >= _t2 + parseInt(_pAry[1].getPotentialUnit()*1.2))
						{
							_t2 += parseInt(_pAry[1].getPotentialUnit()*1.2);
						}
					}
					if ( parseInt(_t2/parseInt(_pAry[1].getPotentialUnit()*1.2)) > _pAry[1].value_setting )
					{
						_t3 = _t2 - _pAry[1].value_setting*parseInt(_pAry[1].getPotentialUnit()*1.2) + parseInt(_pAry[2].getPotentialUnit()*1.45);
						//console.log("t3:: " + _t3 + " t2:: " + _t2);
						_t2 = _pAry[1].value_setting;
					}
					else {
						let __t2 = _t2;
						_t2 = parseInt(_t2/parseInt(_pAry[1].getPotentialUnit()*1.2)) || 1;
						let __t = __t2 - _t2*parseInt(_pAry[1].getPotentialUnit()*1.2) + parseInt(_pAry[2].getPotentialUnit()*1.45);
						while ( __t >= _t3 + parseInt(_pAry[2].getPotentialUnit()*1.45) )
						{
							_t3 += parseInt(_pAry[2].getPotentialUnit()*1.45);
						}
					}
					
					_stepAry[0].push(_text1 + _pAry[0].getStepStr(_t1));
					_stepAry[0].push('stepBy@_' + _pAry[1].getStepStr(_t2));
					if ( !haveAdd )
					{
						if ( parseInt(_t3/parseInt(_pAry[2].getPotentialUnit()*1.45)) > _pAry[2].value_setting ) _t3 = _pAry[2].value_setting;
						else _t3 = parseInt(_t3/parseInt(_pAry[2].getPotentialUnit()*1.45)) || 1;
						_stepAry[0].push('stepBy@_' + _pAry[2].getStepStr(_t3));
						_stepAry[0].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
					}
					else {
						_t3 = add_t;
						_stepAry[0].push(_pAry[2].getStepStr(_t3) + ' & ' + _nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
					}
					
					//--
					_stepAry.push([], [], []);
					for (let i1=0; i1<_stepAry[0].length; ++i1)
					{
						_stepAry[1].push(_stepAry[0][i1]);
						_stepAry[2].push(_stepAry[0][i1]);
						_stepAry[3].push(_stepAry[0][i1]);
					}
					{
						let _str1 = 'stepBy@_' + _pAry[1].getStepStr();
						let _str2 = 'stepBy@_' + _pAry[2].getStepStr();
						if (_pAry[0].getPotentialUnit > 3)
						{
							_stepAry[0].push('stepBy@_' + _pAry[0].getStepStr());
							_stepAry[0].push(_str1);
							_stepAry[0].push(_str2);
							_stepAry[0].push('END@');
						}
						else {
							_stepAry[0].push(_str1);
							_stepAry[0].push(_str2);
							_stepAry[0].push('END@');
						}
						_stepAry[1].push('END@');
						_stepAry[2].push(_str1);
						_stepAry[2].push(_str2);
						_stepAry[2].push('END@');
						_stepAry[3].push(_str2);
						_stepAry[3].push('END@');
					}
					break;
				case '+1 +2 -2 -1':
					_pAry = []; _nAry = []; haveAdd = false;
					_pAry.push(this.abilityItem[1], this.abilityItem[2]);
					_pAry = _pAry.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					_pAry.push(this.abilityItem[0]); /* 排列成 cd c atk% */
					_t1 = this.potential_base - 1 - parseInt(_pAry[1].getPotentialUnit()*1.2);
					_nAry = negativeValueAbility.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					
					_cnt = 0;
					while ( _t1 < _pAry[0].getPotentialUnit()*1 )
					{
						_t1 += _nAry[2].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					
					add_t = 0;
					{
						_t2 = 1;
						let _pUnit = parseInt(_pAry[1].getPotentialUnit()*1.2);
						let __t1 = -1*parseInt((_nAry[0].getPotentialUnit()*_nAry[0].value_setting + _nAry[1].getPotentialUnit()*_nAry[1].value_setting + _nAry[2].getPotentialUnit()*(_nAry[2].value_setting - _cnt))*this.negativeValue_rate/100);
						let __t2 = __t1 - _pUnit*_t2;
						let __rate = 1.2;
						__rate += (cy_enchantEquipment.get_curAdditionalRate(_nAry[0].base.category, _nAry[1].base.category, _nAry[2].base.category) - 1);
						if ( parseInt(__t1*__rate) - _pUnit*_t2 == parseInt(__t2*__rate) )
						{
							haveAdd = true;
							 __t2 = __t1 - _pUnit*(_t2+1);
							while ( parseInt(__t1*__rate) - _pUnit*(_t2+1) == parseInt(__t2*__rate) )
							{
								++_t2;
								__t2 = __t1 - _pUnit*(_t2+1);
							}
						}
					}
					
					if ( haveAdd ) add_t = _t2;
					if ( !haveAdd ) _t1 = this.potential_base - 1 - parseInt(_pAry[1].getPotentialUnit()*1.2);
					else _t1 = this.potential_base - 1 - parseInt(_pAry[1].getPotentialUnit()*1.2);
					
					_cnt = 0; _text1 = '';
					while ( _t1 < _pAry[0].getPotentialUnit()*1 )
					{
						_t1 += _nAry[2].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					if ( _cnt < 0 ) _text1 += (_nAry[2].getStepStr(_cnt) + ' & ');
					_t2 = parseInt(_pAry[1].getPotentialUnit()*1.2);
					if ( parseInt(_t1/_pAry[0].getPotentialUnit()) > _pAry[0].value_setting )
					{
						_t2 = _t1 - _pAry[0].value_setting*_pAry[0].getPotentialUnit() + parseInt(_pAry[1].getPotentialUnit()*1.2);
						//console.log("t2:: " + _t2 + " t1:: " + _t1);
						_t1 = _pAry[0].value_setting;
					}
					else {
						let __t1 = _t1;
						_t1 = parseInt(_t1/_pAry[0].getPotentialUnit()) || 1;
						let __t = __t1 - _t1*_pAry[0].getPotentialUnit() + parseInt(_pAry[1].getPotentialUnit()*1.2);
						while ( __t >= _t2 + parseInt(_pAry[1].getPotentialUnit()*1.2))
						{
							_t2 += parseInt(_pAry[1].getPotentialUnit()*1.2);
						}
					}
					_stepAry[0].push(_text1 + _pAry[0].getStepStr(_t1));
					if ( !haveAdd )
					{
						if ( parseInt(_t2/parseInt(_pAry[1].getPotentialUnit()*1.2)) > _pAry[1].value_setting ) _t2 = _pAry[1].value_setting;
						else _t2 = parseInt(_t2/parseInt(_pAry[1].getPotentialUnit()*1.2)) || 1;
						_stepAry[0].push('stepBy@_' + _pAry[1].getStepStr(_t2));
						_stepAry[0].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr());
					}
					else {
						_t2 = add_t;
						_stepAry[0].push(_pAry[1].getStepStr(_t2) + ' & ' + _nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr());
					}	
					
					_stepAry.push([], []);
					for (let i1=0; i1<_stepAry[0].length; ++i1)
					{
						_stepAry[1].push(_stepAry[0][i1]);
						_stepAry[2].push(_stepAry[0][i1]);
					}
					{
						let _str1 = 'stepBy@_' + _pAry[0].getStepStr();
						let _str2 = 'stepBy@_' + _pAry[1].getStepStr();
						_stepAry[0].push(_str1);
						_stepAry[0].push(_str2);
						_stepAry[0].push('END@');
						_stepAry[1].push(_str1);
						_stepAry[1].push('END@');
						_stepAry[2].push('END@');
					}
					if ( _pAry[0].getPotentialUnit() == 10 && _pAry[1].getPotentialUnit() == 3 )
					{
						let _L = _stepAry.length;
						this.resetCalcStep();
						_stepAry.push([], [], []);
						_cnt = 0; _text1 = '';
						_t1 = this.potential_base - 1;
						while ( _t1 < _pAry[0].getPotentialUnit() + _pAry[1].getPotentialUnit() )
						{
							_t1 += _nAry[2].getPotentialUnit()*this.negativeValue_rate/100;
							--_cnt;
						}
						if ( _cnt < 0 ) _text1 += (_nAry[2].getStepStr(_cnt) + ' & ');
						let _ary = this.getBestDistribution(_t1, _pAry[0].getPotentialUnit(), _pAry[1].getPotentialUnit(), [_pAry[0].value_setting, _pAry[1].value_setting]);
						_stepAry[_L].push(_text1 + _pAry[0].getStepStr(_ary[0]));
						_stepAry[_L].push('stepBy@_' + _pAry[1].getStepStr(_ary[1]));
						_stepAry[_L].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr());
						
						for (let i1=0; i1<_stepAry[_L].length; ++i1)
						{
							_stepAry[_L+1].push(_stepAry[_L][i1]);
							_stepAry[_L+2].push(_stepAry[_L][i1]);
						}
						let _str1 = 'stepBy@_' + _pAry[0].getStepStr();
						let _str2 = 'stepBy@_' + _pAry[1].getStepStr();
						_stepAry[_L].push(_str1);
						_stepAry[_L].push(_str2);
						_stepAry[_L].push('END@');
						_stepAry[_L+1].push(_str1);
						_stepAry[_L+1].push('END@');
						_stepAry[_L+2].push('END@');
					}
					{
						let _L = _stepAry.length;
						this.resetCalcStep();
						_stepAry.push([], [], []);
						let _pUnit = parseInt(_pAry[1].getPotentialUnit()*1.2);
						_cnt = 0; _text1 = '';
						_t1 = this.potential_base - 1 - _pUnit;
						while ( _t1 < _pAry[0].getPotentialUnit() + _pAry[2].getPotentialUnit() )
						{
							_t1 += _nAry[2].getPotentialUnit()*this.negativeValue_rate/100;
							--_cnt;
						}
						if ( _cnt < 0 ) _text1 += (_nAry[2].getStepStr(_cnt) + ' & ');
						let _ary = this.getBestDistribution(_t1, _pAry[0].getPotentialUnit(), _pAry[2].getPotentialUnit(), [_pAry[0].value_setting, _pAry[2].value_setting]);
						
						_t1 = _t1 - (_pAry[0].getPotentialUnit()*_ary[0] + _pAry[2].getPotentialUnit()*_ary[1]);
						_t1 += _pUnit;
						_t1 = parseInt(_t1/_pUnit);
						_stepAry[_L].push(_text1 + _pAry[0].getStepStr(_ary[0]) + ' & ' + _pAry[2].getStepStr(_ary[1]));
						_stepAry[_L].push('stepBy@_' + _pAry[1].getStepStr(_t1));
						_stepAry[_L].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr());
						for (let i1=0; i1<_stepAry[_L].length; ++i1)
						{
							_stepAry[_L+1].push(_stepAry[_L][i1]);
							_stepAry[_L+2].push(_stepAry[_L][i1]);
						}
						let _str1 = 'stepBy@_' + _pAry[0].getStepStr();
						let _str2 = 'stepBy@_' + _pAry[1].getStepStr();
						_stepAry[_L].push(_str1);
						_stepAry[_L].push(_str2);
						_stepAry[_L].push('END@');
						_stepAry[_L+1].push(_str1);
						_stepAry[_L+1].push('END@');
						_stepAry[_L+2].push('END@');
					}
					break;
				case '+2 +1-2 -1':
					_pAry = []; _nAry = [];
					_t1 = [this.abilityItem[1], this.abilityItem[2]];
					_t1 = _t1.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					_pAry.push(this.abilityItem[0], _t1[0], _t1[1]);
					_pAry = _pAry.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					_pAry.push(this.abilityItem[0]);
					_t1 = this.potential_base - 1 - parseInt(_pAry[1].getPotentialUnit()*1.2);
					_nAry = [this.abilityItem[5], this.abilityItem[3], this.abilityItem[4]];
					
					_cnt = 0; _text1 = '';
					while ( _t1 < _pAry[0].getPotentialUnit()*1 )
					{
						_t1 += _nAry[0].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					if ( _cnt < 0 ) _text1 += (_nAry[0].getStepStr(_cnt) + ' & ');
					_t2 = parseInt(_pAry[1].getPotentialUnit()*1.2);
					if ( parseInt(_t1/_pAry[0].getPotentialUnit()) > _pAry[0].value_setting )
					{
						_t2 = _t1 - _pAry[0].value_setting*_pAry[0].getPotentialUnit() + parseInt(_pAry[1].getPotentialUnit()*1.2);
						//console.log("t2:: " + _t2 + " t1:: " + _t1);
						_t1 = _pAry[0].value_setting;
					}
					else {
						let __t1 = _t1;
						_t1 = parseInt(_t1/_pAry[0].getPotentialUnit()) || 1;
						let __t = __t1 - _t1*_pAry[0].getPotentialUnit() + parseInt(_pAry[1].getPotentialUnit()*1.2);
						while ( __t >= _t2 + parseInt(_pAry[1].getPotentialUnit()*1.2) )
						{
							_t2 += parseInt(_pAry[1].getPotentialUnit()*1.2);
						}
					}
					if ( parseInt(_t2/parseInt(_pAry[1].getPotentialUnit()*1.2)) > _pAry[1].value_setting ) _t2 = _pAry[1].value_setting;
					else _t2 = parseInt(_t2/parseInt(_pAry[1].getPotentialUnit()*1.2)) || 1;
					
					_stepAry[0].push(_text1 + _pAry[0].getStepStr(_t1));
					_stepAry[0].push('stepBy@_' + _pAry[1].getStepStr(_t2));
					_stepAry[0].push(_pAry[2].getStepStr(1) + ' & ' + _nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr());
							
					_stepAry[1] = [];
					for (let i1=0; i1<_stepAry[0].length; ++i1)
					{
						_stepAry[1].push(_stepAry[0][i1]);
					}
					_stepAry[0].push('stepBy@_' + _pAry[1].getStepStr());
					_stepAry[0].push('END@');
					_stepAry[1].push('END@');
					break;
				case '+1 +1-2 -2':
					_pAry = []; _nAry = [];
					_pAry.push(this.abilityItem[1], this.abilityItem[0]);
					_nAry.push(this.abilityItem[5], this.abilityItem[2], this.abilityItem[3], this.abilityItem[4]);
					
					_t1 = this.potential_base - 1;
					
					_t2 = 0;
					if ( _pAry[0].getPotentialUnit() >= 20 )
					{
						let __t1 = parseInt((_t1 + parseInt(_nAry[0].getPotentialUnit()*this.negativeValue_rate/100))/_pAry[0].getPotentialUnit());
						let __t2 = parseInt(_t1/_pAry[0].getPotentialUnit());
						if ( __t1 > __t2 )
						{
							_stepAry[0].push(_pAry[0].getStepStr(__t1) + ' & ' + _nAry[0].getStepStr(-1));
						}
						else {
							while ( parseInt(_t1/_pAry[0].getPotentialUnit()) == 0 )
							{
								if ( _t2 <= _nAry[0].value_setting ) break;
								_t1 += parseInt(_nAry[0].getPotentialUnit()*this.negativeValue_rate/100);
								--_t2;
							}
							_t1 = Math.min(parseInt(_t1/_pAry[0].getPotentialUnit()), _pAry[0].value_setting);
							if ( _t2 < 0 ) _stepAry[0].push(_pAry[0].getStepStr(_t1) + ' & ' + _nAry[0].getStepStr(_t2));
							else _stepAry[0].push(_pAry[0].getStepStr(_t1));
						}
					}
					else {
						while ( parseInt(_t1/_pAry[0].getPotentialUnit()) == 0 )
						{
							if ( _t2 <= _nAry[0].value_setting ) break;
							_t1 += parseInt(_nAry[0].getPotentialUnit()*this.negativeValue_rate/100);
							--_t2;
						}
						_t1 = Math.min(parseInt(_t1/_pAry[0].getPotentialUnit()), _pAry[0].value_setting);
						if ( _t2 < 0 ) _stepAry[0].push(_pAry[0].getStepStr(_t1) + ' & ' + _nAry[0].getStepStr(_t2));
						else _stepAry[0].push(_pAry[0].getStepStr(_t1));
					}
					_stepAry[0].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr() + ' & ' + _nAry[3].getStepStr());
					_stepAry[0].push('END@');
					break;
				case '+1 +1 +1-2 -1':
					_pAry = []; _nAry = [];
					_pAry.push(this.abilityItem[2]);
					_nAry.push(this.abilityItem[5], this.abilityItem[3], this.abilityItem[4]);
					
					_t1 = this.potential_base - 1;
					
					_t2 = 0;
					if ( _pAry[0].getPotentialUnit() >= 20 )
					{
						let __t1 = parseInt((_t1 + parseInt(_nAry[0].getPotentialUnit()*this.negativeValue_rate/100))/_pAry[0].getPotentialUnit());
						let __t2 = parseInt(_t1/_pAry[0].getPotentialUnit());
						if ( __t1 > __t2 )
						{
							_stepAry[0].push(_pAry[0].getStepStr(__t1) + ' & ' + _nAry[0].getStepStr(-1));
						}
						else {
							while ( parseInt(_t1/_pAry[0].getPotentialUnit()) == 0 )
							{
								if ( _t2 <= _nAry[0].value_setting ) break;
								_t1 += parseInt(_nAry[0].getPotentialUnit()*this.negativeValue_rate/100);
								--_t2;
							}
							_t1 = Math.min(parseInt(_t1/_pAry[0].getPotentialUnit()), _pAry[0].value_setting);
							if ( _t2 < 0 ) _stepAry[0].push(_pAry[0].getStepStr(_t1) + ' & ' + _nAry[0].getStepStr(_t2));
							else _stepAry[0].push(_pAry[0].getStepStr(_t1));
						}
					}
					else {
						while ( parseInt(_t1/_pAry[0].getPotentialUnit()) == 0 )
						{
							if ( _t2 <= _nAry[0].value_setting ) break;
							_t1 += parseInt(_nAry[0].getPotentialUnit()*this.negativeValue_rate/100);
							--_t2;
						}
						_t1 = Math.min(parseInt(_t1/_pAry[0].getPotentialUnit()), _pAry[0].value_setting);
						if ( _t2 < 0 ) _stepAry[0].push(_pAry[0].getStepStr(_t1) + ' & ' + _nAry[0].getStepStr(_t2));
						else _stepAry[0].push(_pAry[0].getStepStr(_t1));
					}
					_stepAry[0].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr());
					_stepAry[0].push('END@');
					break;
				case '+1 +1 -2 -2':
					_pAry = []; _nAry = [];
					_pAry = positiveValueAbility.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					_nAry.push(this.abilityItem[5], this.abilityItem[2], this.abilityItem[3], this.abilityItem[4]);
					
					_t1 = this.potential_base - 1;
					
					_t2 = 0;
					if ( _pAry[0].getPotentialUnit() >= 20 )
					{
						let __t1 = parseInt((_t1 + parseInt(_nAry[0].getPotentialUnit()*this.negativeValue_rate/100))/_pAry[0].getPotentialUnit());
						let __t2 = parseInt(_t1/_pAry[0].getPotentialUnit());
						if ( __t1 > __t2 )
						{
							_stepAry[0].push(_pAry[0].getStepStr(__t1) + ' & ' + _nAry[0].getStepStr(-1));
						}
						else {
							while ( parseInt(_t1/_pAry[0].getPotentialUnit()) == 0 )
							{
								if ( _t2 <= _nAry[0].value_setting ) break;
								_t1 += parseInt(_nAry[0].getPotentialUnit()*this.negativeValue_rate/100);
								--_t2;
							}
							_t1 = Math.min(parseInt(_t1/_pAry[0].getPotentialUnit()), _pAry[0].value_setting);
							if ( _t2 < 0 ) _stepAry[0].push(_pAry[0].getStepStr(_t1) + ' & ' + _nAry[0].getStepStr(_t2));
							else _stepAry[0].push(_pAry[0].getStepStr(_t1));
						}
					}
					else {
						while ( parseInt(_t1/_pAry[0].getPotentialUnit()) == 0 )
						{
							if ( _t2 <= _nAry[0].value_setting ) break;
							_t1 += parseInt(_nAry[0].getPotentialUnit()*this.negativeValue_rate/100);
							--_t2;
						}
						_t1 = Math.min(parseInt(_t1/_pAry[0].getPotentialUnit()), _pAry[0].value_setting);
						if ( _t2 < 0 ) _stepAry[0].push(_pAry[0].getStepStr(_t1) + ' & ' + _nAry[0].getStepStr(_t2));
						else _stepAry[0].push(_pAry[0].getStepStr(_t1));
					}
					_stepAry[0].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr() + ' & ' + _nAry[3].getStepStr());
					_stepAry[0].push('END@');
					break;
				case '+1 +1 +1 -2 -1':
					_pAry = []; _nAry = [];
					_pAry = positiveValueAbility.sort((a, b) => { return b.getPotentialUnit()*b.value_setting - a.getPotentialUnit()*a.value_setting;});
					_nAry.push(this.abilityItem[5], this.abilityItem[3], this.abilityItem[4]);
					
					_t1 = this.potential_base - 1;
					
					_cnt = 0; _text1 = '';
					while ( _t1 < _pAry[0].getPotentialUnit()*1 )
					{
						_t1 += _nAry[0].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					if ( _cnt < 0 ) _text1 += (_nAry[0].getStepStr(_cnt) + ' & ');
					
					_t1 = parseInt(_t1/_pAry[0].getPotentialUnit());
					_stepAry[0].push(_text1 + _pAry[0].getStepStr(_t1));
					
					_stepAry[0].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr());
					_stepAry[0].push('END@');
					
					while (true){
						if ( _pAry[0].getPotentialUnit() == _pAry[1].getPotentialUnit() && _pAry[1].getPotentialUnit() == _pAry[2].getPotentialUnit() ) break;
						this.resetCalcStep();
						let _L = _stepAry.length;
						_stepAry.push([]);
						
						_t1 = this.potential_base - 1;
						_cnt = 0; _text1 = '';
						while ( _t1 < _pAry[0].getPotentialUnit() + _pAry[1].getPotentialUnit() )
						{
							_t1 += _nAry[0].getPotentialUnit()*this.negativeValue_rate/100;
							--_cnt;
						}
						if ( _cnt < 0 ) _text1 += (_nAry[0].getStepStr(_cnt) + ' & ');
						
						if ( _pAry[0].getPotentialUnit() == _pAry[1].getPotentialUnit() )
						{
							let __t = _pAry[1];
							_pAry[1] = _pAry[2];
							_pAry[2] = __t;
						}
						let _ary = this.getBestDistribution(_t1, _pAry[0].getPotentialUnit(), _pAry[1].getPotentialUnit(), [_pAry[0].value_setting, _pAry[1].value_setting]);
						_stepAry[_L].push(_text1 + _pAry[0].getStepStr(_ary[0]) + ' & ' + _pAry[1].getStepStr(_ary[1]));
						_stepAry[_L].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr());
						
						_pAry = positiveValueAbility.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
						if ( _pAry[1].getPotentialUnit() <= 3 )
						{
							_stepAry.push([], []);
							for (let i1=0; i1<_stepAry[_L].length; ++i1)
							{
								_stepAry[_L+1].push(_stepAry[_L][i1]);
								_stepAry[_L+2].push(_stepAry[_L][i1]);
							}
							let _str1 = 'stepBy@_' + _pAry[1].getStepStr();
							let _str2 = 'stepBy@_' + _pAry[2].getStepStr();
							_stepAry[_L+1].push(_str1);
							_stepAry[_L+1].push(_str2);
							_stepAry[_L+1].push('END@');
							_stepAry[_L+2].push(_str1);
							_stepAry[_L+2].push('END@');
						}
						else if ( _pAry[2].getPotentialUnit() <= 3 )
						{
							_stepAry.push([]);
							for (let i1=0; i1<_stepAry[_L].length; ++i1)
							{
								_stepAry[_L+1].push(_stepAry[_L][i1]);
							}
							_stepAry[_L+1].push('stepBy@_' + _pAry[2].getStepStr());
							_stepAry[_L+1].push('END@');
						}
						_stepAry[_L].push('END@');
						break;
					}
					break;
				case '+1 +1 +1 +1 -1 -1':
					_pAry = positiveValueAbility;
					_nAry = negativeValueAbility;
					_stepAry[0].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
					_stepAry[0].push('END@');
					break;
				case '+1 +1 +2 -1 -1':
					_pAry = []; _nAry = []; haveAdd = false;
					_pAry.push(this.abilityItem[2], this.abilityItem[3]);
					_pAry = _pAry.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					_pAry.push(this.abilityItem[0], this.abilityItem[1]); /* 排列 */
					_t1 = this.potential_base - 1 - parseInt(_pAry[1].getPotentialUnit()*1.2);
					_nAry = negativeValueAbility.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					
					_cnt = 0;
					while ( _t1 < _pAry[0].getPotentialUnit()*1 )
					{
						_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					
					add_t = 0;
					{
						_t2 = 1;
						let _pUnit = parseInt(_pAry[1].getPotentialUnit()*1.2);
						let __t1 = -1*parseInt((_nAry[0].getPotentialUnit()*_nAry[0].value_setting + _nAry[1].getPotentialUnit()*(_nAry[1].value_setting - _cnt))*this.negativeValue_rate/100);
						let __t2 = __t1 - _pUnit*_t2;
						let __rate = 1.2;
						__rate += (cy_enchantEquipment.get_curAdditionalRate(_nAry[0].base.category, _nAry[1].base.category) - 1);
						if ( parseInt(__t1*__rate) - _pUnit*_t2 == parseInt(__t2*__rate) )
						{
							haveAdd = true;
							 __t2 = __t1 - _pUnit*(_t2+1);
							while ( parseInt(__t1*__rate) - _pUnit*(_t2+1) == parseInt(__t2*__rate) )
							{
								++_t2;
								__t2 = __t1 - _pUnit*(_t2+1);
							}
						}
					}
					
					if ( haveAdd ) add_t = _t2;
					if ( !haveAdd ) _t1 = this.potential_base - 1 - parseInt(_pAry[1].getPotentialUnit()*1.2);
					else _t1 = this.potential_base - 1;
					
					_cnt = 0; _text1 = '';
					while ( _t1 < _pAry[0].getPotentialUnit()*1 )
					{
						_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					if ( _cnt < 0 ) _text1 += (_nAry[1].getStepStr(_cnt) + ' & ');
					_t2 = parseInt(_pAry[1].getPotentialUnit()*1.2);
					if ( parseInt(_t1/_pAry[0].getPotentialUnit()) > _pAry[0].value_setting )
					{
						_t2 = _t1 - _pAry[0].value_setting*_pAry[0].getPotentialUnit() + parseInt(_pAry[1].getPotentialUnit()*1.2);
						//console.log("t2:: " + _t2 + " t1:: " + _t1);
						_t1 = _pAry[0].value_setting;
					}
					else {
						let __t1 = _t1;
						_t1 = parseInt(_t1/_pAry[0].getPotentialUnit()) || 1;
						let __t = __t1 - _t1*_pAry[0].getPotentialUnit() + parseInt(_pAry[1].getPotentialUnit()*1.2);
						while ( __t >= _t2 + parseInt(_pAry[1].getPotentialUnit()*1.2))
						{
							_t2 += parseInt(_pAry[1].getPotentialUnit()*1.2);
						}
					}
					_stepAry[0].push(_text1 + _pAry[0].getStepStr(_t1));
					if ( !haveAdd )
					{
						if ( parseInt(_t2/parseInt(_pAry[1].getPotentialUnit()*1.2)) > _pAry[1].value_setting ) _t2 = _pAry[1].value_setting;
						else _t2 = parseInt(_t2/parseInt(_pAry[1].getPotentialUnit()*1.2)) || 1;
						_stepAry[0].push('stepBy@_' + _pAry[1].getStepStr(_t2));
						_stepAry[0].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
					}
					else {
						_t2 = add_t;
						_stepAry[0].push(_pAry[1].getStepStr(_t2) + ' & ' + _nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
					}	
					
					_stepAry.push([], []);
					for (let i1=0; i1<_stepAry[0].length; ++i1)
					{
						_stepAry[1].push(_stepAry[0][i1]);
						_stepAry[2].push(_stepAry[0][i1]);
					}
					{
						let _str1 = 'stepBy@_' + _pAry[0].getStepStr();
						let _str2 = 'stepBy@_' + _pAry[1].getStepStr();
						_stepAry[0].push(_str1);
						_stepAry[0].push(_str2);
						_stepAry[0].push('END@');
						_stepAry[1].push(_str1);
						_stepAry[1].push('END@');
						_stepAry[2].push('END@');
					}
					if ( _pAry[0].getPotentialUnit() == 10)
					{
						let _L = _stepAry.length;
						this.resetCalcStep();
						_stepAry.push([], []);
						_t1 = this.potential_base - 5;
						_cnt = 0; _text1 = '';
						while ( _t1 < _pAry[1].getPotentialUnit() )
						{
							_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
							--_cnt;
						}
						if ( _cnt < 0 ) _text1 += (_nAry[1].getStepStr(_cnt) + ' & ');
						_t1 = parseInt(_t1/_pAry[1].getPotentialUnit());
						_stepAry[_L].push(_text1 + _pAry[1].getStepStr(_t1));
						_stepAry[_L].push(_pAry[0].getStepStr(1) + ' & ' + _nAry[1].getStepStr(-1));
						_stepAry[_L].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
						for (let i1=0; i1<_stepAry[_L].length; ++i1)
						{
							_stepAry[_L+1].push(_stepAry[_L][i1]);
						}
						let _ary = [_pAry[2], _pAry[3]].sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
						_stepAry[_L].push('stepBy@_' + _ary[1].getStepStr());
						_stepAry[_L].push('END@');
						_stepAry[_L+1].push('END@');
					}
					if ( _pAry[0].getPotentialUnit() == 10 && _pAry[1].getPotentialUnit() == 3 )
					{
						let _L = _stepAry.length;
						this.resetCalcStep();
						_stepAry.push([], [], []);
						_cnt = 0; _text1 = '';
						_t1 = this.potential_base - 1;
						while ( _t1 < _pAry[0].getPotentialUnit() + _pAry[1].getPotentialUnit() )
						{
							_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
							--_cnt;
						}
						if ( _cnt < 0 ) _text1 += (_nAry[1].getStepStr(_cnt) + ' & ');
						let _ary = this.getBestDistribution(_t1, _pAry[0].getPotentialUnit(), _pAry[1].getPotentialUnit(), [_pAry[0].value_setting, _pAry[1].value_setting]);
						_stepAry[_L].push(_text1 + _pAry[0].getStepStr(_ary[0]));
						_stepAry[_L].push('stepBy@_' + _pAry[1].getStepStr(_ary[1]));
						_stepAry[_L].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
						
						for (let i1=0; i1<_stepAry[_L].length; ++i1)
						{
							_stepAry[_L+1].push(_stepAry[_L][i1]);
							_stepAry[_L+2].push(_stepAry[_L][i1]);
						}
						let _str1 = 'stepBy@_' + _pAry[0].getStepStr();
						let _str2 = 'stepBy@_' + _pAry[1].getStepStr();
						_stepAry[_L].push(_str1);
						_stepAry[_L].push(_str2);
						_stepAry[_L].push('END@');
						_stepAry[_L+1].push(_str1);
						_stepAry[_L+1].push('END@');
						_stepAry[_L+2].push('END@');
					}
					{
						let _L = _stepAry.length;
						this.resetCalcStep();
						_stepAry.push([], [], []);
						let _pUnit = parseInt(_pAry[1].getPotentialUnit()*1.2);
						
						_t1 = this.potential_base - 1 - _pUnit;
						haveAdd = false;
						_cnt = 0;
						while ( _t1 < _pAry[0].getPotentialUnit()*1 )
						{
							_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
							--_cnt;
						}
						
						add_t = 0;
						{
							_t2 = 1;
							let __t1 = -1*parseInt((_nAry[0].getPotentialUnit()*_nAry[0].value_setting + _nAry[1].getPotentialUnit()*(_nAry[1].value_setting - _cnt))*this.negativeValue_rate/100);
							let __t2 = __t1 - _pUnit*_t2;
							let __rate = 1.2;
							__rate += (cy_enchantEquipment.get_curAdditionalRate(_nAry[0].base.category, _nAry[1].base.category) - 1);
							if ( parseInt(__t1*__rate) - _pUnit*_t2 == parseInt(__t2*__rate) )
							{
								haveAdd = true;
								__t2 = __t1 - _pUnit*(_t2+1);
								while ( parseInt(__t1*__rate) - _pUnit*(_t2+1) == parseInt(__t2*__rate) )
								{
									++_t2;
									__t2 = __t1 - _pUnit*(_t2+1);
								}
							}
						}
						
						if ( haveAdd ) add_t = _t2;
						if ( !haveAdd ) _t1 = this.potential_base - 1 - _pUnit;
						else _t1 = this.potential_base - 1;
						
						_cnt = 0; _text1 = '';
						while ( _t1 < _pAry[0].getPotentialUnit() + _pAry[2].getPotentialUnit() )
						{
							_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
							--_cnt;
						}
						
						if ( _cnt < 0 ) _text1 += (_nAry[1].getStepStr(_cnt) + ' & ');
						let _ary = this.getBestDistribution(_t1, _pAry[0].getPotentialUnit(), _pAry[2].getPotentialUnit(), [_pAry[0].value_setting, _pAry[2].value_setting]);
						_stepAry[_L].push(_text1 + _pAry[0].getStepStr(_ary[0]) + ' & ' + _pAry[2].getStepStr(_ary[1]));
						if ( !haveAdd )
						{
							_t1 = _t1 - (_pAry[0].getPotentialUnit()*_ary[0] + _pAry[2].getPotentialUnit()*_ary[1]);
							_t1 += _pUnit;
							_t1 = parseInt(_t1/_pUnit);
							
							_stepAry[_L].push('stepBy@_' + _pAry[1].getStepStr(_t1));
							_stepAry[_L].push(_nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
						}
						else {
							_t1 = add_t;
							_stepAry[_L].push(_pAry[1].getStepStr(_t1) + ' & ' + _nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
						}	
						
						for (let i1=0; i1<_stepAry[_L].length; ++i1)
						{
							_stepAry[_L+1].push(_stepAry[_L][i1]);
							_stepAry[_L+2].push(_stepAry[_L][i1]);
						}
						let _str1 = 'stepBy@_' + _pAry[0].getStepStr();
						let _str2 = 'stepBy@_' + _pAry[1].getStepStr();
						_stepAry[_L].push(_str1);
						_stepAry[_L].push(_str2);
						_stepAry[_L].push('END@');
						_stepAry[_L+1].push(_str1);
						_stepAry[_L+1].push('END@');
						_stepAry[_L+2].push('END@');
					}
					break;
				case '+2 -3 -1':
					_pAry = []; _nAry = [];
					_pAry = positiveValueAbility;
					_nAry = negativeValueAbility;
					_stepAry[0].push(_pAry[0].getStepStr(1) + ' & ' + _pAry[0].getStepStr(2) + ' & ' + _nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr() + ' & ' + _nAry[2].getStepStr());
					_stepAry[0].push('END@');
					break;
				case 'stat% stat stat':
					_pAry = []; _nAry = [];
					_pAry = positiveValueAbility.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					_nAry = negativeValueAbility.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					_t1 = this.potential_base - 5;
					_cnt = 0; _text1 = '';
					while ( _t1 < _pAry[1].getPotentialUnit()*1 )
					{
						_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					if ( _cnt < 0 ) _text1 += (_nAry[1].getStepStr(_cnt) + ' & ');
					_t1 = Math.min(parseInt(_t1/_pAry[1].getPotentialUnit()), _pAry[1].value_setting);
					_stepAry[0].push(_text1 + _pAry[1].getStepStr(_t1));
					_stepAry[0].push(_pAry[0].getStepStr(1) + ' & ' + _nAry[0].getStepStr(-1));
					_stepAry[0].push(_pAry[2].getStepStr(1) + ' & ' + _nAry[0].getStepStr() + ' & ' + _nAry[1].getStepStr());
					_stepAry[0].push('END@');
					break;
				case 'stat% stat cd c':
					_pAry = []; _nAry = [];
					{
						let _ary1 = [this.abilityItem[0], this.abilityItem[1]].sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
						let _ary2 = [this.abilityItem[2], this.abilityItem[3]].sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
						_pAry = [_ary1[0], _ary1[1], _ary2[0], _ary2[1]];
					}
					_nAry = negativeValueAbility.sort((a, b) => { return b.getPotentialUnit() - a.getPotentialUnit();});
					
					_t1 = this.potential_base - 1 - parseInt(_pAry[1].getPotentialUnit()*1.2) - parseInt(_pAry[2].getPotentialUnit()*1.2);
					_remain = this.potential_base - 1;;
					
					_t2 = -1*_nAry[1].value_setting; _t3 = parseInt(_pAry[2].getPotentialUnit()*1.2)*(_pAry[2].value_setting-1);
					while ( parseInt(parseInt((_t2-1)*_nAry[1].getPotentialUnit()*this.negativeValue_rate/100)*1.2) > _t3 )
					{
						--_t2;
					}
					
					_cnt = 0; _text1 = '';
					while ( _t1 < _pAry[0].getPotentialUnit()*1 )
					{
						_t1 += _nAry[1].getPotentialUnit()*this.negativeValue_rate/100;
						--_cnt;
					}
					if ( -1*(_nAry[1].value_setting - _cnt) >= _t2 ) _cnt -= parseInt(-1*(_nAry[1].value_setting - _cnt + _t2)/2)*2;
					_t2 = _nAry[1].value_setting - _cnt;
					if ( _cnt < 0 ) _text1 += (_nAry[1].getStepStr(_cnt) + ' & ');
					
					_t1 += parseInt((-1*_cnt)*_nAry[1].getPotentialUnit()*this.negativeValue_rate/100);
					_t1 = parseInt(_t1/_pAry[0].getPotentialUnit());
					
					_stepAry[0].push(_text1 + _pAry[0].getStepStr(_t1));
					_remain -= _pAry[0].getPotentialUnit()*_t1;
					_remain += parseInt(_cnt*-1*_nAry[1].getPotentialUnit()*this.negativeValue_rate/100);
					_stepAry[0].push(_pAry[1].getStepStr(1));
					_remain -= parseInt(_pAry[1].getPotentialUnit()*1.2);
					_stepAry[0].push(_pAry[2].getStepStr(1));
					_remain -= parseInt(_pAry[2].getPotentialUnit()*1.2);
					_stepAry[0].push(_nAry[1].getStepStr());
					_remain += parseInt(parseInt(_t2*-1*_nAry[1].getPotentialUnit()*this.negativeValue_rate/100)*1.2);
					
					_t3 = 0;
					while ( (_t3+1)*parseInt(_pAry[2].getPotentialUnit()*1.2) < _remain )
					{
						++_t3;
						if ( _t3 >= _pAry[2].value_setting - 1 ) break;
					}
					
					_stepAry[0].push('stepBy@_' + _pAry[2].getStepStr(_t3));
					_remain -= parseInt(_pAry[2].getPotentialUnit()*1.2)*_t3;
					
					if ( _remain > 0)
					{
						_t4 = Math.min(parseInt(_remain/parseInt(_pAry[3].getPotentialUnit()*1.8)), _pAry[3].value_setting-1);
						_stepAry[0].push('stepBy@_' + _pAry[3].getStepStr(_t4));
						_stepAry[0].push('END@');
					}
					else {
						_stepAry[0].push('END@');
					}
					break;
			}
		}
		
		return _stepAry;
	}
	
	var cy_enchantItem = function(tcategory, tname, tmaterialType, tpotentialUnit, tshowName, tunit = '', texception = '', trange = ''){
		this.category = tcategory;
		this.name = tname;
		this.materialType = tmaterialType;
		this.potentialUnit = tpotentialUnit;
		this.showName = tshowName;
		this.unit = tunit;
		this.exception = texception;
		this.range = trange;
	}
	
	var cy_enchantAbilityItem = function(){
		this.base = 'none';
		this.type = 0; //rate: 0, countant: 1
		this.value = 0;
		this.value_temp = 0;
		this.value_setting = 0;
	}
	cy_enchantAbilityItem.prototype.confirmRange = function(type = 'both', inputValue = 'none'){
		if ( this.base == 'none' ) return false;
		let ptMax = cy_enchantEquipment.potentialMax;
		let lvMax = cy_enchantEquipment.lvPotentialMax;
		let max = Math.min(parseInt(ptMax/this.getPotentialUnit(false)), lvMax);
		let min = -1*max;
		let _value = this.value;
		if ( inputValue != 'none' ) _value = inputValue;
		
		if ( this.base.range != '' )
		{
			if (this.base.range[0] != 'none') max = this.base.range[0];
			if (this.base.range[1] != 'none') min = this.base.range[1];
		}
		
		switch (type)
		{
			case 'both': if ( _value > max || _value < min ) return false; break;
			case 'max': if ( _value > max ) return false; break;
			case 'min': if ( _value < min ) return false; break;
			case 'get': return [max, min];
		}
		return true;
	}
	
	cy_enchantAbilityItem.prototype.reset = function(){
		this.base = 'none';
		this.type = 0;
		this.value = 0;
		this.value_temp = 0;
		this.value_setting = 0;
	}
	
	cy_enchantAbilityItem.prototype.get_show = function(getSetting = false, inputValue = 'none', langControl = 'none'){
		if ( this.base == 'none' ) return '<a data-langtext="(None)|,|(未選取)"></a>';
		let _unit = ( this.type == 0 ) ? '%' : this.base.unit;
		let _value = ( !getSetting ) ? this.value : this.value_setting;
		let _sign = ( _value >= 0 ) ? '+' : '';
		if ( this.base.unit == 'none' )
		{
			_unit = '';
			_value = '';
			_sign = '';
		}
		if ( inputValue != 'none' ) _value = inputValue;
		let _showName = this.base.showName;
		if ( langControl != 'none' )
		{
			let _t1 = langControl;
			let _t2 = _showName.split('|,|');
			_showName = '';
			for (let i=0; i<_t1.length; ++i)
			{
				if ( _t1[i] != '@none' ) _showName += _t1[i];
				else _showName += `${(_t2[i] != undefined) ? _t2[i] : _t2[0]}${_sign}${_value}`;
			if ( i != _t1.length - 1 ) _showName += '|,|';
			}
			_sign = '';
			_value = '';
		}
		return `<a data-langtext="${_showName}"></a>${_sign}${_value}<a data-langtext="${_unit}"></a>`;
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
		if ( this.base == 'none' ) return;

		if ( !this.confirmRange('max', tvalue) ) tvalue = this.confirmRange('get', tvalue)[0];
		if ( !this.confirmRange('min', tvalue) ) tvalue = this.confirmRange('get', tvalue)[1];
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
	
	var cy_enchantDefaultFrame = function(tcategory, tcategory_showName, tneedEquipBase, tframeStr, tequipFieldType, tblockedList, tframeName, tdefaultEquipBasePotential = 30) {
		this.category = tcategory;
		this.category_showName = tcategory_showName;
		this.needEquipBase = tneedEquipBase;
		this.frameStr = tframeStr;
		this.equipFieldType = tequipFieldType;
		this.blockedList = tblockedList;	/* blocked category */
		this.frameName = tframeName;
		this.defaultEquipBasePotential = tdefaultEquipBasePotential;
	}
	cy_enchantDefaultFrame.prototype.get_show = function(){
		let _text = '';
		let _ary = this.frameStr.split(/\s+&\s+/);
		for (let i=0; i<_ary.length; ++i)
		{
			let _t = _ary[i], _condition = 'none';
			if ( _ary[i].includes('@_') )
			{
				_t = _ary[i].split('@_')[1];
				_condition = _ary[i].split('@_')[0];
			}
			let _style = '';
			switch ( _condition )
			{
				case 'negative': _style = ' style="color:#ae0000;"'; break;
				case 'noItemCategory': _style = ' style="color:#007979;"'; break;
			}
			let _item = cy_enchantEquipment_base.prototype.searchItemListByName(_t.split('#')[0]);
			let _unit = ( _t.split('#')[1].includes('%') ) ? '%' : _item.unit;
			if ( _item.unit == 'none' ) _unit = '';
			_t = _t.split('#')[0];
			_text += `<a${_style} data-langtext="${_item.showName}"></a><a${_style} data-langtext="${_unit}"></a>`;
			if ( i != _ary.length - 1) _text += ' | ';
		}
		return _text;
	}
	
	cy_enchantEquipment_base.prototype.enchantDefaultFrame_list.push(
		new cy_enchantDefaultFrame('Physical'				, 'Physical(Normal)|,|物理職、一般|,|物理火力無属性', false, 'noItemCategory@_atk#7% & critical_damage#MAX_V & critical_rate#MAX_V & critical_rate#MAX_V% & negative@_def#-7% & negative@_mdef#-7%', 0, ['', '', '', '', 'Critical', 'Critical'], '+1 +3 -2'),
		new cy_enchantDefaultFrame('Physical'				, '', false, 'noItemCategory@_atk#7% & critical_damage#2% & critical_damage#MAX_V & critical_rate#MAX_V & negative@_def#-7% & negative@_mdef#-7%', 0, ['', '', '', '', 'Critical', 'Critical'], '+1 +3 -2'),
		new cy_enchantDefaultFrame('Physical'				, '', false, 'noItemCategory@_atk#7% & noItemCategory@_str#2% & critical_damage#MAX_V & critical_rate#MAX_V & negative@_def#-7% & negative@_mdef#-7%', 0, ['', '', '', '', 'Critical', 'Critical'], '+1 +1 +2 -2'),
		new cy_enchantDefaultFrame('Physical'				, '', false, 'noItemCategory@_atk#7% & critical_damage#7% & critical_damage#MAX_V & negative@_natural_hp_regen#-7% & negative@_mdef#-7% & negative@_dodge#-7', 0, ['', '', '', '', 'Critical', 'Critical'], 'atk%, cd%, cd'),
		new cy_enchantDefaultFrame('Physical'				, '', false, 'noItemCategory@_atk#7% & noItemCategory@_critical_damage#7% & noItemCategory@_str#7% & negative@_natural_hp_regen#-7% & negative@_mdef#-7% & negative@_dodge#-7', 0, ['', '', '', '', '', ''], '+1 +1 +1 -1 -1 -1'),
		new cy_enchantDefaultFrame('Physical'				, '', false, 'noItemCategory@_agi#7% & noItemCategory@_aspd#MAX_V% & critical_damage#MAX_V & critical_rate#MAX_V & negative@_def#-7% & negative@_mdef#-7%', 0, ['', '', '', '', 'Critical', 'Critical'], '+1 +1 +2 -2'),
		new cy_enchantDefaultFrame('Physical'				, '', false, 'noItemCategory@_critical_rate#MAX_V & noItemCategory@_aspd#MAX_V% & agi#7% & agi#10 & negative@_def#-7% & negative@_mdef#-7%', 0, ['', '', '', '', 'Stats', 'Stats'], 'c% aspd% stat stat%'),
		new cy_enchantDefaultFrame('Physical'				, '', false, 'agi#7% & agi#4 & critical_damage#MAX_V & critical_rate#MAX_V & negative@_natural_hp_regen#-7% & negative@_mdef#-7%', 0, ['', '', 'all', 'all', 'all', 'Attack'], 'stat% stat cd c', 31),
		new cy_enchantDefaultFrame('Physical_Elements'		, 'Physical(Elements)|,|物理職、屬性|,|物理火力属性', false, 'noItemCategory@_fire_base@elements#1 & noItemCategory@_stronger_against_earth#14 & noItemCategory@_atk#7% & noItemCategory@_critical_rate#MAX_V & negative@_natural_hp_regen#-7% & negative@_dodge#-7', 0, ['', '', '', '', '', ''], '+1 +1 +1 +1 -1 -1'),
		new cy_enchantDefaultFrame('Physical_Elements'		, '', false, 'noItemCategory@_fire_base@elements#1 & noItemCategory@_stronger_against_earth#14 & noItemCategory@_critical_damage#MAX_V & noItemCategory@_atk#3% & negative@_natural_hp_regen#-7% & negative@_dodge#-7', 0, ['', '', '', '', '', ''], '+1 +1 +1 +1 -1 -1'),
		new cy_enchantDefaultFrame('Physical_Elements'		, '', false, 'noItemCategory@_fire_base@elements#1 & noItemCategory@_stronger_against_earth#14 & critical_damage#MAX_V & critical_rate#MAX_V & negative@_def#-7% & negative@_mdef#-7%', 0, ['', '', '', '', 'Critical', 'Critical'], '+1 +1 +2 -2'),
		new cy_enchantDefaultFrame('Physical_Elements'		, '', false, 'noItemCategory@_fire_base@elements#1 & noItemCategory@_stronger_against_earth#14 & critical_damage#2% & critical_damage#MAX_V & negative@_natural_hp_regen#-7% & negative@_dodge#-7', 0, ['', '', '', '', 'Critical', 'Critical'], '+1 +1 +2 -2'),
		new cy_enchantDefaultFrame('Physical_Elements'		, '', false, 'noItemCategory@_fire@elements#1 & noItemCategory@_stronger_against_earth#14 & noItemCategory@_critical_rate#MAX_V & negative@_natural_hp_regen#-7% & negative@_mdef#-7% & negative@_dodge#-7', 0, ['', '', '', '', '', ''], '+1 +1 +1 -1 -1 -1'),
		new cy_enchantDefaultFrame('Physical_Elements'		, '', false, 'noItemCategory@_fire@elements#1 & noItemCategory@_stronger_against_earth#14 & noItemCategory@_critical_damage#14 & negative@_natural_hp_regen#-7% & negative@_mdef#-7% & negative@_dodge#-7', 0, ['', '', '', '', '', ''], '+1 +1 +1 -1 -1 -1'),
		new cy_enchantDefaultFrame('Physical_Elements'		, '', false, 'noItemCategory@_fire@elements#1 & noItemCategory@_stronger_against_earth#14 & noItemCategory@_atk#3% & negative@_natural_hp_regen#-7% & negative@_mdef#-7% & negative@_dodge#-7', 0, ['', '', '', '', '', ''], '+1 +1 +1 -1 -1 -1'),
		new cy_enchantDefaultFrame('Physical_Elements'		, '', false, 'noItemCategory@_stronger_against_earth#14 & noItemCategory@_atk#2% & critical_rate#MAX_V & critical_damage#MAX_V & negative@_natural_hp_regen#-7% & negative@_dodge#-7', 0, ['', '', '', '', 'Critical', 'Critical'], '+1 +1 +2 -2'),
		new cy_enchantDefaultFrame('Physical_Elements'		, '', false, 'noItemCategory@_stronger_against_earth#14 & noItemCategory@_atk#7% & noItemCategory@_dex#1% & noItemCategory@_critical_rate#MAX_V & negative@_natural_hp_regen#-7% & negative@_dodge#-7', 0, ['', '', '', '', '', ''], '+1 +1 +1 +1 -1 -1'),
		new cy_enchantDefaultFrame('Physical_Elements'		, '', false, 'noItemCategory@_stronger_against_earth#14 & critical_damage#MAX_V & critical_rate#MAX_V & critical_rate#MAX_V% & negative@_def#-7% & negative@_mdef#-7%', 0, ['', '', '', '', 'Critical', 'Critical'], '+1 +3 -2'),
		new cy_enchantDefaultFrame('Magic'					, 'Magic|,|魔法職|,|魔職', false, 'noItemCategory@_matk#7% & int#7% & int#14 & negative@_natural_hp_regen#-7% & negative@_def#-7% & negative@_dodge#-7', 0, ['', '', '', 'Stats', 'Stats', 'Stats'], '+1 +2 -1 -1 -1'),
		new cy_enchantDefaultFrame('Magic'					, '', false, 'noItemCategory@_fire_base@elements#1 & noItemCategory@_stronger_against_earth#14 & noItemCategory@_matk#7% & negative@_natural_hp_regen#-7% & negative@_aggor#-10 & negative@_dodge#-7', 0, ['', '', '', '', '', ''], '+1 +1 +1 -1 -1 -1'),
		new cy_enchantDefaultFrame('Magic'					, '', false, 'noItemCategory@_fire_base@elements#1 & noItemCategory@_stronger_against_earth#14 & noItemCategory@_matk#7% & noItemCategory@_int#1% & negative@_natural_hp_regen#-7% & negative@_dodge#-7', 0, ['', '', '', '', '', ''], '+1 +1 +1 +1 -1 -1'),
		new cy_enchantDefaultFrame('Magic'					, '', false, 'noItemCategory@_fire@elements#1 & noItemCategory@_stronger_against_earth#14 & noItemCategory@_matk#4% & negative@_natural_hp_regen#-7% & negative@_def#-7% & negative@_dodge#-7', 0, ['', '', '', '', '', ''], '+1 +1 +1 -1 -1 -1'),
		new cy_enchantDefaultFrame('Magic'					, '', false, 'noItemCategory@_stronger_against_earth#14 & noItemCategory@_matk#7% & noItemCategory@_int#7% & negative@_natural_hp_regen#-7% & negative@_def#-7% & negative@_dodge#-7', 0, ['', '', '', '', '', ''], '+1 +1 +1 -1 -1 -1'),
		new cy_enchantDefaultFrame('Tank'					, 'Tank|,|坦職|,|壁向け', false, 'noItemCategory@_vit#7% & noItemCategory@_aggor#10 & max_hp#7% & negative@_natural_hp_regen#-7% & negative@_mdef#-7% & negative@_dodge#-7', 0, ['', '', '', 'all', '', ''], '+1 +1 +1-1 -1 -1'),
		new cy_enchantDefaultFrame('Tank'					, '', false, 'noItemCategory@_vit#7% & noItemCategory@_aggor#10 & noItemCategory@_critical_rate#MAX_V & negative@_natural_hp_regen#-7% & negative@_mdef#-7% & negative@_dodge#-7', 0, ['', '', '', '', '', ''], '+1 +1 +1 -1 -1 -1'),
		new cy_enchantDefaultFrame('Tank'					, '', false, 'noItemCategory@_fire_resistance#14 & noItemCategory@_aggor#10 & noItemCategory@_critical_rate#MAX_V & negative@_natural_hp_regen#-7% & negative@_mdef#-7% & negative@_dodge#-7', 0, ['', '', '', '', '', ''], '+1 +1 +1 -1 -1 -1'),
		new cy_enchantDefaultFrame('Tank'					, '', false, 'noItemCategory@_max_hp#7% & vit#7% & vit#12 & negative@_def#-7% & negative@_mdef#-7% & negative@_dodge#-7', 0, ['', '', '', '', '', ''], '+1 +2 -1 -1 -1'),
		new cy_enchantDefaultFrame('Smith'					, 'Smith|,|匠裝|,|スミス向け', false, 'str#14 & dex#14 & negative@_def#-7% & negative@_mdef#-7% & negative@_natural_hp_regen#-7% & negative@_dodge#-7', 0, ['', '', 'all', 'all', '', ''], '+2 -1 -1 -1 -1'),
		new cy_enchantDefaultFrame('Smith'					, '', false, 'dex#7% & dex#14 & str#11 & negative@_def#-7% & negative@_mdef#-7% & negative@_natural_hp_regen#-7%', 0, ['', '', '', 'all', 'all', ''], 'stat% stat stat'),
		new cy_enchantDefaultFrame('body_Physical'			, 'Physical(Normal)|,|物理職、一般|,|物理火力無属性', true, 'critical_damage#7% & critical_damage#MAX_V & critical_rate#MAX_V & critical_rate#MAX_V% & negative@_matk#-7% & negative@_accuracy#-7', 1, ['', '', '', '', 'Critical', 'Critical'], 'cd%, cd, c, c%', 31),
		new cy_enchantDefaultFrame('body_Physical'			, '', false, 'noItemCategory@_dex#7% & critical_damage#MAX_V & critical_rate#MAX_V & critical_rate#MAX_V% & negative@_matk#-7% & negative@_accuracy#-7', 1, ['', '', '', '', 'Critical', 'Critical'], '+1 +3 -1 -1'),
		new cy_enchantDefaultFrame('body_Physical'			, '', false, 'noItemCategory@_str#2% & critical_damage#7% & critical_damage#MAX_V & critical_rate#MAX_V & negative@_matk#-7% & negative@_accuracy#-7', 1, ['', '', '', '', 'Critical', 'Critical'], '+1 +3 -1 -1'),
		new cy_enchantDefaultFrame('body_Physical'			, '', false, 'noItemCategory@_str#7% & critical_damage#7% & critical_damage#MAX_V & negative@_matk#-7% & negative@_magic_pierce#-3% & negative@_accuracy#-7', 1, ['', '', '', '', 'Stats|Critical', 'Stats|Critical'], '+1 +2 -2 -1'),
		new cy_enchantDefaultFrame('body_Physical'			, '', false, 'noItemCategory@_agi#7% & noItemCategory@_aspd#MAX_V% & critical_damage#MAX_V & critical_rate#MAX_V & negative@_matk#-7% & negative@_accuracy#-7', 1, ['', '', '', '', 'Critical', 'Critical'], '+1 +1 +2 -1 -1'),
		new cy_enchantDefaultFrame('body_Physical'			, '', false, 'noItemCategory@_critical_rate#MAX_V & noItemCategory@_aspd#MAX_V% & agi#7% & agi#10 & negative@_matk#-7% & negative@_accuracy#-7', 1, ['', '', '', '', 'Stats', 'Stats'], '+1 +1 +2 -1 -1'),
		new cy_enchantDefaultFrame('body_Physical'			, '', false, 'agi#7% & agi#4 & critical_damage#MAX_V & critical_rate#MAX_V & negative@_matk#-7% & negative@_accuracy#-7', 1, ['', '', 'all', 'all', 'all', 'Attack'], 'stat% stat cd c', 31),
		new cy_enchantDefaultFrame('body_Physical_Elements'	, 'Physical(Elements)|,|物理職、屬性|,|物理火力属性', false, 'noItemCategory@_stronger_against_earth#13 & critical_damage#MAX_V & critical_rate#MAX_V & negative@_matk#-7% & negative@_magic_pierce#-3 & negative@_accuracy#-7', 1, ['', '', '', '', 'Critical', 'Critical'], '+1 +2 -2 -1'),
		new cy_enchantDefaultFrame('body_Physical_Elements'	, '', false, 'noItemCategory@_stronger_against_earth#14 & noItemCategory@_critical_rate#MAX_V & noItemCategory@_dex#4% & negative@_atk#-7% & negative@_accuracy#-3% & negative@_accuracy#-7', 1, ['', '', '', '', '', 'all'], '+1 +1 +1 -2 -1'),
		new cy_enchantDefaultFrame('body_Physical_Elements'	, '', false, 'noItemCategory@_stronger_against_earth#14 & noItemCategory@_critical_damage#14 & noItemCategory@_str#1% & negative@_atk#-7% & negative@_accuracy#-3% & negative@_accuracy#-7', 1, ['', '', '', '', '', 'all'], '+1 +1 +1 -2 -1'),
		new cy_enchantDefaultFrame('body_Magic'				, 'Magic|,|魔法職|,|魔職', false, 'noItemCategory@_int#7% & matk#7% & negative@_atk#-7% & negative@_physical_pierce#-3 & negative@_accuracy#-3% & negative@_accuracy#-7', 1, ['', '', '', '', '', 'all'], '+1 +1-2 -2'),
		new cy_enchantDefaultFrame('body_Magic'				, '', false, 'noItemCategory@_int#7% & matk#7% & negative@_atk#-7% & negative@_physical_pierce#-3 & negative@_aggor#-10 & negative@_accuracy#-7', 1, ['', '', '', '', '', 'all'], '+1 +1-2 -2'),
		new cy_enchantDefaultFrame('body_Magic'				, '', false, 'matk#7% & int#7% & int#1 & negative@_atk#-7% & negative@_physical_pierce#-3 & negative@_accuracy#-7', 1, ['', '', '', '', '', 'all'], '+2 +1-2 -1'),
		new cy_enchantDefaultFrame('body_Magic'				, '', false, 'noItemCategory@_stronger_against_earth#14 & matk#4% & negative@_atk#-7% & negative@_physical_pierce#-3 & negative@_accuracy#-3% & negative@_accuracy#-7', 1, ['', '', '', '', '', 'all'], '+1 +1-2 -2'),
		new cy_enchantDefaultFrame('body_Magic'				, '', false, 'noItemCategory@_stronger_against_earth#14 & noItemCategory@_int#14 & negative@_atk#-7% & negative@_physical_pierce#-3 & negative@_accuracy#-3% & negative@_accuracy#-7', 1, ['', '', '', '', '', 'all'], '+1 +1 -2 -2'),
		new cy_enchantDefaultFrame('body_Magic'				, '', false, 'noItemCategory@_stronger_against_earth#14 & noItemCategory@_int#14 & noItemCategory@_matk#1% & negative@_atk#-7% & negative@_accuracy#-3% & negative@_accuracy#-7', 1, ['', '', '', '', '', 'all'], '+1 +1 +1-2 -1'),
		new cy_enchantDefaultFrame('body_Tank'				, 'Tank|,|坦職|,|タンカー', false, 'noItemCategory@_max_hp#7% & noItemCategory@_vit#7% & noItemCategory@_aggor#10 & negative@_atk#-7% & negative@_matk#-7% & negative@_accuracy#-7', 1, ['', '', '', '', '', 'all'], '+1 +1 +1 -2 -1'),
		new cy_enchantDefaultFrame('body_Tank'				, '', false, 'noItemCategory@_max_hp#7% & vit#7% & vit#12 & negative@_atk#-7% & negative@_matk#-7% & negative@_accuracy#-7', 1, ['', '', '', '', 'Stats', 'Stats'], '+1 +2 -2 -1'),
		new cy_enchantDefaultFrame('body_Tank'				, '', false, 'noItemCategory@_vit#7% & noItemCategory@_aggor#10 & noItemCategory@_critical_rate#MAX_V & negative@_atk#-7% & negative@_matk#-7% & negative@_accuracy#-7', 1, ['', '', '', '', '', 'all'], '+1 +1 +1 -2 -1'),
		new cy_enchantDefaultFrame('body_Tank'				, '', false, 'noItemCategory@_fire_resistance#14 & noItemCategory@_aggor#10 & noItemCategory@_critical_rate#MAX_V & negative@_atk#-7% & negative@_matk#-7% & negative@_accuracy#-7', 1, ['', '', '', '', '', 'all'], '+1 +1 +1 -2 -1'),
		new cy_enchantDefaultFrame('body_Tank'				, '', false, 'noItemCategory@_fire_resistance#14 & magic_resistance#7 & physical_resistance#6 & negative@_atk#-7% & negative@_matk#-7% & negative@_accuracy#-7', 1, ['', '', '', '', 'Defense', 'Defense'], '+1 +2 -2 -1'),
		new cy_enchantDefaultFrame('body_Tank'				, '', false, 'noItemCategory@_fire_resistance#14 & noItemCategory@_vit#7% & noItemCategory@_max_hp#7% & negative@_atk#-7% & negative@_matk#-7% & negative@_accuracy#-7', 1, ['', '', '', '', '', 'all'], '+1 +1 +1 -2 -1'),
		new cy_enchantDefaultFrame('body_Tank'				, '', false, 'noItemCategory@_fire_resistance#14 & noItemCategory@_vit#7% & noItemCategory@_critical_rate#MAX_V & noItemCategory@_max_hp#1% & negative@_matk#-7% & negative@_accuracy#-7', 1, ['', '', '', '', 'Defense', 'Defense'], '+1 +1 +1 +1 -1 -1'),
		new cy_enchantDefaultFrame('Smith'					, 'Smith|,|匠裝|,|スミス向け', false, 'str#14 & dex#14 & negative@_atk#-7% & negative@_matk#-7% & negative@_magic_pierce#-3 & negative@_accuracy#-7', 1, ['', '', 'all', 'all', 'all', 'all'], '+2 -3 -1'),
		new cy_enchantDefaultFrame('Smith'					, '', false, 'dex#7% & dex#14 & str#11 & negative@_atk#-7% & negative@_matk#-7% & negative@_accuracy#-7', 1, ['', '', '', 'all', 'all', ''], 'stat% stat stat')
	);