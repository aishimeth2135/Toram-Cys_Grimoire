
	function updateSite_skillCaption_1(no_skillTreeType, no_skillTree, no_skill){
		input_skillCaptionSI_1(no_skillTreeType, no_skillTree, no_skill);
		show_discription_1();
	}
	function updateSite_skillCaption_2(no_skillTreeType, no_skillTree, no_skill, skillBranchNo){
		input_skillCaptionSI_2(no_skillTreeType, no_skillTree, no_skill, skillBranchNo);
		show_discription_2();
	}
				
	function armsDoor(mainType, subType, bodyType){			//三部位中任一項符合
		if (mainType != -1 && WeapType_Cur != -1 && mainType == WeapType_Cur) return true;
		if (subType != -1 && AuType_Cur != -1 && subType == AuType_Cur) return true;
		if (bodyType != -1 && bodyType_Cur != -1 && bodyType == bodyType_Cur) return true;
		return false;
	}
	
	function show_discription_1(){
		let SI = cy_skillSystem.skillCaptionItem;
		let ShowCaption_1_text = '';
		for (let i=8; i<=13; ++i)
		{
			if (SI[i].value != '' && SI[i].value != 0)
			{
				if (ShowCaption_1_text != '') ShowCaption_1_text += '<br />';
				ShowCaption_1_text += `<a data-langtext="${SI[i].name}"></a><a data-langtext="${SI[i].value}"></a><a data-langtext="${SI[i].unit}"></a>`;
			}
		}
		if (SI[14].value == '') SI[14].value = '(待補)';
		document.getElementById('ShowCaption_1').innerHTML = ShowCaption_1_text;
		resetInnerLang(document.getElementById('ShowCaption_1'));
		document.getElementById('ShowCaption_2').innerHTML = SI[14].value;
		resetInnerLang(document.getElementById('ShowCaption_2'));
		document.getElementById('ShowCaption_3').innerHTML = SI[15].value;
		resetInnerLang(document.getElementById('ShowCaption_3'));
	}
	
	function show_discription_2(){
		let SI = cy_skillSystem.skillCaptionItem;
		$('#ShowCaption_5').fadeIn(250);
		//ShowCaption_4
		let ShowCaption_4_text = '';
		for (let i=16; i<=24; ++i)
		{
			if (SI[i].value != '' && SI[i].value != 0)
			{
				if (ShowCaption_4_text == '')
				{
					ShowCaption_4_text += `<a data-langtext="${SI[i].name}"></a><a data-langtext="${SI[i].value}"></a><a data-langtext="${SI[i].unit}"></a>`;
				}
				else {
					ShowCaption_4_text += `<br /><a data-langtext="${SI[i].name}"></a><a data-langtext="${SI[i].value}"></a><a data-langtext="${SI[i].unit}"></a>`;
				}
			}
		}
		
		//ShowCaption_5
		let ShowCaption_5_text = '';
		if (SI[0].value != '')
			ShowCaption_5_text += `<a data-langtext="${SI[0].value}"></a>`;
		if (SI[1].value != '')
		{
			if (SI[2].value != '' && SI[2].value != 0)
				ShowCaption_5_text += `<br />(<a data-langtext="${SI[1].value}"></a><a data-langtext="${SI[2].name}"></a><a data-langtext="${SI[2].value}"></a><a data-langtext="${SI[2].unit}"></a>)`;
			else
				ShowCaption_5_text += `<br /><a data-langtext="${SI[1].value}"></a>`;
		}
		if (SI[3].value != 0)
		{
			if (SI[4].value != '' && SI[4].value != 0)
			{
				ShowCaption_5_text += `<a data-langtext="${SI[3].name}"></a>(<a data-langtext="${SI[3].value}"></a>+<a data-langtext="${SI[4].name}"></a>)%`;
				ShowCaption_5_text += `<br /><a data-langtext="${SI[4].name}"></a>=<a data-langtext="${SI[4].value}"></a>`; 
			}
			else {
				ShowCaption_5_text += `<a data-langtext="${SI[3].name}"></a><a data-langtext="${SI[3].value}"></a>%`;
			}
		}
		for (let i=5; i<=7; ++i)
		{
			if (SI[i].value != '' && SI[i].value != 0)
			{
				if (ShowCaption_5_text == '')
					ShowCaption_5_text += `<a data-langtext="${SI[i].name}"></a><a data-langtext="${SI[i].value}"></a><a data-langtext="${SI[i].unit}"></a>`;
				else
					ShowCaption_5_text += `<br /><a data-langtext="${SI[i].name}"></a><a data-langtext="${SI[i].value}"></a><a data-langtext="${SI[i].unit}"></a>`;
			}
		}
		
		//ShowCaption_6
		let ShowCaption_6_text = '';
		if (SI[25].value != 0)
			ShowCaption_6_text += `<a data-langtext="${SI[25].name}"></a><a data-langtext="${SI[25].value}"></a><a data-langtext="${SI[25].unit}"></a><a data-langtext="${SI[26].name}"></a><a data-langtext="${SI[26].value}"></a><a data-langtext="${SI[26].unit}"></a>`;
			
		for (let i=27; i<=29; ++i)
		{
			if (SI[i].value != '' && SI[i].value != 0)
				ShowCaption_6_text += `<a data-langtext="${SI[i].name}"></a><a data-langtext="${SI[i].value}"></a><a data-langtext="${SI[i].unit}"></a>`;
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
		
		let _ary;
		document.getElementById('ShowCaption_4').innerHTML = ShowCaption_4_text;
		resetInnerLang(document.getElementById('ShowCaption_4'));
		document.getElementById('ShowCaption_5').innerHTML = ShowCaption_5_text;
		resetInnerLang(document.getElementById('ShowCaption_5'));
		_ary = document.querySelectorAll('#ShowCaption_5 > a, #ShowCaption_5 > span');
		for (let i=0; i<_ary.length; ++i)
		{
			_ary[i].innerHTML = Build_TextButton_1(_ary[i].innerHTML);
			_ary[i].innerHTML = build_branch_onclick(_ary[i].innerHTML, cy_skillSystem.skillTreeType[tno_stt].skillTree[tno_st].skill[tno_s].captionBranch);
		}
		document.getElementById('ShowCaption_6').innerHTML = ShowCaption_6_text;
		resetInnerLang(document.getElementById('ShowCaption_6'));
		_ary = document.querySelectorAll('#ShowCaption_6 > a, #ShowCaption_6 > span');
		for (let i=0; i<_ary.length; ++i)
		{
			_ary[i].innerHTML = Build_TextButton_1(_ary[i].innerHTML);
			_ary[i].innerHTML = build_branch_onclick(_ary[i].innerHTML, cy_skillSystem.skillTreeType[tno_stt].skillTree[tno_st].skill[tno_s].captionBranch);
			//console.log(build_branch_onclick(_ary[i].innerHTML, cy_skillSystem.skillTreeType[tno_stt].skillTree[tno_st].skill[tno_s].captionBranch));
		}
	}
	