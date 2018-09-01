try {
	cy_character_base.prototype.defaultEquip_list = [
		new cy_defaultEquip('Main_Weapon', '3周年寶刀 VII', "['|,|3周年寶刀 VII|,|',8,83,70,0,[['short_range_damage',6,1],['dex',6,0],['unsheathe_attack%',10,1],['physical_pierce',8,1],['critical_rate',14,1]],[[],[]],['','']]", 'Cyteria'),
		new cy_defaultEquip('Main_Weapon', '拔刀劍．謙遜', "['|,|拔刀劍．謙遜|,|',8,100,70,0,[['attack_mp_recovery',10,1],['critical_rate',100,1],['aspd',1000,1]],[[['atk',5,0],['matk',5,0],['stability',5,1],['motion_speed',5,1],['recoil_damage',20,1]],[]],['|,|被詛咒的鍛晶|,|','']]", 'Cyteria'),
		new cy_defaultEquip('Main_Weapon', '重劍．高潔', "['|,|重劍．高潔|,|',8,360,70,0,[['max_hp',10000,1],['fractional_barrier',20,1],['accuracy',100,1]],[[['atk',5,0],['matk',5,0],['stability',5,1],['motion_speed',5,1],['recoil_damage',20,1]],[]],['|,|被詛咒的鍛晶|,|','']]", 'Cyteria'),
		new cy_defaultEquip('Main_Weapon', '#a7cd16c1616', "['',9,0,60,0,[['atk',7,0],['critical_damage',16,1],['critical_rate',16,1],['critical_rate',16,0],['def',-7,0],['mdef',-7,0]],[[],[]],['','']]", 'Cyteria'),
		new cy_defaultEquip('Main_Weapon', '王女杖', "['|,|王女杖|,|',4,220,60,0,[['matk',10,0],['max_mp',1000,1],['matk_%int',100,1],['cspd',-9999,1]],[[],[]],['','']]", 'Cyteria'),
		new cy_defaultEquip('Sub_Weapon', '暴風短劍', "['|,|暴風短劍|,|',0,20,0,0,[['dodge',7,0],['critical_rate',7,0],['aspd',7,0]],[],['','']]", 'Cyteria'),
		new cy_defaultEquip('Sub_Weapon', '厚重小刀', "['|,|厚重小刀|,|',0,17,0,0,[['critical_rate',5,1],['str',3,1],['accuracy',-3,1]],[],['','']]", 'Cyteria'),
		new cy_defaultEquip('Sub_Weapon', '女神短劍', "['|,|女神短劍|,|',0,1,0,0,[['int',5,1],['max_mp',100,1],['attack_mp_recovery',1,1],['physical_resistance',-10,1]],[],['','']]", 'Cyteria'),
		new cy_defaultEquip('Sub_Weapon', '巧克力之刃', "['|,|巧克力之刃|,|',0,60,0,0,[['natural_hp_regen',15,0],['fractional_barrier',10,1],['evasion_rate',5,1],['tumble_unavailable',1,1]],[],['','']]", 'Cyteria'),
		new cy_defaultEquip('Sub_Weapon', '混沌之刃', "['|,|混沌之刃|,|',0,84,0,0,[['max_hp',1000,1],['neutral_resistance',10,1],['max_mp',-100,1]],[],['','']]", 'Cyteria'),
		new cy_defaultEquip('Sub_Weapon', '合成機械獸的箭矢', "['|,|合成機械獸的箭矢|,|',2,67,20,0,[['max_mp',300,1],['critical_rate',6,1],['max_hp',-9,0]],[],['','']]", 'Cyteria'),
		new cy_defaultEquip('Body_Armor', '綠液鎧甲(情人節)', "['|,|綠液鎧甲|,|',0,36,0,0,[['max_hp',75,0],['physical_resistance',25,1],['magic_resistance',25,1]],[[],[]],['','']]", 'Cyteria'),
		new cy_defaultEquip('Additional_Gear', 'CR+15|,|哥德禮帽(c15)|,|CR+15', "['|,|哥德禮帽|,|',0,34,0,0,[['critical_rate',15,1]],[[],[]],['','']]", 'Cyteria'),
		new cy_defaultEquip('Additional_Gear', 'CR+20, CD+2%|,|刨冰帽|,|CR+20, CD+2%', "['|,|刨冰帽|,|',0,62,0,0,[['critical_rate',20,1],['critical_damage',2,0]],[[],[]],['','']]", 'Cyteria'),
		new cy_defaultEquip('Special_Gear', 'STR+8, MP+500|,|力量戒指VI|,|STR+8, MP+500', "['|,|力量戒指IV|,|',0,0,0,0,[['str',8,1],['max_mp',500,1]],[[],[]],['','']]", 'Cyteria'),
		new cy_defaultEquip('Special_Gear', 'INT+8, MP+500|,|智力戒指VI|,|INT+8, MP+500', "['|,|智力戒指IV|,|',0,0,0,0,[['int',8,1],['max_mp',500,1]],[[],[]],['','']]", 'Cyteria'),
		new cy_defaultEquip('Special_Gear', 'AGI+8, MP+500|,|敏捷戒指VI|,|AGI+8, MP+500', "['|,|敏捷戒指IV|,|',0,0,0,0,[['agi',8,1],['max_mp',500,1]],[[],[]],['','']]", 'Cyteria'),
		new cy_defaultEquip('Special_Gear', 'VIT+8, MP+500|,|體力戒指VI|,|VIT+8, MP+500', "['|,|體力戒指IV|,|',0,0,0,0,[['vit',8,1],['max_mp',500,1]],[[],[]],['','']]", 'Cyteria'),
		new cy_defaultEquip('Special_Gear', 'DEX+8, MP+500|,|技術戒指VI|,|DEX+8, MP+500', "['|,|技術戒指IV|,|',0,0,0,0,[['dex',8,1],['max_mp',500,1]],[[],[]],['','']]", 'Cyteria')
	];
	//new cy_defaultEquip('', '', "", 'Cyteria'),
} catch(e) {
	errorForStop_msg("[Error] Initialize Default-Equpiment-list false. Please contact the author. <br />" + String(e));
}