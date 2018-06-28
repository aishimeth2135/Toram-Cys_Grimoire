
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
		if (all_skilltree_type[T_sttno].STt_skilltree[T_stno].ST_beSel)
		{
			return;
		}
		all_skilltree_type[T_sttno].STt_skilltree[T_stno].ST_beSel = true;
		temp.className = 'skillAlloSimu_STList_cur';
		
		SkillAlloSimu_BuildSTTable(T_sttno, T_stno);
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
			let InputCt_max = all_skilltree_type[No_STT].STt_skilltree[No_ST].ST_skill.length;
			for (let i=0; i<Table_Size; ++i)
			{
				let T_obj = all_skilltree_type[No_STT].STt_skilltree[No_ST].ST_skill[InputCt];
				if (T_obj.Sk_no == i+1)
				{
					let doc = document.getElementById(`SkillAlloSimu_Skill_${No_STT}_${No_ST}_${i+1}`);
					doc.className = "";
					doc.innerHTML = `${T_obj.Sk_name}${doc.innerHTML}`;
					doc.setAttribute('data-sno', String(InputCt));
					document.getElementById(`SkillAlloSimu_SkillLv_${No_STT}_${No_ST}_${i+1}`).innerHTML = '&nbsp;Lv.' + T_obj.Sk_lv;
					if (InputCt + 1 < InputCt_max )
					{
						InputCt++;
					}
				}
				else {
					let doc = document.getElementById(`SkillAlloSimu_Skill_${No_STT}_${No_ST}_${i+1}`);
					doc.innerHTML = "(尚未開放)";
					doc.onclick = '';
				}
			}
		})(T_Ary, SkillTreeType_No, SkillTree_No, Tsize);
		
	}
	
	function SkillAlloSimu_removeSkillTree(T_sttno, T_stno){
		if ( !(all_skilltree_type[T_sttno].STt_skilltree[T_stno].ST_beSel) )
		{
			return;
		}
		
		$(`#SkillAlloSimu_SkillTree_${T_sttno}_${T_stno}`).remove();
		all_skilltree_type[T_sttno].STt_skilltree[T_stno].ST_beSel = false;
		document.getElementById(`SkillAlloSimu_STList_${T_sttno}_${T_stno}`).className = '';
		
		for (let i=0; i<all_skilltree_type[T_sttno].STt_skilltree[T_stno].ST_skill.length; ++i)
		{
			let T_obj = all_skilltree_type[T_sttno].STt_skilltree[T_stno].ST_skill[i];
			sum_SkillLv -= T_obj.Sk_lv;
			T_obj.Sk_lv = 0;
		}
		
		document.getElementById('SkillAlloSimu_skillLvSum').innerHTML = 'Point: ' + sum_SkillLv;
	}
	
	var SkillAlloSimu_CurMode = '';
	function SkillAlloSimu_SelMode(temp){
		let Ttext = temp.innerHTML;
		if (SkillAlloSimu_CurMode == Ttext)
		{
			return;
		}
		switch (Ttext)
		{
			case '+':
				document.getElementById('SkillAlloSimu_Mode_Add').className = 'ATool_Btn_3_Cur';
				document.getElementById('SkillAlloSimu_Mode_Div').className = 'ATool_Btn_3';
				SkillAlloSimu_CurMode = '+';
				break;
			case '-':
				document.getElementById('SkillAlloSimu_Mode_Add').className = 'ATool_Btn_3';
				document.getElementById('SkillAlloSimu_Mode_Div').className = 'ATool_Btn_3_Cur';
				SkillAlloSimu_CurMode = '-';
				break;
		}
	}
	
	var SkillAlloSimu_CurStep = 0;
	function SkillAlloSimu_SelStep(temp){ 
		let TNo = parseInt(temp.id.charAt(temp.id.length-1));
		TNo = (TNo == 0) ? 10 : TNo;
		if (SkillAlloSimu_CurStep == TNo)
		{
			return;
		}
		if (SkillAlloSimu_CurStep != 0)
		{
			document.getElementById('SkillAlloSimu_Step' + String(SkillAlloSimu_CurStep)).className = 'ATool_Btn_4';
		}
		temp.className = 'ATool_Btn_4_Cur';
		
		SkillAlloSimu_CurStep = TNo;
	}
	
	function SkillAlloSimu_SkillPoint(temp){
		//console.log(temp);
		let T_sttno = temp.getAttribute('data-sttno');
		let T_stno = temp.getAttribute('data-stno');
		let T_sno = temp.getAttribute('data-sno');
		
		let Tstep = 11;
		if ( SkillAlloSimu_CurMode == '-')
		{
			Tstep = -(SkillAlloSimu_CurStep);
		}
		else {
			Tstep = (SkillAlloSimu_CurStep);
		}
		
		let T_obj = all_skilltree_type[T_sttno].STt_skilltree[T_stno].ST_skill[T_sno];
		
		
		if (T_obj.Sk_lv + Tstep > 10)
		{
			sum_SkillLv += 10 - T_obj.Sk_lv;
			T_obj.Sk_lv = 10;
		}
		else if (T_obj.Sk_lv + Tstep < 0)
		{
			sum_SkillLv -= T_obj.Sk_lv;
			T_obj.Sk_lv = 0;
		}
		else {
			sum_SkillLv += Tstep;
			T_obj.Sk_lv += Tstep;
		}
		
		(function T_func(T_cur){
			let T_skLoc = all_skilltree_type[T_sttno].STt_skilltree[T_stno].Sk_No_FindLocation(T_cur.Sk_pre);
			let T_pre = all_skilltree_type[T_sttno].STt_skilltree[T_stno].ST_skill[T_skLoc];
			if (T_cur.Sk_pre != 0 && T_pre.Sk_lv < 5)
			{
				sum_SkillLv += 5 - T_pre.Sk_lv;
				T_pre.Sk_lv = 5;
				document.getElementById(`SkillAlloSimu_SkillLv_${T_sttno}_${T_stno}_${T_pre.Sk_no}`).innerHTML = '&nbsp;Lv.' + T_pre.Sk_lv;
				SkillAlloSimu_tdChange(document.getElementById(`SkillAlloSimu_Skill_${T_sttno}_${T_stno}_${T_pre.Sk_no}`));
				T_func(T_pre);
			}
			return;
		})(T_obj);
		
		(function T_func(T_cur){
			if ( !(T_cur.Sk_lv < 5) )
			{
				return;
			}
			for (let i=0; i<all_skilltree_type[T_sttno].STt_skilltree[T_stno].ST_skill.length; ++i)
			{
				let T_obj_1 = all_skilltree_type[T_sttno].STt_skilltree[T_stno].ST_skill[i];
				if (T_obj_1.Sk_pre == T_cur.Sk_no)
				{
					if (T_obj_1.Sk_lv > 0)
					{
						sum_SkillLv -= T_obj_1.Sk_lv;
						T_obj_1.Sk_lv = 0;
						document.getElementById(`SkillAlloSimu_SkillLv_${T_sttno}_${T_stno}_${T_obj_1.Sk_no}`).innerHTML = '&nbsp;Lv.' + T_obj_1.Sk_lv;
						SkillAlloSimu_tdChange(document.getElementById(`SkillAlloSimu_Skill_${T_sttno}_${T_stno}_${T_obj_1.Sk_no}`));
					}
					T_func(T_obj_1);
				}
			}
			return;
		})(T_obj);
		
		document.getElementById(`SkillAlloSimu_SkillLv_${T_sttno}_${T_stno}_${T_obj.Sk_no}`).innerHTML = '&nbsp;Lv.' + T_obj.Sk_lv;
		SkillAlloSimu_tdChange(document.getElementById(`SkillAlloSimu_Skill_${T_sttno}_${T_stno}_${T_obj.Sk_no}`));
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
		for (let i=0; i<all_skilltree_type.length - HiddenEgg_controlNo; ++i)
		{
			for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
			{
				let T_ST = all_skilltree_type[i].STt_skilltree[j];
				if ( T_ST.ST_beSel )
				{
					$(`#SkillAlloSimu_SkillTree_${i}_${j}`).remove();
					T_ST.ST_beSel = false;
					for (let k=0; k<T_ST.ST_skill.length; ++k)
					{
						T_ST.ST_skill[k].Sk_lv = 0;
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
		for (let i=0; i<all_skilltree_type.length - HiddenEgg_controlNo; ++i)
		{
			for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
			{
				let T_ST = all_skilltree_type[i].STt_skilltree[j];
				let notEmpty = false;
				for (let k=0; k<T_ST.ST_skill.length; ++k)
				{
					if (T_ST.ST_skill[k].Sk_lv != 0)
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
			Ttext += `<li>${_title}<div><span data-loadingcode="${_loadCode}" onclick="SkillAlloSimu_CopyFromStorage(this)">Copy</span><span data-lino="${i}" onclick="SkillAlloSimu_SaveToStorage_setTitle(this)">Save</span><span data-loadingcode="${_loadCode}" onclick="SkillAlloSimu_LoadFromStorage(this)">Load</span></div></li>`;
		}
		Ttext += '</ul>';
		document.getElementById('SkillAlloSimu_SaveCode_dataList').innerHTML = Ttext;
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
		let doc = document.getElementById('SkillAlloSimu_SaveCode_saveTitle');
		doc.style.display = 'block';
		doc.getElementsByTagName('input')[0].setAttribute('data-lino', temp.getAttribute('data-lino'));
		doc.getElementsByTagName('input')[0].focus();
	}
	function SkillAlloSimu_SaveToStorage(temp){
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
		let loadCode = temp.getAttribute('data-loadingcode');
		SkillAlloSimu_SaveCode_LoadingCode(loadCode);
	}
	function SkillAlloSimu_CopyFromStorage(temp){
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
				for (let i=0; i<all_skilltree_type.length - HiddenEgg_controlNo; ++i)
				{
					Ttext += '~ ' + all_skilltree_type[i].STt_name + '\r\n';
					for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
					{
						let T_ST = all_skilltree_type[i].STt_skilltree[j];
						let notEmpty = true;
						if (document.getElementById('SkillAlloSimu_BuildText_ignoreEmpty').checked)
						{
							notEmpty = false;
							for (let k=0; k<T_ST.ST_skill.length; ++k)
							{
								if (T_ST.ST_skill[k].Sk_lv != 0)
								{
									notEmpty = true;
									break;
								}
							}
						}
						if ( T_ST.ST_beSel && notEmpty)
						{
							Ttext += '  - ' + T_ST.ST_name + '：';
							let T_ary = [];
							for (let k=0; k<T_ST.ST_skill.length; ++k)
							{
								
								if (T_ST.ST_skill[k].Sk_lv != 0)
								{
									T_ary.push(T_ST.ST_skill[k].Sk_name + " Lv." + T_ST.ST_skill[k].Sk_lv);
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
				for (let i=0; i<all_skilltree_type.length - HiddenEgg_controlNo; ++i)
				{
					Ttext += '~ ' + all_skilltree_type[i].STt_name + '\r\n';
					for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
					{
						let T_ST = all_skilltree_type[i].STt_skilltree[j];
						let notEmpty = true;
						if (document.getElementById('SkillAlloSimu_BuildText_ignoreEmpty').checked)
						{
							notEmpty = false;
							for (let k=0; k<T_ST.ST_skill.length; ++k)
							{
								if (T_ST.ST_skill[k].Sk_lv != 0)
								{
									notEmpty = true;
									break;
								}
							}
						}
						if ( T_ST.ST_beSel && notEmpty)
						{
							Ttext += '  - ' + T_ST.ST_name + '：';
							let T_ary = [];
							for (let k=0; k<T_ST.ST_skill.length; ++k)
							{
								
								if (T_ST.ST_skill[k].Sk_lv != 0)
								{
									T_ary.push(T_ST.ST_skill[k].Sk_name + "Lv." + T_ST.ST_skill[k].Sk_lv);
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
		for (let i=0; i<all_skilltree_type.length - HiddenEgg_controlNo; ++i)
		{
			for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
			{
				for (let k=0; k<all_skilltree_type[i].STt_skilltree[j].ST_skill.length; ++k)
				{
					if ( !all_skilltree_type[i].STt_skilltree[j].ST_beSel )
					{
						T_code += "#";
						break;
					}
					switch (all_skilltree_type[i].STt_skilltree[j].ST_skill[k].Sk_lv)
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
		if (loadingCode == '') return;
		//初始化
		SkillAlloSimu_ResetAll();
		
		let codeAry = [];
		let Tstr = loadingCode;
		
		let strCnt = 0;
		for (let i=0; i<all_skilltree_type.length - HiddenEgg_controlNo; ++i)
		{
			codeAry.push([]);
			for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
			{
				codeAry[i].push([]);
				for (let k=0, T_length=all_skilltree_type[i].STt_skilltree[j].ST_skill.length; k<T_length; ++k)
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
						default:
							alert('Error: Unable to load the code. Please revise the code and try again or ask the author(Link of Twitter is at the bottom of this page).');
							return;
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
		for (let i=0; i<all_skilltree_type.length - HiddenEgg_controlNo; ++i)
		{
			for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
			{
				for (let k=0; k<all_skilltree_type[i].STt_skilltree[j].ST_skill.length; ++k)
				{
					if ( codeAry[i][j][k] != 0 )
					{
						all_skilltree_type[i].STt_skilltree[j].ST_beSel = true;
						document.getElementById(`SkillAlloSimu_STList_${i}_${j}`).className = "skillAlloSimu_STList_cur";
						break;
					}	
				}
			}
		}
		
		for (let i=0; i<all_skilltree_type.length - HiddenEgg_controlNo; ++i)
		{
			for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
			{
				if ( all_skilltree_type[i].STt_skilltree[j].ST_beSel )
				{
					for (let k=0; k<all_skilltree_type[i].STt_skilltree[j].ST_skill.length; ++k)
					{
						all_skilltree_type[i].STt_skilltree[j].ST_skill[k].Sk_lv = codeAry[i][j][k];
						sum_SkillLv += codeAry[i][j][k];
					}
					SkillAlloSimu_BuildSTTable(i, j);
				}
			}
		}
		document.getElementById('SkillAlloSimu_skillLvSum').innerHTML = 'Point: ' + sum_SkillLv;
	}
	
	function SkillAlloSimu_SaveCode_Load(){
		SkillAlloSimu_SaveCode_LoadingCode(document.getElementById('SkillAlloSimu_SaveCode_text').value);
	}
	
	function SkillAlloSimu_SaveCode_Copy(){
		document.getElementById('SkillAlloSimu_SaveCode_text').select();
		document.execCommand('copy');
	}
	