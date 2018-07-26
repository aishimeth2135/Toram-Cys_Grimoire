	
(function(){
	
	let WeapArms_map = {'1hSword': 0, '2hSword': 1, 'Bow': 2, 'Bowgun': 3, 'Staff': 4, 'MagicDevice': 5, 'Knuckles': 6, 'Halberd': 7, 'DualSword': 8, 'Katana': 9, 'Other': 10};
	let AuArms_map = {'Dagger': 0, 'Shield': 1, 'Arrow': 2, 'MagicDevice': 3, 'Knuckles': 4, 'Katana': 5, 'Other': 6};
	/* 
	All_WeapType = ['單手劍'0, '雙手劍'1, '弓'2, '弩'3, '法杖'4, '魔導具'5, '拳套'6, '旋風槍'7, '雙劍'8, '拔刀劍'9, '其它'10]
	All_AuType = ['小刀'0, '盾牌'1, '箭矢'2, '魔導具'3, '拳套'4, '拔刀劍'5, '其它'6] 
	*/
	all_skilltree_type[0].STt_skilltree.push(
		new the_skilltree(1, '劍術技能'),
		new the_skilltree(2, '射擊技能'),
		new the_skilltree(3, '魔法技能'),
		new the_skilltree(4, '格鬥技能'),
		new the_skilltree(5, '雙劍技能'),
		new the_skilltree(6, '斧槍技能'),
		new the_skilltree(7, '武士技能'));
		
/*======================================================================================
  ======================================================================================*/		
	all_skilltree_type[0].STt_skilltree[0].ST_skill.push(
		new the_skill(1, 	'威力攻擊', 	0	, "active"	, ""),
		new the_skill(2, 	'迅捷攻擊', 	1	, "active"	, ""),
		new the_skill(3, 	'橫掃千軍', 	2	, "active"	, ""),		// 2
		new the_skill(4, 	'爆氣斬', 		3	, "active"	, ""),		// 3
		new the_skill(5, 	'流星墜擊', 	3	, "active"	, ""),		//
		new the_skill(6, 	'音速斬切', 	1	, "active"	, ""),		// 5
		new the_skill(7, 	'真空刃', 		6	, "active"	, ""),        
		new the_skill(8, 	'風暴氣流', 	7	, "active"	, ""),		// 7
		new the_skill(9, 	'破壞之刃', 	7	, "active"	, ""),		
		new the_skill(10, 	'_#劍術要領', 	0	, "passive"	, "M_1hSword[atk#parseInt((SLv+7)/5)%, weaponatk#3*SLv%]"),
		new the_skill(11, 	'_#劍速提升', 	10	, "passive"	, "M_1hSword[aspd#10*SLv, aspd#SLv%]"),
		new the_skill(12, 	'_#大師級劍術', 11	, "passive"	, "", "M_1hSword[「劍術技能」中的攻擊技能，總傷害提升${2*SLv}%]"),
		new the_skill(13, 	'戰吼', 		11	, "active"	, ""),
		new the_skill(14, 	'狂戰士之怒', 	13	, "active"	, ""));
	for (var i=0;i<all_skilltree_type[0].STt_skilltree[0].ST_skill.length;i++)
	{
		if (all_skilltree_type[0].STt_skilltree[0].ST_skill[i].Sk_no != 13 && all_skilltree_type[0].STt_skilltree[0].ST_skill[i].Sk_no != 14)
		{
			all_skilltree_type[0].STt_skilltree[0].ST_skill[i].Sk_W_type.push(WeapArms_map['1hSword'], WeapArms_map['2hSword']);
		}
		else {
			all_skilltree_type[0].STt_skilltree[0].ST_skill[i].Sk_W_type.push(WeapArms_map['1hSword'], WeapArms_map['2hSword'], WeapArms_map['Other']);
		}
	}
	for (var i=0;i<all_skilltree_type[0].STt_skilltree[0].ST_skill.length;i++)
	{
		if (all_skilltree_type[0].STt_skilltree[0].ST_skill[i].Sk_name != '_#劍術要領')
		{
			all_skilltree_type[0].STt_skilltree[0].ST_skill[i].Sk_W_type.push(WeapArms_map['DualSword']);
		}
	}
		
	all_skilltree_type[0].STt_skilltree[0].ST_skill[2].Sk_branch.push('力量灌注');
	all_skilltree_type[0].STt_skilltree[0].ST_skill[3].Sk_branch.push('強化攻擊','二連閃擊','劍光一閃');
	all_skilltree_type[0].STt_skilltree[0].ST_skill[4].Sk_branch.push('流星一擊','星流爆破');
	all_skilltree_type[0].STt_skilltree[0].ST_skill[5].Sk_branch.push('蓄勢待發','強化效果');
	all_skilltree_type[0].STt_skilltree[0].ST_skill[7].Sk_branch.push('刃風','風刃氣旋');
	all_skilltree_type[0].STt_skilltree[0].ST_skill[8].Sk_branch.push('武器銳化');
	all_skilltree_type[0].STt_skilltree[0].ST_skill[13].Sk_branch.push('狂暴化', '喪失沉著');
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[0].STt_skilltree[1].ST_skill.push(
		new the_skill(1, 	'威力射擊', 	0	,"active"	, ""),	//0
		new the_skill(2, 	'渦輪射擊', 	1	,"active"	, ""),
		new the_skill(3, 	'弱點狙擊', 	2	,"active"	, ""),
		new the_skill(4, 	'箭雨', 		2	,"active"	, ""),
		new the_skill(5, 	'交叉火線', 	4	,"active"	, ""),
		new the_skill(6, 	'黏液射擊', 	1	,"active"	, ""),
		new the_skill(7, 	'麻痺射擊', 	6	,"active"	, ""),
		new the_skill(8, 	'煙霧彈', 		7	,"active"	, ""),
		new the_skill(9, 	'斷腕擊', 		8	,"active"	, ""),	//
		new the_skill(10, 	'_#弓術鍛鍊',	0	,"passive"	, "M_Bow,M_Bowgun[atk#parseInt((SLv+7)/5)%, weaponatk#3*SLv%]"),	//9
		new the_skill(11, 	'匿蹤', 		10	,"active"	, ""),
		new the_skill(12, 	'_#遠程狙擊', 	10	,"passive"	, "", "all[距離大於8m的物理傷害技能，總傷害提升${SLv}%]"),
		new the_skill(13, 	'_#回氣',		12	,"passive"	, "", "all[施放攻擊技能時，有${5+2*SLv}%恢復100MP]"),//12
		new the_skill(14, 	'分身射手',		13	,"active"	, ""));
	for (let i=0; i<=9; ++i)
	{
		all_skilltree_type[0].STt_skilltree[1].ST_skill[i].Sk_W_type.push(WeapArms_map['Bow'], WeapArms_map['Bowgun']);
		if (all_skilltree_type[0].STt_skilltree[1].ST_skill[i].Sk_no != 10)
		{
			all_skilltree_type[0].STt_skilltree[1].ST_skill[i].Sk_Au_type.push(AuArms_map['Arrow']);
		}
	}
	for (let i=10; i<=13; ++i)
	{
		all_skilltree_type[0].STt_skilltree[1].ST_skill[i].Sk_W_type.push(WeapArms_map['Other']);
		all_skilltree_type[0].STt_skilltree[1].ST_skill[i].Sk_Au_type.push(AuArms_map['Other']);
	}
	
/*======================================================================================
  ======================================================================================*/		
	all_skilltree_type[0].STt_skilltree[2].ST_skill.push(
		new the_skill(1,	'法術/飛箭', 	0	, "active"	, ""),		// 0
		new the_skill(2,	'法術/長槍', 	1	, "active"	, ""),        
		new the_skill(3,	'法術/魔法槍', 	2	, "active"	, ""),        
		new the_skill(4,	'法術/衝擊波', 	3	, "active"	, ""), 	// 3
		new the_skill(5,	'法術/終結', 	4	, "active"	, ""), 	// 4
		new the_skill(6,	'法術/障壁', 	1	, "active"	, ""),        
		new the_skill(7,	'法術/引爆', 	6	, "active"	, ""),        
		new the_skill(8,	'法術/暴風', 	7	, "active"	, ""),
		new the_skill(9,	'法術/爆能', 	8	, "active"	, ""),
		new the_skill(10,	'_#魔法要領', 	0	, "passive"	, "M_Staff,M_MagicDevice[matk#parseInt((SLv+7)/5)%, weaponatk#3*SLv%]"),        
		new the_skill(11,	'魔力充填', 	0	, "active"	, ""),        
		new the_skill(12,	'_#縮時詠唱', 	11	, "passive"	, "", "all[施放「法術/飛箭」後，下一招技能的詠唱時間減少${5*SLv}%]"),    // 11
		new the_skill(13,	'_#強射', 		12	, "passive"	, "", "M_Staff[魔法彈的最大射程為${6+parseInt((SLv+1)/2)}m、傷害為(有效Atk×${40+5*SLv}%)] & M_MagicDevice[魔法彈的最大射程為${4+parseInt((SLv+1)/2)}m、傷害為(有效Atk×${70+5*SLv}%)] & all[魔法彈的最大射程為${4+parseInt((SLv+1)/2)}m、傷害為(有效Atk×${5*SLv}%)]"),	// 12
		new the_skill(14,	'魔力灌充', 	13	, "active"	, ""));
	for (var i=0;i<all_skilltree_type[0].STt_skilltree[2].ST_skill.length;i++)
	{
		if (all_skilltree_type[0].STt_skilltree[2].ST_skill[i].Sk_no != 10)
		{
			all_skilltree_type[0].STt_skilltree[2].ST_skill[i].Sk_W_type.push(WeapArms_map['Staff'], WeapArms_map['MagicDevice'], WeapArms_map['Other']);
			all_skilltree_type[0].STt_skilltree[2].ST_skill[i].Sk_Au_type.push(AuArms_map['MagicDevice'], AuArms_map['Other']);
		}
		else {
			all_skilltree_type[0].STt_skilltree[2].ST_skill[i].Sk_W_type.push(WeapArms_map['Staff'], WeapArms_map['MagicDevice']);
		}
	}
	all_skilltree_type[0].STt_skilltree[2].ST_skill[3].Sk_branch.push('魔能調節');
	all_skilltree_type[0].STt_skilltree[2].ST_skill[11].Sk_branch.push('快速詠唱');
	all_skilltree_type[0].STt_skilltree[2].ST_skill[12].Sk_branch.push('魔法彈');

/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[0].STt_skilltree[3].ST_skill.push(
		new the_skill(1, 	'重擊', 		0	, "active"	, ""), 	// 0
		new the_skill(2, 	'痛擊', 		1	, "active"	, ""),        
		new the_skill(3, 	'穿甲', 		2	, "active"	, ""),        
		new the_skill(4, 	'猛爆拳', 		3	, "active"	, ""), 	// 3
		new the_skill(5, 	'戰車猛擊', 	4	, "active"	, ""), 	// 
		new the_skill(6, 	'音速波動', 	1	, "active"	, ""),        
		new the_skill(7, 	'震地強襲', 	6	, "active"	, ""),        
		new the_skill(8, 	'三段擊', 		7	, "active"	, ""), 	// 7
		new the_skill(9, 	'疾襲', 		8	, "active"	, ""), 	
		new the_skill(10, 	'_#格鬥要領', 	0	, "passive"	, "M_Knuckles[atk#parseInt((SLv+7)/5)%, weaponatk#3*SLv%]"),		// 9
		new the_skill(11, 	'_#體術鍛鍊', 	10	, "passive"	, "M_Knuckles[aspd#10*SLv%, aspd#10*SLv]", "all[「格鬥技能」中的攻擊技能，總傷害提升${SLv}%]"),
		new the_skill(12, 	'經絡脈輪', 	11	, "active"	, ""),	// 11
		new the_skill(13, 	'_#乘勝追擊', 	0	, "passive"	, "all[attack_mp_recovery#parseInt(SLv/2)]", "M_Knuckles[一般攻擊有${5*SLv}%的機率追加(有效Atk×${25+parseInt(2.5*SLv)+all_skilltree_type[0].STt_skilltree[3].ST_skill[13].calcLv*5}%)的傷害。]"),		// 12
		new the_skill(14, 	'_#猛力追擊', 	13	, "passive"	, "", "M_Knuckles[「乘勝追擊」的威力提升，並將有${SLv}%的機率使目標降防]"));
	for (let i=0; i<=8; ++i)
	{
		all_skilltree_type[0].STt_skilltree[3].ST_skill[i].Sk_W_type.push(WeapArms_map['Knuckles'], WeapArms_map['Other']);
		all_skilltree_type[0].STt_skilltree[3].ST_skill[i].Sk_Au_type.push(AuArms_map['Knuckles'], AuArms_map['Other']);
	}
	
	all_skilltree_type[0].STt_skilltree[3].ST_skill[11].Sk_W_type.push(WeapArms_map['Knuckles'], WeapArms_map['Other']);
	all_skilltree_type[0].STt_skilltree[3].ST_skill[11].Sk_Au_type.push(AuArms_map['Knuckles'], AuArms_map['Other']);
	
	all_skilltree_type[0].STt_skilltree[3].ST_skill[9].Sk_W_type.push(WeapArms_map['Knuckles']);
	all_skilltree_type[0].STt_skilltree[3].ST_skill[10].Sk_W_type.push(WeapArms_map['Knuckles']);
	all_skilltree_type[0].STt_skilltree[3].ST_skill[10].Sk_Au_type.push(AuArms_map['Knuckles']);
	all_skilltree_type[0].STt_skilltree[3].ST_skill[12].Sk_W_type.push(WeapArms_map['Knuckles']);
	all_skilltree_type[0].STt_skilltree[3].ST_skill[12].Sk_Au_type.push(AuArms_map['Knuckles']);
	all_skilltree_type[0].STt_skilltree[3].ST_skill[13].Sk_W_type.push(WeapArms_map['Knuckles']);
	
	all_skilltree_type[0].STt_skilltree[3].ST_skill[3].Sk_branch.push('精確追擊');
	all_skilltree_type[0].STt_skilltree[3].ST_skill[12].Sk_branch.push('追擊');
	
/*======================================================================================
  ======================================================================================*/		
	all_skilltree_type[0].STt_skilltree[4].ST_skill.push(
		new the_skill(1, 	'_#雙劍要領', 	0	, "passive"	, "D_1hSword+1hSword[accuracy#3*SLv%, critical_rate#8*SLv%]", "all[角色可以裝備兩把單手劍]"),
		new the_skill(2, 	'雙弧斬', 		1	, "active"	, ""),
		new the_skill(3, 	'破空刃', 		2	, "active"	, ""),		// 2
		new the_skill(4, 	'幻影劍', 		3	, "active"	, ""),		// 3
		new the_skill(5, 	'禦空破陣', 	1	, "active"	, ""),		// 4
		new the_skill(6, 	'猛爆斬', 		5	, "active"	, ""),        
		new the_skill(7, 	'劍影', 		6	, "active"	, ""),		// 6
		new the_skill(8, 	'步步為營', 	1	, "active"	, ""),        
		new the_skill(9, 	'劍閃', 		8	, "active"	, ""),		// 8
		new the_skill(10, 	'_#雙劍鍛鍊', 	1	, "passive"	, "D_1hSword+1hSword[accuracy#5+3*SLv%, aspd#50*SLv]"),
		new the_skill(11, 	'_#神速軌跡', 	10	, "passive"	, "D_1hSword+1hSword[unsheathe_attack%#15+SLv, agi#SLv +Math.max(SLv-5, 0)] & all[unsheathe_attack%#5+SLv, agi#SLv +Math.max(SLv-5, 0)]"));
	for (let i=0; i<=6; ++i)
	{
		all_skilltree_type[0].STt_skilltree[4].ST_skill[i].Sk_W_type.push(WeapArms_map['DualSword']);
	}
	all_skilltree_type[0].STt_skilltree[4].ST_skill[7].Sk_W_type.push(WeapArms_map['DualSword'], WeapArms_map['Other']);
	all_skilltree_type[0].STt_skilltree[4].ST_skill[8].Sk_W_type.push(WeapArms_map['DualSword'], WeapArms_map['Other']);
	all_skilltree_type[0].STt_skilltree[4].ST_skill[9].Sk_W_type.push(WeapArms_map['DualSword']);
	all_skilltree_type[0].STt_skilltree[4].ST_skill[10].Sk_W_type.push(WeapArms_map['Other']);
		
	all_skilltree_type[0].STt_skilltree[4].ST_skill[2].Sk_branch.push('迴旋斬','風壓');
	all_skilltree_type[0].STt_skilltree[4].ST_skill[3].Sk_branch.push('幻影迷蹤','即死');
	all_skilltree_type[0].STt_skilltree[4].ST_skill[4].Sk_branch.push('防守架勢','反擊之勢');
	all_skilltree_type[0].STt_skilltree[4].ST_skill[6].Sk_branch.push('專注');
	all_skilltree_type[0].STt_skilltree[4].ST_skill[8].Sk_branch.push('二重閃光');
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[0].STt_skilltree[5].ST_skill.push(
		new the_skill(1, 	'迅捷刺突', 	0	, "active"	, ""),		// 0
		new the_skill(2, 	'鴻鵠一擲', 	1	, "active"	, ""),		// 1
		new the_skill(3, 	'龍尾', 		2	, "active"	, ""),		// 2
		new the_skill(4, 	'潛龍憾地', 	3	, "active"	, ""),		// 3
		new the_skill(5, 	'龍牙擊', 		3	, "active"	, ""),		// 4
		new the_skill(6, 	'死亡斧槍', 	1	, "active"	, ""),     
		new the_skill(7, 	'穿刺擊', 		6	, "active"	, ""),		// 6
		new the_skill(8, 	'時空驅動', 	7	, "active"	, ""),		// 7
		new the_skill(9, 	'懲戒之槍', 	6	, "active"	, ""),		// 8
		new the_skill(10, 	'_#斧槍要領', 	0	, "passive"	, "M_Halberd[atk#parseInt((SLv+7)/5)%, weaponatk#3*SLv%]"),		// 9
		new the_skill(11, 	'_#凝聚心神', 	10	, "passive"	, "M_Halberd[critical_rate#parseInt((1+SLv)/2)%, critical_rate#parseInt((1+SLv)/2)]"),	// 10
		new the_skill(12, 	'破風之勢', 	0	, "active"	, ""),        
		new the_skill(13, 	'逆境怒吼', 	12	, "active"	, ""),	// 12
		new the_skill(14, 	'神速掌握', 	13	, "active"	, ""));
	
	all_skilltree_type[0].STt_skilltree[5].ST_skill[0].Sk_W_type.push(WeapArms_map['Halberd'], WeapArms_map['1hSword']);
	all_skilltree_type[0].STt_skilltree[5].ST_skill[1].Sk_W_type.push(WeapArms_map['Halberd']);
	all_skilltree_type[0].STt_skilltree[5].ST_skill[2].Sk_W_type.push(WeapArms_map['Halberd']);
	all_skilltree_type[0].STt_skilltree[5].ST_skill[3].Sk_W_type.push(WeapArms_map['Halberd']);
	all_skilltree_type[0].STt_skilltree[5].ST_skill[4].Sk_W_type.push(WeapArms_map['Halberd']);
	all_skilltree_type[0].STt_skilltree[5].ST_skill[5].Sk_W_type.push(WeapArms_map['Halberd'], WeapArms_map['1hSword']);
	all_skilltree_type[0].STt_skilltree[5].ST_skill[6].Sk_W_type.push(WeapArms_map['Halberd'], WeapArms_map['1hSword']);
	all_skilltree_type[0].STt_skilltree[5].ST_skill[7].Sk_W_type.push(WeapArms_map['Halberd']);
	all_skilltree_type[0].STt_skilltree[5].ST_skill[8].Sk_W_type.push(WeapArms_map['Halberd'], WeapArms_map['1hSword']);
	all_skilltree_type[0].STt_skilltree[5].ST_skill[9].Sk_W_type.push(WeapArms_map['Halberd']);
	all_skilltree_type[0].STt_skilltree[5].ST_skill[10].Sk_W_type.push(WeapArms_map['Halberd']);
	all_skilltree_type[0].STt_skilltree[5].ST_skill[11].Sk_W_type.push(WeapArms_map['Halberd'], WeapArms_map['Other']);
	all_skilltree_type[0].STt_skilltree[5].ST_skill[12].Sk_W_type.push(WeapArms_map['Halberd'], WeapArms_map['Other']);
	
	all_skilltree_type[0].STt_skilltree[5].ST_skill[1].Sk_branch.push('挑擊', '猛擲');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[2].Sk_branch.push('橫掃', '迴旋');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[3].Sk_branch.push('潛龍一擊', '憾地震盪');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[6].Sk_branch.push('強化效果');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[8].Sk_branch.push('懲戒');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[12].Sk_branch.push('逆境', '絕境');
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[0].STt_skilltree[6].ST_skill.push(
		new the_skill(1, 	'一閃', 		0	, "active"	, ""),		// 0
		new the_skill(2, 	'波動刃', 		1	, "active"	, ""),		// 1
		new the_skill(3, 	'三段突刺', 	2	, "active"	, ""),		// 2
		new the_skill(4, 	'八相發破', 	3	, "active"	, ""),        
		new the_skill(5, 	'天流亂星', 	4	, "active"	, ""),
		new the_skill(6, 	'畫龍點睛', 	4	, "active"	, ""),
		new the_skill(7, 	'刀柄打擊', 	0	, "active"	, ""),	       
		new the_skill(8, 	'禍斷', 		7	, "active"	, ""),		// 7
		new the_skill(9, 	'斬釘截鐵', 	8	, "active"	, ""),		// 8
		new the_skill(10, 	'_#武士道', 	0	, "passive"	, "M_Katana[max_hp#10*SLv, max_mp#10*SLv, atk#parseInt((SLv+7)/5)%, weaponatk#3*SLv%] & all[max_hp#10*SLv, max_mp#10*SLv]"),		// 9
		new the_skill(11, 	'_#縮地法', 	10	, "passive"	, ""),	// 10
		new the_skill(12, 	'_#雙手合持', 	10	, "passive"	, "noSub[accuracy#SLv%, stability#SLv, critical_rate#SLv]", "noSub[暴擊發生時，傷害公式中的有效Atk提升至原本的${100+5*SLv}%]"),	// 11
		new the_skill(13, 	'明鏡止水', 	12	, "active"	, ""),	// 12
		new the_skill(14, 	'怪力亂神', 	13	, "active"	, ""));	// 13
	for (let i=0; i<=8; ++i)
	{
		all_skilltree_type[0].STt_skilltree[6].ST_skill[i].Sk_W_type.push(WeapArms_map['Katana']);
		all_skilltree_type[0].STt_skilltree[6].ST_skill[i].Sk_Au_type.push(AuArms_map['Katana']);
	}
	for (let i=9; i<=13; ++i)
	{
		all_skilltree_type[0].STt_skilltree[6].ST_skill[i].Sk_W_type.push(WeapArms_map['Katana'], WeapArms_map['Other']);
		all_skilltree_type[0].STt_skilltree[6].ST_skill[i].Sk_Au_type.push(AuArms_map['Katana'], AuArms_map['Other']);
	}
	
	all_skilltree_type[0].STt_skilltree[6].ST_skill[0].Sk_branch.push('斬切', '收合');
	all_skilltree_type[0].STt_skilltree[6].ST_skill[1].Sk_branch.push('波動弱化', '段數波動');
	all_skilltree_type[0].STt_skilltree[6].ST_skill[2].Sk_branch.push('鋒芒隱現');
	all_skilltree_type[0].STt_skilltree[6].ST_skill[7].Sk_branch.push('半月弧', '靜止');
	all_skilltree_type[0].STt_skilltree[6].ST_skill[8].Sk_branch.push('絕', '斷');
	all_skilltree_type[0].STt_skilltree[6].ST_skill[9].Sk_branch.push('心法', '熟練度');
	all_skilltree_type[0].STt_skilltree[6].ST_skill[10].Sk_branch.push('瞬疾移行');
	all_skilltree_type[0].STt_skilltree[6].ST_skill[11].Sk_branch.push('心眼');
	all_skilltree_type[0].STt_skilltree[6].ST_skill[12].Sk_branch.push('犧牲守備');
	all_skilltree_type[0].STt_skilltree[6].ST_skill[13].Sk_branch.push('潛能激發');
	
})();