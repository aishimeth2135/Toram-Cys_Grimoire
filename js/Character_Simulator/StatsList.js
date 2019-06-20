
	cy_character_base.prototype.setInit_statList = function (){
		try {
			this.statList.push(
				new cy_statBase('STR'														, 'STR'																	, 'str'						, true	, true	, true	, 1),
				new cy_statBase('DEX'														, 'DEX'																	, 'dex'						, true	, true	, true	, 1),
				new cy_statBase('INT'														, 'INT'																	, 'int'						, true	, true	, true	, 1),
				new cy_statBase('AGI'														, 'AGI'																	, 'agi'						, true	, true	, true	, 1),
				new cy_statBase('VIT'														, 'VIT'																	, 'vit'						, true	, true	, true	, 1),
				new cy_statBase('none'														, 'none'																, 'addition_stat1'			, false	, 'hid'	, false	, 1),
				new cy_statBase('Max HP|,|HP上限|,|最大HP'									, 'Max HP|,|HP上限|,|最大HP'											, 'max_hp'					, true	, true	, true	, 0),
				new cy_statBase('Max MP|,|MP上限|,|最大MP'									, 'Max MP|,|MP上限|,|最大MP'											, 'max_mp'					, false	, true	, true	, 0, '', 2000),
				new cy_statBase('Natural HP regen|,|HP自然恢復|,|HP自然回復'				, 'Natural HP regen|,|HP自然恢復|,|HP自然回復'							, 'natural_hp_regen'		, true	, true	, true	, 0),
				new cy_statBase('Natural MP regen|,|MP自然恢復|,|MP自然回復'				, 'Natural MP regen|,|MP自然恢復|,|MP自然回復'							, 'natural_mp_regen'		, true	, true	, true	, 0),
				new cy_statBase('Attack MP Recovery|,|攻擊MP恢復|,|攻撃MP回復'				, 'Attack MP Recovery|,|攻擊MP恢復|,|攻撃MP回復'						, 'attack_mp_recovery'		, true	, true	, true	, 10),
				new cy_statBase('ATK'														, 'ATK'																	, 'atk'						, true	, true	, true	, 0),
				new cy_statBase('Sub Atk|,|副手ATK|,|副手ATK'								, 'Sub Atk|,|副手ATK|,|副手ATK'											, 'au_atk'					, true	, false	, false	, 0),
				new cy_statBase('Sub Rate|,|副手倍率|,|副手倍率'							, 'Sub Rate|,|副手倍率|,|副手倍率'										, 'dualSword_au_rate'		, false	, false	, false	, 0		, '%'),
				new cy_statBase('MATK'														, 'MATK'																, 'matk'					, true	, true	, true	, 0),
				new cy_statBase('Physical Pierce|,|物理貫穿|,|物理貫通'						, 'Physical Pierce|,|物理貫穿|,|物理貫通'								, 'physical_pierce'			, false	, true	, true	, 0		, '%'),
				new cy_statBase('Magic Pierce|,|魔法貫穿|,|魔法貫通'						, 'Magic Pierce|,|魔法貫穿|,|魔法貫通'									, 'magic_pierce'			, false	, true	, true	, 0		, '%'),
				new cy_statBase('Stability|,|穩定度|,|安定率'								, 'Stability|,|穩定度|,|安定率'											, 'stability'				, false	, true	, true	, 0		, '%', 100, 1),
				new cy_statBase('Magic Stability|,|魔法穩定度|,|魔法安定率'					, 'Magic Stability|,|魔法穩定度|,|魔法安定率'							, 'magic_stability'			, false	, true	, false	, 0		, '%', 90, 1),
				new cy_statBase('Weapon ATK|,|武器ATK|,|武器ATK'							, 'Weapon ATK|,|武器ATK|,|武器ATK'										, 'weaponatk'				, true	, 'hid'	, true	, 0),
				new cy_statBase('Short Range Damage|,|近距離威力|,|近距離の威力'			, 'Short Range Damage|,|近距離威力|,|近距離の威力'						, 'short_range_damage'		, false	, true	, true	, 100	, '%'),
				new cy_statBase('Long Range Damage|,|遠距離威力|,|遠距離の威力'				, 'Long Range Damage|,|遠距離威力|,|遠距離の威力'						, 'long_range_damage'		, false	, true	, true	, 100	, '%'),	 
				new cy_statBase('DEF'														, 'DEF'																	, 'def'						, true	, true	, true	, 0),
				new cy_statBase('MDEF'														, 'MDEF'																, 'mdef'					, true	, true	, true	, 0),
				new cy_statBase('Physical Resistance|,|受到物理傷害|,|物理耐性'				, 'Physical Resistance|,|物理抗性|,|物理耐性'							, 'physical_resistance'		, false	, true	, true	, -100	, '%', '', 25, -1),
				new cy_statBase('Magic Resistance|,|受到魔法傷害|,|魔法耐性'				, 'Magic Resistance|,|魔法抗性|,|魔法耐性'								, 'magic_resistance'		, false	, true	, true	, -100	, '%', '', 25, -1),
				new cy_statBase('Ailment Resistance|,|異常抗性|,|異常耐性'					, 'Ailment Resistance|,|異常抗性|,|異常耐性'							, 'ailment_resistance'		, false	, true	, true	, 0		, '%', 75),
				new cy_statBase('Critical Rate|,|暴擊率|,|クリティカル率'					, 'Critical Rate|,|暴擊率|,|クリティカル率'								, 'critical_rate'			, true	, true	, true	, 25	, '', 100, 0),
				new cy_statBase('Critical Damage|,|暴擊傷害|,|クリティカルダメージ'			, 'Critical Damage|,|暴擊傷害|,|クリティカルダメージ'					, 'critical_damage'			, true	, true	, true	, 150	, '', '', 10),
				new cy_statBase('Accuracy|,|命中|,|命中'									, 'Accuracy|,|命中|,|命中'												, 'accuracy'				, true	, true	, true	, 0),
				new cy_statBase('Dodge|,|迴避|,|回避'										, 'Dodge|,|迴避|,|回避'													, 'dodge'					, true	, true	, true	, 0),
				new cy_statBase('ASPD|,|攻擊速度|,|攻撃速度'								, 'ASPD|,|攻擊速度|,|攻撃速度'											, 'aspd'					, true	, true	, true	, 0),
				new cy_statBase('CSPD|,|詠唱速度|,|詠唱速度'								, 'CSPD|,|詠唱速度|,|詠唱速度'											, 'cspd'					, true	, true	, true	, 0),
				new cy_statBase('Motion Time|,|行動時間|,|行動時間'							, 'Motion Speed|,|行動速度|,|行動速度'									, 'motion_speed'			, false	, true	, true	, -100	, '%', '', 50,	-1),
				new cy_statBase('Cast Time|,|詠唱時間|,|詠唱時間'							, 'Cast Time|,|詠唱時間|,|詠唱時間'										, 'cast_speed'				, false	, true	, false	, -100	, '%', '', 25,	-1),
				new cy_statBase('Aggro|,|仇恨值|,|ヘイト'									, 'Aggro|,|仇恨值|,|ヘイト'												, 'aggro'					, false	, true	, true	, 100	, '%', '', ),
				new cy_statBase('Drop Rate|,|掉寶率|,|ドロップ率'							, 'Drop Rate|,|掉寶率|,|ドロップ率'										, 'drop_rate'				, false	, true	, true	, 100	, '%'),
				new cy_statBase('Revial Time|,|復活時間|,|復活時間'							, 'Revial Time|,|復活時間|,|復活時間'									, 'revive_time'				, false , true	, true	, 100	, '%'),
				new cy_statBase('Avoid Rate|,|閃躲率|,|Avoid率'								, 'Avoid Rate|,|閃躲率|,|Avoid率'										, 'evasion_rate'			, false	, true	, true	, 0		, '%', 75, 0),
				new cy_statBase('Guard Rate|,|阻擋率|,|Guard率'								, 'Guard Rate|,|阻擋率|,|Guard率'										, 'guard_rate'				, false	, true	, true	, 0		, '%', 75, 0),
				new cy_statBase('Guard Power|,|阻擋力|,|Guard力'							, 'Guard Power|,|阻擋力|,|Guard力'										, 'guard_power'				, false	, true	, true	, 0		, '%', 75, 0),
				new cy_statBase('Unsheathe Attack Addition|,|拔刀攻擊加成|,|抜刀攻撃加算'	, 'Unsheathe Attack|,|拔刀攻擊|,|抜刀攻撃'								, 'unsheathe_attack'		, false	, true	, true	, 0),
				new cy_statBase('Unsheathe Attack Damage|,|拔刀攻擊傷害|,|抜刀攻撃威力'		, 'Unsheathe Attack|,|拔刀攻擊|,|抜刀攻撃'								, 'unsheathe_attack%'		, false	, true	, true	, 100	, '%'),
				new cy_statBase(''															, 'Fire|,|火屬性|,|火属性'												, 'fire@elements'			, false	, 'hid'	, 'MS'	, 'none', '', 1),
				new cy_statBase(''															, 'water|,|水屬性|,|水属性'												, 'water@elements'			, false	, 'hid'	, 'MS'	, 'none', '', 1),
				new cy_statBase(''															, 'Earth|,|地屬性|,|地属性'												, 'earth@elements'			, false	, 'hid'	, 'MS'	, 'none', '', 1),
				new cy_statBase(''															, 'Wind|,|風屬性|,|風属性'												, 'wind@elements'			, false	, 'hid'	, 'MS'	, 'none', '', 1),
				new cy_statBase(''															, 'Light|,|光屬性|,|光属性'												, 'light@elements'			, false	, 'hid'	, 'MS'	, 'none', '', 1),
				new cy_statBase(''															, 'Dark|,|暗屬性|,|暗属性'												, 'dark@elements'			, false	, 'hid'	, 'MS'	, 'none', '', 1),
				new cy_statBase('Dealing Neutral Damage|,|對無屬性傷害|,|無属性にダメージ'	, '|,|對無屬性傷害|,|無属性にダメージ'									, 'stronger_against_neutral', false	, true	, true	, 100	, '% stronger against Neutral|,|%|,|%', '', 10),
				new cy_statBase('Dealing Fire Damage|,|對火屬性傷害|,|火属性にダメージ'		, '|,|對火屬性傷害|,|火属性にダメージ'									, 'stronger_against_fire'	, false	, true	, true	, 100	, '% stronger against Fire|,|%|,|%', '', 10), 
				new cy_statBase('Dealing Water Damage|,|對水屬性傷害|,|水属性にダメージ'	, '|,|對水屬性傷害|,|水属性にダメージ'									, 'stronger_against_water'	, false	, true	, true	, 100	, '% stronger against Water|,|%|,|%', '', 10),
				new cy_statBase('Dealing Earth Damage|,|對地屬性傷害|,|地属性にダメージ'	, '|,|對地屬性傷害|,|地属性にダメージ'									, 'stronger_against_earth'	, false	, true	, true	, 100	, '% stronger against Earth|,|%|,|%', '', 10),
				new cy_statBase('Dealing Wind Damage|,|對風屬性傷害|,|風属性にダメージ'		, '|,|對風屬性傷害|,|風属性にダメージ'									, 'stronger_against_wind'	, false	, true	, true	, 100	, '% stronger against Wind|,|%|,|%', '', 10),
				new cy_statBase('Dealing Light Damage|,|對光屬性傷害|,|光属性にダメージ'	, '|,|對光屬性傷害|,|光属性にダメージ'									, 'stronger_against_light'	, false	, true	, true	, 100	, '% stronger against Light|,|%|,|%', '', 10),
				new cy_statBase('Dealing Dark Damage|,|對暗屬性傷害|,|闇属性にダメージ'		, '|,|對暗屬性傷害|,|闇属性にダメージ'									, 'stronger_against_dark'	, false	, true	, true	, 100	, '% stronger against Dark|,|%|,|%', '', 10),
				new cy_statBase('Neutral Damage Suffered|,|對無抗性|,|無属性による損傷'		, 'Neutral Resistance|,|對無抗性|,|無耐性'								, 'neutral_resistance'		, false	, true	, true	, -100	, '%', '', 25,  -1),
				new cy_statBase('Fire Damage Suffered|,|受到火屬性傷害|,|火属性による損傷'	, 'Fire Resistance|,|對火抗性|,|火耐性'									, 'fire_resistance'			, false	, true	, true	, -100	, '%', '', 25,  -1),
				new cy_statBase('Water Damage Suffered|,|受到水屬性傷害|,|水属性による損傷'	, 'Water Resistance|,|對水抗性|,|水耐性'								, 'water_resistance'		, false	, true	, true	, -100	, '%', '', 25,  -1),
				new cy_statBase('Earth Damage Suffered|,|受到地屬性傷害|,|地属性による損傷'	, 'Earth Resistance|,|對地抗性|,|地耐性'								, 'earth_resistance'		, false	, true	, true	, -100	, '%', '', 25,  -1),
				new cy_statBase('Wind Damage Suffered|,|受到風屬性傷害|,|風属性による損傷'	, 'Wind Resistance|,|對風抗性|,|風耐性'									, 'wind_resistance'			, false	, true	, true	, -100	, '%', '', 25,  -1),
				new cy_statBase('Light Damage Suffered|,|受到光屬性傷害|,|光属性による損傷'	, 'Light Resistance|,|對光抗性|,|光耐性'								, 'light_resistance'		, false	, true	, true	, -100	, '%', '', 25,  -1),
				new cy_statBase('Dark Damage Suffered|,|受到暗屬性傷害|,|暗属性による損傷'	, 'Dark Resistance|,|對暗抗性|,|暗耐性'									, 'dark_resistance'			, false	, true	, true	, -100	, '%', '', 25,  -1),
				new cy_statBase('Physical Barrier|,|物理屏障|,|物理バリア'					, 'Physical Barrier|,|物理屏障|,|物理バリア'							, 'physical_barrier'		, false	, false	, true	, 0),
				new cy_statBase('Magic Barrier|,|魔法屏障|,|魔法バリア'						, 'Magic Barrier|,|魔法屏障|,|魔法バリア'								, 'magical_barrier'			, false	, false	, true	, 0),
				new cy_statBase('Fractional Barrier|,|百分比屏障|,|割合バリア'				, 'Fractional Barrier|,|百分比屏障|,|割合バリア'						, 'fractional_barrier'		, false	, false	, true	, 0		, '%'),
				new cy_statBase('Barrier Cooldown|,|屏障速度|,|バリア速度'					, 'Barrier Cooldown|,|屏障速度|,|バリア速度'							, 'barrier_cooldown'		, false	, false	, true	, 100	, '%'),
				new cy_statBase('Reflect|,|傷害反射|,|ダメージ反射'							, 'Reflect|,|傷害反射|,|ダメージ反射'									, 'reflect'					, false , false	, true	, 0		, '%'),
				new cy_statBase('Additional Melee|,|物理追擊|,|物理追撃'					, 'Additional Melee|,|物理追擊|,|物理追撃'								, 'additional_meele'		, false	, false	, true	, 0		, '%'),
				new cy_statBase('Additional Magic|,|魔法追擊|,|魔法追撃'					, 'Additional Magic|,|魔法追擊|,|魔法追撃'								, 'additional_magic'		, false	, false	, true	, 0		, '%'),
				new cy_statBase('Anticipate|,|看穿|,|先読み'								, 'Anticipate|,|看穿|,|先読み'											, 'anticipate'				, false	, false	, true	, 0		, '%', 100),
				new cy_statBase('Guard Break|,|破防|,|防御崩し'								, 'Guard Break|,|破防|,|防御崩し'										, 'guard_break'				, false	, false	, true	, 0		, '%', 100),
				new cy_statBase('Flinch Unavailable|,|封印膽怯|,|怯み付与停止'				, 'Flinch Unavailable|,|封印膽怯|,|怯み付与停止'						, 'flinch_unavailable'		, false	, false	, true	, 'none'),
				new cy_statBase('Tumble Unavailable|,|封印翻覆|,|転倒付与停止'				, 'Tumble Unavailable|,|封印翻覆|,|転倒付与停止'						, 'tumble_unavailable'		, false	, false	, true	, 'none'),
				new cy_statBase('Stun Unavailable|,|封印昏厥|,|気絶付与停止'				, 'Stun Unavailable|,|封印昏厥|,|気絶付与停止'							, 'stun_unavailable'		, false	, false	, true	, 'none'),
				new cy_statBase('Recoil Damage|,|反作用傷害|,|反動ダメージ'					, 'Recoil Damage|,|反作用傷害|,|反動ダメージ'							, 'recoil_damage'			, false	, false	, true	, 0		, '%', '', '', 1, 2),
				new cy_statBase('' , 'ATK [UP<|>DOWN](STR|,|ATK[提升<|>減少]（STR|,|ATK[アップ<|>ダウン]（STR'									, 'atk_%str'				, false , 'hid'	, true	, 0		, '%)|,|%）|,|%）'),
				new cy_statBase('' , 'ATK [UP<|>DOWN](DEX|,|ATK[提升<|>減少]（DEX|,|ATK[アップ<|>ダウン]（DEX'									, 'atk_%dex'				, false , 'hid'	, true	, 0		, '%)|,|%）|,|%）'),
				new cy_statBase('' , 'ATK [UP<|>DOWN](INT|,|ATK[提升<|>減少]（INT|,|ATK[アップ<|>ダウン]（INT'									, 'atk_%int'				, false , 'hid'	, true	, 0		, '%)|,|%）|,|%）'),
				new cy_statBase('' , 'ATK [UP<|>DOWN](AGI|,|ATK[提升<|>減少]（AGI|,|ATK[アップ<|>ダウン]（AGI'									, 'atk_%agi'				, false , 'hid'	, true	, 0		, '%)|,|%）|,|%）'),
				new cy_statBase('' , 'ATK [UP<|>DOWN](VIT|,|ATK[提升<|>減少]（VIT|,|ATK[アップ<|>ダウン]（VIT'									, 'atk_%vit'				, false , 'hid'	, true	, 0		, '%)|,|%）|,|%）'),
				new cy_statBase('' , 'MATK [UP<|>DOWN](STR|,|MATK[提升<|>減少]（STR|,|MATK[アップ<|>ダウン]（STR'								, 'matk_%str'				, false , 'hid'	, true	, 0		, '%)|,|%）|,|%）'),
				new cy_statBase('' , 'MATK [UP<|>DOWN](DEX|,|MATK[提升<|>減少]（DEX|,|MATK[アップ<|>ダウン]（DEX'								, 'matk_%dex'				, false , 'hid'	, true	, 0		, '%)|,|%）|,|%）'),
				new cy_statBase('' , 'MATK [UP<|>DOWN](INT|,|MATK[提升<|>減少]（INT|,|MATK[アップ<|>ダウン]（INT'								, 'matk_%int'				, false , 'hid'	, true	, 0		, '%)|,|%）|,|%）'),
				new cy_statBase('' , 'MATK [UP<|>DOWN](AGI|,|MATK[提升<|>減少]（AGI|,|MATK[アップ<|>ダウン]（AGI'								, 'matk_%agi'				, false , 'hid'	, true	, 0		, '%)|,|%）|,|%）'),
				new cy_statBase('' , 'MATK [UP<|>DOWN](VIT|,|MATK[提升<|>減少]（VIT|,|MATK[アップ<|>ダウン]（VIT'								, 'matk_%vit'				, false , 'hid'	, true	, 0		, '%)|,|%）|,|%）'));
		} catch(e) {
			errorForStop_msg("Initialize Base-Stat-list false.", e);
		}
		try {
			for (let i=0; i<this.statList.length; ++i)
			{
				let _cy = this.statList[i];
				switch ( this.statList[i].baseName )
				{
					case 'max_hp'					: _cy.formula = "93 +getV('CLv')*(127/17 +getV('vit')/3)"; break;
					case 'max_mp'					: _cy.formula = "99 +getV('CLv') +getV('int')/10 + getV('Ctec')"; break;
					case 'natural_hp_regen'			: _cy.formula = "10 +getV('max_hp')/25"; break;
					case 'natural_mp_regen'			: _cy.formula = "1 +getV('max_mp')/100"; break;
					case 'atk'						:
						_cy.formula = [0, [
						"getV('CLv') +getV('weaponatk') +( getV('1_type') != 7 ? (2*getV('str') +2*getV('dex')) : (getV('str') +2*getV('dex') +getV('agi')))",
						"getV('CLv') +getV('weaponatk') +3*getV('str') +getV('dex')",
						"getV('CLv') +getV('weaponatk') +getV('str') +3*getV('dex') + ((getV('1_type') == 2) ? getV('1_value') : 0)",
						"getV('CLv') +getV('weaponatk') +4*getV('dex') + ((getV('1_type') == 2) ? getV('1_value') : 0)",
						"getV('CLv') +getV('weaponatk') +3*getV('str') +getV('int')",
						"getV('CLv') +getV('weaponatk') +2*getV('agi') +2*getV('int')",
						"getV('CLv') +getV('weaponatk') +2*getV('agi') +getV('dex')",
						"getV('CLv') +getV('weaponatk') +2.5*getV('str') +1.5*getV('agi')",
						"getV('CLv') +getV('weaponatk') +1.5*getV('str') +2.5*getV('dex')",
						"getV('CLv') +getV('weaponatk') +getV('str') + 1"]];
						_cy.formula_add.addC = "getV('atk_%str') +getV('atk_%dex') +getV('atk_%int') +getV('atk_%agi') +getV('atk_%vit')";
						break;
					case 'au_atk'				:
						_cy.formula = [1, [
						0, 0, 0, 0, 0, 0, 0, "getV('str') +3*getV('agi') +getV('1_value')*(100 +getV('R#weaponatk'))/100 +getV('1_value')*getV('1_refining')*getV('1_refining')/200 +getV('1_refining') +getV('C#weaponatk')"]];
						_cy.formula_add.addR = "getV('R#atk')";
						_cy.formula_add.addC = "getV('C#atk') +getV('atk_%str') +getV('atk_%dex') +getV('atk_%int') +getV('atk_%agi') +getV('atk_%vit')";
						break;
					case 'dualSword_au_rate'	:
						_cy.formula = [1, [
						0, 0, 0, 0, 0, 0, 0, "0.06*getV('str') +0.04*getV('agi') +getV('1_stability')/2 +getV('C#stability')"]]; break;
					case 'matk'					: 
						_cy.formula = [0, [
						"getV('CLv') +3*getV('int') +getV('dex')",
						"getV('CLv') +3*getV('int') +getV('dex')",
						"getV('CLv') +3*getV('int') +getV('dex')",
						"getV('CLv') +3*getV('int') +getV('dex')",
						"getV('CLv') +4*getV('int') +getV('dex') +getV('weaponatk')",
						"getV('CLv') +4*getV('int') +getV('dex') +getV('weaponatk')",
						"getV('CLv') +4*getV('int') +getV('dex') +0.5*getV('weaponatk')",
						"getV('CLv') +2*getV('int') +getV('dex') +getV('agi')",
						"getV('CLv') +1.5*getV('int') +getV('dex')",
						"getV('CLv') +3*getV('int') +getV('dex') +1"]];
						_cy.formula_add.addC = "getV('matk_%str') +getV('matk_%dex') +getV('matk_%int') +getV('matk_%agi') +getV('matk_%vit')";
						break;
					case 'stability'				:
						_cy.formula = [0, [
						"getV('0_stability') +(getV('str') +3*getV('dex'))/40",
						"getV('0_stability') +getV('dex')/10",
						"getV('0_stability') +(getV('str') +getV('dex'))/20 + ( (getV('0_type') == 2) ? getV('1_stability') : 0)",
						"getV('0_stability') +getV('str')/20 +( (getV('0_type') == 2) ? getV('1_stability')/2 : 0)",
						"getV('0_stability') +getV('str')/20",
						"getV('0_stability') +getV('dex')/10",
						"getV('0_stability') +getV('dex')/40",
						"getV('0_stability') +(getV('str') +getV('dex'))/20",
						"getV('0_stability') +(3*getV('str') +getV('dex'))/40",
						"getV('0_stability') +7*getV('dex')/40 +1"]]; break;
					case 'magic_stability': _cy.formula_add.addC = "getV('stability')/2 +50"; break;
					case 'weaponatk'				:
						_cy.formula = "getV('0_value')";
						_cy.formula_add.addC = "getV('0_value')*getV('0_refining')*getV('0_refining')/100 + getV('0_refining')";
						break;	
					case 'def'						: 
						_cy.formula = [2, [
						"( (getV('1_type') == 1) ? getV('1_value') : 0) +getV('2_value') +getV('3_value') +getV('4_value') +getV('CLv') +getV('vit')",
						"( (getV('1_type') == 1) ? getV('1_value') : 0) +getV('2_value') +getV('3_value') +getV('4_value') +0.8*getV('CLv') +0.25*getV('vit')",
						"( (getV('1_type') == 1) ? getV('1_value') : 0) +getV('2_value') +getV('3_value') +getV('4_value') +1.2*getV('CLv') +2*getV('vit')",
						"( (getV('1_type') == 1) ? getV('1_value') : 0) +getV('2_value') +getV('3_value') +getV('4_value') +0.4*getV('CLv') +0.1*getV('vit')"]]; break;
					case 'mdef'						:
						_cy.formula = [2, [
						"( (getV('1_type') == 1) ? getV('1_value') : 0) +getV('2_value') +getV('3_value') +getV('4_value') +getV('CLv') +getV('int')",
						"( (getV('1_type') == 1) ? getV('1_value') : 0) +getV('2_value') +getV('3_value') +getV('4_value') +0.8*getV('CLv') +0.25*getV('int')",
						"( (getV('1_type') == 1) ? getV('1_value') : 0) +getV('2_value') +getV('3_value') +getV('4_value') +1.2*getV('CLv') +2*getV('int')",
						"( (getV('1_type') == 1) ? getV('1_value') : 0) +getV('2_value') +getV('3_value') +getV('4_value') +0.4*getV('CLv') +0.1*getV('int')"]]; break;
					case 'physical_resistance'		: _cy.formula_add.addC = "getV('2_refining') +getV('3_refining') +getV('4_refining')"; break;
					case 'magical_resistance'		: _cy.formula_add.addC = "getV('2_refining') +getV('3_refining') +getV('4_refining')"; break;
					case 'ailment_resistance'		: _cy.formula = "getV('Cmen')/3.4"; break;
					case 'critical_rate'			: _cy.formula = "25 +getV('Ccrt')/3.4"; break;	
					case 'critical_damage'			: _cy.formula = "150 +getV('str')/5"; break;
					case 'accuracy'					: _cy.formula = "getV('CLv') +getV('dex')"; break;
					case 'dodge'					: 
						_cy.formula = [2, [
						"getV('CLv') +getV('agi')",
						"1.25*getV('CLv') +1.75*getV('agi') +30",
						"0.5*getV('CLv') +0.75*getV('agi') -15",
						"1.5*getV('CLv') +2*getV('agi') +75"]]; break;	
					case 'aspd'						:
						_cy.formula = [0, [
						"getV('CLv') +100 +(getV('str') +21*getV('agi'))/5",
						"getV('CLv') +50 +(2*getV('str') +21*getV('agi'))/10",
						"getV('CLv') +75 +(2*getV('dex') +31*getV('agi'))/10",
						"getV('CLv') +30 +(getV('dex') +11*getV('agi'))/5",
						"getV('CLv') +60 +(getV('int') +9*getV('agi'))/5",
						"getV('CLv') +90 +(getV('int') +20*getV('agi'))/5",
						"getV('CLv') +120 +(getV('dex') + getV('str') +46*getV('agi'))/10",
						"getV('CLv') +25 +(2*getV('str') +35*getV('agi'))/10",
						"getV('CLv') +200 +(3*getV('str') +39*getV('agi'))/10",
						"getV('CLv') +1000 +48*getV('agi')/5"]]; break;
					case 'cspd'						: _cy.formula = "getV('CLv') +(58*getV('agi') +147*getV('dex'))/50"; break;
					case 'attack_mp_recovery'		: _cy.formula = "10 +getV('max_mp')/100"; break;
					case 'drop_rate'				: _cy.formula = "getV('Cluk')/5"; break;
					case 'motion_speed'				: _cy.formula = "-100 +Math.max(getV('aspd')-1000, 0)/180"; break;
					case 'cast_speed'				: _cy.formula = "-100 +Math.min(getV('cspd'), 1000)/20 + Math.max(getV('cspd') -1000, 0)/180"; break;
					case 'stronger_against_fire'	: _cy.formula_add.addC = "25*getV('water@elements')"; break;
					case 'stronger_against_water'	: _cy.formula_add.addC = "25*getV('wind@elements')"; break;
					case 'stronger_against_earth'	: _cy.formula_add.addC = "25*getV('fire@elements')"; break;
					case 'stronger_against_wind'	: _cy.formula_add.addC = "25*getV('earth@elements')"; break;
					case 'stronger_against_light'	: _cy.formula_add.addC = "25*getV('dark@elements')"; break;
					case 'stronger_against_dark'	: _cy.formula_add.addC = "25*getV('light@elements')"; break;
					case 'atk_%str'					: _cy.formula = "getV('Cstr')*C/100"; _cy.formula_add.addC = "-this.constant"; break;
					case 'atk_%dex'					: _cy.formula = "getV('Cdex')*C/100"; _cy.formula_add.addC = "-this.constant"; break;
					case 'atk_%int'					: _cy.formula = "getV('Cint')*C/100"; _cy.formula_add.addC = "-this.constant"; break;
					case 'atk_%agi'					: _cy.formula = "getV('Cagi')*C/100"; _cy.formula_add.addC = "-this.constant"; break;
					case 'atk_%vit'					: _cy.formula = "getV('Cvit')*C/100"; _cy.formula_add.addC = "-this.constant"; break;
					case 'matk_%str'				: _cy.formula = "getV('Cstr')*C/100"; _cy.formula_add.addC = "-this.constant"; break;
					case 'matk_%dex'				: _cy.formula = "getV('Cdex')*C/100"; _cy.formula_add.addC = "-this.constant"; break;
					case 'matk_%int'				: _cy.formula = "getV('Cint')*C/100"; _cy.formula_add.addC = "-this.constant"; break;
					case 'matk_%agi'				: _cy.formula = "getV('Cagi')*C/100"; _cy.formula_add.addC = "-this.constant"; break;
					case 'matk_%vit'				: _cy.formula = "getV('Cvit')*C/100"; _cy.formula_add.addC = "-this.constant"; break;
				}
			}
		} catch(e) {
			errorForStop_msg("Initialize Base-Stat-formula false.", e);
		}
	}
	/* (function(){
		let t_code = '';
		let T_obj = cy_character.statList;
		for (let i=0; i<T_obj.length; ++i)
		{
			t_code += `'${T_obj[i].baseName}': ${i},`;
		}
		t_code = 'cy_character.stat_map = {' + t_code.substr(0, t_code.length-1) + '}';
		eval(t_code);
	})(); */

try {
	var cy_character = new cy_character_base();
	cy_character.charaEquipments.push(
		new cy_equipmentField(0, 'Main_Weapon'		, 9	, true	, false),
		new cy_equipmentField(1, 'Sub_Weapon'		, 6	, false	, false),
		new cy_equipmentField(2, 'Body_Armor'		, 3	, true	, false),
		new cy_equipmentField(3, 'Additional_Gear'	, 0	, true	, true),
		new cy_equipmentField(4, 'Special_Gear'		, 0	, true	, true),
		new cy_equipmentField(5, 'Special_Gear'		, 0	, true	, true)
	);
} catch(e) {
	errorForStop_msg("Initialize Character-Equipment-Field-list false.", e);
}