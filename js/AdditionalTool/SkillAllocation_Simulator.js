
	var sum_SkillLv = 0;
	
	function Sel_SkillAlloSimu(temp){
		
		if ( document.getElementById('SkillAlloSimu_Setting_closeSTList').checked )
		{
			Update_SkillAlloSimu_STList(document.getElementById('SkillAlloSimu_AddMode'));
		}
		
		let T_sttno = parseInt(temp.getAttribute('data-sttno'));
		let T_stno = parseInt(temp.getAttribute('data-stno'));
		
		if ( document.getElementById('SkillAlloSimu_AddMode').getAttribute('data-modeno') == "1" )
		{
			SkillAlloSimu_removeSkillTree(T_sttno, T_stno);
			return;
		}
		if (all_skilltree_type[T_sttno].STt_skilltree[T_stno].ST_beSel)
		{
			return;
		}
		all_skilltree_type[T_sttno].STt_skilltree[T_stno].ST_beSel = true;
		
		//(T_sttno, T_stno)
		(function (SkillTreeType_No, SkillTree_No){
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
						doc.className = "Skill_td_default";
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
			
		})(T_sttno, T_stno);
	}
	
	function SkillAlloSimu_removeSkillTree(T_sttno, T_stno){
		if ( !(all_skilltree_type[T_sttno].STt_skilltree[T_stno].ST_beSel) )
		{
			return;
		}
		$(`#SkillAlloSimu_SkillTree_${T_sttno}_${T_stno}`).remove();
		
		all_skilltree_type[T_sttno].STt_skilltree[T_stno].ST_beSel = false;
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
	
	function open_SkillAlloSimu_Menu_List(){
		let doc = document.getElementById('SkillAlloSimu_Menu_List');
		if (doc.style.display == 'block')
		{
			$('#SkillAlloSimu_Menu_List').fadeOut(400);
		}
		else {
			$('#SkillAlloSimu_Menu_List').fadeIn(400);
		}
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
	
	function SkillAlloSimu_toRemoveMode(){
		let addMode = document.getElementById('SkillAlloSimu_AddMode');
		let removeMode = document.getElementById('SkillAlloSimu_RemoveMode');
		
		if ( addMode.className.includes('Cur') )
		{
			Update_SkillAlloSimu_STList(addMode);
		}
		
		if ( addMode.getAttribute('data-modeno') == "0" )
		{
			addMode.innerHTML = "移除技能樹";
			addMode.setAttribute('data-modeno', "1");
			addMode.className = "ATool_Btn_1_1";
			//removeMode.innerHTML = '新增技能樹模式';
			removeMode.className = "ATool_Btn_5_Cur";
		}
		else {
			addMode.innerHTML = "新增技能樹";
			addMode.setAttribute('data-modeno', "0");
			addMode.className = "ATool_Btn_1";
			//removeMode.innerHTML = '移除技能樹模式';
			removeMode.className = "ATool_Btn_5";
		}  
		if ( document.getElementById('SkillAlloSimu_Setting_closeMenuList').checked )
		{
			open_SkillAlloSimu_Menu_List();
		}
	}      