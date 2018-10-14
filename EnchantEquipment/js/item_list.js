	
	cy_enchantEquipment_base.prototype.itemList.push(
		new cy_enchantItem('Stats'				, 'str'						, 'Beast'	, [5, 10]	, 'STR'),
		new cy_enchantItem('Stats'				, 'int'						, 'Wood'	, [5, 10]	, 'INT'),
		new cy_enchantItem('Stats'				, 'vit'						, 'Metal'	, [5, 10]	, 'VIT'),
		new cy_enchantItem('Stats'				, 'agi'						, 'Cloth'	, [5, 10]	, 'AGI'),
		new cy_enchantItem('Stats'				, 'dex'						, 'Medicine', [5, 10]	, 'DEX'),
		new cy_enchantItem('HP/MP'				, 'natural_hp_regen'		, 'Metal'	, [5, 10]	, 'Natural HP regen|,|HP自然恢復|,|HP自然回復'),
		new cy_enchantItem('HP/MP'				, 'natural_mp_regen'		, 'Wood'	, [10, 20]	, 'Natural MP regen|,|MP自然恢復|,|MP自然回復'),
		new cy_enchantItem('HP/MP'				, 'max_hp'					, 'Metal'	, [3, 10]	, 'Max HP|,|HP上限|,|最大HP'),
		new cy_enchantItem('HP/MP'				, 'max_mp'					, 'Wood'	, 6			, 'Max MP|,|MP上限|,|最大MP'),
		new cy_enchantItem('Attack'				, 'atk'						, 'Beast'	, [3 ,10]	, 'ATK'),
		new cy_enchantItem('Attack'				, 'matk'					, 'Wood'	, [3, 10]	, 'MATK'),
		new cy_enchantItem('Attack'				, 'stability'				, 'Medicine', 20		, 'Stability|,|穩定度|,|安定率' , '%'),
		new cy_enchantItem('Attack'				, 'physical_pierce'			, 'Beast'	, 20		, 'Physical Pierce|,|物理貫穿|,|物理貫通', '%'),
		new cy_enchantItem('Attack'				, 'magic_pierce'			, 'Wood'	, 20		, 'Magic Pierce|,|魔法貫穿|,|魔法貫通', '%'),
		new cy_enchantItem('Defense'			, 'def'						, 'Metal'	, [3, 10]	, 'DEF'),
		new cy_enchantItem('Defense'			, 'mdef'					, 'Metal'	, [3, 10]	, 'MDEF'),
		new cy_enchantItem('Defense'			, 'physical_resistance'		, 'Metal'	, 10		, 'Physical Resistance|,|物理抗性|,|物理耐性', '%'),
		new cy_enchantItem('Defense'			, 'magic_resistance'		, 'Wood'	, 10		, 'Magic Resistance|,|魔法抗性|,|魔法耐性', '%'),
		new cy_enchantItem('Accuracy'			, 'accuracy'				, 'Medicine', [10, 20]	, 'Accuracy|,|命中|,|命中'),
		new cy_enchantItem('Dodge'				, 'dodge'					, 'Cloth'	, [10, 20]	, 'Dodge|,|迴避|,|回避'),
		new cy_enchantItem('Speed'				, 'aspd'					, 'Cloth'	, [1, 1]	, 'ASPD|,|攻擊速度|,|攻撃速度'),
		new cy_enchantItem('Speed'				, 'cspd'					, 'Medicine', [1, 1]	, 'CSPD|,|詠唱速度|,|詠唱速度'),
		new cy_enchantItem('Critical'			, 'critical_rate'			, 'Mana'	, [1, 1]	, 'Critical Rate|,|暴擊率|,|クリティカル率'),
		new cy_enchantItem('Critical'			, 'critical_damage'			, 'Mana'	, [3, 10]	, 'Critical Damage|,|暴擊傷害|,|クリティカルダメージ'),
		new cy_enchantItem('Elements'			, 'stronger_against_fire'	, 'Mana'	, 5			, '|,|對火屬性傷害|,|火属性にダメージ', '% stronger against Fire|,|%|,|%'),
		new cy_enchantItem('Elements'			, 'stronger_against_water'	, 'Mana'	, 5			, '|,|對水屬性傷害|,|水属性にダメージ', '% stronger against Water|,|%|,|%'),
		new cy_enchantItem('Elements'			, 'stronger_against_earth'	, 'Mana'	, 5			, '|,|對地屬性傷害|,|地属性にダメージ', '% stronger against Earth|,|%|,|%'),
		new cy_enchantItem('Elements'			, 'stronger_against_wind'	, 'Mana'	, 5			, '|,|對風屬性傷害|,|風属性にダメージ', '% stronger against Wind|,|%|,|%'),
		new cy_enchantItem('Elements'			, 'stronger_against_light'	, 'Mana'	, 5			, '|,|對光屬性傷害|,|光属性にダメージ', '% stronger against Light|,|%|,|%'),
		new cy_enchantItem('Elements'			, 'stronger_against_dark'	, 'Mana'	, 5			, '|,|對暗屬性傷害|,|暗属性にダメージ', '% stronger against Dark|,|%|,|%'),
		new cy_enchantItem('Elements'			, 'fire_resistance'			, 'Mana'	, 5			, 'Fire Resistance|,|對火抗性|,|火耐性', '%'),
		new cy_enchantItem('Elements'			, 'water_resistance'		, 'Mana'	, 5			, 'Water Resistance|,|對水抗性|,|水耐性', '%'),
		new cy_enchantItem('Elements'			, 'earth_resistance'		, 'Mana'	, 5			, 'Earth Resistance|,|對地抗性|,|地耐性', '%'),
		new cy_enchantItem('Elements'			, 'wind_resistance'			, 'Mana'	, 5			, 'Wind Resistance|,|對風抗性|,|風耐性', '%'),
		new cy_enchantItem('Elements'			, 'light_resistance'		, 'Mana'	, 5			, 'Light Resistance|,|對光抗性|,|光耐性', '%'),
		new cy_enchantItem('Elements'			, 'dark_resistance'			, 'Mana'	, 5			, 'Dark Resistance|,|對暗抗性|,|暗耐性', '%'),
		new cy_enchantItem('SpecialEnhancement'	, 'ailment_resistance'		, 'Mana'	, 20		, 'Ailment Resistance|,|異常抗性|,|異常耐性', '%'),
		new cy_enchantItem('SpecialEnhancement'	, 'guard_rate'				, 'Mana'	, 20		, 'Guard Rate|,|阻擋率|,|Guard率', '%'),
		new cy_enchantItem('SpecialEnhancement'	, 'guard_power'				, 'Mana'	, 20		, 'Guard Power|,|阻擋力|,|Guard力', '%'),
		new cy_enchantItem('SpecialEnhancement'	, 'evasion_rate'			, 'Mana'	, 20		, 'Avoid Rate|,|閃躲率|,|Avoid率', '%'),
		new cy_enchantItem('SpecialEnhancement'	, 'aggor'					, 'Mana'	, 6			, 'Aggro|,|仇恨值|,|ヘイト', '%'),
		new cy_enchantItem('AwakeElement'		, 'water@elements'			, 'Mana'	, 100		, 'water(Not Base)|,|水屬性(非原屬)|,|水属性(得意でない)'	, 'none', 'WeaponOnly'),
		new cy_enchantItem('AwakeElement'		, 'earth@elements'			, 'Mana'	, 100		, 'Earth(Not Base)|,|地屬性(非原屬)|,|地属性(得意でない)'	, 'none', 'WeaponOnly'),
		new cy_enchantItem('AwakeElement'		, 'wind@elements'			, 'Mana'	, 100		, 'Wind(Not Base)|,|風屬性(非原屬)|,|風属性(得意でない)'	, 'none', 'WeaponOnly'),
		new cy_enchantItem('AwakeElement'		, 'fire@elements'			, 'Mana'	, 100		, 'Fire(Not Base)|,|火屬性(非原屬)|,|火属性(得意でない)'	, 'none', 'WeaponOnly'),
		new cy_enchantItem('AwakeElement'		, 'light@elements'			, 'Mana'	, 100		, 'Light(Not Base)|,|光屬性(非原屬)|,|光属性(得意でない)'	, 'none', 'WeaponOnly'),
		new cy_enchantItem('AwakeElement'		, 'dark@elements'			, 'Mana'	, 100		, 'Dark(Not Base)|,|暗屬性(非原屬)|,|暗属性(得意でない)'	, 'none', 'WeaponOnly'),
		new cy_enchantItem('AwakeElement_base'	, 'water_base@elements'		, 'Mana'	, 10		, 'water(Base)|,|水屬性(原屬)|,|水属性(得意)'	, 'none', 'WeaponOnly'),
		new cy_enchantItem('AwakeElement_base'	, 'earth_base@elements'		, 'Mana'	, 10		, 'Earth(Base)|,|地屬性(原屬)|,|地属性(得意)'	, 'none', 'WeaponOnly'),
		new cy_enchantItem('AwakeElement_base'	, 'wind_base@elements'		, 'Mana'	, 10		, 'Wind(Base)|,|風屬性(原屬)|,|風属性(得意)'	, 'none', 'WeaponOnly'),
		new cy_enchantItem('AwakeElement_base'	, 'fire_base@elements'		, 'Mana'	, 10		, 'Fire(Base)|,|火屬性(原屬)|,|火属性(得意)'	, 'none', 'WeaponOnly'),
		new cy_enchantItem('AwakeElement_base'	, 'light_base@elements'		, 'Mana'	, 10		, 'Light(Base)|,|光屬性(原屬)|,|光属性(得意)'	, 'none', 'WeaponOnly'),
		new cy_enchantItem('AwakeElement_base'	, 'dark_base@elements'		, 'Mana'	, 10		, 'Dark(Base)|,|暗屬性(原屬)|,|暗属性(得意)'	, 'none', 'WeaponOnly')
	);
	
	(function(){
		let _t1 = cy_enchantEquipment_base.prototype.itemList;
		for (let i=0; i<_t1.length; ++i)
		{
			let have = false;
			let _t2 = cy_enchantEquipment_base.prototype.categoryList;
			for (let j=0; j<_t2.length; ++j)
			{
				if ( _t2[j] == _t1[i].category )
				{
					have = true;
					break;
				}
			}
			if ( !have ) _t2.push(_t1[i].category);
		}
	})();
	
	var cy_enchantEquipment = new cy_enchantEquipment_base();