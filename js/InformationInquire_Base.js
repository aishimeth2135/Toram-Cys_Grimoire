	
	var Section_2_Menu_List = ['傷害類型', '慣性類型', '特殊技能類型', '異常狀態', '基本公式、說明', '能力說明與公式'];
	function Desc_Page_InputTextButton(){
		let i = 0;
		while (document.getElementById('Desc_Page_' + String(i)))
		{
			let Ttext = document.getElementById('Desc_Page_' + String(i)).innerHTML;
			Ttext = Build_TextButton_1(Ttext);
			document.getElementById('Desc_Page_' + String(i)).innerHTML = Ttext;
			++i;
		}
	}
	
	function Section_2_InputMenuList(){
		let Ttext = '';
		for (let i=0; i<Section_2_Menu_List.length; ++i)
		{
			Ttext += `<li data-menuno="${i}" onclick="Update_Desc_1(this)" id="Section_2_Menu_${i}"><a>${Section_2_Menu_List[i]}</a></li>`;
		}
		
		document.getElementById('Section_2_Menu').innerHTML = '<ul>' + Ttext + '</ul>';
	}
	
	
	var Desc_Page_Current = '';
	function Update_Desc_1(temp){
		let T_No = temp.getAttribute('data-menuno');
		if (T_No == Desc_Page_Current)
		{
			return;
		}
		if ( !document.getElementById('Desc_Page_' + T_No) )
		{
			return;
		}
		
		document.getElementById('Desc_Page_' + T_No).style.display = 'block';
		document.getElementById('Section_2_Menu_' + T_No).className = 'SectionMenu_CurBtn';
		
		
		if ( Desc_Page_Current != '' )
		{
			document.getElementById('Desc_Page_' + Desc_Page_Current).style.display = 'none';
			document.getElementById('Section_2_Menu_' + Desc_Page_Current).className = '';
		}
		Desc_Page_Current = T_No;
	}
	
	//===========================================================//
	
	function Build_TextButton_1(Tstring){
		for (let i=0; i<R_of_text_button.length; ++i)
		{
			Tstring = replaceAll(Tstring, ('_@' + R_of_text_button[i]),`<u><a onclick="TextButton_Click(this)" data-textbtnno="${i}">${R_of_text_button[i]}</a></u>`);
		}
		return Tstring;
	}
	
	var R_of_text_button = 
	['膽怯','翻覆','昏厥','逼退','畏懼','降防','遲緩','盲目','乏力','猛毒','冰凍','著火','停止','麻痺','睡眠','出血','沉默','眩暈',
	'陷阱','光環',
	'慣性類型範例',
	'武器性能','能力Atk',
	'魔法倍率','能力Matk',
	'裝備防禦','能力Def','能力Mdef',
	'不支倒地',
	'武器穩定率','能力穩定率',
	'傷害浮動',
	'普通攻擊間隔',
	'能力迴避',
	'能力攻擊速度',
	'屬性剋制',
	'拔刀術','額外增幅','副手倍率','命中成功',
	'公式表示補述','仇恨表',
	'閃光', '疲勞',
	'縮地法補述', '詠唱時間詳述', '法術/長槍補述', '法術/引爆補述'];
	var Desc2_Page_Current = '';
	function TextButton_Click(temp){
		let T_No = temp.getAttribute('data-textbtnno');
		if (T_No == Desc2_Page_Current)
		{
			return;
		}
		
		if ( !document.getElementById('Desc2_Page_' + T_No) )
		{
			return;
		}
		
		document.getElementById('Description_Site_2').style.display = 'block';
		document.getElementById('Desc2_Page_' + T_No).style.display = 'block';
		
		if ( Desc2_Page_Current != '')
		{
			document.getElementById('Desc2_Page_' + Desc2_Page_Current).style.display = 'none';
		}
		Desc2_Page_Current = T_No;
		
		
		document.getElementById('Desc_2_PageTitle').innerHTML = temp.innerHTML;
	}
	
	function Close_Desc2_Site(){
		document.getElementById('Description_Site_2').style.display = 'none';
		if ( Desc2_Page_Current != '')
		{
			document.getElementById('Desc2_Page_' + Desc2_Page_Current).style.display = 'none';
		}
		Desc2_Page_Current = '';
	}
	//===========================================================//
	
	var Section_3_Menu_List = ['作者資訊', '版本資訊'];
	function Section_3_InputMenuList(){
		let Ttext = '';
		for (let i=0; i<Section_3_Menu_List.length; ++i)
		{
			Ttext += `<li data-menuno="${i}" onclick="Section_3_Update(this)" id="Section_3_Menu_${i}"><a>${Section_3_Menu_List[i]}</a></li>`;
		}
		
		document.getElementById('Section_3_Menu').innerHTML = '<ul>' + Ttext + '</ul>';
	}
	
	var Section_3_Page_Current = '';
	function Section_3_Update(temp) {
		let T_No = temp.getAttribute('data-menuno');
		if ( T_No == Desc_Page_Current )
		{
			return;
		}
		if ( !document.getElementById('Section_3_Page_' + T_No) )
		{
			return;
		}
		
		document.getElementById('Section_3_Page_' + T_No).style.display = 'block';
		document.getElementById('Section_3_Menu_' + T_No).className = 'SectionMenu_CurBtn';
		
		if ( Section_3_Page_Current != '' )
		{
			document.getElementById('Section_3_Page_' + Section_3_Page_Current).style.display = 'none';
			document.getElementById('Section_3_Menu_' + Section_3_Page_Current).className = '';
		}
		Section_3_Page_Current = T_No;
	}