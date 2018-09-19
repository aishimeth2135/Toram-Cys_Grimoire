
	
	function charaSimu_openDefaultEquipList(temp){
		let doc = document.getElementById('CharaSimu_selDefaultEquip');
		doc.style.display = ( doc.style.display != 'block' ) ? 'block' : 'none';
		doc.setAttribute('data-fieldno', temp.getAttribute('data-fieldNo'));
		charaSimu_resetDefaultEquipList();
	}
	function charaSimu_resetDefaultEquipList(){
		let _fieldNo = parseInt(document.getElementById('CharaSimu_selDefaultEquip').getAttribute('data-fieldno'));
		let _html = '';
		
		let _searchText = document.getElementById('CharaSimu_selDefaultEquip_header_search').value;
		if (_searchText != '') _searchText = _searchText.split(/\s+/);
		
		let _ary = cy_character.defaultEquip_list;
		for (let i=0; i<_ary.length;++i)
		{
			let _conti = true;
			if ( _searchText != '' )
			{
				for (let j=0; j<_searchText.length; ++j)
				{
					if ( _ary[i].title.includes(_searchText[j]) || _searchText[j].includes(_ary[i].title) )
					{
						_conti = false;
						break;
					}
				}
			}
			else { _conti = false; }
			if ( _conti ) continue;
			if ( _ary[i].sel_fieldName == cy_character.charaEquipments[_fieldNo].fieldName ) _html += `<li data-fieldno="${_fieldNo}" data-code="${_ary[i].code}" onclick="charaSimu_loadingDefaultEquip(this)"><a data-langtext="${_ary[i].title}"></a></li>`;
		}
		document.getElementById('CharaSimu_selDefaultEquip_defaultEquipList').innerHTML = _html;
		resetInnerLang(document.getElementById('CharaSimu_selDefaultEquip_defaultEquipList'));
	}
	function charaSimu_loadingDefaultEquip(temp){
		let _fieldNo = parseInt(temp.getAttribute('data-fieldno'));
		let _code = temp.getAttribute('data-code');
		cy_character.charaEquipments[_fieldNo].loading_saveCode(_code);
		document.getElementById('CharaSimu_selDefaultEquip').style.display = 'none';
		if ( _fieldNo == 0 || _fieldNo == 1 ) charaSimu_selEquipType([0, cy_character.charaEquipments[0].type]);
		set_equipFieldAbility(_fieldNo);
		CharaSimu_updateSetEquipShowDetail();
	}
	
	function charaSimu_SaveToStorage_setTitle(temp){
		if ( !window.localStorage ) return;
		let doc = document.getElementById('charaSimu_SaveCode_saveTitle');
		doc.style.display = 'block';
		doc.getElementsByTagName('input')[0].setAttribute('data-lino', temp.getAttribute('data-lino'));
		doc.getElementsByTagName('input')[0].value = '';
		doc.getElementsByTagName('input')[0].focus();
	}
	function charaSimu_resetSaveCodeList(){
		if ( !window.localStorage )
		{
			showWarningMsg('This browser version does not support Web Storage.');
			document.getElementById('charaSimu_SaveCode_dataList').innerHTML = 'This browser version does not support Web Storage.';
			return;
		}
		Ttext = '<ul>', storage_size = 5;
		for (let i=0; i<storage_size; ++i)
		{
			let _storage = window.localStorage['charaSimu_saveCode_storage' + i];
			let _title = '(No Data)';
			let _loadCode = '';
			if ( _storage )
			{
				let reg = /.*\)n_/;
				_title = _storage.match(reg)[0].replace(')n_', '');
				//console.log(_title);
				_loadCode = _storage.replace(reg, '');
			}
			Ttext += `<li>${_title}<div><span data-loadingcode="${_loadCode}" onclick="charaSimu_storageControl(this, 'copy')"><a data-langtext="Copy|,|複製|,|Copy"></a></span><span data-lino="${i}" onclick="charaSimu_SaveToStorage_setTitle(this)"><a data-langtext="Save|,|存檔|,|Save"></a></span><span data-loadingcode="${_loadCode}" onclick="charaSimu_storageControl(this, 'load')"><a data-langtext="Load|,|讀取|,|Load"></a></span></div></li>`;
		}
		let _loadCode = window.localStorage['charaSimu_saveCode_storage_Auto'].split(')n_')[1]; 
		Ttext += `<li>Auto Save<div><span data-loadingcode="${_loadCode}" onclick="charaSimu_storageControl(this, 'copy')"><a data-langtext="Copy|,|複製|,|Copy"></a></span><span data-loadingcode="${_loadCode}" onclick="charaSimu_storageControl(this, 'load')"><a data-langtext="Load|,|讀取|,|Load"></a></span></div></li></ul>`;
		document.getElementById('charaSimu_SaveCode_dataList').innerHTML = Ttext;
		resetInnerLang(document.getElementById('charaSimu_SaveCode_dataList'));
	}
	
	function charaSimu_storageControl(temp, control){
		if ( !window.localStorage ) return;
		let loadCode;
		switch (control)
		{
			case 'saveTo':
				let saveName = temp.value;
				if ( saveName == '' )
				{
					temp.parentNode.style.display = 'none';
					showWarningMsg('Cancle.');
					return;
				}
				let t_lino = temp.getAttribute('data-lino');
				if ( saveName == /@\s*/ ) saveName = window.localStorage['charaSimu_saveCode_storage' + t_lino].split(')n_')[0];
				let saveCode = saveName + ')n_' + cy_character.general_saveCode();
				window.localStorage.setItem('charaSimu_saveCode_storage' + t_lino, saveCode);
				charaSimu_resetSaveCodeList();
				temp.parentNode.style.display = 'none';
				break;
			case 'load':
				window.localStorage.setItem('charaSimu_saveCode_storage_Auto', ')n_' + cy_character.general_saveCode());
				loadCode = temp.getAttribute('data-loadingcode');
				cy_character.loading_saveCode(loadCode);
				break;
			case 'copy':
				loadCode = temp.getAttribute('data-loadingcode');
				let doc = document.getElementById('charaSimu_savingSystem_site').getElementsByTagName('input')[0];
				doc.value = loadCode;
				doc.select();
				document.execCommand('copy');
				break;
		}
	}
	
	function charaSimu_equipSavingSystem(temp, inst){
		let doc = temp.parentNode.parentNode.getElementsByTagName('input')[0];
		let _fieldNo = parseInt(temp.getAttribute('data-fieldno'));
		switch (inst)
		{
			case 'save':
				doc.value = cy_character.charaEquipments[_fieldNo].general_saveCode();
				break;
			case 'load':
				cy_character.charaEquipments[_fieldNo].loading_saveCode(doc.value);
			case 'copy':
				doc.select();
				document.execCommand('copy');
				break;
		}
	}
	
	function show_allCharaEquip(){
		let _html = '';
		for (let i=0; i<cy_character.charaEquipments.length; ++i)
		{
			_html += show_charaEquip(i);
		}
		document.getElementById('CharaSimu_setEquipBase').innerHTML = _html;
		resetInnerLang(document.getElementById('CharaSimu_setEquipBase'));
		
		_html = '';
		_html += '<div style="clear:both;" class="charaSimu_equipSaveLoad_main" style="padding:0;">';
		_html += `<fieldset style="padding-left:0rem;padding-right:0rem;"><legend style="margin-left:0.3rem;"><ul><li onclick="generateImgTo('CharaSimu_setEquipBase', 'charaSimu_showEquipImage')"><a data-langtext="Generate Image|,|產生圖檔|,|General Image"></a></li><li onclick="javascript:document.getElementById('charaSimu_showEquipImage').src = '';"><a data-langtext="Reset|,|清空|,|Reset"></a></li></ul></legend><div><img style="max-width:100%;" id="charaSimu_showEquipImage" src="" /></div></fieldset>`;
		_html += '</div>';
		document.getElementById('CharaSimu_setEquipShow').innerHTML = _html;
		resetInnerLang(document.getElementById('CharaSimu_setEquipShow'));
		document.getElementById('charaSimu_savingSystem_site').style.display = 'none';
		
	}
	
	function charaSimu_openPassiveSkillList(){	
		let checked_1 = document.getElementById('charaSimu_hiddenNoLearnPassiveSkill_showPassiveSkillDetail').checked;
		let _html = '<table class="charaPassiveSkillList"><tbody>';
		for (let i=0; i<all_skilltree_type.length; ++i)
		{
			for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
			{
				for (let k=0; k<all_skilltree_type[i].STt_skilltree[j].ST_skill.length; ++k)
				{
					let _skill = all_skilltree_type[i].STt_skilltree[j].ST_skill[k];
					if ( cy_character.showPassiveSkillDetail && checked_1 && _skill.Sk_calcLv == 0) continue;
					if ( _skill.Sk_type == 'passive' && (_skill.Sk_charaAddition.length != 0 || _skill.Sk_addDesc != '') )
					{
						let _T = '', _text = '';
						if ( cy_character.showPassiveSkillDetail )
						{
							let _obj = _skill.Sk_charaAddition;
							for (let i=0; i<_obj.length; ++i)
							{
								if ( _obj[i].base != '' )
								{
									let _splitUnit = (i != 0) ? '｜' : '';
									if ( _obj[i].base.baseValue == 'none' )
									{
										_text += `${_splitUnit}<a data-langtext="${_obj[i].base.statName}"></a>`;
										continue;
									}
									let _unit = ( _obj[i].abilityType == 0 ) ? '%' : _obj[i].base.unit;
									let _sign = ( _obj[i].value >= 0 ) ? '+' : '';
									_text += `${_splitUnit}<a data-langtext="${_obj[i].base.statName}"></a>${_sign}${_obj[i].value}<a data-langtext="${_unit}"></a>`;
								}
							}
							if ( _skill.Sk_addDesc != '' )
							{
								let _splitUnit = (_obj.length != 0) ? '｜' : '';
								let SLv = _skill.Sk_calcLv;
								let _ary = _skill.Sk_addDesc.split(/\s*&\s*/);
								let W_type = cy_character.charaEquipments[0].type;
								let Au_type = cy_character.charaEquipments[1].type;
								let B_type = cy_character.charaEquipments[2].type;
								for (let l=0; l<_ary.length; ++l)
								{
									if ( _ary[l].match(/(.+)\[(.+)\]/) )
									{
										let armsConfirm_ary = RegExp.$1.split('_');
										let isConfirm = false;
										switch ( armsConfirm_ary[0] )
										{
											case "M":	//main-weapon
												if ( W_type == cy_character.weap_map[armsConfirm_ary[1]] ) isConfirm = true;
												break;
											case "S":	//sub-weapon
												if ( Au_type == cy_character.au_map[armsConfirm_ary[1]] ) isConfirm = true;
												break;
											case 'b':
												if ( B_type == cy_character.body_map[armsConfirm_ary[1]] ) isConfirm = true;
												break;
											case "B":	//main-weapon or sub-weapon
												if ( W_type == cy_character.weap_map[armsConfirm_ary[1]] || Au_type == cy_character.au_map[armsConfirm_ary[1]] ) isConfirm = true;
												break;
											case "D":	//main-weapon and sub-weapon
												let dual_ary = armsConfirm_ary[1].split('+');
												if ( W_type == cy_character.weap_map[dual_ary[0]] && Au_type == cy_character.au_map[dual_ary[1]] ) isConfirm = true;
												break;
											case "all":	//all
												isConfirm = true;
												break;
											case "noSub":	//no have sub-weapon
											if ( armsConfirm_ary[1] )
											{
												if ( W_type == cy_character.weap_map[armsConfirm_ary[1]] && Au_type == 6 ) isConfirm = true;
												break;
											}
											if ( Au_type == 6 ) isConfirm = true;
											break;
										}
										if ( isConfirm )
										{
											_text += _splitUnit + eval("`" + RegExp.$2 + "`");
											break;
										}
									}
									else { console.log('error');console.log( _skill.Sk_addDesc); }
								}
							}
						}
						let _lang_controlLength = 5;
						switch ( getCur_languageNo() )
						{
							case 0: _lang_controlLength = 5; break;
							case 1: _lang_controlLength = 4.7; break;
							case 2: _lang_controlLength = 8.25; break;
						}
						if ( _text == '') _html += `<tr><td>${_skill.Sk_name.replace('*', '')}</td><td style="width:4rem;">Lv.<input type="number" value="${_skill.Sk_calcLv}" onchange="set_skillCalcLv(this)" data-skillcode="${i}_${j}_${k}" /></td></tr>`;
						else _html += `<tr><td style="width:${_lang_controlLength}rem;">${_skill.Sk_name.replace('*', '')}</td><td style="width:4rem;">Lv.<input type="number" value="${_skill.Sk_calcLv}" onchange="set_skillCalcLv(this)" data-skillcode="${i}_${j}_${k}" /></td><td style="text-align:left;">${_text}</td></tr>`;
					}
				}
			}
		}
		_html += '</tbody></table>';
		document.getElementById('CharaSimu_setEquipShow').innerHTML = _html;
		resetInnerLang(document.getElementById('CharaSimu_setEquipShow'));
		
		let _t1 = ( cy_character.showPassiveSkillDetail ) ? 'class="cur"' : '';
		
		_html = '<ul class="chara_mainHeaderMenu">';
		_html += '<li onclick="charaSimu_passiveSkill_lvToCalcLv()"><a data-langtext="引用配點模擬器的配點"></a></li>';
		_html += `<li ${_t1} onclick="javascript:cy_character.showPassiveSkillDetail=(cy_character.showPassiveSkillDetail)?false:true;charaSimu_openPassiveSkillList();"><a data-langtext="顯示技能效果"></a></li>`;
		_html += '</ul>';
		
		document.getElementById('CharaSimu_setEquipBase').innerHTML = _html;
		resetInnerLang(document.getElementById('CharaSimu_setEquipBase'));
		document.getElementById('charaSimu_savingSystem_site').style.display = 'none';
	}
	function charaSimu_passiveSkill_lvToCalcLv(temp){
		
		for (let i=0; i<all_skilltree_type.length; ++i)
		{
			for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
			{
				for (let k=0; k<all_skilltree_type[i].STt_skilltree[j].ST_skill.length; ++k)
				{
					let _skill = all_skilltree_type[i].STt_skilltree[j].ST_skill[k];
					_skill.Sk_calcLv = _skill.Sk_lv;
				}
			}
		}
		updateAllPassiveSkillAddition();
		charaSimu_openPassiveSkillList();
	}
	
	function set_skillCalcLv(temp){
		let _skillNo = temp.getAttribute('data-skillcode').split('_');
		let _skill = all_skilltree_type[_skillNo[0]].STt_skilltree[_skillNo[1]].ST_skill[_skillNo[2]];
		
		let t_calcLv = parseInt(temp.value);
		
		if ( t_calcLv < 0 || t_calcLv > 10 )
		{
			temp.value = _skill.Sk_calcLv;
			showWarningMsg("Please enter the correct skill lv. (0~10)");
			return;
		}
		_skill.Sk_calcLv = t_calcLv;
		_skill.resetSkillAddition();
		charaSimu_openPassiveSkillList();
	}
	
	function updateAllPassiveSkillAddition(){
		for (let i=0; i<all_skilltree_type.length; ++i)
		{
			for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
			{
				for (let k=0; k<all_skilltree_type[i].STt_skilltree[j].ST_skill.length; ++k)
				{
					all_skilltree_type[i].STt_skilltree[j].ST_skill[k].resetSkillAddition();
				}
			}
		}
	}
	
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
	
	
		
	function show_charaEquip(t_fieldNo){
		let t_equipfield = cy_character.charaEquipments[t_fieldNo];
		
		let Ttext = '<div class="showChararEquip_main">'; //<div class="charaSimu_switchMode"><span data-fieldno="${t_fieldNo}" onclick="set_equipFieldAbility(this)">設定裝備能力</span></div>
		
		if ( (t_equipfield.fieldName == 'Main_Weapon' && t_equipfield.type == 9) || (t_equipfield.fieldName == 'Sub_Weapon' && t_equipfield.type == 6) || (t_equipfield.fieldName == 'Body_Armor' && t_equipfield.type == 3))
		{
			Ttext += '<a data-langtext="No Equipment.|,|無裝備，請點選上方選單設定裝備能力。|,|No Equipment."></a></div>';
			return Ttext;
		}
		
		let fieldValueTitle = '';
		switch (t_fieldNo)
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
				t_armsTypeName = 'Additional Gear|,|追加裝備|,|Additional Gear'; break;
				break;
			case 4:
				t_armsTypeName = 'Special Gear|,|特殊裝備|,|Special Gear'; break;
				break;
		}
		let refining_ary = ['E', 'D', 'C', 'B', 'A', 'S'];
		let t_refining = (t_equipfield.refining >= 10) ? refining_ary[t_equipfield.refining-10] : t_equipfield.refining;
		
		if ( t_fieldNo != 5 ) Ttext += `<a data-langtext="${t_equipfield.name || 'unnamed|,|無命名|,|名前なし'}"></a>${(t_refining != 0) ? " +" + t_refining : ""}<br />【<a data-langtext="${t_armsTypeName}"></a>】${fieldValueTitle}：${t_equipfield.fieldValue}`;
		let T_obj = t_equipfield.fieldAbilitys.ability;
		
		Ttext += '<div class="charaSimu_showEquipFieldAbilitys">';
		for (let i=0; i<T_obj.length; ++i)
		{
			if (T_obj[i].base == '') continue;
			Ttext += T_obj[i].get_showHTML();
		}			
		Ttext += '</div>';
		
		
		if ( t_equipfield.xtals.length != 0 )
		{
			if ( !t_equipfield.xtals[0].isEmpty() )
			{
				_xtalType = 'Crystal|,|鍛晶|,|クリスタ';
				T_obj = t_equipfield.xtals[0].ability;
				Ttext += `<hr class="showChararEquip_hr1" />`;
				if ( t_fieldNo != 5 ) Ttext += `【<a data-langtext="${_xtalType}"></a>】<a data-langtext="${t_equipfield.xtalNames[0] || 'xtal 1'}"></a>`;
				Ttext += `<div class="charaSimu_showEquipFieldAbilitys">`;
				for (let i=0; i<T_obj.length; ++i)
				{
					if (T_obj[i].base == '') continue;
					Ttext += T_obj[i].get_showHTML();
				}			
				Ttext += '</div>';
			}
			if ( !t_equipfield.xtals[1].isEmpty() )
			{
				T_obj = t_equipfield.xtals[1].ability;
				Ttext += `<hr class="showChararEquip_hr1" />`;
				if ( t_fieldNo != 5 ) Ttext += `【<a data-langtext="${_xtalType}"></a>】<a data-langtext="${t_equipfield.xtalNames[1] || 'xtal 2'}"></a>`;
				Ttext += `<div class="charaSimu_showEquipFieldAbilitys">`;
				for (let i=0; i<T_obj.length; ++i)
				{
					if (T_obj[i].base == '') continue;
					Ttext += T_obj[i].get_showHTML();
				}			
				Ttext += '</div>';
			}
		}
		Ttext += '</div>';
		
		return Ttext;
	}
	
	function set_equipFieldAbility(temp){
		let WeapArms_map = cy_character.weap_map;
		let AuArms_map = cy_character.au_map;
		
		let t_fieldNo;		
		if ( typeof temp != 'number' ) t_fieldNo = parseInt( temp.getAttribute('data-fieldno') );
		else t_fieldNo = temp;
		
		let t_equipfield = cy_character.charaEquipments[t_fieldNo];
		let fieldValueTitle = '';
		
		switch (t_fieldNo)
		{
			case 1:
				if (t_equipfield.type == 1) fieldValueTitle = 'DEF';
				else fieldValueTitle = 'ATK';
				break;
			case 2: case 3: case 4:
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
					case 9: typeAry = [0, 1, 2, 3, 4, 6];
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
		
		let _html = ''; 
		
		_html += `<div><ul class="chara_mainHeaderMenu"><li onclick="charaSimu_openDefaultEquipList(this)" data-fieldno="${t_fieldNo}"><a data-langtext="Default List|,|選取預設裝備|,|Default List"></a></li>`;
		_html += `<li onclick="charaSimu_resetFieldControl(${t_fieldNo}, 'all')"><img src="svg/reset-icon.svg" /><a data-langtext="Reset All|,|全部重設|,|Reset All"></a></li>`;
		_html += '</ul></div>';
		_html += '<div style="float:left;width:22rem;margin-bottom:1rem;" >';
		
		let _style = 'opacity:1;background-color:transparent;';
		if ( tAry_equipField_type.length != 0 )
		{
			_html += `<ul class="equipField_equipTypeList" id="equipField_equipTypeList_${t_fieldNo}">`;
			for (let i=0; i<tAry_equipField_type.length; ++i)
			{
				let T = i;
				if ( typeAry.length != 0 ) T = typeAry[i];
				let _className = ( T == t_equipfield.type ) ? 'class="equipField_equipTypeList_li_cur"' : '';
				_html += `<li ${_className} onclick="charaSimu_selEquipType(this)" data-fieldno="${t_fieldNo}" data-typeno="${T}">${tAry_equipField_type[i]}</li>`;
			}
			_html += '</ul>';
			if ( ( t_equipfield.fieldName == 'Main_Weapon' && t_equipfield.type == 9 ) || ( t_equipfield.fieldName == 'Sub_Weapon' && (t_equipfield.type != 0 && t_equipfield.type != 1 && t_equipfield.type != 2 && t_equipfield.type != 7) ) || ( t_equipfield.fieldName == 'Body_Armor' && t_equipfield.type == 3 ) )
			{
				_style = 'opacity:0.6;background-color:rgba(255,255,255, 0.2);';
				let _typeMap;
				switch ( t_fieldNo )
				{
					case 0: _typeMap = cy_character.allWeapType; break;
					case 1: _typeMap = cy_character.allAuType; break;
					case 2: _typeMap = cy_character.allBodyType; break;
				}
				_html += `<p style="color:#ffb5b5;">裝備類型為${_typeMap[t_equipfield.type]}，設定之裝備能力將無效。</p>`;
			}
			if ( t_equipfield.fieldName == 'Sub_Weapon' && t_equipfield.type == AuArms_map['1hSword'] )
			{
				_html += '<p style="color:#ffb5b5;">裝備於副手的單手劍，只有攻擊力、精鍊值、穩定度、屬性有效。</p>';
			}
		}
		
		_html += `<div id="equipField_setEquip_block0" style="${_style}">`;
		if ( t_fieldNo != 5 ) _html += `<div class="equipField_mainBlock_1"><div class="equipField_blockUnit"><input type="text" class="equipField_name" data-fieldno="${t_fieldNo}" onchange="set_equipFieldProp(this, 'name')" data-langtext="${t_equipfield.name}" data-langplaceholder="name...|,|輸入名稱...|,|name..." /></div><br />`;
		if ( t_fieldNo != 5 ) _html += `<div class="equipField_blockUnit"><span class="equipField_textTitle_1">${fieldValueTitle}</span><input value="${t_equipfield.fieldValue}" type="number" class="equipField_fieldValue" data-fieldno="${t_fieldNo}" onchange="set_equipFieldProp(this, 'fieldValue')" placeholder="${t_equipfield.fieldValue}" /></div>`;
		if ( t_fieldNo == 0 || (t_fieldNo == 1 && (t_equipfield.type == AuArms_map['Shield'] || t_equipfield.type == AuArms_map['1hSword'])) || t_fieldNo == 2 || t_fieldNo == 3 )	//特殊
		{
			_html += `<div class="equipField_blockUnit"><span class="equipField_textTitle_1"><a data-langtext="Refining|,|精鍊值|,|精鍊值"></a></span><input value="${t_equipfield.refining}" type="number" class="equipField_refining" data-fieldno="${t_fieldNo}" onchange="set_equipFieldProp(this, 'refining')" placeholder="${t_equipfield.refining}" /></div>`;
		}
		if ( t_equipfield.fieldName == 'Main_Weapon' || ( t_equipfield.fieldName == 'Sub_Weapon' && ( t_equipfield.type == AuArms_map['Arrow'] || t_equipfield.type == AuArms_map['1hSword'] ) ) )	//主、副手
		{
			_html += `<div class="equipField_blockUnit"><span class="equipField_textTitle_1"><a data-langtext="Stability|,|穩定率|,|Stability"></a></span><input value="${t_equipfield.stability}" type="number" class="equipField_stability" data-fieldno="${t_fieldNo}" onchange="set_equipFieldProp(this, 'stability')" placeholder="${t_equipfield.stability}" />%</div>`;
		}
		_html += `</div>`;
		_html += `<div class="equipField_mainBlock_2"><fieldset><legend><ul class="equipField_fieldAbilitys_menu"><li onclick="open_charaSimu_abilityListMain(0)"><img src="svg/add-icon_0.svg" /><a data-langtext="Add|,|新增能力|,|Add"></a></li><li id="charaSimu_removeAbilityMode_0" onclick="charaSimu_removeAbilityMode(this)"><img src="svg/delete-icon.svg" /><a data-langtext="Remove|,|移除模式|,|Remove"></a></li><li onclick="charaSimu_resetFieldControl(${t_fieldNo}, 'ability')"><img src="svg/reset-icon.svg" /><a data-langtext="Reset|,|重設|,|Reset"></a></li></ul></legend><ul id="equipField_fieldAbilitys_main"></ul></fieldset></div>`;
		
		if ( t_fieldNo != 1 )	//副手
		{
			_html += '<div class="equipField_blockUnit">';
			if ( t_fieldNo != 5 ) _html += `<img style="height:25px;width:25px;vertical-align:middle;margin-right: 0.5rem;" src="svg/xtal-icon_0.svg" /><input style="width:75%;" data-langtext="${t_equipfield.xtalNames[0]}" type="text" class="equipField_name" data-fieldno="${t_fieldNo}" onchange="set_equipFieldProp(this, 'xtalName1')" data-langplaceholder="Xtal name...|,|鍛晶名稱...|,|Xtal name..." />`;
			_html += `</div><div class="equipField_mainBlock_2"><fieldset><legend><ul class="equipField_fieldAbilitys_menu"><li onclick="open_charaSimu_abilityListMain(1)"><img src="svg/add-icon_0.svg" /><a data-langtext="Add|,|新增能力|,|Add"></a></li><li id="charaSimu_removeAbilityMode_1" onclick="charaSimu_removeAbilityMode(this)"><img src="svg/delete-icon.svg" /><a data-langtext="Remove|,|移除模式|,|Remove"></a></li><li onclick="charaSimu_resetFieldControl(${t_fieldNo}, 'xtal1')"><img src="svg/reset-icon.svg" /><a data-langtext="Reset|,|重設|,|Reset"></a></li></ul></legend><ul id="equipField_fieldAbilitys_xtal1"></ul></fieldset></div>`;
			_html += '<div class="equipField_blockUnit">';
			if ( t_fieldNo != 5 ) _html += `<img style="height:25px;width:25px;vertical-align:middle;margin-right: 0.5rem;" src="svg/xtal-icon_0.svg" /><input style="width:75%;" data-langtext="${t_equipfield.xtalNames[1]}" type="text" class="equipField_name" data-fieldno="${t_fieldNo}" onchange="set_equipFieldProp(this, 'xtalName2')" data-langplaceholder="Xtal name...|,|鍛晶名稱...|,|Xtal name..." />`;
			_html += `</div><div class="equipField_mainBlock_2"><fieldset><legend><ul class="equipField_fieldAbilitys_menu"><li onclick="open_charaSimu_abilityListMain(2)"><img src="svg/add-icon_0.svg" /><a data-langtext="Add|,|新增能力|,|Add"></a></li><li id="charaSimu_removeAbilityMode_2" onclick="charaSimu_removeAbilityMode(this)"><img src="svg/delete-icon.svg" /><a data-langtext="Remove|,|移除模式|,|Remove"></a></li><li onclick="charaSimu_resetFieldControl(${t_fieldNo}, 'xtal2')"><img src="svg/reset-icon.svg" /><a data-langtext="Reset|,|重設|,|Reset"></a></li></ul></legend><ul id="equipField_fieldAbilitys_xtal2"></ul></fieldset></div>`;
		}
		_html += '</div></div>';
		_html += `<div class="equipField_mainBlock_3"><span style="float:right;display:inline-block;cursor:pointer;" onclick="CharaSimu_resetSetEquipShowDetail(),CharaSimu_updateSetEquipShowDetail()"><img height="20" width="20" src="svg/reset-icon.svg" /></span><div id="CharaSimu_setEquipAbility_showDetail"></div></div>`;
		
		_html += `<div style="clear:both;" class="charaSimu_equipSaveLoad_main"><input type="text" placeholder="Code" /><ul><li onclick="charaSimu_equipSavingSystem(this, 'save')" data-fieldno="${t_fieldNo}"><a data-langtext="Save|,|產生代碼|,|Save"></a></li>`;
		_html += `<li onclick="charaSimu_equipSavingSystem(this, 'load')" data-fieldno="${t_fieldNo}"><a data-langtext="Load|,|讀取|,|Load"></a></li>`;
		_html += `<li onclick="charaSimu_equipSavingSystem(this, 'copy')" data-fieldno="${t_fieldNo}"><a data-langtext="Copy|,|複製|,|Copy"></a></li></ul></div>`;
		
		document.getElementById('CharaSimu_setEquipAbility').style.display = 'none';
		document.getElementById('charaSimu_savingSystem_site').style.display = 'none';
		document.getElementById('CharaSimu_selDefaultEquip').style.display ='none';
		
		document.getElementById('CharaSimu_setEquipShow').innerHTML = '';
		document.getElementById('CharaSimu_setEquipBase').innerHTML = _html;
		resetInnerLang(document.getElementById('CharaSimu_setEquipBase'));
		document.getElementById('CharaSimu_setEquipAbility').setAttribute('data-fieldno', t_fieldNo);
		
		updateUI_equipFieldAbility(t_fieldNo, 0);
		if (t_equipfield.xtals.length == 0) return;
		updateUI_equipFieldAbility(t_fieldNo, 1);
		updateUI_equipFieldAbility(t_fieldNo, 2);
		CharaSimu_updateSetEquipShowDetail();
	}
	
	function charaSimu_resetFieldControl(_fieldNo, control){
		cy_character.charaEquipments[_fieldNo].reset(control);
		set_equipFieldAbility(_fieldNo);
		CharaSimu_updateSetEquipShowDetail();
	}
	
	function CharaSimu_updateSetEquipShowDetail(mode = ''){
		let _html = '';
		for (let i=0; i<cy_character.statList.length; ++i)
		{
			let _obj = cy_character.statList[i];
			if ( _obj.alwaysShow == 'hid' ) continue;
			let _t = _obj.calcValue();
			if ( _t != _obj.preValue )
			{
				if ( _obj.baseValue == 'none' )
				{
					_html += `<span><a data-langtext="${_obj.showName}"></a></span><br />`;
					continue;
				}
				_t -= _obj.preValue;
				let _sign = ( _t >=0 ) ? '+' : '';
				let _unit = ( !_obj.haveRate ) ? _obj.unit : '';
				if (_obj.digitNum != 0) _t = _t.toFixed(_obj.digitNum);
				let _style = (_t*_obj.extraRate >= 0) ? '' : 'style="color:#ffb5b5;"';
				_html += `<span ${_style}><a data-langtext="${_obj.showName}"></a>${_sign}${_t}<a data-langtext="${_unit}"></a></span><br />`;
			}
		}
		if ( mode == 'get' ) return _html;
		if (document.getElementById('CharaSimu_setEquipAbility_showDetail'))
		{
			document.getElementById('CharaSimu_setEquipAbility_showDetail').innerHTML = _html;
			resetInnerLang(document.getElementById('CharaSimu_setEquipAbility_showDetail'));
		}
	}
	function CharaSimu_resetSetEquipShowDetail(){
		for (let i=0; i<cy_character.statList.length; ++i)
		{
			cy_character.statList[i].preValue = cy_character.statList[i].calcValue();
		}
	}
	
	function charaSimu_removeAbilityMode(temp){
		let doc = document.getElementById('CharaSimu_setEquipAbility');
		let t_fieldNo = parseInt(doc.getAttribute('data-fieldno'));
		let t_setNo = parseInt(temp.id.charAt(temp.id.length-1));
		
		temp.className = (temp.className != '') ? '' : 'equipField_fieldAbilitys_menu_li_cur';
		updateUI_equipFieldAbility(t_fieldNo, t_setNo);
	}
	
	function charaSimu_selEquipType(temp, bySystem = false){
		let t_fieldNo, t_typeno;
		if ( !Array.isArray(temp) )
		{
			t_fieldNo = parseInt( temp.getAttribute('data-fieldno') );
			t_typeno = parseInt( temp.getAttribute('data-typeno') );
		}
		else {
			t_fieldNo = temp[0];
			t_typeno = temp[1];
		}
		if ( !Array.isArray(temp) )
		{
			if ( t_typeno == cy_character.charaEquipments[t_fieldNo].type ) return;
		}
		let addStr = '';
		switch (t_fieldNo)
		{
			case 0:
				if ( t_typeno == 9 ) cy_character.charaEquipments[t_fieldNo].close();
				else cy_character.charaEquipments[t_fieldNo].open();
				
				let typeAry = [];
				switch (t_typeno)
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
				}
				if ( typeAry.length == 0 ) console.log('error');
				let _hasFind = false;
				for (let i=0; i<typeAry.length; ++i)
				{
					if ( cy_character.charaEquipments[1].type == typeAry[i] )
					{
						_hasFind = true;
						break;
					}
				}
				if ( !_hasFind )
				{
					charaSimu_selEquipType([1, 6]);
				}
				break;
			case 1:
				if ( t_typeno != 0 && t_typeno != 1 && t_typeno != 2 )
				{
					cy_character.charaEquipments[t_fieldNo].close();
					if ( t_typeno == 7 )
					{
						for (let t1=0; t1<cy_character.charaEquipments[t_fieldNo].fieldAbilitys.ability.length; ++t1)
						{
							let _t = cy_character.charaEquipments[t_fieldNo].fieldAbilitys.ability;
							if ( _t[t1].base != '' && _t[t1].base.baseName.includes('@elements') )
							{
								_t[t1].open();
								break;
							}
						}
					}
				}
				else {
					cy_character.charaEquipments[t_fieldNo].open();
				}
				switch (t_typeno)
				{
					case 1: addStr = 'aspd#-50%'; break;
					case 2: addStr = 'def#-25%, mdef#-25%'; break;
					case 3: addStr = 'atk#-15%'; break;
					case 4: addStr = 'matk#-15%'; break;
					case 7: addStr = 'critical_rate#-80%, accuracy#-55%'; break;
				}
				//0~1: 副手
				cy_character.equipTypeStats[0].remove();
				cy_character.equipTypeStats[1].remove();
				break;
			case 2:
				if ( t_typeno == 3 ) cy_character.charaEquipments[t_fieldNo].close();
				else cy_character.charaEquipments[t_fieldNo].open();
				switch (t_typeno)
				{
					case 1: addStr = 'aspd#50%'; break;
					case 2: addStr = 'aspd#-50%'; break;
				}
				//身體裝備
				cy_character.equipTypeStats[2].remove();
				break;
		}
		if ( addStr != '')
		{
			let _cnt = (cy_character.charaEquipments[t_fieldNo].fieldName == 'Sub_Weapon') ? 0 : 2;
			let _ary = addStr.split(/\s*,\s*(?!\s*[a-zA-Z0-9_]+\s*\))/);
			for (let i=0; i<_ary.length; ++i)
			{
				if ( _ary[i].match(/(.+)#(.+)%/) )
				{
					cy_character.equipTypeStats[_cnt].setInit(RegExp.$1, 0, true, eval(RegExp.$2));
					++_cnt; continue;
				}
				console.log('error');
			}
		}
		
		if ( !Array.isArray(temp) ) temp.className = 'equipField_equipTypeList_li_cur';
		cy_character.charaEquipments[t_fieldNo].type = t_typeno;
		
		updateAllPassiveSkillAddition();
		if ( bySystem ) return;
		set_equipFieldAbility(t_fieldNo);
		CharaSimu_updateSetEquipShowDetail();
	}
	
	function set_equipFieldProp(temp, varName){
		let t_fieldNo = parseInt( temp.getAttribute('data-fieldno') );
		let t_equipfield = cy_character.charaEquipments[t_fieldNo];
		
		switch (varName)
		{
			case 'name': t_equipfield.name = ( temp.value.includes('|,|') || getCur_languageNo() != 1 ) ? temp.value : '|,|' + temp.value + '|,|'; break;
			case 'fieldValue':
				temp.value = parseInt(temp.value);
				temp.value = ( temp.value < 0 || temp.value > 999 || temp.value == '') ? t_equipfield.fieldValue : temp.value;
				t_equipfield.fieldValue = parseInt(temp.value);
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
				t_equipfield.stability = parseInt(temp.value);
				temp.placeholder = t_equipfield.stability;
				break;
			case 'xtalName1': case 'xtalName2':
				let xtalNo = parseInt(varName.charAt(varName.length-1)) -1;
				t_equipfield.xtalNames[xtalNo] = temp.value;
				break;
			case 'CLv':
				temp.value = parseInt(temp.value);
				temp.value = ( temp.value < 0 || temp.value > 200 || temp.value == '') ? cy_character.characterLv : temp.value;
				cy_character.characterLv = parseInt(temp.value);
				break;
			case 'Cstat0': case 'Cstat1': case 'Cstat2': case 'Cstat3': case 'Cstat4':
				let _loc1 = parseInt(varName.charAt(varName.length-1));
				temp.value = parseInt(temp.value);
				temp.value = ( temp.value < 0 || temp.value > 255 || temp.value == '') ? cy_character.statPoint[_loc1].baseValue : temp.value;
				cy_character.statPoint[_loc1].baseValue = parseInt(temp.value);
				break;
			case 'Caddition':
				let _loc2 = 5;
				temp.value = parseInt(temp.value);
				temp.value = ( temp.value < 0 || temp.value > 255 || temp.value == '') ? cy_character.statPoint[_loc2].value : temp.value;
				cy_character.statPoint[_loc2].base.baseValue = parseInt(temp.value);
				break;
			default: console.log('error: set_equipFieldProp .');
		}
		CharaSimu_updateSetEquipShowDetail();
	}
	
	function show_charaStats(){
		let cy = cy_character.statList;
		let _html = '<div class="charaSimu_switchMode" id="charaSimu_switchMode_block"><span onclick="set_charaStatPoint()"><a data-langtext="&gt; Set character point|,|&gt; 修改角色能力|,|&gt; Set character point"></a></span></div>';
		
		let blockAry = ['max_hp', 'atk', 'stability', 'def', 'critical_rate', 'accuracy', 'aggro', 'evasion_rate', 'unsheathe_attack', 'stronger_against_neutral', 'neutral_resistance', 'physical_barrier', 'additional_meele', 'flinch_unavailable', 'recoil_damage'];
		let _cnt = 0;
		
		let __html = `<div class="charaSimu_showStat_blockUnit1"><span><span>Lv.</span>${cy_character.characterLv}</span></div>`;
		for (let i=0; i<cy.length; ++i)
		{
			if ( cy[i].baseName == blockAry[_cnt] || i == cy.length-1)
			{
				if ( __html != '') _html += '<div class="charaSimu_showStat_blockUnit1">' + __html + '</div>';
				__html = '';
				++_cnt;
			}
			if ( cy[i].baseValue == 'none' )
			{
				if (cy[i].calcValue() > 0) __html += '<span><span><a data-langtext="' + cy[i].showName + '"></a></span></span>';
				continue;
			}
			
			if ( typeof cy[i].alwaysShow != 'boolean' )
			{
				if ( cy[i].alwaysShow == 'hid' ) continue;
			}
			else {
				if ( !cy[i].alwaysShow && cy[i].calcValue() == cy[i].baseValue ) continue;
			}
			
			let T = cy[i].calcValue();
			let hoverTitle = '';
			if ( cy[i].baseValue != 'none ' && cy[i].calcValue('B') != 0)
			{
				hoverTitle += `<span class="_hoverTitle"><span><a data-langtext="Base: |,|基礎值：|,|基礎値："></a>${cy[i].calcValue('B*E')}<a data-langtext="${cy[i].unit}"></a></span>`;
				if ( cy[i].haveRate ) hoverTitle += `<br /><span><a data-langtext="${cy[i].statName}"></a>${(cy[i].rate >= 0) ? '+' : ''}${cy[i].rate}% | ${cy[i].calcValue('B*(R-1)*E')}</span>`;
				hoverTitle += `<br /><span><a data-langtext="${cy[i].statName}"></a>${(cy[i].constant >= 0) ? '+' : ''}${cy[i].calcValue('C')}<a data-langtext="${cy[i].unit}"></a></span>`;
				hoverTitle += '</span>';
			}
			__html += `<span><span><a data-langtext="` + cy[i].showName + '"></a></span>' + T + '<a data-langtext="' + cy[i].unit + `"></a>${hoverTitle}</span>`;
		}
		
		__html = '';
		for (let i=0; i<all_skilltree_type.length; ++i)
		{
			for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
			{
				for (let k=0; k<all_skilltree_type[i].STt_skilltree[j].ST_skill.length; ++k)
				{
					let _skill = all_skilltree_type[i].STt_skilltree[j].ST_skill[k];
					
					let SLv = _skill.Sk_calcLv;
					if ( _skill.Sk_type == 'passive' && _skill.Sk_addDesc != '' && SLv != 0 )
					{
						let _ary = _skill.Sk_addDesc.split(/\s*&\s*/);
						let W_type = cy_character.charaEquipments[0].type;
						let Au_type = cy_character.charaEquipments[1].type;
						let B_type = cy_character.charaEquipments[2].type;
						for (let l=0; l<_ary.length; ++l)
						{
							if ( _ary[l].match(/(.+)\[(.+)\]/) )
							{
								let armsConfirm_ary = RegExp.$1.split('_');
								let isConfirm = false;
								switch ( armsConfirm_ary[0] )
								{
									case "M":	//main-weapon
										if ( W_type == cy_character.weap_map[armsConfirm_ary[1]] ) isConfirm = true;
										break;
									case "S":	//sub-weapon
										if ( Au_type == cy_character.au_map[armsConfirm_ary[1]] ) isConfirm = true;
										break;
									case 'b':
										if ( B_type == cy_character.body_map[armsConfirm_ary[1]] ) isConfirm = true;
										break;
									case "B":	//main-weapon or sub-weapon
										if ( W_type == cy_character.weap_map[armsConfirm_ary[1]] || Au_type == cy_character.au_map[armsConfirm_ary[1]] ) isConfirm = true;
										break;
									case "D":	//main-weapon and sub-weapon
										let dual_ary = armsConfirm_ary[1].split('+');
										if ( W_type == cy_character.weap_map[dual_ary[0]] && Au_type == cy_character.au_map[dual_ary[1]] ) isConfirm = true;
										break;
									case "all":	//all
										isConfirm = true;
										break;
									case "noSub":	//no have sub-weapon
										if ( Au_type == 6 ) isConfirm = true;
										break;
								}
								if ( isConfirm )
								{
									__html += '<span><span>' + _skill.Sk_name.replace('#', '') + '</span>' + eval("`" + RegExp.$2 + "`") + '</span>';
									break;
								}
							}
							else { console.log('error'); }
						}
					}
				}
			}
		}
		if ( __html != '') _html += '<div class="charaSimu_showStat_blockUnit1">' + __html + '</div>';
		
		document.getElementById('CharaSimu_setEquipBase').innerHTML = _html;
		resetInnerLang(document.getElementById('CharaSimu_setEquipBase'));
	
		_html = '';
		_html += '<div style="clear:both;" class="charaSimu_equipSaveLoad_main" style="padding:0;">';
		_html += `<fieldset style="padding-left:0rem;padding-right:0rem;"><legend style="margin-left:0.3rem;"><ul><li onclick="generateImgTo('CharaSimu_setEquipBase', 'charaSimu_showEquipImage', {hiddenId:['charaSimu_switchMode_block']})"><a data-langtext="Generate Image|,|產生圖檔|,|General Image"></a></li><li onclick="javascript:document.getElementById('charaSimu_showEquipImage').src = '';"><a data-langtext="Reset|,|清空|,|Reset"></a></li></ul></legend><div><img style="max-width:100%;" id="charaSimu_showEquipImage" src="" /></div></fieldset>`;
		_html += '</div>';
		document.getElementById('CharaSimu_setEquipShow').innerHTML = _html;
		resetInnerLang(document.getElementById('CharaSimu_setEquipShow'));
		
		document.getElementById('charaSimu_savingSystem_site').style.display = 'none';
	}
	
	function set_charaStatPoint(){
		 document.getElementById('CharaSimu_setEquipShow').innerHTML = '';
		 
		let Ttext_1 = '<div class="charaSimu_switchMode"><span onclick="show_charaStats()">&nbsp;&gt;Back</span></div><div>';
		let listCnt = 0;
		Ttext_1 += `<div class="equipField_blockUnit"><span class="equipField_textTitle_1">Lv.</span><input value="${cy_character.characterLv}" type="number" class="charaSimu_statPoint_input" onchange="set_equipFieldProp(this, 'CLv')" placeholder="" /></div><br />`;
		for (let i=0; i<cy_character.statPoint_name.length; ++i)
		{
			if ( Array.isArray(cy_character.statPoint_name[i]) )
			{
				let t_list = `<br /><ul id="selStatPointType_${listCnt}" class="selStatPointType_ul">`;
				for (let j=0; j<cy_character.statPoint_name[i].length; ++j)
				{
					let T1 = (cy_character.statPoint_name[i][j] == cy_character.statPoint[i].name ) ? 'class="selStatPointType_ul_li_cur"' : '';
					t_list += `<li ${T1} onclick="selStatPointType(this, ${listCnt})" data-typeno="${j}">${cy_character.statPoint_name[i][j]}</li>`;
				}
				t_list += '</ul>';
				Ttext_1 += `${t_list}<div class="equipField_blockUnit"><input value="${cy_character.statPoint[i].base.baseValue}" type="number" class="charaSimu_statPoint_input" onchange="set_equipFieldProp(this, 'Caddition')" placeholder="" /></div>`;
				++listCnt;
				continue;
			}
			
			Ttext_1 += `<div class="equipField_blockUnit"><span class="equipField_textTitle_1">${cy_character.statPoint_name[i]}</span><input value="${cy_character.statPoint[i].baseValue}" type="number" class="charaSimu_statPoint_input" onchange="set_equipFieldProp(this, 'Cstat${i}')" placeholder="" /></div>`;
		}
		Ttext_1 += '</div>';
		document.getElementById('CharaSimu_setEquipBase').innerHTML = '';
		document.getElementById('CharaSimu_setEquipShow').innerHTML = Ttext_1;
	}
	
	function selStatPointType(temp, listCnt)
	{
		if ( temp.className == 'selStatPointType_ul_li_cur' ) return;
		let t_statPointName = '', t_statPointName_no = 0;
		switch (listCnt)
		{
			case 0: t_statPointNo = 5; t_statPointName_no = 5;break;
		}
		let doc = document.getElementById('selStatPointType_' + listCnt);
		let t_ary = doc.getElementsByTagName('li');
		for (let i=0; i<t_ary.length; ++i)
		{
			if ( t_ary[i].className != '') t_ary[i].className = '';
		}
		
		let t_typeno = parseInt(temp.getAttribute('data-typeno'));
		temp.className = 'selStatPointType_ul_li_cur';
		
		cy_character.statPoint[t_statPointNo].name = cy_character.statPoint_name[t_statPointName_no][t_typeno];
		cy_character.statPoint[t_statPointNo].base.showName = cy_character.statPoint_name[t_statPointName_no][t_typeno];
		cy_character.statPoint[t_statPointNo].base.statName = cy_character.statPoint_name[t_statPointName_no][t_typeno];
		cy_character.statPoint[t_statPointNo].base.alwaysShow = ( cy_character.statPoint[t_statPointNo].base.showName == 'none' ) ? 'hid' : true;
	}
	
	function open_charaSimu_abilityListMain(setNo = -1){
		let doc = document.getElementById('CharaSimu_setEquipAbility');
		if ( parseInt(doc.getAttribute('data-setno')) == setNo || parseInt(doc.getAttribute('data-setno')) == -1 || setNo == -1) 
			doc.style.display = (doc.style.display != 'block') ? 'block' : 'none';
		doc.setAttribute('data-setno', String(setNo));	//0: 基底, 1:緞晶1, 2:緞晶2
		update_charaSimu_addAbilityList();
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
		
		let loc = '', haveRepeatSelClass = false;
		if ( t_baseName.match(/.+@(.+)/) )
		{
			let _selClass = RegExp.$1;
			for (let i=0; i<T_obj.ability.length; ++i)
			{
				if (T_obj.ability[i].base != '' && T_obj.ability[i].base.baseName.includes('@' + _selClass) )
				{
					loc = T_obj.ability[i];
					haveRepeatSelClass = true;
					break;
				}
			}
		}
		if ( !haveRepeatSelClass )
		{
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
		}
		if ( haveRepeatSelClass ) loc.remove();
		if ( loc != '' ) 
		{
			if ( cy_character.charaEquipments[t_fieldNo].fieldName == 'Sub_Weapon' &&　cy_character.charaEquipments[1].type == 7 && t_baseName.includes('@elements') ) loc.setInit(t_baseName, t_type, true);
			else loc.setInit(t_baseName, t_type, cy_character.charaEquipments[t_fieldNo].isAble);
		}
		
		if ( loc != '' && loc.base.baseValue == 'none' ) loc.setValue(1);
		
		updateUI_equipFieldAbility(t_fieldNo, t_setNo);
		CharaSimu_updateSetEquipShowDetail();
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
		let _deleteText = ( document.getElementById('charaSimu_removeAbilityMode_' + setNo).className != '' ) ? '<img height="12" weight="12" src="svg/delete-icon.svg" />' : '';
		for (let i=0; i<T_obj.ability.length; ++i)
		{
			if ( T_obj.ability[i].base != '' )
			{
				Ttext += T_obj.ability[i].get_showHTML({body: 'li', idText: `charaSimu_setAbilityValueInput_${fieldNo}_${setNo}_${i}`, onclickText: 'setEquipFieldAbliity(this)', deleteText: _deleteText});
			}
		}
		doc.innerHTML = Ttext;
		resetInnerLang(doc);
	}
	function setEquipFieldAbliity(temp){
		let _regObj = '';
		if ( temp.id.match(/.+_(\d+)_(\d+)_(\d+)/) )
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
			CharaSimu_updateSetEquipShowDetail();
			return;
		}
		
		if (T_obj.base.baseValue == 'none') return;
		
		let _unit = ( T_obj.abilityType == 0 ) ? '%' : T_obj.base.unit;
		let _sign = (T_obj.value >= 0) ? '+' : '';
		let t_statName = T_obj.base.get_signStatName();
		if ( T_obj.base.have_signStatName() ) _sign = '';
		temp.innerHTML = `<a data-langtext="${t_statName}"></a>${_sign}<input type="number" value="" data-fatherid="${temp.id}" onclick="_stopBubble(event)" onchange="confirm_setEquipFieldAbliity(this)" onblur="confirm_setEquipFieldAbliity(this)" /><a data-langtext="${_unit}"></a>`;
		resetInnerLang(temp);
		temp.getElementsByTagName('input')[0].focus();
	 }
	 function confirm_setEquipFieldAbliity(temp){
		let _regObj = '';
		if ( temp.getAttribute('data-fatherid').match(/.+_(\d+)_(\d+)_(\d+)/) )
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
		let setValue = ((T_obj.base.digitNum == 0) ? parseInt(temp.value) : parseFloat(parseFloat(temp.value).toFixed(T_obj.base.digitNum))) || T_obj.value;
		T_obj.setValue(setValue);
		
		temp.onblur = "";
		temp.onchange = "";
		
		updateUI_equipFieldAbility(t_fieldNo, t_setNo);
		CharaSimu_updateSetEquipShowDetail();
	 }
	 
	
	function update_charaSimu_addAbilityList(){
		//0: rate, 1:constant
		let doc = document.getElementById('CharaSimu_setEquipAbility');
		let t_setNo = parseInt(doc.getAttribute('data-setno'));
		if ( t_setNo == -1 ) return;
		let t_fieldNo = parseInt(doc.getAttribute('data-fieldno'));
		
		let searchText = document.getElementById('CharaSimu_setEquipAbility_header_search').value.toLowerCase().split(/\s+/);
		
		let Ttext = '';
		for (let i=0; i<cy_character.statList.length; ++i)
		{
			let T_obj = cy_character.statList[i];
			if ( searchText.join('') != '' ) 
			{
				_beConti = false;
				for (j=0; j<searchText.length; ++j)
				{
					if (!T_obj.baseName.includes(searchText[j]) && !searchText[j].includes(T_obj.baseName) &&
					!T_obj.statName.includes(searchText[j]) && !searchText[j].includes(T_obj.statName) )
					{
						_beConti = true;
						break;
					}
				}
				if ( _beConti ) continue;
			}
			
			if (typeof T_obj.canSelect == 'boolean')
			{
				if ( !T_obj.canSelect ) continue;
			}
			else {
				switch (T_obj.canSelect)
				{
					case 'MS': if (!( t_setNo == 0 && (cy_character.charaEquipments[t_fieldNo].fieldName == 'Main_Weapon' || (cy_character.charaEquipments[t_fieldNo].fieldName == 'Sub_Weapon' && (cy_character.charaEquipments[1].type == 2 || cy_character.charaEquipments[1].type == 7)) ) )) continue; break;
				}
			}
			let t_statName = T_obj.get_signStatName(true);
			Ttext += `<li data-abilityno="${i}" data-type="1" onclick="addEquipFieldAbliity(this)"><a data-langtext="${t_statName}"></a><a data-langtext="${( (T_obj.haveRate ) ? '' : T_obj.unit )}"></a></li>`;
			if ( T_obj.haveRate ) Ttext += `<li data-abilityno="${i}" data-type="0" onclick="addEquipFieldAbliity(this)"><a data-langtext="${t_statName}"></a>%</li>`;
		}
		document.getElementById('CharaSimu_setEquipAbility_abilityList').innerHTML = Ttext;
		resetInnerLang(document.getElementById('CharaSimu_setEquipAbility_abilityList'));
	}
	
	
	
	
	document.getElementById('charaSimu_resetCharacter').addEventListener('click', () => {
		window.localStorage.setItem('charaSimu_saveCode_storage_Auto', ')n_' + cy_character.general_saveCode());
		cy_character.loading_skillCode("[1,[['',9,0,0,0,[],[[],[]],['','']],['',6,0,0,0,[],[],['','']],['',3,0,0,0,[],[[],[]],['','']],['',0,0,0,0,[],[[],[]],['','']],['',0,0,0,0,[],[[],[]],['','']],['',0,0,0,0,[],[[],[]],['','']]],[1,1,1,1,1,['none',1]],'################']");
	});