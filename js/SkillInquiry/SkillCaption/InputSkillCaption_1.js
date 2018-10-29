
	/* let WeapArms_map = {'1hSword': 0, '2hSword': 1, 'Bow': 2, 'Bowgun': 3, 'Staff': 4, 'MagicDevice': 5, 'Knuckles': 6, 'Halberd': 7, 'DualSword': 8, 'Katana': 9, 'Other': 10};
		let AuArms_map = {'Dagger': 0, 'Shield': 1, 'Arrow': 2, 'MagicDevice': 3, 'Knuckles': 4, 'Katana': 5, 'Other': 6}; */
	function input_skillCaptionSI_1(No_STT, No_ST, No_S){
		
		No_STT = Number(No_STT);	//0開始
		No_ST = Number(No_ST);		//0開始
		No_S = Number(No_S);		//1開始
		let T_no_S = cy_skillSystem.skillTreeType[No_STT].skillTree[No_ST].skill[No_S].no;
		let T_skillLv = get_skillLv();
		let SI = cy_skillSystem.skillCaptionItem;
		//初始化Skill Item
		for (let i=8; i<=15; ++i)
		{
			SI[i].value = 0;
			SI[i].name = SI[i].def_name;
			SI[i].unit = SI[i].def_unit;
		}
			
		//根據技能編號輸入value
		switch (No_STT)
		{
			case 0:
				switch (No_ST)
				{
					case 0:
						switch (T_no_S)
						{
							case 1:
								SI[8].value = '1h Sword / 2h Sword|,|單手劍/雙手劍';
								SI[9].value = 100;
								SI[10].value = 2;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '使用武器蠻橫地打人，<br />一定機率使敵人膽怯。';
								SI[15].value = '能造成控制效果、速度不慢的基礎技能。裝備單手劍時有很高的膽怯機率加成。';
								break;
							case 2:
								SI[8].value = '1h Sword / 2h Sword|,|單手劍/雙手劍';
								SI[9].value = 200;
								SI[10].value = 2;
								SI[11].value = '傷害、瞬發、狀態';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '迅速敏捷地給予強力一擊。<br />成功發動後數秒內，<br />暴擊率增加25。';
								SI[15].value = '速度極快的技能，且附帶增加暴擊率的狀態。裝備單手劍時MP消耗減半；裝備雙手劍時增加的暴擊率會轉為兩倍。';
								break;
							case 3:
								SI[8].value = '1h Sword / 2h Sword|,|單手劍/雙手劍';
								SI[9].value = 300 - 100*parseInt((T_skillLv+4)/10);
								SI[10].value = 2;
								SI[11].value = '傷害、瞬發、狀態';
								SI[12].value = '火屬性<br />物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '殺敵的同時將力量灌注到劍上。<br />在下個技能發動前，提高攻擊時的MP回復效果，<br />可加速一次動作。';
								SI[15].value = '附帶的狀態可增加攻擊MP恢復，並可減少增加下一次技能的動作時間。';
								break;
							case 4:
								SI[8].value = '1h Sword / 2h Sword|,|單手劍/雙手劍';
								SI[9].value = 500;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '狀態、瞬發、效果';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '以凌厲攻勢連續攻擊。<br />10次一般攻擊呈現飛躍性成長。<br />十次攻擊結束後，發出強大攻擊。<br />無法重複使用。';
								SI[15].value = '狀態持續期間，可使普通攻擊附帶額外傷害及額外的攻擊MP恢復。';
								break;
							case 5:
								SI[8].value = '1h Sword / 2h Sword|,|單手劍/雙手劍';
								SI[9].value = 600;
								SI[10].value = 2;
								SI[11].value = '狀態、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 6:
								SI[8].value = '1h Sword / 2h Sword|,|單手劍/雙手劍';
								SI[9].value = 200;
								SI[10].value = 4*parseInt(2+(T_skillLv-1)/3);
								SI[11].value = '傷害、瞬發、效果、位移';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '逼近敵人，發動犀利的突擊。<br />技能等級提升後，射程與暴擊率增加。';
								SI[15].value = '可以從極遠距離迅速接近敵人的技能。一定時間內連續施放將會發動強化後的技能。';
								break;
							case 7:
								SI[8].value = '1h Sword / 2h Sword|,|單手劍/雙手劍';
								SI[9].value = 300;
								SI[10].value = 2;
								SI[11].value = '傷害、瞬發、狀態';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '發動銳利刺擊的同時產生真空刃。<br />此技能不會觸發暴擊。<br />命中真空刃後數秒內，<br />暴擊傷害提升。';
								SI[15].value = '必定不發生暴擊的技能，附帶的狀態可於短時間內小幅提升暴擊傷害。';
								break;
							case 8:
								SI[8].value = '1h Sword / 2h Sword|,|單手劍/雙手劍';
								SI[9].value = 400;
								SI[10].value = 12;
								SI[11].value = '傷害、瞬發、設置';
								SI[12].value = '物理傷害/魔法慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '劍之所及，暴風乃至。<br />產生龍捲風，給予持續性傷害。<br />風暴產生時，一度將四周敵人捲入。';
								SI[15].value = '總傷害高的範圍傷害技能，施放動作時間較久。';
								break;
							case 9:
								SI[8].value = '1h Sword / 2h Sword|,|單手劍/雙手劍';
								SI[9].value = 300;
								SI[10].value = 7;
								SI[11].value = '狀態、瞬發、恢復';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 10:
								SI[8].value = '單手劍/雙手劍(主手)';
								SI[11].value = '被動、加成';
								SI[14].value = '劍技更上一層樓。<br />裝備單手劍或雙手劍時的攻擊力增加。';
								SI[15].value = '主手裝備單手劍、雙手劍時，能顯著提升攻擊力的被動技能。其加成受角色攻擊力及武器攻擊力影響。';
								break;
							case 11:
								SI[8].value = '1h Sword / 2h Sword|,|單手劍/雙手劍';
								SI[11].value = '被動、加成';
								SI[14].value = '減少多餘的動作，提升劍速。<br />裝備單手劍或雙手劍時的攻擊速度增加。';
								SI[15].value = '主手裝備單手劍、雙手劍時，能小幅提升攻擊速度的被動技能。';
								break;
							case 12:
								SI[8].value = '1h Sword / 2h Sword|,|單手劍/雙手劍';
								SI[11].value = '被動、加成';
								SI[14].value = '學習劍的真髓。<br />劍術技能威力增加。';
								SI[15].value = '學習後，可中幅提升劍術技能中所有攻擊技能的傷害。';
								break;
							case 13:
								SI[8].value = '無限制';
								SI[9].value = 300;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '狀態、瞬發、加成';
								SI[14].value = '提高戰意的咆哮。<br />增加ATK一段時間。<br />發動時，解除「畏懼」狀態。';
								SI[15].value = '可中幅提升物理攻擊力的狀態技能。裝備單手劍時持續時間大幅增加；裝備雙手劍時增加的攻擊力上升。';
								break;
							case 14:
								SI[8].value = '無限制';
								SI[9].value = 500;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '狀態、瞬發、加成、效果';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;
						}
						break;
					case 1:
						switch (T_no_S)
						{
							case 1:
								SI[8].value = '弓/弩/箭矢';
								SI[9].value = 100;
								SI[10].value = 16;
								SI[11].value = '傷害、須蓄力';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '增強衝擊力的箭術攻擊。<br />提高等級可縮短蓄力時間。<br />一定機率使敵人「翻覆」。<br />對方為「遲緩」狀態時，暴擊率增加。';
								SI[15].value = '可以遠距離施放、高機率造成翻覆狀態的技能。蓄力時間稍長。';
								break;
							case 2:
								SI[8].value = '弓/弩/箭矢';
								SI[9].value = 200;
								SI[10].value = 12;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '鎖定目標發動連續攻擊。<br />一箭比一箭威力更強。';
								SI[15].value = '自帶一定物理貫穿的技能，可用於對付高防禦的敵人。';
								break;
							case 3:
								SI[8].value = '弓/弩/箭矢';
								SI[9].value = 400;
								SI[10].value = 16;
								SI[11].value = '傷害、須蓄力';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '狙擊敵人的弱點。<br />升級可縮短蓄力時間。<br />一定機率使敵人「降防」。<br />對方為「盲目」狀態時則必定命中。';
								SI[15].value = '傷害很高的單體指定技能。無裝備弓時此技能會降低暴擊率。';
								break;
							case 4:
								SI[8].value = '弓/弩/箭矢';
								SI[9].value = 300;
								SI[10].value = 12;
								SI[11].value = '傷害、瞬發、設置';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '朝天空施放大量的箭。<br />每隔一定時間便落下箭雨。<br />給予敵人傷害。';
								SI[15].value = '可以遠距離施放的設置型範圍技能。裝備弓時的施放動作時間較長、作用次數較多。';
								break;
							case 5:
								SI[8].value = '弓/弩/箭矢';
								SI[9].value = 400;
								SI[10].value = 12;
								SI[11].value = '傷害、瞬發、二段';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = 'Charge Skill (5 Levels). Attack toward a target and deal damage in a straight line. Power increases as the charge level increases and add an attack. Add another attack by meeting certain conditions.';
								SI[15].value = '';
								break;
							case 6:
								SI[8].value = '弓/弩/箭矢';
								SI[9].value = 100;
								SI[10].value = 14;
								SI[11].value = '傷害、瞬發、狀態';
								SI[12].value = '水屬性。<br />物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '射出帶有黏性液體的箭。<br />一定機率使敵人「遲緩」。';
								SI[15].value = 'MP消耗低、帶有遲緩效果的遠距離瞬發技能。';
								break;
							case 7:
								SI[8].value = '弓/弩/箭矢';
								SI[9].value = 300;
								SI[10].value = 14;
								SI[11].value = '傷害、瞬發、狀態';
								SI[12].value = '風屬性。<br />物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '夾帶麻痺毒性的攻擊。<br />一定機率使敵人「麻痺」。<br />技能發動成功後，一段時間內增加本身穩定率。';
								SI[15].value = 'MP消耗較高、傷害偏低、附帶獨有的麻痺效果。技能命中後，能於短時間內提升自身穩定度。';
								break;
							case 8:
								SI[8].value = '弓/弩/箭矢';
								SI[9].value = 500;
								SI[10].value = 14;
								SI[11].value = '傷害、瞬發、狀態';
								SI[12].value = '暗屬性。<br />物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '夾帶麻痺毒性的攻擊。<br />一定機率使敵人「麻痺」。<br />技能發動成功後，一段時間內增加自身命中率。';
								SI[15].value = 'MP消耗高、傷害偏低、附帶獨有的盲目效果。技能命中後，能於短時間內提升自身命中。';
								break;
							case 9:
								SI[8].value = '弓/弩/箭矢';
								SI[9].value = 700;
								SI[10].value = 14;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 10:
								SI[8].value = '弓/弩(主手)';
								SI[11].value = '被動、加成';
								SI[14].value = '箭術更上一層樓。<br />增加弓、連弩的攻擊力。';
								SI[15].value = '主手裝備弓、弩時，能顯著提升攻擊力的被動技能。其加成受角色攻擊力及武器攻擊力影響。';
								break;
							case 11:
								SI[8].value = '無限制';
								SI[9].value = 400;
								SI[11].value = '狀態、瞬發、效果';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '隱身暗處，引開敵人注意。<br />發動後，遭受一定次數的攻擊時，<br />不會累積恨意值。';
								SI[15].value = '狀態持續期間，能讓施放的技能不會產生任何仇恨值。';
								break;
							case 12:
								SI[8].value = '無限制';
								SI[11].value = '被動、增幅';
								SI[14].value = '加速遠方射擊能力。<br />自8M以外發動技能時，威力增強。';
								SI[15].value = '與說明不太相同。此技能會增加射程8M以上的技能的傷害，無關發動技能時的距離。';
								break;
							case 13:
								SI[8].value = '無限制';
								SI[11].value = '被動、效果';
								SI[14].value = '找尋空檔，蓄勢待發。<br />任一種技能成功攻擊敵人後，<br />一定機率回覆少量MP。';
								SI[15].value = '實際有消耗MP的技能施放完畢後，有機率恢復一定MP。';
								break;
							case 14:
								SI[8].value = '無限制';
								SI[9].value = 400;
								SI[11].value = '狀態、瞬發、效果';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;
						}
						break;
					case 2:
						switch (T_no_S)
						{
							case 1:
								SI[8].value = '無限制';
								SI[9].value = 100;
								SI[10].value = 12;
								SI[11].value = '傷害、須詠唱、設置';
								SI[12].value = '魔法傷害/魔法慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '射出少量魔法箭。<br />升級後，發射數量增加。';
								SI[15].value = '基礎的單體設置技能，總傷害高。';
								break;
							case 2:
								SI[8].value = '無限制';
								SI[9].value = 200;
								SI[10].value = 8;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '魔法傷害/魔法慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '降下強大魔法長槍。<br />一定機率造成敵人狀態異常。<br />各屬性造成異常狀態不同。';
								SI[15].value = '不須要詠唱時間的魔法傷害技能，但動作時間稍長。不同屬性所造成的異常狀態不同。';
								break;
							case 3:
								SI[8].value = '無限制';
								SI[9].value = 200;
								SI[10].value = 14;
								SI[11].value = '傷害、須詠唱、設置';
								SI[12].value = '魔法傷害/魔法慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '使用魔術，連續發射魔法槍。<br />提升等級可增加發射數。<br />一定機率造成目標「停止」。';
								SI[15].value = '詠唱時間長、全部的魔法槍發射完畢的時間很長、傷害偏低。每發魔法槍皆有機率造成停止。';
								break;
							case 4:
								SI[8].value = '無限制';
								SI[9].value = 200;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '傷害、須詠唱';
								SI[12].value = '魔法傷害/魔法慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '產生魔法衝擊波，攻擊四週敵人。<br />下一個招式的消耗MP減半。<br />連續使用時，此技能威力將減弱。';
								SI[15].value = '能範圍造成翻覆狀態的技能。能夠使下一招技能的MP消耗減半。技能等級7以上時，此技能無詠唱時間。裝備魔導具時，傷害將大幅增加。';
								break;
							case 5:
								SI[8].value = '無限制';
								SI[9].value = 1600;
								SI[10].value = 12;
								SI[11].value = '傷害、須詠唱';
								SI[12].value = '無屬性。<br />魔法傷害/魔法慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = 'Super wide area of effect. Deal greater damage to enemies near the center. Cast Speed is long and unable to reduce it with CSPD. Generate Aggro while casting.';
								SI[15].value = '';
								break;
							case 6:
								SI[8].value = '無限制';
								SI[9].value = 200;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '傷害、須詠唱、設置';
								SI[12].value = '魔法傷害/魔法慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '於腳邊施放魔法屏障。<br />給予傷害的同時，降敵人逼退。';
								SI[15].value = '總傷害高、作用範圍偏小的設置型技能。每次傷害皆能逼退敵人，持續時間內能讓敵人難以接近自身。無法逼退BOSS。';
								break;
							case 7:
								SI[8].value = '無限制';
								SI[9].value = 300;
								SI[10].value = 8;
								SI[11].value = '傷害、須詠唱';
								SI[12].value = '魔法傷害/魔法慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '凝聚魔力後加以引爆。<br />一定機率造成敵人異常狀態。<br />各屬性造成的異常狀態不同。';
								SI[15].value = '詠唱時間很長、傷害不算低的範圍傷害指定技能。';
								break;
							case 8:
								SI[8].value = '無限制';
								SI[9].value = 400;
								SI[10].value = 8;
								SI[11].value = '傷害、須詠唱、設置';
								SI[12].value = '魔法傷害/魔法慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '以魔法產生龍捲風。<br />給予傷害的同時，將敵人捲入中心。<br />有時無法移動強敵。';
								SI[15].value = '總傷害十分高、詠唱時間短的設置型範圍技能。';
								break;
							case 9:
								SI[8].value = '無限制';
								SI[9].value = 500;
								SI[10].value = 8 + Math.max(0, T_skillLv-5);
								SI[11].value = '傷害、須詠唱';
								SI[12].value = '魔法傷害/魔法慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = 'Enhance magic power and shoot out. Chance to Knock Back the target aiming at you. Cast Time is very long, however, it is shortened by using Magic Skills before casting.';
								SI[15].value = '';
								break;
							case 10:
								SI[8].value = '法杖/魔導具(主手)';
								SI[11].value = '被動、加成';
								SI[14].value = '加強魔導具的使用技巧。<br />裝備法杖、魔導具時，<br />攻擊力增加。';
								SI[15].value = '主手裝備法杖、魔導具時，能顯著提升攻擊力的被動技能。其加成受角色攻擊力及武器攻擊力影響。';
								break;
							case 11:
								SI[8].value = '無限制';
								SI[9].value = '無消耗';
								SI[11].value = '恢復、須蓄力';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '積蓄魔力，回復MP。<br />升級可縮短蓄力時間。';
								SI[15].value = '蓄力一段時間後，回復大量MP。裝備法杖或魔導具時，其蓄力時間將大幅降低。';
								break;
							case 12:
								SI[8].value = '無限制';
								SI[11].value = '被動、效果';
								SI[14].value = '有效省去重複詠唱時間。<br />使用「法術/飛箭」後，<br />下一個魔法技能加速發動。';
								SI[15].value = '僅限使用「法術/飛箭」後，方可降低下一招技能的詠唱時間。';
								break;
							case 13:
								SI[8].value = '無限制';
								SI[10].value = 5 + parseInt(T_skillLv/2);
								SI[11].value = '被動、效果';
								SI[12].value = '物理傷害/普通攻擊慣性。<p>(射程與傷害/慣性皆用於表示<u>魔法彈</u>。)';
								SI[14].value = '一般攻擊無法打中敵人時，則放出魔法彈攻擊敵人。<br />可於5M內的距離使用此攻擊，技能等級提昇後，<br />最遠射程可達10M。<br />此為一般攻擊，命中時可回復MP。';
								SI[15].value = '學習之後可改變(並非增加)自身普通攻擊的距離。雖然於原本的普攻距離之外攻擊敵人時，傷害會降低，但依然可用作攻擊MP恢復及疊加慣性。';
								break;
							case 14:
								SI[8].value = '無限制';
								SI[9].value = 300;
								SI[11].value = '恢復、須蓄力';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;
						}
						break;
					case 3:
						switch (T_no_S)
						{
							case 1:
								SI[8].value = '無限制';
								SI[9].value = 100;
								SI[10].value = 1;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '擊出重拳。<br />一定機率使敵人「膽怯」。';
								SI[15].value = '能造成膽怯狀態的通用技能、MP消耗低。';
								break;
							case 2:
								SI[8].value = '無限制';
								SI[9].value = 200;
								SI[10].value = 1;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '瞄準頭部給予痛擊，<br />一定機率使敵人「昏厥」。';
								SI[15].value = '可能造成昏厥狀態的通用技能。昏厥機率偏低、施放動作偏慢。';
								break;
							case 3:
								SI[8].value = '無限制';
								SI[9].value = 300;
								SI[10].value = 1;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '連堅固盔甲都能輕易打穿的正拳。<br />傷害值隨敵人防禦力增加。<br />低機率使敵人「降防」。<br />降防成功時回復MP。';
								SI[15].value = '可造成降防狀態的技能，技能本身對高防禦的敵人有額外的傷害。觸發降防時可恢復大量MP。降防機率偏低。';
								break;
							case 4:
								SI[8].value = '無限制';
								SI[9].value = 400;
								SI[10].value = 1;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '超強力痛擊。<br />一定機率使敵人「乏力」。<br />敵人處於降防状態時則產生追加攻擊。';
								SI[15].value = '可造成乏力狀態的通用技能，MP消耗高。施放時若目標處於降防時，將能造成高傷害的追加攻擊。動作時間長、傷害集中在追加傷害。';
								break;	
							case 5:
								SI[8].value = '無限制';
								SI[9].value = 500;
								SI[10].value = 12;
								SI[11].value = '傷害、須蓄力';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = 'Shoot out the energy inside of the character. Chance to inflict [Fear] on the target. Charge Time is shortened depending on the skill level.';
								SI[15].value = '';
								break;	
							case 6:
								SI[8].value = '無限制';
								SI[9].value = 100;
								SI[10].value = 4*parseInt((T_skillLv+2)/3);
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '製造衝擊波，產生傷害。<br />一定機率使敵人「翻覆」。<br />升級後將增加射程。';
								SI[15].value = '可造成翻覆狀態的遠距離瞬發技能、MP消耗低。射程最遠可達20M。';
								break;
							case 7:
								SI[8].value = '無限制';
								SI[9].value = 100;
								SI[10].value = 1;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '撼動大地的強震攻擊四周敵人。<br />一定機率使敵人「停止」。';
								SI[15].value = '可造成停止狀態的技能、MP消耗低。施放時間稍長、作用範圍小。';
								break;
							case 8:
								SI[8].value = '無限制';
								SI[9].value = 300;
								SI[10].value = 3;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '迅速發出三段攻擊。<br />有更高的暴擊率。';
								SI[15].value = '傷害高、速度不慢、具有高爆擊率的技能。未裝備拳套時，傷害和曓擊率加成將大幅減少。';
								break;
							case 9:
								SI[8].value = '無限制';
								SI[9].value = 400;
								SI[10].value = '?';
								SI[11].value = '傷害、瞬發、狀態、加成';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;	
							case 10:
								SI[8].value = '拳套(主手)';
								SI[11].value = '被動、加成';
								SI[14].value = '更能靈活運用拳套。<br />裝備拳套時的攻擊力增加。';
								SI[15].value = '主手裝備拳套時，能顯著提升攻擊力的被動技能。其加成受角色攻擊力及武器攻擊力影響。';
								break;
							case 11:
								SI[8].value = '拳套';
								SI[11].value = '被動、加成/增幅';
								SI[14].value = '對拳套瞭解地更透徹，實力再度提升。<br />裝備拳套時的攻擊速度增加，<br />並稍微提升格鬥技能的威力。';
								SI[15].value = '學習後可增加<u>格鬥技能</u>中所有主動技能的威力。主手裝備拳套時，可同時提升攻擊速度。';
								break;
							case 12:
								SI[8].value = '無限制';
								SI[9].value = 200;
								SI[10].value = '?';
								SI[11].value = '狀態、瞬發、效果、恢復';
								SI[13].value = '?';
								SI[14].value = '';
								SI[15].value = '';
								break;	
							case 13:
								SI[8].value = '拳套';
								SI[11].value = '被動、效果/加成';
								SI[14].value = '追擊敵人，不放過一絲縫隙。<br />一般拳套攻擊時，一定機率追加傷害。';
								SI[15].value = '學習後可於裝備拳套時增加攻擊MP恢復。主手裝備拳套後，普通攻擊才有機率造成追加傷害。';
								break;
							case 14:
								SI[8].value = '拳套';
								SI[11].value = '被動、效果/加成';
								SI[14].value = '將小攻擊的威力放大。<br />強化「乘勝追擊」的追加傷害值。';
								SI[15].value = '學習後可提升「乘勝追擊」的<b>追擊</b>傷害。並使<b>追擊</b>有低機率造成降防狀態。';
								break;
						}
						break;
					case 4:
						switch (T_no_S)
						{
							case 1:
								SI[8].value = '雙劍';
								SI[10].value = 1;
								SI[11].value = '被動、效果/加成';
								SI[14].value = '習得後，可同時裝備兩把單手劍。<br />技能升等後，<br />可提高命中率，減少降低的暴擊率。';
								SI[15].value = '學習後才可以同時裝備兩把單手劍。但同時得承受副作用。';
								break;
							case 2:
								SI[8].value = '雙劍';
								SI[9].value = 200;
								SI[10].value = 2;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '揮斬兩把單手劍。<br />可打出更高暴擊。';
								SI[15].value = '基本傷害低，但爆擊傷害極高的單體技能。';
								break;
							case 3:
								SI[8].value = '雙劍';
								SI[9].value = 100;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '傷害、瞬發、設置';
								SI[12].value = '風屬性。<br />物理傷害/魔法慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '以迴旋劈斬彈飛週圍敵人。<br />攻擊後，殘留風壓將持續造成傷害。<br />一定機率使敵人「盲目」。';
								SI[15].value = '總傷害不算低，為物理傷害魔法慣性的技能。';
								break;
							case 4:
								SI[8].value = '雙劍';
								SI[9].value = 400;
								SI[10].value = 8;
								SI[11].value = '傷害、瞬發、效果';
								SI[12].value = '暗屬性。<br />物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '以迅雷不及掩耳的速度發動無數次斬擊。<br />技能攻擊中，可令一切敵方攻擊無效。';
								SI[15].value = '此技能目前只有Lv10的資料。比起同級的技能，傷害稍低。施放時間久，施放時會讓自身無敵。技能施放完畢時，會有一小段沒有無敵狀態的僵直時間';
								break;
							case 5:
								SI[8].value = '雙劍';
								SI[9].value = 100;
								SI[10].value = 2;
								SI[11].value = '傷害、瞬發、效果';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '將攻擊卸力後，撞開敵人。<br />一定機率使對方「翻覆」。<br />技能發動當中，可減輕一次物理傷害。<br />成功減輕傷害時30秒内 ATK 與 ASPD 增強。';
								SI[15].value = '施放時間稍久，若成功格檔了傷害，可以獲得強力的增益狀態。';
								break;
							case 6:
								SI[8].value = '雙劍';
								SI[9].value = 300;
								SI[10].value = 2;
								SI[11].value = '傷害、瞬發、位移';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '使用兩把劍進行刺突。直線攻擊並穿透敵人。<br />此為拔刀類技能，將受拔刀能力影響。';
								SI[15].value = '總傷害稍低，但可受拔刀傷害增幅的直線範圍技能。直線衝刺後，可能會因為到達地圖出口而離開該地圖。';
								break;
							case 7:
								SI[8].value = '雙劍';
								SI[9].value = 100*parseInt((18-T_skillLv)/4);
								SI[10].value = 2 + T_skillLv;
								SI[11].value = '效果、瞬發、增益、位移';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '迅速繞至敵方身後。<br />於下一次技能發動前，攻擊回復MP量增加，<br />並提升一次技能攻擊之暴擊率。';
								SI[15].value = '可從遠處快速接近敵方的技能，且會重置普攻而發動拔刀斬。施放完畢後，可獲得<u>專注狀態</u>的效果。';
								break;
							case 8:
								SI[8].value = '無限制';
								SI[9].value = 100;
								SI[11].value = '狀態、瞬發';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '短時間增加閃躲率，<br />但大幅降低 DEF 與 MDEF。';
								SI[15].value = '狀態持續期間，可大幅增加閃躲率的狀態技能。有大幅扣除防禦力的副作用。裝備雙劍時，技能持續時間將極大幅上升。';
								break;
							case 9:
								SI[8].value = '無限制';
								SI[9].value = 200;
								SI[11].value = '狀態、瞬發';
								SI[12].value = '風屬性。<br />物理傷害/物理慣性。<br />(此段用於表示<u>二重閃光</u>。)';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '短時間内強化拔刀威力，<br />閃躲發動時，將追加強力反擊。';
								SI[15].value = '狀態持續期間，可將閃躲反擊轉為強力範圍傷害。並同時提升拔刀傷害。裝備雙劍時，技能持續時間將極大幅上升，並額外提升武器Atk。';
								break;
							case 10:
								SI[8].value = '雙劍';
								SI[11].value = '被動、加成';
								SI[14].value = '增加雙劍的 ASPD，<br />並減輕雙劍的負面素質。';
								SI[15].value = '能補足雙劍要領所扣除的命中，同時多出了少量的命中。並大量增加攻擊速度。';
								break;
							case 11:
								SI[8].value = '無限制';
								SI[11].value = '被動、加成/增幅';
								SI[14].value = '增加 AGI 與拔刀術威力 。 <br />(首次攻擊 / 閃躲反擊 / 發動特定技能後等情況下)';
								SI[15].value = '學習後，能大幅提升拔刀傷害，同時增加Agi。';
								break;
						}
						break;
					case 5:
						switch (T_no_S)
						{
							case 1:
								SI[8].value = '單手劍/旋風槍';
								SI[9].value = 100;
								SI[10].value = 2;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '迅速敏捷地給予強力一擊。';
								SI[15].value = '速度快的基本技能。';
								break;
							case 2:
								SI[8].value = '單手劍/旋風槍';
								SI[9].value = 200;
								SI[10].value = 2;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '投擲旋風槍攻擊。<br />隨技能等級提升增加射程。';
								SI[15].value = '只能近距離施放，但可造成直線範圍傷害的技能。';
								break;
							case 3:
								SI[8].value = '旋風槍';
								SI[9].value = 300;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '揮舞旋風槍，橫掃四方。<br />一定機率使敵人「翻覆」。<br />無法使BOSS怪翻覆。';
								SI[15].value = '可造成翻覆狀態的二段範圍技能，但無法翻覆BOSS。';
								break;
							case 4:
								SI[8].value = '旋風槍';
								SI[9].value = 400;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '傷害、瞬發、設置';
								SI[12].value = '物理傷害/魔法慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '斧槍的猛力攻擊下，連大地都碎裂。<br />發動技能後，<br />一段時間後在攻擊地點發生大爆炸，<br />造成追加傷害。';
								SI[15].value = '施放完畢後數秒，原地將會自動發出範圍極大的第二段傷害。為有兩段範圍傷害的高傷害技能。';
								break;
							case 5:
								SI[8].value = '旋風槍';
								SI[9].value = 500;
								SI[10].value = 12;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 6:
								SI[8].value = '單手劍/旋風槍';
								SI[9].value = 100;
								SI[10].value = 2;
								SI[11].value = '傷害、須蓄力';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '確實造成致命傷的突擊。<br />花點時間方能發動，但可無視一定程度的防禦，<br />高機率產生暴擊傷害。';
								SI[15].value = '須要蓄力，有較高的暴擊率、傷害偏低的技能。';
								break;
							case 7:
								SI[8].value = '單手劍/旋風槍';
								SI[9].value = 200;
								SI[10].value = 2;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '迅速發動的強力攻擊。<br />敵人處於異常狀態時，威力大幅增加。<br />難以產生暴擊。';
								SI[15].value = '低耗魔、速度快的技能。在敵人受到異常狀態影響時傷害將大幅增加。裝備旋風槍時，增加幅度更大。';
								break;
							case 8:
								SI[8].value = '旋風槍';
								SI[9].value = 400;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '狀態、瞬發、效果';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 9:
								SI[8].value = '單手劍/旋風槍';
								SI[9].value = '無消耗';
								SI[10].value = 12;
								SI[11].value = '傷害、須詠唱';
								SI[12].value = '魔法傷害/魔法慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '將旋風槍當成法杖使用發動魔法。<br />敵人所受到的魔法傷害依ATK而異。<br />增加接著發動的技能的暴擊率。';
								SI[15].value = '傷害依據物理攻擊的魔法傷害技能，距離遠、傷害偏低、須詠唱。施放後下一招技能的暴擊率將獲得極大幅增加。';
								break;
							case 10:
								SI[8].value = '旋風槍(主手)';
								SI[11].value = '被動、加成';
								SI[14].value = '旋風槍技巧更上一層樓。<br />裝備旋風槍時，攻擊力增加。';
								SI[15].value = '主手裝備炫風槍時，能顯著提升攻擊力的被動技能。其加成受角色攻擊力及武器攻擊力影響。';
								break;
							case 11:
								SI[8].value = '旋風槍';
								SI[11].value = '被動、加成';
								SI[14].value = '學習旋風槍的真髓。<br />裝備旋風槍時，暴擊率增加。';
								SI[15].value = '能提升不少暴擊率的被動技能。';
								break;
							case 12:
								SI[8].value = '無限制';
								SI[9].value = '無消耗';
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '狀態、加成';
								SI[13].value = 'Can not be |,|無法';
								SI[13].unit = '</u> added as a combo opener.|,|</u>放入連擊的第一招。';
								SI[14].value = '以氣勢提升自己的速度。<br />發動技能時消耗HP，而非MP。<br />一段時間內增加ASPD。';
								SI[15].value = '可提升大量攻擊速度的主動技能。須消耗HP但不消耗MP的特殊技能。';
								break;
							case 13:
								SI[8].value = '無限制';
								SI[9].value = 100;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '恢復、須詠唱';
								SI[13].value = 'Can not be |,|無法';
								SI[14].value = '被逼到絕境而大爆發。<br />回復少量MP。<br />當下HP越少，回復量越多。';
								SI[15].value = '可恢復MP的主動技能。隨著當前生命百分比越低，MP恢復量將大幅提升。';
								break;
							case 14:
								SI[8].value = '旋風槍';
								SI[9].value = 100;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '狀態、瞬發、加成';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;
						}
						break;
					case 6:
						switch (T_no_S)
						{
							case 1:
								SI[8].value = '拔刀劍';
								SI[9].value = 100;
								SI[10].value = 2;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 2:
								SI[8].value = '拔刀劍';
								SI[9].value = 100;
								SI[10].value = 12;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 3:
								SI[8].value = '拔刀劍';
								SI[9].value = 300;
								SI[10].value = '？';
								SI[11].value = '傷害、瞬發、狀態、位移';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 4:
								SI[8].value = '拔刀劍';
								SI[9].value = 500;
								SI[10].value = 2;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 5:
								SI[8].value = '拔刀劍';
								SI[9].value = 300;
								SI[10].value = 2;
								SI[11].value = '傷害、瞬發、狀態、效果';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 6:
								SI[8].value = '拔刀劍';
								SI[9].value = 500;
								SI[10].value = 2;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 7:
								SI[8].value = '拔刀劍';
								SI[9].value = 200;
								SI[10].value = 2;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 8:
								SI[8].value = '拔刀劍';
								SI[9].value = 300;
								SI[10].value = 2;
								SI[11].value = '傷害、瞬發、效果';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = '不可';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 9:
								SI[8].value = '拔刀劍';
								SI[9].value = 400;
								SI[10].value = 2;
								SI[11].value = '傷害、瞬發、效果';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 10:
								SI[8].value = '無限制/拔刀劍(主手)';
								SI[11].value = '被動、加成';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 11:
								SI[8].value = '無限制';
								SI[11].value = '被動、效果';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 12:
								SI[8].value = '無限制';
								SI[11].value = '被動、效果、加成';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 13:
								SI[8].value = '無限制';
								SI[9].value = 200;
								SI[11].value = '狀態、加成';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 14:
								SI[8].value = '無限制';
								SI[9].value = 200;
								SI[11].value = '狀態、加成、效果';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '';
								SI[15].value = '';
								break;
						}
						break;
				}
				break;
			case 1:
				switch (No_ST)
				{
					case 0:
						switch (T_no_S)
						{
							case 1:
								SI[8].value = '重量化防具';
								SI[11].value = '被動、加成。';
								SI[14].value = '裝備重裝化防具時的阻擋率增加。';
								SI[15].value = '可提升不少阻擋率的被動技能。';
								break;
							case 2:
								SI[8].value = '重量化防具';
								SI[11].value = '被動、加成。';
								SI[14].value = '';
								SI[15].value = '可提升不少阻擋率的被動技能。';
								break;
							case 5:
								SI[8].value = '輕量化防具';
								SI[11].value = '被動、加成。';
								SI[14].value = '裝備輕質化防具時的閃躲率增加。';
								SI[15].value = '可提升不少閃躲率的被動技能。';
								break;
							case 6:
								SI[8].value = '輕量化防具';
								SI[11].value = '被動、加成。';
								SI[14].value = '';
								SI[15].value = '可提升不少閃躲率的被動技能。';
								break;
						}
						break;
					case 1:
						switch (T_no_S)
						{
							case 1:
								SI[8].value = '盾牌';
								SI[11].value = '被動、加成。';
								SI[14].value = '改善裝備盾時，攻擊速度會降低的缺點。';
								SI[15].value = '可提升攻擊速度的被動技能。技能滿級時會抵消裝備盾牌時降低的攻擊速度。';
								break;
							case 2:
								SI[8].value = '盾牌';
								SI[9].value = 100;
								SI[10].value = 3;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '拿盾牌用力砸。<br />一定機率使敵人「昏厥」。';
								SI[15].value = '極高機率對目標造成昏厥效果的技能。';
								break;
							case 3:
								SI[8].value = '盾牌';
								SI[9].value = 200;
								SI[10].value = 5 + 1.5*T_skillLv;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '光屬性。<br />物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '將盾牌如子彈一般全力投擲出去。<br />一定機率使敵人「昏厥」。';
								SI[15].value = '可遠距離對目標造成昏厥效果的技能。昏厥機率隨著技能等級提高而大幅提升。';
								break;
							case 4:
								SI[8].value = '無限制';
								SI[11].value = '被動、效果';
								SI[12].value = '物理傷害/無慣性。(此段用於表示<u>阻擋反擊</u>)';
								SI[14].value = '攻擊的同時反彈傷害。<br />發生阻擋的同時，給予敵人傷害。<br />威力隨阻擋力與盾的精鍊值增加。。';
								SI[15].value = '學習後，可使角色在阻擋的同時能造成不低的傷害。。';
								break;
							case 5:
								SI[8].value = '盾牌';
								SI[11].value = '被動、加成';
								SI[14].value = '裝備盾時，額外增加DEF值。';
								SI[15].value = '可中幅提升物理防禦力的被動技能。同時提升中量HP。';
								break;
							case 6:
								SI[8].value = '盾牌';
								SI[11].value = '被動、加成';
								SI[14].value = '裝備盾時，額外增加DEF值。';
								SI[15].value = '可中幅提升魔法防禦力的被動技能。同時提升中量HP。';
								break;
							case 7:
								SI[8].value = '無限制';
								SI[9].value = 300;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '狀態、瞬發';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '使對伍成員於一定時間內增加物理抗性，降低魔法抗性。';
								SI[15].value = '此技能目前資料不足。持續時間長，可中幅提升隊伍成員物理抗性的技能，但同時會扣除魔法抗性。';
								break;
							case 8:
								SI[8].value = '無限制';
								SI[9].value = 300;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '狀態、瞬發';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '使對伍成員於一定時間內增加魔法抗性，降低物理抗性。';
								SI[15].value = '此技能目前資料不足。持續時間長，可中幅提升隊伍成員魔法抗性的技能，但同時會扣除物理抗性。';
								break;
							case 9:
								SI[8].value = '盾牌';
								SI[9].value = 600;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '效果、瞬發';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '於四周產生屏障，減輕受到的傷害。<br />增加自身的阻擋率，<br />保護的同伴越多，攻擊力降低越多，<br />並大幅增加恨意值。<br />盾的精鍊值越高,能減輕更多傷害。';
								SI[15].value = '此技能目前資料不足。施放後將會產生大量仇恨。';
								break;
						}
						break;
					case 2:
						switch (T_no_S)
						{
							case 1:
								SI[8].value = '小刀';
								SI[9].value = 100 - parseInt(T_skillLv/10);
								SI[10].value = 12;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can not be |,|無法';
								SI[13].unit = '</u>放入連擊的第一招。';
								SI[14].value = '投擲小刀攻擊。';
								SI[15].value = '最基礎的技能。此技能滿級後不消耗MP。';
								break;
							case 2:
								SI[8].value = '小刀';
								SI[9].value = 100;
								SI[10].value = 8;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '朝目標腳邊投擲小刀，<br />妨礙其移動。一定機率使敵人「遲緩」。';
								SI[15].value = 'MP消耗低，高機率造成遲緩效果的技能。';
								break;
							case 3:
								SI[8].value = '小刀';
								SI[9].value = 300;
								SI[10].value = 8;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '將大量小刀卯起來猛丟出去。';
								SI[15].value = '施放時間長、傷害不突出的技能。';
								break;
							case 4:
								SI[8].value = '小刀';
								SI[11].value = '被動、效果';
								SI[14].value = '威力逼人的投擲術。<br />所有刀術技能有更高機率發追加命中。';
								SI[15].value = '可顯著提升所有刀術技能傷害的被動技能。。';
								break;
							case 5:
								SI[8].value = '小刀';
								SI[9].value = 200;
								SI[10].value = 8;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '以塗了毒藥的小刀攻擊。<br />一定機率造成敵人「猛毒」。';
								SI[15].value = '可造成猛毒效果的技能。猛毒所造成的傷害不明顯。';
								break;
							case 6:
								SI[8].value = '小刀';
								SI[11].value = '被動、效果';
								SI[14].value = '裝備短劍，並發生阻擋後追擊時，<br />有機會追擊兩次。';
								SI[15].value = '使小刀的閃躲反擊傷害有機率造成兩次傷害。';
								break;
							case 7:
								SI[8].value = '小刀';
								SI[11].value = '被動、效果';
								SI[12].value = '物理傷害/無慣性。<br />(此段用於表示<u>無影追襲</u>)';
								SI[14].value = '裝備小刀時，一定機率使一般攻擊追加少許傷害。';
								SI[15].value = '使得裝備小刀時，普通攻擊有機率造成額外傷害。';
								break;
							case 8:
								SI[8].value = '小刀';
								SI[11].value = '被動、效果';
								SI[14].value = '增強無影刃的性能，<br />提升威力與發動率。';
								SI[15].value = '能使<u>無影刃</u>中<u>無影追襲</u>的發動機率及所造成的傷害大幅提升。';
								break;
							case 9:
								SI[8].value = '小刀';
								SI[11].value = '被動、效果';
								SI[14].value = '使無影刃一定程度無視防禦力造成傷害。';
								SI[15].value = '能使<u>無影刃</u>中<u>無影追襲</u>的傷害附帶大量的物理貫穿。';
								break;
						}
						break;
					case 3:
						switch (T_no_S)
						{
							case 1:
								SI[8].value = '無限制';
								SI[9].value = 100;
								SI[10].value = 6;
								SI[11].value = '傷害、瞬發、位移';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '設向前衝撞敵人，<br />一定機率使敵人「遲緩」。';
								SI[15].value = '可用於快速接近目標，同時使目標被遲緩與逼退的技能。遲緩與逼退的機率隨著技能等級提高而大幅提升。裝備盾牌時會大幅提高逼退機率。';
								break;
							case 2:
								SI[8].value = '無限制';
								SI[11].value = '被動、效果';
								SI[14].value = '使用武器擋開攻擊，一定機率減輕物理傷害，<br />與「阻擋」不會同時發生。';
								SI[15].value = '此技能目前資料不足。';
								break;
							case 3:
								SI[8].value = '盾牌';
								SI[9].value = 100;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '狀態、效果';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '完美防禦。<br />裝備盾牌時，可稍微恢復HP，<br />並擋下10次攻擊，使該傷害降為0。';
								SI[15].value = '此技能目前資料不足。施放後於極短時間內最多可以抵擋10次傷害。若時間結束前抵擋了至少1次傷害，將會恢復少量HP。';
								break;
							case 5:
								SI[8].value = '無限制';
								SI[9].value = (4 - Math.max(parseInt((T_skillLv-2)/4),0))*100;
								SI[10].value = 8;
								SI[11].value = '效果、瞬發';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '挑釁對方，引發敵意。';
								SI[15].value = '施放後可產生大量仇恨值的技能。';
								break;
							case 6:
								SI[8].value = '1h Sword / 2h Sword|,|單手劍/雙手劍';
								SI[9].value = 200;
								SI[10].value = 2;
								SI[11].value = '傷害、瞬發、效果';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '充滿敵意的攻擊，<br />產生較高恨意值的特殊攻擊。';
								SI[15].value = '造成傷害的同時，可產生中量額外仇恨值的技能。';
								break;
							case 7:
								SI[8].value = '1h Sword / 2h Sword|,|單手劍/雙手劍';
								SI[9].value = 300;
								SI[10].value = 2;
								SI[11].value = '傷害、瞬發、效果';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '製造衝擊破攻擊四周。<br />一定機率造成敵人「停止」。<br />恨意值高恨意值的特殊攻擊。';
								SI[15].value = '此技能目前只有Lv10的資料。傷害不低，且可使目標產生額外仇恨值的範圍技能。';
								break;
						}
						break;
					case 4:
						switch (T_no_S)
						{
							case 1:
								SI[8].value = '無限制';
								SI[9].value = 100;
								SI[10].value = 3;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '將敵人踢飛，<br />拉開距離給予傷害的同時將敵人逼退。';
								SI[15].value = '可將目標逼退的技能。逼退距離隨著技能等級提升而增加。';
								break;
							case 2:
								SI[8].value = '弓/弩';
								SI[9].value = 200;
								SI[10].value = 14;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '光屬性。物理傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '灌注太陽之力，施放出強力一擊。<br />以直線攻擊敵人。<br />對睡眠狀態之敵人打擊加倍。';
								SI[15].value = '範圍極大的直線型範圍技能。無論施放時與目標的距離為何，此技能都會飛行至最大射程。對睡眠中的目標有兩倍的傷害。';
								break;
							case 3:
								SI[8].value = '無限制';
								SI[9].value = 300;
								SI[10].value = 14;
								SI[11].value = '狀態、效果';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '以魔法強化箭矢，增加威力的技能。<br />小幅增加武器ATK與攻擊時的MP恢復量，<br />一般攻擊亦隨MATK強化。<br />使用一般攻擊達一定次數後將失效。';
								SI[15].value = '此技能目前資料不足。施放後可使普攻傷害提升，提昇量受Matk影響。同時增加攻擊MP恢復。普通攻擊一定次數後技能失效。';
								break;
							case 5:
								SI[8].value = '無限制';
								SI[9].value = 100;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '陷阱、傷害';
								SI[12].value = '水屬性。<br />魔法傷害/魔法慣性。';
								SI[13].value = 'Can not be |,|無法';
								SI[14].value = '設置含昏迷瓦斯的陷阱。<br />一定機率使踩到陷阱者陷入「睡眠」狀態。<br />無法直接設置在腳邊，受到範圍攻擊時可能遭到破壞。';
								SI[15].value = '可使目標陷入睡眠狀態的陷阱類技能，無法直接設置於敵人腳下。BOSS單位處於睡眠狀態時，將會緩慢恢復HP。';
								break;
							case 6:
								SI[8].value = '無限制';
								SI[9].value = 200;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '陷阱、傷害';
								SI[12].value = '地屬性。<br />魔法傷害/魔法慣性。';
								SI[13].value = 'Can not be |,|無法';
								SI[14].value = '設置會夾住雙腳的陷阱。<br />一定機率使踩到陷阱者陷入「停止」狀態。<br />無法直接設置在腳邊，<br />受到範圍攻擊時可能遭到破壞。';
								SI[15].value = '可使目標陷入停止狀態的陷阱類技能，無法直接設置於敵人腳下。';
								break;
							case 7:
								SI[8].value = '無限制';
								SI[9].value = 400;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '陷阱、傷害';
								SI[12].value = '火屬性。<br />魔法傷害/魔法慣性。';
								SI[13].value = 'Can not be |,|無法';
								SI[14].value = '設置爆炸陷阱。<br />低機率使踩上陷阱者陷入「著火」狀態。<br />無法直接設置在腳邊，<br />受到範圍攻擊時可能遭到破壞。';
								SI[15].value = '此技能目前資料不足。可使目標陷入著火狀態的陷阱類技能，無法直接設置於敵人腳下。';
								break;
						}
						break;
					case 5:
						switch (T_no_S)
						{
							case 1:
								SI[8].value = '無限制';
								SI[9].value = 100;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '狀態、恢復';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '每隔一段時間回復少量HP，<br />等級提升可增加回復量與持續時間。';
								SI[15].value = '可於一段時間內緩慢恢復隊伍成員HP的狀態技能。恢復量受Matk影響。主手裝備杖時，恢復量將同時受Int影響。';
								break;
							case 2:
								SI[8].value = '無限制';
								SI[9].value = 100;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '狀態、加成';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '短暫提高 DEF 與 MDEF。<br />裝備盾牌時，再提升阻擋率。';
								SI[15].value = '可大幅提升防禦力的狀態技能。持續時間偏短。';
								break;
							case 3:
								SI[8].value = '無限制';
								SI[11].value = '被動、效果';
								SI[14].value = '強化祝福的恢復能力。<br />祝福的等級為10時，<br />再增加觸發次數、恢復量、法杖加成。';
								SI[15].value = '此技能目前資料尚未齊全。可提升「祝福」的HP恢復量。';
								break;
							case 5:
								SI[8].value = '無限制';
								SI[9].value = 100;
								SI[10].value = 1;
								SI[11].value = '傷害、瞬發';
								SI[12].value = '複合傷害/物理慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '用帶有光之力的拳頭討伐惡徒。<br />可同時給予物理與魔法傷害。<br />防禦慣性類別屬於「物理技能」。';
								SI[15].value = '可同時造成物理傷害及魔法傷害的技能。主手裝備拳套/法杖時，分別提升物理/魔法傷害的比例。';
								break;
							case 6:
								SI[8].value = '無限制';
								SI[9].value = 200;
								SI[10].value = 12;
								SI[11].value = '傷害、須詠唱';
								SI[12].value = '光屬性。<br />魔法傷害/魔法慣性。';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '以神聖之力懲罰惡徒。<br />些微無視對手防禦力，給予魔法傷害。';
								SI[15].value = '傷害偏低，附帶少量魔法貫穿的魔法技能。';
								break;
							case 7:
								SI[8].value = '無限制';
								SI[9].value = 300;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '狀態、效果';
								SI[13].value = '？';
								SI[14].value = '附加緩和衝擊的屏障。<br />短時間內，增加對異常狀態「膽怯」的耐性。';
								SI[15].value = '此技能目前資料不足。';
								break;
						}
						break;
				}
				break;
			case 2:
				switch (No_ST)
				{
					case 0:
						switch (T_no_S)
						{
							case 1:
								SI[8].value = '無限制';
								SI[11].value = '被動、效果';
								SI[14].value = '縮短體力耗盡後的復活時間。<br />可以更快回歸戰場。';
								SI[15].value = '可大幅縮短HP耗盡後所需的復活時間。';
								break;
							case 2:
								SI[8].value = '無限制';
								SI[11].value = '被動、效果';
								SI[14].value = '每次升級技能，戰鬥中獲得經驗值增加1%。';
								SI[15].value = '可小幅提升擊敗敵人時獲得的經驗值。';
								break;
							case 3:
								SI[8].value = '無限制';
								SI[11].value = '被動、效果';
								SI[14].value = '每次升級技能，戰鬥時的掉寶率增加1%。';
								SI[15].value = '可小幅提升擊敗敵人時物品的掉落率。';
								break;
							case 4:
								SI[8].value = '無限制';
								SI[11].value = '被動、加成';
								SI[14].value = '增加非戰鬥時的HP自然回復力。';
								SI[15].value = '可大幅提升HP自然恢復。';
								break;
							case 5:
								SI[8].value = '無限制';
								SI[11].value = '被動、加成';
								SI[14].value = '稍微提升HP最大值。';
								SI[15].value = '可中幅提升HP上限。';
								break;
							case 6:
								SI[8].value = '無限制';
								SI[11].value = '被動、加成';
								SI[14].value = '戰鬥時也能自然回復HP。<br />但回復量不值得期待。';
								SI[15].value = '學習後，在戰鬥中能夠極緩慢地自然回復HP。';
								break;
							case 7:
								SI[8].value = '無限制';
								SI[11].value = '被動、加成';
								SI[14].value = '增加非戰鬥時的MP自然回復力。';
								SI[15].value = '可大幅提升MP自然恢復。';
								break;
							case 8:
								SI[8].value = '無限制';
								SI[11].value = '被動、加成';
								SI[14].value = '稍微提升MP最大值。';
								SI[15].value = '可中幅提升MP上限。';
								break;
							case 9:
								SI[8].value = '無限制';
								SI[11].value = '被動、加成';
								SI[14].value = '戰鬥時也能自然回復MP。<br />但回復量不值得期待。';
								SI[15].value = '學習後，在戰鬥中能夠極緩慢地自然回復MP。';
								break;
						}
						break;
					case 1:
						switch (T_no_S)
						{
							case 1:
								SI[8].value = '無限制';
								SI[11].value = '被動、效果';
								SI[14].value = '提高支援選單內「急救」技能的效果，<br />大幅縮短復活時間。';
								SI[15].value = '可大幅增加對目標「急救」時，該目標所減少的復活時間。';
								break;
							case 2:
								SI[8].value = '無限制';
								SI[9].value = 100;
								SI[10].value = '？';
								SI[11].value = '恢復、須詠唱';
								SI[13].value = 'Can not be |,|無法';
								SI[14].value = '稍微回復對方的HP。<br />對體力耗盡的玩家使用，可縮短對方復活所需時間。';
								SI[15].value = '可使目標瞬間恢復少量HP的技能。恢復量會受目標HP上限影響。對體力耗盡的目標使用時，將少量減少該目標一定的復活時間。';
								break;
							case 3:
								SI[8].value = '無限制';
								SI[9].value = 200;
								SI[10].value = '？';
								SI[11].value = '效果、瞬發';
								SI[13].value = 'Can not be |,|無法';
								SI[14].value = '解除對方的1個異常狀態。<br />技能升級後，再追加預防效果。<br />最多可解除2項異常。';
								SI[15].value = '可瞬間解除目標異常狀態的主動技能。';
								break;
							case 4:
								SI[8].value = '無限制';
								SI[9].value = 400;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '效果、瞬發、設置';
								SI[13].value = 'Can be |,|可以';
								SI[14].value = '產生守護聖域，保護夥伴。<br />待在聖域裡可減輕損傷。減輕程度受各角色HP上限影響。<br />高強度傷害將貫穿聖域，無視減輕效果。';
								SI[15].value = '施放後將會於原地產生一個區域，在區域內的友方將大幅減少受到的傷害。一角色受到的傷害超過該角色HP上限一定比例時，該傷害將不會被減少。';
								break;
							case 5:
								SI[8].value = '無限制';
								SI[9].value = 300;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '效果、瞬發、恢復';
								SI[13].value = '?';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 6:
								SI[8].value = '無限制';
								SI[9].value = 300;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '狀態、瞬發、光環';
								SI[14].value = '產生能持續回復HP的區域。<br />使用後防禦力降低。遭受攻擊後即失去效果。';
								SI[15].value = '施放後將會產生一光環。在光環內的友方將會緩慢恢復HP。持續時間極長，期間內自身防禦力將會降低，受到任意大於等於1的傷害時，此光環即消失。';
								break;
							case 7:
								SI[8].value = '無限制';
								SI[9].value = 400;
								Unlimited
								SI[11].value = '狀態、瞬發、光環';
								SI[13].value = 'Can not be |,|無法';
								SI[14].value = '產生能強化攻擊力與武器性能的區域。<br />使用後命中降低。遭受攻擊後即失去效果。';
								SI[15].value = '施放後將會產生一光環。在光環內的友方將會少量增加攻擊力。持續時間極長，期間內自身命中將會降低，受到任意大於等於1的傷害時，此光環即消失。';
								break;
							case 8:
								SI[8].value = '無限制';
								SI[9].value = 500;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '狀態、瞬發、光環';
								SI[13].value = 'Can not be |,|無法';
								SI[14].value = '產生能縮短蓄力、詠唱時間的區域。<br />使用後MP回復能力降低。遭受攻擊後即失去效果。';
								SI[15].value = '此技能目前資料不足。施放後將會產生一光環。光環內友方施放技能的詠唱時間及蓄力時間將會減少。持續時間極長，期間內自身MP自然恢復將會降低，受到任意大於等於1的傷害時，此光環即消失。';
								break;
							case 9:
								SI[8].value = '無限制';
								SI[9].value = 600;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '狀態、瞬發、光環';
								SI[13].value = 'Can not be |,|無法';
								SI[14].value = '';
								SI[15].value = '';
								break;
							case 10:
								SI[8].value = '無限制';
								SI[9].value = 300;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '狀態、瞬發、光環';
								SI[13].value = 'Can not be |,|無法';
								SI[14].value = '產生能持續回復MP的區域。<br />使用後攻擊力降低。遭受攻擊後即失去效果。';
								SI[15].value = '施放後將會產生一光環。在光環內的友方將會中幅逐漸恢復MP。持續時間極長，期間內自身攻擊力將會降低，受到任意大於等於1的傷害時，此光環即消失。';
								break;
							case 11:
								SI[8].value = '無限制';
								SI[9].value = 400;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '狀態、瞬發、光環';
								SI[13].value = 'Can not be |,|無法';
								SI[14].value = '產生能強化防禦力與防具性能的區域。<br />使用後迴避率降低。遭受攻擊後即失去效果。';
								SI[15].value = '施放後將會產生一光環。在光環內的友方將會提升防禦力。持續時間極長，期間內自身迴避將會降低，受到任意大於等於1的傷害時，此光環即消失。';
								break;
							case 12:
								SI[8].value = '無限制';
								SI[9].value = 300;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '狀態、瞬發、光環';
								SI[13].value = 'Can not be |,|無法';
								SI[14].value = '產生能抵抗異常狀態的區域。<br />使用後攻擊速度降低。遭受攻擊後即失去效果。';
								SI[15].value = '此技能目前資料不足。施放後將會產生一光環。在光環內的友方將會提升異常抗性。持續時間極長，期間內自身攻擊速度將會降低，受到任意大於等於1的傷害時，此狀態即消失。';
								break;
							case 13:
								SI[8].value = '無限制';
								SI[9].value = 600;
								SI[10].value = 'Unlimited|,|無限制';
								SI[11].value = '狀態、瞬發、光環';
								SI[13].value = 'Can not be |,|無法';
								SI[14].value = '';
								SI[15].value = '';
								break;
						}
						break;
					case 2:
						switch (T_no_S)
						{
							case 1:
								SI[8].value = '無限制';
								SI[11].value = '被動、加成';
								SI[14].value = '稍微增加MATK。<br />增加量依玩家等級而定。';
								SI[15].value = '可少量提升魔法攻擊力。提昇量受玩家等級影響。';
								break;
							case 2:
								SI[8].value = '無限制';
								SI[11].value = '被動、效果';
								SI[14].value = '魔法攻擊時，有極低機率提高最終傷害值。';
								SI[15].value = '學習後，在造成魔法傷害時，該傷害將有機率中幅提升。';
								break;
							case 3:
								SI[8].value = '無限制';
								SI[11].value = '被動、效果';
								SI[14].value = '減少翻覆或昏厥等無法行動狀態下時遭受到的傷害。';
								SI[15].value = '此技能目前資料不足。在遭受控制狀態時，可減少受到的傷害。';
								break;
							case 4:
								SI[8].value = '無限制';
								SI[11].value = '被動、加成';
								SI[14].value = '稍微增加MATK。<br />增加量依玩家等級而定。';
								SI[15].value = '可少量提升魔法攻擊力。提昇量受玩家等級影響。提昇量同「提升魔力」。';
								break;
							case 6:
								SI[8].value = '無限制';
								SI[11].value = '被動、加成';
								SI[14].value = '稍微增加ATK。<br />增加量依玩家等級而定。';
								SI[15].value = '可少量提升物理攻擊力。提昇量受玩家等級影響。';
								break;
							case 7:
								SI[8].value = '無限制';
								SI[11].value = '被動、效果';
								SI[14].value = '物理攻擊時，有極低機率提高最終傷害值。';
								SI[15].value = '學習後，在造成物理傷害時，該傷害將有機率中幅提升。';
								break;
							case 8:
								SI[8].value = '無限制';
								SI[11].value = '被動、加成';
								SI[14].value = '稍微提升暴擊的發生率與傷害值。';
								SI[15].value = '可中量提升爆擊率及爆擊傷害。';
								break;
							case 9:
								SI[8].value = '無限制';
								SI[11].value = '被動、加成';
								SI[14].value = '稍微增加ATK。<br />增加量依玩家等級而定。';
								SI[15].value = '可少量提升物理攻擊力。提昇量受玩家等級影響。提昇量同「提升攻擊力」。';
								break;
							case 11:
								SI[8].value = '無限制';
								SI[11].value = '被動、加成';
								SI[14].value = '稍微增加DEF．MDEF。<br />增加量依玩家等級而定。';
								SI[15].value = '可少量提升防禦力。提昇量受玩家等級影響。';
								break;
							case 12:
								SI[8].value = '無限制';
								SI[11].value = '被動、加成';
								SI[14].value = '稍微提升迴避率。';
								SI[15].value = '可極少量提升迴避。';
								break;
							case 13:
								SI[8].value = '無限制';
								SI[11].value = '被動、加成';
								SI[14].value = '稍微提升命中率。';
								SI[15].value = '可極少量提升命中。';
								break;
							case 14:
								SI[8].value = '無限制';
								SI[11].value = '被動、加成';
								SI[14].value = '稍微增加DEF．MDEF。<br />增加量依玩家等級而定。';
								SI[15].value = '可少量提升防禦力。提昇量受玩家等級影響。提昇量同「提升防禦力」。';
								break;
						}
						break;
				}
				break;
			case 5:
				switch (No_ST)
				{
					case 0:
						switch (T_no_S)
						{
							case 1:
								SI[8].value = '？';
								SI[11].value = '被動、天賦';
								SI[14].value = '無法擁有生命。<br />具有閃躲一切的能力。免疫一切傷害及異常效果。<br />可以使用特別的魔法，<br />但本身將無法造成任何傷害。';
								SI[15].value = '(無)';
								break;
							case 2:
								SI[8].value = '魔法棒';
								SI[9].value = '無消耗';
								SI[10].value = 15;
								SI[11].value = '效果、須詠唱';
								SI[14].value = '產生一個小區域，<br />使被施放的目標無法離開。';
								SI[15].value = '(無)';
								break;
							case 3:
								SI[8].value = '魔法棒';
								SI[9].value = '無消耗';
								SI[10].value = 15;
								SI[11].value = '效果、蓄能';
								SI[14].value = '壓縮空氣，並予以釋放。<br />釋放後將產生大範圍的爆炸，<br />無視敵我逼退範圍內所有生物。<br />可選擇要施放多少時間，<br />爆炸的範圍及逼退距離視施放時間而定。';
								SI[15].value = '(無)';
								break;
							case 4:
								SI[8].value = '魔法棒';
								SI[9].value = '無消耗';
								SI[10].value = 15;
								SI[11].value = '效果、須詠唱';
								SI[14].value = '以魔力包覆目標。<br />使目標無法施放任何技能。<br />對同樣目標無法重複施放。';
								SI[15].value = '(無)';
								break;
							case 5:
								SI[8].value = '魔法棒';
								SI[9].value = '無消耗、須詠唱';
								SI[10].value = 15;
								SI[11].value = '效果';
								SI[14].value = '完全淨化目標。<br />使目標身上所有的狀態消失，包括增益及減益狀態。<br />被淨化的目標將有副作用，<br />短時間內無法獲得任何增異狀態。';
								SI[15].value = '(無)';
								break;
							case 6:
								SI[8].value = '魔法棒';
								SI[9].value = '無消耗';
								SI[10].value = 15;
								SI[11].value = '效果、須詠唱';
								SI[14].value = '完全恢復目標所有的生命。<br />有著一定時間內大幅降低傷害輸出的副作用。<br />被降低的傷害將在一定時間內逐漸恢復。';
								SI[15].value = '(無)';
								break;
							case 7:
								SI[8].value = '魔法棒';
								SI[9].value = '無消耗';
								SI[10].value = 15;
								SI[11].value = '效果、瞬發';
								SI[14].value = '使目標降低一半的傷害輸出，並無法施放技能。<br />將在短時間內快速恢復。<br />對目標已經施放完畢的技能也有效果。';
								SI[15].value = '(無)';
								break;
							case 8:
								SI[8].value = '魔法棒';
								SI[9].value = '無消耗';
								SI[10].value = 15;
								SI[11].value = '效果、蓄能';
								SI[14].value = '一定時間的詠唱後，<br />瞬間向前方移動一段距離。';
								SI[15].value = '(無)';
								break;
							case 9:
								SI[8].value = '魔法棒';
								SI[9].value = '無消耗';
								SI[10].value = 15;
								SI[11].value = '效果、須詠唱';
								SI[14].value = '使一友方隱形。<br />隱形後不會被鎖定，且不會產生仇恨值。';
								SI[15].value = '(無)';
								break;
							case 10:
								SI[8].value = '魔法棒';
								SI[9].value = '無消耗';
								SI[10].value = 15;
								SI[11].value = '效果、須詠唱';
								SI[14].value = '控制一區域的重力。<br />不分敵我，<br />所有在範圍內的生物都會受到「遲緩」及「乏力」效果。';
								SI[15].value = '(無)';
								break;
							case 11:
								SI[8].value = '魔法棒';
								SI[9].value = '無消耗';
								SI[10].value = 15;
								SI[11].value = '效果、須詠唱';
								SI[14].value = '使範圍內的友方身上產生魔法霧氣。<br />魔法霧氣可為目標抵擋所有傷害值，<br />承受一定的傷害後將會消散。<br />魔法霧氣所能承受的傷害受Matk影響。';
								SI[15].value = '(無)';
								break;
						}
						break;
				}
				break;
		}
		
		//額外加成
		let Cur_Skill = cy_skillSystem.skillTreeType[No_STT].skillTree[No_ST].skill[No_S];
		for (let i=0;i<Cur_Skill.equipGain.length; ++i)
		{
			if ( Cur_Skill.equipGain[i].itemNoConfirm > 7 && Cur_Skill.equipGain[i].itemNoConfirm < 16)	//0~7 & 16~29
			{
					if ( armsDoor(Cur_Skill.equipGain[i].mainWeaponConfirm, Cur_Skill.equipGain[i].subWeaponConfirm, Cur_Skill.equipGain[i].bodyArmorConfirm) )//當前裝備符合Skill Item Gain之裝備條件
				{
					SI[Cur_Skill.equipGain[i].itemNoConfirm].value += Cur_Skill.equipGain[i].addValue;
				}
			}
		}
		
		if ( String(SI[10].value).includes('無限制') )
		{
			SI[10].unit = '';
		}
	}
	