try {
	(function(){
		let WeapArms_map = {'1hSword': 0, '2hSword': 1, 'Bow': 2, 'Bowgun': 3, 'Staff': 4, 'MagicDevice': 5, 'Knuckles': 6, 'Halberd': 7, 'DualSword': 8, 'Katana': 9, 'Other': 10};
		let AuArms_map = {'Dagger': 0, 'Shield': 1, 'Arrow': 2, 'MagicDevice': 3, 'Knuckles': 4, 'Katana': 5, 'Other': 6};
		
		//劍術
		
		InputGainToSkill('橫掃千軍', 0, 27, '此技能不會被迴避', WeapArms_map['1hSword'], -1, -1);
		InputGainToSkill('橫掃千軍', 0, 27, '此技能不會被迴避', WeapArms_map['DualSword'], -1, -1);
		InputGainToSkill('橫掃千軍', 0, 3, 100, WeapArms_map['2hSword'], -1, -1);
		InputGainToSkill('橫掃千軍', 0, 10, 1, WeapArms_map['2hSword'], -1, -1);
		
		InputGainToSkill('爆氣斬', 2, 3, 100, WeapArms_map['2hSword'], -1, -1);
		InputGainToSkill('爆氣斬', 3, 3, 300, WeapArms_map['2hSword'], -1, -1);
		
		/* InputGainToSkill('流星墜擊', 0, 25, 75, WeapArms_map['1hSword'], -1, -1); */
		InputGainToSkill('流星墜擊', 1, 3, 200, WeapArms_map['2hSword'], -1, -1);
		InputGainToSkill('流星墜擊', 0, 10, 1, WeapArms_map['2hSword'], -1, -1);
		
		InputGainToSkill('音速斬切', 0, 10, 4, WeapArms_map['1hSword'], -1, -1);
		InputGainToSkill('音速斬切', 0, 10, 4, WeapArms_map['DualSword'], -1, -1);
		InputGainToSkill('音速斬切', 0, 3, 50, WeapArms_map['2hSword'], -1, -1);
		InputGainToSkill('音速斬切', 0, 23, 1, WeapArms_map['2hSword'], -1, -1);
		InputGainToSkill('音速斬切', 2, 10, 4, WeapArms_map['1hSword'], -1, -1);
		InputGainToSkill('音速斬切', 2, 10, 4, WeapArms_map['DualSword'], -1, -1);
		InputGainToSkill('音速斬切', 2, 3, 100, WeapArms_map['2hSword'], -1, -1);
		InputGainToSkill('音速斬切', 2, 23, 1, WeapArms_map['2hSword'], -1, -1);
		
		InputGainToSkill('真空刃', 0, 3, 5, WeapArms_map['2hSword'], -1, -1);
		InputGainToSkill('真空刃', 0, 10, 1, WeapArms_map['2hSword'], -1, -1);
		
		InputGainToSkill('風暴氣流', 2, 3, 25,WeapArms_map['1hSword'], -1, -1);
		InputGainToSkill('風暴氣流', 2, 3, 25,WeapArms_map['DualSword'], -1, -1);
		InputGainToSkill('風暴氣流', 1, 3, 125,WeapArms_map['2hSword'], -1, -1);
		
		InputGainToSkill('破壞之刃', 0, 27, '[1000+(Vit×2)]',WeapArms_map['1hSword'], -1, -1);
		InputGainToSkill('破壞之刃', 0, 27, '1000',WeapArms_map['2hSword'], -1, -1);
		InputGainToSkill('破壞之刃', 0, 4, '(STR×100%)',WeapArms_map['2hSword'], -1, -1);
		
		InputGainToSkill('戰吼', 0, 24, 50, WeapArms_map['1hSword'], -1, -1);
		InputGainToSkill('戰吼', 0, 24, 50, WeapArms_map['DualSword'], -1, -1);
		InputGainToSkill('戰吼', 0, 5, 5, WeapArms_map['2hSword'], -1, -1);
		
		InputGainToSkill('狂戰士之怒', 0, 24, 20, WeapArms_map['1hSword'], -1, -1);
		InputGainToSkill('狂戰士之怒', 0, 24, 20, WeapArms_map['2hSword'], -1, -1);
		
		//射擊
		InputGainToSkill('威力射擊', 0, 19, 1, WeapArms_map['Bow'], -1, -1);
		InputGainToSkill('威力射擊', 0, 25, 40, WeapArms_map['Bow'], -1, -1);
		InputGainToSkill('威力射擊', 0, 25, -40, WeapArms_map['Bowgun'], -1, -1);	
		
		InputGainToSkill('渦輪射擊', 0, 3, 25, WeapArms_map['Bow'], -1, -1);
		InputGainToSkill('渦輪射擊', 0, 27, 10, WeapArms_map['Bowgun'], -1, -1);
		InputGainToSkill('渦輪射擊', 0, 28, 10, WeapArms_map['Bowgun'], -1, -1);	
		
		InputGainToSkill('箭雨', 0, 17, '(+1秒)',WeapArms_map['Bow'], -1, -1);
		InputGainToSkill('箭雨', 0, 23, 2, WeapArms_map['Bow'], -1, -1);
		InputGainToSkill('箭雨', 0, 3, 70, WeapArms_map['Bowgun'], -1, -1);	
		
		InputGainToSkill('弱點狙擊', 0, 3, 200, WeapArms_map['Bow'], -1, -1);
		InputGainToSkill('弱點狙擊', 0, 3, 300, WeapArms_map['Bowgun'], -1, -1);
		InputGainToSkill('弱點狙擊', 0, 19, -1, WeapArms_map['Bowgun'], -1, -1);
		InputGainToSkill('弱點狙擊', 0, 25, 30, WeapArms_map['Bow'], -1, -1);
		InputGainToSkill('弱點狙擊', 0, 25, -60, WeapArms_map['Bowgun'], -1, -1);
		InputGainToSkill('弱點狙擊', 0, 27, 25, WeapArms_map['Bowgun'], -1, -1);
		
		InputGainToSkill('交叉火線', 0, 23, 1, WeapArms_map['Bow'], -1, -1);
		InputGainToSkill('交叉火線', 0, 27, 100, WeapArms_map['Bowgun'], -1, -1);
		InputGainToSkill('交叉火線', 1, 23, 1, WeapArms_map['Bow'], -1, -1);
		
		InputGainToSkill('黏液射擊', 0, 25, 30, WeapArms_map['Bow'], -1, -1);
		InputGainToSkill('黏液射擊', 0, 25, -30, WeapArms_map['Bowgun'], -1, -1);
		
		InputGainToSkill('麻痺射擊', 0, 3, 100, WeapArms_map['Bow'], -1, -1);
		InputGainToSkill('麻痺射擊', 0, 3, 150, WeapArms_map['Bowgun'], -1, -1);	
		InputGainToSkill('麻痺射擊', 0, 25, 20, WeapArms_map['Bow'], -1, -1);
		InputGainToSkill('麻痺射擊', 0, 25, -20, WeapArms_map['Bowgun'], -1, -1);
		
		InputGainToSkill('煙霧彈', 0, 3, 200, WeapArms_map['Bow'], -1, -1);	
		InputGainToSkill('煙霧彈', 0, 3, 250, WeapArms_map['Bowgun'], -1, -1);
		InputGainToSkill('煙霧彈', 0, 25, 20, WeapArms_map['Bow'], -1, -1);
		InputGainToSkill('煙霧彈', 0, 25, -20, WeapArms_map['Bowgun'], -1, -1);	
		
		InputGainToSkill('斷腕擊', 0, 3, 300, WeapArms_map['Bow'], -1, -1);	
		InputGainToSkill('斷腕擊', 0, 3, 350, WeapArms_map['Bowgun'], -1, -1);
		InputGainToSkill('斷腕擊', 0, 25, 20, WeapArms_map['Bow'], -1, -1);
		InputGainToSkill('斷腕擊', 0, 25, -20, WeapArms_map['Bowgun'], -1, -1);	
		
		InputGainToSkill('匿蹤', 0, 9, -200, WeapArms_map['Bow'], -1, -1);
		InputGainToSkill('匿蹤', 0, 9, -200, WeapArms_map['Bowgun'], -1, -1);
		InputGainToSkill('匿蹤', 0, 5, 2, WeapArms_map['Bow'], -1, -1);
		InputGainToSkill('匿蹤', 0, 5, 2, WeapArms_map['Bowgun'], -1, -1);
		
		//魔法
	
		InputGainToSkill('法術/飛箭', 0, 3, 25, WeapArms_map['Staff'], -1, -1);
		InputGainToSkill('法術/飛箭', 0, 20, 2, WeapArms_map['MagicDevice'], WeapArms_map['MagicDevice'], -1);
		
		InputGainToSkill('法術/長槍', 0, 3, 50, WeapArms_map['Staff'], -1, -1);
		InputGainToSkill('法術/長槍', 0, 25, 25, WeapArms_map['MagicDevice'], WeapArms_map['MagicDevice'], -1);
		
		InputGainToSkill('法術/魔法槍', 0, 3, 40, WeapArms_map['Staff'], -1, -1);
		InputGainToSkill('法術/魔法槍', 0, 20, 1, WeapArms_map['MagicDevice'], WeapArms_map['MagicDevice'], -1);
		
		InputGainToSkill('法術/衝擊波', 0, 25, 25, WeapArms_map['Staff'], -1, -1);
		InputGainToSkill('法術/衝擊波', 0, 3, 250, WeapArms_map['MagicDevice'], WeapArms_map['MagicDevice'], -1);
		
		InputGainToSkill('法術/終結', 0, 3, 1000, WeapArms_map['Staff'], -1, -1);
		
		InputGainToSkill('法術/障壁', 0, 3, 30, WeapArms_map['Staff'], -1, -1);
		InputGainToSkill('法術/障壁', 0, 23, 2, WeapArms_map['MagicDevice'], WeapArms_map['MagicDevice'], -1);
		
		InputGainToSkill('法術/引爆', 0, 3, 100, WeapArms_map['Staff'], -1, -1);
		InputGainToSkill('法術/引爆', 0, 23, 4, WeapArms_map['MagicDevice'],WeapArms_map['MagicDevice'], -1);
		
		InputGainToSkill('法術/暴風', 0, 3, 100, WeapArms_map['Staff'], -1, -1);
		InputGainToSkill('法術/暴風', 0, 23, 4, WeapArms_map['MagicDevice'], WeapArms_map['MagicDevice'], -1);
		
		InputGainToSkill('魔力充填', 0, 5, 50, WeapArms_map['MagicDevice'], WeapArms_map['MagicDevice'], -1);
		
		InputGainToSkill('強射', 1, 10, 2, WeapArms_map['Staff'], -1, -1);
		InputGainToSkill('強射', 1, 3, 40, WeapArms_map['Staff'], -1, -1);
		InputGainToSkill('強射', 1, 3, 70, WeapArms_map['MagicDevice'], WeapArms_map['MagicDevice'], -1);
		
		InputGainToSkill('魔力灌充', 0, 5, 500, WeapArms_map['Staff'], -1, -1);
		InputGainToSkill('魔力灌充', 0, 5, 700, WeapArms_map['MagicDevice'], WeapArms_map['MagicDevice'], -1);
		InputGainToSkill('魔力灌充', 0, 27, '裝備杖或魔導具的情況下，若此技能接續在「魔力充填」後施放，此技能的詠唱時間將會減少[魔力充填的技能等級]秒。', WeapArms_map['Staff'], -1, -1);
		InputGainToSkill('魔力灌充', 0, 27, '裝備杖或魔導具的情況下，若此技能接續在「魔力充填」後施放，此技能的詠唱時間將會減少[魔力充填的技能等級]秒。', WeapArms_map['MagicDevice'], WeapArms_map['MagicDevice'], -1);
		
		//格鬥
		InputGainToSkill('重擊', 0, 10, 1,  WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('重擊', 0, 2, 25,  WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('重擊', 0, 3, 50,  WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('重擊', 0, 25, 25, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('重擊', 0, 1, '+(AGI×10%)', WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		
		InputGainToSkill('痛擊', 0, 10, 1, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('痛擊', 0, 2, 50, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('痛擊', 0, 3, 100, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('痛擊', 0, 25, '+(AGI*10%)', WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('痛擊', 0, 1, '+(AGI×20%)', WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('痛擊', 0, 4, '(AGI×20%)', WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		
		InputGainToSkill('穿甲', 0, 10, 1, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('穿甲', 0, 2, 150, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('穿甲', 0, 2, '+<u>額外加成</u>', WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('穿甲', 0, 3, 50, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('穿甲', 0, 4, '2×(目標Def-目標Lv)', WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		
		InputGainToSkill('猛爆拳', 0, 10, 1, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('猛爆拳', 0, 2, 100, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('猛爆拳', 0, 3, 150, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('猛爆拳', 0, 25, 20, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('猛爆拳', 1, 2, 100, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('猛爆拳', 1, 3, 500, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		
		InputGainToSkill('戰車猛擊', 0, 2, 250, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('戰車猛擊', 0, 3, 250, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('戰車猛擊', 0, 4, '(AGI*100%)', WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('戰車猛擊', 0, 5, '<p>此技能將會飛行至最大射程。</p>', WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('戰車猛擊', 0, 23, 0.75, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('戰車猛擊', 0, 25, 50, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('戰車猛擊', 0, 19, -1, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		
		InputGainToSkill('音速波動', 0, 10, 4, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('音速波動', 0, 3, 25, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('音速波動', 0, 25, 25, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		
		InputGainToSkill('震地強襲', 0, 2, 25, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('震地強襲', 0, 3, 25, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('震地強襲', 0, 25, 50, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('震地強襲', 0, 23, 1, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('震地強襲', 0, 4, '(AGI×20%)', WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('震地強襲', 0, 27, 500, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		
		InputGainToSkill('三段擊', 0, 3, 100, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('三段擊', 0, 27, 25, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		
		InputGainToSkill('疾襲', 0, 2, 200, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('疾襲', 0, 3, 200, WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		InputGainToSkill('疾襲', 0, 4, '(AGI*200%)', WeapArms_map['Knuckles'], AuArms_map['Knuckles'], -1);
		
		//雙劍
		InputGainToSkill('步步為營', 0, 24,90, WeapArms_map['DualSword'], -1, -1);
		
		InputGainToSkill('劍閃', 1, 3, 50, WeapArms_map['DualSword'], -1, -1);
		InputGainToSkill('劍閃', 0, 24, 100, WeapArms_map['DualSword'], -1, -1);
		InputGainToSkill('劍閃', 0, 6, 25, WeapArms_map['DualSword'], -1, -1);
		
		InputGainToSkill('神速軌跡', 0, 6, 10, WeapArms_map['DualSword'], -1, -1);
		
		//斧槍
	
		InputGainToSkill('迅捷刺突', 0, 10, 2, WeapArms_map['Halberd'], -1, -1);
		InputGainToSkill('鴻鵠一擲', 0, 10, 2, WeapArms_map['Halberd'], -1, -1);
		
		InputGainToSkill('死亡斧槍', 0, 3, 20, WeapArms_map['Halberd'], -1, -1);
		InputGainToSkill('死亡斧槍', 0, 27, 50, WeapArms_map['Halberd'], -1, -1);
		InputGainToSkill('死亡斧槍', 0, 10, 2, WeapArms_map['Halberd'], -1, -1);
		
		InputGainToSkill('穿刺擊', 0, 27, -25, WeapArms_map['1hSword'], -1, -1);
		InputGainToSkill('穿刺擊', 1, 27, -25, WeapArms_map['1hSword'], -1, -1);
		InputGainToSkill('穿刺擊', 0, 2, 100, WeapArms_map['Halberd'], -1, -1);
		InputGainToSkill('穿刺擊', 1, 2, 100, WeapArms_map['Halberd'], -1, -1);
		InputGainToSkill('穿刺擊', 0, 10, 2, WeapArms_map['Halberd'], -1, -1);
		
		InputGainToSkill('逆境怒吼', 0, 19, -1, WeapArms_map['Halberd'], -1, -1);
		
		//拔刀劍
	
		InputGainToSkill('武士道', 0, 6, '並可精進對拔刀劍的_&2_。', WeapArms_map['Katana'], -1, -1);
		
		InputGainToSkill('縮地法', 1, 5, 25, WeapArms_map['Katana'], AuArms_map['Katana'], -1);
		
		InputGainToSkill('雙手合持', 0, 27, '主手裝備拔刀劍時，將獲得_&1_效果。', WeapArms_map['Katana'], -1, -1);
		
		InputGainToSkill('明鏡止水', 0, 5, 25, WeapArms_map['Katana'], AuArms_map['Katana'], -1);
		
		InputGainToSkill('怪力亂神', 0, 7, 50, WeapArms_map['Katana'], AuArms_map['Katana'], -1);
		
		//防護
		InputGainToSkill('傷害反彈', 1, 4,'(阻擋力%)', -1, AuArms_map['Shield'], -1);
		
		InputGainToSkill('防禦界限', 0, 9, -200, -1, AuArms_map['Shield'], -1);
		
		InputGainToSkill('魔法庇護', 0, 9, -200, -1, AuArms_map['Shield'], -1);
		
		//狩獵
		InputGainToSkill('旭日之箭', 0, 3, 50, -1, AuArms_map['Arrow'], -1);
		InputGainToSkill('旭日之箭', 0, 23, 1, -1, AuArms_map['Arrow'], -1);
		
		InputGainToSkill('力量之箭', 0, 5, 1, '', AuArms_map['Arrow'], '');
		InputGainToSkill('力量之箭', 0, 27, 2, '', AuArms_map['Arrow'], '');
		
		InputGainToSkill('沉睡陷阱', 1, 4, '(DEX×50%)', -1, AuArms_map['Arrow'], -1);
		InputGainToSkill('沉睡陷阱', 1, 27, 100, -1, AuArms_map['Arrow'], -1);
		InputGainToSkill('沉睡陷阱', 1, 25, 20, -1, AuArms_map['Arrow'], -1);
		InputGainToSkill('沉睡陷阱', 1, 23, 1, -1, AuArms_map['Arrow'], -1);
		
		InputGainToSkill('絆腳陷阱', 1, 4, '(DEX×50%)', -1, AuArms_map['Arrow'], -1);
		InputGainToSkill('絆腳陷阱', 1, 27, 100, -1, AuArms_map['Arrow'], -1);
		InputGainToSkill('絆腳陷阱', 1, 25, 20, -1, AuArms_map['Arrow'], -1);
		InputGainToSkill('絆腳陷阱', 1, 23, 1, -1, AuArms_map['Arrow'], -1);
		
		InputGainToSkill('猛爆地雷', 1, 4, '(DEX×2+Tecx2)', '', AuArms_map['Arrow'], '');
		InputGainToSkill('猛爆地雷', 1, 27, 100, '', AuArms_map['Arrow'], '');
		InputGainToSkill('猛爆地雷', 1, 25, 80, '', AuArms_map['Arrow'], '');
		InputGainToSkill('猛爆地雷', 1, 23, 1, '', AuArms_map['Arrow'], '');
		
		//騎士
		InputGainToSkill('衝刺', 0, 2, 50, -1, AuArms_map['Shield'], -1);
		InputGainToSkill('衝刺', 0, 3, 25, -1, AuArms_map['Shield'], -1);
		InputGainToSkill('衝刺', 0, 25, 50, -1, AuArms_map['Shield'], -1);
		
		InputGainToSkill('憤怒的一擊', 0, 2, 100, -1, AuArms_map['Shield'], -1);
		InputGainToSkill('憤怒的一擊', 0, 3, 50, -1, AuArms_map['Shield'], -1);
		InputGainToSkill('憤怒的一擊', 0, 10, 1, WeapArms_map['2hSword'], -1, -1);
		
		InputGainToSkill('繫影強襲', 0, 10, 1, WeapArms_map['2hSword'], -1, -1);
		InputGainToSkill('繫影強襲', 0, 2, 150, -1, AuArms_map['Shield'], -1);
		InputGainToSkill('繫影強襲', 0, 3, 100, -1, AuArms_map['Shield'], -1);
		//祭司
		InputGainToSkill('榮耀頌歌', 0, 27, 5, -1, AuArms_map['Shield'], -1);
		InputGainToSkill('強化祝福', 0, 29, '(INT×7.5%)', WeapArms_map['Staff'], -1, -1);
		InputGainToSkill('神聖光輝', 0, 27, 30, WeapArms_map['MagicDevice'], WeapArms_map['MagicDevice'], -1);
		InputGainToSkill('神聖光輝', 0, 3, 30, WeapArms_map['Staff'], -1, -1);
	
	})();
} catch (e) {
	errorForStop_msg("Initialize Skill-Gain-list false.", e);
}