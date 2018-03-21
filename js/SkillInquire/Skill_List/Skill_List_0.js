	
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
		new the_skill(1, '威力攻擊'),
		new the_skill(2, '迅捷攻擊'),
		new the_skill(3, '橫掃千軍'),	//2
		new the_skill(4, '爆氣斬'),		//3
		new the_skill(6, '音速斬切'),	//4
		new the_skill(7, '真空刃'),
		new the_skill(8, '風暴氣流'),	//6
		new the_skill(10, '(被動)劍術要領'),
		new the_skill(11, '(被動)劍速提升'),
		new the_skill(12, '(被動)大師級劍術'),
		new the_skill(13, '戰吼'));
	for (var i=0;i<all_skilltree_type[0].STt_skilltree[0].ST_skill.length;i++)
	{
		if (all_skilltree_type[0].STt_skilltree[0].ST_skill[i].Sk_name != '戰吼')
		{
			all_skilltree_type[0].STt_skilltree[0].ST_skill[i].Sk_W_type.push('單手劍','雙手劍');
		}
		else {
			all_skilltree_type[0].STt_skilltree[0].ST_skill[i].Sk_W_type.push('單手劍','雙手劍','其它');
		}
	}
	for (var i=0;i<all_skilltree_type[0].STt_skilltree[0].ST_skill.length;i++)
	{
		if (all_skilltree_type[0].STt_skilltree[0].ST_skill[i].Sk_name != '(被動)劍術要領')
		{
			all_skilltree_type[0].STt_skilltree[0].ST_skill[i].Sk_W_type.push('雙劍');
		}
	}
		
	all_skilltree_type[0].STt_skilltree[0].ST_skill[2].Sk_branch.push('力量灌注');
	all_skilltree_type[0].STt_skilltree[0].ST_skill[3].Sk_branch.push('強化攻擊','二連閃擊','劍光一閃');
	all_skilltree_type[0].STt_skilltree[0].ST_skill[4].Sk_branch.push('蓄勢待發','強化效果');
	all_skilltree_type[0].STt_skilltree[0].ST_skill[6].Sk_branch.push('刃風','風刃氣旋');
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[0].STt_skilltree[1].ST_skill.push(
		new the_skill(1, '威力射擊'),
		new the_skill(2,'渦輪射擊'),
		new the_skill(3,'弱點狙擊'),
		new the_skill(4,'箭雨'),
		new the_skill(6,'黏液射擊'),
		new the_skill(7,'麻痺射擊'),
		new the_skill(8,'煙霧彈'),
		new the_skill(10,'(被動)弓術鍛鍊'),
		new the_skill(11,'匿蹤'),
		new the_skill(12,'(被動)遠程狙擊'),
		new the_skill(13,'(被動)回氣'));
	for (var i=0;i<=7;i++)
	{
		all_skilltree_type[0].STt_skilltree[1].ST_skill[i].Sk_W_type.push('弓','弩');
		if (all_skilltree_type[0].STt_skilltree[1].ST_skill[i].Sk_name != '(被動)弓術鍛鍊')
		{
			all_skilltree_type[0].STt_skilltree[1].ST_skill[i].Sk_AW_type.push('箭矢');
		}
	}
	for (var i=8;i<=10;i++)
	{
		all_skilltree_type[0].STt_skilltree[1].ST_skill[i].Sk_W_type.push('其它');
		all_skilltree_type[0].STt_skilltree[1].ST_skill[i].Sk_AW_type.push('其它');
	}
	
/*======================================================================================
  ======================================================================================*/		
	all_skilltree_type[0].STt_skilltree[2].ST_skill.push(
		new the_skill(1,'法術/飛箭'),		//0
		new the_skill(2,'法術/長槍'),
		new the_skill(3,'法術/魔法槍'),
		new the_skill(4,'法術/衝擊波'), 	//3
		new the_skill(6,'法術/障壁'),
		new the_skill(7,'法術/引爆'),
		new the_skill(8,'法術/暴風'),
		new the_skill(10,'(被動)魔法要領'),
		new the_skill(11,'魔力充填'),
		new the_skill(12,'(被動)縮時詠唱'),
		new the_skill(13,'(被動)強射'));	//10
	for (var i=0;i<all_skilltree_type[0].STt_skilltree[2].ST_skill.length;i++)
	{
		if (all_skilltree_type[0].STt_skilltree[2].ST_skill[i].Sk_name != '(被動)魔法要領')
		{
			all_skilltree_type[0].STt_skilltree[2].ST_skill[i].Sk_W_type.push('法杖','魔導具','其它');
		}
		else {
			all_skilltree_type[0].STt_skilltree[2].ST_skill[i].Sk_W_type.push('法杖','魔導具');
		}
	}
	all_skilltree_type[0].STt_skilltree[2].ST_skill[3].Sk_branch.push('魔能調節');
	all_skilltree_type[0].STt_skilltree[2].ST_skill[9].Sk_branch.push('快速詠唱');
	all_skilltree_type[0].STt_skilltree[2].ST_skill[10].Sk_branch.push('魔法彈');

