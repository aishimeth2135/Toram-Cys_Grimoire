try {
	(function(){
		let WeapArms_map = {'1hSword': 0, '2hSword': 1, 'Bow': 2, 'Bowgun': 3, 'Staff': 4, 'MagicDevice': 5, 'Knuckles': 6, 'Halberd': 7, 'DualSword': 8, 'Katana': 9, 'Other': 10};
		let AuArms_map = {'Dagger': 0, 'Shield': 1, 'Arrow': 2, 'MagicDevice': 3, 'Knuckles': 4, 'Katana': 5, 'Other': 6};
		let bodyArms_map = {'Normal': 0, 'Dodge': 1, 'Defense': 2};	//Improve ...
		/*All_BodyType = ['一般', '輕量化', '重量化'];*/
		all_skilltree_type[1].STt_skilltree.push(
			new the_skilltree(1, 'Guard Skills|,|防衛技能|,|ガードスキル'),
			new the_skilltree(2, 'Shield Skills|,|防護技能|,|シールドスキル'),
			new the_skilltree(3, 'Dagger Skills|,|刀術技能|,|ナイフスキル'),
			new the_skilltree(4, 'Knight Skills|,|騎士精神|,|ナイトスキル'),
			new the_skilltree(5, 'Hunter Skills|,|狩獵技能|,|プリーストスキル'),
			new the_skilltree(6, 'Priest Skills|,|祭司技能|,|ハンタースキル'));
	
	/*======================================================================================
	======================================================================================*/	
		all_skilltree_type[1].STt_skilltree[0].ST_skill.push(
			new the_skill(1, 'Heavy Armor|,|重防具要領|,|重防具マスタリ'		, 0, "passive"	, "b_Defence[guard_rate#SLv%]"),
			new the_skill(2, 'Advanced Guard|,|進階阻擋|,|アドバンスガード'		, 1, "passive"	, "b_Defence[guard_rate#SLv%]"),
			new the_skill(5, 'Light Armor|,|輕防具要領|,| 軽防具マスタリ'		, 0, "passive"	, "b_Dodge[evasion_rate#SLv%]"),
			new the_skill(6, 'Advanced Evasion|,|進階閃躲|,|アドバンスフリー'	, 5, "passive"	, "b_Dodge[evasion_rate#SLv%]")
			);
		all_skilltree_type[1].STt_skilltree[0].ST_skill[0].Sk_B_type.push(bodyArms_map['Defense']);
		all_skilltree_type[1].STt_skilltree[0].ST_skill[1].Sk_B_type.push(bodyArms_map['Defense']);
		all_skilltree_type[1].STt_skilltree[0].ST_skill[2].Sk_B_type.push(bodyArms_map['Dodge']);
		all_skilltree_type[1].STt_skilltree[0].ST_skill[3].Sk_B_type.push(bodyArms_map['Dodge']);
		
	/*======================================================================================
	======================================================================================*/	
		all_skilltree_type[1].STt_skilltree[1].ST_skill.push(
			new the_skill(1, 'Shield Mastery|,|盾牌要領|,|シールドマスタリ'	, 0, "passive", "S_Shield[aspd#5*SLv%]"),
			new the_skill(2, 'Shield Bash|,|重盾擊|,|シールドバッシュ'		, 1, "active"	, ""),
			new the_skill(3, 'Shield Cannon|,|飛盾|,|シールドキャノン'		, 2, "active"	, ""),
			new the_skill(4, 'Guard Strike|,|傷害反彈|,|ガードストライク'	, 3, "active"	, ""),	// 3
			new the_skill(5, 'Force Shield|,|防護盾甲|,|フォースシールド'	, 0, "passive", "S_Shield[def#2*SLv, def#SLv%, max_hp#50*SLv, physical_resistance#SLv]"),
			new the_skill(6, 'Magical Shield|,|防魔盾甲|,|マジカルシールド'	, 5, "passive", "S_Shield[mdef#2*SLv, mdef#SLv%, max_hp#50*SLv, magic_resistance#SLv]"),
			new the_skill(7, 'Protection|,|防禦界限|,|プロテクション'		, 0, "active"	, ""),
			new the_skill(8, 'Aegis|,|魔法庇護|,|イージス'					, 7, "active"	, ""),
			new the_skill(9, 'Guardian|,|移花接木|,|ガーディアン'			, 8, "active"	, ""));
			
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
			new the_skill(1, 'Throwing Knife|,|飛刃|,|スローイング'			, 0, "active"	, ""),
			new the_skill(2, 'Spike Dart|,|定影針|,|スバイクダート'			, 1, "active"	, ""),
			new the_skill(3, 'Gatling Knife|,|加特林機槍|,|ガトリングナイフ', 2, "active"	, ""),
			new the_skill(4, 'Amazing Throw|,|神乎其技|,|脅威の投擲術'		, 3, "passive"	, ""),	// 3
			new the_skill(5, 'Poison Dagger|,|毒飛刃|,|ポイズンダガー'		, 1, "active"	, ""),    
			new the_skill(6, 'Double Throw|,|連環刃|,|ダブルスロー'			, 5, "passive"	, "", "S_Dagger[閃躲發生時，有${10*SLv}%機率追加一次等量傷害。]"),    
			new the_skill(7, 'Hidden Arm|,|無影刃|,|セカンドアーム'			, 0, "passive"	, "", "S_Dagger[一般攻擊時有${5*SLv +5*all_skilltree_type[1].STt_skilltree[2].ST_skill[7].calcLv}%機率追加(有效Atk×${10*(1+parseInt((all_skilltree_type[1].STt_skilltree[2].ST_skill[7].calcLv+9)/10))}% +小刀Atk)的傷害)]"),	// 6
			new the_skill(8, 'Intense Knife|,|威力增幅|,|インテンスナイフ'	, 7, "passive"	, "", "S_Dagger[「無影刃」的發動機率及威力提升]"),
			new the_skill(9, 'Mail Breaker|,|裝甲破壞|,|メイルブレイカー'	, 8, "passive"	, "", "S_Dagger[「無影刃」將附帶${5*SLv}%的物理貫穿]"));
			
		for (var i=0;i<all_skilltree_type[1].STt_skilltree[2].ST_skill.length;i++)
			{
			all_skilltree_type[1].STt_skilltree[2].ST_skill[i].Sk_Au_type.push(AuArms_map['Dagger']);
			}
		all_skilltree_type[1].STt_skilltree[2].ST_skill[3].Sk_branch.push('影襲');
		all_skilltree_type[1].STt_skilltree[2].ST_skill[6].Sk_branch.push('無影追襲');
		
	/*======================================================================================
	======================================================================================*/	
		all_skilltree_type[1].STt_skilltree[3].ST_skill.push(
			new the_skill(1, 'Assault Attack|,|衝刺|,|アサルトアタック'			, 0, "active"	, ""),
			new the_skill(2, 'Parry|,|卸力|,|パリィ'							, 1, "passive"	, "", "all[受到物理傷害時，有機率減輕傷害]"),
			new the_skill(3, 'P. Defense|,|完善守備|,|Pディフェンス'			, 2, "active"	, ""),
			new the_skill(5, 'Provoke|,|挑釁|,|プロボーグ'						, 0, "active"	, ""),
			new the_skill(6, 'Rage Sword|,|憤怒的一擊|,|レイジソード'			, 5, "active"	, ""),
			new the_skill(7, 'Binding Strike|,|繫影強襲|,|バインドストライク'	, 6, "active"	, ""));	// 5
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
			new the_skill(1, 'Kick|,|腿踢|,|キックバック'					, 0, "active"	, ""),
			new the_skill(2, 'Sunrise Arrow|,|旭日之箭|,|サンライズアロー'	, 1, "active"	, ""),
			new the_skill(3, 'Magic Arrow|,|力量之箭|,|フォースアロー'		, 2, "active"	, ""),
			new the_skill(5, 'Sleep Trap|,|沉睡陷阱|,|スリープトラップ'		, 0, "active"	, ""),	// 3
			new the_skill(6, 'Bear Trap|,|絆腳陷阱|,|トラバサミ'			, 5, "active"	, ""),	// 4
			new the_skill(7, 'Land Mine|,|猛爆地雷|,|エクスプローシブ'		, 6, "active"	, ""));// 5
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
			new the_skill(1, 'Bless|,|祝福|,|ブレス'					, 0, "active"	, ""),
			new the_skill(2, 'Gloria|,|榮耀頌歌|,|グロリア'				, 1, "active"	, ""),
			new the_skill(3, 'Enhanced Bless|,|強化祝福|,|ブレス強化'	, 2, "active"	, ""),
			new the_skill(5, 'Holy Fist|,|聖拳之裁|,|ホーリーフィスト'	, 0, "active"	, ""),	// 3
			new the_skill(6, 'Holy Light|,|神聖光輝|,|ホーリーライト'	, 5, "active"	, ""),
			new the_skill(7, 'Ether Barrier|,|空靈障壁|,|エーテルコート', 6, "active"	, ""));
		
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
	errorForStop_msg("Initialize Skill-list<1> false.", e);
}