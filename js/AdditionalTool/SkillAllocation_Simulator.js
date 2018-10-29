
	var sum_SkillLv = 0;
	var ATool_MenuList_Second_curBtn = '';
	
	function Sel_SkillAlloSimu(temp){
		
		if ( document.getElementById('SkillAlloSimu_Setting_closeSTList').checked )
		{
			if (document.getElementById('SkillAlloSimu_AddMode_0').style.display != 'none')
			{
				Update_SkillAlloSimu_STList(document.getElementById('SkillAlloSimu_AddMode_0'));
			}
			else {
				Update_SkillAlloSimu_STList(document.getElementById('SkillAlloSimu_AddMode_1'));
			}
		}
		
		let T_sttno = parseInt(temp.getAttribute('data-sttno'));
		let T_stno = parseInt(temp.getAttribute('data-stno'));
		
		if ( document.getElementById('SkillAlloSimu_AddMode_1').style.display != 'none' )
		{	//移除技能樹模式
			SkillAlloSimu_removeSkillTree(T_sttno, T_stno);
			return;
		}
		if (cy_skillSystem.skillTreeType[T_sttno].skillTree[T_stno].selected) return;
		cy_skillSystem.skillTreeType[T_sttno].skillTree[T_stno].selected = true;
		temp.className = 'skillAlloSimu_STList_cur';
		
		SkillAlloSimu_BuildSTTable(T_sttno, T_stno);
		resetInnerLang(document.getElementById('SkillAlloSimu_main'));
	}
	
	function SkillAlloSimu_BuildSTTable(SkillTreeType_No, SkillTree_No){
		let Tsize = -1, T_Ary = [];
		switch (SkillTreeType_No)
		{
			case 0:
				switch (SkillTree_No)
				{
					case 0:
						Tsize = 14;
						T_Ary = [[4, 2, 2, 1], [1], [2, 2, 1], [1], [2, 2, -2], [1, 1]];
						break;
					case 1:
						Tsize = 14;
						T_Ary = [[3, 2, -3], [1, -2], [1, 1, 1, 1], [2, -4], [1, 1, -2]];
						break;
					case 2:
						Tsize = 14;
						T_Ary = [[2, 1, 1, 1, 1], [1, 1, 1, 1], [-5],[1, 1, 1, -2]];
						break;
					case 3:
						Tsize = 14;
						T_Ary = [[2, 1, 1, 1, 1], [1, 1, 1, 1], [1, 1, -3],[1, -4]];
						break;
					case 4:
						Tsize = 11;
						T_Ary = [[4, 1, 1, 1], [1, 1, 1], [1, -2],[1, -2]];
						break;
					case 5:
						Tsize = 14;
						T_Ary = [[4, 2, 2, 1], [1], [2, 1, 1], [-2], [1, -3], [1, 1, -2]];
						break;
					case 6:
						Tsize = 14;
						T_Ary = [[2, 2, 2, 2, 1], [1], [1, 1, -3], [2, -4], [1, 1, -2]];
						break;
				}
				break;
			case 1:
				switch (SkillTree_No)
				{
					case 0:
						Tsize = 8;
						T_Ary = [[2, 1, 1], [-2], [2, 1, 1], [-2]];
						break;
					case 1:
						Tsize = 9;
						T_Ary = [[2, 1, 1, 1], [1, -2], [1, 1, -2]];
						break;
					case 2:
						Tsize = 9;
						T_Ary = [[2, 1, 1, 1], [1, -2], [1, 1, -2]];
						break;
					case 3:
						Tsize = 8;
						T_Ary = [[1, 1, 1, 1], [1, 1, 1, 1]];
						break;
					case 4:
						Tsize = 8;
						T_Ary = [[1, 1, 1, 1], [1, 1, 1, 1]];
						break;
					case 5:
						Tsize = 8;
						T_Ary = [[1, 1, 1, 1], [1, 1, 1, 1]];
						break;
				}
				break;
			case 2:
				switch (SkillTree_No)
				{
					case 0:
						Tsize = 9;
						T_Ary = [[-2], [-2], [-2], [2, 1], [1], [2, 1], [1]];
						break;
					case 1:
						Tsize = 13;
						T_Ary = [[-4], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]];
						break;
					case 2:
						Tsize = 15;
						T_Ary = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];
						break;
				}
				break;
			case 3:
				switch (SkillTree_No)
				{
					case 0:
						Tsize = 15;
						T_Ary = [[4, 1, 1, 1, 1], [1, 1, -2], [2, 1, -2], [1, 1, 1], [-5]];
						break;
					case 1:
						Tsize = 12;
						T_Ary = [[3, 1, 1, 1, 1], [1, 1, -2], [1, 1, -2], [1]];
						break;
					case 2:
						Tsize = 7;
						T_Ary = [[3, 1, 1], [1, 1], [1, 1]];
						break;
				}
				break;
			case 4:
				switch (SkillTree_No)
				{
					case 0:
						Tsize = 6;
						T_Ary = [[1, 1, 1], [1, 1, 1]];
						break;
					case 1:
						Tsize = 6;
						T_Ary = [[1, 1, 1], [1, 1, 1]];
						break;
				}
				break;
		}
		//(T_Ary, SkillTreeType_No, SkillTree_No, Tsize)
		(function (T_Ary, No_STT, No_ST, Table_Size){
			let SkillNo_ct = 1;
			let Ttext = "";
			Ttext += `<table id="SkillAlloSimu_SkillTree_${No_STT}_${No_ST}" data-sttno="${No_STT}" data-stno="${No_ST}">`;
			for (let i=0; i<T_Ary.length; ++i)
			{
				Ttext += "<tr>";
				for (let j=0; j<T_Ary[i].length; j++)
				{
					if (T_Ary[i][j] > 1)
					{
						Ttext += `<td rowspan=${T_Ary[i][j]}`;
					}
					else {
						Ttext += '<td';
					}
					Ttext += ` id="SkillAlloSimu_Skill_${No_STT}_${No_ST}_${SkillNo_ct}" data-sttno="${No_STT}" data-stno="${No_ST}" data-sno="-1" onclick="SkillAlloSimu_SkillPoint(this)"><span id="SkillAlloSimu_SkillLv_${No_STT}_${No_ST}_${SkillNo_ct}">&nbsp;Lv.</span></td>`;
					if (T_Ary[i][j] < -1)
					{
						for (let t1=0; t1<(-T_Ary[i][j])-1; t1++)
						{
						Ttext += "<td></td>";
						}
					}
					SkillNo_ct++;
				}
				Ttext += "</tr>";
			}
			Ttext += "</table>";
			
			document.getElementById('SkillAlloSimu_main').innerHTML += Ttext;
			
			let InputCt = 0;
			let InputCt_max = cy_skillSystem.skillTreeType[No_STT].skillTree[No_ST].skill.length;
			for (let i=0; i<Table_Size; ++i)
			{
				let T_obj = cy_skillSystem.skillTreeType[No_STT].skillTree[No_ST].skill[InputCt];
				if (T_obj.no == i+1)
				{
					let doc = document.getElementById(`SkillAlloSimu_Skill_${No_STT}_${No_ST}_${i+1}`);
					doc.className = "";
					doc.innerHTML = `${T_obj.skillName}${doc.innerHTML}`;
					doc.setAttribute('data-sno', String(InputCt));
					document.getElementById(`SkillAlloSimu_SkillLv_${No_STT}_${No_ST}_${i+1}`).innerHTML = '&nbsp;Lv.' + T_obj.level;
					if (InputCt + 1 < InputCt_max )
					{
						InputCt++;
					}
				}
				else {
					let doc = document.getElementById(`SkillAlloSimu_Skill_${No_STT}_${No_ST}_${i+1}`);
					doc.innerHTML = '<a data-langtext="(Unknow)|,|(尚未開放)"></a>';
					doc.setAttribute('onclick', '');
				}
			}
		})(T_Ary, SkillTreeType_No, SkillTree_No, Tsize);
		
	}
	
	function SkillAlloSimu_removeSkillTree(T_sttno, T_stno){
		if ( !(cy_skillSystem.skillTreeType[T_sttno].skillTree[T_stno].selected) )
		{
			return;
		}
		
		$(`#SkillAlloSimu_SkillTree_${T_sttno}_${T_stno}`).remove();
		cy_skillSystem.skillTreeType[T_sttno].skillTree[T_stno].selected = false;
		document.getElementById(`SkillAlloSimu_STList_${T_sttno}_${T_stno}`).className = '';
		
		for (let i=0; i<cy_skillSystem.skillTreeType[T_sttno].skillTree[T_stno].skill.length; ++i)
		{
			let T_obj = cy_skillSystem.skillTreeType[T_sttno].skillTree[T_stno].skill[i];
			sum_SkillLv -= T_obj.level;
			T_obj.level = 0;
		}
		
		document.getElementById('SkillAlloSimu_skillLvSum').innerHTML = 'Point: ' + sum_SkillLv;
	}
	
	var SkillAlloSimu_CurMode = '';
	function SkillAlloSimu_SelMode(temp){
		let Ttext = temp.innerHTML;
		if ( temp.className.includes('Cur') ) return;
		switch (Ttext)
		{
			case '+':
				document.getElementById('SkillAlloSimu_Mode_Add').className = 'ATool_Btn_3_Cur';
				document.getElementById('SkillAlloSimu_Mode_Div').className = 'ATool_Btn_3';
				break;
			case '-':
				document.getElementById('SkillAlloSimu_Mode_Add').className = 'ATool_Btn_3';
				document.getElementById('SkillAlloSimu_Mode_Div').className = 'ATool_Btn_3_Cur';
				break;
		}
	}
	
	function SkillAlloSimu_SelStep(temp){ 
		let _step = parseInt(temp.id.charAt(temp.id.length-1));
		_step = (_step == 0) ? 10 : _step;
		if ( temp.className.includes('_Cur') ) return;
		
		let _ary = [1, 5, 10];
		
		for (let i=0; i<_ary.length; ++i)
		{
			let doc = document.getElementById('SkillAlloSimu_Step' + _ary[i]);
			if ( doc.className.includes('_Cur') )
			{
				 doc.className = doc.className.replace('_Cur', '');
				break;
			}
		}
		temp.className += '_Cur';
	}
	
	function SkillAlloSimu_SkillPoint(temp){
		//console.log(temp);
		let T_sttno = temp.getAttribute('data-sttno');
		let T_stno = temp.getAttribute('data-stno');
		let T_sno = temp.getAttribute('data-sno');
		
		let Tstep = 11;
		let _stepAry = [1, 5, 10];
		for (let i=0; i<_stepAry.length; ++i)
		{
			if ( document.getElementById('SkillAlloSimu_Step' + _stepAry[i]).className.includes('Cur') )
			{
				Tstep = _stepAry[i];
				break;
			}
		}
		let _curMode = ( document.getElementById('SkillAlloSimu_Mode_Add').className.includes('Cur') ) ? '+' : '-';
		Tstep = ( _curMode == '+' ) ? Tstep : -Tstep;
		
		let T_obj = cy_skillSystem.skillTreeType[T_sttno].skillTree[T_stno].skill[T_sno];
		
		if (T_obj.level + Tstep > 10)
		{
			sum_SkillLv += 10 - T_obj.level;
			T_obj.level = 10;
		}
		else if (T_obj.level + Tstep < 0)
		{
			sum_SkillLv -= T_obj.level;
			T_obj.level = 0;
		}
		else {
			sum_SkillLv += Tstep;
			T_obj.level += Tstep;
		}
		
		(function T_func(T_cur){
			let T_skLoc = cy_skillSystem.skillTreeType[T_sttno].skillTree[T_stno].getSkillIndexByNo(T_cur.preSkill);
			let T_pre = cy_skillSystem.skillTreeType[T_sttno].skillTree[T_stno].skill[T_skLoc];
			if (T_cur.preSkill != 0 && T_pre.level < 5)
			{
				sum_SkillLv += 5 - T_pre.level;
				T_pre.level = 5;
				document.getElementById(`SkillAlloSimu_SkillLv_${T_sttno}_${T_stno}_${T_pre.no}`).innerHTML = '&nbsp;Lv.' + T_pre.level;
				SkillAlloSimu_tdChange(document.getElementById(`SkillAlloSimu_Skill_${T_sttno}_${T_stno}_${T_pre.no}`));
				T_func(T_pre);
			}
			return;
		})(T_obj);
		
		(function T_func(T_cur){
			if ( !(T_cur.level < 5) )
			{
				return;
			}
			for (let i=0; i<cy_skillSystem.skillTreeType[T_sttno].skillTree[T_stno].skill.length; ++i)
			{
				let T_obj_1 = cy_skillSystem.skillTreeType[T_sttno].skillTree[T_stno].skill[i];
				if (T_obj_1.preSkill == T_cur.no)
				{
					if (T_obj_1.level > 0)
					{
						sum_SkillLv -= T_obj_1.level;
						T_obj_1.level = 0;
						document.getElementById(`SkillAlloSimu_SkillLv_${T_sttno}_${T_stno}_${T_obj_1.no}`).innerHTML = '&nbsp;Lv.' + T_obj_1.level;
						SkillAlloSimu_tdChange(document.getElementById(`SkillAlloSimu_Skill_${T_sttno}_${T_stno}_${T_obj_1.no}`));
					}
					T_func(T_obj_1);
				}
			}
			return;
		})(T_obj);
		
		document.getElementById(`SkillAlloSimu_SkillLv_${T_sttno}_${T_stno}_${T_obj.no}`).innerHTML = '&nbsp;Lv.' + T_obj.level;
		SkillAlloSimu_tdChange(document.getElementById(`SkillAlloSimu_Skill_${T_sttno}_${T_stno}_${T_obj.no}`));
		document.getElementById('SkillAlloSimu_skillLvSum').innerHTML = 'Point: ' + sum_SkillLv;
	}
	
	function SkillAlloSimu_tdChange(temp){
		temp.className = 'Skill_td_unable';
		setTimeout(function(){
			temp.className = 'Skill_td_default';
		}, 10);
	}
	
	
	function Update_SkillAlloSimu_STList(temp){
		if (document.getElementById('SkillAlloSimu_STList').style.display != 'block')
		{
			$('#SkillAlloSimu_STList').fadeIn(300);
			if (temp.className == 'ATool_Btn_1')
			{
				temp.className = 'ATool_Btn_1_Cur';
			}
			if (temp.className == 'ATool_Btn_1_1')
			{
				temp.className = 'ATool_Btn_1_1_Cur';
			}
		}
		else {
			$('#SkillAlloSimu_STList').fadeOut(300);
			if (temp.className == 'ATool_Btn_1_Cur')
			{
				temp.className = 'ATool_Btn_1';
			}
			if (temp.className == 'ATool_Btn_1_1_Cur')
			{
				temp.className = 'ATool_Btn_1_1';
			}
		}
	}
	
	/* ================================================= */
	function SkillAlloSimu_toRemoveMode(){
		let addMode_0 = document.getElementById('SkillAlloSimu_AddMode_0');
		let addMode_1 = document.getElementById('SkillAlloSimu_AddMode_1');
		let removeMode = document.getElementById('SkillAlloSimu_RemoveMode_btn');
		
		if ( addMode_0.className.includes('Cur') )
		{
			Update_SkillAlloSimu_STList(addMode_0);
		}
		if ( addMode_1.className.includes('Cur') )
		{
			Update_SkillAlloSimu_STList(addMode_1);
		}
		
		if ( addMode_0.style.display != 'none' )
		{
			addMode_0.style.display = 'none';
			addMode_1.style.display = 'block';
			//removeMode.innerHTML = '新增技能樹模式';
			removeMode.className = "ATool_Btn_5_Cur";
		}
		else {
			addMode_0.style.display = 'block';
			addMode_1.style.display = 'none';
			//removeMode.innerHTML = '移除技能樹模式';
			removeMode.className = "ATool_Btn_5";
		}  
		if ( document.getElementById('SkillAlloSimu_Setting_closeMenuList').checked )
		{
			open_ATool_MenuList();
		}
	}
	
	/* ================================================= */
	function SkillAlloSimu_ResetAll(){
		for (let i=0; i<cy_skillSystem.skillTreeType.length; ++i)
		{
			for (let j=0; j<cy_skillSystem.skillTreeType[i].skillTree.length; ++j)
			{
				let T_ST = cy_skillSystem.skillTreeType[i].skillTree[j];
				if ( T_ST.selected )
				{
					$(`#SkillAlloSimu_SkillTree_${i}_${j}`).remove();
					T_ST.selected = false;
					for (let k=0; k<T_ST.skill.length; ++k)
					{
						T_ST.skill[k].level = 0;
					}
				}
			}
		}
		
		let T_ary = document.getElementById('SkillAlloSimu_STList').getElementsByTagName('a');
		for (let i=0; i<T_ary.length; ++i)
		{
			T_ary[i].className = '';
		}
		
		sum_SkillLv = 0;
		document.getElementById('SkillAlloSimu_skillLvSum').innerHTML = 'Point: ' + sum_SkillLv;
		if ( document.getElementById('SkillAlloSimu_Setting_closeMenuList').checked )
		{
			open_ATool_MenuList();
		}
	}
	/* ================================================= */
	function SkillAlloSimu_RemoveAllEmpty(){
		for (let i=0; i<cy_skillSystem.skillTreeType.length; ++i)
		{
			for (let j=0; j<cy_skillSystem.skillTreeType[i].skillTree.length; ++j)
			{
				let T_ST = cy_skillSystem.skillTreeType[i].skillTree[j];
				let notEmpty = false;
				for (let k=0; k<T_ST.skill.length; ++k)
				{
					if (T_ST.skill[k].level != 0)
					{
						notEmpty = true;
						break;
					}
				}
				if ( !notEmpty )
				{
					SkillAlloSimu_removeSkillTree(i, j);
				}
			}
		}
		if ( document.getElementById('SkillAlloSimu_Setting_closeMenuList').checked )
		{
			open_ATool_MenuList();
		}
	}
	
	/* ================================================= */
	function SkillAlloSimu_resetSaveCodeList(){
		if ( !window.localStorage )
		{
			showWarningMsg('This browser version does not support Web Storage.');
			document.getElementById('charaSimu_SaveCode_dataList').innerHTML = 'This browser version does not support Web Storage.';
			return;
		}
		Ttext = '<ul>', storage_size = 5;
		for (let i=0; i<storage_size; ++i)
		{
			let _storage = window.localStorage['SkillAlloSimu_SaveCode_storage' + i];
			let _title = '(No Data)';
			let _loadCode = '';
			if ( _storage )
			{
				let reg = /.*\)n_/;
				_title = _storage.match(reg)[0].replace(')n_', '');
				//console.log(_title);
				_loadCode = _storage.replace(reg, '');
			}
			Ttext += `<li>${_title}<div><span data-loadingcode="${_loadCode}" onclick="SkillAlloSimu_CopyFromStorage(this)"><a data-langtext="Copy|,|複製|,|Copy"></a></span><span data-lino="${i}" onclick="SkillAlloSimu_SaveToStorage_setTitle(this)"><a data-langtext="Save|,|存檔|,|Save"></a></span><span data-loadingcode="${_loadCode}" onclick="SkillAlloSimu_LoadFromStorage(this)"><a data-langtext="Load|,|讀取|,|Load"></a></span></div></li>`;
		}
		Ttext += '</ul>';
		document.getElementById('SkillAlloSimu_SaveCode_dataList').innerHTML = Ttext;
		resetInnerLang(document.getElementById('SkillAlloSimu_SaveCode_dataList'));
	}
	
	function SkillAlloSimu_open_Second(temp){
		let T_menuno = parseInt(temp.getAttribute('data-menuno'));
		ATool_toMenuListSecond();
		if ( ATool_MenuList_Second_curBtn != '' )
		{
			document.getElementById(ATool_MenuList_Second_curBtn).style.display = 'none';
		}
		
		let Ttext;
		switch (T_menuno)
		{
			case 0:
				ATool_MenuList_Second_curBtn = 'SkillAlloSimu_BuildText_Block';
				break;
			case 1:
				ATool_MenuList_Second_curBtn = 'SkillAlloSimu_SaveCode_Block';
				SkillAlloSimu_resetSaveCodeList();
				break;
		}
		document.getElementById(ATool_MenuList_Second_curBtn).style.display = 'block';
	}
	function SkillAlloSimu_SaveToStorage_setTitle(temp){
		if ( !window.localStorage ) return;
		let doc = document.getElementById('SkillAlloSimu_SaveCode_saveTitle');
		doc.style.display = 'block';
		doc.getElementsByTagName('input')[0].setAttribute('data-lino', temp.getAttribute('data-lino'));
		doc.getElementsByTagName('input')[0].value = '';
		doc.getElementsByTagName('input')[0].focus();
	}
	function SkillAlloSimu_SaveToStorage(temp){
		if ( !window.localStorage ) return;
		if ( temp.value == '' )
		{
			temp.parentNode.style.display = 'none';
			showWarningMsg('Cancle.');
			return;
		}
		let t_lino = temp.getAttribute('data-lino');
		let saveCode = temp.value + ')n_' + SkillAlloSimu_SaveCode_generalCode();
		window.localStorage.setItem('SkillAlloSimu_SaveCode_storage' + t_lino, saveCode);
		SkillAlloSimu_resetSaveCodeList();
		temp.parentNode.style.display = 'none';
	}
	function SkillAlloSimu_LoadFromStorage(temp){
		if ( !window.localStorage ) return;
		let loadCode = temp.getAttribute('data-loadingcode');
		SkillAlloSimu_SaveCode_LoadingCode(loadCode);
	}
	function SkillAlloSimu_CopyFromStorage(temp){
		if ( !window.localStorage ) return;
		let loadCode = temp.getAttribute('data-loadingcode');
		let doc = document.getElementById('SkillAlloSimu_SaveCode_text');
		doc.value = loadCode;
		doc.select();
		document.execCommand('copy');
	}
	
	function SkillAlloSimu_BuildText_selMode(temp){
		let T_modeno = parseInt(temp.getAttribute('data-modeno'));
		let Ttext = '';
		
		let T_sum_SkillLv_title = ['Total skill point: ', '使用的技能點： ', 'Total skill point: '];
		
		switch (T_modeno)
		{
			case 0:
				for (let i=0; i<cy_skillSystem.skillTreeType.length; ++i)
				{
					Ttext += '~ ' + cy_skillSystem.skillTreeType[i].name + '\r\n';
					for (let j=0; j<cy_skillSystem.skillTreeType[i].skillTree.length; ++j)
					{
						let T_ST = cy_skillSystem.skillTreeType[i].skillTree[j];
						let notEmpty = true;
						if (document.getElementById('SkillAlloSimu_BuildText_ignoreEmpty').checked)
						{
							notEmpty = false;
							for (let k=0; k<T_ST.skill.length; ++k)
							{
								if (T_ST.skill[k].level != 0)
								{
									notEmpty = true;
									break;
								}
							}
						}
						if ( T_ST.selected && notEmpty)
						{
							Ttext += '  - ' + T_ST.name + '：';
							let T_ary = [];
							for (let k=0; k<T_ST.skill.length; ++k)
							{
								
								if (T_ST.skill[k].level != 0)
								{
									T_ary.push(T_ST.skill[k].skillName + " Lv." + T_ST.skill[k].level);
								}
							}
							Ttext += T_ary.join('、') + '\r\n';
						}
					}
					Ttext += '\r\n';
				}
				if ( document.getElementById('SkillAlloSimu_BuildText_showSkillPointSum').checked )
				{
					Ttext += T_sum_SkillLv_title[getCur_languageNo()] + sum_SkillLv + '\r\n';
				}
				break;
			case 1:
				for (let i=0; i<cy_skillSystem.skillTreeType.length; ++i)
				{
					Ttext += '~ ' + cy_skillSystem.skillTreeType[i].name + '\r\n';
					for (let j=0; j<cy_skillSystem.skillTreeType[i].skillTree.length; ++j)
					{
						let T_ST = cy_skillSystem.skillTreeType[i].skillTree[j];
						let notEmpty = true;
						if (document.getElementById('SkillAlloSimu_BuildText_ignoreEmpty').checked)
						{
							notEmpty = false;
							for (let k=0; k<T_ST.skill.length; ++k)
							{
								if (T_ST.skill[k].level != 0)
								{
									notEmpty = true;
									break;
								}
							}
						}
						if ( T_ST.selected && notEmpty)
						{
							Ttext += '  - ' + T_ST.name + '：';
							let T_ary = [];
							for (let k=0; k<T_ST.skill.length; ++k)
							{
								
								if (T_ST.skill[k].level != 0)
								{
									T_ary.push(T_ST.skill[k].skillName + "Lv." + T_ST.skill[k].level);
								}
							}
							Ttext += T_ary.join('、') + '\r\n';
						}
					}
					Ttext += '\r\n';
				}
				if ( document.getElementById('SkillAlloSimu_BuildText_showSkillPointSum').checked )
				{
					Ttext += T_sum_SkillLv_title[getCur_languageNo()] + sum_SkillLv;
				}
				break;
		}
		let _reg = /<a data-langtext="([^\"]*)"><\/a>/;
		while ( Ttext.match(_reg) )
		{
			Ttext = Ttext.replace(_reg, RegExp.$1.split('|,|')[getCur_languageNo()] || RegExp.$1.split('|,|')[0]);
		}
		let T_watermark = ["(Copy from Cy's Grimoire)", "(產生自Cy's Grimoire)", "(Copy from Cy's Grimoire)"];
		document.getElementById('SkillAlloSimu_BuildText_textarea').value = Ttext + "\r\n" + T_watermark[getCur_languageNo()];
	}
	
	function SkillAlloSimu_BuildText_Copy(){
		 document.getElementById('SkillAlloSimu_BuildText_textarea').select();
		 document.execCommand('copy');
	}
	
	/* ================================================= */
	
	function SkillAlloSimu_SaveCode_Save(){
		document.getElementById('SkillAlloSimu_SaveCode_text').value = SkillAlloSimu_SaveCode_generalCode();
	}
	function SkillAlloSimu_SaveCode_generalCode(){
		let T_code = '';
		for (let i=0; i<cy_skillSystem.skillTreeType.length; ++i)
		{
			for (let j=0; j<cy_skillSystem.skillTreeType[i].skillTree.length; ++j)
			{
				for (let k=0; k<cy_skillSystem.skillTreeType[i].skillTree[j].skill.length; ++k)
				{
					if ( !cy_skillSystem.skillTreeType[i].skillTree[j].selected )
					{
						T_code += "#";
						break;
					}
					switch (cy_skillSystem.skillTreeType[i].skillTree[j].skill[k].level)
					{
						case 0: T_code += "C"; break;
						case 1: T_code += "Y"; break;
						case 2: T_code += "S"; break;
						case 3: T_code += "G"; break;
						case 4: T_code += "R"; break;
						case 5: T_code += "I"; break;
						case 6: T_code += "M"; break;
						case 7: T_code += "O"; break;
						case 8: T_code += "A"; break;
						case 9: T_code += "R"; break;
						case 10: T_code += "E"; break;
					}
				}
			}
		}
		return T_code;
	}
	function SkillAlloSimu_SaveCode_LoadingCode(loadingCode){
		try {
			if (loadingCode == '') return;
			//初始化
			SkillAlloSimu_ResetAll();
			
			let codeAry = [];
			let Tstr = loadingCode;
			
			let strCnt = 0;
			for (let i=0; i<cy_skillSystem.skillTreeType.length; ++i)
			{
				codeAry.push([]);
				for (let j=0; j<cy_skillSystem.skillTreeType[i].skillTree.length; ++j)
				{
					codeAry[i].push([]);
					for (let k=0, T_length=cy_skillSystem.skillTreeType[i].skillTree[j].skill.length; k<T_length; ++k)
					{
						let T = 0;
						switch ( Tstr.charAt(strCnt) )
						{
							case "C":
							case "#": T = 0; break;
							case "Y": T = 1; break;
							case "S": T = 2; break;
							case "G": T = 3; break;
							case "R": T = 4; break;
							case "I": T = 5; break;
							case "M": T = 6; break;
							case "O": T = 7; break;
							case "A": T = 8; break;
							case "R": T = 9; break;
							case "E": T = 10; break;
							default: T = 0;
						}
						codeAry[i][j].push(T);
						if (Tstr.charAt(strCnt) != "#" || k == T_length - 1)
						{
							++strCnt;
						}
					}
				}
			}
			//console.log(codeAry);
			for (let i=0; i<cy_skillSystem.skillTreeType.length; ++i)
			{
				for (let j=0; j<cy_skillSystem.skillTreeType[i].skillTree.length; ++j)
				{
					for (let k=0; k<cy_skillSystem.skillTreeType[i].skillTree[j].skill.length; ++k)
					{
						if ( codeAry[i][j][k] != 0 )
						{
							cy_skillSystem.skillTreeType[i].skillTree[j].selected = true;
							document.getElementById(`SkillAlloSimu_STList_${i}_${j}`).className = "skillAlloSimu_STList_cur";
							break;
						}	
					}
				}
			}
			
			for (let i=0; i<cy_skillSystem.skillTreeType.length; ++i)
			{
				for (let j=0; j<cy_skillSystem.skillTreeType[i].skillTree.length; ++j)
				{
					if ( cy_skillSystem.skillTreeType[i].skillTree[j].selected )
					{
						for (let k=0; k<cy_skillSystem.skillTreeType[i].skillTree[j].skill.length; ++k)
						{
							cy_skillSystem.skillTreeType[i].skillTree[j].skill[k].level = codeAry[i][j][k];
							sum_SkillLv += codeAry[i][j][k];
						}
						SkillAlloSimu_BuildSTTable(i, j);
					}
				}
			}
			document.getElementById('SkillAlloSimu_skillLvSum').innerHTML = 'Point: ' + sum_SkillLv;
			resetInnerLang(document.getElementById('SkillAlloSimu_main'));
		}
		catch(e) {
			showWarningMsg('Incorrect Code. Please try again.');
		}
	}
	
	function SkillAlloSimu_SaveCode_Load(){
		SkillAlloSimu_SaveCode_LoadingCode(document.getElementById('SkillAlloSimu_SaveCode_text').value);
	}
	
	function SkillAlloSimu_SaveCode_Copy(){
		document.getElementById('SkillAlloSimu_SaveCode_text').select();
		document.execCommand('copy');
	}
	