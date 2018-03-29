	
	(function(){
		for (let i=0; i<4; ++i)
		{
			document.getElementById('skilltree_type_' + String(i+1)).innerHTML = all_skilltree_type[i].STt_name;
		}
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
		let Ttext = '';
		for (let i=0; i<Section_4_Menu_List.length; ++i)
		{
			Ttext += `<li data-menuno="${i}" onclick="Section_4_Update(this)" id="Section_4_Menu_${i}"><a>${Section_4_Menu_List[i]}</a></li>`;
		}
		
		document.getElementById('Section_4_Menu').innerHTML = '<ul>' + Ttext + '</ul>';
	})();
	
	/*=====================================================================*/
	(function (){		//input Skill Allocation - Simulator Skill Tree List
		let Ttext = '';
		for (let i=0; i<all_skilltree_type.length-1; ++i)
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
	})();
	
	/*=====================================================================*/
	SkillAlloSimu_SelMode(document.getElementById('SkillAlloSimu_Mode_Add'));
	SkillAlloSimu_SelStep(document.getElementById('SkillAlloSimu_Step5'));
	
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
	}, 500);
	
	