	
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
		new the_skill(1, '_#重防具要領', 0),
		new the_skill(2, '_#進階阻擋', 1),
		new the_skill(5, '_#輕防具要領', 0),
		new the_skill(6, '_#進階閃躲', 5)
		);
	all_skilltree_type[1].STt_skilltree[0].ST_skill[0].Sk_B_type.push('重量化');
	all_skilltree_type[1].STt_skilltree[0].ST_skill[1].Sk_B_type.push('重量化');
	all_skilltree_type[1].STt_skilltree[0].ST_skill[2].Sk_B_type.push('輕量化');
	all_skilltree_type[1].STt_skilltree[0].ST_skill[3].Sk_B_type.push('輕量化');
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[1].STt_skilltree[1].ST_skill.push(
		new the_skill(1, '_#盾牌要領', 0),
		new the_skill(2, '重盾擊', 1),
		new the_skill(3, '飛盾', 2),
		new the_skill(4, '傷害反彈', 3),					//3
		new the_skill(5, '_#防護盾甲', 0),
		new the_skill(6, '_#防魔盾甲', 5),
		new the_skill(7, '防禦界限', 0),
		new the_skill(8, '魔法庇護', 7),
		new the_skill(9, '移花接木', 8));
		
	all_skilltree_type[1].STt_skilltree[1].ST_skill[0].Sk_Au_type.push('盾牌');
	all_skilltree_type[1].STt_skilltree[1].ST_skill[1].Sk_Au_type.push('盾牌');
	all_skilltree_type[1].STt_skilltree[1].ST_skill[2].Sk_Au_type.push('盾牌');
	all_skilltree_type[1].STt_skilltree[1].ST_skill[3].Sk_Au_type.push('盾牌','其它');
	all_skilltree_type[1].STt_skilltree[1].ST_skill[4].Sk_Au_type.push('盾牌');
	all_skilltree_type[1].STt_skilltree[1].ST_skill[5].Sk_Au_type.push('盾牌');
	all_skilltree_type[1].STt_skilltree[1].ST_skill[6].Sk_Au_type.push('盾牌','其它');
	all_skilltree_type[1].STt_skilltree[1].ST_skill[7].Sk_Au_type.push('盾牌','其它');
	all_skilltree_type[1].STt_skilltree[1].ST_skill[8].Sk_Au_type.push('盾牌');
	
	all_skilltree_type[1].STt_skilltree[1].ST_skill[3].Sk_branch.push('阻擋反擊');
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[1].STt_skilltree[2].ST_skill.push(
		new the_skill(1, '飛刃', 0),
		new the_skill(2, '定影針', 1),
		new the_skill(3, '加特林機槍', 2),
		new the_skill(4, '_#神乎其技', 3),	//3
		new the_skill(5, '毒飛刃', 1),
		new the_skill(6, '_#連環刃', 5),
		new the_skill(7, '_#無影刃', 0),	//6
		new the_skill(8, '_#威力增幅', 7),
		new the_skill(9, '_#裝甲破壞', 8));
		
	for (var i=0;i<all_skilltree_type[1].STt_skilltree[2].ST_skill.length;i++)
		{
		all_skilltree_type[1].STt_skilltree[2].ST_skill[i].Sk_Au_type.push('小刀');
		}
	all_skilltree_type[1].STt_skilltree[2].ST_skill[3].Sk_branch.push('影襲');
	all_skilltree_type[1].STt_skilltree[2].ST_skill[6].Sk_branch.push('無影追襲');
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[1].STt_skilltree[3].ST_skill.push(
		new the_skill(1, '衝刺', 0),
		new the_skill(2, '_#卸力', 1),
		new the_skill(3, '完善守備', 2),
		new the_skill(5, '挑釁', 0),
		new the_skill(6, '憤怒的一擊', 5),
		new the_skill(7, '繫影強襲', 6)			//5
		);
	all_skilltree_type[1].STt_skilltree[3].ST_skill[0].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[0].Sk_Au_type.push('盾牌','其它');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[1].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[1].Sk_Au_type.push('其它');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[2].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[2].Sk_Au_type.push('盾牌');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[3].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[3].Sk_Au_type.push('其它');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[4].Sk_W_type.push('單手劍','雙手劍');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[4].Sk_Au_type.push('其它');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[5].Sk_W_type.push('單手劍','雙手劍');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[5].Sk_Au_type.push('其它');
	
	all_skilltree_type[1].STt_skilltree[3].ST_skill[2].Sk_branch.push('絕對防禦');
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[1].STt_skilltree[4].ST_skill.push(
		new the_skill(1, '腿踢', 0),
		new the_skill(2, '旭日之箭', 1),
		new the_skill(3, '力量之箭', 2),
		new the_skill(5, '沉睡陷阱', 0),	//3
		new the_skill(6, '絆腳陷阱', 5),			//4
		new the_skill(7, '猛爆地雷', 6)				//5
		);
	all_skilltree_type[1].STt_skilltree[4].ST_skill[0].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[1].Sk_W_type.push('弓','弩');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[2].Sk_W_type.push('弓','弩');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[3].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[3].Sk_Au_type.push('箭矢','其它');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[4].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[4].Sk_Au_type.push('箭矢','其它');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[5].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[5].Sk_Au_type.push('箭矢','其它');
	
	all_skilltree_type[1].STt_skilltree[4].ST_skill[3].Sk_branch.push('觸發');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[4].Sk_branch.push('觸發');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[5].Sk_branch.push('觸發');
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[1].STt_skilltree[5].ST_skill.push(
		new the_skill(1, '祝福', 0),
		new the_skill(2, '榮耀頌歌', 1),
		new the_skill(3, '強化祝福', 2),
		new the_skill(5, '聖拳之裁', 0),	//3
		new the_skill(6, '神聖光輝', 5),
		new the_skill(7, '空靈障壁', 6));
	
	all_skilltree_type[1].STt_skilltree[5].ST_skill[0].Sk_W_type.push('法杖','魔導具','其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[0].Sk_Au_type.push('其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[1].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[1].Sk_Au_type.push('盾牌','其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[2].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[2].Sk_Au_type.push('其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[3].Sk_W_type.push('法杖','拳套','其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[3].Sk_Au_type.push('其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[4].Sk_W_type.push('法杖','魔導具','其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[4].Sk_Au_type.push('其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[5].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[5].Sk_Au_type.push('其它');
	
	all_skilltree_type[1].STt_skilltree[5].ST_skill[3].Sk_branch.push('物理部分','魔法部分');
	