/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[0].STt_skilltree[3].ST_skill.push(
		new the_skill(1,'重擊'), 			//0
		new the_skill(2,'痛擊'),
		new the_skill(3,'穿甲'),
		new the_skill(4,'猛爆拳'), 			//3
		new the_skill(6,'音速波動'),
		new the_skill(7,'震地強襲'),
		new the_skill(8,'三段擊'), 			//6
		new the_skill(10,'(被動)格鬥要領'),	//7
		new the_skill(11,'(被動)體術鍛鍊'),
		new the_skill(13,'(被動)乘勝追擊'),	//9
		new the_skill(14,'(被動)猛力追擊'));
	for (var i=0;i<=6;i++)
	{
		all_skilltree_type[0].STt_skilltree[3].ST_skill[i].Sk_W_type.push('拳套','其它');
		all_skilltree_type[0].STt_skilltree[3].ST_skill[i].Sk_AW_type.push('拳套','其它');
	}
	all_skilltree_type[0].STt_skilltree[3].ST_skill[7].Sk_W_type.push('拳套');
	all_skilltree_type[0].STt_skilltree[3].ST_skill[8].Sk_W_type.push('拳套');
	all_skilltree_type[0].STt_skilltree[3].ST_skill[8].Sk_AW_type.push('拳套');
	all_skilltree_type[0].STt_skilltree[3].ST_skill[9].Sk_W_type.push('拳套');
	all_skilltree_type[0].STt_skilltree[3].ST_skill[9].Sk_AW_type.push('拳套');
	all_skilltree_type[0].STt_skilltree[3].ST_skill[10].Sk_W_type.push('拳套');
	
	all_skilltree_type[0].STt_skilltree[3].ST_skill[3].Sk_branch.push('精確追擊');
	all_skilltree_type[0].STt_skilltree[3].ST_skill[9].Sk_branch.push('追擊');
	
