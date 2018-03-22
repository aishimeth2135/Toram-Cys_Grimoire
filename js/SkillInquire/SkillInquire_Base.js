	
	var Lv_skill = 10;  //紀錄技能等級
	
	var No_SkillTreeType = -1,  //編號, 紀錄當前SkillTreeType, for Array
	No_SkillTree = -1,    //編號, 紀錄當前SkillTree, for Array
	No_Skill = -1;          //編號, 紀錄當前Skill, for Array
	
	// ======= 各類按鈕, 預設欄位數量
	var SkillTree_Size = 7,
	SkillBranch_Size = 5,
	size_of_ShowCaption = 6;
	
	var size_of_Lv_skill = 10,
	Weap_Size = 4,
	Au_Size = 4,
	Body_Size = 2;
	
	// ====== Array for Search
	var All_WeapType = ['單手劍', '雙手劍', '弓', '弩', '法杖', '魔導具', '拳套', '旋風槍', '雙劍', '拔刀劍', '其它'],
	All_AuType = ['小刀', '盾牌', '箭矢', '魔導具', '拳套', '拔刀劍', '其它'],
	All_BodyType = ['一般', '輕量化', '重量化'];
	
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
	Body_CurBtn = '',
	SkillBranch_CurBtn = '';
	
	// ======
	var SkillLv_CurBtn = 'Lv_skill_10';
	
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
		new skill_item(8, '適用：', '', ''),				//8
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
					if (all_skilltree_type[i].STt_skilltree[j].ST_skill[k].Sk_name == SName)
					{
						all_skilltree_type[i].STt_skilltree[j].ST_skill[k].Sk_Gain.push(new SkillItem_Gain(SBranch, SINo, InputValue, W_type, Au_Type, B_Type));
					}
				}
			}
		}
	}
	
	/*=============================================================*/
	var the_skill = function(tSk_no, tSk_name){
		this.Sk_no = tSk_no;     //Int
		this.Sk_name = tSk_name; //String
		this.Sk_W_type  = [];   //Array of String<WeaponType>
		this.Sk_Au_type = [];   //Array of String<AuxiliaryWeaponType>
		this.Sk_B_type  = [];   //Array of String<BodyType>
		this.Sk_branch  = ['技能效果'];   //Array of String<SkillBranch>
		this.Sk_Gain = [];
	}
	
	the_skill.prototype.arm_confirm = function(T_W, T_Au, T_B){
		if (T_W != '')
		{
			for (let i=0;i<this.Sk_W_type.length;++i)
			{
				if (T_W == this.Sk_W_type[i] || this.Sk_W_type[i] == '其它')
				{
					return true;
				}
			}
		}
		if (T_Au != '')
		{
			for (let i=0;i<this.Sk_Au_type.length;++i)
			{
				if (T_Au == this.Sk_Au_type[i] || this.Sk_Au_type[i] == '其它')
				{
					return true;
				}
			}
		}
		if (T_B != '')
		{
			for (let i=0;i<this.Sk_B_type.length;++i)
			{
				if (T_B == this.Sk_B_type[i] || this.Sk_B_type[i] == '其它')
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
	}
	
	var the_skilltree_type = function(){
		this.STt_skilltree = []; 	//Array of Object<SkillTree>
	}
	
	var all_skilltree_type = [];
	
	for (let i=0; i<4; ++i)
	{
		all_skilltree_type.push(new the_skilltree_type());
	}
	//SkillTreeType_List_0~2.js
	
	/*=============================================================*/
	function input_SI_value_bySelection(Tname, ArmName, value){
		if (Tname != '')
		{
			for (let i=0; i<ArmName.length; ++i)
			{
				if (Tname == ArmName[i])
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
		for (var i=0;i<BranchAry.length;++i)
			{
			Tstring = replaceAll(Tstring, BranchAry[i], '<a onclick="BranchText_onclick(this.innerHTML)">' + BranchAry[i] + '</a>');
			}
		return Tstring;
	}
	
	function BranchText_onclick(BranchName){
		let T_name = '';
		for (var i=0; i<SkillBranch_Size; ++i)
			{
			if (BranchName == document.getElementById('SkillBranch_'+String(i+1)).innerHTML)
				{
				T_name = document.getElementById('SkillBranch_'+String(i+1));
				}
			}
		if (T_name != '')
			{
			update_of_skill_branch(T_name);
			}
	}
	