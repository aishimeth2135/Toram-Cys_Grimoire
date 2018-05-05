
	all_skilltree_type[2].STt_skilltree.push(
		new the_skilltree(1, '生存本能'),
		new the_skilltree(2, '輔助技能'),
		new the_skilltree(3, '好戰份子'));
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[2].STt_skilltree[0].ST_skill.push(
		new the_skill(1, '_#裝死', 			0),
		new the_skill(2, '_#經驗值提升', 	0),
		new the_skill(3, '_#掉寶率提升', 	0),
		new the_skill(4, '_#安心休息', 		0),
		new the_skill(5, '_#HP突破', 		4),
		new the_skill(6, '_#游刃有餘', 		4),	// 5
		new the_skill(7, '_#喘一口氣', 		0),    
		new the_skill(8, '_#MP突破', 		7),    
		new the_skill(9, '_#沉著以對', 		7));// 8
	
	all_skilltree_type[2].STt_skilltree[0].ST_skill[5].Sk_branch.push('調息');
	all_skilltree_type[2].STt_skilltree[0].ST_skill[8].Sk_branch.push('寧神');
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[2].STt_skilltree[1].ST_skill.push(
		new the_skill(1, 	'_#急救',		0),
		new the_skill(2, 	'治癒術', 		0),
		new the_skill(3, 	'異常抗體', 	2),
		new the_skill(4, 	'聖域', 		3),	// 3
		new the_skill(5, 	'癒合', 		4),
		new the_skill(6, 	'生命能源', 	0),
		new the_skill(7, 	'勇氣泉源', 	6),
		new the_skill(8, 	'高速詠域', 	7),
		new the_skill(9, 	'高速行動', 	8),
		new the_skill(10, 	'魔力能源', 	0),
		new the_skill(11, 	'魔法防護', 	10),
		new the_skill(12, 	'異常防護', 	11),
		new the_skill(13, 	'神速反應', 	12));
		
	all_skilltree_type[2].STt_skilltree[1].ST_skill[3].Sk_branch.push('守護聖域');
	
/*======================================================================================
  ======================================================================================*/		
	all_skilltree_type[2].STt_skilltree[2].ST_skill.push(
		new the_skill(1,	'_#提升魔力', 	0),
		new the_skill(2,	'_#專注', 		1),		// 1
		new the_skill(3,	'_#頑強抵抗', 	2),        
		new the_skill(4,	'_#魔力增幅', 	3),        
		new the_skill(6,	'_#提升攻擊力', 0),        
		new the_skill(7,	'_#強打', 		6),		// 5
		new the_skill(8,	'_#提升暴擊率', 7),
		new the_skill(9,	'_#威嚇之力', 	8),
		new the_skill(11,	'_#提升防禦率', 0),
		new the_skill(12,	'_#提升迴避率', 11),
		new the_skill(13,	'_#提升命中率', 12),
		new the_skill(14,	'_#守護要訣', 	13));
	
	all_skilltree_type[2].STt_skilltree[2].ST_skill[1].Sk_branch.push('魔能高漲');
	all_skilltree_type[2].STt_skilltree[2].ST_skill[5].Sk_branch.push('弱點命中');
	