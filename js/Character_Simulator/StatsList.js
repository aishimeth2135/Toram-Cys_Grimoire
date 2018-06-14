	
	cy_character.statList.push(
		new cy_statBase('str'						, true	, 1),
		new cy_statBase('dex'						, true	, 1),
		new cy_statBase('int'						, true	, 1),
		new cy_statBase('agi'						, true	, 1),
		new cy_statBase('vit'						, true	, 1),
		new cy_statBase('max_hp'					, true	, 1),
		new cy_statBase('max_mp'					, false	, 1, '', 2000),
		new cy_statBase('natural_hp_regen'			, true	, 1),
		new cy_statBase('natural_mp_regen'			, true	, 1),
		new cy_statBase('atk'						, true	, 1),
		new cy_statBase('matk'						, true	, 1),
		new cy_statBase('physical_pierce'			, false	, 0		, '%'),
		new cy_statBase('magic_pierce'				, false	, 0		, '%'),
		new cy_statBase('stability'					, false	, 0		, '%', 100, 1),
		new cy_statBase('weaponatk'					, true	, 0),
		new cy_statBase('short_range_damage'		, false	, 0		, '%'),
		new cy_statBase('long_range_damage'			, false	, 0		, '%'),	 
		new cy_statBase('def'						, true	, 0),
		new cy_statBase('mdef'						, true	, 0),
		new cy_statBase('physical_resistance'		, false	, -100	, '%', '', 25, -1),
		new cy_statBase('magical_resistance'		, false	, -100	, '%', '', 25, -1),
		new cy_statBase('ailment_resistance'		, false	, 0		, '%', 75),
		new cy_statBase('critical_rate'				, true	, 0		, '', 100, 0),
		new cy_statBase('critical_damage'			, true	, 0		, '', '', 10),
		new cy_statBase('accuracy'					, true	, 0),
		new cy_statBase('dodge'						, true	, 0),
		new cy_statBase('aspd'						, true	, 0),
		new cy_statBase('cspd'						, true	, 0),
		new cy_statBase('evasion_rate'				, false	, 0		, '%', 75, 0),
		new cy_statBase('guard_rate'				, false	, 0		, '%', 75, 0),
		new cy_statBase('guard_power'				, false	, 0		, '%', 75, 0),
		new cy_statBase('stronger_against_neutral'	, false	, 100	, '%', '', 10),
		new cy_statBase('stronger_against_fire'		, false	, 100	, '%', '', 10), 
		new cy_statBase('stronger_against_water'	, false	, 100	, '%', '', 10),
		new cy_statBase('stronger_against_earth'	, false	, 100	, '%', '', 10),
		new cy_statBase('stronger_against_wind'		, false	, 100	, '%', '', 10),
		new cy_statBase('stronger_against_light'	, false	, 100	, '%', '', 25,  10),
		new cy_statBase('stronger_against_dark'		, false	, 100	, '%', '', 25,  10),
		new cy_statBase('neutral_resistance'		, false	, -100	, '%', '', 25,  -1),
		new cy_statBase('fire_resistance'			, false	, -100	, '%', '', 25,  -1),
		new cy_statBase('water_resistance'			, false	, -100	, '%', '', 25,  -1),
		new cy_statBase('earth_resistance'			, false	, -100	, '%', '', 25,  -1),
		new cy_statBase('wind_resistance'			, false	, -100	, '%', '', 25,  -1),
		new cy_statBase('light_resistance'			, false	, -100	, '%', '', 25,  -1),
		new cy_statBase('dark_resistance'			, false	, -100	, '%', '', 25,  -1),
		new cy_statBase('aggro'						, false	, -100	, '%', '', 25,  -1),
		new cy_statBase('unsheathe_attack'			, true	, -100	, '%', '', 25,  -1),
		new cy_statBase('attack_mp_recovery'		, true	, 10),
		new cy_statBase('droprate'					, false	, 100	, '%'),
		new cy_statBase('motion_speed'				, false	, 100	, '%', 50),
		new cy_statBase('physical_barrier'			, false	, 100),
		new cy_statBase('magical_barrier'			, false	, 100),
		new cy_statBase('fractional_barrier'		, false	, 100	, '%'),
		new cy_statBase('barrier_cooldown'			, false	, 100	, '%'),
		new cy_statBase('additional_meele'			, false	, 100	, '%'),
		new cy_statBase('additional_magic'			, false	, 100	, '%'),
		new cy_statBase('anticipate'				, false	, 100	, '%', 100),
		new cy_statBase('guard_break'				, false	, 100	, '%', 100),
		new cy_statBase('flinch_unavailable'		, false	, ''),
		new cy_statBase('tumble_unavailable'		, false	, ''),
		new cy_statBase('stun_unavailable'			, false	, ''),
		new cy_statBase('reflect'					, 0		, 0		, '%')
	);
	
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
	