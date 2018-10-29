try {
	(function (){
			cy_skillSystem.skillTreeType[3].skillTree.push(
				new cy_skillTree(1, 'Smith Skills|,|鍛冶大師|,|スミススキル'),
				new cy_skillTree(2, 'Alchemy Skills|,|煉金術士|,|アルケミースキル'),
				new cy_skillTree(3, '|,|馴獸天分|,|'));
		/*======================================================================================
		======================================================================================*/	
			cy_skillSystem.skillTreeType[3].skillTree[0].skill.push(
				new cy_skill(1, 'Refine Equipment|,|精鍊裝備|,|装備精錬', 0, "passive", ""),
				new cy_skill(2, "Novice's Anvil|,|新手的鐵鉆|,|初心者の金敷", 1, "passive", ""),
				new cy_skill(3, "Craftsman's Anvil|,|專家的鐵鉆|,|職人の金敷", 2, "passive", ""),
				new cy_skill(4, "Blacksmith's Anvil|,|鐵匠鋪的鐵鉆|,|鍛冶屋の金敷", 3, "passive", ""),
				new cy_skill(6, "Mid-Class Refinement|,|中級精鍊技術|,|中級精錬技術", 1, "passive", ""),
				new cy_skill(7, "High-Class Refinement|,|高級精鍊技術|,|上級精錬技術", 6, "passive", ""),
				new cy_skill(9, "Create Equipment|,|製作裝備|,|装備製作", 1, "passive", ""),
				new cy_skill(10, "Careful Creation|,|精心打造|,|丁寧な製作", 9, "passive", ""),
				new cy_skill(12, "Customize Equipment|,|強化裝備|,|装備強化", 9, "passive", ""),
				new cy_skill(13, "Accurate Customization|,|正確的強化|,|正確な強化", 12, "passive", ""),
				new cy_skill(15, "Process Material|,|素材加工|,|素材加工", 0, "passive", ""));
				
			cy_skillSystem.skillTreeType[3].skillTree[1].skill.push(
				new cy_skill(1, 'Item Synthesis|,|合成道具|,|アイテム合成', 0, "passive", ""),
				new cy_skill(2, "Novice's Bottle|,|新手的藥瓶|,|初心者の薬瓶", 1, "passive", ""),
				new cy_skill(3, "Craftsman's Bottle|,|專家的藥瓶|,|職人の薬瓶", 2, "passive", ""),
				new cy_skill(4, "Synthesist's Bottle|,|合成所的藥瓶|,|合成屋の薬瓶", 3, "passive", ""),
				new cy_skill(6, 'Mid-Class Synthesis|,|中級合成術|,|中級合成術', 1, "passive", ""),
				new cy_skill(7, 'High-Class Synthesis|,|高級合成術|,|上級合成術', 6, "passive", ""),
				new cy_skill(9, 'Customize Equipment|,|合成裝備|,|装備合成', 1, "passive", ""),
				new cy_skill(10, 'Accurate Customization|,|合成技術加強Ⅰ|,|合成技術向上Ⅰ', 9, "passive", ""),
				new cy_skill(12, 'Process Material|,|素材加工|,|素材加工', 0, "passive", ""));
				
			cy_skillSystem.skillTreeType[3].skillTree[2].skill.push(
				new cy_skill(1, "Taming|,|捕獲|,|テイミング", 0, "active", ""),
				new cy_skill(2, "Capture Technique I|,|捕獲技術Ⅰ|,|捕獲技術Ⅰ", 1, "passive", ""),
				new cy_skill(3, "Capture Technique II|,|捕獲技術Ⅱ|,|捕獲技術Ⅱ", 2, "passive", ""),
				new cy_skill(4, "Skillful Capture|,|捕捉好手|,|グッドテイム", 1, "passive", ""),
				new cy_skill(5, "Careful Capture|,|慎重捉拿|,|丁寧な捕獲", 4, "passive", ""),
				new cy_skill(6, "Pet Heal|,|治療寵物|,|ペットヒール", 1, "active", ""),
				new cy_skill(7, "Pet MP Charge|,|充電寵物|,|ペットチャージ", 6, "active", ""));
	})();
}
catch {
	errorForStop_msg("Initialize Skill-list<3> false.", e);
}
