	
	window.onunload = () => {
		let _charaSave = cy_character.general_saveCode();
		if ( _charaSave != "[1,[['',9,0,0,0,[],[[],[]],['','']],['',6,0,0,0,[],[],['','']],['',3,0,0,0,[],[[],[]],['','']],['',0,0,0,0,[],[[],[]],['','']],['',0,0,0,0,[],[[],[]],['','']],['',0,0,0,0,[],[[],[]],['','']]],[1,1,1,1,1,['none',1]],'################']" )
		{
			window.localStorage.setItem('charaSimu_saveCode_storage_Auto', ')n_' + _charaSave);
		}
	};
	
	
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
	
	function showWarningMsg(msg, set_msec = 4000){
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
	
	function errorForStop_msg(msg, e){
		try {
			let _errormsg = document.getElementById('Loading_Page').getAttribute('data-errormsg');
			if ( _errormsg == '') _errormsg = '<p>Some errors occurred while loading. Please contact the author. </p>Error Message:';
			let _t = e.stack || '***NONE***';
			_t = String(_t);
			_errormsg += ('<hr />~# ' + msg + ' MSG: ' + String(e) + '[' + _t.replace(new RegExp('https://aishimeth2135.github.io/Toram-Cys_Grimoire/', 'g'), '') + ']');
			document.getElementById('Loading_Page').setAttribute('data-errormsg', _errormsg);
		}
		catch(e) {
			showWarningMsg(String(e) + String(e.stack));
		}
	}
	
	function generateImgTo(screenShotId, imgLocId, add = {}){
		let screenShot_doc = document.getElementById(screenShotId);
		let loc_doc = document.getElementById(imgLocId);
		
		let hiddenId_oddDisplay = [];
		let pro = new Promise((resolve, reject) => {	
			if ( add.hiddenId )
			{
				for (let i=0; i<add.hiddenId.length; ++i)
				{
					hiddenId_oddDisplay.push(document.getElementById(add.hiddenId[i]).style.display);
					document.getElementById(add.hiddenId[i]).style.display = 'none';
				}
			}
			resolve('sussess')
		});
		
		pro.then(() => { return new Promise((resolve, reject) => {
			
				html2canvas(screenShot_doc).then(canvas => {
					let img = canvas.toDataURL('image/png');
					loc_doc.src = img;
				});
				
			})
		}).then(() => {return new Promise((resolve, reject) => {	//尾
				if ( add.hiddenId )
				{
					for (let i=0; i<add.hiddenId.length; ++i)
					{
						document.getElementById(add.hiddenId[i]).style.display = hiddenId_oddDisplay[i];
					}
				}
			})
		});
		
		
		
		
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
	
	function saveSetting(){
		let settingList_id = [
			'SkillAlloSimu_Setting_closeMenuList', 'SkillAlloSimu_Setting_closeSTList', 'SkillAlloSimu_BuildText_ignoreEmpty', 'SkillAlloSimu_BuildText_showSkillPointSum', 
			'charaSimu_hiddenNoLearnPassiveSkill_showPassiveSkillDetail', 'charaSimu_closeAbilityValueMaxMin'
		];
		let str = '';
		for (let i=0; i<settingList_id.length; ++i)
		{
			if ( document.getElementById(settingList_id[i]).checked ) str += '1,';
			else str += '0,';
		}
		str = str.substr(0, str.length-1);
		
		window.localStorage.setItem('SaveSetting_1', str);
	}