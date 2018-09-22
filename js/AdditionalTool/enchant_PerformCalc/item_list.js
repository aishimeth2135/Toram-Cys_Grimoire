	
	cy_enchantEquipment_base.prototype.itemList.push(
		new cy_enchantItem('CharaterPoint'	, 'str'						, [5, 10]	, 'STR'),
		new cy_enchantItem('CharaterPoint'	, 'int'						, [5, 10]	, 'INT'),
		new cy_enchantItem('CharaterPoint'	, 'vit'						, [5, 10]	, 'VIT'),
		new cy_enchantItem('CharaterPoint'	, 'agi'						, [5, 10]	, 'AGI'),
		new cy_enchantItem('CharaterPoint'	, 'dex'						, [5, 10]	, 'DEX'),
		new cy_enchantItem('HP_MP'			, 'natural_hp_regen'		, [5, 10]	, 'Natural HP regen|,|HP自然恢復|,|HP自然回復')
		new cy_enchantItem('HP_MP'			, 'natural_mp_regen'		, [10, 20]	, 'Natural MP regen|,|MP自然恢復|,|MP自然回復')
		new cy_enchantItem('HP_MP'			, 'max_hp'					, [3, 10]	, 'Max HP|,|HP上限|,|最大HP'),
		new cy_enchantItem('HP_MP'			, 'max_mp'					, 6			, 'Max MP|,|MP上限|,|最大MP'),
		new cy_enchantItem('ATK_MATK'		, 'atk'						, [3 ,6]	, 'ATK'),
		new cy_enchantItem('ATK_MATK'		, 'matk'					, [3, 6]	, 'MATK'),
		new cy_enchantItem('ATK_MATK'		, 'stability'				, 20		, 'Stability|,|穩定度|,|安定率' , '%'),
		new cy_enchantItem('ATK_MATK'		, 'physical_pierce'			, 20		, 'Physical Pierce|,|物理貫穿|,|物理貫通', '%'),
		new cy_enchantItem('ATK_MATK'		, 'magic_pierce'			, 20		, 'Magic Pierce|,|魔法貫穿|,|魔法貫通', '%'),
		new cy_enchantItem('DEF_MDEF'		, 'def'						, [3, 10]	, 'DEF'),
		new cy_enchantItem('DEF_MDEF'		, 'mdef'					, [3, 10]	, 'MDEF'),
		new cy_enchantItem('DEF_MDEF'		, 'physical_resistance'		, 10		, 'Physical Resistance|,|物理抗性|,|物理耐性', '%'),
		new cy_enchantItem('DEF_MDEF'		, 'magic_resistance'		, 10		, 'Magic Resistance|,|魔法抗性|,|魔法耐性', '%'),
		new cy_enchantItem('Accuracy'		, 'accuracy'				, [10, 20]	, 'Accuracy|,|命中|,|命中'),
		new cy_enchantItem('Dodge'			, 'dodge'					, [10, 20]	, 'Dodge|,|迴避|,|回避'),
		new cy_enchantItem('speed'			, 'aspd'					, [1, 1]	, 'ASPD|,|攻擊速度|,|攻撃速度'),
		new cy_enchantItem('speed'			, 'cspd'					, [1, 1]	, 'CSPD|,|詠唱速度|,|詠唱速度'),
		new cy_enchantItem('critical'		, 'critical_rate'			, [1, 1]	, 'Critical Rate|,|暴擊率|,|クリティカル率'),
		new cy_enchantItem('critical'		, 'critical_damage'			, [3, 10]	, 'Critical Damage|,|暴擊傷害|,|クリティカルダメージ'),
		new cy_enchantItem('element'		, 'stronger_against_fire'	, 5			, '|,|對火屬性傷害|,|火属性にダメージ', '% stronger against Fire|,|%|,|%'),
		new cy_enchantItem('element'		, 'stronger_against_water'	, 5			, '|,|對水屬性傷害|,|水属性にダメージ', '% stronger against Water|,|%|,|%'),
		new cy_enchantItem('element'		, 'stronger_against_earth'	, 5			, '|,|對地屬性傷害|,|地属性にダメージ', '% stronger against Earth|,|%|,|%'),
		new cy_enchantItem('element'		, 'stronger_against_wind'	, 5			, '|,|對風屬性傷害|,|風属性にダメージ', '% stronger against Wind|,|%|,|%'),
		new cy_enchantItem('element'		, 'stronger_against_light'	, 5			, '|,|對光屬性傷害|,|光属性にダメージ', '% stronger against Light|,|%|,|%'),
		new cy_enchantItem('element'		, 'stronger_against_dark'	, 5			, '|,|對暗屬性傷害|,|暗属性にダメージ', '% stronger against Dark|,|%|,|%'),
		new cy_enchantItem('element'		, 'fire_resistance'			, 5			, 'Fire Resistance|,|對火抗性|,|火耐性', '%'),
		new cy_enchantItem('element'		, 'water_resistance'		, 5			, 'Water Resistance|,|對水抗性|,|水耐性', '%'),
		new cy_enchantItem('element'		, 'earth_resistance'		, 5			, 'Earth Resistance|,|對地抗性|,|地耐性', '%'),
		new cy_enchantItem('element'		, 'wind_resistance'			, 5			, 'Wind Resistance|,|對風抗性|,|風耐性', '%'),
		new cy_enchantItem('element'		, 'light_resistance'		, 5			, 'Light Resistance|,|對光抗性|,|光耐性', '%'),
		new cy_enchantItem('element'		, 'dark_resistance'			, 5			, 'Dark Resistance|,|對暗抗性|,|暗耐性', '%'),
		new cy_enchantItem('specialAdd'		, 'ailment_resistance'		, 20		, 'Ailment Resistance|,|異常抗性|,|異常耐性', '%'),
		new cy_enchantItem('specialAdd'		, 'guard_rate'				, 20		, 'Guard Rate|,|阻擋率|,|Guard率', '%'),
		new cy_enchantItem('specialAdd'		, 'guard_power'				, 20		, 'Guard Power|,|阻擋力|,|Guard力', '%'),
		new cy_enchantItem('specialAdd'		, 'evasion_rate'			, 20		, 'Avoid Rate|,|閃躲率|,|Avoid率', '%'),
		new cy_enchantItem('specialAdd'		, 'aggor'					, 6			, 'Aggro|,|仇恨值|,|ヘイト', '%'),
		new cy_enchantItem('addElement'		, 'fire@elements'			, 10		, 'Fire|,|火屬性|,|火属性'	, 'none'),
		new cy_enchantItem('addElement'		, 'water@elements'			, 10		, 'water|,|水屬性|,|水属性'	, 'none'),
		new cy_enchantItem('addElement'		, 'earth@elements'			, 10		, 'Earth|,|地屬性|,|地属性'	, 'none'),
		new cy_enchantItem('addElement'		, 'wind@elements'			, 10		, 'Wind|,|風屬性|,|風属性'	, 'none'),
		new cy_enchantItem('addElement'		, 'light@elements'			, 10		, 'Light|,|光屬性|,|光属性'	, 'none'),
		new cy_enchantItem('addElement'		, 'dark@elements'			, 10		, 'Dark|,|暗屬性|,|暗属性'	, 'none')
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
				if ( !have ) _t2.push(_t1[i].category);
			}
		}
	})();
	
	var cy_enchantEquipment = new cy_enchantEquipment_base();