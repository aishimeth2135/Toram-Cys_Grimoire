try {
	(function (){
			cy_skillSystem.skillTreeType[4].skillTree.push(
				new cy_skillTree(1, 'Magic Blade|,|魔劍技能|,|マジックブレードスキル'),
				new cy_skillTree(2, 'Dark Energy|,|暗黑之力|,|アルケミースキル'));
		/*======================================================================================
		======================================================================================*/	
			cy_skillSystem.skillTreeType[4].skillTree[0].skill.push(
				new cy_skill(1, "Magic Warrior Mastery|,|魔法戰士的要訣|,|魔法戦士の心得", 0, "passive", ""),
				new cy_skill(2, "Sword Conversion|,|魔劍轉化|,|ソードコンバージョン", 1, "passive", ""),
				new cy_skill(3, "Resonance|,|魔力共鳴|,|レゾナンス", 2, "active", ""),
				new cy_skill(4, "Ether Flare|,|空靈閃焰|,|エーテルフレア", 0, "active", ""),
				new cy_skill(5, "Element Slash|,|元素斬劈|,|エレメントスラッシュ", 4, "active", ""),
				new cy_skill(6, "Enchanted Sword|,|附魔劍擊|,|エンチャントソード", 5, "active", ""));
				
			cy_skillSystem.skillTreeType[4].skillTree[1].skill.push(
				new cy_skill(1, "Blood Bite|,|血咬|,|ブラッドバイト", 0, "passive", ""),
				new cy_skill(2, "Dark Stinger|,|暗魔鑽刺|,|ダークスティンガー", 1, "passive", ""),
				new cy_skill(3, "Red Tear|,|腥紅血淚|,|レッドティアー", 2, "active", ""),
				new cy_skill(4, "Sacrifice|,|獻祭|,|サクリファイス", 0, "active", ""),
				new cy_skill(5, "Demon Claw|,|惡魔狂爪|,|デーモンクロウ", 4, "active", ""),
				new cy_skill(6, "Regretless|,|無悔殺意|,|リグレット", 5, "active", ""));
	})();
}
catch {
	errorForStop_msg("Initialize Skill-list<4> false.", e);
}
