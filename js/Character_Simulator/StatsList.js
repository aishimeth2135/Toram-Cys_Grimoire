	cy_character_base.prototype.setInit_statList = function (){
		this.statList.push(
			new cy_statBase('str'						, true	, 1),
			new cy_statBase('dex'						, true	, 1),
			new cy_statBase('int'						, true	, 1),
			new cy_statBase('agi'						, true	, 1),
			new cy_statBase('vit'						, true	, 1),
			new cy_statBase('max_hp'					, true	, 0),
			new cy_statBase('max_mp'					, false	, 0, '', 2000),
			new cy_statBase('natural_hp_regen'			, true	, 0),
			new cy_statBase('natural_mp_regen'			, true	, 0),
			new cy_statBase('atk'						, true	, 0),
			new cy_statBase('au_atk'						, true	, 0),
			new cy_statBase('matk'						, true	, 0),
			new cy_statBase('physical_pierce'			, false	, 0		, '%'),
			new cy_statBase('magic_pierce'				, false	, 0		, '%'),
			new cy_statBase('stability'					, false	, 0		, '%', 100, 1),
			new cy_statBase('magic_stability'			, false	, 0		, '%', 90, 1),
			new cy_statBase('weaponatk'					, true	, 0),
			new cy_statBase('au_weaponatk'				, true	, 0),
			new cy_statBase('short_range_damage'		, false	, 100	, '%'),
			new cy_statBase('long_range_damage'			, false	, 100	, '%'),	 
			new cy_statBase('def'						, true	, 0),
			new cy_statBase('mdef'						, true	, 0),
			new cy_statBase('physical_resistance'		, false	, -100	, '%', '', 25, -1),
			new cy_statBase('magical_resistance'		, false	, -100	, '%', '', 25, -1),
			new cy_statBase('ailment_resistance'		, false	, 0		, '%', 75),
			new cy_statBase('critical_rate'				, true	, 25	, '', 100, 0),
			new cy_statBase('critical_damage'			, true	, 150	, '', '', 10),
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
			new cy_statBase('stronger_against_light'	, false	, 100	, '%', '', 10),
			new cy_statBase('stronger_against_dark'		, false	, 100	, '%', '', 10),
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
			new cy_statBase('motion_speed'				, false	, -100	, '%', '', 50,	-1),
			new cy_statBase('physical_barrier'			, false	, 0),
			new cy_statBase('magical_barrier'			, false	, 0),
			new cy_statBase('fractional_barrier'		, false	, 0		, '%'),
			new cy_statBase('barrier_cooldown'			, false	, 100	, '%'),
			new cy_statBase('additional_meele'			, false	, 1		, '%'),
			new cy_statBase('additional_magic'			, false	, 1		, '%'),
			new cy_statBase('anticipate'				, false	, 0		, '%', 100),
			new cy_statBase('guard_break'				, false	, 0		, '%', 100),
			new cy_statBase('flinch_unavailable'		, false	, 'none'),
			new cy_statBase('tumble_unavailable'		, false	, 'none'),
			new cy_statBase('stun_unavailable'			, false	, 'none'),
			new cy_statBase('reflect'					, false , 0		, '%')		
		);
		for (let i=0; i<this.statList.length; ++i)
		{
			let _cy = this.statList[i];
			switch ( this.statList[i].baseName )
			{
				case 'max_hp'					: _cy.formula = "(93 +getV('CLv')*(127/17 +getV('vit')/3) )*R +C"; break;
				case 'max_mp'					: _cy.formula = "(99 +getV('CLv') +getV('int')/10 + getV('Ctec') )*R + C "; break;
				case 'natural_hp_regen'			: _cy.formula = "(1 +getV('max_hp')/100)*R +C"; break;
				case 'natural_mp_regen'			: _cy.formula = "(1 +getV('max_mp'))*R +C"; break;
				case 'atk'						:
					_cy.formula = [0, [
					"getV('CLv') +getV('weaponatk') +2*getV('str') +2*getV('dex')",
					"getV('CLv') +getV('weaponatk') +3*getV('str') +getV('dex')",
					"getV('CLv') +getV('weaponatk') +getV('str') +3*getV('dex')",
					"getV('CLv') +getV('weaponatk') +4*getV('dex')",
					"getV('CLv') +getV('weaponatk') +3*getV('str') +getV('int')",
					"getV('CLv') +getV('weaponatk') +2*getV('agi') +2*getV('int')",
					"getV('CLv') +getV('weaponatk') +2*getV('agi') +getV('dex')",
					"getV('CLv') +getV('weaponatk') +2.5*getV('str') +1.5*getV('agi')",
					"getV('CLv') +getV('weaponatk') +1.5*getV('str') +2.5*getV('dex')",
					"getV('CLv') +getV('weaponatk') +getV('str') + 1"]]; break;
				case 'matk'						: 
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
					"getV('CLv') +3*getV('int') +getV('dex') +1",
					]]; break;
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
					"getV('0_stability') +7*getV('dex')/40 +1"]];break;
				case 'weaponatk'				: _cy.formula = "getV('0_value')*R + getV('0_value')*getV('0_refining')*getV('0_refining')/100 + getV('0_refining')"; break;	
				case 'def'						: 
					_cy.formula = [2, [
					"getV('2_value') +getV('3_value') +getV('4_value') +getV('CLv') +getV('vit')",
					"getV('2_value') +getV('3_value') +getV('4_value') +0.8*getV('CLv') +0.25*getV('vit')",
					"getV('2_value') +getV('3_value') +getV('4_value') +1.2*getV('CLv') +2*getV('vit')",
					"getV('2_value') +getV('3_value') +getV('4_value') +0.4*getV('CLv') +0.1*getV('vit')"]]; break;
				case 'mdef'						:
					_cy.formula = [2, [
					"getV('2_value') +getV('3_value') +getV('4_value') +getV('CLv') +getV('int')",
					"getV('2_value') +getV('3_value') +getV('4_value') +0.8*getV('CLv') +0.25*getV('int')",
					"getV('2_value') +getV('3_value') +getV('4_value') +1.2*getV('CLv') +2*getV('int')",
					"getV('2_value') +getV('3_value') +getV('4_value') +0.4*getV('CLv') +0.1*getV('int')"]]; break;
				case 'physical_resistance'		: _cy.formula = "(B +getV('2_refining') +getV('3_refining') +getV('4_refining') +C)*E"; break;
				case 'magical_resistance'		: _cy.formula = "(B +getV('2_refining') +getV('3_refining') +getV('4_refining') +C)*E"; break;
				case 'ailment_resistance'		: _cy.formula = "getV('Cmen')/5 + C"; break;
				case 'critical_rate'			: _cy.formula = "(B +getV('Ccrt')/3.4)*R +C"; break;	
				case 'critical_damage'			: _cy.formula = "(B +getV('str')/5)*R +C"; break;
				case 'accuracy'					: _cy.formula = "(getV('CLv') +getV('dex'))*R +C"; break;
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
					"getV('CLv') +50 +(getV('dex') +11*getV('agi'))/5",
					"getV('CLv') +60 +(getV('int') +9*getV('agi'))/5",
					"getV('CLv') +90 +(getV('int') +20*getV('agi'))/5",
					"getV('CLv') +120 +(getV('dex') + getV('str') +46*getV('agi'))/10",
					"getV('CLv') +25 +(2*getV('str') +35*getV('agi'))/10",
					"getV('CLv') +200 +(3*getV('str') +39*getV('agi'))/10",
					"getV('CLv') +1000 +48*getV('agi')/5"]]; break;
				case 'cspd'						: _cy.formula = "((getV('CLv') +58*getV('agi') +147*getV('dex'))/50)*R +C"; break;
				case 'attack_mp_recovery'		: _cy.formula = "(B +getV('max_mp')/100)*R +C"; break;
				case 'droprate'					: _cy.formula = "B + getV('Cluk')/5"; break;
				case 'motion_speed'				: _cy.formula = "(B + (getV('aspd')-1000)/180)*E"; break;
			}
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
	