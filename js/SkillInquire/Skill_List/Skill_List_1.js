	
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
		new the_skill(1,'(被動)重防具要領'),
		new the_skill(2,'(被動)進階阻擋'),
		new the_skill(5,'(被動)輕防具要領'),
		new the_skill(6,'(被動)進階閃躲')
		);
	all_skilltree_type[1].STt_skilltree[0].ST_skill[0].Sk_B_type.push('重量化');
	all_skilltree_type[1].STt_skilltree[0].ST_skill[1].Sk_B_type.push('重量化');
	all_skilltree_type[1].STt_skilltree[0].ST_skill[2].Sk_B_type.push('輕量化');
	all_skilltree_type[1].STt_skilltree[0].ST_skill[3].Sk_B_type.push('輕量化');
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[1].STt_skilltree[1].ST_skill.push(
		new the_skill(1,'(被動)盾牌要領'),
		new the_skill(2,'重盾擊'),
		new the_skill(3,'飛盾'),
		new the_skill(4,'傷害反彈'),		//3
		new the_skill(5,'(被動)防護盾甲'),
		new the_skill(6,'(被動)防魔盾甲'),
		new the_skill(7,'防禦界限'),
		new the_skill(8,'魔法庇護'),
		new the_skill(9,'移花接木')
		);
	all_skilltree_type[1].STt_skilltree[1].ST_skill[0].Sk_AW_type.push('盾牌');
	all_skilltree_type[1].STt_skilltree[1].ST_skill[1].Sk_AW_type.push('盾牌');
	all_skilltree_type[1].STt_skilltree[1].ST_skill[2].Sk_AW_type.push('盾牌');
	all_skilltree_type[1].STt_skilltree[1].ST_skill[3].Sk_AW_type.push('盾牌','其它');
	all_skilltree_type[1].STt_skilltree[1].ST_skill[4].Sk_AW_type.push('盾牌');
	all_skilltree_type[1].STt_skilltree[1].ST_skill[5].Sk_AW_type.push('盾牌');
	all_skilltree_type[1].STt_skilltree[1].ST_skill[6].Sk_AW_type.push('盾牌','其它');
	all_skilltree_type[1].STt_skilltree[1].ST_skill[7].Sk_AW_type.push('盾牌','其它');
	all_skilltree_type[1].STt_skilltree[1].ST_skill[8].Sk_AW_type.push('盾牌');
	
	all_skilltree_type[1].STt_skilltree[1].ST_skill[3].Sk_branch.push('技能效果','阻擋反擊');
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[1].STt_skilltree[2].ST_skill.push(
		new the_skill(1,'飛刃'),
		new the_skill(2,'定影針'),
		new the_skill(3,'加特林機槍'),
		new the_skill(4,'(被動)神乎其技'),	//3
		new the_skill(5,'毒飛刃'),
		new the_skill(6,'(被動)連環刃'),
		new the_skill(7,'(被動)無影刃'),	//6
		new the_skill(8,'(被動)威力增幅'),
		new the_skill(9,'(被動)裝甲破壞')
		);
	for (var i=0;i<all_skilltree_type[1].STt_skilltree[2].ST_skill.length;i++)
		{
		all_skilltree_type[1].STt_skilltree[2].ST_skill[i].Sk_AW_type.push('小刀');
		}
	all_skilltree_type[1].STt_skilltree[2].ST_skill[3].Sk_branch.push('技能效果','襲');
	all_skilltree_type[1].STt_skilltree[2].ST_skill[6].Sk_branch.push('技能效果','無影追襲');
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[1].STt_skilltree[3].ST_skill.push(
		new the_skill(1,'衝刺'),
		new the_skill(2,'卸力'),
		new the_skill(3,'完善守備'),
		new the_skill(5,'挑釁'),
		new the_skill(6,'憤怒的一擊'),
		new the_skill(7,'繫影強襲')		//5
		);
	all_skilltree_type[1].STt_skilltree[3].ST_skill[0].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[0].Sk_AW_type.push('盾牌','其它');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[1].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[1].Sk_AW_type.push('其它');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[2].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[2].Sk_AW_type.push('盾牌');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[3].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[3].Sk_AW_type.push('其它');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[4].Sk_W_type.push('單手劍','雙手劍');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[4].Sk_AW_type.push('其它');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[5].Sk_W_type.push('單手劍','雙手劍');
	all_skilltree_type[1].STt_skilltree[3].ST_skill[5].Sk_AW_type.push('其它');
	
	all_skilltree_type[1].STt_skilltree[3].ST_skill[2].Sk_branch.push('技能效果','絕對防禦');
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[1].STt_skilltree[4].ST_skill.push(
		new the_skill(1,'腿踢'),
		new the_skill(2,'旭日之箭'),
		new the_skill(3,'力量之箭'),
		new the_skill(5,'沉睡陷阱'),	//3
		new the_skill(6,'絆腳陷阱'),	//4
		new the_skill(7,'猛爆地雷')		//5
		);
	all_skilltree_type[1].STt_skilltree[4].ST_skill[0].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[1].Sk_W_type.push('弓','弩');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[2].Sk_W_type.push('弓','弩');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[3].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[3].Sk_AW_type.push('箭矢','其它');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[4].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[4].Sk_AW_type.push('箭矢','其它');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[5].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[5].Sk_AW_type.push('箭矢','其它');
	
	all_skilltree_type[1].STt_skilltree[4].ST_skill[3].Sk_branch.push('技能效果','觸發');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[4].Sk_branch.push('技能效果','觸發');
	all_skilltree_type[1].STt_skilltree[4].ST_skill[5].Sk_branch.push('技能效果','觸發');
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[1].STt_skilltree[5].ST_skill.push(
		new the_skill(1,'祝福'),
		new the_skill(2,'榮耀頌歌'),
		new the_skill(3,'強化祝福'),
		new the_skill(5,'聖拳之裁'),	//3
		new the_skill(6,'神聖光輝'),
		new the_skill(7,'空靈障壁')
		);
	
	all_skilltree_type[1].STt_skilltree[5].ST_skill[0].Sk_W_type.push('法杖','魔導具','其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[0].Sk_AW_type.push('其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[1].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[1].Sk_AW_type.push('盾牌','其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[2].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[2].Sk_AW_type.push('其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[3].Sk_W_type.push('法杖','拳套','其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[3].Sk_AW_type.push('其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[4].Sk_W_type.push('法杖','魔導具','其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[4].Sk_AW_type.push('其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[5].Sk_W_type.push('其它');
	all_skilltree_type[1].STt_skilltree[5].ST_skill[5].Sk_AW_type.push('其它');
	
	all_skilltree_type[1].STt_skilltree[5].ST_skill[3].Sk_branch.push('技能效果','物理部分','魔法部分');
	