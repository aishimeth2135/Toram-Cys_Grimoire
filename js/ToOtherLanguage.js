	
	function getCur_languageNo(){
		let cnt = 0;
		let doc = document.getElementById('selLang_' + String(cnt));
		while ( doc )
		{
			if (document.getElementById('selLang_' + String(cnt)).className == 'languageList_Cur')
			{
				return cnt;
			}
			++cnt;
			doc = document.getElementById('selLang_' + String(cnt));
		}
		return (-1);
	}
	
	var languageNo_cur = -1;
	function selectLanguage(temp){
		let T_langno = parseInt(temp.getAttribute("data-langno"));
		/* 	0: English
			1: 中文
			2: 日本語 */
		if (T_langno == getCur_languageNo()) { return; }
		
		let skillTreeTypeNameAry = [];
		let skillTreeNameAry = [];
		let skillNameAry = [];
		let armsTitleAry = [];
		
		let SI_name_ary = [];
		let SI_unit_ary = [];
		
		switch (T_langno)
		{
			case 0:
				All_WeapType = ['1h-S.', '2h-S.', 'Bow', 'Bowgun', 'Staff', 'Magic.', 'Knuck.', 'Halberd', 'Dual-S.', 'Katana', 'Other'];
				All_AuType = ['Dagger', 'Shield', 'Arrow', 'Magic.', 'Knuck.', 'Katana', 'Other'];
				All_bodyType = ['Norm.', 'Dodge', 'Defen.'];
				
				cy_character.allWeapType = ['1h Sword', '2h Sword', 'Bow', 'Bowgun', 'Staff', 'Magic Device', 'Knuckle', 'Halberd', 'Katana', 'none'];
				cy_character.allAuType = ['Dagger', 'Shield', 'Arrow', 'Magic Device', 'Knuckle', 'Katana', 'Other', '1h Sword'];
				cy_character.allBodyType = ['Normal', 'Dodge', 'Defence', 'none'];
				
				armsTitleAry = ['Main Weapon', 'Sub-Weapon', 'Body Armor'];
				
				skillTreeTypeNameAry = ['Weapon', 'Buff', 'Assist'];
				skillTreeNameAry = [
					['Blade Skills', 'Shot Skills', 'Magic Skills', 'Martial Skills', 'Dual Sword Skills', 'Halberd Skills', 'Mononofu Skills'],
					['Guard Skills', 'Shield Skills', 'Dagger Skills', 'Knight Skills', 'Hunter Skills', 'Priest Skills'],
					['Support Skills', 'Battle Skills', 'Survival Skills']
				];
				skillNameAry = [
					[
						['Hard Hit', 'Astute', 'Trigger Slash', 'Rampage', 'Meteor Breaker', 'Sonic Blade', 'Spiral Air', 'Buster Blade', 'Sword Tempest', 'Sword Mastery', 'Quick Slash', 'Sword Techniques', 'War Cry', 'Berserk'],
						['Power Shot', 'Bullseye', 'Snipe', 'Arrow Rain', 'Cross Fire', 'Moeba Shot', 'Paralysis Shot', 'Smoke Dust', 'Arm Break', 'Shot Mastery', 'Sneak Attack', 'Long Range', 'Quick Draw', 'Decoy Shot'],
						['Magic: Arrows', 'Magic: Javelin', 'Magic: Lances', 'Magic: Impact', 'Magic: Finale', 'Magic: Wall', 'Magic: Blast', 'Magic: Storm', 'Magic: Burst', 'Magic Mastery', 'MP Charge', 'Chain Cast', 'Power Wave', 'Maximizer'],
						['Smash', 'Bash', 'Shell Break', 'Heavy Smash', 'Chariot', 'Sonic Wave', 'Earth Bind', 'Triple Kick', 'Rush', 'Martial Mastery', 'Martial Disciple', 'Chakra', 'Aggravate', 'Strong Chase Attack'],
						['Dual Sword Mastery', 'Twin Slash', 'Spinning Slash', 'Phantom Slash', ' Cross Parry', 'Charging Slash', 'Shadowstep', 'Reflex', 'Flash Blast', 'Dual Sword Control', 'God Speed'],
						['Flash Stab', 'Cannon Spear', 'Dragon Tail', 'Dive Impact', 'Dragon Tooth', 'Deadly Spear', 'Strike Stab', 'Chronos Drive', 'Punish Ray', 'Halberd Mastery', 'Critical Spear', 'Quick Aura', 'War Cry of Struggle', 'Godspeed Wield'],
						['Issen', 'Pulse Blade', 'Triple Thrust', 'Hasso Happa', 'Tenryu Ransei', 'Garyou Tensei', 'Pommel Strike', 'Magadachi', 'Zantei Settetsu', 'Bushido', 'Shukuchi', 'Two-Handed', 'Meikyo Shisui', 'Kairiki Ranshin']
					],
					[
						['Heavy Armor', 'Advanced Guard', 'Light Armor', 'Advanced Evasion'],
						['Shield Mastery', 'Shield Bash', 'Shield Cannon', 'Guard Strike', 'Force Shield', 'Magical Shield', 'Protection', 'Aegis', 'Guardian'],
						['Throwing Knife', 'Spike Dart', 'Gatling Knife', 'Amazing Throw', 'Poison Dagger', 'Double Throw', 'Hidden Arm', 'Intense Knife', 'Mail Breaker'],
						['Assault Attack', 'Parry', 'P. Defense', 'Provoke', 'Rage Sword', 'Binding Strike'],
						['Kick', 'Sunrise Arrow', 'Magic Arrow', 'Sleep Trap', 'Bear Trap', 'Land Mine'],
						['Bless', 'Gloria', 'Enhanced Bless', 'Holy Fist', 'Holy Light', 'Ether Barrier']
					],
					[
						['Play Dead', 'EXP Gain Up', 'Drop Rate Up', 'Safe Rest', 'HP Boost', "Fighter's High", 'Short Rest', 'MP Boost', 'Sober Analysis'],
						['First Aid', 'Mini Heal', 'Recovery', 'Sanctuary', 'Heal', 'Life Recovery', 'Brave Aura', 'High Cycle', 'Quick Motion', 'Mana Recharge', 'Magic Barrier', 'Immunity', 'Fast Reaction'],
						['Magic UP', 'Concentrate', 'Desperate Resist', 'Increased Energy', 'Attack UP', 'Whack', 'Critical UP', 'Intimidating Power', 'Defence UP', 'Dodge UP', 'Accuracy UP', 'Defense Mastery']
					]
				];
				
				SI_name_ary = ['O', 'O', 'O', 'O', '<u>Other</u>', 'O', 'O', 'O', 'Equipping｜ ', 'MP Cost｜ ', 'Range｜ ', 'Category｜ ', 'O', 'O'                          , 'O', 'O', 'Skill Type｜ ', 'Action Time｜ ', 'Casting Time｜ ', 'Charging Time｜ ', 'Damege Frequency｜ ', '作用次數｜', 'AOE Center｜ ', 'AOE Radius｜ ', '<br />Duration｜ ', 'After successful hit, there is ', 'O', 'O', 'O', 'O'];
				SI_unit_ary = ['O', 'O', 'O', 'O', 'O'           , 'O', 'O', 'O', 'O'           , 'O'         , 'O'       , 'O'          , 'O', '</u>&nbsp;put into Combo.', 'O', 'O', 'O'          , 'O'           , ' sec'          , ' sec'           , ' times'             , ' times'    , 'O'            , 'm'            , ' sec'            , '% chance to make the enemy '    , '.', 'O', 'O', 'O'];
				
				break;
			case 1:
				All_WeapType = ['單手劍', '雙手劍', '弓', '弩', '法杖', '魔導具', '拳套', '旋風槍', '雙劍', '拔刀劍', '其它'];
				All_AuType = ['小刀', '盾牌', '箭矢', '魔導具', '拳套', '拔刀劍', '其它'];
				All_bodyType = ['一般', '輕量化', '重量化'];
				
				cy_character.allWeapType = ['單手劍', '雙手劍', '弓', '弩', '法杖', '魔導具', '拳套', '旋風槍', '拔刀劍', '空手'];;
				cy_character.allAuType = ['小刀', '盾牌', '箭矢', '魔導具', '拳套', '拔刀劍', '無', '單手劍'];
				cy_character.allBodyType = ['一般', '輕量化', '重量化', '無'];
				
				armsTitleAry = ['主手裝備', '副手裝備', '身體裝備'];
				
				skillTreeTypeNameAry = ['武器技能', '強化技能', '輔助技能'];
				skillTreeNameAry = [
					['劍術技能', '射擊技能', '魔法技能', '格鬥技能', '雙劍技能', '斧槍技能', '武士技能'],
					['防衛技能', '防護技能', '刀術技能', '騎士精神', '狩獵技能', '祭司技能'],
					['生存本能', '輔助技能', '好戰份子']
				];
				skillNameAry = [
					[
						['威力攻擊', '迅捷攻擊', '橫掃千軍', '爆氣斬', '流星墜擊', '音速斬切', '真空刃', '風暴氣流', '破壞之刃', '#劍術要領', '#劍速提升', '#大師級劍術', '戰吼', '狂戰士之怒'], 
						['威力射擊', '渦輪射擊', '弱點狙擊', '箭雨', '交叉火線', '黏液射擊', '麻痺射擊', '煙霧彈', '斷腕擊', '#弓術鍛鍊', '匿蹤', '#遠程狙擊', '#回氣', '分身射手'],
						['法術/飛箭', '法術/長槍', '法術/魔法槍', '法術/衝擊波', '法術/終結', '法術/障壁', '法術/引爆', '法術/暴風', '法術/爆能', '#魔法要領', '魔力充填', '#縮時詠唱', '#強射', '魔力灌充'],
						['重擊', '痛擊', '穿甲', '猛爆拳', '戰車猛擊', '音速波動', '震地強襲', '三段擊', '疾襲', '#格鬥要領', '#體術鍛鍊', '經絡脈輪', '#乘勝追擊', '#猛力追擊'],
						['#雙劍要領', '雙弧斬', '破空刃', '幻影劍', '禦空破陣', '猛爆斬', '劍影', '步步為營', '劍閃', '#雙劍鍛鍊', '#神速軌跡'],
						['迅捷刺突', '鴻鵠一擲', '龍尾', '潛龍憾地', '龍牙擊', '死亡斧槍', '穿刺擊', '時空驅動', '懲戒之槍', '#斧槍要領', '#凝聚心神', '破風之勢', '逆境怒吼', '神速掌握'],
						['一閃', '波動刃', '三段突刺', '八相發破', '天流亂星', '畫龍點睛', '刀柄打擊', '禍斷', '斬釘截鐵', '#武士道', '#縮地法', '#雙手合持', '明鏡止水', '怪力亂神']
					],
					[
						['#重防具要領', '#進階阻擋', '#輕防具要領', '#進階閃躲'],
						['#盾牌要領', '重盾擊', '飛盾', '傷害反彈', '#防護盾甲', '#防魔盾甲', '防禦界限', '魔法庇護', '移花接木'],
						['飛刃', '定影針', '加特林機槍', '#神乎其技', '毒飛刃', '#連環刃', '#無影刃', '#威力增幅', '#裝甲破壞'],
						['衝刺', '#卸力', '完善守備', '挑釁', '憤怒的一擊', '繫影強襲'],
						['腿踢', '旭日之箭', '力量之箭', '沉睡陷阱', '絆腳陷阱', '猛爆地雷'],
						['祝福', '榮耀頌歌', '強化祝福', '聖拳之裁', '神聖光輝', '空靈障壁']
					],
					[
						['#裝死', '#經驗值提升', '#掉寶率提升', '#安心休息', '#HP突破', '#游刃有餘', '#喘一口氣', '#MP突破', '#沉著以對'],
						['#急救', '治癒術', '異常抗體', '聖域', '癒合', '生命能源', '勇氣泉源', '高速詠域', '高速行動', '魔力能源', '魔法防護', '異常防護', '神速反應'],
						['#提升魔力', '#專注', '#頑強抵抗', '#魔力增幅', '#提升攻擊力', '#強打', '#提升暴擊率', '#威嚇之力', '#提升防禦率', '#提升迴避率', '#提升命中率', '#守護要訣']
					]
				];
				
				SI_name_ary = ['O', 'O', 'O', 'O', '<u>額外加成</u>', 'O', 'O', 'O', '適用｜', 'MP消耗｜', '射程｜', '類型｜', 'O', 'O'             , 'O', 'O', '作用方式｜', '動作時間｜', '詠唱時間｜', '蓄力時間｜', '傷害次數｜', '作用次數｜', '<br>範圍中心｜', '影響半徑｜', '<br />持續時間｜', '_@命中成功後，有', 'O' , 'O', 'O', 'O'];
				SI_unit_ary = ['O', 'O', 'O', 'O', 'O'              , 'O', 'O', 'O', 'O'     , 'O'       , 'O'     , 'O'     , 'O', '</u>放入連撃。', 'O', 'O', 'O'         , 'O'         , '秒'        , '秒'        , '次'        , '次'        , 'O'             , 'O'         , '秒'              , '%機率使敵人'     , '。', 'O', 'O', 'O'];
				break;
			case 2:
				All_WeapType = ['片手剣', '両手剣', '弓', '自動弓', '杖', '魔導具', '手甲', '旋風槍', '抜刀剣', 'その他'];
				All_AuType = ['短剣', '盾', '矢', '魔導具', '手甲', '抜刀剣', 'その他'];
				All_bodyType = ['通常', '軽量化', '重量化'];
				
				cy_character.allWeapType = ['片手剣', '両手剣', '弓', '自動弓', '杖', '魔導具', '手甲', '旋風槍', '双剣', '抜刀剣', 'なし'];;
				cy_character.allAuType = ['短剣', '盾', '矢', '魔導具', '手甲', '抜刀剣', 'なし', '片手剣'];
				cy_character.allBodyType = ['通常', '軽量化', '重量化', 'なし'];
				
				armsTitleAry = ['メイン装備', 'サブ装備', '体装備'];
				
				skillTreeTypeNameAry = ['武器スキル', '強化スキル', '補助スキル']; //スキル
				skillTreeNameAry = [
					['ブレードスキル', 'シュートスキル', 'マジックスキル', 'マーシャルスキル', 'デュアルソードスキル', 'ハルバードスキル', 'モノノフスキル'],
					['ガードスキル', 'シールドスキル', 'ナイフスキル', 'ナイトスキル', 'プリーストスキル', 'ハンタースキル'],
					['サポートスキル', 'バトルスキル', 'サバイバルスキル']
				];
				skillNameAry = [
					[
						['ハードヒット', 'アステュート', 'トリガースラッシュ', 'ランページ', 'メテオブレイカー', 'アクセルブレード', 'スパイラルエアー', 'バスターブレード', 'ソードテンペスト', 'ブレードマスタリ', '素早い斬撃', '匠の剣術', 'ウォークライ', 'バーサーク'],
						['パワーシュート', 'ワンホイール', 'スナイピング', 'アローレイン', 'クロスファイア', 'メーバショット', 'パライズショット', 'スモークダスト', 'アームブレイク', 'シュートマスタリ', 'ハイドアタック', 'ロングレンジ', 'クイックドロー', 'デコイシューター'],
						['術式/アロー', '術式/ジャベリン', '術式/ランサー', '術式/インパクト', '術式／フィナウ', '術式/ウォール', '術式/ブラスト', '術式/ストーム', '術式／バースト', 'マジックマスタリ', 'チャージング', 'チェインキャスト', 'パワーウェーブ', 'マキシマイザー'],
						['スマッシュ', 'バッシュ', 'シェルブレイク', 'ヘビースマッシュ', 'チャリオット', 'ソニックウェーブ', 'アースバインド', 'トライアーツ', 'ラッシュ', 'マーシャルマスタリ', '体術鍛錬', 'チャクラ', 'ワンチャンス', '強力な追撃'],
						['デュアルマスタリ', 'ツインスラッシュ', 'エアスライド', 'ファントムレイヴ', 'パリングソード', 'ドラグーンソード', '回り込み', 'ステップリアクター', 'フィロ・エクレール', '双剣の鍛錬', '神速の軌跡'],
						['フラッシュスタブ', 'キャノンスピア', 'ドラゴンテイル', 'ダイブインパクト', 'ドラゴントゥース', 'デッドリースピア', 'ストライクスタブ', 'クロノスドライブ', 'パニッシュレイ', 'ハルバードマスタリ', '会心の捌き', 'クイックオーラ', '逆境の雄叫び', '神速の捌手'],
						['一閃', '波動刃', '三段突き', '八相発破', '天流乱星', '画龍点睛', '柄打ち', '禍断ち', '斬釘截鉄', '武士道', '縮地法', '両手持ち', '明鏡止水', '怪力乱神']
					],
					[
						['重防具マスタリ', 'アドバンスガード', ' 軽防具マスタリ', 'アドバンスフリー'],
						['シールドマスタリ', 'シールドバッシュ', 'シールドキャノン', 'ガードストライク', 'フォースシールド', 'マジカルシールド', 'プロテクション', 'イージス', 'ガーディアン'],
						['スローイング', 'スバイクダート', 'ガトリングナイフ', '脅威の投擲術', 'ポイズンダガー', 'ダブルスロー', 'セカンドアーム', 'インテンスナイフ', 'メイルブレイカー'],
						['アサルトアタック', 'パリィ', 'Pディフェンス', 'プロボーグ', 'レイジソード', 'バインドストライク'],
						['キックバック', 'サンライズアロー', 'フォースアロー', 'スリープトラップ', 'トラバサミ', 'エクスプローシブ'],
						['ブレス', 'グロリア', 'ブレス強化', 'ホーリーフィスト', 'ホーリーライト', 'エーテルコート']
					],
					[
						['死んだふり', '経験値アップ', '収集率アップ', '安全な休憩', 'ＨＰブースト', '余裕ある戦闘', '小さな息抜き', 'ＭＰブースト', '冷静な戦術'],
						['応急手当', 'ぷちヒール', 'リカバリー', 'サンクチュアリ', 'ヒール', 'ライフリカバリー', 'ブレイブオーラ', 'ハイサイクル', 'クイックモーション', 'マナリチャージ', 'マジックバリア', 'ディジートシール', 'ハイリアクション'],
						['魔法力up', '集中', '必死の抵抗', '更なる魔力', '攻撃力up', '強打', 'クリティカルup', '脅威の威力', '防御力up', '回避力up', '命中up', '守備の心得']
					]
				];
				
				SI_name_ary = ['O', 'O', 'O', 'O', '<u>Other</u>', 'O', 'O', 'O', 'Equipping｜ ', 'MP Cost｜ ', 'Range｜ ', 'Category｜ ', 'O', 'O'                    , 'O', 'O', 'Skill Type｜ ', 'Action Time｜ ', 'Casting Time｜ ', 'Charging Time｜ ', 'Damege Frequency｜ ', '作用次數｜', 'AOE Center｜ ', 'AOE Radius｜ ', '<br />Duration｜ ', 'After successful hit, there is ', 'O', 'O', 'O', 'O'];
				SI_unit_ary = ['O', 'O', 'O', 'O', 'O'           , 'O', 'O', 'O', 'O'           , 'O'         , 'O'       , 'O'          , 'O', '</u>&nbsp;put into Combo.', 'O', 'O', 'O'      , 'O'           , ' sec.'          , ' sec.'           , ' times'             , ' times'    , 'O'            , 'm'            , ' sec'            , '% chance to make the enemy '    , '.', 'O', 'O', 'O'];
				break;
		}
		//能力清單
		for (let i=0; i<all_SI.length; ++i)
		{
			if (SI_name_ary[i] != 'O')
			{
				all_SI[i].SI_name = SI_name_ary[i];
			}
			if (SI_unit_ary[i] != 'O')
			{
				all_SI[i].SI_unit = SI_unit_ary[i];
			}
		}
		// ================================== 技能樹類型、技能樹、技能名稱
		for (let i=0; i<all_skilltree_type.length; ++i)
		{
			all_skilltree_type[i].STt_name = skillTreeTypeNameAry[i];
			for (let j=0; j<all_skilltree_type[i].STt_skilltree.length; ++j)
			{
				all_skilltree_type[i].STt_skilltree[j].ST_name = skillTreeNameAry[i][j];
				for (let k=0; k<all_skilltree_type[i].STt_skilltree[j].ST_skill.length; ++k)
				{
					if ( all_skilltree_type[i].STt_skilltree[j].ST_skill[k].Sk_name.includes('#') && !(skillNameAry[i][j][k].includes('#')) )
					{
						all_skilltree_type[i].STt_skilltree[j].ST_skill[k].Sk_name = '#' + skillNameAry[i][j][k];
					}
					else {
						all_skilltree_type[i].STt_skilltree[j].ST_skill[k].Sk_name = skillNameAry[i][j][k];
					}
					//console.log(`i:${i}, j:${j}, k:${k}`);
				}
			}
		}
		for (let i=0; i<armsTitleAry.length; ++i)
		{
			document.getElementById('armsTitle_' + String(i)).innerHTML = armsTitleAry[i];
		}
		
		update_skillTreeTypeBtnList();				//重置技能類型名稱
		update_SkillAlloSimu_STList();				//重置配點模擬器的技能樹清單
		
		(function (){
			let T_code = document.getElementById('SkillAlloSimu_SaveCode_text').value;
			SkillAlloSimu_SaveCode_Save();
			let Tc = document.getElementById('SkillAlloSimu_Setting_closeMenuList').checked;
			document.getElementById('SkillAlloSimu_Setting_closeMenuList').checked = false;
			SkillAlloSimu_SaveCode_Load();
			document.getElementById('SkillAlloSimu_Setting_closeMenuList').checked = Tc;
			document.getElementById('SkillAlloSimu_SaveCode_text').value = T_code;
		})();
		if (getCur_languageNo() != -1)
		{
			document.getElementById('selLang_' + String(getCur_languageNo())).className = '';
		}
		temp.className = 'languageList_Cur';

		// ================================== 重置裝備模擬器能力清單
		resetInnerLang(document);
	}
	
	function resetInnerLang(_dom){
		if ( document.querySelectorAll )
		{
			let _ary = _dom.querySelectorAll('a[data-langtext]');
			for (let i=0; i<_ary.length; ++i)
			{
				let _t = _ary[i].getAttribute('data-langtext').split('|,|');
				_t = ( _t[getCur_languageNo()] ) ? _t[getCur_languageNo()] : _t[0];
				_t = ( _t.includes('${') ) ? eval("`" + _t + "`") : _t;
				_ary[i].innerHTML = _t;
			}
			_ary = _dom.querySelectorAll('input[data-langtext]');
			for (let i=0; i<_ary.length; ++i)
			{
				let _t = _ary[i].getAttribute('data-langtext').split('|,|');
				_t = ( _t[getCur_languageNo()] ) ? _t[getCur_languageNo()] : _t[0];
				_t = ( _t.includes('${') ) ? eval("`" + _t + "`") : _t;
				_ary[i].value = _t;
			}
			_ary = _dom.querySelectorAll('input[data-langplaceholder]');
			for (let i=0; i<_ary.length; ++i)
			{
				let _t = _ary[i].getAttribute('data-langplaceholder').split('|,|');
				_t = ( _t[getCur_languageNo()] ) ? _t[getCur_languageNo()] : _t[0];
				_t = ( _t.includes('${') ) ? eval("`" + _t + "`") : _t;
				_ary[i].placeholder = _t;
			}
		}
		else {
			let _ary = _dom.getElementsByTagName('a');
			for (let i=0; i<_ary.length; ++i)
			{
				if ( !_ary[i].hasAttribute('data-langtext') ) continue;
				let _t = _dom.getAttribute('data-langtext').split('|,|');
				_t = ( _t[getCur_languageNo()] ) ? _t[getCur_languageNo()] : _t[0];
				_t = ( _t.includes('${') ) ? eval("`" + _t + "`") : _t;
				_ary[i].innerHTML = _t;
			}
			_ary = _dom.getElementsByTagName('input');
			for (let i=0; i<_ary.length; ++i)
			{
				if ( !_ary[i].hasAttribute('data-langtext') ) continue;
				let _t = _dom.getAttribute('data-langtext').split('|,|');
				_t = ( _t[getCur_languageNo()] ) ? _t[getCur_languageNo()] : _t[0];
				_t = ( _t.includes('${') ) ? eval("`" + _t + "`") : _t;
				_ary[i].value = _t;
			}
			_ary = _dom.getElementsByTagName('input');
			for (let i=0; i<_ary.length; ++i)
			{
				if ( !_ary[i].hasAttribute('data-langplaceholder') ) continue;
				let _t = _ary[i].getAttribute('data-langplaceholder').split('|,|');
				_t = ( _t[getCur_languageNo()] ) ? _t[getCur_languageNo()] : _t[0];
				_t = ( _t.includes('${') ) ? eval("`" + _t + "`") : _t;
				_ary[i].placeholder = _t;
			}
		}
	}