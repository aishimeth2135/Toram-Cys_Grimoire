	
	function getCur_languageNo(){
		let cnt = 0;
		let doc = document.getElementById('selLang_' + String(cnt));
		while ( doc )
		{
			if (document.getElementById('selLang_' + String(cnt)).className == 'languageList_Cur')
			{
				return cnt;
			}
			++cnt;
			doc = document.getElementById('selLang_' + String(cnt));
		}
		return (-1);
	}
	
	var languageNo_cur = -1;
	function selectLanguage(temp){
		let T_langno = parseInt(temp.getAttribute("data-langno"));
		/* 	0: English
			1: 中文
			2: 日本語 */
		if (T_langno == getCur_languageNo()) { return; }

		if (getCur_languageNo() != -1)
		{
			document.getElementById('selLang_' + String(getCur_languageNo())).className = '';
		}
		temp.className = 'languageList_Cur';
		
		// ================================== 
		resetInnerLang(document);

	}
	
	function resetInnerLang(_dom){
		if ( document.querySelectorAll )
		{
			let _ary = _dom.querySelectorAll('a[data-langtext]');
			for (let i=0; i<_ary.length; ++i)
			{
				let _t = _ary[i].getAttribute('data-langtext').split('|,|');
				_t = ( _t[getCur_languageNo()] != undefined ) ? _t[getCur_languageNo()] : _t[0];
				_t = ( _t.includes('${') ) ? eval("`" + _t + "`") : _t;
				_ary[i].innerHTML = _t;
			}
			_ary = _dom.querySelectorAll('input[data-langtext]');
			for (let i=0; i<_ary.length; ++i)
			{
				let _t = _ary[i].getAttribute('data-langtext').split('|,|');
				_t = ( _t[getCur_languageNo()] != undefined ) ? _t[getCur_languageNo()] : _t[0];
				_t = ( _t.includes('${') ) ? eval("`" + _t + "`") : _t;
				_ary[i].value = _t;
			}
			_ary = _dom.querySelectorAll('input[data-langplaceholder]');
			for (let i=0; i<_ary.length; ++i)
			{
				let _t = _ary[i].getAttribute('data-langplaceholder').split('|,|');
				_t = ( _t[getCur_languageNo()] != undefined ) ? _t[getCur_languageNo()] : _t[0];
				_t = ( _t.includes('${') ) ? eval("`" + _t + "`") : _t;
				_ary[i].placeholder = _t;
			}
		}
		else {
			let _ary = _dom.getElementsByTagName('a');
			for (let i=0; i<_ary.length; ++i)
			{
				if ( !_ary[i].hasAttribute('data-langtext') ) continue;
				let _t = _dom.getAttribute('data-langtext').split('|,|');
				_t = ( _t[getCur_languageNo()] != undefined ) ? _t[getCur_languageNo()] : _t[0];
				_t = ( _t.includes('${') ) ? eval("`" + _t + "`") : _t;
				_ary[i].innerHTML = _t;
			}
			_ary = _dom.getElementsByTagName('input');
			for (let i=0; i<_ary.length; ++i)
			{
				if ( !_ary[i].hasAttribute('data-langtext') ) continue;
				let _t = _dom.getAttribute('data-langtext').split('|,|');
				_t = ( _t[getCur_languageNo()] != undefined ) ? _t[getCur_languageNo()] : _t[0];
				_t = ( _t.includes('${') ) ? eval("`" + _t + "`") : _t;
				_ary[i].value = _t;
			}
			_ary = _dom.getElementsByTagName('input');
			for (let i=0; i<_ary.length; ++i)
			{
				if ( !_ary[i].hasAttribute('data-langplaceholder') ) continue;
				let _t = _ary[i].getAttribute('data-langplaceholder').split('|,|');
				_t = ( _t[getCur_languageNo()] != undefined ) ? _t[getCur_languageNo()] : _t[0];
				_t = ( _t.includes('${') ) ? eval("`" + _t + "`") : _t;
				_ary[i].placeholder = _t;
			}
		}
	}