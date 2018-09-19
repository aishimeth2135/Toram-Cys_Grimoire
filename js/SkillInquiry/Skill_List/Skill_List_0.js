try {	
	(function(){
		
		let WeapArms_map = {'1hSword': 0, '2hSword': 1, 'Bow': 2, 'Bowgun': 3, 'Staff': 4, 'MagicDevice': 5, 'Knuckles': 6, 'Halberd': 7, 'DualSword': 8, 'Katana': 9, 'Other': 10};
		let AuArms_map = {'Dagger': 0, 'Shield': 1, 'Arrow': 2, 'MagicDevice': 3, 'Knuckles': 4, 'Katana': 5, 'Other': 6};
		/* 
		All_WeapType = ['單手劍'0, '雙手劍'1, '弓'2, '弩'3, '法杖'4, '魔導具'5, '拳套'6, '旋風槍'7, '雙劍'8, '拔刀劍'9, '其它'10]
		All_AuType = ['小刀'0, '盾牌'1, '箭矢'2, '魔導具'3, '拳套'4, '拔刀劍'5, '其它'6] 
		*/
		all_skilltree_type[0].STt_skilltree.push(
			new the_skilltree(1, 'Blade Skills|,|劍術技能|,|ブレードスキル'),
			new the_skilltree(2, 'Shot Skills|,|射擊技能|,|シュートスキル'),
			new the_skilltree(3, 'Magic Skills|,|魔法技能|,|マジックスキル'),
			new the_skilltree(4, 'Martial Skills|,|格鬥技能|,|マーシャルスキル'),
			new the_skilltree(5, 'Dual Sword Skills|,|雙劍技能|,|デュアルソードスキル'),
			new the_skilltree(6, 'Halberd Skills|,|斧槍技能|,|ハルバードスキル'),
			new the_skilltree(7, 'Mononofu Skills|,|武士技能|,|モノノフスキル'));
			
	/*======================================================================================
	======================================================================================*/		
		all_skilltree_type[0].STt_skilltree[0].ST_skill.push(
			new the_skill(1	, 'Hard Hit|,|威力攻擊|,|ハードヒット'			, 0	, "active"	, ""),
			new the_skill(2	, 'Astute|,|迅捷攻擊|,|アステュート'				, 1	, "active"	, ""),
			new the_skill(3	, 'Trigger Slash|,|橫掃千軍|,|トリガースラッシュ'	, 2	, "active"	, ""),		// 2
			new the_skill(4	, 'Rampage|,|爆氣斬|,|ランページ'					, 3	, "active"	, ""),		// 3
			new the_skill(5	, 'Meteor Breaker|,|流星墜擊|,|メテオブレイカー'	, 3	, "active"	, ""),		//
			new the_skill(6	, 'Sonic Blade|,|音速斬切|,|アクセルブレード'		, 1	, "active"	, ""),		// 5
			new the_skill(7	, 'Spiral Air|,|真空刃|,|スパイラルエアー'		, 6	, "active"	, ""),        
			new the_skill(8	, 'Buster Blade|,|風暴氣流|,|バスターブレード'	, 7	, "active"	, ""),		// 7
			new the_skill(9	, 'Sword Tempest|,|破壞之刃|,|ソードテンペスト'	, 7	, "active"	, ""),		
			new the_skill(10, 'Sword Mastery|,|劍術要領|,|ブレードマスタリ'	, 0	, "passive"	, "M_1hSword[atk#parseInt((SLv+7)/5)%, weaponatk#3*SLv%]"),
			new the_skill(11, 'Quick Slash|,|劍速提升|,|素早い斬撃'			, 10, "passive"	, "M_1hSword[aspd#10*SLv, aspd#SLv%]"),
			new the_skill(12, 'Sword Techniques|,|大師級劍術|,|匠の剣術'		, 11, "passive"	, "", "M_1hSword[「劍術技能」中的攻擊技能，總傷害提升${2*SLv}%]"),
			new the_skill(13, 'War Cry|,|戰吼|,|ウォークライ'					, 11, "active"	, ""),
			new the_skill(14, 'Berserk|,|狂戰士之怒|,|バーサーク'				, 13, "active"	, ""));
		for (let i=0; i<all_skilltree_type[0].STt_skilltree[0].ST_skill.length; i++)
		{
			if (all_skilltree_type[0].STt_skilltree[0].ST_skill[i].Sk_no != 13 && all_skilltree_type[0].STt_skilltree[0].ST_skill[i].Sk_no != 14)
			{
				all_skilltree_type[0].STt_skilltree[0].ST_skill[i].Sk_W_type.push(WeapArms_map['1hSword'], WeapArms_map['2hSword']);
			}
			else {
				all_skilltree_type[0].STt_skilltree[0].ST_skill[i].Sk_W_type.push(WeapArms_map['1hSword'], WeapArms_map['2hSword'], WeapArms_map['Other']);
			}
		}
		for (let i=0; i<all_skilltree_type[0].STt_skilltree[0].ST_skill.length; i++)
		{
			if (all_skilltree_type[0].STt_skilltree[0].ST_skill[i].Sk_name != '_#劍術要領')
			{
				all_skilltree_type[0].STt_skilltree[0].ST_skill[i].Sk_W_type.push(WeapArms_map['DualSword']);
			}
		}
			
		all_skilltree_type[0].STt_skilltree[0].ST_skill[2].Sk_branch.push('力量灌注');
		all_skilltree_type[0].STt_skilltree[0].ST_skill[3].Sk_branch.push('強化攻擊','二連閃擊','劍光一閃');
		all_skilltree_type[0].STt_skilltree[0].ST_skill[4].Sk_branch.push('流星一擊','星流爆破');
		all_skilltree_type[0].STt_skilltree[0].ST_skill[5].Sk_branch.push('蓄勢待發','強化效果');
		all_skilltree_type[0].STt_skilltree[0].ST_skill[7].Sk_branch.push('刃風','風刃氣旋');
		all_skilltree_type[0].STt_skilltree[0].ST_skill[8].Sk_branch.push('武器銳化');
		all_skilltree_type[0].STt_skilltree[0].ST_skill[13].Sk_branch.push('狂暴化', '喪失沉著');
		
	/*======================================================================================
	======================================================================================*/	
		all_skilltree_type[0].STt_skilltree[1].ST_skill.push(
			new the_skill(1	, 'Power Shot|,|威力射擊|,|パワーシュート'	, 0	, "active"	, ""),	//0
			new the_skill(2	, 'Bullseye|,|渦輪射擊|,|ワンホイール'		, 1	, "active"	, ""),
			new the_skill(3	, 'Snipe|,|弱點狙擊|,|スナイピング'			, 2	, "active"	, ""),
			new the_skill(4	, 'Arrow Rain|,|箭雨|,|アローレイン'			, 2	, "active"	, ""),
			new the_skill(5	, 'Cross Fire|,|交叉火線|,|クロスファイア'	, 4	, "active"	, ""),
			new the_skill(6	, 'Moeba Shot|,|黏液射擊|,|メーバショット'	, 1	, "active"	, ""),
			new the_skill(7	, 'Paralysis Shot|,|麻痺射擊|,|パライズショット', 6	, "active"	, ""),
			new the_skill(8	, 'Smoke Dust|,|煙霧彈|,|スモークダスト'		, 7	, "active"	, ""),
			new the_skill(9	, 'Arm Break|,|斷腕擊|,|アームブレイク'		, 8	, "active"	, ""),	//
			new the_skill(10, 'Shot Mastery|,|弓術鍛鍊|,|シュートマスタリ'	, 0	, "passive"	, "M_Bow,M_Bowgun[atk#parseInt((SLv+7)/5)%, weaponatk#3*SLv%]"),	//9
			new the_skill(11, 'Sneak Attack|,|匿蹤|,|ハイドアタック'		, 10, "active"	, ""),
			new the_skill(12, 'Long Range|,|遠程狙擊|,|ロングレンジ'		, 10, "passive"	, "", "all[距離大於8m的物理傷害技能，總傷害提升${SLv}%]"),
			new the_skill(13, 'Quick Draw|,|回氣|,|クイックドロー'		, 12, "passive"	, "", "all[施放攻擊技能時，有${(SLv != 0) ? 5+2*SLv : 0}%恢復100MP]"),//12
			new the_skill(14, 'Decoy Shot|,|分身射手|,|デコイシューター'	, 13, "active"	, ""));
		for (let i=0; i<=9; ++i)
		{
			all_skilltree_type[0].STt_skilltree[1].ST_skill[i].Sk_W_type.push(WeapArms_map['Bow'], WeapArms_map['Bowgun']);
			if (all_skilltree_type[0].STt_skilltree[1].ST_skill[i].Sk_no != 10)
			{
				all_skilltree_type[0].STt_skilltree[1].ST_skill[i].Sk_Au_type.push(AuArms_map['Arrow']);
			}
		}
		for (let i=10; i<=13; ++i)
		{
			all_skilltree_type[0].STt_skilltree[1].ST_skill[i].Sk_W_type.push(WeapArms_map['Other']);
			all_skilltree_type[0].STt_skilltree[1].ST_skill[i].Sk_Au_type.push(AuArms_map['Other']);
		}
		all_skilltree_type[0].STt_skilltree[1].ST_skill[4].Sk_branch.push('分身火線');
		
	/*======================================================================================
	======================================================================================*/		
		all_skilltree_type[0].STt_skilltree[2].ST_skill.push(
			new the_skill(1	, 'Magic: Arrows|,|法術/飛箭|,|術式/アロー'		, 0	, "active"	, ""),		// 0
			new the_skill(2	, 'Magic: Javelin|,|法術/長槍|,|術式/ジャベリン'	, 1	, "active"	, ""),        
			new the_skill(3	, 'Magic: Lances|,|法術/魔法槍|,|術式/ランサー'	, 2	, "active"	, ""),        
			new the_skill(4	, 'Magic: Impact|,|法術/衝擊波|,|術式/インパクト'	, 3	, "active"	, ""), 	// 3
			new the_skill(5	, 'Magic: Finale|,|法術/終結|,|術式／フィナウ'	, 4	, "active"	, ""), 	// 4
			new the_skill(6	, 'Magic: Wall|,|法術/障壁|,|術式/ウォール'		, 1	, "active"	, ""),        
			new the_skill(7	, 'Magic: Blast|,|法術/引爆|,|術式/ブラスト'		, 6	, "active"	, ""),        
			new the_skill(8	, 'Magic: Storm|,|法術/暴風|,|術式/ストーム'		, 7	, "active"	, ""),
			new the_skill(9	, 'Magic: Burst|,|法術/爆能|,|術式／バースト'		, 8	, "active"	, ""),
			new the_skill(10, 'Magic Mastery|,|魔法要領|,|マジックマスタリ'	, 0	, "passive"	, "M_Staff,M_MagicDevice[matk#parseInt((SLv+7)/5)%, weaponatk#3*SLv%]"),        
			new the_skill(11, 'MP Charge|,|魔力充填|,|チャージング'			, 0	, "active"	, ""),        
			new the_skill(12, 'Chain Cast|,|縮時詠唱|,|チェインキャスト'		, 11, "passive"	, "", "all[施放「法術/飛箭」後，下一招技能的詠唱時間減少${5*SLv}%]"),    // 11
			new the_skill(13, 'Power Wave|,|強射|,|パワーウェーブ'			, 12, "passive"	, "", "M_Staff[魔法彈的最大射程為${6+parseInt((SLv+1)/2)}m、傷害為(有效Atk×${40+5*SLv}%)] & M_MagicDevice[魔法彈的最大射程為${4+parseInt((SLv+1)/2)}m、傷害為(有效Atk×${70+5*SLv}%)] & all[魔法彈的最大射程為${4+parseInt((SLv+1)/2)}m、傷害為(有效Atk×${5*SLv}%)]"),	// 12
			new the_skill(14, 'Maximizer|,|魔力灌充|,|マキシマイザー'			, 13, "active"	, ""));
		for (let i=0;i<all_skilltree_type[0].STt_skilltree[2].ST_skill.length;i++)
		{
			if (all_skilltree_type[0].STt_skilltree[2].ST_skill[i].Sk_no != 10)
			{
				all_skilltree_type[0].STt_skilltree[2].ST_skill[i].Sk_W_type.push(WeapArms_map['Staff'], WeapArms_map['MagicDevice'], WeapArms_map['Other']);
				all_skilltree_type[0].STt_skilltree[2].ST_skill[i].Sk_Au_type.push(AuArms_map['MagicDevice'], AuArms_map['Other']);
			}
			else {
				all_skilltree_type[0].STt_skilltree[2].ST_skill[i].Sk_W_type.push(WeapArms_map['Staff'], WeapArms_map['MagicDevice']);
			}
		}
		all_skilltree_type[0].STt_skilltree[2].ST_skill[3].Sk_branch.push('魔能調節');
		all_skilltree_type[0].STt_skilltree[2].ST_skill[11].Sk_branch.push('快速詠唱');
		all_skilltree_type[0].STt_skilltree[2].ST_skill[12].Sk_branch.push('魔法彈');
	
	/*======================================================================================
	======================================================================================*/	
		all_skilltree_type[0].STt_skilltree[3].ST_skill.push(
			new the_skill(1	, 'Smash|,|重擊|,|スマッシュ'						, 0	, "active"	, ""), 	// 0
			new the_skill(2	, 'Bash|,|痛擊|,|バッシュ'							, 1	, "active"	, ""),        
			new the_skill(3	, 'Shell Break|,|穿甲|,|シェルブレイク'				, 2	, "active"	, ""),        
			new the_skill(4	, 'Heavy Smash|,|猛爆拳|,|ヘビースマッシュ'			, 3	, "active"	, ""), 	// 3
			new the_skill(5	, 'Chariot|,|戰車猛擊|,|チャリオット'				, 4	, "active"	, ""), 	// 
			new the_skill(6	, 'Sonic Wave|,|音速波動|,|ソニックウェーブ'		, 1	, "active"	, ""),        
			new the_skill(7	, 'Earth Bind|,|震地強襲|,|アースバインド'			, 6	, "active"	, ""),        
			new the_skill(8	, 'Triple Kick|,|三段擊|,|トライアーツ'				, 7	, "active"	, ""), 	// 7
			new the_skill(9	, 'Rush|,|疾襲|,|ラッシュ'							, 8	, "active"	, ""), 	
			new the_skill(10, 'Martial Mastery|,|格鬥要領|,|マーシャルマスタリ'	, 0	, "passive"	, "M_Knuckles[atk#parseInt((SLv+7)/5)%, weaponatk#3*SLv%]"),		// 9
			new the_skill(11, 'Martial Disciple|,|體術鍛鍊|,|体術鍛錬'			, 10, "passive"	, "M_Knuckles[aspd#SLv%, aspd#10*SLv]", "all[「格鬥技能」中的攻擊技能，總傷害提升${SLv}%]"),
			new the_skill(12, 'Chakra|,|經絡脈輪|,|チャクラ'					, 11, "active"	, ""),	// 11
			new the_skill(13, 'Aggravate|,|乘勝追擊|,|ワンチャンス'				, 0	, "passive"	, "all[attack_mp_recovery#parseInt(SLv/2)]", "M_Knuckles[一般攻擊有${5*SLv}%的機率追加(有效Atk×${25+parseInt(2.5*SLv)+all_skilltree_type[0].STt_skilltree[3].ST_skill[13].calcLv*5}%)的傷害。]"),		// 12
			new the_skill(14, 'Strong Chase Attack|,|猛力追擊|,|強力な追撃'		, 13, "passive"	, "", "M_Knuckles[「乘勝追擊」的威力提升，並將有${SLv}%的機率使目標降防]"));
		for (let i=0; i<=8; ++i)
		{
			all_skilltree_type[0].STt_skilltree[3].ST_skill[i].Sk_W_type.push(WeapArms_map['Knuckles'], WeapArms_map['Other']);
			all_skilltree_type[0].STt_skilltree[3].ST_skill[i].Sk_Au_type.push(AuArms_map['Knuckles'], AuArms_map['Other']);
		}
		
		all_skilltree_type[0].STt_skilltree[3].ST_skill[11].Sk_W_type.push(WeapArms_map['Knuckles'], WeapArms_map['Other']);
		all_skilltree_type[0].STt_skilltree[3].ST_skill[11].Sk_Au_type.push(AuArms_map['Knuckles'], AuArms_map['Other']);
		
		all_skilltree_type[0].STt_skilltree[3].ST_skill[9].Sk_W_type.push(WeapArms_map['Knuckles']);
		all_skilltree_type[0].STt_skilltree[3].ST_skill[10].Sk_W_type.push(WeapArms_map['Knuckles']);
		all_skilltree_type[0].STt_skilltree[3].ST_skill[10].Sk_Au_type.push(AuArms_map['Knuckles']);
		all_skilltree_type[0].STt_skilltree[3].ST_skill[12].Sk_W_type.push(WeapArms_map['Knuckles']);
		all_skilltree_type[0].STt_skilltree[3].ST_skill[12].Sk_Au_type.push(AuArms_map['Knuckles']);
		all_skilltree_type[0].STt_skilltree[3].ST_skill[13].Sk_W_type.push(WeapArms_map['Knuckles']);
		
		all_skilltree_type[0].STt_skilltree[3].ST_skill[3].Sk_branch.push('精確追擊');
		all_skilltree_type[0].STt_skilltree[3].ST_skill[12].Sk_branch.push('追擊');
		
	/*======================================================================================
	======================================================================================*/		
		all_skilltree_type[0].STt_skilltree[4].ST_skill.push(
			new the_skill(1	, 'Dual Sword Mastery|,|雙劍要領|,|デュアルマスタリ', 0	, "passive"	, "D_1hSword+1hSword[accuracy#3*SLv%, critical_rate#8*SLv%]", "all[角色可以裝備兩把單手劍]"),
			new the_skill(2	, 'Twin Slash|,|雙弧斬|,|ツインスラッシュ'			, 1	, "active"	, ""),
			new the_skill(3	, 'Spinning Slash|,|破空刃|,|エアスライド'			, 2	, "active"	, ""),		// 2
			new the_skill(4	, 'Phantom Slash|,|幻影劍|,|ファントムレイヴ'		, 3	, "active"	, ""),		// 3
			new the_skill(5	, 'Cross Parry|,|禦空破陣|,|パリングソード'			, 1	, "active"	, ""),		// 4
			new the_skill(6	, 'Charging Slash|,|猛爆斬|,|ドラグーンソード'		, 5	, "active"	, ""),        
			new the_skill(7	, 'Shadowstep|,|劍影|,|回り込み'					, 6	, "active"	, ""),		// 6
			new the_skill(8	, 'Reflex|,|步步為營|,|ステップリアクター'			, 1	, "active"	, ""),        
			new the_skill(9	, 'Flash Blast|,|劍閃|,|フィロ・エクレール'			, 8	, "active"	, ""),		// 8
			new the_skill(10, 'Dual Sword Control|,|雙劍鍛鍊|,|双剣の鍛錬'		, 1	, "passive"	, "D_1hSword+1hSword[accuracy#5+3*SLv%, aspd#50*SLv]"),
			new the_skill(11, 'God Speed|,|神速軌跡|,|神速の軌跡'				, 10, "passive"	, "D_1hSword+1hSword[unsheathe_attack%#15+SLv, agi#SLv +Math.max(SLv-5, 0)] & all[unsheathe_attack%#5+SLv, agi#SLv +Math.max(SLv-5, 0)]"));
		for (let i=0; i<=6; ++i)
		{
			all_skilltree_type[0].STt_skilltree[4].ST_skill[i].Sk_W_type.push(WeapArms_map['DualSword']);
		}
		all_skilltree_type[0].STt_skilltree[4].ST_skill[7].Sk_W_type.push(WeapArms_map['DualSword'], WeapArms_map['Other']);
		all_skilltree_type[0].STt_skilltree[4].ST_skill[8].Sk_W_type.push(WeapArms_map['DualSword'], WeapArms_map['Other']);
		all_skilltree_type[0].STt_skilltree[4].ST_skill[9].Sk_W_type.push(WeapArms_map['DualSword']);
		all_skilltree_type[0].STt_skilltree[4].ST_skill[10].Sk_W_type.push(WeapArms_map['Other']);
			
		all_skilltree_type[0].STt_skilltree[4].ST_skill[2].Sk_branch.push('迴旋斬','風壓');
		all_skilltree_type[0].STt_skilltree[4].ST_skill[3].Sk_branch.push('幻影迷蹤','即死');
		all_skilltree_type[0].STt_skilltree[4].ST_skill[4].Sk_branch.push('防守架勢','反擊之勢');
		all_skilltree_type[0].STt_skilltree[4].ST_skill[6].Sk_branch.push('專注');
		all_skilltree_type[0].STt_skilltree[4].ST_skill[8].Sk_branch.push('二重閃光');
		
	/*======================================================================================
	======================================================================================*/	
		all_skilltree_type[0].STt_skilltree[5].ST_skill.push(
			new the_skill(1	, 'Flash Stab|,|迅捷刺突|,|フラッシュスタブ'		, 0	, "active"	, ""),		// 0
			new the_skill(2	, 'Cannon Spear|,|鴻鵠一擲|,|キャノンスピア'		, 1	, "active"	, ""),		// 1
			new the_skill(3	, 'Dragon Tail|,|龍尾|,|ドラゴンテイル'				, 2	, "active"	, ""),		// 2
			new the_skill(4	, 'Dive Impact|,|潛龍憾地|,|ダイブインパクト'		, 3	, "active"	, ""),		// 3
			new the_skill(5	, 'Dragon Tooth|,|龍牙擊|,|ドラゴントゥース'		, 3	, "active"	, ""),		// 4
			new the_skill(6	, 'Deadly Spear|,|死亡斧槍|,|デッドリースピア'		, 1	, "active"	, ""),     
			new the_skill(7	, 'Strike Stab|,|穿刺擊|,|ストライクスタブ'			, 6	, "active"	, ""),		// 6
			new the_skill(8	, 'Chronos Drive|,|時空驅動|,|クロノスドライブ'		, 7	, "active"	, ""),		// 7
			new the_skill(9	, 'Punish Ray|,|懲戒之槍|,|パニッシュレイ'			, 6	, "active"	, ""),		// 8
			new the_skill(10, 'Halberd Mastery|,|斧槍要領|,|ハルバードマスタリ'	, 0	, "passive"	, "M_Halberd[atk#parseInt((SLv+7)/5)%, weaponatk#3*SLv%]"),		// 9
			new the_skill(11, 'Critical Spear|,|凝聚心神|,|会心の捌き'			, 10, "passive"	, "M_Halberd[critical_rate#parseInt((1+SLv)/2)%, critical_rate#parseInt((1+SLv)/2)]"),	// 10
			new the_skill(12, 'Quick Aura|,|破風之勢|,|クイックオーラ'			, 0	, "active"	, ""),        
			new the_skill(13, 'War Cry of Struggle|,|逆境怒吼|,|逆境の雄叫び'	, 12, "active"	, ""),	// 12
			new the_skill(14, 'Godspeed Wield|,|神速掌握|,|神速の捌手'			, 13, "active"	, ""));
		
		all_skilltree_type[0].STt_skilltree[5].ST_skill[0].Sk_W_type.push(WeapArms_map['Halberd'], WeapArms_map['1hSword']);
		all_skilltree_type[0].STt_skilltree[5].ST_skill[1].Sk_W_type.push(WeapArms_map['Halberd']);
		all_skilltree_type[0].STt_skilltree[5].ST_skill[2].Sk_W_type.push(WeapArms_map['Halberd']);
		all_skilltree_type[0].STt_skilltree[5].ST_skill[3].Sk_W_type.push(WeapArms_map['Halberd']);
		all_skilltree_type[0].STt_skilltree[5].ST_skill[4].Sk_W_type.push(WeapArms_map['Halberd']);
		all_skilltree_type[0].STt_skilltree[5].ST_skill[5].Sk_W_type.push(WeapArms_map['Halberd'], WeapArms_map['1hSword']);
		all_skilltree_type[0].STt_skilltree[5].ST_skill[6].Sk_W_type.push(WeapArms_map['Halberd'], WeapArms_map['1hSword']);
		all_skilltree_type[0].STt_skilltree[5].ST_skill[7].Sk_W_type.push(WeapArms_map['Halberd']);
		all_skilltree_type[0].STt_skilltree[5].ST_skill[8].Sk_W_type.push(WeapArms_map['Halberd'], WeapArms_map['1hSword']);
		all_skilltree_type[0].STt_skilltree[5].ST_skill[9].Sk_W_type.push(WeapArms_map['Halberd']);
		all_skilltree_type[0].STt_skilltree[5].ST_skill[10].Sk_W_type.push(WeapArms_map['Halberd']);
		all_skilltree_type[0].STt_skilltree[5].ST_skill[11].Sk_W_type.push(WeapArms_map['Halberd'], WeapArms_map['Other']);
		all_skilltree_type[0].STt_skilltree[5].ST_skill[12].Sk_W_type.push(WeapArms_map['Halberd'], WeapArms_map['Other']);
		all_skilltree_type[0].STt_skilltree[5].ST_skill[13].Sk_W_type.push(WeapArms_map['Halberd'], WeapArms_map['Other']);
		
		all_skilltree_type[0].STt_skilltree[5].ST_skill[1].Sk_branch.push('挑擊', '猛擲');
		all_skilltree_type[0].STt_skilltree[5].ST_skill[2].Sk_branch.push('橫掃', '迴旋');
		all_skilltree_type[0].STt_skilltree[5].ST_skill[3].Sk_branch.push('潛龍一擊', '憾地震盪');
		all_skilltree_type[0].STt_skilltree[5].ST_skill[6].Sk_branch.push('強化效果');
		all_skilltree_type[0].STt_skilltree[5].ST_skill[8].Sk_branch.push('懲戒');
		all_skilltree_type[0].STt_skilltree[5].ST_skill[12].Sk_branch.push('逆境', '絕境');
		
	/*======================================================================================
	======================================================================================*/	
		all_skilltree_type[0].STt_skilltree[6].ST_skill.push(
			new the_skill(1	, 'Issen|,|一閃|,|一閃'						, 0	, "active"	, ""),		// 0
			new the_skill(2	, 'Pulse Blade|,|波動刃|,|波動刃'			, 1	, "active"	, ""),		// 1
			new the_skill(3	, 'Triple Thrust|,|三段突刺|,|三段突き'		, 2	, "active"	, ""),		// 2
			new the_skill(4	, 'Hasso Happa|,|八相發破|,|八相発破'		, 3	, "active"	, ""),        
			new the_skill(5	, 'Tenryu Ransei|,|天流亂星|,|天流乱星'		, 4	, "active"	, ""),
			new the_skill(6	, 'Garyou Tensei|,|畫龍點睛|,|画龍点睛'		, 4	, "active"	, ""),
			new the_skill(7	, 'Pommel Strike|,|刀柄打擊|,|柄打ち'		, 0	, "active"	, ""),	       
			new the_skill(8	, 'Magadachi|,|禍斷|,|禍断ち'				, 7	, "active"	, ""),		// 7
			new the_skill(9	, 'Zantei Settetsu|,|斬釘截鐵|,|斬釘截鉄'	, 8	, "active"	, ""),		// 8
			new the_skill(10, 'Bushido|,|武士道|,|武士道'				, 0	, "passive"	, "M_Katana[max_hp#10*SLv, max_mp#10*SLv, atk#parseInt((SLv+7)/5)%, weaponatk#3*SLv%] & all[max_hp#10*SLv, max_mp#10*SLv]"),		// 9
			new the_skill(11, 'Shukuchi|,|縮地法|,|縮地法'				, 10, "passive"	, ""),	// 10
			new the_skill(12, 'Two-Handed|,|雙手合持|,|両手持ち'		, 10, "passive"	, "noSub_Katana[accuracy#SLv%, stability#SLv, critical_rate#SLv] & noSub[accuracy#SLv%, stability#parseInt(SLv/2), critical_rate#parseInt(SLv/2)]", "noSub_Katana[暴擊發生時，傷害公式中的有效Atk提升至原本的${100+5*SLv}%]"),	// 11
			new the_skill(13, 'Meikyo Shisui|,|明鏡止水|,|明鏡止水'		, 12, "active"	, ""),	// 12
			new the_skill(14, 'Kairiki Ranshin|,|怪力亂神|,|怪力乱神'	, 13, "active"	, ""));	// 13
		for (let i=0; i<=8; ++i)
		{
			all_skilltree_type[0].STt_skilltree[6].ST_skill[i].Sk_W_type.push(WeapArms_map['Katana']);
			all_skilltree_type[0].STt_skilltree[6].ST_skill[i].Sk_Au_type.push(AuArms_map['Katana']);
		}
		for (let i=9; i<=13; ++i)
		{
			all_skilltree_type[0].STt_skilltree[6].ST_skill[i].Sk_W_type.push(WeapArms_map['Katana'], WeapArms_map['Other']);
			all_skilltree_type[0].STt_skilltree[6].ST_skill[i].Sk_Au_type.push(AuArms_map['Katana'], AuArms_map['Other']);
		}
		
		all_skilltree_type[0].STt_skilltree[6].ST_skill[0].Sk_branch.push('斬切', '收合');
		all_skilltree_type[0].STt_skilltree[6].ST_skill[1].Sk_branch.push('波動弱化', '段數波動');
		all_skilltree_type[0].STt_skilltree[6].ST_skill[2].Sk_branch.push('鋒芒隱現');
		all_skilltree_type[0].STt_skilltree[6].ST_skill[4].Sk_branch.push('斬納');
		all_skilltree_type[0].STt_skilltree[6].ST_skill[7].Sk_branch.push('半月弧', '靜止');
		all_skilltree_type[0].STt_skilltree[6].ST_skill[8].Sk_branch.push('絕', '斷');
		all_skilltree_type[0].STt_skilltree[6].ST_skill[9].Sk_branch.push('心法', '熟練度');
		all_skilltree_type[0].STt_skilltree[6].ST_skill[10].Sk_branch.push('瞬疾移行');
		all_skilltree_type[0].STt_skilltree[6].ST_skill[11].Sk_branch.push('心眼');
		all_skilltree_type[0].STt_skilltree[6].ST_skill[12].Sk_branch.push('犧牲守備');
		all_skilltree_type[0].STt_skilltree[6].ST_skill[13].Sk_branch.push('潛能激發');
		
	})();
} catch(e) {
	errorForStop_msg("Initialize Skill-list<0> false.", e);
}