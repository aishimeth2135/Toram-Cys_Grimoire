	
	function sel_curEquipField(temp){
		let t_fieldNo = parseInt( temp.getAttribute('data-fieldno') );
		let t_equipfield = cy_character.charaEquipments[t_fieldNo];
		let fieldValueTitle = '';
		
		switch (t_equipfield.type)
		{
			case 'shield': case 'bodyArmor': case 'normalA': case 'additional': case 'special':
				fieldValueTitle = 'DEF';
				break;
			default:
				fieldValueTitle = 'ATK';
		}
		
		let Ttext = '';
		Ttext += '<div style="float:left;width:22rem;" >';
		Ttext += `<div class="equipField_mainBlock_1"><div class="equipField_blockUnit"><input value="${t_equipfield.name}" type="text" class="equipField_name" data-fieldno="${t_fieldNo}" onchange="set_equipFieldProp(this, 'name')" placeholder="輸入名稱..." /></div><br />`;
		Ttext += `<div class="equipField_blockUnit"><span class="equipField_textTitle_1">${fieldValueTitle}</span><input value="${t_equipfield.fieldValue}" type="number" class="equipField_fieldValue" data-fieldno="${t_fieldNo}" onchange="set_equipFieldProp(this, 'fieldValue')" placeholder="${t_equipfield.fieldValue}" /></div>`;
		if ( t_fieldNo != 4 )	//特殊
		{
			Ttext += `<div class="equipField_blockUnit"><span class="equipField_textTitle_1">精鍊值</span><input value="${t_equipfield.refining}" type="number" class="equipField_refining" data-fieldno="${t_fieldNo}" onchange="set_equipFieldProp(this, 'refining')" placeholder="${t_equipfield.refining}" /></div>`;
		}
		if ( t_fieldNo == 0 || t_equipfield.type == 'dagger' || t_equipfield.type == 'arrow' )	//主、副手
		{
			Ttext += `<div class="equipField_blockUnit"><span class="equipField_textTitle_1">穩定率</span><input value="${t_equipfield.stability}" type="number" class="equipField_stability" data-fieldno="${t_fieldNo}" onchange="set_equipFieldProp(this, 'stability')" placeholder="${t_equipfield.stability}" /></div>`;
		}
		Ttext += `</div>`;
		Ttext += `<ul class="equipField_fieldAbilitys_menu"><li onclick="open_charaSimu_abilityListMain(0)">新增能力</li><span>裝備能力</span></ul><div class="equipField_mainBlock_2"><ul id="equipField_fieldAbilitys_main"></ul></div>`;
		if ( t_fieldNo != 1 )	//副手
		{
			Ttext += `<ul class="equipField_fieldAbilitys_menu"><li onclick="open_charaSimu_abilityListMain(1)">新增能力</li><span><img width="28" height="28" src="svg/xtal-icon_0.svg" /></span></ul><div class="equipField_mainBlock_2"><ul id="equipField_fieldAbilitys_xtal1"></ul></div>`;
			Ttext += `<ul class="equipField_fieldAbilitys_menu"><li onclick="open_charaSimu_abilityListMain(2)">新增能力</li><span><img width="28" height="28" src="svg/xtal-icon_0.svg" /></span></ul><div class="equipField_mainBlock_2"><ul id="equipField_fieldAbilitys_xtal2"></ul></div>`;
		}
		Ttext += '</div>';
		Ttext += `<div class="equipField_mainBlock_3"><div id="CharaSimu_setEquipAbility_showDetail">更改影響：</div></div>`;
		/* if ( document.getElementById('CharaSimu_setEquipAbility').style.display != 'block' )
		{
			document.getElementById('CharaSimu_setEquipAbility').style.display = 'block';
		} */
		
		document.getElementById('CharaSimu_setEquipBase').innerHTML = Ttext;
		document.getElementById('CharaSimu_setEquipAbility').setAttribute('data-fieldno', t_fieldNo);
	}
	
	function set_equipFieldProp(temp, varName){
		let t_fieldNo = parseInt( temp.getAttribute('data-fieldno') );
		let t_equipfield = cy_character.charaEquipments[t_fieldNo];
		
		switch (varName)
		{
			case 'name':	t_equipfield.name = temp.value; break;
			case 'fieldValue':
				temp.value = parseInt(temp.value);
				temp.value = ( temp.value < 0 || temp.value > 999 || temp.value == '') ? t_equipfield.fieldValue : temp.value;
				t_equipfield.fieldValue = temp.value;
				temp.placeholder = t_equipfield.fieldValue ;
				break;
			case 'refining':
				temp.value = parseInt(temp.value);
				temp.value = ( temp.value < 0 || temp.value > 15 || temp.value == '') ? t_equipfield.refining : temp.value;
				t_equipfield.refining = temp.value;
				temp.placeholder = t_equipfield.refining;
				break;
			case 'stability':
				temp.value = parseInt(temp.value);
				temp.value = ( temp.value < 0 || temp.value > 100 || temp.value == '') ? t_equipfield.stability : temp.value;
				t_equipfield.stability = temp.value;
				temp.placeholder = t_equipfield.stability;
				break;
			default: console.log('error: set_equipFieldProp .');
		}
	}
	
	function show_charaStats(){
		
	}
	function open_charaSimu_abilityListMain(setNo){
		let doc = document.getElementById('CharaSimu_setEquipAbility');
		doc.style.display = (doc.style.display != 'block') ? 'block' : 'none';
		document.getElementById('CharaSimu_setEquipAbility').setAttribute('data-setno', String(setNo));	//0: 基底, 1:緞晶1, 2:緞晶2
	}
	function addEquipFieldAbliity(temp){
		let doc = document.getElementById('CharaSimu_setEquipAbility');
		let t_setNo = parseInt(doc.getAttribute('data-setno'));
		if ( t_setNo == -1 ) return;
		let t_fieldNo = parseInt(doc.getAttribute('data-fieldno'));
		
		let t_abilityNo = parseInt(temp.getAttribute('data-abilityno'));
		let t_baseName = cy_character.statList[t_abilityNo].baseName;
		let t_type = parseInt(temp.getAttribute('data-type'));
		
		let T_obj;
		switch (t_setNo)
		{
			case 0: T_obj = cy_character.charaEquipments[t_fieldNo].fieldAbilitys; break;
			case 1: 
			case 2: T_obj = cy_character.charaEquipments[t_fieldNo].xtals[t_setNo-1]; break;
			default: console.log('error: addEquipFieldAbliity.'); return;
		}
		for (let i=0; i<T_obj.ability.length; ++i)
		{
			if ( T_obj.ability[i].base == '' )
			{
				T_obj.ability[i].setInit(t_baseName, t_type);
				break;
			}
		}
		updateUI_equipFieldAbility(t_fieldNo, t_setNo);
	}
	function updateUI_equipFieldAbility(fieldNo, setNo){
		let T_obj;
		let doc;
		switch (setNo)
		{
			case 0:
				doc = document.getElementById('equipField_fieldAbilitys_main');
				T_obj = cy_character.charaEquipments[fieldNo].fieldAbilitys;
				break;
			case 1: case 2:
				doc = document.getElementById('equipField_fieldAbilitys_xtal' + String(setNo));
				T_obj = cy_character.charaEquipments[fieldNo].xtals[setNo-1];
				break;
			default: console.log('error: updateUI_equipFieldAbility.'); return;
		}
		
		let Ttext = '';
		let _sign = '';
		for (let i=0; i<T_obj.ability.length; ++i)
		{
			if ( T_obj.ability[i].base != '' )
			{
				_sign = (T_obj.ability[i].value >= 0) ? '+' : '';
				Ttext += `<li id="charaSimu_setAbilityValueInput_${fieldNo}_${setNo}_${i}" onclick="setEquipFieldAbliity(this)">${T_obj.ability[i].base.statName}${_sign}${T_obj.ability[i].value}</li>`;
			}
		}
		doc.innerHTML = Ttext;
	}
	function setEquipFieldAbliity(temp){
		let _regObj = '';
		if ( temp.id.match(new RegExp("._(\\d+)_(\\d+)_(\\d+)")) )
		{
			_regObj = {
				exp: RegExp['$&'],
				fieldNo: RegExp.$1,
				setNo: RegExp.$2,
				no: RegExp.$3
			};
		}
		let t_no = parseInt(_regObj.no);
		let t_setNo = parseInt(_regObj.setNo);
		let t_fieldNo = parseInt(_regObj.fieldNo);
		
		switch (t_setNo)
		{
			case 0: T_obj = cy_character.charaEquipments[t_fieldNo].fieldAbilitys.ability[t_no]; break;
			case 1: 
			case 2: T_obj = cy_character.charaEquipments[t_fieldNo].xtals[t_setNo-1].ability[t_no]; break;
			default: console.log('error: setEquipFieldAbliity.'); return;
		}
		
		let _sign = (T_obj.value >= 0) ? '+' : '';
		temp.innerHTML = `${T_obj.base.statName}${_sign}<input value="" /><a data-fatherid="${temp.id}" onclick="confirm_setEquipFieldAbliity(this)">確認</a><a data-fatherid="${temp.id}" onclick="cancle_setEquipFieldAbliity(this)">取消</a>`;
		temp.getElementsByTagName('input')[0].focus();
	 }
	 function confirm_setEquipFieldAbliity(temp){
		let _regObj = '';
		if ( temp.getAttribute('data-fatherid').match(new RegExp("._(\\d+)_(\\d+)_(\\d+)")) )
		{
			_regObj = {
				exp: RegExp['$&'],
				fieldNo: RegExp.$1,
				setNo: RegExp.$2,
				no: RegExp.$3
			};
		}
		let setValue = parseInt(document.getElementById(temp.getAttribute('data-fatherid')).getElementsByTagName('input')[0].value);
		let t_no = parseInt(_regObj.no);
		let t_setNo = parseInt(_regObj.setNo);
		let t_fieldNo = parseInt(_regObj.fieldNo);
		
		switch (t_setNo)
		{
			case 0: T_obj = cy_character.charaEquipments[t_fieldNo].fieldAbilitys.ability[t_no]; break;
			case 1: 
			case 2: T_obj = cy_character.charaEquipments[t_fieldNo].xtals[t_setNo-1].ability[t_no]; break;
			default: console.log('error: setEquipFieldAbliity.'); return;
		}
		
		T_obj.removeValue();
		T_obj.addValue(setValue);
		updateUI_equipFieldAbility(t_fieldNo, t_setNo);
	 }
	 function cancle_setEquipFieldAbliity(temp){
		let _regObj = '';
		if ( temp.getAttribute('data-fatherid').match(new RegExp("._(\\d+)_(\\d+)_(\\d+)")) )
		{
			_regObj = {
				exp: RegExp['$&'],
				fieldNo: RegExp.$1,
				setNo: RegExp.$2,
				no: RegExp.$3
			};
		}
		updateUI_equipFieldAbility(parseInt(_regObj.fieldNo), parseInt(_regObj.setNo));
	 }
	
	function update_charaSimu_addAbilityList(){
		//0: rate, 1:constant
		let Ttext = '';
		for (let i=0; i<cy_character.statList.length; ++i)
		{
			let T_obj = cy_character.statList[i];
			Ttext += `<li data-abilityno="${i}" data-type="1" onclick="addEquipFieldAbliity(this)">${T_obj.statName+T_obj.unit}</li>`;
			if ( T_obj.haveRate )
			{
				Ttext += `<li data-abilityno="${i}" data-type="0" onclick="addEquipFieldAbliity(this)">${T_obj.statName}%</li>`;
			}
		}
		document.getElementById('CharaSimu_setEquipAbility_abilityList').innerHTML = Ttext;
	}