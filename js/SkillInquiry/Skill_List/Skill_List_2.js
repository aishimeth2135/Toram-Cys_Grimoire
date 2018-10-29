try {
	(function (){
			cy_skillSystem.skillTreeType[2].skillTree.push(
				new cy_skillTree(1, 'Survival Skills|,|生存本能|,|サポートスキル'),
				new cy_skillTree(2, 'Support Skills|,|輔助技能|,|バトルスキル'),
				new cy_skillTree(3, 'Battle Skills|,|好戰份子|,|サバイバルスキル'));
			
		/*======================================================================================
		======================================================================================*/	
			cy_skillSystem.skillTreeType[2].skillTree[0].skill.push(
				new cy_skill(1, 'Play Dead|,|裝死|,|死んだふり'			, 0, "passive", ""),
				new cy_skill(2, 'EXP Gain Up|,|經驗值提升|,|経験値アップ'	, 0, "passive", ""),
				new cy_skill(3, 'Drop Rate Up|,|掉寶率提升|,|収集率アップ'	, 0, "passive", "all[drop_rate#SLv]"),
				new cy_skill(4, 'Safe Rest|,|安心休息|,|安全な休憩'		, 0, "passive", "all[natural_hp_regen#10*SLv, natural_hp_regen#2*SLv%]"),
				new cy_skill(5, 'HP Boost|,|HP突破|,|ＨＰブースト'			, 4, "passive", "all[max_hp#100*SLv, max_hp#2*SLv%]"),
				new cy_skill(6, "Fighter's High|,|游刃有餘|,|余裕ある戦闘"	, 4, "passive", "", "all[戰鬥狀態中，每3秒恢復(1+HP上限×${0.04*SLv}%)的HP]"),	// 5
				new cy_skill(7, 'Short Rest|,|喘一口氣|,|小さな息抜き'		, 0, "passive", "all[natural_mp_regen#SLv, natural_mp_regen#5*SLv%]"),    
				new cy_skill(8, 'MP Boost|,|MP突破|,|ＭＰブースト'			, 7, "passive", "all[max_mp#30*SLv]"),    
				new cy_skill(9, 'Sober Analysis|,|沉著以對|,|冷静な戦術'	, 7, "passive", "", "all[戰鬥狀態中，每3秒恢復(1+MP上限×${0.04*SLv}%)的HP]"));// 8
			
			cy_skillSystem.skillTreeType[2].skillTree[0].skill[5].captionBranch.push('調息');
			cy_skillSystem.skillTreeType[2].skillTree[0].skill[8].captionBranch.push('寧神');
			
		/*======================================================================================
		======================================================================================*/	
			cy_skillSystem.skillTreeType[2].skillTree[1].skill.push(
				new cy_skill(1	,'First Aid|,|急救|,|応急手当'					, 0	, "passive"	, ""),
				new cy_skill(2	,'Mini Heal|,|治癒術|,|ぷちヒール'				, 0	, "active"	, ""),
				new cy_skill(3	,'Recovery|,|異常抗體|,|リカバリー'				, 2	, "active"	, ""),
				new cy_skill(4	,'Sanctuary|,|聖域|,|サンクチュアリ'			, 3	, "active"	, ""),	// 3
				new cy_skill(5	,'Heal|,|癒合|,|ヒール'							, 4	, "active"	, ""),
				new cy_skill(6	,'Life Recovery|,|生命能源|,|ライフリカバリー'	, 0	, "active"	, ""),
				new cy_skill(7	,'Brave Aura|,|勇氣泉源|,|ブレイブオーラ'		, 6	, "active"	, ""),
				new cy_skill(8	,'High Cycle|,|高速詠域|,|ハイサイクル'			, 7	, "active"	, ""),
				new cy_skill(9	,'Quick Motion|,|高速行動|,|クイックモーション'	, 8	, "active"	, ""),
				new cy_skill(10,'Mana Recharge|,|魔力能源|,|マナリチャージ'	, 0	, "active"	, ""),
				new cy_skill(11,'Magic Barrier|,|魔法防護|,|マジックバリア'	, 10, "active"	, ""),
				new cy_skill(12,'Immunity|,|異常防護|,|ディジートシール'		, 11, "active"	, ""),
				new cy_skill(13,'Fast Reaction|,|神速反應|,|ハイリアクション'	, 12, "active"	, ""));
				
			cy_skillSystem.skillTreeType[2].skillTree[1].skill[3].captionBranch.push('守護聖域');
			
		/*======================================================================================
		======================================================================================*/		
			cy_skillSystem.skillTreeType[2].skillTree[2].skill.push(
				new cy_skill(1 , 'Magic UP|,|提升魔力|,|魔法力up'				, 0	, "passive"	, "all[matk#parseInt(CLv*SLv/40)]"),
				new cy_skill(2 , 'Concentrate|,|專注|,|集中'					, 1	, "passive"	, "", "all[造成魔法傷害時，總傷害有${SLv}%機率提升${2*SLv}%]"),		// 1
				new cy_skill(3 , 'Desperate Resist|,|頑強抵抗|,|必死の抵抗'	, 2	, "passive"	, "", "all[處於膽怯、翻覆、昏厥、逼退狀態時，受到的傷害減少]"),        
				new cy_skill(4 , 'Increased Energy|,|魔力增幅|,|更なる魔力'	, 3	, "passive"	, "all[matk#parseInt(CLv*SLv/40)]"),        
				new cy_skill(6 , 'Attack UP|,|提升攻擊力|,|攻撃力up'			, 0	, "passive"	, "all[atk#parseInt(CLv*SLv/40)]"),        
				new cy_skill(7 , 'Whack|,|強打|,|強打'							, 6	, "passive"	, "", "all[造成物理傷害時，有${SLv}%的機率使總傷害提升${2*SLv}%]"),		// 5
				new cy_skill(8 , 'Critical UP|,|提升暴擊率|,|クリティカルup'	, 7	, "passive"	, "all[critical_rate#parseInt((1+SLv)/2), critical_damage#parseInt((1+SLv)/2)%]"),
				new cy_skill(9 , 'Intimidating Power|,|威嚇之力|,|脅威の威力'	, 8	, "passive"	, "all[atk#parseInt(CLv*SLv/40)]"),
				new cy_skill(11, 'Defence UP|,|提升防禦率|,|防御力up'			, 0	, "passive"	, "all[def#parseInt(CLv*SLv/40), mdef#parseInt(CLv*SLv/40)]"),
				new cy_skill(12, 'Dodge UP|,|提升迴避率|,|回避力up'			, 11, "passive"	, "all[dodge#SLv]"),
				new cy_skill(13, 'Accuracy UP|,|提升命中率|,|命中up'			, 12, "passive"	, "all[accuracy#SLv]"),
				new cy_skill(14, 'Defense Mastery|,|守護要訣|,|守備の心得'		, 13, "passive"	, "all[def#parseInt(CLv*SLv/40), mdef#parseInt(CLv*SLv/40)]"));
			
			cy_skillSystem.skillTreeType[2].skillTree[2].skill[1].captionBranch.push('魔能高漲');
			cy_skillSystem.skillTreeType[2].skillTree[2].skill[5].captionBranch.push('弱點命中');
	})();
} catch(e) {
	errorForStop_msg("Initialize Skill-list<2> false.", e);
}