
	
	var No_SkillTreeType = -1,  //編號, 紀錄當前SkillTreeType, for Array
	No_SkillTree = -1,    //編號, 紀錄當前SkillTree, for Array
	No_Skill = -1;          //編號, 紀錄當前Skill, for Array
	
	// ======= 各類按鈕, 預設欄位數量
	var SkillTree_Size = 7;
	
	// ====== Array for Search
	var All_WeapType = [],
	All_AuType = [],
	All_bodyType = [];
	
	// ====== Record Of Current Arm
	var WeapType_Cur = '',
	AuType_Cur = '',
	BodyType_Cur = '';
	
	// ====== 記錄當前點擊按鈕, 處理按鈕變色
	var SkillTreeType_CurBtn = '',
	SkillTree_CurBtn = '',
	Skill_CurBtn = '',
	Weap_CurBtn = '',
	Au_CurBtn = '',
	body_CurBtn = '';
	
	// =============================== [ SkillItem ]
	var skill_item = function(tSI_No, tSI_name, tSI_value, tSI_unit){
		this.SI_No = tSI_No;
		this.SI_name = tSI_name;       //String, SkillItem名稱
		this.SI_value = tSI_value;     //Number or String, SkillItem值
		this.SI_unit = tSI_unit;       //String, 單位、後綴
	}
	
	
	var all_SI = [];
	// ================================== [ 通用 0~7]
	all_SI.push(
		new skill_item(0, '', '', ''),					//0, 傷害、治癒量......
		new skill_item(1, '', '', ''),    				//1,有效atk/matk
		new skill_item(2, '+', 0, ''), 					//2, 技能常數
		new skill_item(3, ' ×', 0, ''), 					//3, 技能倍率
		new skill_item(4, '<u>額外加成</u>', '', ''),		//4
		new skill_item(5, '', 0, ''), 						//5, BUFF-1
		new skill_item(6, '', 0, ''), 						//6, BUFF-2
		new skill_item(7, '', 0, ''), 						//7, BUFF-3
		
		//8~15
		new skill_item(8, '適用｜', '', ''),				//8
		new skill_item(9, 'MP消耗：', 0, ''),				//9
		new skill_item(10, '射程：', '', 'm'),				//10
		new skill_item(11, '類型：', '', ''),				//11
		new skill_item(12, '<br />', '', ''),					//12
		new skill_item(13, '<br /><u>', '', '</u>放入連撃。'),//13
		new skill_item(14, '', '', ''),  					//14, 遊戲內技能說明
		new skill_item(15, '', '', ''),  					//15, 額外說明
		
		// ================================== [ 變動 16~24]
		new skill_item(16, '作用方式：', '', ''),			//16
		new skill_item(17, '動作時間：', '', ''),			//17
		new skill_item(18, '詠唱時間：', '', '秒'),			//18
		new skill_item(19, '蓄力時間：', '', '秒'),			//19
		new skill_item(20, '傷害次數：', '', '次'),			//20
		new skill_item(21, '作用次數：', '', '次'),			//21
		new skill_item(22, '<br>範圍中心：', '', ''),		//22
		new skill_item(23, '影響半徑：', '', 'm'),			//23
		new skill_item(24, '<br />持續時間：', '', '秒'),		//24
		
		// ================================== [ 機率 ]
		new skill_item(25, '_@命中成功後，有', '', '%機率使敵人'),	//25
		new skill_item(26, '', '', '。'),	//異常狀態			//26
		
		new skill_item(27, '', '', ''),							//27, 額外說明
		new skill_item(28, '', '', ''), 							//28, 額外說明
		new skill_item(29, '', '', '')); 							//29, 額外說明
	
	
	/*=============================================================*/
	var SkillItem_Gain = function(tSG_Sbranch, tSG_SINo, tSG_value, tW_Type, tAu_Type, tB_Type){
		this.SG_Sbranch = tSG_Sbranch;  			 //String, 判定之Branch location in array
		this.SG_SINo = tSG_SINo;               //String, 判定之Skill_ItemNo
		this.SG_value = tSG_value;               //Number or String, 輸入SkillItem之值
		this.W_Type = tW_Type;                   //String, 符合條件之WeaponType
		this.Au_Type = tAu_Type;                 //String, 符合條件之AuxType
		this.B_Type = tB_Type;                   //String, 符合條件之BodyType
	}
	
	var all_SI_gain = [];
	//Skill_Item_Gain_List.js
	
	function InputGainToSkill(SName, SBranch, SINo, InputValue, W_type, Au_Type, B_Type){
		for (let i=0; i<all_skilltree_type.length; ++i)
		{
			for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
			{
				for (let k=0; k<all_skilltree_type[i].STt_skilltree[j].ST_skill.length; ++k)
				{
					if ( all_skilltree_type[i].STt_skilltree[j].ST_skill[k].Sk_name.includes(SName) )
					{
						all_skilltree_type[i].STt_skilltree[j].ST_skill[k].Sk_Gain.push(new SkillItem_Gain(SBranch, SINo, InputValue, W_type, Au_Type, B_Type));
					}
				}
			}
		}
	}
	
	/*=============================================================*/
	var the_skill = function(tSk_no, tSk_name, tSk_Pre){
		this.Sk_no = tSk_no;     //Int
		this.Sk_name = tSk_name.replace('_#', '#'); //String
		this.Sk_pre = tSk_Pre;
		this.Sk_lv = 0;
		this.Sk_W_type  = [];   //Array of String<WeaponType>
		this.Sk_Au_type = [];   //Array of String<AuxiliaryWeaponType>
		this.Sk_B_type  = [];   //Array of String<BodyType>
		this.Sk_branch  = ['技能效果'];   //Array of String<SkillBranch>
		this.Sk_Gain = [];
	}
	
	the_skill.prototype.armsConfirm = function(T_W, T_Au, T_B){
		if (T_W != -1)
		{
			for (let i=0;i<this.Sk_W_type.length;++i)
			{
				if (T_W == this.Sk_W_type[i] || this.Sk_W_type[i] == 10)
				{
					return true;
				}
			}
		}
		if (T_Au != -1)
		{
			for (let i=0;i<this.Sk_Au_type.length;++i)
			{
				if (T_Au == this.Sk_Au_type[i] || this.Sk_Au_type[i] == 6)
				{
					return true;
				}
			}
		}
		if (T_B != -1)
		{
			for (let i=0;i<this.Sk_B_type.length;++i)
			{
				if (T_B == this.Sk_B_type[i])
				{
					return true;
				}
			}
		}
		return false;
	}
	
	/*=============================================================*/
	var the_skilltree = function(ST_no, ST_name){
		this.ST_no = ST_no;     	//Int, NO of SkillTree, For Array
		this.ST_name = ST_name; 	//String
		this.ST_skill = [];     	//Array of Object<Skill>
		this.ST_beSel = false;
	}
	the_skilltree.prototype.Sk_No_FindLocation = function(No){
		for (let i=0;i <this.ST_skill.length; ++i)
			{
			if (No == this.ST_skill[i].Sk_no)
				{
				return i;
				}
			}
	}
	
	var the_skilltree_type = function(tSTt_name){
		this.STt_name = tSTt_name;
		this.STt_skilltree = [];	//Array of Object<SkillTree>
	}
	
	var all_skilltree_type = [];
	
	all_skilltree_type.push(new the_skilltree_type('武器技能'), new the_skilltree_type('強化技能'), new the_skilltree_type('輔助技能'), new the_skilltree_type('？？？？'));
	
	//SkillTreeType_List_0~2.js
	
	/*=============================================================*/
	function input_SI_value_bySelection(T_gear, ArmsName, value){
		/* let WeapArms_map = {'1hSword': 0, '2hSword': 1, 'Bow': 2, 'Bowgun': 3, 'Staff': 4, 'MagicDevice': 5, 'Knuckles': 6, 'Halberd': 7, 'DualSword': 8, 'Katana': 9, 'Other': 10};
		let AuArms_map = {'Dagger': 0, 'Shield': 1, 'Arrow': 2, 'MagicDevice': 3, 'Knuckles': 4, 'Katana': 5, 'Other': 6}; */
		if ( T_gear == 'Weap' )
		{
			T_gear = WeapType_Cur;
			T_map = {'1hSword': 0, '2hSword': 1, 'Bow': 2, 'Bowgun': 3, 'Staff': 4, 'MagicDevice': 5, 'Knuckles': 6, 'Halberd': 7, 'DualSword': 8, 'Katana': 9, 'Other': 10};
		}
		else {
			T_gear = AuType_Cur;
			T_map = {'Dagger': 0, 'Shield': 1, 'Arrow': 2, 'MagicDevice': 3, 'Knuckles': 4, 'Katana': 5, 'Other': 6};
		}
		if ( T_gear != -1 )
		{
			for (let i=0; i<ArmsName.length; ++i)
			{
				if (T_gear == T_map[ArmsName[i]])
				{
					return value[i];
				}
			}
			return value[value.length-1];
		}
		else {
			return value[value.length-1];
		}
	}
	
	/*======================================================*/
	function build_branch_onclick(Tstring, BranchAry){
		for (let i=0; i<BranchAry.length; ++i)
		{
			Tstring = replaceAll(Tstring, '_&' + i + '_', '<a onclick="BranchText_onclick(this.innerHTML)">' + BranchAry[i] + '</a>');
		}
		return Tstring;
	}
	
	function BranchText_onclick(BranchName){
<<<<<<< HEAD
		let cnt = 1;
		while ( document.getElementById('skillBranch_' + String(cnt)) )
		{
			if ( BranchName == document.getElementById('skillBranch_' + String(cnt)).innerHTML )
			{
				updateSite_skillBranch( document.getElementById('skillBranch_' + String(cnt)) );
				return;
			}
			++cnt;
		}
		alert("Error <BranchText_onclick>");
	}
	
	
	function open_ShowCaption_Body_1(temp){
		let T_modeno = parseInt(temp.getAttribute('data-modeno'));
		let Ttext = '';
		
		switch (T_modeno)
		{
			case 0:
				switch (getCur_languageNo())
				{
					case 0: Ttext = '&gt;&nbsp;隱藏遊戲內技能說明'; break;
					case 1: Ttext = '&gt;&nbsp;隱藏遊戲內技能說明'; break;
					case 2: Ttext = '&gt;&nbsp;隱藏遊戲內技能說明'; break;
				}
				document.getElementById('ShowCaption_Body_1').style.display = 'inline-block';
				temp.setAttribute('data-modeno', "1");
				break;
			case 1:
				switch (getCur_languageNo())
				{
					case 0: Ttext = '&gt;&nbsp;顯示遊戲內技能說明'; break;
					case 1: Ttext = '&gt;&nbsp;顯示遊戲內技能說明'; break;
					case 2: Ttext = '&gt;&nbsp;顯示遊戲內技能說明'; break;
				}
				document.getElementById('ShowCaption_Body_1').style.display = 'none';
				temp.setAttribute('data-modeno', "0");
				break;
		}
		temp.innerHTML = Ttext;
=======
		let T_name = '';
		for (let i=0; i<SkillBranch_Size; ++i)
		{
			if ( BranchName == document.getElementById('SkillBranch_' + String(i+1)).innerHTML )
			{
				T_name = document.getElementById('SkillBranch_' + String(i+1));
				break;
			}
		}
		if (T_name != '')
		{
			update_of_skill_branch(T_name);
		}
>>>>>>> b9039fe0951b9f58bff2e53ff7466b39e1bda16b
	}
		