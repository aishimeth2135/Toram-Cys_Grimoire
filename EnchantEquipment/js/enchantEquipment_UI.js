	
	function enchantEquip_lockedPotentialBase(DOC){
		let _mode = DOC.getAttribute('data-mode');
		if ( _mode == "0" )
		{
			DOC.setAttribute('src', 'svg/locked.svg');
			DOC.setAttribute('data-mode', 1);
			cy_enchantEquipment.potential_base_locked = true;
			DOC.className = 'locked';
		}
		else {
			DOC.setAttribute('src', 'svg/onlocked.svg');
			DOC.setAttribute('data-mode', 0);
			cy_enchantEquipment.potential_base_locked = false;
			DOC.className = '';
		}
	}
	
	function enchantEquip_showStepDetail(DOC){
		if ( DOC.getAttribute('data-mode') == "0" )
		{
			DOC.setAttribute('data-mode', 1);
			DOC.className = 'showStepDetail_cur';
		}
		else {
			DOC.setAttribute('data-mode', 0);
			DOC.className = 'showStepDetail';
		}
		enchantEquip_calcBest();
	}
	
	function enchantEquip_findLowestPotential(minSuccessRate){
		let _t = cy_enchantEquipment.abilityItem;
		for (let i=0; i<_t.length; ++i)
		{
			if (_t[i].value_setting == 0 )
			{
				showWarningMsg('不得有任一項為0。(N>0)');
				return;
			}
		}
		call_loadingPage(() => {
			cy_enchantEquipment.potential_base = 1;
			let _text = '';
			let _stepAry;
			while (true)
			{
				if ( !document.getElementById('enchantEquipment_selList').getAttribute('data-frameno') ) break;
				if ( cy_enchantEquipment.potential_base > 150 )
				{
					showWarningMsg('計算出的最低需求大於150。可能為BUG，還請通知作者。');
					return;
				}
				_stepAry = cy_enchantEquipment.best_performCalc();
				if (cy_enchantEquipment.stepCalc(_stepAry).successRate >= minSuccessRate) break;
				++cy_enchantEquipment.potential_base;
			}
			document.getElementById('enchantEquipment_showText').innerHTML = cy_enchantEquipment.stepCalc(_stepAry).text + `<div class="by">by Cy's Grimoire.</div>`;
			document.getElementById('enchantEquipment_setBasePotential').getElementsByTagName('input')[0].value = cy_enchantEquipment.potential_base;
			resetInnerLang(document.getElementById('enchantEquipment_showText'));
		}, [], 64);
	}
	
	function enchantEquipment_updateShowMeterialCost(DOC){
		let _t = document.getElementById('enchantEquipment_showMeterialCost').getElementsByClassName('_main')[0];
		if ( DOC )
		{
			if ( _t.style.display != 'block' )
			{
				_t.style.display = 'block';
				document.getElementById('enchantEquipment_showMeterialCost').setAttribute('data-mode', 1);
			}
			else {
				_t.style.display = 'none';
				document.getElementById('enchantEquipment_showMeterialCost').setAttribute('data-mode', 0);
			}
			enchantEquip_calcBest();
		}
		_t.innerHTML = cy_enchantEquipment.getMaterialCost();
		resetInnerLang(_t);
	}
	
	function enchantEquipment_selEquipFieldType(DOC){
		let _ary = DOC.parentNode.getElementsByTagName('li');
		for (let i=0; i<_ary.length; ++i)
		{
			if ( _ary[i].className.includes('_cur') )
			{
				_ary[i].className = '';
				break;
			}
		}
		DOC.className = '_cur';
		cy_enchantEquipment.equipFieldType = parseInt(DOC.getAttribute('data-typeno'));
		document.getElementById('enchantEquipment_selList').setAttribute('data-frameno', '');
		document.getElementById('enchantEquipment_showText').innerHTML = '';
		document.getElementById('enchantEquipment_showMeterialCost').getElementsByClassName('_main')[0].innerHTML = '';
		for (let i=0; i<cy_enchantEquipment.abilityItem.length; ++i)
		{
			cy_enchantEquipment.abilityItem[i].reset();
		}
		cy_enchantEquipment.curMenuNo = 0;
		enchantEquip_updateSelList();
	}
	
	function enchantEquip_setBasePotentialControl(DOC, control, set){
		let _t = "";
		switch (set)
		{
			case 'base': 		_t = cy_enchantEquipment.potential_base; break;
			case 'equipbase': 	_t = cy_enchantEquipment.potential_equipBase; break;
			case 'lv':			_t = cy_enchantEquipment.lvPotentialMax*10; break;
		}
		switch (control)
		{
			case 'onchange':
				if (DOC.value == '') DOC.value = _t;
				let _value = parseInt(DOC.value);
				switch (set)
				{
					case 'base':
						if ( _value > 300 || _value < 1 )
						{
							_value = _t;
							showWarningMsg('超出設定的範圍。(1~300)');
							DOC.value = _value;
						}
						cy_enchantEquipment.potential_base = _value;
						break;
					case 'equipbase':
						if ( _value > 300 || _value < 15 )
						{
							_value = _t;
							showWarningMsg('超出設定的範圍。(15~300)');
							DOC.value = _value;
						}
						cy_enchantEquipment.potential_equipBase = _value;
						break;
					case 'lv':
						if ( _value > 20 || _value < 10 )
						{
							_value = _t;
							showWarningMsg('超出設定的範圍。(10~20)');
							DOC.value = _value;
						}
						cy_enchantEquipment.lvPotentialMax = _value;
						DOC.previousSibling.innerHTML = 'Lv.' + _value*10;
						for (let i=0; i<cy_enchantEquipment.abilityItem.length; ++i)
						{
							let _o = cy_enchantEquipment.abilityItem[i];
							_o.setSettingValue(_o.value_setting);
							enchantEquip_updateSelList();
						}
						break;
				}
				break;
			case 'onfocus':
				DOC.select();
				DOC.setAttribute('placeholder', _t);
				break;
		}
	}
	
	function enchantEquip_selDefaultFrame(DOC){
		document.getElementById('enchantEquipment_selList').setAttribute('data-frameno', DOC.getAttribute('data-frameno'));
		let _frame = cy_enchantEquipment.enchantDefaultFrame_list[parseInt(DOC.getAttribute('data-frameno'))];
		let _frameAry = _frame.frameStr.split(/\s+&\s+/);
		for (let i=0; i<_frameAry.length; ++i)
		{
			let _cur = ( _frameAry[i].includes('@_') ) ? _frameAry[i].split('@_')[1] : _frameAry[i];
			let _itemName = _cur.split('#')[0];
			let _itemValue = _cur.split('#')[1];
			let _itemType = 1;
			if ( _itemValue.includes('%') )
			{
				_itemType = 0;
				_itemValue.replace('%', '');
			}
			_itemValue = parseInt(_itemValue);
			cy_enchantEquipment.abilityItem[i].setInit(_itemName, _itemType);
			cy_enchantEquipment.abilityItem[i].setSettingValue(_itemValue);
		}
		enchantEquip_updateSelList();
		if ( !_frame.needEquipBase )
		{
			document.getElementById('enchantEquipment_setEquipBasePotential').style.display = 'none';
			document.getElementById('enchantEquipment_defaultFrameList').style.display = 'none';
		}
		else {
			let _t = document.getElementById('enchantEquipment_setEquipBasePotential').getElementsByTagName('input')[0];
			_t.value = _frame.defaultEquipBasePotential;
			_t.onchange();
			document.getElementById('enchantEquipment_setEquipBasePotential').style.display = 'block';
			document.getElementById('enchantEquipment_defaultFrameList').style.display = 'none';
		}
		if ( !cy_enchantEquipment.potential_base_locked )
		{
			enchantEquip_findLowestPotential(100);
		}
		else {
			enchantEquip_calcBest();
		}
	}
	
	function enchantEquip_selDefaultFrameListCategory(DOC){
		let _no = document.getElementById('enchantEquipment_defaultFrameList').getAttribute('data-curscopeno');
		if (document.getElementById('enchantEquip_frameListCategory_' + _no)) document.getElementById('enchantEquip_frameListCategory_' + _no).style.display = 'none';
		_no = DOC.getAttribute('data-no');
		if (document.getElementById('enchantEquip_frameListCategory_' + _no)) document.getElementById('enchantEquip_frameListCategory_' + _no).style.display = 'block';
		document.getElementById('enchantEquipment_defaultFrameList').setAttribute('data-curscopeno', _no);
		let _liNode = DOC.parentNode.getElementsByTagName('li');
		for (let i=0; i<_liNode.length; ++i)
		{
			if ( _liNode[i].className == '_cur' )
			{
				_liNode[i].className = '';
			}
		}
		DOC.className = '_cur';
		cy_enchantEquipment.curMenuNo = _no;
	}
	
	function enchantEquip_updateDefaultFrameList(){
		if ( document.getElementById('enchantEquipment_abilityListSel').style.display == 'block' )
		{
			document.getElementById('enchantEquipment_abilityListSel').style.display = 'none';	
		}
		let _doc = document.getElementById('enchantEquipment_defaultFrameList');
		if ( _doc.style.display == 'block' )
		{
			_doc.style.display = 'none';
			return;
		}
		else _doc.style.display = 'block';
		let _html  = '<div class="_closeBtn"><span onclick="enchantEquip_updateDefaultFrameList()"><img src="svg/delete-icon_black.svg" style="height:20px;width:20px;" /></span></div>';
		
		let li_ary = [], scopeText = [], li_showName = [];
		let _t = cy_enchantEquipment.enchantDefaultFrame_list;
		for (let i=0; i<_t.length; ++i)
		{
			if ( cy_enchantEquipment.equipFieldType == _t[i].equipFieldType )
			{
				let loc = li_ary.indexOf(_t[i].category);
				if ( loc == -1 )
				{
					loc = li_ary.length;
					li_ary.push(_t[i].category);
					li_showName.push(_t[i].category_showName);
					scopeText.push('');
				}
				scopeText[loc] += `<li data-frameno="${i}" onclick="enchantEquip_selDefaultFrame(this)">${_t[i].get_show()}</li>`;
			}
		}
		let li_text = '', scope_text = '';
		for (let i=0; i<li_ary.length; ++i)
		{
			li_text += `<li data-no="${i}" onclick="enchantEquip_selDefaultFrameListCategory(this)"><a data-langtext="${li_showName[i]}"></a></li>`;
			scope_text += `<ul class="category_scope" id="enchantEquip_frameListCategory_${i}">${scopeText[i]}</ul>`;
		}
		_html += `<ul class="_head_menu">${li_text}</ul>${scope_text}`;
		_doc.innerHTML = _html;
		resetInnerLang(_doc);
		
		_doc.getElementsByClassName('_head_menu')[0].getElementsByTagName('li')[cy_enchantEquipment.curMenuNo].onclick();
	}
	
	function enchantEquip_selList_batchSelection(){
		let _doc = document.getElementById('enchantEquipment_abilityListSel');
		_doc.setAttribute('data-batch', 1);
		_doc.style.display = 'block';
		_doc.setAttribute('data-curno', 0);
	}
	
	function enchantEquip_calcBest(){
		let _t = cy_enchantEquipment.abilityItem;
		for (let i=0; i<_t.length; ++i)
		{
			if (_t[i].value_setting == 0 )
			{
				showWarningMsg('不得有任一項為0。(N>0)');
				return;
			}
		}
		let _stepAry = cy_enchantEquipment.best_performCalc();
		document.getElementById('enchantEquipment_showText').innerHTML = cy_enchantEquipment.stepCalc(_stepAry).text + `<div class="by">by Cy's Grimoire.</div>`;
		resetInnerLang(document.getElementById('enchantEquipment_showText'));
		enchantEquipment_updateShowMeterialCost();
	}
	
	function enchantEquip_updateSelList(){
		let _html = '';
		let _EAI = cy_enchantEquipment.abilityItem;	//enchant ability item
		let _frameAry = '';
		if (document.getElementById('enchantEquipment_selList').getAttribute('data-frameno')) _frameAry = cy_enchantEquipment.enchantDefaultFrame_list[parseInt(document.getElementById('enchantEquipment_selList').getAttribute('data-frameno'))].frameStr;
		if ( _frameAry != "" )
		{
			_frameAry = _frameAry.split(/\s+&\s+/);
			while ( _frameAry.length < cy_enchantEquipment.slotCount )
			{
				_frameAry.push("all@");
			}
			for (let i=0; i<_EAI.length; ++i)
			{
				let _condition = ( _frameAry[i].includes('@_') ) ? _frameAry[i].split('@_')[0] : 'none';
				let _style = '';
				switch (_condition)
				{
					case 'noItemCategory' : _style = "condition_noItemCategory"; break;
					case 'negative': _style = "condition_negative"; break;
				}
				_style = ` class="${_style}"`;
				_html += '<li>';
				_html += `<span${_style} data-no="${i}" data-condition="${_condition}" onclick="enchantEquip_openSettingAbility(this)">${_EAI[i].get_show(true)}<span class="showPotentialUnit">${_EAI[i].getPotentialUnit()}</span></span><input type="number" data-condition="${_condition}" value="${_EAI[i].value_setting}" data-no="${i}" onchange="enchantEquip_setSettingValue(this)" onfocus="enchantEquip_selListControl(this, 'onfocus')" />`;
				_html += '</li>';
			}
		}
		else {
			_html = '<div class="noSelect" onclick="enchantEquip_updateDefaultFrameList()"><div style="cursor:pointer;"><a data-langtext="Unselected Enchant Type|,|未選擇類別。<br />點此或下方的按鈕以選取。|,|強化プロパ未選択。<br />このエリア/下方のボタンをタップすると強化プロパが選択できる。"></a></div>';
		}
		document.getElementById('enchantEquipment_selList').innerHTML = _html;
		resetInnerLang(document.getElementById('enchantEquipment_selList'));
	}
	
	function enchantEquip_selListControl(DOC, control){
		switch (control)
		{
			case 'onfocus':
				DOC.placeholder = DOC.value;
				DOC.select();
				break;
		}
	}
	
	function enchantEquip_openSettingAbility(DOC){
		try {
			if ( document.getElementById('enchantEquipment_defaultFrameList').style.display == 'block' )
			{
				document.getElementById('enchantEquipment_defaultFrameList').style.display = 'none';
			}
			let _doc = document.getElementById('enchantEquipment_abilityListSel');
			if ( !DOC )
			{
				_doc.style.display = 'none';
				return;
			}
			let _defaultFrame = cy_enchantEquipment.enchantDefaultFrame_list[parseInt(document.getElementById('enchantEquipment_selList').getAttribute('data-frameno'))];
			let _no = parseInt(DOC.getAttribute('data-no'));
			if ( _defaultFrame.blockedList[_no].includes('all') ) return;
			
			let _condition = DOC.getAttribute('data-condition');
			if ( _condition == 'none' ) _condition = 'OwnCategory';
			_doc.setAttribute('data-curcondition', _condition);
			
			let _divAry = _doc.getElementsByClassName('listScope');
			for (let i=0; i<_divAry.length; ++i)
			{
				_divAry[i].style.display = 'none';
			}
			switch (_condition)
			{
				case 'all': case 'negative':
					for (let i=0; i<_divAry.length; ++i)
					{
						_divAry[i].style.display = 'block';
					}
					break;
				case 'noItemCategory':
					for (let i=0; i<_divAry.length; ++i)
					{
						let have = false;
						let _t = _divAry[i].getAttribute('data-category');
						for (let i=0; i<cy_enchantEquipment.abilityItem.length; ++i)
						{
							if ( i == _no ) continue;
							if ( _t == cy_enchantEquipment.abilityItem[i].base.category ) have = true;
						}
						if ( !have ) _divAry[i].style.display = 'block';
					}
					break;
				case 'OwnCategory':
					let _ownCategory = cy_enchantEquipment.abilityItem[_no].base.category || cy_enchantEquipment.abilityItem[_no].base;
					if ( _ownCategory == 'none' ) throw 'error';
					for (let i=0; i<_divAry.length; ++i)
					{
						if ( _divAry[i].getAttribute('data-category') == _ownCategory ) _divAry[i].style.display = 'block';
					}
					break;
			}
			for (let i=0; i<_divAry.length; ++i)
			{
				if ( _defaultFrame.blockedList[_no].includes(_divAry[i].getAttribute('data-category')) ) _divAry[i].style.display = 'none';
				switch (cy_enchantEquipment.abilityItem[_no].base.exception)
				{
					case 'WeaponOnly':
						if (cy_enchantEquipment.equipFieldType != 0) _divAry[i].style.display = 'none';
						break;
				}
			}
			
			_doc.setAttribute('data-curno', _no);
			_doc.style.display = ( _doc.style.display != 'block' ) ? 'block' : 'none';
			_doc.setAttribute('data-batch', 0);
		}
		catch(e) {
			console.log(e);
			showWarningMsg('Error. #enchantEquip_openSettingAbility');
		}
	}
	
	function enchantEquip_setSettingValue(DOC){
		let _no = parseInt(DOC.getAttribute('data-no'));
		let _abilityItem = cy_enchantEquipment.abilityItem[_no];
		if ( _abilityItem.base == 'none' )
		{
			DOC.value = 0;
			return;
		}
		if ( DOC.value == '' ) DOC.value = _abilityItem.value_setting;
		let _value = parseInt(DOC.value);
		let _potentialUnit = _abilityItem.getPotentialUnit(false);
		
		let _condition = DOC.getAttribute('data-condition');
		
		if ( _condition == 'negative' )
		{
			if ( _potentialUnit*_value > 0 )
			{
				_value = 0;
				DOC.value = 0;
				showWarningMsg('此為退潛欄位。');
			}
		}
		else {
			if ( _potentialUnit*_value < 0 )
			{
				_value = 0;
				DOC.value = 0;
				showWarningMsg('此為正屬欄位。');
			}
		}
		if ( _abilityItem.base.name.includes('@elements') ) _potentialUnit = cy_enchantEquipment.potentialMax-1;
		if ( _potentialUnit*_value > cy_enchantEquipment.potentialMax || _value > cy_enchantEquipment.lvPotentialMax || ( _abilityItem.base.name.includes('@elements') && _value > 1 ) )
		{
			_value = Math.min(parseInt(cy_enchantEquipment.potentialMax/_potentialUnit), cy_enchantEquipment.lvPotentialMax);
			DOC.value = _value;
			showWarningMsg('數值超出上限。');
		}
		if ( _potentialUnit*_value < -cy_enchantEquipment.potentialMax || _value < -cy_enchantEquipment.lvPotentialMax || ( _abilityItem.base.name.includes('@elements') && _value < 0 ) )
		{
			_value = Math.max(Math.ceil(-1*cy_enchantEquipment.potentialMax/_potentialUnit), -cy_enchantEquipment.lvPotentialMax);
			DOC.value = _value;
			showWarningMsg('數值小於下限。');
		}
		_abilityItem.setSettingValue(_value);
		let _doc = DOC.previousSibling;
		_doc.innerHTML = _abilityItem.get_show(true) + `<span class="showPotentialUnit">${_abilityItem.getPotentialUnit()}</span>`;
		resetInnerLang(_doc);
	}
	
	function update_enchantEquipAbilityListSel(){
		let _cnt = 0, _curCategory = '', __html = '';
		let _html = `<div><span class="closeBtn_1" onclick="enchantEquip_openSettingAbility()"><img src="svg/delete-icon_black.svg" style="height:20px;width:20px;" /></span></div>`;
		let _itemList = cy_enchantEquipment.itemList;
		for (let i=0; i<_itemList.length; ++i)
		{
			if ( _curCategory != _itemList[i].category )
			{
				_curCategory = _itemList[i].category;
				if ( i != 0 ) _html += '<ul class="categoryItemList">' + __html + '</ul></div>';
				__html = '';
				_html += `<div class="listScope" data-category="${_curCategory}"><div class="categoryTitle"><a data-langtext="${cy_enchantEquipment.categoryList_name[_cnt]}"></a></div><hr class="categoryBottom_hr" />`;
				++_cnt;
			}
			
			let getHtml = function(_type){
				let _text = "";
				let _rate = 1;
				if ( cy_enchantEquipment.doublePotentialList[cy_enchantEquipment.equipFieldType].includes(_itemList[i].name) ) _rate = 2;
				_text += `<li data-listno="${i}" data-type="${_type}" onclick="enchantEquip_setSettingAbility(this)">`;
				_text += `<a data-langtext="${_itemList[i].showName}"></a><a data-langtext="${( _itemList[i].unit != 'none' && _type != 0 ) ?_itemList[i].unit : ''}"></a>${(_type == 0) ? '%' : ''}`;
				_text += '<span class="showDetail"><table><tbody>';
				let _potentialUnit = (_itemList[i].potentialUnit[_type] ||_itemList[i].potentialUnit)*_rate;
				let _potentialUnit_noRate = (_itemList[i].potentialUnit[_type] ||_itemList[i].potentialUnit);
				_text += `<tr><td style="text-align:right;border-right:1.2px rgb(112, 82, 68) solid;padding-right:0.3rem;"><a data-langtext="Potential|,|單位耗潛|,|潜在力"></a></td><td style="padding-left:0.3rem;">${_potentialUnit}</tr></td>`;
				_text += `<tr><td style="text-align:right;border-right:1.2px rgb(112, 82, 68) solid;padding-right:0.3rem;"><a data-langtext="PT Consumption|,|基礎素材耗量|,|基礎消費素材"></a></td><td style="padding-left:0.3rem;">${cy_enchantEquipment.getMaterialCostBase(_potentialUnit_noRate, _itemList[i].name)}pt</tr></td>`;
				_text += `</tbody></table></span></li>`;
				return _text;
			}
			__html += getHtml(1);
			if ( Array.isArray(_itemList[i].potentialUnit) ) __html += getHtml(0);
		}
		_html += '<ul class="categoryItemList">' + __html + '</ul>';
		document.getElementById('enchantEquipment_abilityListSel').innerHTML = _html;
		resetInnerLang(document.getElementById('enchantEquipment_abilityListSel'));
	}
	
	function enchantEquip_setSettingAbility(DOC){
		let _doc = document.getElementById('enchantEquipment_abilityListSel');
		let _curno = parseInt(_doc.getAttribute('data-curno'));
		
		let _listname = cy_enchantEquipment.itemList[parseInt(DOC.getAttribute('data-listno'))].name;
		let _type = parseInt(DOC.getAttribute('data-type'));
		
		let _abilityItem = cy_enchantEquipment.abilityItem;
		if ( cy_enchantEquipment.findItemByName(_listname, _type) )
		{
			showWarningMsg('已存在的能力。');
			return;
		}
		if ( _abilityItem[_curno].base.name.includes('@') )
		{
			if ( cy_enchantEquipment.findItemByName(_listname, _type, true, _curno) )
			{
				showWarningMsg('該類別只能選擇一個。');
				return;
			}
		}
		
		if ( parseInt(_doc.getAttribute('data-batch')) == 1 )
		{
			if ( !_abilityItem[_curno+1] )
			{
				_doc.setAttribute('data-batch', 0);
				_doc.style.display = 'none';
				_doc.setAttribute('data-curno', 0);
			}
			_abilityItem[_curno].setInit(_listname, _type);
			let _value;
			if ( _doc.getAttribute('data-curcondition') != 'negative' )
			{
				_value = Math.min(parseInt(cy_enchantEquipment.potentialMax/_abilityItem[_curno].getPotentialUnit(false)), cy_enchantEquipment.lvPotentialMax);
			}
			else {
				_value = Math.max(Math.ceil(-1*cy_enchantEquipment.potentialMax/_abilityItem[_curno].getPotentialUnit(false)), -1*cy_enchantEquipment.lvPotentialMax);
			}
			if ( _abilityItem[_curno].base.name.includes('elements@') ) _value = 1;
			_abilityItem[_curno].setSettingValue(_value);
			_doc.setAttribute('data-curno', _curno + 1);
		}
		else {
			_doc.style.display = 'none';
			_abilityItem[_curno].setInit(_listname, _type);
			let _value;
			if ( _doc.getAttribute('data-curcondition') != 'negative' )
			{
				_value = Math.min(parseInt(cy_enchantEquipment.potentialMax/_abilityItem[_curno].getPotentialUnit(false)), cy_enchantEquipment.lvPotentialMax);
			}
			else {
				_value = Math.max(Math.ceil(-1*cy_enchantEquipment.potentialMax/_abilityItem[_curno].getPotentialUnit(false)), -1*cy_enchantEquipment.lvPotentialMax);
			}
			if ( _abilityItem[_curno].base.name.includes('@elements') ) _value = 1;
			_abilityItem[_curno].setSettingValue(_value);
		}
		enchantEquip_updateSelList();
	}