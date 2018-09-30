	
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
	}
	
	function enchantEquip_setBasePotentialValueControl(DOC, control){
		switch (control)
		{
			case 'onchange':
				if (DOC.value == '') DOC.value = cy_enchantEquipment.potentialValue_base;
				cy_enchantEquipment.potentialValue_base = parseInt(DOC.value);
				break;
			case 'onfocus':
				DOC.select();
				DOC.setAttribute('placeholder', cy_enchantEquipment.potentialValue_base);
				break;
		}
	}
	
	function enchantEquip_selDefaultFrame(DOC){
		document.getElementById('enchantEquipment_selList').setAttribute('data-frameno', DOC.getAttribute('data-frameno'));
		_frameAry = cy_enchantEquipment.enchantDefaultFrame_list[parseInt(DOC.getAttribute('data-frameno'))].frameStr.split(/\s+&\s+/);
		for (let i=0; i<_frameAry.length; ++i)
		{
			let _cur = ( _frameAry[i].includes('@') ) ? _frameAry[i].split('@')[1] : _frameAry[i];
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
		document.getElementById('enchantEquipment_defaultFrameList').style.display = 'none';
	}
	function enchantEquip_updateDefaultFrameList(){
		let _doc = document.getElementById('enchantEquipment_defaultFrameList');
		if ( _doc.style.display == 'block' )
		{
			_doc.style.display = 'none';
			return;
		}
		else _doc.style.display = 'block';
		let _html  = '<div><span class="closeBtn_1" onclick="enchantEquip_updateDefaultFrameList()"><img src="svg/delete-icon_black.svg" style="height:20px;width:20px;" /></span></div>';
		let _t = cy_enchantEquipment.enchantDefaultFrame_list;
		for (let i=0; i<_t.length; ++i)
		{
			if ( cy_enchantEquipment.equipFieldType == _t[i].equipFieldType ) _html += `<li data-frameno="${i}" onclick="enchantEquip_selDefaultFrame(this)">${_t[i].get_show()}</li>`;
		}
		_doc.innerHTML = _html;
		resetInnerLang(_doc);
	}
	
	function enchantEquip_selList_batchSelection(){
		let _doc = document.getElementById('enchantEquipment_abilityListSel');
		_doc.setAttribute('data-batch', 1);
		_doc.style.display = 'block';
		_doc.setAttribute('data-curno', 0);
	}
	
	function enchantEquip_calcBest(){
		let _stepAry = cy_enchantEquipment.best_performCalc();
		cy_enchantEquipment.stepCalc(_stepAry);
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
				let _condition = ( _frameAry[i].includes('@') ) ? _frameAry[i].split('@')[0] : 'none';
				let _style = '';
				switch (_condition)
				{
					case 'all' : _style = "condition_all"; break;
					case 'negative': _style = "condition_negative"; break;
				}
				_style = ` class="${_style}"`;
				_html += '<li>';
				_html += `<span${_style} data-no="${i}" data-condition="${_condition}" onclick="enchantEquip_openSettingAbility(this)">${_EAI[i].get_show(true)}</span><input type="number" data-condition="${_condition}" value="${_EAI[i].value_setting}" data-no="${i}" onchange="enchantEquip_setSettingValue(this)" onfocus="enchantEquip_selListControl(this, 'onfocus')" />`;
				_html += '</li>';
			}
		}
		else {
			_html = '<a data-langtext="未選擇類別"></a>';
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
			let _doc = document.getElementById('enchantEquipment_abilityListSel');
			if ( !DOC )
			{
				_doc.style.display = 'none';
				return;
			}
			let _no = parseInt(DOC.getAttribute('data-no'));
			
			let _condition = DOC.getAttribute('data-condition');
			if ( _condition == 'none' ) _condition = 'OwnCategory';
			
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
				case 'OwnCategory':
					let _ownCategory = cy_enchantEquipment.abilityItem[_no].base.category || cy_enchantEquipment.abilityItem[_no].base;
					if ( _ownCategory == 'none' ) throw 'error';
					for (let i=0; i<_divAry.length; ++i)
					{
						if ( _divAry[i].getAttribute('data-category') == _ownCategory ) _divAry[i].style.display = 'block';
					}
					break;
			}
			let _defaultFrame = cy_enchantEquipment.enchantDefaultFrame_list[parseInt(document.getElementById('enchantEquipment_selList').getAttribute('data-frameno'))];
			for (let i=0; i<_divAry.length; ++i)
			{
				if ( _defaultFrame.blockedList[_no].includes(_divAry[i].getAttribute('data-category')) ) _divAry[i].style.display = 'none';
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
		if ( _potentialUnit*_value > cy_enchantEquipment.potentialMax )
		{
			_value = parseInt(cy_enchantEquipment.potentialMax/_potentialUnit);
			DOC.value = parseInt(cy_enchantEquipment.potentialMax/_potentialUnit);
			showWarningMsg('數值超出上限。');
		}
		if ( _potentialUnit*_value < -cy_enchantEquipment.potentialMax )
		{
			_value = Math.ceil(cy_enchantEquipment.potentialMax/_potentialUnit);
			DOC.value = Math.ceil(cy_enchantEquipment.potentialMax/_potentialUnit);
			showWarningMsg('數值小於下限。');
		}
		_abilityItem.setSettingValue(_value);
		let _doc = DOC.previousSibling;
		let _item = cy_enchantEquipment.abilityItem[parseInt(_doc.getAttribute('data-no'))];
		_doc.innerHTML = _item.get_show(true);
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
			__html += `<li data-listno="${i}" data-type="1" onclick="enchantEquip_setSettingAbility(this)"><a data-langtext="${_itemList[i].showName}"></a><a data-langtext="${_itemList[i].unit}"></a></li>`;
			if ( Array.isArray(_itemList[i].potentialUnit) )  __html += `<li data-listno="${i}" data-type="0" onclick="enchantEquip_setSettingAbility(this)"><a data-langtext="${_itemList[i].showName}"></a>%</li>`;
		}
		_html += '<ul class="categoryItemList">' + __html + '</ul>';
		document.getElementById('enchantEquipment_abilityListSel').innerHTML = _html;
		resetInnerLang(document.getElementById('enchantEquipment_abilityListSel'));
	}
	
	function enchantEquip_setSettingAbility(DOC){
		let _doc = document.getElementById('enchantEquipment_abilityListSel');
		
		let _listname = cy_enchantEquipment.itemList[parseInt(DOC.getAttribute('data-listno'))].name;
		let _type = parseInt(DOC.getAttribute('data-type'));
		
		if ( cy_enchantEquipment.findItemByName(_listname, _type) )
		{
			showWarningMsg('已存在的能力。');
			return;
		}
		
		let _curno = parseInt(_doc.getAttribute('data-curno'));
		if ( parseInt(_doc.getAttribute('data-batch')) == 1 )
		{
			if ( !cy_enchantEquipment.abilityItem[_curno+1] )
			{
				_doc.setAttribute('data-batch', 0);
				_doc.style.display = 'none';
				_doc.setAttribute('data-curno', 0);
			}
			cy_enchantEquipment.abilityItem[_curno].setInit(_listname, _type);
			_doc.setAttribute('data-curno', _curno + 1);
		}
		else {
			_doc.style.display = 'none';
			cy_enchantEquipment.abilityItem[_curno].setInit(_listname, _type);
		}
		enchantEquip_updateSelList();
	}