/*======================================================================================
  ======================================================================================*/		
	all_skilltree_type[0].STt_skilltree[4].ST_skill.push(
		new the_skill(1,'(被動)雙劍要領'),
		new the_skill(2,'雙弧斬'),
		new the_skill(3,'破空刃'), 			//2
		new the_skill(4,'幻影劍'),			//3
		new the_skill(5,'禦空破陣'),		//4
		new the_skill(6,'猛爆斬'),
		new the_skill(7,'劍影'),			//6
		new the_skill(8,'步步為營'),
		new the_skill(9,'劍閃'),			//8
		new the_skill(10,'(被動)雙劍鍛鍊'),
		new the_skill(11,'(被動)神速軌跡'));
	for (var i=0;i<=6;i++)
	{
		all_skilltree_type[0].STt_skilltree[4].ST_skill[i].Sk_W_type.push('雙劍');
	}
	all_skilltree_type[0].STt_skilltree[4].ST_skill[7].Sk_W_type.push('雙劍','其它');
	all_skilltree_type[0].STt_skilltree[4].ST_skill[8].Sk_W_type.push('雙劍','其它');
	all_skilltree_type[0].STt_skilltree[4].ST_skill[9].Sk_W_type.push('雙劍');
	all_skilltree_type[0].STt_skilltree[4].ST_skill[10].Sk_W_type.push('其它');
		
	all_skilltree_type[0].STt_skilltree[4].ST_skill[2].Sk_branch.push('迴旋斬','風壓');
	all_skilltree_type[0].STt_skilltree[4].ST_skill[3].Sk_branch.push('幻影迷蹤','即死');
	all_skilltree_type[0].STt_skilltree[4].ST_skill[4].Sk_branch.push('防守架勢','反擊之勢');
	all_skilltree_type[0].STt_skilltree[4].ST_skill[6].Sk_branch.push('專注');
	all_skilltree_type[0].STt_skilltree[4].ST_skill[8].Sk_branch.push('二重閃光');
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[0].STt_skilltree[5].ST_skill.push(
		new the_skill(1,'迅捷刺突'),		//0
		new the_skill(2,'鴻鵠一擲'),		//1
		new the_skill(3,'龍尾'),			//2
		new the_skill(4,'潛龍憾地'),		//3
		new the_skill(6,'死亡斧槍'),
		new the_skill(7,'穿刺擊'),			//5
		new the_skill(9,'懲戒之槍'),		//6
		new the_skill(10,'(被動)斧槍要領'),	//7
		new the_skill(11,'(被動)凝聚心神'),	//8
		new the_skill(12,'破風之勢'),
		new the_skill(13,'逆境怒吼'));		//10
	
	all_skilltree_type[0].STt_skilltree[5].ST_skill[0].Sk_W_type.push('旋風槍', '單手劍');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[1].Sk_W_type.push('旋風槍');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[2].Sk_W_type.push('旋風槍');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[3].Sk_W_type.push('旋風槍');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[4].Sk_W_type.push('旋風槍', '單手劍');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[5].Sk_W_type.push('旋風槍', '單手劍');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[6].Sk_W_type.push('旋風槍', '單手劍');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[7].Sk_W_type.push('旋風槍');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[8].Sk_W_type.push('旋風槍');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[9].Sk_W_type.push('旋風槍','其它');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[10].Sk_W_type.push('旋風槍','其它');
	
	all_skilltree_type[0].STt_skilltree[5].ST_skill[1].Sk_branch.push('挑擊','猛擲');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[2].Sk_branch.push('橫掃','迴旋');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[3].Sk_branch.push('潛龍一擊','憾地震盪');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[5].Sk_branch.push('強化效果');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[6].Sk_branch.push('懲戒');
	all_skilltree_type[0].STt_skilltree[5].ST_skill[10].Sk_branch.push('逆境','絕境');
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[0].STt_skilltree[6].ST_skill.push(
		new the_skill(1, '一閃'),			//0
		new the_skill(2, '波動刃'),			//1
		new the_skill(3, '三段突刺'),		//2
		new the_skill(4, '八相發破'),
		new the_skill(7, '刀柄打擊'),	
		new the_skill(8, '禍斷'),			//5
		new the_skill(9, '斬釘截鐵'),		//6
		new the_skill(10, '(被動)武士道'),	//7
		new the_skill(11, '(被動)縮地法'),	//8
		new the_skill(12, '(被動)雙手合持'),//9
		new the_skill(13, '明鏡止水'));		//10
	for (let i=0; i<=6; ++i)
	{
		all_skilltree_type[0].STt_skilltree[6].ST_skill[i].Sk_W_type.push('拔刀劍');
		all_skilltree_type[0].STt_skilltree[6].ST_skill[i].Sk_AW_type.push('拔刀劍');
	}
	for (let i=7; i<=10; ++i)
	{
		all_skilltree_type[0].STt_skilltree[6].ST_skill[i].Sk_W_type.push('拔刀劍', '其它');
		all_skilltree_type[0].STt_skilltree[6].ST_skill[i].Sk_AW_type.push('拔刀劍', '其它');
	}
	
	all_skilltree_type[0].STt_skilltree[6].ST_skill[0].Sk_branch.push('斬切', '收合');
	all_skilltree_type[0].STt_skilltree[6].ST_skill[1].Sk_branch.push('波動弱化', '段數波動');
	all_skilltree_type[0].STt_skilltree[6].ST_skill[2].Sk_branch.push('鋒芒隱現');
	all_skilltree_type[0].STt_skilltree[6].ST_skill[5].Sk_branch.push('半月弧', '靜止');
	all_skilltree_type[0].STt_skilltree[6].ST_skill[6].Sk_branch.push('絕', '斷');
	all_skilltree_type[0].STt_skilltree[6].ST_skill[7].Sk_branch.push('心法', '熟練度');
	all_skilltree_type[0].STt_skilltree[6].ST_skill[8].Sk_branch.push('瞬疾移行');
	all_skilltree_type[0].STt_skilltree[6].ST_skill[9].Sk_branch.push('心眼');
	all_skilltree_type[0].STt_skilltree[6].ST_skill[10].Sk_branch.push('犧牲守備');
  
  
  
	