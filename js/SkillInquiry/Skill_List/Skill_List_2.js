try {
	(function (){
			all_skilltree_type[2].STt_skilltree.push(
				new the_skilltree(1, '生存本能'),
				new the_skilltree(2, '輔助技能'),
				new the_skilltree(3, '好戰份子'));
			
		/*======================================================================================
		======================================================================================*/	
			all_skilltree_type[2].STt_skilltree[0].ST_skill.push(
				new the_skill(1, '_#裝死', 			0, "passive", ""),
				new the_skill(2, '_#經驗值提升', 	0, "passive", ""),
				new the_skill(3, '_#掉寶率提升', 	0, "passive", "all[drop_rate#SLv]"),
				new the_skill(4, '_#安心休息', 		0, "passive", "all[natural_hp_regen#10*SLv, natural_hp_regen#2*SLv%]"),
				new the_skill(5, '_#HP突破', 		4, "passive", "all[max_hp#100*SLv, max_hp#2*SLv%]"),
				new the_skill(6, '_#游刃有餘', 		4, "passive", "", "all[戰鬥狀態中，每3秒恢復(1+HP上限×${0.04*SLv}%)的HP]"),	// 5
				new the_skill(7, '_#喘一口氣', 		0, "passive", "all[natural_mp_regen#SLv, natural_mp_regen#5*SLv%]"),    
				new the_skill(8, '_#MP突破', 		7, "passive", "all[max_mp#30*SLv]"),    
				new the_skill(9, '_#沉著以對', 		7, "passive", "", "all[戰鬥狀態中，每3秒恢復(1+MP上限×${0.04*SLv}%)的HP]"));// 8
			
			all_skilltree_type[2].STt_skilltree[0].ST_skill[5].Sk_branch.push('調息');
			all_skilltree_type[2].STt_skilltree[0].ST_skill[8].Sk_branch.push('寧神');
			
		/*======================================================================================
		======================================================================================*/	
			all_skilltree_type[2].STt_skilltree[1].ST_skill.push(
				new the_skill(1, 	'_#急救',		0	, "passive"	, ""),
				new the_skill(2, 	'治癒術', 		0	, "active"	, ""),
				new the_skill(3, 	'異常抗體', 	2	, "active"	, ""),
				new the_skill(4, 	'聖域', 		3	, "active"	, ""),	// 3
				new the_skill(5, 	'癒合', 		4	, "active"	, ""),
				new the_skill(6, 	'生命能源', 	0	, "active"	, ""),
				new the_skill(7, 	'勇氣泉源', 	6	, "active"	, ""),
				new the_skill(8, 	'高速詠域', 	7	, "active"	, ""),
				new the_skill(9, 	'高速行動', 	8	, "active"	, ""),
				new the_skill(10, 	'魔力能源', 	0	, "active"	, ""),
				new the_skill(11, 	'魔法防護', 	10	, "active"	, ""),
				new the_skill(12, 	'異常防護', 	11	, "active"	, ""),
				new the_skill(13, 	'神速反應', 	12	, "active"	, ""));
				
			all_skilltree_type[2].STt_skilltree[1].ST_skill[3].Sk_branch.push('守護聖域');
			
		/*======================================================================================
		======================================================================================*/		
			all_skilltree_type[2].STt_skilltree[2].ST_skill.push(
				new the_skill(1,	'_#提升魔力', 	0	, "passive"	, "all[matk#CLv*SLv/40]"),
				new the_skill(2,	'_#專注', 		1	, "passive"	, "", "all[造成魔法傷害時，總傷害有${SLv}%機率提升${2*SLv}%]"),		// 1
				new the_skill(3,	'_#頑強抵抗', 	2	, "passive"	, "", "all[處於膽怯、翻覆、昏厥、逼退狀態時，受到的傷害減少]"),        
				new the_skill(4,	'_#魔力增幅', 	3	, "passive"	, "all[matk#CLv*SLv/40]"),        
				new the_skill(6,	'_#提升攻擊力', 0	, "passive"	, "all[atk#CLv*SLv/40]"),        
				new the_skill(7,	'_#強打', 		6	, "passive"	, "", "all[造成物理傷害時，總傷害有${SLv}%機率提升${2*SLv}%]"),		// 5
				new the_skill(8,	'_#提升暴擊率', 7	, "passive"	, "all[critical_rate#parseInt((1+SLv)/2), critical_damage#parseInt((1+SLv)/2)%]"),
				new the_skill(9,	'_#威嚇之力', 	8	, "passive"	, "all[atk#CLv*SLv/40]"),
				new the_skill(11,	'_#提升防禦率', 0	, "passive"	, "all[def#CLv*SLv/40, mdef#CLv*SLv/40]"),
				new the_skill(12,	'_#提升迴避率', 11	, "passive"	, "all[dodge#SLv]"),
				new the_skill(13,	'_#提升命中率', 12	, "passive"	, "all[accuracy#SLv]"),
				new the_skill(14,	'_#守護要訣', 	13	, "passive"	, "all[def#CLv*SLv/40, mdef#CLv*SLv/40]"));
			
			all_skilltree_type[2].STt_skilltree[2].ST_skill[1].Sk_branch.push('魔能高漲');
			all_skilltree_type[2].STt_skilltree[2].ST_skill[5].Sk_branch.push('弱點命中');
	})();
} catch(e) {
	showWarningMsg("<Error> Initialize Skill-list<2> false. Please contact the author. <br />" + String(e));
}