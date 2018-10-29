try {
	(function(){
		let WeapArms_map = {'1hSword': 0, '2hSword': 1, 'Bow': 2, 'Bowgun': 3, 'Staff': 4, 'MagicDevice': 5, 'Knuckles': 6, 'Halberd': 7, 'DualSword': 8, 'Katana': 9, 'Other': 10};
		let AuArms_map = {'Dagger': 0, 'Shield': 1, 'Arrow': 2, 'MagicDevice': 3, 'Knuckles': 4, 'Katana': 5, 'Other': 6};
		let bodyArms_map = {'Normal': 0, 'Dodge': 1, 'Defense': 2};	//Improve ...
		/*All_BodyType = ['一般', '輕量化', '重量化'];*/
		cy_skillSystem.skillTreeType[1].skillTree.push(
			new cy_skillTree(1, 'Guard Skills|,|防衛技能|,|ガードスキル'),
			new cy_skillTree(2, 'Shield Skills|,|防護技能|,|シールドスキル'),
			new cy_skillTree(3, 'Dagger Skills|,|刀術技能|,|ナイフスキル'),
			new cy_skillTree(4, 'Knight Skills|,|騎士精神|,|ナイトスキル'),
			new cy_skillTree(5, 'Hunter Skills|,|狩獵技能|,|プリーストスキル'),
			new cy_skillTree(6, 'Priest Skills|,|祭司技能|,|ハンタースキル'));
	
	/*======================================================================================
	======================================================================================*/	
		cy_skillSystem.skillTreeType[1].skillTree[0].skill.push(
			new cy_skill(1, 'Heavy Armor|,|重防具要領|,|重防具マスタリ'		, 0, "passive"	, "b_Defence[guard_rate#SLv%]"),
			new cy_skill(2, 'Advanced Guard|,|進階阻擋|,|アドバンスガード'		, 1, "passive"	, "b_Defence[guard_rate#SLv%]"),
			new cy_skill(5, 'Light Armor|,|輕防具要領|,| 軽防具マスタリ'		, 0, "passive"	, "b_Dodge[evasion_rate#SLv%]"),
			new cy_skill(6, 'Advanced Evasion|,|進階閃躲|,|アドバンスフリー'	, 5, "passive"	, "b_Dodge[evasion_rate#SLv%]")
			);
		cy_skillSystem.skillTreeType[1].skillTree[0].skill[0].bodyArmorType.push(bodyArms_map['Defense']);
		cy_skillSystem.skillTreeType[1].skillTree[0].skill[1].bodyArmorType.push(bodyArms_map['Defense']);
		cy_skillSystem.skillTreeType[1].skillTree[0].skill[2].bodyArmorType.push(bodyArms_map['Dodge']);
		cy_skillSystem.skillTreeType[1].skillTree[0].skill[3].bodyArmorType.push(bodyArms_map['Dodge']);
		
	/*======================================================================================
	======================================================================================*/	
		cy_skillSystem.skillTreeType[1].skillTree[1].skill.push(
			new cy_skill(1, 'Shield Mastery|,|盾牌要領|,|シールドマスタリ'	, 0, "passive", "S_Shield[aspd#5*SLv%]"),
			new cy_skill(2, 'Shield Bash|,|重盾擊|,|シールドバッシュ'		, 1, "active"	, ""),
			new cy_skill(3, 'Shield Cannon|,|飛盾|,|シールドキャノン'		, 2, "active"	, ""),
			new cy_skill(4, 'Guard Strike|,|傷害反彈|,|ガードストライク'	, 3, "active"	, ""),	// 3
			new cy_skill(5, 'Force Shield|,|防護盾甲|,|フォースシールド'	, 0, "passive", "S_Shield[def#2*SLv, def#SLv%, max_hp#50*SLv, physical_resistance#SLv]"),
			new cy_skill(6, 'Magical Shield|,|防魔盾甲|,|マジカルシールド'	, 5, "passive", "S_Shield[mdef#2*SLv, mdef#SLv%, max_hp#50*SLv, magic_resistance#SLv]"),
			new cy_skill(7, 'Protection|,|防禦界限|,|プロテクション'		, 0, "active"	, ""),
			new cy_skill(8, 'Aegis|,|魔法庇護|,|イージス'					, 7, "active"	, ""),
			new cy_skill(9, 'Guardian|,|移花接木|,|ガーディアン'			, 8, "active"	, ""));
			
		cy_skillSystem.skillTreeType[1].skillTree[1].skill[0].subWeaponType.push(AuArms_map['Shield']);
		cy_skillSystem.skillTreeType[1].skillTree[1].skill[1].subWeaponType.push(AuArms_map['Shield']);
		cy_skillSystem.skillTreeType[1].skillTree[1].skill[2].subWeaponType.push(AuArms_map['Shield']);
		cy_skillSystem.skillTreeType[1].skillTree[1].skill[3].subWeaponType.push(AuArms_map['Shield'], AuArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[1].skill[4].subWeaponType.push(AuArms_map['Shield']);
		cy_skillSystem.skillTreeType[1].skillTree[1].skill[5].subWeaponType.push(AuArms_map['Shield']);
		cy_skillSystem.skillTreeType[1].skillTree[1].skill[6].subWeaponType.push(AuArms_map['Shield'], AuArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[1].skill[7].subWeaponType.push(AuArms_map['Shield'], AuArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[1].skill[8].subWeaponType.push(AuArms_map['Shield']);
		
		cy_skillSystem.skillTreeType[1].skillTree[1].skill[3].captionBranch.push('阻擋反擊');
		cy_skillSystem.skillTreeType[1].skillTree[1].skill[8].captionBranch.push('庇護');
		
	/*======================================================================================
	======================================================================================*/	
		cy_skillSystem.skillTreeType[1].skillTree[2].skill.push(
			new cy_skill(1, 'Throwing Knife|,|飛刃|,|スローイング'			, 0, "active"	, ""),
			new cy_skill(2, 'Spike Dart|,|定影針|,|スバイクダート'			, 1, "active"	, ""),
			new cy_skill(3, 'Gatling Knife|,|加特林機槍|,|ガトリングナイフ', 2, "active"	, ""),
			new cy_skill(4, 'Amazing Throw|,|神乎其技|,|脅威の投擲術'		, 3, "passive"	, ""),	// 3
			new cy_skill(5, 'Poison Dagger|,|毒飛刃|,|ポイズンダガー'		, 1, "active"	, ""),    
			new cy_skill(6, 'Double Throw|,|連環刃|,|ダブルスロー'			, 5, "passive"	, "", "S_Dagger[閃躲發生時，有${10*SLv}%機率追加一次等量傷害。]"),    
			new cy_skill(7, 'Hidden Arm|,|無影刃|,|セカンドアーム'			, 0, "passive"	, "", "S_Dagger[一般攻擊時有${5*SLv +5*cy_skillSystem.skillTreeType[1].skillTree[2].skill[7].calcLv}%機率追加(有效Atk×${10*(1+parseInt((cy_skillSystem.skillTreeType[1].skillTree[2].skill[7].calcLv+9)/10))}% +小刀Atk)的傷害)]"),	// 6
			new cy_skill(8, 'Intense Knife|,|威力增幅|,|インテンスナイフ'	, 7, "passive"	, "", "S_Dagger[「無影刃」的發動機率及威力提升]"),
			new cy_skill(9, 'Mail Breaker|,|裝甲破壞|,|メイルブレイカー'	, 8, "passive"	, "", "S_Dagger[「無影刃」將附帶${5*SLv}%的物理貫穿]"));
			
		for (let i=0;i<cy_skillSystem.skillTreeType[1].skillTree[2].skill.length;i++)
		{
			cy_skillSystem.skillTreeType[1].skillTree[2].skill[i].subWeaponType.push(AuArms_map['Dagger']);
		}
		cy_skillSystem.skillTreeType[1].skillTree[2].skill[3].captionBranch.push('影襲');
		cy_skillSystem.skillTreeType[1].skillTree[2].skill[6].captionBranch.push('無影追襲');
		
	/*======================================================================================
	======================================================================================*/	
		cy_skillSystem.skillTreeType[1].skillTree[3].skill.push(
			new cy_skill(1, 'Assault Attack|,|衝刺|,|アサルトアタック'			, 0, "active"	, ""),
			new cy_skill(2, 'Parry|,|卸力|,|パリィ'							, 1, "passive"	, "", "all[受到物理傷害時，有機率減輕傷害]"),
			new cy_skill(3, 'P. Defense|,|完善守備|,|Pディフェンス'			, 2, "active"	, ""),
			new cy_skill(5, 'Provoke|,|挑釁|,|プロボーグ'						, 0, "active"	, ""),
			new cy_skill(6, 'Rage Sword|,|憤怒的一擊|,|レイジソード'			, 5, "active"	, ""),
			new cy_skill(7, 'Binding Strike|,|繫影強襲|,|バインドストライク'	, 6, "active"	, ""));	// 5
		cy_skillSystem.skillTreeType[1].skillTree[3].skill[0].mainWeaponType.push(WeapArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[3].skill[0].subWeaponType.push(AuArms_map['Shield'],AuArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[3].skill[1].mainWeaponType.push(WeapArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[3].skill[1].subWeaponType.push(AuArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[3].skill[2].subWeaponType.push(AuArms_map['Shield']);
		cy_skillSystem.skillTreeType[1].skillTree[3].skill[3].mainWeaponType.push(WeapArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[3].skill[3].subWeaponType.push(AuArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[3].skill[4].mainWeaponType.push(WeapArms_map['1hSword'], WeapArms_map['2hSword']);
		cy_skillSystem.skillTreeType[1].skillTree[3].skill[4].subWeaponType.push(AuArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[3].skill[5].mainWeaponType.push(WeapArms_map['1hSword'], WeapArms_map['2hSword']);
		cy_skillSystem.skillTreeType[1].skillTree[3].skill[5].subWeaponType.push(AuArms_map['Other']);
		
		cy_skillSystem.skillTreeType[1].skillTree[3].skill[2].captionBranch.push('絕對防禦');
		
	/*======================================================================================
	======================================================================================*/	
		cy_skillSystem.skillTreeType[1].skillTree[4].skill.push(
			new cy_skill(1, 'Kick|,|腿踢|,|キックバック'					, 0, "active"	, ""),
			new cy_skill(2, 'Sunrise Arrow|,|旭日之箭|,|サンライズアロー'	, 1, "active"	, ""),
			new cy_skill(3, 'Magic Arrow|,|力量之箭|,|フォースアロー'		, 2, "active"	, ""),
			new cy_skill(5, 'Sleep Trap|,|沉睡陷阱|,|スリープトラップ'		, 0, "active"	, ""),	// 3
			new cy_skill(6, 'Bear Trap|,|絆腳陷阱|,|トラバサミ'			, 5, "active"	, ""),	// 4
			new cy_skill(7, 'Land Mine|,|猛爆地雷|,|エクスプローシブ'		, 6, "active"	, ""));// 5
		cy_skillSystem.skillTreeType[1].skillTree[4].skill[0].mainWeaponType.push(WeapArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[4].skill[1].mainWeaponType.push(WeapArms_map['Bow'], WeapArms_map['Bowgun']);
		cy_skillSystem.skillTreeType[1].skillTree[4].skill[2].mainWeaponType.push(WeapArms_map['Bow'], WeapArms_map['Bowgun']);
		cy_skillSystem.skillTreeType[1].skillTree[4].skill[3].mainWeaponType.push(WeapArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[4].skill[3].subWeaponType.push(AuArms_map['Arrow'], AuArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[4].skill[4].mainWeaponType.push(WeapArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[4].skill[4].subWeaponType.push(AuArms_map['Arrow'], AuArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[4].skill[5].mainWeaponType.push(WeapArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[4].skill[5].subWeaponType.push(AuArms_map['Arrow'], AuArms_map['Other']);
		
		cy_skillSystem.skillTreeType[1].skillTree[4].skill[3].captionBranch.push('觸發');
		cy_skillSystem.skillTreeType[1].skillTree[4].skill[4].captionBranch.push('觸發');
		cy_skillSystem.skillTreeType[1].skillTree[4].skill[5].captionBranch.push('觸發');
		
	/*======================================================================================
	======================================================================================*/	
		cy_skillSystem.skillTreeType[1].skillTree[5].skill.push(
			new cy_skill(1, 'Bless|,|祝福|,|ブレス'					, 0, "active"	, ""),
			new cy_skill(2, 'Gloria|,|榮耀頌歌|,|グロリア'				, 1, "active"	, ""),
			new cy_skill(3, 'Enhanced Bless|,|強化祝福|,|ブレス強化'	, 2, "active"	, ""),
			new cy_skill(5, 'Holy Fist|,|聖拳之裁|,|ホーリーフィスト'	, 0, "active"	, ""),	// 3
			new cy_skill(6, 'Holy Light|,|神聖光輝|,|ホーリーライト'	, 5, "active"	, ""),
			new cy_skill(7, 'Ether Barrier|,|空靈障壁|,|エーテルコート', 6, "active"	, ""));
		
		cy_skillSystem.skillTreeType[1].skillTree[5].skill[0].mainWeaponType.push(WeapArms_map['Staff'], WeapArms_map['MagicDevice'], WeapArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[5].skill[0].subWeaponType.push(AuArms_map['MagicDevice'], AuArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[5].skill[1].mainWeaponType.push(WeapArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[5].skill[1].subWeaponType.push(AuArms_map['Shield'],AuArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[5].skill[2].mainWeaponType.push(WeapArms_map['Staff'], WeapArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[5].skill[2].subWeaponType.push(AuArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[5].skill[3].mainWeaponType.push(WeapArms_map['Staff'], WeapArms_map['Knuckles'], WeapArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[5].skill[3].subWeaponType.push(AuArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[5].skill[4].mainWeaponType.push(WeapArms_map['Staff'], WeapArms_map['MagicDevice'], WeapArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[5].skill[4].subWeaponType.push(AuArms_map['MagicDevice'], AuArms_map['Knuckles'], AuArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[5].skill[5].mainWeaponType.push(WeapArms_map['Other']);
		cy_skillSystem.skillTreeType[1].skillTree[5].skill[5].subWeaponType.push(AuArms_map['Other']);
		
		cy_skillSystem.skillTreeType[1].skillTree[5].skill[3].captionBranch.push('物理部分','魔法部分');
		
	})();
} catch(e) {
	errorForStop_msg("Initialize Skill-list<1> false.", e);
}