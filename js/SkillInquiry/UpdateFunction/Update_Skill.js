
	function update_of_skill(temp, callByArmsProg = false){
		if ( !temp ) return;
		if (temp.className == "Skill_td_unable")
		{
			initialization_of_ShowCaption();
			return;
		}
		document.getElementById('ShowCaption_Site_2').style.opacity = '1';
		document.getElementById('site_SkillBranch').style.opacity = '1';
		
		let cnt = 0;
		let doc = document.getElementById('skill_' + cnt);
		while ( doc )
		{
			if ( doc.className.includes('cur') )
			{
				doc.className = '';
				break;
			}
			++cnt;
			doc = document.getElementById('skill_' + cnt);
		}
		
		temp.className = 'Skill_td_cur';
		
		let T_curBtn_skillBranch_id;
		if ( callByArmsProg )
		{
			T_curBtn_skillBranch_id = get_curBtn_skillBranch().id;
		}
		init_skillBranch();
		
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
		let tno_s = parseInt(temp.getAttribute('data-skillno'));
		document.getElementById('site_Skill').setAttribute('data-curskill', tno_s);
		
		let Ttext = '';
		for (let i=0; i<cy_skillSystem.skillTreeType[tno_stt].skillTree[tno_st].skill[tno_s].captionBranch.length; ++i)
		{
			let T = cy_skillSystem.skillTreeType[tno_stt].skillTree[tno_st].skill[tno_s].captionBranch[i];
			Ttext += `<div id='skillBranch_${i+1}' class= "button_SkillBranch" onclick='updateSite_skillBranch(this)'>${T}</div>`;
		}
		document.getElementById('site_SkillBranch').innerHTML = Ttext;
		
		updateSite_skillCaption_1(tno_stt, tno_st, tno_s);
		
		if ( callByArmsProg )
		{
			updateSite_skillBranch( document.getElementById(T_curBtn_skillBranch_id) );
		}
		else {
			updateSite_skillBranch(document.getElementById('skillBranch_1'));
		}
	}
	
	function get_curBtn_skillBranch(){
		let cnt = 1;
		let doc = document.getElementById('skillBranch_' + String(cnt));
		while ( doc )
		{
			if ( doc.className == "button_SkillBranch_current" )
			{
				return doc;
			}
			++cnt;
			doc = document.getElementById('skillBranch_' + String(cnt));
		}
		return document.getElementById('skillBranch_1');
	}
	
	function updateSite_skillBranch(temp){
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
		updateSite_skillCaption_2(tno_stt, tno_st, tno_s, parseInt(temp.id.charAt(temp.id.length - 1)) - 1);
		
		let doc = get_curBtn_skillBranch();
		doc.className = 'button_SkillBranch';
		
		temp.className = "button_SkillBranch_current";
	}
	
	function onmouseover_of_skill(temp){
		if ( temp.className.includes('cur') )
		{
			return;
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
		
		let tno_stt = parseInt(_regObj.no_stt);
		let tno_st = parseInt(_regObj.no_st);
		let tno_s = parseInt(temp.getAttribute('data-skillno'));
		
		updateSite_skillCaption_1(tno_stt, tno_st, tno_s);
		
		document.getElementById('ShowCaption_Site_2').style.opacity = '0.4';
		document.getElementById('site_SkillBranch').style.opacity = '0.4';
	}
	
	function onmouseout_of_skill(temp){
		if ( temp.id.includes('cur') )
		{
			return;
		}
		
		let haveSel = false;
		let cnt = 0;
		let doc = document.getElementById('skill_' + cnt);
		while ( doc )
		{
			if ( doc.className.includes('cur') )
			{
				haveSel = true;
				break;
			}
			++cnt;
			doc = document.getElementById('skill_' + cnt);
		}
		
		if ( !haveSel )
		{
			initialization_of_ShowCaption();
		}
		else {
			let _regObj;
			if ( document.getElementById('site_Skill').getAttribute('data-skillcode').match(new RegExp("(\\d+)_(\\d+)")) )
			{
				_regObj = {exp: RegExp['$&'], no_stt: RegExp.$1, no_st: RegExp.$2};
			}
			else {
				console.log('false skillcode');
				return;
			}
			let tno_stt = parseInt(_regObj.no_stt);
			let tno_st = parseInt(_regObj.no_st);
			let tno_s = parseInt(document.getElementById('site_Skill').getAttribute('data-curskill'));
			updateSite_skillCaption_1(tno_stt, tno_st, tno_s);
		}
		
		document.getElementById('ShowCaption_Site_2').style.opacity = '1';
		document.getElementById('site_SkillBranch').style.opacity = '1';
	}