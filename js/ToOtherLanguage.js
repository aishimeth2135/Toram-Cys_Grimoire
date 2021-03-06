	
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
		
		let armsTitleAry = [];

		switch (T_langno)
		{
			case 0:
				All_WeapType = ['1h-S.', '2h-S.', 'Bow', 'Bowgun', 'Staff', 'Magic.', 'Knuck.', 'Halberd', 'Dual-S.', 'Katana', 'Other'];
				All_AuType = ['Dagger', 'Shield', 'Arrow', 'Magic.', 'Knuck.', 'Katana', 'Other'];
				All_bodyType = ['Norm.', 'Dodge', 'Defen.'];
				
				cy_character.allWeapType = ['1h Sword', '2h Sword', 'Bow', 'Bowgun', 'Staff', 'Magic Device', 'Knuckle', 'Halberd', 'Katana', 'none'];
				cy_character.allAuType = ['Dagger', 'Shield', 'Arrow', 'Magic Device', 'Knuckle', 'Katana', 'Other', '1h Sword'];
				cy_character.allBodyType = ['Normal', 'Dodge', 'Defence', 'none'];
				
				armsTitleAry = ['Main Weapon', 'Sub-Weapon', 'Body Armor'];
				break;
			case 1:
				All_WeapType = ['單手劍', '雙手劍', '弓', '弩', '法杖', '魔導具', '拳套', '旋風槍', '雙劍', '拔刀劍', '其它'];
				All_AuType = ['小刀', '盾牌', '箭矢', '魔導具', '拳套', '拔刀劍', '其它'];
				All_bodyType = ['一般', '輕量化', '重量化'];
				
				cy_character.allWeapType = ['單手劍', '雙手劍', '弓', '弩', '法杖', '魔導具', '拳套', '旋風槍', '拔刀劍', '空手'];;
				cy_character.allAuType = ['小刀', '盾牌', '箭矢', '魔導具', '拳套', '拔刀劍', '無', '單手劍'];
				cy_character.allBodyType = ['一般', '輕量化', '重量化', '無'];
				
				armsTitleAry = ['主手裝備', '副手裝備', '身體裝備'];
				break;
			case 2:
				All_WeapType = ['片手剣', '両手剣', '弓', '自動弓', '杖', '魔導具', '手甲', '旋風槍', '双剣', '抜刀剣', 'その他'];
				All_AuType = ['短剣', '盾', '矢', '魔導具', '手甲', '抜刀剣', 'その他'];
				All_bodyType = ['通常', '軽量化', '重量化'];
				
				cy_character.allWeapType = ['片手剣', '両手剣', '弓', '自動弓', '杖', '魔導具', '手甲', '旋風槍', '抜刀剣', 'なし'];;
				cy_character.allAuType = ['短剣', '盾', '矢', '魔導具', '手甲', '抜刀剣', 'なし', '片手剣'];
				cy_character.allBodyType = ['通常', '軽量化', '重量化', 'なし'];
				
				armsTitleAry = ['メイン装備', 'サブ装備', '体装備'];
				break;
		}

		// ================================== 技能樹類型、技能樹、技能名稱
		for (let i=0; i<armsTitleAry.length; ++i)
		{
			document.getElementById('armsTitle_' + String(i)).innerHTML = armsTitleAry[i];
		}

		if (getCur_languageNo() != -1)
		{
			document.getElementById('selLang_' + String(getCur_languageNo())).className = '';
		}
		temp.className = 'languageList_Cur';
		
		// ================================== 
		resetInnerLang(document);
		
		if ( document.getElementById('site_Skill').getAttribute('data-skillcode') != "" )
		{
			show_discription_1();
			show_discription_2();
		}
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