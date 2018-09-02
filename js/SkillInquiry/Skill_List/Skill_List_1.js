try {
	(function(){
		let WeapArms_map = {'1hSword': 0, '2hSword': 1, 'Bow': 2, 'Bowgun': 3, 'Staff': 4, 'MagicDevice': 5, 'Knuckles': 6, 'Halberd': 7, 'DualSword': 8, 'Katana': 9, 'Other': 10};
		let AuArms_map = {'Dagger': 0, 'Shield': 1, 'Arrow': 2, 'MagicDevice': 3, 'Knuckles': 4, 'Katana': 5, 'Other': 6};
		let bodyArms_map = {'Normal': 0, 'Dodge': 1, 'Defense': 2};	//Improve ...
		/*All_BodyType = ['一般', '輕量化', '重量化'];*/
		all_skilltree_type[1].STt_skilltree.push(
			new the_skilltree(1, '防衛技能'),
			new the_skilltree(2, '防護技能'),
			new the_skilltree(3, '刀術技能'),
			new the_skilltree(4, '騎士精神'),
			new the_skilltree(5, '狩獵技能'),
			new the_skilltree(6, '祭司技能'));
	
	/*======================================================================================
	======================================================================================*/	
		all_skilltree_type[1].STt_skilltree[0].ST_skill.push(
			new the_skill(1, '_#重防具要領'	, 0, "passive"	, "b_Defence[guard_rate#SLv%]"),
			new the_skill(2, '_#進階阻擋'	, 1, "passive"	, "b_Defence[guard_rate#SLv%]"),
			new the_skill(5, '_#輕防具要領'	, 0, "passive"	, "b_Dodge[evasion_rate#SLv%]"),
			new the_skill(6, '_#進階閃躲'	, 5, "passive"	, "b_Dodge[evasion_rate#SLv%]")
			);
		all_skilltree_type[1].STt_skilltree[0].ST_skill[0].Sk_B_type.push(bodyArms_map['Defense']);
		all_skilltree_type[1].STt_skilltree[0].ST_skill[1].Sk_B_type.push(bodyArms_map['Defense']);
		all_skilltree_type[1].STt_skilltree[0].ST_skill[2].Sk_B_type.push(bodyArms_map['Dodge']);
		all_skilltree_type[1].STt_skilltree[0].ST_skill[3].Sk_B_type.push(bodyArms_map['Dodge']);
		
	/*======================================================================================
	======================================================================================*/	
		all_skilltree_type[1].STt_skilltree[1].ST_skill.push(
			new the_skill(1, '_#盾牌要領',	0, "passive", "S_Shield[aspd#5*SLv%]"),
			new the_skill(2, '重盾擊', 		1, "active"	, ""),
			new the_skill(3, '飛盾', 		2, "active"	, ""),
			new the_skill(4, '傷害反彈', 	3, "active"	, ""),	// 3
			new the_skill(5, '_#防護盾甲', 	0, "passive", "S_Shield[def#2*SLv, def#SLv%, max_hp#50*SLv, physical_resistance#SLv]"),
			new the_skill(6, '_#防魔盾甲', 	5, "passive", "S_Shield[mdef#2*SLv, mdef#SLv%, max_hp#50*SLv, magic_resistance#SLv]"),
			new the_skill(7, '防禦界限', 	0, "active"	, ""),
			new the_skill(8, '魔法庇護', 	7, "active"	, ""),
			new the_skill(9, '移花接木', 	8, "active"	, ""));
			
		all_skilltree_type[1].STt_skilltree[1].ST_skill[0].Sk_Au_type.push(AuArms_map['Shield']);
		all_skilltree_type[1].STt_skilltree[1].ST_skill[1].Sk_Au_type.push(AuArms_map['Shield']);
		all_skilltree_type[1].STt_skilltree[1].ST_skill[2].Sk_Au_type.push(AuArms_map['Shield']);
		all_skilltree_type[1].STt_skilltree[1].ST_skill[3].Sk_Au_type.push(AuArms_map['Shield'], AuArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[1].ST_skill[4].Sk_Au_type.push(AuArms_map['Shield']);
		all_skilltree_type[1].STt_skilltree[1].ST_skill[5].Sk_Au_type.push(AuArms_map['Shield']);
		all_skilltree_type[1].STt_skilltree[1].ST_skill[6].Sk_Au_type.push(AuArms_map['Shield'], AuArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[1].ST_skill[7].Sk_Au_type.push(AuArms_map['Shield'], AuArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[1].ST_skill[8].Sk_Au_type.push(AuArms_map['Shield']);
		
		all_skilltree_type[1].STt_skilltree[1].ST_skill[3].Sk_branch.push('阻擋反擊');
		all_skilltree_type[1].STt_skilltree[1].ST_skill[8].Sk_branch.push('庇護');
		
	/*======================================================================================
	======================================================================================*/	
		all_skilltree_type[1].STt_skilltree[2].ST_skill.push(
			new the_skill(1, '飛刃', 		0, "active"	, ""),
			new the_skill(2, '定影針', 		1, "active"	, ""),
			new the_skill(3, '加特林機槍', 	2, "active"	, ""),
			new the_skill(4, '_#神乎其技', 	3, "passive", ""),	// 3
			new the_skill(5, '毒飛刃', 		1, "active"	, ""),    
			new the_skill(6, '_#連環刃', 	5, "passive", "", "S_Dagger[閃躲發生時，有${10*SLv}%機率追加一次等量傷害。]"),    
			new the_skill(7, '_#無影刃', 	0, "passive", "", "S_Dagger[一般攻擊時有${5*SLv +5*all_skilltree_type[1].STt_skilltree[2].ST_skill[7].calcLv}%機率追加(有效Atk×${10*(1+parseInt((all_skilltree_type[1].STt_skilltree[2].ST_skill[7].calcLv+9)/10))}% +小刀Atk)的傷害)]"),	// 6
			new the_skill(8, '_#威力增幅', 	7, "passive", "", "S_Dagger[「無影刃」的發動機率及威力提升]"),
			new the_skill(9, '_#裝甲破壞', 	8, "passive", "", "S_Dagger[「無影刃」將附帶${5*SLv}%的物理貫穿]"));
			
		for (var i=0;i<all_skilltree_type[1].STt_skilltree[2].ST_skill.length;i++)
			{
			all_skilltree_type[1].STt_skilltree[2].ST_skill[i].Sk_Au_type.push(AuArms_map['Dagger']);
			}
		all_skilltree_type[1].STt_skilltree[2].ST_skill[3].Sk_branch.push('影襲');
		all_skilltree_type[1].STt_skilltree[2].ST_skill[6].Sk_branch.push('無影追襲');
		
	/*======================================================================================
	======================================================================================*/	
		all_skilltree_type[1].STt_skilltree[3].ST_skill.push(
			new the_skill(1, '衝刺', 		0, "active"	, ""),
			new the_skill(2, '_#卸力', 		1, "passive", "", "all[受到物理傷害時，有機率減輕傷害]"),
			new the_skill(3, '完善守備', 	2, "active"	, ""),
			new the_skill(5, '挑釁', 		0, "active"	, ""),
			new the_skill(6, '憤怒的一擊', 	5, "active"	, ""),
			new the_skill(7, '繫影強襲', 	6, "active"	, ""));	// 5
		all_skilltree_type[1].STt_skilltree[3].ST_skill[0].Sk_W_type.push(WeapArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[3].ST_skill[0].Sk_Au_type.push(AuArms_map['Shield'],AuArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[3].ST_skill[1].Sk_W_type.push(WeapArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[3].ST_skill[1].Sk_Au_type.push(AuArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[3].ST_skill[2].Sk_Au_type.push(AuArms_map['Shield']);
		all_skilltree_type[1].STt_skilltree[3].ST_skill[3].Sk_W_type.push(WeapArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[3].ST_skill[3].Sk_Au_type.push(AuArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[3].ST_skill[4].Sk_W_type.push(WeapArms_map['1hSword'], WeapArms_map['2hSword']);
		all_skilltree_type[1].STt_skilltree[3].ST_skill[4].Sk_Au_type.push(AuArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[3].ST_skill[5].Sk_W_type.push(WeapArms_map['1hSword'], WeapArms_map['2hSword']);
		all_skilltree_type[1].STt_skilltree[3].ST_skill[5].Sk_Au_type.push(AuArms_map['Other']);
		
		all_skilltree_type[1].STt_skilltree[3].ST_skill[2].Sk_branch.push('絕對防禦');
		
	/*======================================================================================
	======================================================================================*/	
		all_skilltree_type[1].STt_skilltree[4].ST_skill.push(
			new the_skill(1, '腿踢', 		0, "active"	, ""),
			new the_skill(2, '旭日之箭', 	1, "active"	, ""),
			new the_skill(3, '力量之箭', 	2, "active"	, ""),
			new the_skill(5, '沉睡陷阱', 	0, "active"	, ""),	// 3
			new the_skill(6, '絆腳陷阱', 	5, "active"	, ""),	// 4
			new the_skill(7, '猛爆地雷', 	6, "active"	, ""));// 5
		all_skilltree_type[1].STt_skilltree[4].ST_skill[0].Sk_W_type.push(WeapArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[4].ST_skill[1].Sk_W_type.push(WeapArms_map['Bow'], WeapArms_map['Bowgun']);
		all_skilltree_type[1].STt_skilltree[4].ST_skill[2].Sk_W_type.push(WeapArms_map['Bow'], WeapArms_map['Bowgun']);
		all_skilltree_type[1].STt_skilltree[4].ST_skill[3].Sk_W_type.push(WeapArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[4].ST_skill[3].Sk_Au_type.push(AuArms_map['Arrow'], AuArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[4].ST_skill[4].Sk_W_type.push(WeapArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[4].ST_skill[4].Sk_Au_type.push(AuArms_map['Arrow'], AuArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[4].ST_skill[5].Sk_W_type.push(WeapArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[4].ST_skill[5].Sk_Au_type.push(AuArms_map['Arrow'], AuArms_map['Other']);
		
		all_skilltree_type[1].STt_skilltree[4].ST_skill[3].Sk_branch.push('觸發');
		all_skilltree_type[1].STt_skilltree[4].ST_skill[4].Sk_branch.push('觸發');
		all_skilltree_type[1].STt_skilltree[4].ST_skill[5].Sk_branch.push('觸發');
		
	/*======================================================================================
	======================================================================================*/	
		all_skilltree_type[1].STt_skilltree[5].ST_skill.push(
			new the_skill(1, '祝福', 		0, "active"	, ""),
			new the_skill(2, '榮耀頌歌', 	1, "active"	, ""),
			new the_skill(3, '強化祝福', 	2, "active"	, ""),
			new the_skill(5, '聖拳之裁', 	0, "active"	, ""),	// 3
			new the_skill(6, '神聖光輝', 	5, "active"	, ""),
			new the_skill(7, '空靈障壁', 	6, "active"	, ""));
		
		all_skilltree_type[1].STt_skilltree[5].ST_skill[0].Sk_W_type.push(WeapArms_map['Staff'], WeapArms_map['MagicDevice'], WeapArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[5].ST_skill[0].Sk_Au_type.push(AuArms_map['MagicDevice'], AuArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[5].ST_skill[1].Sk_W_type.push(WeapArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[5].ST_skill[1].Sk_Au_type.push(AuArms_map['Shield'],AuArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[5].ST_skill[2].Sk_W_type.push(WeapArms_map['Staff'], WeapArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[5].ST_skill[2].Sk_Au_type.push(AuArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[5].ST_skill[3].Sk_W_type.push(WeapArms_map['Staff'], WeapArms_map['Knuckles'], WeapArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[5].ST_skill[3].Sk_Au_type.push(AuArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[5].ST_skill[4].Sk_W_type.push(WeapArms_map['Staff'], WeapArms_map['MagicDevice'], WeapArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[5].ST_skill[4].Sk_Au_type.push(AuArms_map['MagicDevice'], AuArms_map['Knuckles'], AuArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[5].ST_skill[5].Sk_W_type.push(WeapArms_map['Other']);
		all_skilltree_type[1].STt_skilltree[5].ST_skill[5].Sk_Au_type.push(AuArms_map['Other']);
		
		all_skilltree_type[1].STt_skilltree[5].ST_skill[3].Sk_branch.push('物理部分','魔法部分');
		
	})();
} catch(e) {
	errorForStop_msg("Initialize Skill-list<1> false. MSG: " + String(e.stack));
}