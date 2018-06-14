
	function updateSite_skillCaption_1(tno_stt, tno_st, tno_s){
		switch (getCur_languageNo())
		{
			case 0:
				en_input_skillCaptionSI_1(tno_stt, tno_st, tno_s);
				break;                   
			case 1:                      
				zh_input_skillCaptionSI_1(tno_stt, tno_st, tno_s);
				break;                   
			case 2:                      
				jp_input_skillCaptionSI_1(tno_stt, tno_st, tno_s);
				break;
		}
		
		show_discription_1();
	}
	function updateSite_skillCaption_2(Tno_skillTreeType, Tno_skillTree, Tno_skill, skillBranchNo){
		switch (getCur_languageNo())
		{
			case 0:
				en_input_skillCaptionSI_2(Tno_skillTreeType, Tno_skillTree, Tno_skill, skillBranchNo);
				break;
			case 1:
				zh_input_skillCaptionSI_2(Tno_skillTreeType, Tno_skillTree, Tno_skill, skillBranchNo);
				break;
			case 2:
				jp_input_skillCaptionSI_2(Tno_skillTreeType, Tno_skillTree, Tno_skill, skillBranchNo);
				break;
		}
		show_discription_2();
	}
				
	function armsDoor(T_W, T_Au, T_B){			//三部位中任一項符合
		if (T_W != -1 && WeapType_Cur != -1)
		{
			if (T_W == WeapType_Cur)
			{
				return true;
			}
		}
		if (T_Au != -1 && AuType_Cur != -1)
		{
			if (T_Au == AuType_Cur)
			{
				return true;
			}
		}
		if (T_B != -1 && bodyType_Cur != -1)
		{
			if (T_B == bodyType_Cur)
			{
				return true;
			}
		}
		return false;
	}
	
	function show_discription_1(){
	//	$('#ShowCaption_Body_1').fadeIn(350);
		let ShowCaption_1_text = '';
		for (let i=8; i<=13; ++i)
		{
			if (all_SI[i].SI_value != '' && all_SI[i].SI_value != 0)
			{
				if (ShowCaption_1_text != '')
				{
					ShowCaption_1_text += '<br />' + all_SI[i].SI_name + all_SI[i].SI_value + all_SI[i].SI_unit;
				}
				else {
					ShowCaption_1_text += all_SI[i].SI_name + all_SI[i].SI_value + all_SI[i].SI_unit;
				}
			}
		}
		if (all_SI[14].SI_value == '')
		{
			all_SI[14].SI_value = '(待補)';
		}
		document.getElementById('ShowCaption_1').innerHTML = ShowCaption_1_text;
		document.getElementById('ShowCaption_2').innerHTML = all_SI[14].SI_value;
		document.getElementById('ShowCaption_3').innerHTML = all_SI[15].SI_value;
	}
	
	function show_discription_2(){
		$('#ShowCaption_5').fadeIn(250);
		//ShowCaption_4
		let ShowCaption_4_text = '';
		for (let i=16; i<=24; ++i)
		{
			if (all_SI[i].SI_value != '' && all_SI[i].SI_value != 0)
			{
				if (ShowCaption_4_text == '')
				{
					ShowCaption_4_text += all_SI[i].SI_name + all_SI[i].SI_value + all_SI[i].SI_unit;
				}
				else {
					ShowCaption_4_text += '<br />' + all_SI[i].SI_name + all_SI[i].SI_value + all_SI[i].SI_unit;
				}
			}
		}
		
		//ShowCaption_5
		let ShowCaption_5_text = '';
		if (all_SI[0].SI_value != '')
		{
			ShowCaption_5_text += all_SI[0].SI_value;
		}
		if (all_SI[1].SI_value != '')
		{
			if (all_SI[2].SI_value != '' && all_SI[2].SI_value != 0)
			{
				ShowCaption_5_text += '<br />(' + all_SI[1].SI_value + all_SI[2].SI_name + all_SI[2].SI_value + ')';
			}
			else {
				ShowCaption_5_text += '<br />' + all_SI[1].SI_value;
			}
		}
		if (all_SI[3].SI_value != 0)
		{
			if (all_SI[4].SI_value != '' && all_SI[4].SI_value != 0)
			{
				ShowCaption_5_text += all_SI[3].SI_name + '(' + all_SI[3].SI_value + '+' + all_SI[4].SI_name + ')%';
				ShowCaption_5_text += '<br />' + all_SI[4].SI_name + '=' + all_SI[4].SI_value; 
			}
			else {
				ShowCaption_5_text += all_SI[3].SI_name + all_SI[3].SI_value + '%';
			}
		}
		for (let i=5; i<=7; ++i)
		{
			if (all_SI[i].SI_value != '' && all_SI[i].SI_value != 0)
			{
				if (ShowCaption_5_text == '')
				{
					ShowCaption_5_text += all_SI[i].SI_name + all_SI[i].SI_value + all_SI[i].SI_unit;
				}
				else {
					ShowCaption_5_text += '<br />' + all_SI[i].SI_name + all_SI[i].SI_value + all_SI[i].SI_unit;
				}
			}
		}
		
		//ShowCaption_6
		let ShowCaption_6_text = '';
		if (all_SI[25].SI_value != 0)
		{
			ShowCaption_6_text += all_SI[25].SI_name + all_SI[25].SI_value + all_SI[25].SI_unit + all_SI[26].SI_value + all_SI[26].SI_name + all_SI[26].SI_unit;
		}
			
		for (let i=27; i<=29; ++i)
		{
			if (all_SI[i].SI_value != '' && all_SI[i].SI_value != 0)
			{
				ShowCaption_6_text += all_SI[i].SI_name + all_SI[i].SI_value + all_SI[i].SI_unit;
			}
		}

		let _regObj;
		if ( document.getElementById('site_Skill').getAttribute('data-skillcode').match(new RegExp("(\\d+)_(\\d+)")) )
		{
			_regObj = {exp: RegExp['$&'], no_stt: RegExp.$1, no_st: RegExp.$2};
		}
		else {
			console.log('false skillcode');
			return;
		}
		
		let tno_stt = _regObj.no_stt;
		let tno_st = _regObj.no_st;
		let tno_s = document.getElementById('site_Skill').getAttribute('data-curskill');
		
		ShowCaption_5_text = Build_TextButton_1(ShowCaption_5_text);
		ShowCaption_5_text = build_branch_onclick(ShowCaption_5_text, all_skilltree_type[tno_stt].STt_skilltree[tno_st].ST_skill[tno_s].Sk_branch);
		ShowCaption_6_text = Build_TextButton_1(ShowCaption_6_text);
		ShowCaption_6_text = build_branch_onclick(ShowCaption_6_text, all_skilltree_type[tno_stt].STt_skilltree[tno_st].ST_skill[tno_s].Sk_branch);
		
		document.getElementById('ShowCaption_4').innerHTML = ShowCaption_4_text;
		document.getElementById('ShowCaption_5').innerHTML = ShowCaption_5_text;
		document.getElementById('ShowCaption_6').innerHTML = ShowCaption_6_text;
	}
	