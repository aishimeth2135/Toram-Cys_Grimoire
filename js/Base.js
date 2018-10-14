	
	window.onunload = () => {
		if ( !cy_character ) return;
		let _charaSave = cy_character.general_saveCode();
		if ( _charaSave != "[1,[['',9,0,0,0,[],[[],[]],['','']],['',6,0,0,0,[],[],['','']],['',3,0,0,0,[],[[],[]],['','']],['',0,0,0,0,[],[[],[]],['','']],['',0,0,0,0,[],[[],[]],['','']],['',0,0,0,0,[],[[],[]],['','']]],[1,1,1,1,1,['none',1]],'################']" )
		{
			window.localStorage.setItem('charaSimu_saveCode_storage_Auto', ')n_' + _charaSave);
		}
	};
	
	function call_loadingPage(fun, fun_args = []/*ary*/, msec){
		try {
			let _page = document.getElementById('Loading_Page');
			let _pro = new Promise((resolve, reject) => {
				_page.style.display = 'block';
				resolve('sussess');
			});
			_pro.then(() => {return new Promise( (resolve, reject) => {
				eval("fun(" + fun_args.toString() + ")");
				resolve('sussess');
			});}).then((value) => {
				setTimeout(() => {
					_page.style.display = 'none';
				}, msec);
			});
		}
		catch (e){
			console.log(e);
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
		msg = msg.split('|,|');
		doc.innerHTML += `<div id="warningMsg_block_b${String(cnt)}">${msg[getCur_languageNo()] || msg[0]}</div>`;
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
			resolve('sussess');
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
	/* ---------------------------------------------------- */
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function indexOf(member, startFrom) {
			/*
			In non-strict mode, if the `this` variable is null or undefined, then it is
			set to the window object. Otherwise, `this` is automatically converted to an
			object. In strict mode, if the `this` variable is null or undefined, a
			`TypeError` is thrown.
			*/
			if (this == null) {
			throw new TypeError("Array.prototype.indexOf() - can't convert `" + this + "` to object");
			}
		
			var
			index = isFinite(startFrom) ? Math.floor(startFrom) : 0,
			that = this instanceof Object ? this : new Object(this),
			length = isFinite(that.length) ? Math.floor(that.length) : 0;
		
			if (index >= length) {
			return -1;
			}
		
			if (index < 0) {
			index = Math.max(length + index, 0);
			}
		
			if (member === undefined) {
			/*
				Since `member` is undefined, keys that don't exist will have the same
				value as `member`, and thus do need to be checked.
			*/
			do {
				if (index in that && that[index] === undefined) {
				return index;
				}
			} while (++index < length);
			} else {
			do {
				if (that[index] === member) {
				return index;
				}
			} while (++index < length);
			}
		
			return -1;
		};
	}
	
	(function() {
		if (!Event.prototype.preventDefault) {
			Event.prototype.preventDefault=function() {
			this.returnValue=false;
			};
		}
		if (!Event.prototype.stopPropagation) {
			Event.prototype.stopPropagation=function() {
			this.cancelBubble=true;
			};
		}
		if (!Element.prototype.addEventListener) {
			var eventListeners=[];
			
			var addEventListener=function(type,listener /*, useCapture (will be ignored) */) {
			var self=this;
			var wrapper=function(e) {
				e.target=e.srcElement;
				e.currentTarget=self;
				if (typeof listener.handleEvent != 'undefined') {
				listener.handleEvent(e);
				} else {
				listener.call(self,e);
				}
			};
			if (type=="DOMContentLoaded") {
				var wrapper2=function(e) {
				if (document.readyState=="complete") {
					wrapper(e);
				}
				};
				document.attachEvent("onreadystatechange",wrapper2);
				eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper2});
				
				if (document.readyState=="complete") {
				var e=new Event();
				e.srcElement=window;
				wrapper2(e);
				}
			} else {
				this.attachEvent("on"+type,wrapper);
				eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper});
			}
			};
			var removeEventListener=function(type,listener /*, useCapture (will be ignored) */) {
			var counter=0;
			while (counter<eventListeners.length) {
				var eventListener=eventListeners[counter];
				if (eventListener.object==this && eventListener.type==type && eventListener.listener==listener) {
				if (type=="DOMContentLoaded") {
					this.detachEvent("onreadystatechange",eventListener.wrapper);
				} else {
					this.detachEvent("on"+type,eventListener.wrapper);
				}
				eventListeners.splice(counter, 1);
				break;
				}
				++counter;
			}
			};
			Element.prototype.addEventListener=addEventListener;
			Element.prototype.removeEventListener=removeEventListener;
			if (HTMLDocument) {
			HTMLDocument.prototype.addEventListener=addEventListener;
			HTMLDocument.prototype.removeEventListener=removeEventListener;
			}
			if (Window) {
			Window.prototype.addEventListener=addEventListener;
			Window.prototype.removeEventListener=removeEventListener;
			}
		}
	})();