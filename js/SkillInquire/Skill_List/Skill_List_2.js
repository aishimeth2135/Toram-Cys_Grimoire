
	all_skilltree_type[2].STt_skilltree.push(
		new the_skilltree(1, '生存本能'),
		new the_skilltree(2, '輔助技能'),
		new the_skilltree(3, '好戰份子'));
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[2].STt_skilltree[0].ST_skill.push(
		new the_skill(1,'(被動)裝死'),
		new the_skill(2,'(被動)經驗值提升'),
		new the_skill(3,'(被動)掉寶率提升'),
		new the_skill(4,'(被動)安心休息'),
		new the_skill(5,'(被動)HP突破'),
		new the_skill(6,'(被動)游刃有餘'),	//5
		new the_skill(7,'(被動)喘一口氣'),
		new the_skill(8,'(被動)MP突破'),
		new the_skill(9,'(被動)沉著以對')	//8
		);
	
	all_skilltree_type[2].STt_skilltree[0].ST_skill[5].Sk_branch.push('調息');
	all_skilltree_type[2].STt_skilltree[0].ST_skill[8].Sk_branch.push('寧神');
	
/*======================================================================================
  ======================================================================================*/	
	all_skilltree_type[2].STt_skilltree[1].ST_skill.push(
		new the_skill(1,'(被動)急救'),
		new the_skill(2,'治癒術'),
		new the_skill(3,'異常抗體'),
		new the_skill(4,'聖域'),		//3
		new the_skill(6,'生命能源'),
		new the_skill(7,'勇氣泉源'),
		new the_skill(8,'高速詠域'),
		new the_skill(10,'魔力能源'),
		new the_skill(11,'魔法防護'),
		new the_skill(12,'異常防護')
		);
		
	all_skilltree_type[2].STt_skilltree[1].ST_skill[3].Sk_branch.push('守護聖域');
	
/*======================================================================================
  ======================================================================================*/		
	all_skilltree_type[2].STt_skilltree[2].ST_skill.push(
		new the_skill(1,'(被動)提升魔力'),
		new the_skill(2,'(被動)專注'),			//1
		new the_skill(3,'(被動)頑強抵抗'),
		new the_skill(4,'(被動)魔力增幅'),
		new the_skill(6,'(被動)提升攻擊力'),
		new the_skill(7,'(被動)強打'),			//5
		new the_skill(8,'(被動)提升暴擊率'),
		new the_skill(9,'(被動)威嚇之力'),
		new the_skill(11,'(被動)提升防禦率'),
		new the_skill(12,'(被動)提升迴避率'),
		new the_skill(13,'(被動)提升命中率'),
		new the_skill(14,'(被動)守護要訣')
		);
	
	all_skilltree_type[2].STt_skilltree[2].ST_skill[1].Sk_branch.push('魔能高漲');
	all_skilltree_type[2].STt_skilltree[2].ST_skill[5].Sk_branch.push('弱點命中');
	