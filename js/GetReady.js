	
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
	
	(function (){
		let HeaderMenu_list = ['技能資料', '資料查詢', '版本資訊', '小工具'];
		update_HeaderMenu(HeaderMenu_list);
	})();
	
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
	
	
	var cy_character = new cy_character_base();
	cy_character.charaEquipments.push(
		new cy_equipmentField('MainWeapon'		, 9	, true),
		new cy_equipmentField('SubWeapon'		, 6	, false),
		new cy_equipmentField('BodyArmor'		, 3	, true),
		new cy_equipmentField('AdditionalGear'	, 0	, true),
		new cy_equipmentField('SpecialGear'		, 0	, true)
	);
	
	(function(){
		let CharaSimu_menu_list = [
			'<img width="28" height="28" src="svg/stats.svg" />', 
			'<img width="28" height="28" src="svg/Main-Weapon_1.svg" />', 
			'<img width="28" height="28" src="svg/Sub-Weapon_1.svg" />', // 副手
			'<img width="28" height="28" src="svg/Body_Armor_1.svg" />', 
			'<img width="28" height="28" src="svg/Additional_Gear_3.svg" />', 
			'<img width="28" height="28" src="svg/Special_Gear_1.svg" />']; //<img src="svg/Special_Gear_0.svg" />
		let Ttext = '';
		Ttext += `<li onclick="show_charaStats()">${CharaSimu_menu_list[0]}</li>`;
		for (let i=1; i<CharaSimu_menu_list.length; ++i)
		{
			Ttext += `<li data-fieldno="${i-1}" onclick="sel_curEquipField(this)">${CharaSimu_menu_list[i]}</li>`;
		}
		Ttext += '<li onclick="charaSimu_openSavingSystem()">Save</li>';
		document.getElementById('CharaSimu_menu').innerHTML = Ttext;
	})();
	
	
	
	
	
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
	setTimeout( function(){
		document.getElementById('Loading_Page').style.display = 'none';
	}, 1500);
	
	/* (function (){
		let nameAry = '';
		let unitAry = '';
		for (let i=0; i<all_SI.length; ++i)
		{
			nameAry += `'${all_SI[i].SI_name}', `;
			unitAry += `'${all_SI[i].SI_unit}', `;
		}
		console.log(nameAry);
		console.log(unitAry);
	})(); */
	/* (function(){
		let T_code = '';
		for (let i=0; i<all_skilltree_type.length - HiddenEgg_controlNo; ++i)
		{
			T_code += "[";
			for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
			{
				T_code += "['";
				for (let k=0; k<all_skilltree_type[i].STt_skilltree[j].ST_skill.length; ++k)
				{
					T_code += all_skilltree_type[i].STt_skilltree[j].ST_skill[k].Sk_name;
					if (k != all_skilltree_type[i].STt_skilltree[j].ST_skill.length - 1)
					{
						T_code += `', '`;
					}
				}
				if (j != all_skilltree_type[i].STt_skilltree.length - 1)
				{
					T_code += "'],";
				}
				else {
					T_code += "']";
				}
			}
			if (i != all_skilltree_type.length - HiddenEgg_controlNo - 1)
			{
				T_code += '],';
			}
			else {
				T_code += ']';
			}
		}
		console.log(T_code);
	})(); */