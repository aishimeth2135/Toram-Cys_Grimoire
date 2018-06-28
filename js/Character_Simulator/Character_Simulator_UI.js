	
	function charaSimu_openSavingSystem(){
		document.getElementById('charaSimu_savingSystem_site').style.display = 'block';
		document.getElementById('CharaSimu_setEquipShow').innerHTML = '';
		document.getElementById('CharaSimu_setEquipBase').innerHTML = '';
	}
	
	function charaSimu_controlSavingSystem(inst){
		let doc = document.getElementById('charaSimu_savingSystem_site').getElementsByTagName('input')[0];
		switch (inst)
		{
			case 'save':
				doc.value = cy_character.general_saveCode();
				break;
			case 'load':
				cy_character.loading_saveCode(doc.value);
			case 'copy':
				doc.select();
				document.execCommand('copy');
				break;
		}
	}
	
	function sel_curEquipField(temp){
		let t_fieldNo = parseInt( temp.getAttribute('data-fieldno') );
		let t_equipfield = cy_character.charaEquipments[t_fieldNo];
		
		let Ttext = `<div class="charaSimu_switchMode"><span data-fieldno="${t_fieldNo}" onclick="set_equipFieldAbility(this)">設定裝備能力</span></div>`;
		
		if ( (t_fieldNo == 0 && t_equipfield.type == 9) || (t_fieldNo == 1 && t_equipfield.type == 6) || (t_fieldNo == 2 && t_equipfield.type == 3))
		{
			Ttext += '無裝備，請點選右上角設定裝備能力。';
			document.getElementById('CharaSimu_setEquipShow').innerHTML = Ttext;
			document.getElementById('CharaSimu_setEquipBase').innerHTML = '';
			return;
		}
		
		Ttext += '<div>';
		
		let fieldValueTitle = '';
		switch (t_equipfield)
		{
			case 0: fieldValueTitle = 'ATK'; break;
			case 1:
				fieldValueTitle = 'ATK';
				if (t_equipfield.type != 1) break; 
			case 2: case 3: case 4:
				fieldValueTitle = 'DEF';
				break;
		}
		let t_armsTypeName = '';
		switch (t_fieldNo)
		{
			case 0: t_armsTypeName = cy_character.allWeapType[t_equipfield.type]; break;
			case 1: t_armsTypeName = cy_character.allAuType[t_equipfield.type]; break;
			case 2: t_armsTypeName = cy_character.allBodyType[t_equipfield.type]; break;
			case 3:
				switch (getCur_languageNo())
				{
					case 0: t_armsTypeName = 'Additional Gear'; break;
					case 1: t_armsTypeName = '追加裝備'; break;
					case 2: t_armsTypeName = 'Additional Gear'; break;
				}
				break;
			case 4:
				switch (getCur_languageNo())
				{
					case 0: t_armsTypeName = 'Special Gear'; break;
					case 1: t_armsTypeName = '特殊裝備'; break;
					case 2: t_armsTypeName = 'Special Gear'; break;
				}
				break;
		}
		let refining_ary = ['E', 'D', 'C', 'B', 'A', 'S'];
		let t_refining = (t_equipfield.refining >= 10) ? refining_ary[t_equipfield.refining-10] : t_equipfield.refining;
		
		Ttext += `${t_equipfield.name}+${t_refining}<br />【${t_armsTypeName}】${fieldValueTitle}：${t_equipfield.fieldValue}`;
		let T_obj = t_equipfield.fieldAbilitys.ability;
		
		Ttext += '<div class="charaSimu_showEquipFieldAbilitys">';
		for (let i=0; i<T_obj.length; ++i)
		{
			if (T_obj[i].base == '') continue;
			let _unit = ( T_obj[i].abilityType == 0 ) ? '%' : '';
			let _sign = (T_obj[i].value >= 0) ? '+' : '';
			Ttext += `<a>${T_obj[i].base.statName}${_sign}${T_obj[i].value}${_unit}${T_obj[i].base.unit}</a>`;
		}			
		Ttext += '</div>';
		
		
		if ( T_obj = t_equipfield.xtals.length != 0)
		{
			T_obj = t_equipfield.xtals[0];
			Ttext += '<div class="charaSimu_showEquipFieldAbilitys">';
			for (let i=0; i<T_obj.length; ++i)
			{
				if (T_obj[i].base == '') continue;
				let _unit = ( T_obj[i].abilityType == 0 ) ? '%' : '';
				let _sign = (T_obj[i].value >= 0) ? '+' : '';
				Ttext += `<a>${T_obj[i].base.statName}${_sign}${T_obj[i].value}${_unit}${T_obj[i].base.unit}</a>`;
			}			
			Ttext += '</div>';
			
			T_obj = t_equipfield.xtals[1];
			Ttext += '<div class="charaSimu_showEquipFieldAbilitys">';
			for (let i=0; i<T_obj.length; ++i)
			{
				if (T_obj[i].base == '') continue;
				let _unit = ( T_obj[i].abilityType == 0 ) ? '%' : '';
				let _sign = (T_obj[i].value >= 0) ? '+' : '';
				Ttext += `<a>${T_obj[i].base.statName}${_sign}${T_obj[i].value}${_unit}${T_obj[i].base.unit}</a>`;
			}			
			Ttext += '</div>';
		}
		
		document.getElementById('charaSimu_savingSystem_site').style.display = 'none';
		document.getElementById('CharaSimu_setEquipShow').innerHTML = Ttext;
		document.getElementById('CharaSimu_setEquipBase').innerHTML = '';
	}
	
	function set_equipFieldAbility(temp){
		let WeapArms_map = cy_character.weap_map;
		let AuArms_map = cy_character.au_map;
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
		
		let tAry_equipField_type = [];
		let typeAry = [];
		switch( t_fieldNo )
		{
			case 0: tAry_equipField_type = cy_character.allWeapType; break;
			case 1:
				switch ( cy_character.charaEquipments[0].type )
				{
					case 0: typeAry = [0, 1, 2, 3, 4, 6, 7];
						break;
					case 1: typeAry = [6];
						break;
					case 2: typeAry = [2, 5, 6];
						break;
					case 3: typeAry = [0, 1, 2, 3, 4, 6];
						break;
					case 4: typeAry = [0, 1, 2, 4, 6];
						break;
					case 5: typeAry = [6];
						break;
					case 6: typeAry = [0, 1, 2, 3, 6];
						break;
					case 7: typeAry = [0, 2, 6];
						break;
					case 8: typeAry = [0, 6];
						break;
					case 9: typeAry = [0, 1, 2, 3, 4, 5, 6];
						break;
					default: /* console.log('error: sel_curEquipField'); */ return;
				}
				for (let i=0; i<typeAry.length; ++i)
				{
					tAry_equipField_type.push(cy_character.allAuType[typeAry[i]]);
				}
				break;
			case 2: tAry_equipField_type = cy_character.allBodyType; break;
		}
		
		let Ttext = `<div class="charaSimu_switchMode"><span data-fieldno="${t_fieldNo}" onclick="sel_curEquipField(this)">&nbsp;&gt;Back</span></div>`;
		Ttext += '<div style="float:left;width:22rem;" >';
		Ttext += `<div class="equipField_mainBlock_1"><div class="equipField_blockUnit"><input value="${t_equipfield.name}" type="text" class="equipField_name" data-fieldno="${t_fieldNo}" onchange="set_equipFieldProp(this, 'name')" placeholder="輸入名稱..." /></div><br />`;
		Ttext += `<div class="equipField_blockUnit"><span class="equipField_textTitle_1">${fieldValueTitle}</span><input value="${t_equipfield.fieldValue}" type="number" class="equipField_fieldValue" data-fieldno="${t_fieldNo}" onchange="set_equipFieldProp(this, 'fieldValue')" placeholder="${t_equipfield.fieldValue}" /></div>`;
		if ( t_fieldNo != 4 )	//特殊
		{
			Ttext += `<div class="equipField_blockUnit"><span class="equipField_textTitle_1">精鍊值</span><input value="${t_equipfield.refining}" type="number" class="equipField_refining" data-fieldno="${t_fieldNo}" onchange="set_equipFieldProp(this, 'refining')" placeholder="${t_equipfield.refining}" /></div>`;
		}
		if ( t_fieldNo == 0 || ( t_fieldNo == 1 && t_equipfield.type == AuArms_map['Dagger']) || ( t_fieldNo == 1 && t_equipfield.type == AuArms_map['Arrow']) )	//主、副手
		{
			Ttext += `<div class="equipField_blockUnit"><span class="equipField_textTitle_1">穩定率</span><input value="${t_equipfield.stability}" type="number" class="equipField_stability" data-fieldno="${t_fieldNo}" onchange="set_equipFieldProp(this, 'stability')" placeholder="${t_equipfield.stability}" />%</div>`;
		}
		Ttext += `</div>`;
		if ( tAry_equipField_type.length != 0 )
		{
			Ttext += `<ul class="equipField_equipTypeList" id="equipField_equipTypeList_${t_fieldNo}">`;
			for (let i=0; i<tAry_equipField_type.length; ++i)
			{
				let T = i;
				if ( typeAry.length != 0 ) T = typeAry[i];
				let _className = ( T == t_equipfield.type ) ? 'class="equipField_equipTypeList_li_cur"' : '';
				Ttext += `<li ${_className} onclick="charaSimu_selEquipType(this)" data-fieldno="${t_fieldNo}" data-typeno="${T}">${tAry_equipField_type[i]}</li>`;
			}
			Ttext += '</ul>';
		}
		Ttext += `<ul class="equipField_fieldAbilitys_menu"><li onclick="open_charaSimu_abilityListMain(0)">新增能力</li><li id="charaSimu_removeAbilityMode_0" onclick="charaSimu_removeAbilityMode(this)">移除模式</li><span>裝備能力</span></ul><div class="equipField_mainBlock_2"><ul id="equipField_fieldAbilitys_main"></ul></div>`;
		if ( t_fieldNo != 1 )	//副手
		{
			Ttext += `<div class="equipField_blockUnit"><input value="${t_equipfield.xtalNames[0]}" type="text" class="equipField_name" data-fieldno="${t_fieldNo}" onchange="set_equipFieldProp(this, 'xtalName1')" placeholder="Xtal name..." /></div><ul class="equipField_fieldAbilitys_menu"><li onclick="open_charaSimu_abilityListMain(1)">新增能力</li><li id="charaSimu_removeAbilityMode_1" onclick="charaSimu_removeAbilityMode(this)">移除模式</li><span><img width="28" height="28" src="svg/xtal-icon_0.svg" /></span></ul><div class="equipField_mainBlock_2"><ul id="equipField_fieldAbilitys_xtal1"></ul></div>`;
			Ttext += `<div class="equipField_blockUnit"><input value="${t_equipfield.xtalNames[1]}" type="text" class="equipField_name" data-fieldno="${t_fieldNo}" onchange="set_equipFieldProp(this, 'xtalName2')" placeholder="Xtal name..." /></div><ul class="equipField_fieldAbilitys_menu"><li onclick="open_charaSimu_abilityListMain(2)">新增能力</li><li id="charaSimu_removeAbilityMode_2" onclick="charaSimu_removeAbilityMode(this)">移除模式</li><span><img width="28" height="28" src="svg/xtal-icon_0.svg" /></span></ul><div class="equipField_mainBlock_2"><ul id="equipField_fieldAbilitys_xtal2"></ul></div>`;
		}
		Ttext += '</div>';
		Ttext += `<div class="equipField_mainBlock_3"><div id="CharaSimu_setEquipAbility_showDetail"></div></div>`;
		/* if ( document.getElementById('CharaSimu_setEquipAbility').style.display != 'block' )
		{
			document.getElementById('CharaSimu_setEquipAbility').style.display = 'block';
		} */
		
		document.getElementById('charaSimu_savingSystem_site').style.display = 'none';
		document.getElementById('CharaSimu_setEquipShow').innerHTML = '';
		document.getElementById('CharaSimu_setEquipBase').innerHTML = Ttext;
		document.getElementById('CharaSimu_setEquipAbility').setAttribute('data-fieldno', t_fieldNo);
		
		updateUI_equipFieldAbility(t_fieldNo, 0);
		if (t_equipfield.xtals.length == 0) return;
		updateUI_equipFieldAbility(t_fieldNo, 1);
		updateUI_equipFieldAbility(t_fieldNo, 2);
	}
	
	function charaSimu_removeAbilityMode(temp){
		let doc = document.getElementById('CharaSimu_setEquipAbility');
		let t_fieldNo = parseInt(doc.getAttribute('data-fieldno'));
		let t_setNo = parseInt(temp.id.charAt(temp.id.length-1));
		
		temp.className = (temp.className != '') ? '' : 'equipField_fieldAbilitys_menu_li_cur';
		updateUI_equipFieldAbility(t_fieldNo, t_setNo);
	}
	
	function charaSimu_selEquipType(temp){
		let t_fieldNo = parseInt( temp.getAttribute('data-fieldno') );
		let t_typeno = parseInt( temp.getAttribute('data-typeno') );
		
		let t_ary = document.getElementById('equipField_equipTypeList_' + t_fieldNo).getElementsByTagName('li');
		for (let i=0; i<t_ary.length; ++i)
		{
			if ( t_ary[i].className.includes('_cur') )
			{
				t_ary[i].className = '';
				break;
			}
		}
		
		temp.className = 'equipField_equipTypeList_li_cur';
		cy_character.charaEquipments[t_fieldNo].type = t_typeno;
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
				let t_ary = ['S', 'A', 'B', 'C', 'D', 'E'], t_find = false;
				let t_value = parseInt(temp.value);
				for (let i=0; i<t_ary.length; ++i)
				{
					if ( temp.value == t_ary[i] )
					{
						t_value = 15 - i;
						t_find = true;
						break;
					}	
				}
				if ( !t_find ) 
				{
					temp.value = parseInt(temp.value);
					temp.value = ( temp.value < 0 || temp.value > 15 || temp.value == '') ? t_equipfield.refining : temp.value;
				}
				t_equipfield.refining = t_value;
				temp.placeholder = t_equipfield.refining;
				break;
			case 'stability':
				temp.value = parseInt(temp.value);
				temp.value = ( temp.value < 0 || temp.value > 100 || temp.value == '') ? t_equipfield.stability : temp.value;
				t_equipfield.stability = temp.value;
				temp.placeholder = t_equipfield.stability;
				break;
			case 'xtalName1': case 'xtalName2':
				let xtalNo = parseInt(varName.charAt(varName.length-1)) -1;
				t_equipfield.xtalNames[xtalNo] = temp.value;
				break;
			case 'Cstat0': case 'Cstat1': case 'Cstat2': case 'Cstat3': case 'Cstat4':
				let _loc1 = parseInt(varName.charAt(varName.length-1));
				temp.value = parseInt(temp.value);
				temp.value = ( temp.value < 0 || temp.value > 255 || temp.value == '') ? cy_character.statPoint[_loc1] : temp.value;
				cy_character.statPoint[_loc1] = temp.value;
				break;
			case 'Caddition':
				let _loc2 = parseInt(varName.charAt(varName.length-1));
				temp.value = parseInt(temp.value);
				temp.value = ( temp.value < 0 || temp.value > 255 || temp.value == '') ? cy_character.statPoint[_loc2].value : temp.value;
				cy_character.statPoint[_loc2].value = temp.value;
				break;
			default: console.log('error: set_equipFieldProp .');
		}
	}
	
	function show_charaStats(){
		let cy = cy_character.statList;
		let Ttext = '<div class="charaSimu_switchMode"><span onclick="set_charaStatPoint()">修改角色能力</span></div>';
		for (let i=0; i<cy.length; ++i)
		{
			if (cy[i].baseValue == 'none') continue;
			let T = parseInt(cy[i].calcValue());
			if ( T < cy[i].minValue ) T = cy[i].minValue;
			if ( T > cy[i].maxValue ) T = cy[i].maxValue;
			Ttext += cy[i].statName + '｜' + T + cy[i].unit + '<br />';
		}
		
		document.getElementById('charaSimu_savingSystem_site').style.display = 'none';
		document.getElementById('CharaSimu_setEquipShow').innerHTML = Ttext;
		document.getElementById('CharaSimu_setEquipBase').innerHTML = '';
	}
	
	function set_charaStatPoint(){
		 document.getElementById('CharaSimu_setEquipShow').innerHTML = '';
		 
		let Ttext_1 = '<div class="charaSimu_switchMode"><span onclick="show_charaStats()">&nbsp;&gt;Back</span></div><div>';
		let listCnt = 0;
		for (let i=0; i<cy_character.statPoint_name.length; ++i)
		{
			if ( Array.isArray(cy_character.statPoint_name[i]) )
			{
				let t_list = `<ul id="selStatPointType_${listCnt}" class="selStatPointType_ul">`;
				for (let j=0; j<cy_character.statPoint_name[i].length; ++j)
				{
					let T1 = (cy_character.statPoint_name[i][j] == cy_character.statPoint[i].name ) ? 'class="selStatPointType_ul_li_cur"' : '';
					t_list += `<li ${T1} onclick="selStatPointType(this, ${listCnt})" data-typeno="${j}">${cy_character.statPoint_name[i][j]}</li>`;
				}
				t_list += '</ul>';
				Ttext_1 += `${t_list}<div class="equipField_blockUnit"><input value="${cy_character.statPoint[i].value}" type="number" class="charaSimu_statPoint_input" onchange="set_equipFieldProp(this, 'Cstat${i}')" placeholder="" /></div>`;
				++listCnt;
				continue;
			}
			
			Ttext_1 += `<div class="equipField_blockUnit"><span class="equipField_textTitle_1">${cy_character.statPoint_name[i]}</span><input value="${cy_character.statPoint[i]}" type="number" class="charaSimu_statPoint_input" onchange="set_equipFieldProp(this, 'Cstat${i}')" placeholder="" /></div>`;
		}
		Ttext_1 += '</div>';
		document.getElementById('CharaSimu_setEquipBase').innerHTML = Ttext_1;
		document.getElementById('CharaSimu_setEquipShow').innerHTML = '';
	}
	
	function selStatPointType(temp, listCnt)
	{
		let t_statPointName = '', t_statPointName_no = 0;
		switch (listCnt)
		{
			case 0: t_statPointName = 'addition'; t_statPointName_no = 5; break;
		}
		let doc = document.getElementById('selStatPointType_' + listCnt);
		let t_ary = doc.getElementsByTagName('li');
		for (let i=0; i<t_ary.length; ++i)
		{
			if ( t_ary[i].className != '') t_ary[i].className = '';
		}
		
		let t_typeno = parseInt(temp.getAttribute('data-typeno'));
		temp.className = 'selStatPointType_ul_li_cur';
		
		cy_character.statPoint[t_statPointName].name = cy_character.statPoint_name[t_statPointName_no][t_typeno];
	}
	
	function open_charaSimu_abilityListMain(setNo = -1){
		let doc = document.getElementById('CharaSimu_setEquipAbility');
		if ( parseInt(doc.getAttribute('data-setno')) == setNo || parseInt(doc.getAttribute('data-setno')) == -1 || setNo == -1) 
			doc.style.display = (doc.style.display != 'block') ? 'block' : 'none';
		doc.setAttribute('data-setno', String(setNo));	//0: 基底, 1:緞晶1, 2:緞晶2
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
		
		let loc = '';
		for (let i=0; i<T_obj.ability.length; ++i)
		{
			if ( T_obj.ability[i].base == '' && loc == '') loc = T_obj.ability[i];
			if ( T_obj.ability[i].base.baseName == t_baseName && T_obj.ability[i].abilityType == t_type)
			{
				loc = '';
				showWarningMsg('已存在重複的能力。');
				break;
			}
		}
		if ( loc != '') loc.setInit(t_baseName, t_type);
		
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
		let _deleteText = ( document.getElementById('charaSimu_removeAbilityMode_' + setNo).className != '') ? '<img height="12" weight="12" src="svg/delete-icon.svg" />' : '';
		for (let i=0; i<T_obj.ability.length; ++i)
		{
			let _unit = ( T_obj.ability[i].abilityType == 0 ) ? '%' : '';
			if ( T_obj.ability[i].base != '' )
			{
				if ( T_obj.ability[i].base.baseValue == 'none' )
				{
					Ttext += `<li id="charaSimu_setAbilityValueInput_${fieldNo}_${setNo}_${i}" onclick="setEquipFieldAbliity(this)">${T_obj.ability[i].base.statName}</li>`;
					continue;
				}
				_sign = (T_obj.ability[i].value >= 0) ? '+' : '';
				Ttext += `<li id="charaSimu_setAbilityValueInput_${fieldNo}_${setNo}_${i}" onclick="setEquipFieldAbliity(this)">${T_obj.ability[i].base.statName}${_sign}${T_obj.ability[i].value}${_unit}${T_obj.ability[i].base.unit}${_deleteText}</li>`;
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
		
		if ( document.getElementById('charaSimu_removeAbilityMode_' + t_setNo).className != '' )
		{
			T_obj.remove();
			updateUI_equipFieldAbility(t_fieldNo, t_setNo);
			return;
		}
		
		if (T_obj.baseValue == 'none') return;
		
		let _unit = ( T_obj.abilityType == 0 ) ? '%' : '';
		let _sign = (T_obj.value >= 0) ? '+' : '';
		temp.innerHTML = `${T_obj.base.statName}${_sign}<input value="" data-fatherid="${temp.id}" onclick="_stopBubble(event)" onchange="confirm_setEquipFieldAbliity(this)" onblur="confirm_setEquipFieldAbliity(this)" />${_unit}`;
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
		let setValue = parseInt(temp.value) || T_obj.value;
		
		T_obj.removeValue();
		T_obj.addValue(setValue);
		
		temp.onblur = "";
		temp.onchange = "";
		
		updateUI_equipFieldAbility(t_fieldNo, t_setNo);
	 }
	 /* function cancle_setEquipFieldAbliity(temp){
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
	 } */
	
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