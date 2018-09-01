	
	// ============================================== [ ReplaceAll ]
	function replaceAll(Tstring, beReplace, ReplaceTo){
		return Tstring.replace(new RegExp(beReplace, 'g'),ReplaceTo);
	}
	//===========================================================//
	function _stopBubble(event){
		event = event || window.event;
		if (event.stopPropagation)
		{
			event.stopPropagation();
		}
		else {
			e.cancelBubble = true;
		}
	}
	//===========================================================//
	
	function showWarningMsg(msg, set_msec = 3000){
		let doc = document.getElementById('warningMsg_block');
		
		let cnt = 0;
		while (true)
		{
			if ( !document.getElementById('warningMsg_block_b' + String(cnt)) )
			{
				break;
			}
			++cnt;
		}
		doc.innerHTML += `<div id="warningMsg_block_b${String(cnt)}">${msg}</div>`;
		document.getElementById('warningMsg_block_b' + String(cnt)).style.opacity = 1;
		
		let timer_baseCnt = set_msec, timer_cnt = timer_baseCnt, timer_delay = 10, timer_step = 1/(timer_baseCnt/timer_delay/2);
		let timer = setInterval(function(){
			timer_cnt -= timer_delay;
			if ( timer_cnt < timer_baseCnt/2 ) 
			document.getElementById('warningMsg_block_b' + String(cnt)).style.opacity -= timer_step;
			if (timer_cnt <= 0)
			{
				document.getElementById('warningMsg_block_b' + String(cnt)).parentNode.removeChild(document.getElementById('warningMsg_block_b' + String(cnt)));
				clearInterval(timer);
			}
		}, timer_delay);
	}
	
	function errorForStop_msg(msg){
		let _errormsg = document.getElementById('Loading_Page').getAttribute('data-errormsg');
		if ( _errormsg == '') _errormsg = '<p>Some errors occurred while loading. Please contact the author. </p>Error Message:';
		_errormsg += '<br />~# ' + msg;
	}
	
	//===========================================================//
	
	var MenuNo_Current = 1;
	function Upadate_Menu(temp) {
		let T_No = temp.id.charAt(temp.id.length-1);
		
		if (T_No == MenuNo_Current) { return; }
		
		document.getElementById('Section_' + String(MenuNo_Current)).style.display = 'none';
		MenuNo_Current = T_No;
		document.getElementById('Section_' + String(MenuNo_Current)).style.display = 'block';
	}
	
	function ToTop(){
		$('html, body').animate({scrollTop: 0}, 600);
	}
	
	//===========================================================//
	function update_skillTreeTypeBtnList(){
		for (let i=0; i<3; ++i)
		{
			document.getElementById('skilltree_type_' + i).innerHTML = all_skilltree_type[i].STt_name;
		}
	}
	//===========================================================//
	function update_SkillAlloSimu_STList() {		//input Skill Allocation - Simulator Skill Tree List
		let Ttext = '';
		for (let i=0; i<all_skilltree_type.length; ++i)
		{
			if (i != 0)
			{
				Ttext += '<hr class="hr_2" />';
			}
			for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
			{
				Ttext += `<li><a id="SkillAlloSimu_STList_${i}_${j}" data-sttno="${i}" data-stno="${j}" onclick="Sel_SkillAlloSimu(this)">${all_skilltree_type[i].STt_skilltree[j].ST_name}</a></li>`;
			}
		}
		document.getElementById('SkillAlloSimu_STList').innerHTML = '<ul>' + Ttext + '</ul>';
	}
	//===========================================================//
	function update_ATool_MenuList(Section_4_Menu_List){
		let Ttext = '';
		for (let i=0; i<Section_4_Menu_List.length; ++i)
		{
			Ttext += `<li data-menuno="${i}" onclick="Section_4_Update(this)" id="Section_4_Menu_${i}"><a>${Section_4_Menu_List[i]}</a></li>`;
		}
		
		document.getElementById('Section_4_Menu').innerHTML = '<ul>' + Ttext + '</ul>';
	}
	