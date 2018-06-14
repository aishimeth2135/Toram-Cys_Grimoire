
	function update_of_skilltree_type(temp){
		
		//初始化
		//initialization_of_skilltree();
		document.getElementById('site_SkillTree').style.display = "none";
		
		if ( temp.className != '' )
		{
			temp.className = '';
			return ;
		}
		
		let cnt = 0;
		let doc = document.getElementById('skilltree_type_' + cnt);
		while ( doc ){
			if ( doc.className.includes('cur') )
			{
				doc.className = '';
				break;
			}
			++cnt;
			doc = document.getElementById('skilltree_type_' + cnt);
		}
		temp.className = 'SkillTreeType_li_cur';
		tno_stt = parseInt(temp.id.charAt(temp.id.length - 1));

		$('#site_SkillTree').fadeIn(400);
		doc = document.getElementById('site_SkillTree');
		doc.style.display = "inline-block";
		doc.setAttribute('data-skillcode', `${tno_stt}`);
		onclick_of_SkillTreeType(temp);
		
		let lastBtn = '';
		if ( document.getElementById('site_Skill').getAttribute('data-skillcode').match(new RegExp("(\\d+)_(\\d+)")) )
		{
			lastBtn = {exp: RegExp['$&'], no_stt: parseInt(RegExp.$1), no_st: parseInt(RegExp.$2)};
		}
		
		let Ttext = '';
		for (let i=0; i<all_skilltree_type[tno_stt].STt_skilltree.length; ++i)
		{
			if ( lastBtn.no_stt == tno_stt )
			{
				Ttext += `<li id="skilltree_${i}" class="SkillTree_button_cur" onclick ="update_of_skilltree(this)" onmouseover="onmouseover_of_SkillTree(this)" onmouseout="onmouseout_of_SkillTree(this)">
				${all_skilltree_type[tno_stt].STt_skilltree[i].ST_name}</li>`;
			}
			else {
				Ttext += `<li id="skilltree_${i}" onclick ="update_of_skilltree(this)" onmouseover="onmouseover_of_SkillTree(this)" onmouseout="onmouseout_of_SkillTree(this)">
				${all_skilltree_type[tno_stt].STt_skilltree[i].ST_name}</li>`;
			}
		}
		document.getElementById('ul_site_SkillTree').innerHTML = Ttext;
		document.getElementById('SkillTreeType_Caption').style.display = 'none';
	}
		
	function onclick_of_SkillTreeType(temp){
		let Ttext = ''; 
		switch (parseInt(temp.id.charAt(temp.id.length - 1)))
		{
			case 0:
				Ttext = '各武器專用的必備招式。<br>建議專攻同一種武器！'; break;
			case 1:
				Ttext = '能使戰況更為有利的技能。<br>使盾、身體防具的性能更加完備！'; break;	
			case 2:
				Ttext = '冒險路上的好用技能。<br>有多餘的技能點數時，不妨學習一下！'; break;
			case 3:
				Ttext = '未知的領域。<br>必須先找到特殊的道具。<br>(純屬虛構，與遊戲內容無關)'; break;
		}
		document.getElementById('SkillTreeType_Caption').innerHTML = Ttext;
	}
	function onmouseover_of_SkillTreeType(temp){
		/* onclick_of_SkillTreeType(temp); */
	}
	function onmouseout_of_SkillTreeType(temp){
		/* if (SkillTreeType_CurBtn != '')
			{
			onclick_of_SkillTreeType(document.getElementById(SkillTreeType_CurBtn));
			}
		else {
			document.getElementById('SkillTreeType_Caption').innerHTML = '請點選上方「武器技能」、「強化技能」、「輔助技能」中任一按鈕以繼續。';
			} */
	}	