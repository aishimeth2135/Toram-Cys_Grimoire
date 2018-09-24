
	/* let WeapArms_map = {'1hSword': 0, '2hSword': 1, 'Bow': 2, 'Bowgun': 3, 'Staff': 4, 'MagicDevice': 5, 'Knuckles': 6, 'Halberd': 7, 'DualSword': 8, 'Katana': 9, 'Other': 10};
		let AuArms_map = {'Dagger': 0, 'Shield': 1, 'Arrow': 2, 'MagicDevice': 3, 'Knuckles': 4, 'Katana': 5, 'Other': 6}; */
	function input_skillCaptionSI_2(No_STT, No_ST, No_S, No_Branch){
		No_STT = Number(No_STT);
		No_ST = Number(No_ST);
		No_S = Number(No_S);
		
		let T_no_S = all_skilltree_type[No_STT].STt_skilltree[No_ST].ST_skill[No_S].Sk_no;
		
		let T_skillLv = get_skillLv();
		
		let _t1 = '', _t2 = '', _t3 = '';
		
		//初始化Skill Item
		for (let i=0; i<=7; ++i)
		{
			all_SI[i].SI_value = 0;
			all_SI[i].SI_name = all_SI[i].def_name;
			all_SI[i].SI_unit = all_SI[i].def_unit;
		}
		for (let i=16; i<all_SI.length; ++i)
		{
			all_SI[i].SI_value = 0;
			all_SI[i].SI_name = all_SI[i].def_name;
			all_SI[i].SI_unit = all_SI[i].def_unit;
		}
		
		//根據技能編號及分支名稱輸入SI_value
		switch (No_STT)
		{
			case 0:
				switch (No_ST)
				{
					case 0:
						switch (T_no_S)
						{
							case 1:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 50 + 5*T_skillLv;
										all_SI[3].SI_value = 100 + 5*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 5*T_skillLv;
										all_SI[26].SI_value = 'Flinch|,|_@膽怯';
										break;
								}
								break;
							case 2:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 150 + 5*T_skillLv;
										all_SI[3].SI_value = 150 + 10*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'extremely fast|,|極快';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_name = 'If the skill hits, in |,|若技能未被迴避，';
										all_SI[27].SI_value = 5 + 5*parseInt(T_skillLv/6);
										all_SI[27].SI_unit = ' secs. |,|秒';
										all_SI[28].SI_name = 'crit rate +|,|內自身暴擊率+';
										all_SI[28].SI_value = 25;
										all_SI[28].SI_unit = '.|,|。';
										break;
								}
								break;
							case 3:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 200 + 10*T_skillLv;
										all_SI[3].SI_value = 150 + 5*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'extremely fast|,|極快';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_name = '裝備單手劍時，';
										all_SI[27].SI_value = '';
										all_SI[27].SI_unit = '。<br />';
										all_SI[28].SI_value = '若技能未被迴避，將獲得_&1_狀態，強化下一招技能。';
										break;
									case 1:
										all_SI[5].SI_name = '攻擊MP恢復+';
										all_SI[5].SI_value = 2*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_value = '施放任意技能後，該技能動作時間減少40%，並使狀態消失。';
										all_SI[16].SI_value = '效果狀態';
										all_SI[27].SI_value = '持續時間為無限。施放任意技能後此狀態結束。';
										break;
								}
								break;
							case 4:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '狀態作用期間，固定次數內的普通攻擊獲得額外效果。<br />前10次普通攻擊轉為_&1_；第11次普通攻擊將附帶_&2_及_&3_。';
										all_SI[16].SI_value = '效果狀態';
										all_SI[27].SI_value = '持續時間為無限。在發動_&2_或受到異常狀態後，此狀態結束。';
										break;
									case 1:
										all_SI[5].SI_name = '普通攻擊之傷害提升(有效Atk×';
										all_SI[5].SI_value = input_SI_value_bySelection('Weap',['1hSword'],[10 + 9*T_skillLv, 10 + 4*T_skillLv]);
										all_SI[5].SI_unit = '%)。';
										all_SI[6].SI_name = '攻擊MP恢復+';
										all_SI[6].SI_value = input_SI_value_bySelection('Weap', ['DualSword'],[1.25*T_skillLv, 2.5*T_skillLv]);
										all_SI[6].SI_unit = '。';
										all_SI[16].SI_value = '強化普通攻擊';
										all_SI[17].SI_value = '同普通攻擊';
										all_SI[20].SI_value = 1;
										break;
									case 2:
										all_SI[0].SI_value = '每次傷害：(共用判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 300 + 20*T_skillLv;
										all_SI[3].SI_value = 50 + 5*T_skillLv;
										all_SI[16].SI_value = '追加傷害';
										all_SI[20].SI_value = 2;
										break;
									case 3:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 300 + 20*T_skillLv;
										all_SI[3].SI_value = 250 + 5*T_skillLv;
										all_SI[16].SI_value = '追加傷害';
										all_SI[20].SI_value = 1;
										break;
								}
								break;
							case 5:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '對目標發動_&1_，墜地時產生_&2_造成範圍傷害。技能使用期間，自身處於無敵狀態。';
										all_SI[17].SI_value = '?';
										break;
									case 1:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 400 + 20*T_skillLv;
										all_SI[3].SI_value = 400 + 20*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '?';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = '?';
										all_SI[26].SI_value = '_@眩暈';
										break;
									case 2:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 0;
										all_SI[3].SI_value = 100 + 50*T_skillLv;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[17].SI_value = '?';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '目標位置';
										all_SI[23].SI_value = '?';
										break;
								}
								break;
							case 6:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 100 + 5*T_skillLv;
										all_SI[3].SI_value = 100 + 5*T_skillLv;
										all_SI[16].SI_value = '範圍直線傷害';
										all_SI[17].SI_value = 'quite fast|,|稍快';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置-目標位置';
										all_SI[23].SI_value = 2;
										all_SI[27].SI_name = '此技能之暴擊率+';
										all_SI[27].SI_value = input_SI_value_bySelection('Weap', ['1hSword'],[10*T_skillLv, T_skillLv]);
										all_SI[27].SI_unit = '。';
										all_SI[28].SI_value = '施放時將會迅速衝刺至敵人身旁，並對路徑上的所有敵人造成傷害。<br />施放完成後，獲得_&1_狀態。';
										break;
									case 1:
										all_SI[5].SI_value = '狀態期間若施放「音速斬切」，該「音速斬切」將會轉為「超音速斬切」(_&2_)，並使此狀態結束。';
										all_SI[16].SI_value = '效果狀態';
										all_SI[24].SI_value = 5;
										all_SI[27].SI_value = '無論施放「音速斬切」還是「超音速斬切」，都會獲得_&1_效果。也就是說，如果時間控制得宜，「超音速斬切」是可以連續施放的。';
										break;
									case 2:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 100 + 5*T_skillLv;
										all_SI[3].SI_value = 200 + 10*T_skillLv;
										all_SI[16].SI_value = '範圍直線傷害';
										all_SI[17].SI_value = 'quite fast|,|稍快';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置-目標後方1m處';
										all_SI[23].SI_value = 2;
										all_SI[27].SI_name = '此技能之暴擊率+';
										all_SI[27].SI_value = input_SI_value_bySelection('Weap', ['1hSword'],[10*T_skillLv,T_skillLv]);
										all_SI[27].SI_unit = '。';
										all_SI[28].SI_value = '施放時將會迅速衝刺至敵人身後1m處，並對路徑上的所有敵人造成傷害。<br />施放完成後，獲得_&1_狀態。';
										break;
								}
								break;
							case 7:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '每次傷害：(共用判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 30;
										all_SI[3].SI_value = 10 + 3*T_skillLv;
										all_SI[16].SI_value = '設置單體傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[20].SI_value = 10;
										all_SI[24].SI_value = '約1~2';
										all_SI[27].SI_value = '此技能必定不暴擊。';
										all_SI[28].SI_name = '若此技能未被迴避，' + (2+T_skillLv) + '秒內自身暴擊傷害+[';
										all_SI[28].SI_value = input_SI_value_bySelection('Weap', ['1hSword'],[(T_skillLv+1)/2 + '+(DEX×2%)', (T_skillLv+1)/4 + '+(DEX×1%)']);
										all_SI[28].SI_unit = ']。(計算完後小數無條件捨棄)';
										break;
								}
								break;
							case 8:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '向目標發射一道_&1_，刃風將在造成傷害後消失，並隨即於目標位置產生_&2_。';
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										break;
									case 1:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 0;
										all_SI[3].SI_value = 150 + 10*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[20].SI_value = 1;
										break;
									case 2:
										all_SI[0].SI_value = '每下傷害：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 80;
										all_SI[3].SI_value = 50 + 5*T_skillLv;
										all_SI[16].SI_value = '設置範圍傷害';
										all_SI[20].SI_value = parseInt((T_skillLv+3)/2);
										all_SI[22].SI_value = '刃風造成傷害時目標的位置';
										all_SI[23].SI_value = 3 + parseInt(T_skillLv/3);
										all_SI[24].SI_value = '約' + (3+parseInt(T_skillLv/3))*0.5;
										break;
								}
								break;
							case 9:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '每次傷害：(共用判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 30*T_skillLv;
										all_SI[3].SI_value = 75*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '?';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_name = '若沒有處於_&1_狀態，將獲得_&1_狀態，並恢復';
										all_SI[27].SI_value = '';
										all_SI[27].SI_unit = '的HP。';
										break;
									case 1:
										all_SI[5].SI_name = '武器Atk+';
										all_SI[5].SI_value = T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '狀態加成';
										all_SI[24].SI_value = 10;
										break;
								}
								break;
							case 10:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'Atk+';
										all_SI[5].SI_value = 1 + parseInt((T_skillLv+2)/5);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '武器Atk+';
										all_SI[6].SI_value = 3*T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 11:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '攻擊速度+';
										all_SI[5].SI_value = 10*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '攻擊速度+';
										all_SI[6].SI_value = T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 12:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '「劍術技能」中的所有攻擊技能，總傷害提升';
										all_SI[5].SI_value = 2*T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動增幅';
										break;
								}
								break;
							case 13:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'Atk+';
										all_SI[5].SI_value = T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '隊伍狀態加成';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[24].SI_value = 15 + T_skillLv;
										all_SI[27].SI_value = '獲得狀態時，會消除身上的_@畏懼狀態。';
										break;
								}
								break;
							case 14:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '普通攻擊之傷害提升(有效Atk×';
										all_SI[5].SI_value = 10*T_skillLv;
										all_SI[5].SI_unit = '%)。';
										all_SI[6].SI_value = '使技能「爆氣斬」的狀態不會因為受到異常狀態而解除。';
										all_SI[7].SI_value = '使自身_&1_，並_&2_。';
										all_SI[16].SI_value = '狀態效果';
										all_SI[24].SI_value = 10;
										break;
									case 1:
										all_SI[5].SI_name = '攻擊速度+';
										all_SI[5].SI_value = 100*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '攻擊速度+';
										all_SI[6].SI_value = 10*T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[7].SI_name = '爆擊率+';
										all_SI[7].SI_value = input_SI_value_bySelection('Weap', ['2hSword'], [2*parseInt(2.5*T_skillLv), parseInt(2.5*T_skillLv)]);
										all_SI[7].SI_unit = '。';
										break;
									case 2:
										all_SI[5].SI_name = 'Def';
										all_SI[5].SI_value = input_SI_value_bySelection('Weap', ['1hSword'], [parseInt((-100 + T_skillLv)/2), -100 + T_skillLv]);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = 'Mdef';
										all_SI[6].SI_value =  input_SI_value_bySelection('Weap', ['1hSword'], [parseInt((-100 + T_skillLv)/2), -100 + T_skillLv]);
										all_SI[6].SI_unit = '%。';
										all_SI[7].SI_name = '穩定率';
										all_SI[7].SI_value =  input_SI_value_bySelection('Weap', ['1hSword', '2hSword'], [parseInt((-100 + 5*T_skillLv)/2), parseInt((-100 + 5*T_skillLv)/2), -100 + 5*T_skillLv]);
										all_SI[7].SI_unit = '%。';
										break;
								}
								break;
							}
						break;
					case 1:
						switch (T_no_S)
						{
							case 1:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 50 + 8*T_skillLv;
										all_SI[3].SI_value = 125 + 5*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[19].SI_value = 5.5 - 0.5*parseInt(T_skillLv/2);
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 10 + 10*parseInt((T_skillLv+2)/3);
										all_SI[26].SI_value = '_@翻覆';
										
										all_SI[27].SI_name = '<br />此技能對處於_@遲緩狀態的目標暴擊率+';
										all_SI[27].SI_value = 5*T_skillLv;
										all_SI[27].SI_unit = '。';
										break;
								}
								break;
							case 2:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '每下傷害： (共用判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 30 + 4*T_skillLv;
										all_SI[3].SI_value = 25 + 5*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '約1.5秒';
										all_SI[20].SI_value = 3;
										
										all_SI[27].SI_name = '此技能之第二箭物理貫穿+';
										all_SI[27].SI_value = 4*T_skillLv;
										all_SI[27].SI_unit = '%，';
										all_SI[28].SI_name = '<br />第三箭物理貫穿+';
										all_SI[28].SI_value = 8*T_skillLv;
										all_SI[28].SI_unit = '%。';
										break;
								}
								break;
							case 3:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 200 + 20*T_skillLv;
										all_SI[3].SI_value = 300 + 50*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[19].SI_value = 7 - 0.5*T_skillLv;
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 40 + 4*T_skillLv;
										all_SI[26].SI_value = '_@降防';
										
										all_SI[27].SI_name = '<br />此技能的總暴擊率降低';
										all_SI[27].SI_unit = '%。';
										break;
								}
								break;
							case 4:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '每下傷害：(分開判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 50 + 10*parseInt((T_skillLv+1)/2);
										all_SI[3].SI_value = 100 + 6*parseInt(T_skillLv/2);
										all_SI[16].SI_value = '設置範圍傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[20].SI_value = input_SI_value_bySelection('Weap', ['Bow'], [2*(1 + parseInt(T_skillLv/3)), 1 + parseInt(T_skillLv/3)]);
										all_SI[22].SI_value = '目標位置';
										all_SI[23].SI_value = 2;
										all_SI[24].SI_value = 1 + parseInt(T_skillLv/3);
										break;
								}
								break;
							case 5:
								switch (No_Branch)
								{
									case 0:
										switch (1 + parseInt((T_skillLv+2)/3))
										{
											case 2: _t1 = '1/3'; break;
											case 3: _t1 = '1/3/8'; break;
											case 4: _t1 = '1/3/8/18'; break;
											case 5: _t1 = '1/3/8/18/35'; break;
										}
										all_SI[0].SI_value = `此技能施放完畢後，將會獲得一狀態，並使消耗MP變為0。狀態期間將會隨時間充能，並根據充能層數增加此技能的傷害。再次施放時將會發射此技能，並使狀態結束。<br />充能期間角色旁邊會出現一顆橘色的小球，充能之層數最多達${1 + parseInt((T_skillLv+2)/3)}層，層數將在充能${_t1}秒時增加。<br />受到任何傷害或充能達最大層數時，充能將會停止計時，橘色小球將會變成紅色。<br /><br />火線傷害：`;
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 300 + 10*T_skillLv;
										all_SI[3].SI_value = '(' + input_SI_value_bySelection('Weap', ['Bow'], [500 + 50*T_skillLv, 400 + 50*T_skillLv]) + ' ×充能層數)';
										all_SI[5].SI_value = '<p此段傷害將會飛行至100m處</p>';
										all_SI[16].SI_value = '直線範圍傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[20].SI_value = '(每次) 1';
										all_SI[23].SI_value = 1;
										all_SI[24].SI_value = parseInt(T_skillLv*T_skillLv/2) + 10;
										
										all_SI[27].SI_name = '此段傷害結束後，將會朝施放目標發射(充能層數-1)次的額外射擊，每一下射擊的傷害為[(有效Atk +' + (300 + 10*T_skillLv)*1 + ')*';
										all_SI[27].SI_value = 200;
										all_SI[27].SI_unit = '%]的額外單體攻擊。';
										all_SI[28].SI_value = '<br />若場上存在技能「分身射手」創造出的分身，分身將會發射_&1_。';
										all_SI[29].SI_value = '<br />- 若將此技能擺放於連擊中，此技能的傷害將同時受「開始充能」及「發射」時的連擊效果影響，但同樣的連擊效果無法重覆作用。<br />- 若充能不到1秒就發射，角色頭上將會冒出問號，此技能將沒有任何傷害，並使狀態結束；若充能未達一秒就受到傷害而使充能停止，技能狀態將直接結束。<br />- 技能「斬釘截鐵」格檔傷害時，將不會使充能中斷。';
										break;
									case 1:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 60 + 2*T_skillLv;
										all_SI[3].SI_value = '(' + (80 + 10*T_skillLv) + '*充能層數)';
										all_SI[5].SI_value = '<p此段傷害將會飛行至100m處</p>';
										all_SI[16].SI_value = '直線範圍傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[20].SI_value = 1;
										all_SI[23].SI_value = 1;
										break;
								}
								break;
							case 6:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 50 + 5*T_skillLv;
										all_SI[3].SI_value = 100 + 5*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 50 + 2*T_skillLv
										all_SI[26].SI_value = '_@遲緩';
										break;
								}
								break;
							case 7:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 100 + 20*T_skillLv;
										all_SI[3].SI_value = 110 + 5*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 60 + T_skillLv;
										all_SI[26].SI_value = '_@麻痺';
										
										all_SI[27].SI_name = '<br />若技能未被迴避，10秒內自身穩定度+';
										all_SI[27].SI_value = T_skillLv;
										all_SI[27].SI_unit = '%。';
										break;
								}
								break;
							case 8:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 200 + 30*T_skillLv;
										all_SI[3].SI_value = 120 + 5*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 50 + 2*T_skillLv;
										all_SI[26].SI_value = '_@盲目';
										
										all_SI[27].SI_name = '<br />若技能未被迴避，10秒內自身命中+';
										all_SI[27].SI_value = parseInt(T_skillLv*T_skillLv/2) + 5*T_skillLv;
										all_SI[27].SI_unit = '。';
										break;
								}
								break;
							case 9:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 300 + 40*T_skillLv;
										all_SI[3].SI_value = 1300 + 5*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 50 + 2*T_skillLv;
										all_SI[26].SI_value = '_@乏力';
										break;
								}
								break;
							case 10:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'Atk+';
										all_SI[5].SI_value = 1 + parseInt((T_skillLv+2)/5);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '武器Atk+';
										all_SI[6].SI_value = 3*T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 11:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '施放完畢後，之後發動的';
										all_SI[5].SI_value = T_skillLv;
										all_SI[5].SI_unit = '次攻擊不會產生仇恨值。<br />(攻擊：普通攻擊或技能)';
										all_SI[16].SI_value = '狀態效果';
										all_SI[17].SI_value = 'slow|,|慢';
										break;
								}
								break;
							case 12:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '射程高於或等於8m之攻擊技能，總傷害上升';
										all_SI[5].SI_value = T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動';
										break;
								}
								break;
							case 13:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '在有實際消耗MP的攻擊技能施放完畢後，有';
										all_SI[5].SI_value = 5 + 2*T_skillLv;
										all_SI[5].SI_unit = '%機率恢復100MP。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '只有攻擊類技能才有效果。';
										all_SI[28].SI_value = '實際消耗，意即因連擊配置而使MP消耗為0的技能不會觸發。';
										break;
								}
								break;
							case 14:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '詠唱完畢後，將創造一分身於自身前方2m處。分身將會對鎖定的目標不斷進行一般攻擊。<br />分身的射程為角色裝備武器的最大攻擊距離、攻擊速度繼承角色的攻擊速度。<br />分身的一般攻擊將會觸發攻擊MP恢復、產生仇恨值，但不會產生慣性。<br /><br />分身傷害：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[3].SI_value = 20 + 8*T_skillLv;
										all_SI[24].SI_value = 10 + parseInt(T_skillLv*T_skillLv/2);
										all_SI[27].SI_value = '- 分身的攻擊會觸發_@猛毒的扣血效果。<br />- 強射無法增加分身的攻擊距離。<br />- 「提升一般攻擊傷害」類的狀態，不會影響分身的傷害。<br />- 裝備雙劍時，分身一樣會提供兩倍的攻擊MP恢復，不過只會發動主手武器的一般攻擊。';
										break;
								}
								break;
						}
						break;						
					case 2:
						switch (T_no_S)
						{
							case 1:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '每下傷害：(共用判定)';
										all_SI[1].SI_value = 'Valid Matk|,|有效Matk';
										all_SI[2].SI_value = 10 + T_skillLv;
										all_SI[3].SI_value = 45 + 5*T_skillLv;
										all_SI[16].SI_value = '設置單體傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[18].SI_value = 2;
										all_SI[20].SI_value = 1 + parseInt((T_skillLv+1)/2);
										all_SI[24].SI_value = '約' + (1 + parseInt((T_skillLv+1)/2))/2;
										break;
								}
								break;
							case 2:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Matk|,|有效Matk';
										all_SI[2].SI_value = 50 + 15*T_skillLv;
										all_SI[3].SI_value = 150 + 10*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										all_SI[25].SI_value = 2*T_skillLv;
										all_SI[26].SI_value = '受到異常狀態';
										
										all_SI[27].SI_value = '<br />各屬性的異常狀態不盡相同。';
										all_SI[28].SI_value = '更多說明可查看_@法術/長槍補述。';
										break;
								}
								break;
							case 3:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '每下傷害：(共用判定)';
										all_SI[1].SI_value = 'Valid Matk|,|有效Matk';
										all_SI[2].SI_value = 25 + 10*T_skillLv;
										all_SI[3].SI_value = 75 + 5*T_skillLv;
										all_SI[16].SI_value = '設置單體傷害';
										all_SI[17].SI_value = 'quite fast|,|稍快';
										all_SI[18].SI_value = 2;
										all_SI[20].SI_value = 2 + parseInt(T_skillLv/6);
										all_SI[24].SI_value = 3.5*(2 + parseInt((T_skillLv-1)/5));
										all_SI[25].SI_value = input_SI_value_bySelection('Weap', ['Staff', 'MagicDevice'], [6*T_skillLv, 6*T_skillLv, T_skillLv]);
										all_SI[26].SI_value = '_@停止';	
										
										all_SI[27].SI_value = '<br />每下傷害均有機率造成_@停止狀態。';
										break;
								}
								break;
							case 4:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Matk|,|有效Matk';
										all_SI[2].SI_value = 100 + 10*T_skillLv;
										all_SI[3].SI_value = 25*T_skillLv;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[18].SI_value = parseInt(3 - T_skillLv/3);
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = 3;
										all_SI[25].SI_value = 7*T_skillLv;
										all_SI[26].SI_value = '_@翻覆';	
										
										all_SI[27].SI_value = '<br />施放完畢後，將獲得_&1_的狀態。強化下一招技能。';
										all_SI[28].SI_value = '<br />若在_&1_的狀態下施放此技能，此技能的傷害及_@翻覆機率將會_&2_。';
										break;
									case 1:
										all_SI[0].SI_value = '使施放的技能MP消耗減少一半。<br />減半以格數為單位，且無條件進位。如：4格變2格、3格變2格、2格變1格。';
										all_SI[16].SI_value = '效果狀態';
										all_SI[27].SI_value = '，持續時間為無限，施放任意技能後此狀態結束。<br />就算該技能消耗MP為0，依然會使此狀態結束。';
										break;
									case 2:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Matk|,|有效Matk';
										all_SI[2].SI_value = 100 + 10*T_skillLv;
										all_SI[3].SI_value = 10*T_skillLv;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[18].SI_value = parseInt(3 - T_skillLv/3);
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = 3;
										all_SI[25].SI_value = '？';
										all_SI[26].SI_value = '_@翻覆';	
										
										all_SI[27].SI_value = '<br />施放完畢後，將獲得_&1_的狀態。強化下一招技能。';
										all_SI[28].SI_value = '<br />若在_&1_的狀態下施放此技能，此技能的傷害及_@翻覆機率將會_&2_。';
										break;
								}
								break;
							case 5:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '第一段傷害：';
										all_SI[1].SI_value = 'Valid Matk|,|有效Matk';
										all_SI[2].SI_value = 300*T_skillLv;
										all_SI[3].SI_value = 500 + 100*T_skillLv;
										all_SI[5].SI_value = '<p>第二段傷害為第一段的2/3倍，第三段傷害為第二段的1/2倍。每段傷害分開判定。</p>';
										all_SI[16].SI_value = '範圍傷害';
										all_SI[17].SI_value = 'slow|,|慢';
										all_SI[18].SI_value = 13 - T_skillLv;
										all_SI[20].SI_value = 3;
										all_SI[22].SI_value = '目標位置';
										all_SI[23].SI_value = input_SI_value_bySelection('Weap', ['MagicDevice'], ['1 | 8 |20 ', '0.5 | 4 | 10 ']);
										
										all_SI[27].SI_value = '技能詠唱期間，每秒會對目標額外產生100仇恨值。(此額外仇恨值不受仇恨值%影響、無法被技能「匿蹤」消除)';
										all_SI[28].SI_value = '<br />此技能之詠唱時間不受詠唱速度影響。';
										break;
								}
								break;
							case 6:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '每下傷害：(分開判定)';
										all_SI[1].SI_value = 'Valid Matk|,|有效Matk';
										all_SI[2].SI_value = 25 + 1*T_skillLv;
										all_SI[3].SI_value = 80 + 4*T_skillLv;
										all_SI[16].SI_value = '設置範圍傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[18].SI_value = 1;
										all_SI[20].SI_value = 5 + parseInt((T_skillLv+1)/2);
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = 2;
										all_SI[24].SI_value = 5 + parseInt((T_skillLv+1)/2);
										all_SI[25].SI_value = 100;
										all_SI[26].SI_value = '被_@逼退';	
										
										all_SI[27].SI_value = '<br />每下傷害均會造成_@逼退效果。';
										break;
								}
								break;
							case 7:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Matk|,|有效Matk';
										all_SI[2].SI_value = 180 + 20*T_skillLv;
										all_SI[3].SI_value = 250 + 45*T_skillLv;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[18].SI_value = 6;
										all_SI[20].SI_value = 1;
										all_SI[23].SI_value = 3;
										all_SI[25].SI_value = 10;
										all_SI[26].SI_value = '受到異常狀態';	
										
										all_SI[27].SI_value = '<br />各屬性的異常狀態不盡相同。可查看_@法術/引爆補述';
										break;
								}
								break;
							case 8:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '每下傷害：(分開判定)';
										all_SI[1].SI_value = 'Valid Matk|,|有效Matk';
										all_SI[2].SI_value = 50 + 3*T_skillLv;
										all_SI[3].SI_value = 180 + 2*T_skillLv;
										all_SI[16].SI_value = '設置範圍傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[18].SI_value = 1;
										all_SI[20].SI_value = 1 + parseInt(T_skillLv/2);
										all_SI[22].SI_value = '目標位置';
										all_SI[23].SI_value = 3;
										all_SI[24].SI_value = 1 + parseInt(T_skillLv/2);
										
										all_SI[27].SI_value = '每次造成傷害時，會使範圍內的敵人被拉至技能中心。<br />BOSS等強大目標免疫此效果。';
										break;
								}
								break;
							case 9:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Matk|,|有效Matk';
										all_SI[2].SI_value = 200 + 10*T_skillLv;
										all_SI[3].SI_value = 1000 + 50*T_skillLv;
										all_SI[5].SI_name = '<p>此技能之傷害範圍為扇形，技能將會以目標為中點，飛行至最遠射程為止。扇形之角度為';
										all_SI[5].SI_value = 40 + 2*T_skillLv;
										all_SI[5].SI_unit = '°。</p>'
										all_SI[16].SI_value = '範圍傷害';
										all_SI[17].SI_value = 'quite fast|,|稍快';
										all_SI[18].SI_value = 8;
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '目標位置';
										
										all_SI[27].SI_value = '在施放此技能之前，每施放一次魔法技能內的攻擊技能，此技能之最終詠唱時間將減少1秒。最多減少10秒，施放此技能後減少的秒數將重置。';
										all_SI[28].SI_value = '<br />目標體積越大，逼退距離越小。Boss受到的逼退距離再減半。(逼退距離為(15-目標體積*2)m)';
										break;
								}
								break;
							case 10:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'Matk+';
										all_SI[5].SI_value = 1 + parseInt((T_skillLv+2)/5);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '武器Atk+';
										all_SI[6].SI_value = 3*T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 11:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '蓄力完畢後，恢復';
										all_SI[5].SI_value = 200 + 10*T_skillLv;
										all_SI[5].SI_unit = 'MP。';
										all_SI[16].SI_value = '主動效果';
										all_SI[19].SI_value = input_SI_value_bySelection('Weap', ['Staff','MagicDevice'],[parseInt(10 - T_skillLv/3)/2,(parseInt(10 - T_skillLv/3)*2/3).toFixed(1),parseInt(10 - T_skillLv/3)]);
										break;
								}
								break;
							case 12:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '使施放「法術/飛箭」後，能獲得_&1_狀態。強化下一招技能。';
										all_SI[16].SI_value = '被動效果';
										break;
									case 1:
										all_SI[5].SI_name = '施放任意技能時，將使該技能詠唱時間減少';
										all_SI[5].SI_value = 5*T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '效果狀態';
										all_SI[27].SI_value = '持續時間為無限，施放任意技能後此狀態結束。';
										break;
								}
								break;
							case 13:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '進行普通攻擊時，若因為距離不足而無法進行攻擊，普通攻擊將替換為_&1_。';
										all_SI[16].SI_value = '被動效果';
										break;
									case 1:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[3].SI_value = 5*T_skillLv;
										all_SI[16].SI_value = '普通攻擊';
										all_SI[17].SI_value = '同普通攻擊';
										all_SI[20].SI_value = 1;
										
										all_SI[27].SI_value = '_&1_等同於普通攻擊，會觸發所有普通攻擊會觸發的效果。包括攻擊MP恢復、慣性、乘勝追擊等。';
										break;
								}
								break;
							case 14:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '詠唱完畢後，恢復';
										all_SI[5].SI_value = 1000;
										all_SI[5].SI_unit = 'MP。';
										all_SI[18].SI_value = 17.5 - 0.5*T_skillLv - 0.5*Math.max(0, T_skillLv-5);
										break;
								}
								break;
							}
							break;
						case 3:
						switch (T_no_S)
						{
							case 1:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 5*T_skillLv;
										all_SI[3].SI_value = 50 + 2*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 50 + 25*parseInt(T_skillLv/6);
										all_SI[26].SI_value = 'Flinch|,|_@膽怯';	
										break;
								}
								break;
							case 2:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 10*T_skillLv;
										all_SI[3].SI_value = 100 + 5*T_skillLv;
										all_SI[4].SI_value = '';
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'slow|,|慢';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = input_SI_value_bySelection('Weap', ['Knuckles'], [50 + 25*parseInt(T_skillLv/6), 25 + 25*parseInt(T_skillLv/6)]);
										all_SI[26].SI_value = '_@昏厥';	
										break;
								}
								break;
							case 3:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 50 + 10*T_skillLv;
										all_SI[3].SI_value = 100 + 5*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 10 + 1.5*T_skillLv;
										all_SI[26].SI_value = '_@降防';

										all_SI[27].SI_value = '<br />若觸發了_@降防，將恢復400MP。';
										all_SI[28].SI_name = '<br />此技能之物理貫穿+';
										all_SI[28].SI_value = 5*T_skillLv;
										all_SI[28].SI_unit = '%。';
										all_SI[29].SI_value = '額外加成的下限為-100、上限為500。';
										break;
								}
								break;
							case 4:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 100 + 10*T_skillLv;
										all_SI[3].SI_value = 100 + 15*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'slow|,|慢';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 20 + 3*T_skillLv;
										all_SI[26].SI_value = '_@乏力';

										all_SI[27].SI_value = '<br />發動技能時若目標處於_@降防狀態，將在造成傷害時附帶_&1_。';									
										break;
									case 1:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 100 + 10*T_skillLv;
										all_SI[3].SI_value = 100 + 15*T_skillLv;
										all_SI[16].SI_value = '單體追加傷害';
										all_SI[20].SI_value = 1;

										all_SI[27].SI_value = '此傷害必定暴擊。';									
										break;
								}
								break;
							case 5:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 50 + 20*T_skillLv;
										all_SI[3].SI_value = 990 + T_skillLv;
										all_SI[16].SI_value = input_SI_value_bySelection('Weap', ['Knuckles'], ['直線範圍傷害', '單體傷害']);
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										all_SI[19].SI_value = 11 - 2*parseInt(T_skillLv/2);
										all_SI[20].SI_value = 1;
										all_SI[23].SI_value = 0;
										all_SI[25].SI_value = 5*T_skillLv;
										all_SI[26].SI_value = '_@畏懼';	

										all_SI[27].SI_value = '對BOSS的_@畏懼機率將減半。';	
										break;
								}
								break;
							case 6:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 5*T_skillLv;
										all_SI[3].SI_value = 75 + 2.5*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 30 + 10*parseInt((T_skillLv+2)/3);
										all_SI[26].SI_value = '_@翻覆';	
										break;
								}
								break;
							case 7:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 5*T_skillLv;
										all_SI[3].SI_value = 100 + 2.5*T_skillLv;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = 1;
										all_SI[25].SI_value = 10 + 4*T_skillLv;
										all_SI[26].SI_value = '_@停止';	
										all_SI[27].SI_name = '此技能每命中一名敵人，就恢復(自身HP上限×5%)的生命值。單次技能最多恢復';
										all_SI[27].SI_value = 500;
										all_SI[27].SI_unit = '生命。';
										break;
								}
								break;
							case 8:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '每下傷害：(分開判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 25 + 2*T_skillLv;
										all_SI[3].SI_value = 100 + 10*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite fast|,|稍快';
										all_SI[20].SI_value = 3;

										all_SI[27].SI_name = '此技能之暴擊率+';
										all_SI[27].SI_value = 2.5*T_skillLv;
										all_SI[27].SI_unit = '。';										
										break;
								}
								break;
							case 9:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '總傷害：(共同判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 20*T_skillLv;
										all_SI[3].SI_value = 300 + 40*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite fast|,|稍快';
										all_SI[20].SI_value = 4;

										all_SI[27].SI_name = '若技能未被迴避，10秒內自身行動速度+';
										all_SI[27].SI_value = input_SI_value_bySelection('Weap', ['Knuckles'], [2*parseInt((T_skillLv+5)/3), parseInt((T_skillLv+5)/3)]);
										all_SI[27].SI_unit = '。';										
										break;
								}
								break;
							case 10:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'Atk+';
										all_SI[5].SI_value = 1 + parseInt((T_skillLv+2)/5);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '武器Atk+';
										all_SI[6].SI_value = 3*T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 11:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '攻擊速度+';
										all_SI[5].SI_value = input_SI_value_bySelection('Weap', ['Knuckles'],[T_skillLv, 0]);
										all_SI[5].SI_unit = '%。';		
										all_SI[6].SI_name = '攻擊速度+';
										all_SI[6].SI_value = input_SI_value_bySelection('Weap', ['Knuckles'],[10*T_skillLv, 0]);
										all_SI[6].SI_unit = '。';
										
										all_SI[7].SI_name = '「格鬥技能」中的所有攻擊技能，總傷害提升';
										all_SI[7].SI_value = T_skillLv;
										all_SI[7].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成/增幅';
										break;
								}
								break;
							case 12:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '(靜待更新)';
										break;
								}
								break;
							case 13:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '攻擊MP恢復+';
										all_SI[5].SI_value = 0.5*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '進行普通攻擊時，將有';
										all_SI[6].SI_value = input_SI_value_bySelection('Weap', ['Knuckles'],[5*T_skillLv, 0]);
										all_SI[6].SI_unit = '%機率附帶追擊';
										all_SI[16].SI_value = '被動效果/加成';
										break;
									case 1:
										all_SI[0].SI_value = '追擊僅在主手裝備拳套時可觸發 。<br />傷害：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[3].SI_value = 25 + 2.5*T_skillLv;
										all_SI[16].SI_value = '單體追加傷害';
										all_SI[20].SI_value = 1;
										
										all_SI[27].SI_value = '追擊之傷害不受體術鍛鍊、近/遠距離威力、拔刀傷害影響。<br />追擊不會發生暴擊。';
										break;
								}
								break;
							case 14:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '使「乘勝追擊」追擊的傷害提升(有效Atk×';
										all_SI[5].SI_value = 5*T_skillLv;
										all_SI[5].SI_unit = '%)。';
										all_SI[6].SI_name = '並使追擊有';
										all_SI[6].SI_value = T_skillLv;
										all_SI[6].SI_unit = '%的機率使目標_@降防。';
										all_SI[16].SI_value = '被動效果';
										break;
								}
								break;
						}
						break;
					case 4:
						switch (T_no_S)
						{
							case 1:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '命中';
										all_SI[5].SI_value = 3*T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '暴擊率';
										all_SI[6].SI_value = 8*T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[27].SI_value = '習得此技能後，方可以同時裝備兩把單手劍。<br />裝備兩把單手劍時，命中-55%，暴擊率-80%，此技能將可抵消大部分副作用。';
										break;
								}
								break;
							case 2:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 100 + 10*T_skillLv;
										all_SI[3].SI_value = 150 + 10*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[20].SI_value = 1;

										all_SI[27].SI_name = '此技能之暴擊傷害+';
										all_SI[27].SI_value = 50 + 5*T_skillLv;
										all_SI[27].SI_unit = '。';										
										break;
								}
								break;
							case 3:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '施放_&1_將敵人_@逼退，並在原地殘留持續數秒的_&2_，對經過的敵人造成持續的傷害與_@盲目效果。';
										all_SI[17].SI_value = 'quite fast|,|稍快';
										break;
									case 1:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 50 + 5*T_skillLv;
										all_SI[3].SI_value = 125 + 2.5*T_skillLv;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = 4;
										all_SI[25].SI_value = 100;
										all_SI[26].SI_value = '_@逼退';									
										break;
									case 2:
										all_SI[0].SI_value = '每次傷害：(每5個傷害視為一次、分開判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 50 + 5*T_skillLv;
										all_SI[3].SI_value = 30 + 2*T_skillLv;
										all_SI[16].SI_value = '設置範圍傷害';
										all_SI[20].SI_value = '3(×5)';
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = 4;
										all_SI[24].SI_value = 3;
										all_SI[25].SI_value = 50;
										all_SI[26].SI_value = '_@盲目';

										all_SI[27].SI_value = '每次傷害均有機率造成造成_@盲目狀態。';										
										break;
								}
								break;
							case 4:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '總傷害：(共用判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 200 + 20*T_skillLv;
										all_SI[3].SI_value = 500 + 20*T_skillLv;
										all_SI[16].SI_value = '單體持續傷害';
										all_SI[17].SI_value = '約3~4秒';
										all_SI[20].SI_value = 12;
										all_SI[25].SI_value = 10*T_skillLv;
										all_SI[26].SI_value = '_@冰凍';

										all_SI[27].SI_value = '<br />造成第一下傷害後，獲得_&1_效果。';
										all_SI[28].SI_value = '<br />若對非BOSS目標施放，在施放完畢後有機率發動_&2_。';										
										break;
									case 1:
										all_SI[5].SI_value = '使自身能夠閃避所有傷害及效果。';
										all_SI[16].SI_value = '效果狀態';
										all_SI[27].SI_value = '此技能造成最後一下傷害時，此狀態結束。';
										break;
									case 2:
										all_SI[5].SI_value = '對目標造成999999999點傷害。';
										all_SI[16].SI_value = '單體追加傷害';
										all_SI[20].SI_value = 1;
										break;
								}
								break;
							case 5:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '總傷害：(共用判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 50 + 5*T_skillLv;
										all_SI[3].SI_value = 100 + T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'slow|,|慢';
										all_SI[20].SI_value = 2;
										all_SI[25].SI_value = 5*T_skillLv;
										all_SI[26].SI_value = '_@翻覆';

										all_SI[27].SI_value = '<br />施放期間處於_&1_，可以格檔一次物理傷害。格檔成功後獲得_&2_。';										
										break;
									case 1:
										all_SI[5].SI_name = '能夠格檔一次物理傷害，使該傷害減少';
										all_SI[5].SI_value = 5 + 7*T_skillLv;
										all_SI[5].SI_unit = '%。<br />格檔成功後將獲得_&2_。';
										all_SI[16].SI_value = '效果狀態';
										all_SI[27].SI_value = '此技能施放完畢後，此狀態結束。而如果格檔成功，此狀態會立即結束。';
										break;
									case 2:
										all_SI[5].SI_name = 'Atk+';
										all_SI[5].SI_value = T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '攻擊速度+';
										all_SI[6].SI_value = 10*T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '自身狀態加成';
										all_SI[24].SI_value = 30;
										break;
								}
								break;
							case 6:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '每次傷害：(分開判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 100 + 20*T_skillLv;
										all_SI[3].SI_value = 100 + 10*T_skillLv;
										all_SI[16].SI_value = '範圍直線傷害';
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										all_SI[20].SI_value = 2;
										all_SI[22].SI_value = '自身位置-目標後方10m處';
										all_SI[23].SI_value = 3;

										all_SI[27].SI_value = '此技能的傷害受拔刀傷害影響。';	
										break;
								}
								break;
							case 7:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '施放後將閃身迅速移動到目標身後，同時獲得_&1_效果，強化下一次技能。';
										all_SI[16].SI_value = '效果';
										
										all_SI[27].SI_value = '若此技能施放完畢後沒有立即施放下一個技能，將會重置普攻並發動一次拔刀斬。';	
										break;
									case 1:
										all_SI[5].SI_name = '攻擊MP恢復+';
										all_SI[5].SI_value = T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '施放任意技能時，該技能的暴擊率+';
										all_SI[6].SI_value = 20*T_skillLv;
										all_SI[6].SI_unit = '%。並使狀態結束。';
										all_SI[16].SI_value = '自身加成/效果狀態';
										all_SI[27].SI_value = '持續時間為無限。施放任意技能後此狀態結束';
										break;
								}
								break;
							case 8:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '閃躲率+';
										all_SI[5].SI_value = input_SI_value_bySelection('Weap', ['DualSword'], [5+2*T_skillLv, 5+T_skillLv]);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = 'Def';
										all_SI[6].SI_value = -100 + T_skillLv;
										all_SI[6].SI_unit = '。';
										all_SI[7].SI_name = 'Mdef';
										all_SI[7].SI_value = -100 + T_skillLv;
										all_SI[7].SI_unit = '。';
										all_SI[16].SI_value = '自身加成';
										all_SI[24].SI_value = 10;
										break;
								}
								break;
							case 9:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '拔刀傷害+';
										all_SI[5].SI_value = T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '武器Atk+';
										all_SI[6].SI_value = 0;
										all_SI[6].SI_unit = '%。';
										all_SI[7].SI_value = '使閃躲反擊被替換為_&1_。';
										all_SI[16].SI_value = '自身加成/效果狀態';
										all_SI[24].SI_value = 20;

										all_SI[27].SI_value = '閃躲反擊，是角色裝備在特定裝備時，閃躲時會同時對目標造成傷害。';	
										break;
									case 1:
										all_SI[0].SI_value = '每次傷害：(分開判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 100 + 10*T_skillLv;
										all_SI[3].SI_value = 50 + 15*T_skillLv;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[17].SI_value = '同閃躲';
										all_SI[20].SI_value = 2;
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = 5;

										all_SI[27].SI_value = '第一下閃光在閃躲開始時發動；第二下閃光在閃躲結束時發動。';	
										break;
								}
								break;
							case 10:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '攻擊速度+';
										all_SI[5].SI_value = 50*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '命中+';
										all_SI[6].SI_value = 5 + 3*T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
									break;
								}
								break;
							case 11:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'AGI+';
										all_SI[5].SI_value = T_skillLv + Math.max(T_skillLv-5, 0);
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '拔刀傷害+';
										all_SI[6].SI_value = 5 + T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
									break;
								}
								break;
						}
						break;
					case 5:
						switch (T_no_S)
						{
							case 1:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 50 + 5*T_skillLv;
										all_SI[3].SI_value = 100 + 5*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'extremely fast|,|極快';
										all_SI[20].SI_value = 1;
										
										all_SI[27].SI_value = '此技能之行動速度+50%。';
										break;
								}
								break;
							case 2:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '對目標進行_&1_後，順勢將槍_&2_出去，貫穿目標後方的所有敵人。';		
										all_SI[17].SI_value = 'quite fast|,|稍快';
										break;
									case 1:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 100 + 10*T_skillLv;
										all_SI[3].SI_value = 40 + T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[20].SI_value = 1;		
										break;
									case 2:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 0;
										all_SI[3].SI_value = 150 + 10*T_skillLv;
										all_SI[16].SI_value = '範圍直線傷害';
										all_SI[20].SI_value = 1 + parseInt(T_skillLv/6);
										all_SI[22].SI_value = '自身位置-自身前方' + (7 + parseInt((T_skillLv+1)/2)) + 'm處';
										all_SI[23].SI_value = 2;
										break;
								}
								break;
							case 3:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '先在原地_&1_對範圍內敵人造成小幅傷害，緊接著_&2_造成更大範圍的傷害，並使非BOSS單位被_@翻覆。';		
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										break;
									case 1:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 100;
										all_SI[3].SI_value = 70 + 3*T_skillLv;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = 1.5 + 0.5*parseInt(T_skillLv/6);
										break;
									case 2:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 50 + 15*T_skillLv;
										all_SI[3].SI_value = 200 + 20*T_skillLv;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = 2 + 0.5*parseInt((T_skillLv+2)/3);
										all_SI[25].SI_value = 10*T_skillLv;
										all_SI[26].SI_value = '_@翻覆';
										all_SI[27].SI_value = '<br />此技能只可翻覆非BOSS單位。';
										break;
								}
								break;
							case 4:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '在原地進行_&1_，造成大範圍的傷害，並在地面留下潛龍。數秒後潛龍躍出，_@逼退更大範圍內的敵人，並造成巨大傷害。';		
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										break;
									case 1:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 200 + 20*T_skillLv;
										all_SI[3].SI_value = 200 + 20*T_skillLv;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = 2 + parseInt((T_skillLv+2)/4);
										
										all_SI[27].SI_value = '施放完畢後會在原處留下潛龍。4秒後潛龍消失，並造成_&2_。';
										break;
									case 2:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 0;
										all_SI[3].SI_value = 200 + 40*T_skillLv;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '潛龍位置';
										all_SI[23].SI_value = 4 + parseInt((T_skillLv+2)/4);
										all_SI[25].SI_value = 10*T_skillLv;
										all_SI[26].SI_value = '受到_@閃光';
										break;
									}
								break;
							case 5:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '總傷害：(分開判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 0;
										all_SI[3].SI_value = 750 + 75*T_skillLv;
										all_SI[5].SI_value = '<p>此技能將會跳躍至目標位置，造成傷害後返回施放時的位置。但若角色落地位置與目標相距超過(0.5+一般攻擊最大射程)m，此技能將沒有傷害。<br />施放過程角色將免疫_@膽怯、_@翻覆與_@昏厥。</p>';
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										all_SI[20].SI_value = 2;

										all_SI[27].SI_name = '此技能之暴擊率+';
										all_SI[27].SI_value = 65 + T_skillLv;
										all_SI[27].SI_unit = '、';	
										all_SI[28].SI_name = '物理貫穿+';
										all_SI[28].SI_value = 10*T_skillLv;
										all_SI[28].SI_unit = '%。';
										all_SI[29].SI_value = '(補充)第一段的倍率隨技能等級提升，第二段傷則為固定的750%。';
										break;
								}
								break;
							case 6:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 80 + 3*T_skillLv;
										all_SI[3].SI_value = 100 + 10*parseInt((T_skillLv+1)/2);
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										all_SI[19].SI_value = 1.5 - 0.15*T_skillLv;
										all_SI[20].SI_value = 1;

										all_SI[27].SI_name = '此技能之暴擊率+';
										all_SI[27].SI_value = 50;
										all_SI[27].SI_unit = '。';	
										all_SI[28].SI_name = '此技能之物理貫穿+';
										all_SI[28].SI_value = 10 + 1.5*T_skillLv;
										all_SI[28].SI_unit = '%。';	
										break;
								}
								break;
							case 7:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '傷害：(共用判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 100;
										all_SI[3].SI_value = 190 + T_skillLv;
										all_SI[4].SI_value = 'STR×20%';
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[20].SI_value = 3;

										all_SI[27].SI_name = '此技能的暴擊率';
										all_SI[27].SI_value = -50;
										all_SI[27].SI_unit = '%。(基礎暴擊率，而非總暴擊率)';	
										all_SI[28].SI_value = '施放時若目標楚於任意異常狀態，此技能轉變為_&1_。(僅提升傷害)';
										break;
									case 1:
										all_SI[0].SI_value = '傷害：(共用判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 100;
										all_SI[3].SI_value = input_SI_value_bySelection('Weap', ['Halberd'], [190 + 21*T_skillLv, 190 + 11*T_skillLv]);
										all_SI[4].SI_value = 'STR×20%';
										all_SI[16].SI_value = '單體強化傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[20].SI_value = 3;

										all_SI[27].SI_name = '此技能計算暴擊率時，基礎暴擊率';
										all_SI[27].SI_value = -50;
										all_SI[27].SI_unit = '%。';	
										all_SI[28].SI_value = '_&1_僅在目標受到任意異常狀態影響時發生。';
										break;
								}
								break;
							case 8:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '此技能施放完畢時會立即造成傷害，並在之後獲得_&1的狀態。<br />傷害：(共用判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 40*T_skillLv;
										all_SI[3].SI_value = 100 + 50*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '無';
										all_SI[20].SI_value = 3;
										
										all_SI[27].SI_unit = '_&1_將使得一般攻擊附加額外傷害。一般攻擊的動畫也會改變。';
									case 1:
										all_SI[0].SI_value = '總傷害：(共用判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = (250 + 25*T_skillLv) + '+(TEC*200%)';
										all_SI[3].SI_value = 40 + T_skillLv;
										all_SI[4].SI_value = '(基礎INT*20%)';
										all_SI[16].SI_value = '單體追加傷害';
										all_SI[17].SI_value = '無';
										all_SI[20].SI_value = '1~2';
										all_SI[27].SI_unit = '此追加傷害不會發生暴擊。<br />追加傷害的傷害次數該次一般攻擊，總傷害不影響。';
								}
								break;
							case 9:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 0;
										all_SI[3].SI_value = input_SI_value_bySelection('Weap', ['Halberd'], [(4 + (T_skillLv -1)*4)*T_skillLv/2 + 50, (4 + (T_skillLv -1)*4)*T_skillLv/4 + 25]);
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										all_SI[18].SI_value = 2;
										all_SI[20].SI_value = 1;

										all_SI[27].SI_value = '施放完畢後，獲得_&1_效果。';
										break;
									case 1:
										all_SI[5].SI_name = '施放技能時，使該技能的暴擊率+';
										all_SI[5].SI_value = 10*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[16].SI_value = '效果狀態';
										all_SI[27].SI_value = '持續時間為無限，施放任意攻擊技能後此狀態結束。<br />就算施放的是魔法傷害的技能，也會使此狀態結束。';	
										break;
								}
								break;
							case 10:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'Atk+';
										all_SI[5].SI_value = 1 + parseInt((T_skillLv+2)/5);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '武器Atk+';
										all_SI[6].SI_value = 3*T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 11:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '暴擊率+';
										all_SI[5].SI_value = parseInt((1 + T_skillLv)/2);
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '暴擊率+';
										all_SI[6].SI_value = parseInt((1 + T_skillLv)/2);
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 12:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '攻擊速度+';
										all_SI[5].SI_value = 2.5*T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '攻擊速度+';
										all_SI[6].SI_value = 50*T_skillLv;
										all_SI[6].SI_unit = '。';
										all_SI[16].SI_value = '自身加成';
										
										all_SI[27].SI_name = '使用時HP減少(HP上限×';
										all_SI[27].SI_value = input_SI_value_bySelection('Weap', ['Halberd'],[10, 10 + parseInt(T_skillLv/2)]);
										all_SI[27].SI_unit = ')%。但HP不會低於1。';
										break;
								}
								break;
							case 13:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '發動成功後，恢復120MP。';
										all_SI[6].SI_value = '當前HP每減少15%，將轉為_&1_效果。';
										all_SI[7].SI_value = '當前HP低於55%時，將轉為_&2_效果。';
										all_SI[16].SI_value = '自身恢復';
										break;
									case 1:
										all_SI[5].SI_name = '當前HP在84%~70%時，MP恢復量為';
										all_SI[5].SI_value = 120 + 2*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '當前HP在69%~55%時，MP恢復量為';
										all_SI[6].SI_value = 120 + 6*T_skillLv;
										all_SI[6].SI_unit = '。';
										all_SI[16].SI_value = '自身恢復';
										break;
									case 2:
										all_SI[5].SI_name = '當前HP在55%以下時，MP恢復量為';
										all_SI[5].SI_value = 140 + 16*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[16].SI_value = '自身恢復';
										break;
								}
								break;
							case 14:
								switch (No_Branch)
								{
									case 0:
										_t1 = input_SI_value_bySelection('Weap', ['Halberd'], [100+30*T_skillLv, 30*T_skillLv]);
										_t2 = input_SI_value_bySelection('Weap', ['Halberd'], [80-3*T_skillLv, 100-3*T_skillLv]);
										all_SI[5].SI_value = '此技能將可透過重覆施放疊加層數，最高疊至三層，技能效果將受層數影響。<br />每次施放技能，持續時間都會重置，層數則會疊加上去。<br /><br />';
										all_SI[6].SI_value = `攻擊速度+ ${_t1}/${_t1*2}/${_t1*3}。<br />閃躲率+ ${T_skillLv}/${T_skillLv*2}/${T_skillLv*3} %。<br />行動速度+ ${T_skillLv}/${T_skillLv*2}/${T_skillLv*3} %。`;
										all_SI[7].SI_value = `物理抗性- ${_t2}/${_t2*2}/${_t2*3} %。<br />魔法抗性- ${_t2}/${_t2*2}/${_t2*3} %。<br />MP上限- 100/200/300。`;
										
										all_SI[27].SI_value = '狀態持續期間，角色身旁將有光球圍繞，光球的數量與當下的層數相同。';
										break;
								}
								break;
						}
						break;
					case 6:
						switch (T_no_S)
						{
							case 1:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '_&1_敵人後將刀_&2_，造成兩段傷害。兩段傷害分開判定，_&2_具有額外的暴擊率。';		
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										break;
									case 1:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 0;
										all_SI[3].SI_value = 50;
										all_SI[16].SI_value = '單體傷害';
										all_SI[20].SI_value = 1;	
										break;
									case 2:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 50 + 5*T_skillLv;
										all_SI[3].SI_value = 100 + 5*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_value = '_&2_之暴擊率為總暴擊率的三倍。';
										break;
								}
								break;
							case 2:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '總傷害：(三次分開判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 30 + T_skillLv;
										all_SI[3].SI_value = 150 + 15*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite fast|,|稍快';
										all_SI[20].SI_value = 3;
										all_SI[27].SI_value = '此技能會因為與對方的距離而有_&1_。';
										all_SI[28].SI_value = '造成傷害時，第一下傷害最低，之後的兩下會進行_&2_。';
										break;
									case 1:
										all_SI[5].SI_value = '距離2m以內時，造成原傷害。';
										all_SI[6].SI_name = '距離2m以上時，每增加1m，此技能之物理貫穿減少';
										all_SI[6].SI_value = 11 - T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '效果';
										all_SI[27].SI_name = '也就是說，此技能最多會減少';
										all_SI[27].SI_value = 10*(11 - T_skillLv);
										all_SI[27].SI_unit = '%的物理貫穿(距離12m時)。';
										break;
									case 2:
										all_SI[5].SI_name = '第一下傷害為(有效Atk+';
										all_SI[5].SI_value = 30 + T_skillLv;
										all_SI[5].SI_unit = ')×50%。';
										all_SI[6].SI_name = '第二下傷害為第一下的';
										all_SI[6].SI_value = 100 + 10*T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[7].SI_name = '第三下傷害為第一下的';
										all_SI[7].SI_value = 100 + 20*T_skillLv;
										all_SI[7].SI_unit = '%。';
										all_SI[16].SI_value = '補充說明';
										all_SI[27].SI_value = '_&2_。意思是三段中每段的傷害會越來越高。';
										all_SI[28].SI_value = '<br />總傷害的部分已經把三下的傷害加起來了，這邊只是補充說明。';
										break;
								}
								break;
							case 3:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '總傷害：(三次分開判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 0;
										all_SI[3].SI_value = 150 + 20*T_skillLv;
										all_SI[4].SI_value = '(AGI×20%)';
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										all_SI[20].SI_value = 3;
										all_SI[27].SI_value = '若技能未被迴避，將獲得_&1_效果，強化下一招技能。';
										break;
									case 1:
										all_SI[5].SI_name = '施放任意技能時，該技能的傷害常數提升(角色等級/';
										all_SI[5].SI_value = (11- T_skillLv);
										all_SI[5].SI_unit = ')。並使狀態消失。';
										all_SI[16].SI_value = '狀態效果';
										all_SI[27].SI_value = '持續時間為無限。施放任意技能後此狀態結束。';
										break;
								}
								break;
							case 4:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '總傷害：(共用判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 130 + 2*T_skillLv;
										all_SI[3].SI_value = (T_skillLv == 10) ? 1200 : (210 + T_skillLv*10)*parseInt((T_skillLv+2)/3);
										all_SI[16].SI_value = '範圍傷害';
										all_SI[17].SI_value = 'slow|,|慢';
										all_SI[20].SI_value = parseInt((T_skillLv+2)/3);
										all_SI[22].SI_value = '自身';
										all_SI[23].SI_value = (2 + parseInt((T_skillLv+1)/4)) + '、' + (4 + 2*parseInt((T_skillLv+1)/4));
										all_SI[27].SI_value = '此技能必定不MISS(被迴避)。';
										all_SI[28].SI_value = '<br />此技能之傷害分成兩段。二段的傷害範圍為一段的兩倍。';
										break;
								}
								break;
							case 5:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '總傷害：(共用判定)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 200 + 10*T_skillLv;
										all_SI[3].SI_value = 150 + 25*T_skillLv;
										all_SI[5].SI_value = '<p>- 此技能初次施放時，角色將獲得一持續10秒的狀態「天流」。狀態期間技能的MP消耗變成100，而施放此技能將不會重置「天流」的持續時間。<br />- 「天流」狀態期間，重複施放此技能將可疊加層數，最高疊加至四層。<br />- 「天流」狀態期間，若成功用技能「禍斷」發動攻擊，或成功用技能「斬釘截鐵」造成追加攻擊，該攻擊將轉變為_&1_並使「天流」狀態延長至30秒，但層數將歸零。<br />- 此技能的傷害每疊加一層，傷害就提升100%，最高達400%。<br />- 此技能的施放時間將隨著層數的增加越來越短。(125%~80%)</p>';
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										all_SI[20].SI_value = 4;
										all_SI[27].SI_value = '「天流」狀態期間，若角色沒有受到_@麻痺狀態，一般攻擊的間隔時間將變為0秒。';
										break;
									case 1:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 300;
										all_SI[3].SI_value = `(1300 +${75 + 12.5*T_skillLv}*當前層數)`;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '同禍斷或斬釘截鐵';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_value = '- 斬納發動時，角色頭上會冒出「天流亂星 斬納」的字樣。';
										all_SI[28].SI_value = '<br />- 斬納發動時，角色將獲得持續兩秒的無敵效果，期間受到任何傷害皆為Miss。';
										all_SI[29].SI_value = '<br />- 技能「斬釘截鐵」的追加傷害附帶降防效果，但轉變為斬納後就沒有降防效果了。';
										break;
								}
								break;
							case 6:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 100;
										all_SI[3].SI_value = 20*T_skillLv;
										all_SI[5].SI_value = `<p>- 施放此技能前，每施放一次武士技能中的攻擊技能，此技能都會獲得一次疊層，最高達十層。<br />- 每疊加一層，此技能的倍率都會提升，最高達${(20*T_skillLv+100)*10}%。</p>`;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_value = `- 施放時若目標處於_@降防狀態，此技能的傷害常數提升1000。<br />- 若角色身上有技能「怪力亂神」的狀態，此技能的暴擊率+10~100%、物理貫穿+10~100%。(受怪力亂神的等級影響，公式為10*技能等級)<br />註、倍率的公式為[(${20*T_skillLv}+10×疊加層數)×疊加層數]%。`;
										break;
								}
								break;
							case 7:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 100 + 10*T_skillLv;
										all_SI[3].SI_value = 100 + 5*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 50 + 5*T_skillLv;
										all_SI[26].SI_value = '_@麻痺';
										all_SI[27].SI_name = '若敵人已被_@麻痺，則改為有';
										all_SI[27].SI_value = 5*T_skillLv;
										all_SI[27].SI_unit = '機率使敵人_@昏厥。';
										break;
								}
								break;
							case 8:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 100 + 10*T_skillLv;
										all_SI[3].SI_value = 200 + 30*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'extremely slow|,|極慢';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_value = '施放期間劃出_&1_，期間內可減免一次傷害。';
										break;
									case 1:
										all_SI[5].SI_name = '受到任意傷害後，會將敵人的攻擊_&2_。此技能將立即中斷，並恢復';
										all_SI[5].SI_value = 100 + 10*T_skillLv;
										all_SI[5].SI_unit = 'MP。';
										all_SI[16].SI_value = '狀態效果';
										all_SI[27].SI_value = '此技能將立即中斷，意即此技能將不會造成傷害。';
										break;
									case 2:
										all_SI[5].SI_value = '可減少一次受到的傷害。';
										all_SI[6].SI_value = '物理傷害減免90%。';
										all_SI[7].SI_value = '魔法傷害減免45%。';
										all_SI[16].SI_value = '效果';
										all_SI[27].SI_value = '若當前生命高於20%，則角色在承受傷害後生命值不會低於1。';
										break;
								}
								break;
							case 9:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 10*T_skillLv;
										all_SI[3].SI_value = 100 + 20*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'slow|,|慢';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_value = '施放期間將處於_&1_，期間內可抵擋一次傷害。抵擋成功後將會追加_&2_。';
										break;
									case 1:
										all_SI[5].SI_value = '受到任意傷害後，該傷害將變為0。並使技能施放完畢後會追加_&2_。';
										all_SI[16].SI_value = '狀態效果';
										all_SI[27].SI_value = '只有成功抵擋任意傷害後，才會追加斷。';
										break;
									case 2:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 30*T_skillLv;
										all_SI[3].SI_value = 500 + 100*T_skillLv;
										all_SI[16].SI_value = '單體追加傷害';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_value = '此追加傷害會在技能施放完畢後多一個斬擊的動作，才造成傷害，而非直接多一個傷害。';
										break;
								}
								break;
							case 10:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '修練_&1_，使身體和心靈都受到強化。';
										all_SI[6].SI_value = '';
										all_SI[16].SI_value = '被動加成';
										break;
									case 1:
										all_SI[5].SI_name = 'HP上限+';
										all_SI[5].SI_value = 10*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = 'MP上限+';
										all_SI[6].SI_value = 10*T_skillLv;
										all_SI[6].SI_unit = '。';
										all_SI[16].SI_value = '被動加成';
										break;
									case 2:
										all_SI[5].SI_name = 'Atk+';
										all_SI[5].SI_value = parseInt((T_skillLv + 7)/5);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '武器Atk+';
										all_SI[6].SI_value = 3*T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										all_SI[27].SI_value = '只有主手裝備拔刀劍時才享有此效果。';
										break;
								}
								break;
							case 11:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '學習後，以下兩種情況將會發動_&1_。';
										all_SI[6].SI_value = '1. 進行普通攻擊時，目標在距離之外。';
										all_SI[7].SI_value = '2. 發動拔刀劍的攻擊技能時，目標在技能的施放距離外。';
										all_SI[16].SI_value = '被動效果';
										break;
									case 1:
										all_SI[5].SI_name = '以極快的速度貼近目標。貼近期間若進行移動，可手動停下。<br /> 若經由普通攻擊(普攻)觸發，且沒有手動停止，則該次普攻的攻擊MP恢復+';
										all_SI[5].SI_value = 2.5*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_value = '';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '更多細節可查看_@縮地法補述。';
										break;
								}
								break;
							case 12:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '只有副手無裝備時，才享有此技能的效果。<br />命中+';
										all_SI[5].SI_value = T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '穩定度+';
										all_SI[6].SI_value = input_SI_value_bySelection('Weap', ['Katana'], [T_skillLv, parseInt(T_skillLv/2)]);
										all_SI[6].SI_unit = '%。';
										all_SI[7].SI_name = '暴擊率+';
										all_SI[7].SI_value = input_SI_value_bySelection('Weap', ['Katana'], [T_skillLv, parseInt(T_skillLv/2)]);
										all_SI[7].SI_unit = '。';
										all_SI[16].SI_value = '被動加成';
										all_SI[27].SI_value = '';
										break;
									case 1:
										all_SI[5].SI_name = '暴擊發生時，傷害公式中的Atk變為原本的';
										all_SI[5].SI_value = 100 + 5*T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '只有主手裝備拔刀劍時才享有此效果。';
										break;
								}
								break;
							case 13:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '暴擊率+';
										all_SI[5].SI_value = 20 + 2*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '暴擊傷害-';
										all_SI[6].SI_value = input_SI_value_bySelection('Weap_Au', ['Katana'], [0, 15 - T_skillLv]);
										all_SI[6].SI_unit = '%。';
										all_SI[7].SI_value = '持續時間內_&1_。防禦力大幅降低。';
										all_SI[16].SI_value = '狀態加成';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[24].SI_value = 30;
										all_SI[27].SI_value = '施放任意技能後，此狀態會立即消失。(施放的該招技能會受到此技能的加成)';
										break;
									case 1:
										all_SI[16].SI_value = '狀態加成';
										all_SI[5].SI_name = 'Def-';
										all_SI[5].SI_value = 1100 - 100*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = 'Mdef-';
										all_SI[6].SI_value = 1100 - 100*T_skillLv;
										all_SI[6].SI_unit = '。';
										break;
								}
								break;
							case 14:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'Atk+';
										all_SI[5].SI_value = 10*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '攻擊MP恢復+';
										all_SI[6].SI_value = 5 + T_skillLv + 5*parseInt(T_skillLv/5);
										all_SI[6].SI_unit = '。';
										all_SI[7].SI_name = '普攻攻擊傷害提升(有效Atk×';
										all_SI[7].SI_value = 5*T_skillLv;
										all_SI[7].SI_unit = '%)。';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[16].SI_value = '狀態加成';
										all_SI[24].SI_value = input_SI_value_bySelection('Weap_Au', ['Katana'], [3*(5 + parseInt(T_skillLv/2)), 5 + parseInt(T_skillLv/2)]);
										all_SI[27].SI_value = '施放時將受到持續9秒的_@著火。由此技能造成的_@著火不會產生抗性時間。';
										all_SI[28].SI_value = '<br />於技能作用期間內所施放的畫龍點睛，將獲得_&1_效果。';
										break;
									case 1:
										all_SI[5].SI_name = '畫龍點睛之暴擊率+';
										all_SI[5].SI_value = 10*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '畫龍點睛之物理貫穿+';
										all_SI[6].SI_value = 10*T_skillLv;
										all_SI[6].SI_unit = '%。';
										break;
								}
								break;
						}
				}
				break;
			case 1:
				switch (No_ST)
				{
					case 0:
						switch (T_no_S)
						{
							case 1:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '阻擋率+';
										all_SI[5].SI_value = T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 2:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '阻擋率+';
										all_SI[5].SI_value = T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 5:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '閃躲率+';
										all_SI[5].SI_value = T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 6:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '閃躲率+';
										all_SI[5].SI_value = T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
						}
						break;
					case 1:
						switch (T_no_S)
						{
							case 1:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '攻擊速度+';
										all_SI[5].SI_value = 5*T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 2:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 50 + 5*T_skillLv;
										all_SI[3].SI_value = 1.5*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite fast|,|稍快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 90 + T_skillLv;
										all_SI[26].SI_value = '_@昏厥';
										break;
								}
								break;
							case 3:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 100 + 10*T_skillLv;
										all_SI[3].SI_value = 50 + 10*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite fast|,|稍快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 10*T_skillLv;
										all_SI[26].SI_value = '_@昏厥';
										break;
								}
								break;
							case 4:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '獲得_&1_的能力。';
										all_SI[6].SI_value = '未習得此技能時，阻擋時只會暫時中斷動作並重置普通攻擊。';
										break;
									case 1:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = input_SI_value_bySelection('Au', ['Shield'], ['有效Atk+盾精煉值×60', 'Valid Atk|,|有效Atk']);
										all_SI[2].SI_value = 10*T_skillLv;
										all_SI[3].SI_value = 10*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '無';
										all_SI[20].SI_value = 1;
										
										all_SI[27].SI_value = '阻擋反擊僅在發動阻擋時發生。';
										break;
								}
								break;
							case 5:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'Def+';
										all_SI[5].SI_value = 2*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = 'Def+';
										all_SI[6].SI_value = 1*T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[7].SI_name = 'HP上限+';
										all_SI[7].SI_value = 50*T_skillLv;
										all_SI[7].SI_unit = '。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 6:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'Mdef+';
										all_SI[5].SI_value = 2*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = 'Mdef+';
										all_SI[6].SI_value = 1*T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[7].SI_name = 'HP上限+';
										all_SI[7].SI_value = 50*T_skillLv;
										all_SI[7].SI_unit = '。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 7:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '物理抗性+';
										all_SI[5].SI_value = 10 + 5*parseInt((T_skillLv+2)/3);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '魔法抗性';
										all_SI[6].SI_value = 5*parseInt((T_skillLv+2)/3) - 35;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '主動加成';
										all_SI[24].SI_value = 60*T_skillLv;
										break;
								}
								break;
							case 8:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '魔法抗性+';
										all_SI[5].SI_value = 10 + 5*parseInt((T_skillLv+2)/3);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '物理抗性';
										all_SI[6].SI_value = 5*parseInt((T_skillLv+2)/3) - 35;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '主動加成';
										all_SI[24].SI_value = 60*T_skillLv;
										break;
								}
								break;
							case 9:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = `阻擋率+(15+盾精煉值)%。<br />此技能每3秒會產生5的額外仇恨值。<br />範圍內的友軍受到_&1_。<br /><p>每多保護一個隊友：(不包含自己)<br />攻擊MP恢復+${5+T_skillLv}。<br />Atk${-20+1.5*T_skillLv}%。<br />Matk${-20+1.5*T_skillLv}%。<br />每3秒的仇恨值增加量提升5。</p>`;
										all_SI[16].SI_value = '光環';
										all_SI[23].SI_value = 1 + 0.5*T_skillLv;
										all_SI[24].SI_value = 30 + 10*(T_skillLv + Math.max(0, T_skillLv-5));
										break;
									case 1:
										all_SI[5].SI_value = `攻擊MP恢復+${5+T_skillLv}。受到的傷害減少(${20+T_skillLv} +盾精煉值)%。<br />造成的總仇恨值減少(${40 +2*T_skillLv} +2×盾精煉值)%。`;
										all_SI[16].SI_value = '光環效果';
								}
								break;
						}
						break;
					case 2:
						switch (T_no_S)
						{
							case 1:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[5].SI_value = '有效Atk×' + (10 + 4*T_skillLv) + '% +小刀Atk';
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_value = '技能等級達到10時，此技能不消耗魔力。';
										break;
								}
								break;
							case 2:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '總傷害：(共用判定)';
										all_SI[1].SI_value = '有效Atk+小刀Atk×20%';
										all_SI[2].SI_value = 10 + T_skillLv;
										{
											let skillRate = 65;
											for(let i=1; i<=T_skillLv; ++i)
											{
											skillRate = (skillRate*(1 + ((i - 1) / 2)) + 10.0) / parseInt(1 + T_skillLv/2);
											}
											all_SI[3].SI_value = skillRate.toFixed(3);
										}
										all_SI[4].SI_value = '(DEX/' + (20-T_skillLv) +')';
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite fast|,|稍快';
										all_SI[20].SI_value = 1 + parseInt(T_skillLv/2);
										all_SI[25].SI_value = 90 + T_skillLv;
										all_SI[26].SI_value = '_@遲緩';
										break;
								}
								break;
							case 3:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '每下傷害：(共用判定)';
										all_SI[1].SI_value = '有效Atk+小刀Atk';
										all_SI[2].SI_value = 20 + 2*T_skillLv;
										all_SI[3].SI_value = 20 + 5*( T_skillLv - parseInt((T_skillLv+6)/4));
										all_SI[4].SI_value = '(STR+DEX+AGI)×3%';
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '約3秒';
										all_SI[20].SI_value = parseInt((T_skillLv+22)/4);
										break;
								}
								break;
							case 4:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '使用刀術技能或發動小刀的閃躲反擊時，有50%機率發動_&1_。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '僅限於刀術技能或小刀的閃躲反擊才有機率發動，包括刀術技能中的所有主、被動技能。而前述以外的其他技能或攻擊皆不會發動。';
										break;
									case 1:
										all_SI[5].SI_value = '使該技能或該次閃躲反擊的每一次傷害都追加一次等量傷害。';
										all_SI[16].SI_value = '單體追加傷害';
										all_SI[27].SI_value = '例如：6下變12下、8下變16下等。傷害次數會變成兩倍，等同於傷害變成兩倍。';
										break;
								}
								break;
							case 5:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = '有效Atk+(DEX×50%+AGI×2)';
										all_SI[2].SI_value = 115 + 10*T_skillLv;
										all_SI[3].SI_value = 50 + 2.5*T_skillLv;
										all_SI[4].SI_value = '(INT/' + T_skillLv +')%';
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite fast|,|稍快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 80 + 2*T_skillLv;
										all_SI[26].SI_value = '受到_@猛毒';
										break;
								}
								break;
							case 6:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '發動小刀的閃躲反擊時，有';
										all_SI[5].SI_value = 10*T_skillLv;
										all_SI[5].SI_unit = '%機率追加一次等量傷害。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '僅限於裝備小刀時的閃躲反擊才有機率觸發。<br />等同於閃躲反擊時會造成兩次傷害。';
										break;
								}
								break;
							case 7:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '使得副手裝備小刀時，普通攻擊有';
										all_SI[5].SI_value = 5*T_skillLv;
										all_SI[5].SI_unit = '%機率附加_&1_。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '僅限於裝備小刀時的普通攻擊才有機率發動。';
										break;
									case 1:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[5].SI_value = '有效Atk×10% +小刀Atk';
										all_SI[16].SI_value = '單體追加傷害';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_value = '無影追襲不會發生暴擊。';
										break;
								}
								break;
							case 8:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '使得「無影刃」的無影追襲發動機率提升';
										all_SI[5].SI_value = 5*T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_value = '使得「無影刃」的無影追襲傷害提升(有效Atk×10%)。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '此技能僅提升「無影刃」的無影追襲傷害與發動機率，無其他效果。';
										break;
								}
								break;
							case 9:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '使得「無影刃」的無影追襲物理貫穿+';
										all_SI[5].SI_value = 10 + 4*T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '此技能僅使「無影刃」的無影追襲附帶物理貫穿，無其他效果。';
										break;
								}
								break;
						}
						break;
					case 3:
						switch (T_no_S)
						{
							case 1:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 5*T_skillLv;
										all_SI[3].SI_value = 25 + 10*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite fast|,|稍快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 10*T_skillLv;
										all_SI[26].SI_value = '被_@逼退';
										all_SI[27].SI_name = '同時有';
										all_SI[27].SI_value = 10*T_skillLv;
										all_SI[27].SI_unit = '%機率使敵人_@遲緩。';
										all_SI[28].SI_value = '<br />使用此技能時，將會衝刺至敵人面前後才造成傷害。';
										break;
								}
								break;
							case 2:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '(此技能尚無資料)';
										break;
								}
								break;
							case 3:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '施放完畢後，將獲得_&1_狀態。_&1_期間角色無法作任何動作。';
										all_SI[16].SI_value = '效果';
										all_SI[17].SI_value = 'fast|,|快';
										break;
									case 1:
										all_SI[5].SI_value = '持續時間內，可使數次傷害變為0。';
										all_SI[16].SI_value = '效果狀態';
										all_SI[24].SI_value = 1;
										all_SI[27].SI_value = `若成功抵擋至少一次傷害，將恢復(HP上限×${T_skillLv}%)的HP，並產生${20*parseInt(T_skillLv/2)*parseInt((T_skillLv+1)/2)}的額外仇恨值。`;
										all_SI[28].SI_value = `一次最多只能恢復${T_skillLv*100 + Math.max(0, T_skillLv-5)*150 + Math.max(0, T_skillLv-9)*250}的HP。`;
										all_SI[29].SI_value = '此技能產生的額外仇恨值不受仇恨值%影響。';
										break;
								}
								break;
							case 5:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '使用此技能時，使目標產生';
										all_SI[5].SI_value = 100*T_skillLv;
										all_SI[5].SI_unit = '的仇恨值。';
										all_SI[16].SI_value = '效果';
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										all_SI[27].SI_value = "此技能的消耗MP不會造成仇恨值。<br />此技能造成的仇恨值不受仇恨值%影響。";
										break;
								}
								break;
							case 6:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 50 + 5*T_skillLv;
										all_SI[3].SI_value = 150 + 10*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite fast|,|稍快';
										all_SI[20].SI_value = 1;

										all_SI[27].SI_name = '此技能將使目標產生';
										all_SI[27].SI_value = 50 + 10*T_skillLv;
										all_SI[27].SI_unit = '的額外仇恨值。';
										all_SI[28].SI_name = '<br />意即此技能總共會產生';
										all_SI[28].SI_value = 200 + 20*T_skillLv;
										all_SI[28].SI_unit = '的仇恨值。';
										break;
								}
								break;
							case 7:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '傷害：(目前只有Lv10的資料)';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 50 + 10*T_skillLv;
										all_SI[3].SI_value = 450 + 5*T_skillLv;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[17].SI_value = 'quite fast|,|稍快';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = 2 + parseInt((T_skillLv+2)/4);
										
										all_SI[25].SI_value = 10*T_skillLv;
										all_SI[26].SI_value = '_@停止';
										all_SI[27].SI_name = '此技能將額外產生';
										all_SI[27].SI_value = 100 + T_skillLv*10;
										all_SI[27].SI_unit = '的仇恨值。';
										all_SI[28].SI_name = '<br />意即此技能總共會產生';
										all_SI[28].SI_value = 400 + T_skillLv*10;
										all_SI[28].SI_unit = '的仇恨值。';
										all_SI[29].SI_value = '此技能的傷害不受屬性剋制影響。';
										break;
								}
								break;
						}
						break
					case 4:
						switch (T_no_S)
						{
							case 1:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 10*T_skillLv;
										all_SI[3].SI_value = 10*(T_skillLv + Math.max(T_skillLv-5, 0));
										all_SI[4].SI_value = 'str×50%';
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 100;
										all_SI[26].SI_value = '被_@逼退';
										all_SI[27].SI_value = '_@逼退距離為' + (2 + parseInt((T_skillLv+1)/2)) + 'm。(受技能等級影響)';
										break;
								}
								break;
							case 2:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 180 + 2*T_skillLv;
										all_SI[3].SI_value = 100 + 10*T_skillLv;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置-前方14m處';
										all_SI[23].SI_value = 3;

										all_SI[27].SI_value = '對_@睡眠狀態的敵人將造成2倍傷害。';
										break;
								}
								break;
							case 3:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '攻擊MP恢復+';
										all_SI[5].SI_value = T_skillLv*0.5;
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '一般攻擊的傷害提升(角色Lv+';
										all_SI[6].SI_value = input_SI_value_bySelection('W', ['Arrow'], ['Valid Matk|,|有效Matk', '有效Matk*0.1']);;
										all_SI[6].SI_unit = ')。';
										all_SI[16].SI_value = '效果狀態';
										all_SI[17].SI_value = 'fast|,|快';
										
										all_SI[27].SI_name = '持續時間為無限，進行一般攻擊';
										all_SI[27].SI_value = T_skillLv;
										all_SI[27].SI_unit = '次後此狀態結束。';
										break;
								}
								break;
							case 5:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '設置一個_&1_在地面上。若任意目標與_@陷阱的距離小於2m，_@陷阱將會自動觸發並消失。<br />(若任意目標與自身的距離小於3m，此技能將無法施放)';
										all_SI[16].SI_value = '陷阱';
										all_SI[17].SI_value = 'slow|,|慢';
										all_SI[21].SI_value = 1;

										all_SI[27].SI_value = '建議詳閱關於_@陷阱的說明。';
										break;
									case 1:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Matk|,|有效Matk';
										all_SI[2].SI_value = 50 + 5*T_skillLv;
										all_SI[3].SI_value = T_skillLv;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '陷阱位置';
										all_SI[23].SI_value = 2;
										all_SI[25].SI_value = 55 + 2.5*T_skillLv;
										all_SI[26].SI_value = '_@睡眠';
										all_SI[27].SI_name = '<br />_@陷阱觸發後，將會恢復角色';
										all_SI[27].SI_value = 10*T_skillLv;
										all_SI[27].SI_unit = 'MP。';
										break;
								}
								break;
							case 6:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '設置一個_&1_在地面上。若任意目標與_@陷阱的距離小於2m，_@陷阱將會自動觸發並消失。<br />(若任意目標與自身的距離小於3m，此技能將無法施放)';
										all_SI[16].SI_value = '陷阱';
										all_SI[17].SI_value = 'slow|,|慢';
										all_SI[21].SI_value = 1;

										all_SI[27].SI_value = '建議詳閱關於_@陷阱的說明。';
										break;
									case 1:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Matk|,|有效Matk';
										all_SI[2].SI_value = 10*T_skillLv;
										all_SI[3].SI_value = T_skillLv;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '陷阱位置';
										all_SI[23].SI_value = 2;
										all_SI[25].SI_value = 55 + 2.5*T_skillLv;
										all_SI[26].SI_value = '_@停止';
										all_SI[27].SI_name = '<br />_@陷阱觸發後，將會恢復角色';
										all_SI[27].SI_value = 10*T_skillLv;
										all_SI[27].SI_unit = 'MP。';
										break;
								}
								break;
							case 7:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '設置一個_&1_在地面上。若任意目標與_@陷阱的距離小於2m，_@陷阱將會自動觸發並消失。<br />(若任意目標與自身的距離小於3m，此技能將無法施放)';
										all_SI[16].SI_value = '陷阱';
										all_SI[17].SI_value = 'slow|,|慢';
										all_SI[21].SI_value = 1;

										all_SI[27].SI_value = '建議詳閱關於_@陷阱的說明。';
										break;
									case 1:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Matk|,|有效Matk';
										all_SI[2].SI_value = 100 + 30*T_skillLv;
										all_SI[3].SI_value = 200 + 60*T_skillLv;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '陷阱位置';
										all_SI[23].SI_value = 2;
										all_SI[25].SI_value = 5*(1 +parseInt((T_skillLv+2)/4));
										all_SI[26].SI_value = '_@著火';
										all_SI[27].SI_name = '<br />_@陷阱觸發後，將會恢復角色';
										all_SI[27].SI_value = 10*T_skillLv;
										all_SI[27].SI_unit = 'MP。';
								}
								break;
						}
						break
					case 5:
						switch (T_no_S)
						{
							case 1:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '恢復量：';
										all_SI[1].SI_value = input_SI_value_bySelection('Weap', ['Staff'], ['Matk×'+parseInt((T_skillLv+6)/4)+'% +(INT×5%)','Matk×'+parseInt((T_skillLv+2)/4)+'%']);
										all_SI[2].SI_value = 10 + 5*T_skillLv;
										all_SI[3].SI_value = 0;
										all_SI[16].SI_value = '隊伍狀態恢復';
										all_SI[17].SI_value = 'slow|,|慢';
										all_SI[21].SI_value = parseInt((T_skillLv+5)/3);
										all_SI[24].SI_value = 5*parseInt((T_skillLv+2)/3);
										
										all_SI[28].SI_value = '施放完畢時即恢復一次，隨後每5秒恢復一次。';
										break;
								}
								break;
							case 2:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'Def+';
										all_SI[5].SI_value = 50 + parseInt(T_skillLv*T_skillLv*1.5);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = 'Mdef+';
										all_SI[6].SI_value = 50 + parseInt(T_skillLv*T_skillLv*1.5);
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '隊伍狀態加成';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[19].SI_value = 1;
										all_SI[21].SI_value = 1;
										all_SI[24].SI_value = 30;
										
										all_SI[27].SI_name = '受到此技能影響的目標若裝備盾牌，持續時間內自身格擋率+';
										all_SI[27].SI_value = 0;
										all_SI[27].SI_unit = '%。';
										all_SI[28].SI_value = '<br />施放者若裝備法杖，裝備盾牌者的格擋率上升量會增加。(尚無資料)';
										break;
								}
								break;
							case 3:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '使「祝福」的恢復量增加(';
										all_SI[5].SI_value = input_SI_value_bySelection('Weap', ['Staff'], ['Matk×' + parseInt((T_skillLv + 6)/4) + '% +' + (2*T_skillLv + 40), 'Matk×' + parseInt((T_skillLv + 2)/4) + '% +' + (2*T_skillLv + 40)]);
										all_SI[5].SI_unit = ')。';
										all_SI[6].SI_name = '使「祝福」的恢復次數增加';
										all_SI[6].SI_value = parseInt((T_skillLv+1)/2);
										all_SI[6].SI_unit = '次。';
										all_SI[7].SI_name = '使「祝福」的持續時間增加';
										all_SI[7].SI_value = 5*parseInt((T_skillLv+1)/2);
										all_SI[7].SI_unit = '秒。';
										all_SI[16].SI_value = '被動效果';
										
										all_SI[27].SI_value = '「祝福」的恢復頻率依然是每5秒一次。';
										all_SI[28].SI_value = '<br />此技能僅提升「祝福」的恢復量、恢復次數、持續時間，無其它效果。';
										all_SI[28].SI_name = '<br />裝備法杖且「祝福」的等級為10級時，恢復量再提升';
										all_SI[29].SI_unit = '。';
										break;
								}
								break;
							case 5:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '此技能為複合傷害，包含_&1_與_&1_。兩部分的傷害最後會相加，並只顯示一個數字。';
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite fast|,|稍快';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_value = '此技能不會被迴避。<br />裝備法杖或拳套將會影響兩種部分所佔的比例。';
										break;
									case 1:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Atk|,|有效Atk';
										all_SI[2].SI_value = 50 + 5*T_skillLv;
										all_SI[3].SI_value = input_SI_value_bySelection('Weap',['Staff', 'Knuckles'],[(15 + 2.5*T_skillLv), (60 + 10*T_skillLv), (30 + 5*T_skillLv)]);
										break;
									case 2:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Matk|,|有效Matk';
										all_SI[2].SI_value = 50 + 5*T_skillLv;
										all_SI[3].SI_value = input_SI_value_bySelection('Weap',['Staff', 'Knuckles'],[(60 + 10*T_skillLv), (15 + 2.5*T_skillLv), (30 + 5*T_skillLv)]);
										break;
								}
								break;
							case 6:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = 'Damage:|,|傷害：|,|ダメージ：';
										all_SI[1].SI_value = 'Valid Matk|,|有效Matk';
										all_SI[2].SI_value = 0;
										all_SI[3].SI_value = 100 + 15*T_skillLv;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = 'quite fast|,|稍快';
										all_SI[18].SI_value = 2;
										all_SI[20].SI_value = 1;

										all_SI[27].SI_name = '此技能之魔法貫穿+';
										all_SI[27].SI_value = T_skillLv;
										all_SI[27].SI_unit = '%。';
										break;
								}
								break;
							case 7:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '(此技能尚無資料)';
										all_SI[16].SI_value = '狀態效果';
										break;
								}
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
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '復活時間減少';
										all_SI[5].SI_value = 5*T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '即復活時間減少' + 3*6*T_skillLv + '秒。';
										break;
								}
								break;
							case 2:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '由擊敗敵人所獲取的經驗值增加';
										all_SI[5].SI_value = T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '同時存在其他經驗值加成效果時，採疊加。';
										break;
								}
								break;
							case 3:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '擊敗敵人後所有可能掉落的物品，掉落率增加';
										all_SI[5].SI_value = T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '同時存在其他掉落率加成效果時，採疊加。';
										break;
								}
								break;
							case 4:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'HP自然恢復+';
										all_SI[5].SI_value = 10*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = 'HP自然恢復+';
										all_SI[6].SI_value = T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 5:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'HP上限+';
										all_SI[5].SI_value = 100*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = 'HP上限+';
										all_SI[6].SI_value = 2*T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 6:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '使角色在戰鬥狀態時，獲得_&1_效果。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '於非戰鬥狀態時，_&1_效果不會發動。';
										break;
									case 1:
										all_SI[5].SI_name = '每3秒恢復(1+HP上限×';
										all_SI[5].SI_value = 0.04*T_skillLv;
										all_SI[5].SI_unit = '%)的HP。';
										all_SI[16].SI_value = '被動恢復';
										break;
								}
								break;
							case 7:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'MP自然恢復+';
										all_SI[5].SI_value = T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = 'MP自然恢復+';
										all_SI[6].SI_value = 5*T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 8:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'MP上限+';
										all_SI[5].SI_value = 30*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 9:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '使角色在戰鬥狀態時，獲得_&1_效果。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '於非戰鬥狀態時，_&1_效果不會發動。';
										break;
									case 1:
										all_SI[5].SI_name = '每3秒恢復(1+MP上限×';
										all_SI[5].SI_value = 0.05*T_skillLv;
										all_SI[5].SI_unit = '%)的MP。';
										all_SI[16].SI_value = '被動恢復';
										break;
								}
								break;
						}
						break;
					case 1:
						switch (T_no_S)
						{
							case 1:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = `急救時的時間減少比率提升至${30+2*T_skillLv}%。`;
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '每次進行急救，復活的剩餘時間會減少(當前時間*時間減少比率)。(沒點此技能的話，基礎的時間減少率為30%)';
										break;
								}
								break;
							case 2:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '恢復量：';
										all_SI[5].SI_value = 30*T_skillLv + '+(目標HP上限×' + T_skillLv + '%)';
										all_SI[16].SI_value = '單體友方恢復';
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										all_SI[18].SI_value = 1;
										all_SI[21].SI_value = 1;
										all_SI[27].SI_value = `對不支倒地的目標施放此技能，可使該目標的剩餘復活時間減少${T_skillLv}秒。`;
										break;
								}
								break;
							case 3:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '使用後可解除目標身上最多2個異常狀態。最先受到的異常狀態會最先被解除。';
										all_SI[6].SI_name = '並可獲得持續';
										all_SI[6].SI_value = 10 + 2*T_skillLv;
										all_SI[6].SI_unit = '秒的預防效果。預防效果可抵擋所有控制狀態以外的異常狀態。';
										all_SI[16].SI_value = '單體友方效果';
										all_SI[17].SI_value = 'fast|,|快';
										all_SI[21].SI_value = 1;
										all_SI[27].SI_value = '成功解除或預防異常狀態時，施術者恢復100MP。';
										break;
								}
								break;
							case 4:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '使用後可於原地設置一個_&1_。';
										all_SI[16].SI_value = '設置效果';
										all_SI[17].SI_value = 'slow|,|慢';
										all_SI[21].SI_value = 1;
										break;
									case 1:
										all_SI[5].SI_value = `區域內的所有友方在受到傷害時，若該傷害未超過該友軍HP上限的${5+0.5*T_skillLv}%，該傷害將減少${30+20*parseInt((T_skillLv-1)/3)}。`;
										all_SI[16].SI_value = '區域隊伍效果';
										all_SI[22].SI_value = '設置位置';
										all_SI[23].SI_value = 1 + (T_skillLv/3).toFixed(1);
										all_SI[24].SI_value = '？';
										break;
								}
								break;
							case 5:
								switch (No_Branch)
								{
									case 0:
										all_SI[0].SI_value = '恢復量：';
										all_SI[5].SI_value = 300*T_skillLv + '+(目標HP上限×' + (10+1*T_skillLv) + '%)';
										all_SI[16].SI_value = '單體友方恢復';
										all_SI[17].SI_value = 'quite slow|,|稍慢';
										all_SI[18].SI_value = 1;
										all_SI[21].SI_value = 1;
										all_SI[27].SI_value = `對不支倒地的目標施放此技能，可使該目標的剩餘復活時間減少${10 + 2*T_skillLv}秒。`;
										break;
								}
								break;
							case 6:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '每3秒恢復' + (10+4*T_skillLv) + 'HP。';
										all_SI[16].SI_value = '恢復光環';
										all_SI[17].SI_value = 'slow|,|慢';
										all_SI[22].SI_value = '光環';
										all_SI[23].SI_value = 4 + 0.6*T_skillLv;
										all_SI[24].SI_value = 900;
										all_SI[27].SI_name = '作用期間施術者的防禦力下降。';
										all_SI[27].SI_value = '(目前尚無資料)';
										all_SI[27].SI_unit = '';
										all_SI[28].SI_value = '<br />建議詳閱_@光環之說明。';
										break;
								}
								break;
							case 7:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '武器Atk+' + (10+2*T_skillLv) + '%。';
										all_SI[16].SI_value = '加成光環';
										all_SI[17].SI_value = 'slow|,|慢';
										all_SI[22].SI_value = '光環';
										all_SI[23].SI_value = 4 + 0.6*T_skillLv;
										all_SI[24].SI_value = 900;
										all_SI[27].SI_name = '作用期間施術者的命中下降。';
										all_SI[27].SI_value = '(目前尚無資料)';
										all_SI[27].SI_unit = '';
										all_SI[28].SI_value = '<br />建議詳閱_@光環之說明。';
										break;
								}
								break;
							case 8:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '詠唱速度+';
										all_SI[5].SI_value = 250;
										all_SI[5].SI_unit = '%。<br />(目前只有Lv10的資料)';
										all_SI[16].SI_value = '加成光環';
										all_SI[17].SI_value = 'slow|,|慢';
										all_SI[22].SI_value = '光環';
										all_SI[23].SI_value = 4 + 0.6*T_skillLv;
										all_SI[24].SI_value = 900;
										all_SI[27].SI_name = '作用期間施術者的MP恢復能力下降。';
										all_SI[27].SI_value = '(目前尚無資料)';
										all_SI[27].SI_unit = '';
										all_SI[28].SI_value = '<br />建議詳閱_@光環之說明。';
										break;
								}
								break;
							case 9:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '(靜待更新)';
										break;
								}
								break;
							case 10:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '每3秒恢復' + parseInt(10+1.5*T_skillLv) + '的MP。';
										all_SI[16].SI_value = '恢復光環';
										all_SI[17].SI_value = 'slow|,|慢';
										all_SI[22].SI_value = '光環';
										all_SI[23].SI_value = 4 + 0.6*T_skillLv;
										all_SI[24].SI_value = 900;
										all_SI[27].SI_name = '作用期間施術者Atk-';
										all_SI[27].SI_value = 2.5*T_skillLv;
										all_SI[27].SI_unit = '%、';
										all_SI[28].SI_name = 'Matk-';
										all_SI[28].SI_value = 2.5*T_skillLv;
										all_SI[28].SI_unit = '%。';
										all_SI[29].SI_value = '<br />建議詳閱_@光環之說明。';
										break;
								}
								break;
							case 11:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'Def+';
										all_SI[5].SI_value = 10 + 2*T_skillLv;
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = 'Mdef+';
										all_SI[6].SI_value = 10 + 2*T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '加成光環';
										all_SI[17].SI_value = 'slow|,|慢';
										all_SI[22].SI_value = '光環';
										all_SI[23].SI_value = 4 + 0.6*T_skillLv;
										all_SI[24].SI_value = 900;
										all_SI[27].SI_name = '作用期間施術者的迴避下降。';
										all_SI[27].SI_value = '(目前尚無資料)';
										all_SI[27].SI_unit = '';
										all_SI[28].SI_value = '<br />建議詳閱_@光環之說明。';
										break;
								}
								break;
							case 12:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '增加異常抗性。<br />(此技能尚無資料)';
										all_SI[16].SI_value = '加成光環';
										all_SI[17].SI_value = 'slow|,|慢';
										all_SI[22].SI_value = '光環';
										all_SI[23].SI_value = 4 + 0.6*T_skillLv;
										all_SI[24].SI_value = 900;
										all_SI[27].SI_name = '作用期間施術者的攻擊速度下降。';
										all_SI[27].SI_value = '(目前尚無資料)';
										all_SI[27].SI_unit = '';
										all_SI[28].SI_value = '<br />建議詳閱_@光環之說明。';
										break;
								}
								break;
							case 13:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '(靜待更新)';
										break;
								}
								break;
						}
						break;
					case 2:
						switch (T_no_S)
						{
							case 1:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'Matk+(角色等級×';
										all_SI[5].SI_value = 2.5*T_skillLv;
										all_SI[5].SI_unit = '%)。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 2:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '造成魔法傷害時，有'+ T_skillLv + '%機率發動_&1_。';
										all_SI[16].SI_value = '被動效果';
										break;
									case 1:
										all_SI[5].SI_value = '此魔法傷害的總傷害提升' + (10 + 1*T_skillLv) + '%。';
										all_SI[16].SI_value = '被動增幅';
										break;
								}
								break;
							case 3:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = `處於_@膽怯、_@翻覆、_@昏厥、_@逼退狀態時，受到的傷害將減少${T_skillLv}%。`;
										all_SI[16].SI_value = '被動效果';
										break;
								}
								break;
							case 4:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'Matk+(角色等級×';
										all_SI[5].SI_value = 2.5*T_skillLv;
										all_SI[5].SI_unit = '%)。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 6:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'Atk+(角色等級×';
										all_SI[5].SI_value = 2.5*T_skillLv;
										all_SI[5].SI_unit = '%)。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 7:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '造成物理傷害時，有'+ T_skillLv + '%機率發動_&1_。';
										all_SI[16].SI_value = '被動效果';
										break;
									case 1:
										all_SI[5].SI_value = '此物理傷害的總傷害提升' + (10 + 1*T_skillLv) + '%。';
										all_SI[16].SI_value = '被動增幅';
										break;
								}
								break;
							case 8:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '暴擊率+';
										all_SI[5].SI_value = 0.5*T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '暴擊傷害+';
										all_SI[6].SI_value = 0.5*T_skillLv;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 9:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'Atk+(角色等級×';
										all_SI[5].SI_value = 2.5*T_skillLv;
										all_SI[5].SI_unit = '%)。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 11:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'Def+(角色等級×';
										all_SI[5].SI_value = 2.5*T_skillLv;
										all_SI[5].SI_unit = '%)。';
										all_SI[6].SI_name = 'Mdef+(角色等級×';
										all_SI[6].SI_value = 2.5*T_skillLv;
										all_SI[6].SI_unit = '%)。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 12:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '迴避+';
										all_SI[5].SI_value = T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 13:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = '命中+';
										all_SI[5].SI_value = T_skillLv;
										all_SI[5].SI_unit = '。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 14:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_name = 'Def+(角色等級×';
										all_SI[5].SI_value = 2.5*T_skillLv;
										all_SI[5].SI_unit = '%)。';
										all_SI[6].SI_name = 'Mdef+(角色等級×';
										all_SI[6].SI_value = 2.5*T_skillLv;
										all_SI[6].SI_unit = '%)。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
						}
						break;
				}
				break;
			case 3:
				switch (No_ST)
				{
					case 0:
						switch (T_no_S)
						{
							case 1:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '處於_&1_狀態。';
										all_SI[6].SI_value = '受_&2_影響。';
										all_SI[7].SI_value = '受_&3_約束。';
										all_SI[16].SI_value = '天賦效果';
										break;
									case 1:
										all_SI[5].SI_value = 'HP上限降低至1。';
										all_SI[6].SI_name = '閃躲率+';
										all_SI[6].SI_value = 100;
										all_SI[6].SI_unit = '%。';
										all_SI[7].SI_value = '獲得次元靈化效果。';
										all_SI[16].SI_value = '被動效果';
										break;
									case 2:
										all_SI[5].SI_value = '閃躲率上限提升至100%。';
										all_SI[6].SI_value = '使自身的閃躲率無法在任何情況下被削減或無視。';
										all_SI[16].SI_value = '被動效果';
										break;
									case 3:
										all_SI[5].SI_value = '受到魔法傷害時，該傷害無視下限降低至0。';
										all_SI[6].SI_value = '免疫一切異常狀態。';
										all_SI[7].SI_value = 'Matk+3900%。';
										all_SI[16].SI_value = '被動效果';
										break;
									case 4:
										all_SI[5].SI_value = '在造成傷害時，該傷害無視下限降低至0。';
										all_SI[16].SI_value = '被動效果';
										break;	
								}
								break;
							case 2:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '在目標腳下產生一區域，持續時間內該目標將無法離開該區域。';
										all_SI[16].SI_value = '單體效果';
										all_SI[17].SI_value = 'extremely fast|,|極快';
										all_SI[18].SI_value = 1 - 0.025*T_skillLv;
										all_SI[22].SI_value = '目標位置';
										all_SI[23].SI_value = 6 - 0.5*T_skillLv;
										all_SI[24].SI_value = 2.5 + 0.25*T_skillLv;
										all_SI[27].SI_value = '此技能僅對單體有效果。就算目標外的敵人進入作用範圍，也不受此技能影響。';
										break;
								}
								break;
							case 3:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '指定一定點後開始詠唱，詠唱須至少1秒。詠唱完畢時將發生_&1_。<br />根據詠唱的時間將影響爆炸的效果。';
										all_SI[17].SI_value = 'extremely fast|,|極快';
										all_SI[18].SI_value = '1~5';
										break;
									case 1:	
										all_SI[5].SI_name = '每多詠唱0.5秒，影響半徑增加';
										all_SI[5].SI_value = 0.25 + 0.05*T_skillLv;
										all_SI[5].SI_unit = 'm。';
										all_SI[6].SI_name = '每多詠唱0.5秒，_@逼退距離增加';
										all_SI[6].SI_value = 0.625 + 0.125*T_skillLv;
										all_SI[6].SI_unit = 'm。';
										all_SI[16].SI_value = '範圍效果';
										all_SI[22].SI_value = '指定位置';
										all_SI[23].SI_value = (2 + 0.4*T_skillLv) + '~' + (4 + 0.8*T_skillLv);
										all_SI[25].SI_value = 100;
										all_SI[26].SI_value = '被_@逼退'
										all_SI[27].SI_value = '<br />_@逼退距離為5~' + (10 + T_skillLv) + 'm。';
										break;
								}
								break;
							case 4:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '使目標於持續時間內無法施放任何技能。';
										all_SI[16].SI_value = '單體效果';
										all_SI[17].SI_value = 'extremely fast|,|極快';
										all_SI[18].SI_value = 1.8 - 0.1*T_skillLv;
										all_SI[24].SI_value = 3 + 0.2*T_skillLv;
										all_SI[27].SI_value = '此技能無法對同一目標於' + (60 - 3*T_skillLv) + '秒內再度施放。';
										break;
								}
								break;
							case 5:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '清除目標身上所有的增益效果及減益效果。';
										all_SI[16].SI_value = '單體效果';
										all_SI[17].SI_value = 'extremely fast|,|極快';
										all_SI[18].SI_value = 2 - 0.1*T_skillLv;
										all_SI[24].SI_value = 3 + 0.2*T_skillLv;
										all_SI[27].SI_value = '施放完畢後，目標獲得_&1_的副作用。';
										break;
									case 1:
										all_SI[5].SI_value = '在受到任何增益狀態時，將清除該狀態。';
										all_SI[16].SI_value = '狀態效果';
										all_SI[24].SI_value = 5 - 0.2*T_skillLv;
										break;
								}
								break;
							case 6:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '使目標的HP恢復至上限。';
										all_SI[16].SI_value = '單體效果';
										all_SI[17].SI_value = 'extremely fast|,|極快';
										all_SI[18].SI_value = 2.2 - 0.1*T_skillLv;
										all_SI[27].SI_value = '施放完畢後，目標將_&1_一段時間。';
										break;
									case 1:
										all_SI[5].SI_value = '減少造成的傷害(恢復的HP百分比)%。<br />減少的傷害將在五秒內逐漸恢復。';
										all_SI[16].SI_value = '狀態效果';
										all_SI[24].SI_value = 5;
										all_SI[27].SI_value = '例如：當前HP剩下25%，則此技能會恢復75%的血量。而衰弱便會減少75%的傷害輸出，並以每秒75%×20%=15%的速度恢復至正常。';
										break;
								}
								break;
							case 7:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '使目標降低50%的傷害輸出，並受到沉默效果。';
										all_SI[16].SI_value = '狀態效果';
										all_SI[17].SI_value = 'extremely fast|,|極快';
										all_SI[18].SI_value = 1.6 - 0.1*T_skillLv;
										all_SI[24].SI_value = 1;
										all_SI[27].SI_value = '降低傷害對目標正在施放或已經施放的技能也有效果。(例如：設置型技能、正在飛行但尚未擊中目標的技能)';
										break;
								}
								break;
							case 8:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '詠唱須至少0.5秒。詠唱完畢時，將往角色前方_&1_一定距離。_&1_的距離與詠唱時間有關。';
										all_SI[16].SI_value = '效果';
										all_SI[17].SI_value = 'extremely fast|,|極快';
										all_SI[18].SI_value = '0.5~1.5';
										break;
									case 1:
										all_SI[5].SI_value = '移動距離為' + (2+0.1*T_skillLv) + '~' + (5.5+0.25*T_skillLv) + 'm。<br />將根據詠唱時間的多寡逐漸遞增。';
										all_SI[16].SI_value = '效果';
										all_SI[17].SI_value = 'extremely fast|,|極快';
										break;
								}
								break;
							case 9:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '使目標進入_&1_狀態。';
										all_SI[16].SI_value = '單體效果';
										all_SI[17].SI_value = 'extremely fast|,|極快';
										all_SI[18].SI_value = 2.2 - 0.1*T_skillLv;
										break;
									case 1:
										all_SI[5].SI_value = '不會被鎖定，且普通攻擊或施放技能都不會產生任何仇恨值。';
										all_SI[16].SI_value = '狀態效果';
										all_SI[24].SI_value = 6 + T_skillLv;
										all_SI[27].SI_value = '隱身前就擁有的仇恨值並不會消失。也就是說，可能隱身效果一結束就被鎖定。';
										break;
								}
								break;
							case 10:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '在指定區域召喚一魔法陣，魔法陣內的生物都會受到_&1_影響<br />(不分敵我)。';
										all_SI[16].SI_value = '效果設置';
										all_SI[17].SI_value = 'extremely fast|,|極快';
										all_SI[18].SI_value = 2.6 - 0.1*T_skillLv;
										all_SI[24].SI_value = 10 + 2*T_skillLv;
										break;
									case 1:
										all_SI[5].SI_value = '同時受到「_@遲緩」及「_@乏力」效果。';
										all_SI[16].SI_value = '狀態效果';
										all_SI[27].SI_value = '狀態持續時間為無限，只有離開魔法陣時狀態才會消失。';
										break;
								}
								break;
							case 11:
								switch (No_Branch)
								{
									case 0:
										all_SI[5].SI_value = '在指定區域召喚一魔法陣，位於魔法陣內的隊伍成員都會受到_&1_保護。';
										all_SI[16].SI_value = '效果設置';
										all_SI[17].SI_value = 'extremely fast|,|極快';
										all_SI[18].SI_value = 2.6 - 0.1*T_skillLv;
										all_SI[24].SI_value = 10 + 2*T_skillLv;
										break;
									case 1:
										all_SI[5].SI_value = '隊伍成員所承受傷害的99%將會轉嫁到霧氣上。單個魔法陣的霧氣最多能吸收(Matk×' + (190+20*T_skillLv) + '%)的總傷害。';
										all_SI[16].SI_value = '效果';
										all_SI[27].SI_value = '所有魔法陣內的隊伍成員，共用同個霧氣的血量。<br />霧氣承受過量傷害後魔法陣會消失。';
										break;
								}
								break;
						}
						break;
				}
				break;
		}
			
			
			
			
		//額外加成
		let Cur_Skill = all_skilltree_type[No_STT].STt_skilltree[No_ST].ST_skill[No_S];
		for (let i=0;i<Cur_Skill.Sk_Gain.length; ++i)
		{
			if ( Cur_Skill.Sk_Gain[i].SG_SINo < 8 || Cur_Skill.Sk_Gain[i].SG_SINo > 15)	//0~7 & 16~29
			{
				if ( Cur_Skill.Sk_Gain[i].SG_Sbranch == No_Branch)
				{
					if ( armsDoor(Cur_Skill.Sk_Gain[i].W_Type, Cur_Skill.Sk_Gain[i].Au_Type, Cur_Skill.Sk_Gain[i].B_Type) )//當前裝備符合Skill Item Gain之裝備條件
					{
						all_SI[Cur_Skill.Sk_Gain[i].SG_SINo].SI_value += Cur_Skill.Sk_Gain[i].SG_value;
					}
				}
			}
		}
		
		if (all_SI[18].SI_value < 0)
		{
			all_SI[18].SI_value = 0;
		}
		if (all_SI[25].SI_value > 100)
		{
			all_SI[25].SI_value = 100;
		}
		if (all_SI[25].SI_value < 0)
		{
			all_SI[25].SI_value = 0;
		}
	
	}
	
		