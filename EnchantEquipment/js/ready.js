
	try {
		enchantEquip_updateSelList();
		update_enchantEquipAbilityListSel();
		document.getElementById('enchantEquipment_setLv').value = cy_enchantEquipment.lvPotentialMax;
	}
	catch(e){
		errorForStop_msg("Initialize Enchant Equipment System false", e);
	}

	(function (){
		let lang = (window.navigator.userLanguage || window.navigator.language).toLowerCase();
		switch (lang)
		{	
			case 'zh-tw':	//Taiwan
			case 'zh-cn':	//China
			case 'zh-hk':	//Hong Kong
			case 'zh-sg':	//Singapore
				selectLanguage(document.getElementById('selLang_1'));
				break;
			case 'ja':		//Japan
				selectLanguage(document.getElementById('selLang_2'));
				break;
			default:
				selectLanguage(document.getElementById('selLang_0'));
		}
	})();
	
	
	/*=====================================================================*/
	$(window).scroll( function(){
		if( $(window).scrollTop() <= 68.8)
		{
			$("#Btn_ToTop").hide(600);
		}
		else {
			$("#Btn_ToTop").show(600);
		}
	});
	
	/*=====================================================================*/
	setTimeout( function(){
		let errormsg = document.getElementById('Loading_Page').getAttribute('data-errormsg');
		if ( errormsg != '' )
		{
			document.getElementById('Loading_Page').innerHTML = errormsg;
			return;
		}
		let _page = document.getElementById('Loading_Page');
		_page.style.display = 'none';
		_page.className = 'Loading_Page_load';
		_page.innerHTML = 'Loading...';
	}, 1000);