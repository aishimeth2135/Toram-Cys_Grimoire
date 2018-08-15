	
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
	
	(function(){
		let Ttext = '';
		for (let i=1; i<11; ++i)
		{
			Ttext += `<li id = "skillLv_${i}" class="SkillLv_button" onclick="updateSite_skillLv(this)">Lv.${i}</li>`;
		}
		document.getElementById('site_SkillLv').innerHTML = Ttext;
		updateSite_skillLv( document.getElementById('skillLv_10') );
	})();
	
	
	update_skillTreeTypeBtnList();
	
	/*=====================================================================*/
	(function (){	//Input TextButton to Desc_Page
		let i = 0;
		while (document.getElementById('Desc_Page_' + String(i)))
		{
			let Ttext = document.getElementById('Desc_Page_' + String(i)).innerHTML;
			Ttext = Build_TextButton_1(Ttext);
			document.getElementById('Desc_Page_' + String(i)).innerHTML = Ttext;
			++i;
		}
	})();
	
	/*=====================================================================*/
	(function (){
		let Section_2_Menu_List = ['傷害類型', '慣性類型', '特殊技能類型', '異常狀態', '基本公式、說明', '能力說明與公式', '經驗值獲得量', '閃躲與迴避'];
		let Ttext = '';
		for (let i=0; i<Section_2_Menu_List.length; ++i)
		{
			Ttext += `<li data-menuno="${i}" onclick="Update_Desc_1(this)" id="Section_2_Menu_${i}"><a>${Section_2_Menu_List[i]}</a></li>`;
		}
		
		document.getElementById('Section_2_Menu').innerHTML = '<ul>' + Ttext + '</ul>';
	})();
	
	/*=====================================================================*/
	(function (){
		let Section_3_Menu_List = ['作者資訊', '版本資訊'];
		let Ttext = '';
		for (let i=0; i<Section_3_Menu_List.length; ++i)
		{
			Ttext += `<li data-menuno="${i}" onclick="Section_3_Update(this)" id="Section_3_Menu_${i}"><a>${Section_3_Menu_List[i]}</a></li>`;
		}
		
		document.getElementById('Section_3_Menu').innerHTML = '<ul>' + Ttext + '</ul>';
	})();
	
	Section_3_Update(document.getElementById('Section_3_Menu_1'));
	
	/*=====================================================================*/
	(function (){
		let Section_4_Menu_List = ['技能配點'];
		update_ATool_MenuList( Section_4_Menu_List );
	})();
	
	/*=====================================================================*/
	update_SkillAlloSimu_STList();
	
	/*=====================================================================*/
	SkillAlloSimu_SelMode(document.getElementById('SkillAlloSimu_Mode_Add'));
	SkillAlloSimu_SelStep(document.getElementById('SkillAlloSimu_Step5'));
	
	//charaSimu_initPassiveSkillList();
	
	(function(){
		let CharaSimu_menu_list = [
			'<img width="28" height="28" src="svg/stats.svg" />', 
			'<img width="28" height="28" src="svg/Main-Weapon_1.svg" />', 
			'<img width="28" height="28" src="svg/Sub-Weapon_1.svg" />', // 副手
			'<img width="28" height="28" src="svg/Body_Armor_1.svg" />', 
			'<img width="28" height="28" src="svg/Additional_Gear_3.svg" />', 
			'<img width="28" height="28" src="svg/Special_Gear_1.svg" />',
			'<img width="28" height="28" src="svg/circleStar-icon.svg" />']; //<img src="svg/Special_Gear_0.svg" />
		let Ttext = '';
		Ttext += `<span onclick="javascript:document.getElementById('CharaSimu_main_').style.display='none';" style="cursor:pointer;float:right;"><img src="svg/delete-icon.svg" style="height:20px;width:20px;" /></span>`;
		Ttext += `<li onclick="show_charaStats()">${CharaSimu_menu_list[0]}</li>`;
		Ttext += `<li onclick="show_allCharaEquip()"><img width="28" height="28" src="svg/showEquip-icon_0.svg" /></li>`;
		for (let i=1; i<CharaSimu_menu_list.length; ++i)
		{
			Ttext += `<li data-fieldno="${i-1}" onclick="set_equipFieldAbility(this)">${CharaSimu_menu_list[i]}</li>`;
		}
		Ttext += '<li onclick="charaSimu_openPassiveSkillList()"><img width="28" height="28" src="svg/passiveSkill-icon_0.svg" /></li>';
		Ttext += '<li onclick="charaSimu_openSavingSystem()"><img width="28" height="28" src="svg/setting-icon_0.svg" /></li>';
		
		document.getElementById('CharaSimu_menu').innerHTML = Ttext;
	})();
	CharaSimu_resetSetEquipShowDetail();
	charaSimu_resetSaveCodeList();
	
	
	
	
	/*=====================================================================*/
	$(window).scroll( function(){
		if( $(window).scrollTop() <= 68.8)
		{
			$("#Btn_ToTop").hide(600);
			document.getElementById("ATool_MenuBlock").style.top = 68.8 - parseFloat($(window).scrollTop()) + 'px';
		}
		else {
			$("#Btn_ToTop").show(600);
			document.getElementById("ATool_MenuBlock").style.top = "0.2rem";
		}
	});
	
	
	/*=====================================================================*/
	setTimeout( function(){
		document.getElementById('Loading_Page').style.display = 'none';
	}, 1500);
	