
	
	function input_the_skillvalue_2(No_STT,No_ST,No_S,Tname){
		No_STT = Number(No_STT);
		No_ST = Number(No_ST);
		No_S = Number(No_S);
		let T_no_S = all_skilltree_type[No_STT].STt_skilltree[No_ST].ST_skill[No_S].Sk_no;
		
		//初始化Skill Item
		for (let i=0; i<=7; ++i)
		{
			all_SI[i].SI_value = '';
		}
		all_SI[5].SI_name = '';
		all_SI[5].SI_unit = '';
		all_SI[6].SI_name = '';
		all_SI[6].SI_unit = '';
		all_SI[7].SI_name = '';
		all_SI[7].SI_unit = '';
		for (let i=16; i<all_SI.length; ++i)
		{
			all_SI[i].SI_value = '';
		}
		if (all_SI[24].SI_unit != '秒')
		{
			all_SI[24].SI_unit = '秒';
		}
		all_SI[27].SI_name = '';
		all_SI[28].SI_name = '';
		all_SI[29].SI_name = '';
		all_SI[27].SI_unit = '';
		all_SI[28].SI_unit = '';
		all_SI[29].SI_unit = '';
		
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
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 50 + 5*Lv_skill;
										all_SI[3].SI_value = 100 + 5*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 5*Lv_skill;
										all_SI[26].SI_value = '_@膽怯';
										break;
								}
								break;
							case 2:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 150 + 5*Lv_skill;
										all_SI[3].SI_value = 150 + 10*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '極快';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_name = '若技能未被迴避，';
										all_SI[27].SI_value = 5*Math.floor((Lv_skill+6)/6);
										all_SI[27].SI_unit = '秒';
										all_SI[28].SI_name = '內自身暴擊率+';
										all_SI[28].SI_value = 25;
										all_SI[28].SI_unit = '。';
										break;
								}
								break;
							case 3:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 200 + 10*Lv_skill;
										all_SI[3].SI_value = 150 + 5*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '極快';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_name = '裝備單手劍時，';
										all_SI[27].SI_value = '';
										all_SI[27].SI_unit = '。<br />';
										all_SI[28].SI_value = '若技能未被迴避，將獲得力量灌注狀態，強化下一招技能。';
										break;
									case '力量灌注':
										all_SI[5].SI_name = '攻擊MP恢復+';
										all_SI[5].SI_value = 2*Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_value = '施放任意技能後，該技能動作時間減少40%，並使狀態消失。';
										all_SI[16].SI_value = '效果狀態';
										all_SI[27].SI_value = '持續時間為無限。施放任意技能後此狀態結束。';
										break;
								}
								break;
							case 4:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '狀態作用期間，固定次數內的普通攻擊獲得額外效果。<br />前10次普通攻擊轉為強化攻擊；第11次普通攻擊將附帶二連閃擊及劍光一閃。';
										all_SI[16].SI_value = '效果狀態';
										all_SI[27].SI_value = '持續時間為無限。在發動二連閃擊或受到異常狀態後，此狀態結束。';
										break;
									case '強化攻擊':
										all_SI[5].SI_name = '普通攻擊之傷害提升';
										all_SI[5].SI_value = input_SI_value_bySelection(WeapType_Cur,['單手劍'],[10 + 9*Lv_skill, 10 + 4*Lv_skill]);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '攻擊MP恢復+';
										all_SI[6].SI_value = input_SI_value_bySelection(WeapType_Cur,['雙劍'],[1.25*Lv_skill, 2.5*Lv_skill]);
										all_SI[6].SI_unit = '。';
										all_SI[16].SI_value = '強化普通攻擊';
										all_SI[17].SI_value = '同普通攻擊';
										all_SI[20].SI_value = 1;
										break;
									case '二連閃擊':
										all_SI[0].SI_value = '每次傷害：(共用判定)';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 300 + 20*Lv_skill;
										all_SI[3].SI_value = 50 + 5*Lv_skill;
										all_SI[16].SI_value = '追加傷害';
										all_SI[20].SI_value = 2;
										break;
									case '劍光一閃':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 300 + 20*Lv_skill;
										all_SI[3].SI_value = 250 + 5*Lv_skill;
										all_SI[16].SI_value = '追加傷害';
										all_SI[20].SI_value = 1;
										break;
								}
								break;
							case 6:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 100 + 5*Lv_skill;
										all_SI[3].SI_value = 100 + 5*Lv_skill;
										all_SI[16].SI_value = '範圍直線傷害';
										all_SI[17].SI_value = '稍快';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置-目標位置';
										all_SI[23].SI_value = 2;
										all_SI[27].SI_name = '此技能之暴擊率+';
										all_SI[27].SI_value = input_SI_value_bySelection(WeapType_Cur,['單手劍'],[10*Lv_skill, Lv_skill]);
										all_SI[27].SI_unit = '。';
										all_SI[28].SI_value = '施放時將會迅速衝刺至敵人身旁，並對路徑上的所有敵人造成傷害。<br />施放完成後，獲得蓄勢待發狀態。';
										break;
									case '蓄勢待發':
										all_SI[5].SI_value = '狀態期間若施放「音速斬切」，該「音速斬切」將會轉為「超音速斬切」(強化效果)，並使此狀態結束。';
										all_SI[16].SI_value = '效果狀態';
										all_SI[24].SI_value = 5;
										all_SI[27].SI_value = '無論施放「音速斬切」還是「超音速斬切」，都會獲得蓄勢待發效果。也就是說，如果時間控制得宜，「超音速斬切」是可以連續施放的。';
										break;
									case '強化效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 100 + 5*Lv_skill;
										all_SI[3].SI_value = 200 + 10*Lv_skill;
										all_SI[16].SI_value = '範圍直線傷害';
										all_SI[17].SI_value = '稍快';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置-目標後方1m處';
										all_SI[23].SI_value = 2;
										all_SI[27].SI_name = '此技能之暴擊率+';
										all_SI[27].SI_value = input_SI_value_bySelection(WeapType_Cur,['單手劍'],[10*Lv_skill,Lv_skill]);
										all_SI[27].SI_unit = '。';
										all_SI[28].SI_value = '施放時將會迅速衝刺至敵人身後1m處，並對路徑上的所有敵人造成傷害。<br />施放完成後，獲得蓄勢待發狀態。';
										break;
								}
								break;
							case 7:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '每次傷害：(共用判定)';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 30;
										all_SI[3].SI_value = 10 + 3*Lv_skill;
										all_SI[16].SI_value = '設置單體傷害';
										all_SI[17].SI_value = '快';
										all_SI[20].SI_value = 10;
										all_SI[24].SI_value = '約1~2';
										all_SI[27].SI_value = '此技能必定不暴擊。';
										all_SI[28].SI_name = '若此技能未被迴避，' + (2+Lv_skill) + '秒內自身暴擊傷害+[';
										all_SI[28].SI_value = input_SI_value_bySelection(WeapType_Cur,['單手劍'],[(Lv_skill+1)/2 + '(Dex×2%)', (Lv_skill+1)/4 + '(Dex×1%)']);
										all_SI[28].SI_unit = ']。(計算完後小數無條件捨棄)';
										break;
								}
								break;
							case 8:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '向目標發射一道刃風，刃風將在造成傷害後消失，並隨即於目標位置產生風刃氣旋。';
										all_SI[17].SI_value = '稍慢';
										break;
									case '刃風':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 0;
										all_SI[3].SI_value = 150 + 10*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[20].SI_value = 1;
										break;
									case '風刃氣旋':
										all_SI[0].SI_value = '每下傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 80;
										all_SI[3].SI_value = 50 + 5*Lv_skill;
										all_SI[16].SI_value = '設置範圍傷害';
										all_SI[20].SI_value = Math.floor((Lv_skill+3)/2);
										all_SI[22].SI_value = '刃風造成傷害時目標的位置';
										all_SI[23].SI_value = 3 + Math.floor(Lv_skill/3);
										all_SI[24].SI_value = '約' + (3+Math.floor(Lv_skill/3))*0.5;
										break;
								}
								break;
							case 10:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'Atk+';
										all_SI[5].SI_value = 1 + Math.floor((Lv_skill+2)/5);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '武器Atk+';
										all_SI[6].SI_value = 3*Lv_skill;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 11:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '攻擊速度+';
										all_SI[5].SI_value = 10*Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '攻擊速度+';
										all_SI[6].SI_value = Lv_skill;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 12:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '「劍術技能」中的所有攻擊技能，總傷害提升';
										all_SI[5].SI_value = 2*Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動增幅';
										break;
								}
								break;
							case 13:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'Atk+';
										all_SI[5].SI_value = Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '隊伍狀態加成';
										all_SI[17].SI_value = '快';
										all_SI[24].SI_value = 15 + Lv_skill;
										all_SI[27].SI_value = '施放時可消除自身的_@逼退狀態。';
										break;
								}
								break;
							}
						break;
					case 1:
						switch (T_no_S)
						{
							case 1:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 50 + 8*Lv_skill;
										all_SI[3].SI_value = 125 + 5*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '快';
										all_SI[19].SI_value = 5.5 - 0.5*Math.floor(Lv_skill/2);
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 10 + 10*Math.floor((Lv_skill+2)/3);
										all_SI[26].SI_value = '_@翻覆';
										
										all_SI[27].SI_name = '<br />此技能對處於_@遲緩狀態的目標暴擊率+';
										all_SI[27].SI_value = 5*Lv_skill;
										all_SI[27].SI_unit = '。';
										break;
								}
								break;
							case 2:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '每下傷害： (共用判定)';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 30 + 4*Lv_skill;
										all_SI[3].SI_value = 25 + 5*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '約1.5秒';
										all_SI[20].SI_value = 3;
										
										all_SI[27].SI_name = '此技能之第二箭物理貫穿+';
										all_SI[27].SI_value = 4*Lv_skill;
										all_SI[27].SI_unit = '%，';
										all_SI[28].SI_name = '<br />第三箭物理貫穿+';
										all_SI[28].SI_value = 8*Lv_skill;
										all_SI[28].SI_unit = '%。';
										break;
								}
								break;
							case 3:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 200 + 20*Lv_skill;
										all_SI[3].SI_value = 300 + 50*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '快';
										all_SI[19].SI_value = 7 - 0.5*Lv_skill;
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 40 + 4*Lv_skill;
										all_SI[26].SI_value = '_@降防';
										
										all_SI[27].SI_name = '<br />此技能的總暴擊率降低';
										all_SI[27].SI_unit = '%。';
										break;
								}
								break;
							case 4:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '每下傷害：(分開判定)';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 50 + 10*Math.floor((Lv_skill+1)/2);
										all_SI[3].SI_value = 100 + 6*Math.floor(Lv_skill/2);
										all_SI[16].SI_value = '設置範圍傷害';
										all_SI[17].SI_value = '快';
										all_SI[20].SI_value = input_SI_value_bySelection(WeapType_Cur, ['弓'], [2*(1 + Math.floor(Lv_skill/3)), 1 + Math.floor(Lv_skill/3)]);
										
										all_SI[22].SI_value = '目標位置';
										all_SI[23].SI_value = 2;
										all_SI[24].SI_value = 1 + Math.floor(Lv_skill/3);
										break;
								}
								break;
							case 6:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 50 + 5*Lv_skill;
										all_SI[3].SI_value = 100 + 5*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 50 + 2*Lv_skill
										all_SI[26].SI_value = '_@遲緩';
										break;
								}
								break;
							case 7:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 100 + 20*Lv_skill;
										all_SI[3].SI_value = 110 + 5*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 60 + Lv_skill;
										all_SI[26].SI_value = '_@麻痺';
										
										all_SI[27].SI_name = '<br />若技能未被迴避，10秒內自身穩定度+';
										all_SI[27].SI_value = Lv_skill;
										all_SI[27].SI_unit = '%。';
										break;
								}
								break;
							case 8:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 200 + 30*Lv_skill;
										all_SI[3].SI_value = 120 + 5*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 50 + 2*Lv_skill;
										all_SI[26].SI_value = '_@盲目';
										
										all_SI[27].SI_name = '<br />若技能未被迴避，10秒內自身命中+';
										all_SI[27].SI_value = ((20 + 4*Math.floor(Lv_skill/2))*Math.floor((Lv_skill + 2)/2))/2 - ((10 + 4*Math.floor(Lv_skill/2))/2)*((Lv_skill+1)%2) - 5;
										all_SI[27].SI_unit = '。';
										break;
								}
								break;
							case 10:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'Atk+';
										all_SI[5].SI_value = 1 + Math.floor((Lv_skill+2)/5);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '武器Atk+';
										all_SI[6].SI_value = 3*Lv_skill;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 11:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '施放完畢後，之後發動的';
										all_SI[5].SI_value = Lv_skill;
										all_SI[5].SI_unit = '次攻擊不會產生仇恨值。<br />(攻擊：普通攻擊或技能)';
										all_SI[16].SI_value = '狀態效果';
										all_SI[17].SI_value = '慢';
										break;
								}
								break;
							case 12:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '射程高於或等於8m之攻擊技能，總傷害上升';
										all_SI[5].SI_value = Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動';
										break;
								}
								break;
							case 13:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '在有實際消耗MP的攻擊技能施放完畢後，有';
										all_SI[5].SI_value = 5 + 2*Lv_skill;
										all_SI[5].SI_unit = '%機率恢復100MP。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '只有攻擊類技能才有效果。';
										all_SI[28].SI_value = '實際消耗，意即因連擊配置而使MP消耗為0的技能不會觸發。';
										break;
								}
								break;
						}
						break;						
					case 2:
						switch (T_no_S)
						{
							case 1:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '每下傷害：(共用判定)';
										all_SI[1].SI_value = '有效Matk';
										all_SI[2].SI_value = 10 + Lv_skill;
										all_SI[3].SI_value = 45 + 5*Lv_skill;
										all_SI[16].SI_value = '設置單體傷害';
										all_SI[17].SI_value = '快';
										all_SI[18].SI_value = 2;
										all_SI[20].SI_value = 1 + Math.floor((Lv_skill+1)/2);
										all_SI[24].SI_value = '約' + (1 + Math.floor((Lv_skill+1)/2))/2;
										break;
								}
								break;
							case 2:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Matk';
										all_SI[2].SI_value = 50 + 15*Lv_skill;
										all_SI[3].SI_value = 150 + 10*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '稍慢';
										all_SI[25].SI_value = 2*Lv_skill;
										all_SI[26].SI_value = '受到異常狀態';
										
										all_SI[27].SI_value = '<br />各屬性的異常狀態不盡相同。';
										all_SI[28].SI_value = '更多說明可查看_@法術/長槍補述。';
										break;
								}
								break;
							case 3:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '每下傷害：(共用判定)';
										all_SI[1].SI_value = '有效Matk';
										all_SI[2].SI_value = 25 + 10*Lv_skill;
										all_SI[3].SI_value = 75 + 5*Lv_skill;
										all_SI[16].SI_value = '設置單體傷害';
										all_SI[17].SI_value = '稍快';
										all_SI[18].SI_value = 2;
										all_SI[20].SI_value = 2 + Math.floor(Lv_skill/6);
										all_SI[24].SI_value = 3.5*(2 + Math.floor((Lv_skill-1)/5));
										all_SI[25].SI_value = input_SI_value_bySelection(WeapType_Cur, ['法杖', '魔導具'], [6*Lv_skill, 6*Lv_skill, Lv_skill]);
										all_SI[26].SI_value = '_@停止';	
										
										all_SI[27].SI_value = '<br />每下傷害均有機率造成_@停止狀態。';
										break;
								}
								break;
							case 4:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Matk';
										all_SI[2].SI_value = 100 + 10*Lv_skill;
										all_SI[3].SI_value = 25*Lv_skill;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[17].SI_value = '快';
										all_SI[18].SI_value = Math.floor(3 - Lv_skill/3);
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = 3;
										all_SI[25].SI_value = 7*Lv_skill;
										all_SI[26].SI_value = '_@翻覆';	
										
										all_SI[27].SI_value = '<br />施放完畢後，將獲得魔能調節的狀態。強化下一招技能。';
										all_SI[28].SI_value = '<br />在魔能調節的狀態下再次施展此技能，傷害及_@翻覆機率將轉為弱化效果。';
										break;
									case '魔能調節':
										all_SI[0].SI_value = '使施放的技能MP消耗減少一半。<br />減半以格數為單位，且無條件進位。如：4格變2格、3格變2格、2格變1格。';
										all_SI[16].SI_value = '效果狀態';
										all_SI[27].SI_value = '，持續時間為無限，施放任意技能後此狀態結束。<br />就算該技能消耗MP為0，依然會使此狀態結束。';
										break;
									case '弱化效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Matk';
										all_SI[2].SI_value = 100 + 10*Lv_skill;
										all_SI[3].SI_value = 10*Lv_skill;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[17].SI_value = '快';
										all_SI[18].SI_value = Math.floor(3 - Lv_skill/3);
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = 3;
										all_SI[25].SI_value = '？';
										all_SI[26].SI_value = '_@翻覆';	
										
										all_SI[27].SI_value = '<br />施放完畢後，將獲得魔能調節的狀態。強化下一招技能。';
										all_SI[28].SI_value = '<br />若在魔能調節的狀態下施放此技能，此技能的傷害及_@翻覆機率將會弱化。';
										break;
								}
								break;
							case 6:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '每下傷害：(分開判定)';
										all_SI[1].SI_value = '有效Matk';
										all_SI[2].SI_value = 25 + 1*Lv_skill;
										all_SI[3].SI_value = 80 + 4*Lv_skill;
										all_SI[16].SI_value = '設置範圍傷害';
										all_SI[17].SI_value = '快';
										all_SI[18].SI_value = 1;
										all_SI[20].SI_value = 5 + Math.floor((Lv_skill+1)/2);
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = 2;
										all_SI[24].SI_value = 5 + Math.floor((Lv_skill+1)/2);
										all_SI[25].SI_value = 100;
										all_SI[26].SI_value = '被_@逼退';	
										
										all_SI[27].SI_value = '<br />每下傷害均會造成_@逼退效果。';
										break;
								}
								break;
							case 7:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Matk';
										all_SI[2].SI_value = 180 + 20*Lv_skill;
										all_SI[3].SI_value = 250 + 45*Lv_skill;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[17].SI_value = '快';
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
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '每下傷害：(分開判定)';
										all_SI[1].SI_value = '有效Matk';
										all_SI[2].SI_value = 50 + 3*Lv_skill;
										all_SI[3].SI_value = 180 + 2*Lv_skill;
										all_SI[16].SI_value = '設置範圍傷害';
										all_SI[17].SI_value = '快';
										all_SI[18].SI_value = 1;
										all_SI[20].SI_value = 1 + Math.floor(Lv_skill/2);
										all_SI[22].SI_value = '目標位置';
										all_SI[23].SI_value = 3;
										all_SI[24].SI_value = 1 + Math.floor(Lv_skill/2);
										
										all_SI[27].SI_value = '每次造成傷害時，會使範圍內的敵人被拉至技能中心。<br />BOSS等強大目標免疫此效果。';
										break;
								}
								break;
							case 10:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'Matk+';
										all_SI[5].SI_value = 1 + Math.floor((Lv_skill+2)/5);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '武器Atk+';
										all_SI[6].SI_value = 3*Lv_skill;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 11:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '蓄力完畢後，恢復';
										all_SI[5].SI_value = 200 + 10*Lv_skill;
										all_SI[5].SI_unit = 'MP。';
										all_SI[16].SI_value = '主動效果';
										all_SI[19].SI_value = input_SI_value_bySelection(WeapType_Cur,['法杖','魔導具'],[Math.floor(10 - Lv_skill/3)/2,(Math.floor(10 - Lv_skill/3)*2/3).toFixed(1),Math.floor(10 - Lv_skill/3)]);
										break;
								}
								break;
							case 12:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '使施放「法術/飛箭」後，能獲得快速詠唱狀態。強化下一招技能。';
										all_SI[16].SI_value = '被動效果';
										break;
									case '快速詠唱':
										all_SI[0].SI_value = '施放任意技能時，將使該技能詠唱時間減少。';
										all_SI[5].SI_value = 5*Lv_skill;
										all_SI[5].SI_value = '%。';
										all_SI[16].SI_value = '效果狀態';
										all_SI[27].SI_value = '持續時間為無限，施放任意技能後此狀態結束。';
										break;
								}
								break;
							case 13:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '進行普通攻擊時，若因為距離不足而無法進行攻擊，普通攻擊將替換為魔法彈。';
										all_SI[16].SI_value = '被動效果';
										break;
									case '魔法彈':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[3].SI_value = 5*Lv_skill;
										all_SI[16].SI_value = '普通攻擊';
										all_SI[17].SI_value = '同普通攻擊';
										all_SI[20].SI_value = 1;
										
										all_SI[27].SI_value = '魔法彈等同於普通攻擊，會觸發所有普通攻擊會觸發的效果。包括攻擊MP恢復、慣性、乘勝追擊等。';
										break;
								}
								break;
							}
							break;
						case 3:
						switch (T_no_S)
						{
							case 1:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 5*Lv_skill;
										all_SI[3].SI_value = 50 + 2*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 45 + 5*Lv_skill;
										all_SI[26].SI_value = '_@膽怯';	
										break;
								}
								break;
							case 2:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 10*Lv_skill;
										all_SI[3].SI_value = 100 + 5*Lv_skill;
										all_SI[4].SI_value = '';
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '慢';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 20 + 5*Lv_skill;
										all_SI[26].SI_value = '_@昏厥';	
										break;
								}
								break;
							case 3:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 50 + 10*Lv_skill;
										all_SI[3].SI_value = 100 + 5*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '稍慢';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 10 + Lv_skill;
										all_SI[26].SI_value = '_@降防';

										all_SI[27].SI_value = '<br />若觸發了_@降防，將恢復400MP。';
										all_SI[28].SI_name = '<br />此技能之物理貫穿+';
										all_SI[28].SI_value = 5*Lv_skill;
										all_SI[28].SI_unit = '%。';										
										break;
								}
								break;
							case 4:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 100 + 10*Lv_skill;
										all_SI[3].SI_value = 100 + 15*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '慢';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 40 + 4*Lv_skill;
										all_SI[26].SI_value = '_@乏力';

										all_SI[27].SI_value = '<br />發動技能時若目標處於_@降防狀態，將在造成傷害時附帶精確追擊。';									
										break;
									case '精確追擊':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 100 + 10*Lv_skill;
										all_SI[3].SI_value = 100 + 15*Lv_skill;
										all_SI[16].SI_value = '單體追加傷害';
										all_SI[20].SI_value = 1;

										all_SI[27].SI_value = '此傷害必定暴擊。';									
										break;
								}
								break;
							case 6:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 5*Lv_skill;
										all_SI[3].SI_value = 75 + 2.5*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 30 + 10*Math.floor((Lv_skill+2)/3);
										all_SI[26].SI_value = '_@翻覆';	
										break;
								}
								break;
							case 7:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 5*Lv_skill;
										all_SI[3].SI_value = 100 + 2.5*Lv_skill;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[17].SI_value = '稍慢';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = 1;
										all_SI[25].SI_value = 10 + 4*Lv_skill;
										all_SI[26].SI_value = '_@停止';	
										all_SI[27].SI_name = '此技能每命中一名敵人，就恢復(自身HP上限×5%)的生命值。單次技能最多恢復';
										all_SI[27].SI_value = 500;
										all_SI[27].SI_unit = '生命。';
										break;
								}
								break;
							case 8:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '每下傷害：(分開判定)';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 25 + 2*Lv_skill;
										all_SI[3].SI_value = 100 + 10*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '稍快';
										all_SI[20].SI_value = 3;

										all_SI[27].SI_name = '此技能之暴擊率+';
										all_SI[27].SI_value = 2.5*Lv_skill;
										all_SI[27].SI_unit = '。';										
										break;
								}
								break;
							case 10:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'Atk+';
										all_SI[5].SI_value = 1 + Math.floor((Lv_skill+2)/5);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '武器Atk+';
										all_SI[6].SI_value = 3*Lv_skill;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 11:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '攻擊速度+';
										all_SI[5].SI_value = input_SI_value_bySelection(WeapType_Cur, ['拳套'],[Lv_skill, 0]);
										all_SI[5].SI_unit = '%。';		
										all_SI[6].SI_name = '攻擊速度+';
										all_SI[6].SI_value = input_SI_value_bySelection(WeapType_Cur, ['拳套'],[10*Lv_skill, 0]);
										all_SI[6].SI_unit = '。';
										
										all_SI[7].SI_name = '「格鬥技能」中的所有攻擊技能，總傷害提升';
										all_SI[7].SI_value = Lv_skill;
										all_SI[7].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成/增幅';
										break;
								}
								break;
							case 13:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '攻擊MP恢復+';
										all_SI[5].SI_value = 0.5*Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '進行普通攻擊時，將有';
										all_SI[6].SI_value = input_SI_value_bySelection(WeapType_Cur,['拳套'],[5*Lv_skill, 0]);
										all_SI[6].SI_unit = '%機率附帶追擊';
										all_SI[16].SI_value = '被動效果/加成';
										break;
									case '追擊':
										all_SI[0].SI_value = '追擊僅在主手裝備拳套時可觸發 。<br />傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[3].SI_value = 25 + 2.5*Lv_skill;
										all_SI[16].SI_value = '單體追加傷害';
										all_SI[20].SI_value = 1;
										
										all_SI[27].SI_value = '追擊之傷害不受體術鍛鍊、近/遠距離威力、拔刀傷害影響。<br />追擊不會發生暴擊。';
										break;
								}
								break;
							case 14:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '使「乘勝追擊」追擊的傷害提升(有效Atk×';
										all_SI[5].SI_value = 5*Lv_skill;
										all_SI[5].SI_unit = '%)。';
										all_SI[6].SI_name = '並使追擊有';
										all_SI[6].SI_value = Lv_skill;
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
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '命中';
										all_SI[5].SI_value = -55 + 3*Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '暴擊率';
										all_SI[6].SI_value = -80 + 8*Lv_skill;
										all_SI[6].SI_unit = '%。';
										all_SI[27].SI_value = '習得此技能後，方可以同時裝備兩把單手劍。';
										break;
								}
								break;
							case 2:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 100 + 10*Lv_skill;
										all_SI[3].SI_value = 150 + 10*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '快';
										all_SI[20].SI_value = 1;

										all_SI[27].SI_name = '此技能之暴擊傷害+';
										all_SI[27].SI_value = 50 + 5*Lv_skill;
										all_SI[27].SI_unit = '。';										
										break;
								}
								break;
							case 3:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '施放迴旋斬將敵人_@逼退，並在原地殘留持續數秒的風壓，對經過的敵人造成持續的傷害與_@盲目效果。';
										all_SI[17].SI_value = '稍快';
										break;
									case '迴旋斬':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 50 + 5*Lv_skill;
										all_SI[3].SI_value = 125 + 2.5*Lv_skill;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = 4;
										all_SI[25].SI_value = 100;
										all_SI[26].SI_value = '_@逼退';									
										break;
									case '風壓':
										all_SI[0].SI_value = '每次傷害：(每5個傷害視為一次、分開判定)';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 50 + 5*Lv_skill;
										all_SI[3].SI_value = 30 + 2*Lv_skill;
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
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '總傷害：(共用判定)';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 200 + 20*Lv_skill;
										all_SI[3].SI_value = 500 + 20*Lv_skill;
										all_SI[16].SI_value = '單體持續傷害';
										all_SI[17].SI_value = '約3~4秒';
										all_SI[20].SI_value = 12;
										all_SI[25].SI_value = 10*Lv_skill;
										all_SI[26].SI_value = '_@冰凍';

										all_SI[27].SI_value = '<br />造成第一下傷害後，獲得幻影迷蹤效果。';
										all_SI[28].SI_value = '<br />若對非BOSS目標施放，在施放完畢後有機率發動即死。';										
										break;
									case '幻影迷蹤':
										all_SI[5].SI_value = '使自身能夠閃避所有傷害及效果。';
										all_SI[16].SI_value = '效果狀態';
										all_SI[27].SI_value = '此技能造成最後一下傷害時，此狀態結束。';
										break;
									case '即死':
										all_SI[5].SI_value = '對目標造成999999999點傷害。';
										all_SI[16].SI_value = '單體追加傷害';
										all_SI[20].SI_value = 1;
										break;
								}
								break;
							case 5:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '總傷害：(共用判定)';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 50 + 5*Lv_skill;
										all_SI[3].SI_value = 100 + Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '慢';
										all_SI[20].SI_value = 2;
										all_SI[25].SI_value = 5*Lv_skill;
										all_SI[26].SI_value = '_@翻覆';

										all_SI[27].SI_value = '<br />施放期間處於防守架勢，可以格檔一次物理傷害。格檔成功後獲得反擊之勢。';										
										break;
									case '防守架勢':
										all_SI[5].SI_name = '能夠格檔一次物理傷害，使該傷害減少';
										all_SI[5].SI_value = 5 + 7*Lv_skill;
										all_SI[5].SI_unit = '%。<br />格檔成功後將獲得反擊之勢。';
										all_SI[16].SI_value = '效果狀態';
										all_SI[27].SI_value = '此技能施放完畢後，此狀態結束。而如果格檔成功，此狀態會立即結束。';
										break;
									case '反擊之勢':
										all_SI[5].SI_name = 'Atk+';
										all_SI[5].SI_value = Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '攻擊速度+';
										all_SI[6].SI_value = 10*Lv_skill;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '自身狀態加成';
										all_SI[24].SI_value = 30;
										break;
								}
								break;
							case 6:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '每次傷害：(分開判定)';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 100 + 20*Lv_skill;
										all_SI[3].SI_value = 100 + 10*Lv_skill;
										all_SI[16].SI_value = '範圍直線傷害';
										all_SI[17].SI_value = '稍慢';
										all_SI[20].SI_value = 2;
										all_SI[22].SI_value = '自身位置-目標後方10m處';
										all_SI[23].SI_value = 3;

										all_SI[27].SI_value = '此技能的傷害受拔刀傷害影響。';	
										break;
								}
								break;
							case 7:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '施放後將閃身迅速移動到目標身後，同時獲得專注效果，強化下一次技能。';
										all_SI[16].SI_value = '效果';
										
										all_SI[27].SI_value = '若此技能施放完畢後沒有立即施放下一個技能，將會重置普攻並發動一次拔刀斬。';	
										break;
									case '專注':
										all_SI[5].SI_name = '攻擊MP恢復+';
										all_SI[5].SI_value = Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '施放任意技能時，該技能的暴擊率+';
										all_SI[6].SI_value = 20*Lv_skill;
										all_SI[6].SI_unit = '%。並使狀態結束。';
										all_SI[16].SI_value = '自身加成/效果狀態';
										all_SI[27].SI_value = '持續時間為無限。施放任意技能後此狀態結束';
										break;
								}
								break;
							case 8:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '閃躲率+';
										all_SI[5].SI_value = input_SI_value_bySelection(WeapType_Cur, ['雙劍'], [5+2*Lv_skill, 5+Lv_skill]);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = 'Def';
										all_SI[6].SI_value = -100 + Lv_skill;
										all_SI[6].SI_unit = '。';
										all_SI[7].SI_name = 'Mdef';
										all_SI[7].SI_value = -100 + Lv_skill;
										all_SI[7].SI_unit = '。';
										all_SI[16].SI_value = '自身加成';
										all_SI[24].SI_value = 10;
										break;
								}
								break;
							case 9:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '拔刀傷害+';
										all_SI[5].SI_value = Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '武器Atk+';
										all_SI[6].SI_value = 0;
										all_SI[6].SI_unit = '%。';
										all_SI[7].SI_value = '使閃躲反擊被替換為二重閃光。';
										all_SI[16].SI_value = '自身加成/效果狀態';
										all_SI[24].SI_value = 20;

										all_SI[27].SI_value = '閃躲反擊，是角色裝備在特定裝備時，閃躲時會同時對目標造成傷害。';	
										break;
									case '二重閃光':
										all_SI[0].SI_value = '每次傷害：(分開判定)';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 100 + 10*Lv_skill;
										all_SI[3].SI_value = 50 + 15*Lv_skill;
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
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '攻擊速度+';
										all_SI[5].SI_value = 50*Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '命中+';
										all_SI[6].SI_value = 5 + 3*Lv_skill;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
									break;
								}
								break;
							case 11:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'Agi+';
										all_SI[5].SI_value = Lv_skill + Math.max(Lv_skill-5, 0);
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '拔刀傷害+';
										all_SI[6].SI_value = 5 + Lv_skill;
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
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 50 + 5*Lv_skill;
										all_SI[3].SI_value = 100 + 5*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '極快';
										all_SI[20].SI_value = 1;	
										break;
								}
								break;
							case 2:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '對目標進行挑擊後，順勢將槍猛擲出去，貫穿目標後方的所有敵人。';		
										all_SI[17].SI_value = '稍快';
										break;
									case '挑擊':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 100 + 10*Lv_skill;
										all_SI[3].SI_value = 40 + Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[20].SI_value = 1;		
										break;
									case '猛擲':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 0;
										all_SI[3].SI_value = 150 + 10*Lv_skill;
										all_SI[16].SI_value = '範圍直線傷害';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置-自身前方' + (8 + Math.floor(Lv_skill/3)) + 'm處';
										all_SI[23].SI_value = 2;
										break;
								}
								break;
							case 3:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '先在原地橫掃對範圍內敵人造成小幅傷害，緊接著迴旋造成更大範圍的傷害，並使非BOSS單位被_@翻覆。';		
										all_SI[17].SI_value = '稍慢';
										break;
									case '橫掃':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 100;
										all_SI[3].SI_value = 70 + 3*Lv_skill;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = 2;
										break;
									case '迴旋':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 50 + 15*Lv_skill;
										all_SI[3].SI_value = 200 + 20*Lv_skill;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = 3 + Math.floor(Lv_skill/10);
										all_SI[25].SI_value = 10*Lv_skill;
										all_SI[26].SI_value = '_@翻覆';
										all_SI[27].SI_value = '<br />此技能只可翻覆非BOSS單位。';
										break;
								}
								break;
							case 4:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '在原地進行潛龍一擊，造成大範圍的傷害，並在地面留下潛龍。數秒後潛龍躍出，_@逼退更大範圍內的敵人，並造成巨大傷害。';		
										all_SI[17].SI_value = '稍慢';
										break;
									case '潛龍一擊':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 200 + 20*Lv_skill;
										all_SI[3].SI_value = 200 + 20*Lv_skill;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = 1 + Math.floor((Lv_skill+1)/2);
										
										all_SI[27].SI_value = '施放完畢後會在原處留下潛龍。3秒後潛龍消失，並造成憾地震盪。';
										break;
									case '憾地震盪':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 0;
										all_SI[3].SI_value = 200 + 40*Lv_skill;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '潛龍位置';
										all_SI[23].SI_value = 2 + Math.floor((Lv_skill+1)/2);
										all_SI[25].SI_value = 10;
										all_SI[26].SI_value = '受到_@閃光';
										break;
									}
								break;
							case 6:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 80 + 3*Lv_skill;
										all_SI[3].SI_value = 100 + 10*Math.floor((Lv_skill+1)/2);
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '稍慢';
										all_SI[19].SI_value = 1.5 - 0.15*Lv_skill;
										all_SI[20].SI_value = 1;

										all_SI[27].SI_name = '此技能之暴擊率+';
										all_SI[27].SI_value = 50;
										all_SI[27].SI_unit = '。';	
										all_SI[28].SI_name = '此技能之物理貫穿+';
										all_SI[28].SI_value = 10 + 1.5*Lv_skill;
										all_SI[28].SI_unit = '%。';	
										break;
								}
								break;
							case 7:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：(共用判定)';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 100;
										all_SI[3].SI_value = 190 + Lv_skill;
										all_SI[4].SI_value = 'Str×20%';
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '快';
										all_SI[20].SI_value = 3;

										all_SI[27].SI_name = '此技能計算暴擊率時，基礎暴擊率';
										all_SI[27].SI_value = -50;
										all_SI[27].SI_unit = '%。';	
										all_SI[28].SI_value = '施放時若目標楚於任意異常狀態，此技能轉變為強化效果。(僅提升傷害)';
										break;
									case '強化效果':
										all_SI[0].SI_value = '傷害：(共用判定)';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 100;
										all_SI[3].SI_value = input_SI_value_bySelection(WeapType_Cur, ['旋風槍'], [190 + 21*Lv_skill, 190 + 11*Lv_skill]);
										all_SI[4].SI_value = 'Str×20%';
										all_SI[16].SI_value = '單體強化傷害';
										all_SI[17].SI_value = '快';
										all_SI[20].SI_value = 3;

										all_SI[27].SI_name = '此技能計算暴擊率時，基礎暴擊率';
										all_SI[27].SI_value = -50;
										all_SI[27].SI_unit = '%。';	
										all_SI[28].SI_value = '強化效果僅在目標受到任意異常狀態影響時發生。';
										break;
								}
								break;
							case 9:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 0;
										all_SI[3].SI_value = input_SI_value_bySelection(WeapType_Cur, ['旋風槍'], [(4 + (Lv_skill -1)*4)*Lv_skill/2 + 50, (4 + (Lv_skill -1)*4)*Lv_skill/4 + 25]);
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '稍慢';
										all_SI[18].SI_value = 2;
										all_SI[20].SI_value = 1;

										all_SI[27].SI_value = '施放完畢後，獲得懲戒效果。';
										break;
									case '懲戒':
										all_SI[5].SI_name = '施放技能時，使該技能的暴擊率+';
										all_SI[5].SI_value = 10*Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[16].SI_value = '效果狀態';
										all_SI[27].SI_value = '持續時間為無限，施放任意攻擊技能後此狀態結束。<br />就算施放的是魔法傷害的技能，也會使此狀態結束。';	
										break;
								}
								break;
							case 10:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'Atk+';
										all_SI[5].SI_value = 1 + Math.floor((Lv_skill+2)/5);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '武器Atk+';
										all_SI[6].SI_value = 3*Lv_skill;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 11:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '暴擊率+';
										all_SI[5].SI_value = Math.floor((1 + Lv_skill)/2);
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '暴擊率+';
										all_SI[6].SI_value = Math.floor((1 + Lv_skill)/2);
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 12:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '攻擊速度+';
										all_SI[5].SI_value = 2.5*Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '攻擊速度+';
										all_SI[6].SI_value = 50*Lv_skill;
										all_SI[6].SI_unit = '。';
										all_SI[16].SI_value = '自身加成';
										
										all_SI[27].SI_name = '使用時HP減少(HP上限×';
										all_SI[27].SI_value = input_SI_value_bySelection(WeapType_Cur,['旋風槍'],[10, 10 + Math.floor(Lv_skill/2)]);
										all_SI[27].SI_unit = ')%。但HP不會低於1。';
										break;
								}
								break;
							case 13:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '發動成功後，恢復120MP。';
										all_SI[6].SI_value = '當前HP每減少15%，將轉為逆境效果。';
										all_SI[7].SI_value = '當前HP低於55%時，將轉為絕境效果。';
										all_SI[16].SI_value = '自身恢復';
										break;
									case '逆境':
										all_SI[5].SI_name = '當前HP在84%~70%時，MP恢復量為';
										all_SI[5].SI_value = 120 + 2*Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '當前HP在69%~55%時，MP恢復量為';
										all_SI[6].SI_value = 120 + 6*Lv_skill;
										all_SI[6].SI_unit = '。';
										all_SI[16].SI_value = '自身恢復';
										break;
									case '絕境':
										all_SI[5].SI_name = '當前HP在55%以下時，MP恢復量為';
										all_SI[5].SI_value = 140 + 16*Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[16].SI_value = '自身恢復';
										break;
								}
								break;
						}
						break;
					case 6:
						switch (T_no_S)
						{
							case 1:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '斬切敵人後將刀收合，造成兩段傷害。兩段傷害分開判定，收合具有額外的暴擊率。';		
										all_SI[17].SI_value = '稍慢';
										break;
									case '斬切':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 0;
										all_SI[3].SI_value = 50;
										all_SI[16].SI_value = '單體傷害';
										all_SI[20].SI_value = 1;	
										break;
									case '收合':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 50 + 5*Lv_skill;
										all_SI[3].SI_value = 100 + 5*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_name = '收合之暴擊率+';
										all_SI[27].SI_value = '？';
										all_SI[27].SI_unit = '。';
										break;
								}
								break;
							case 2:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '總傷害：(三次分開判定)';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 30 + Lv_skill;
										all_SI[3].SI_value = 150 + 15*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '稍快';
										all_SI[20].SI_value = 3;
										all_SI[27].SI_value = '此技能會因為與對方的距離而有波動弱化。';
										all_SI[28].SI_value = '造成傷害時，第一下傷害最低，之後的兩下會進行段數波動。';
										break;
									case '波動弱化':
										all_SI[5].SI_value = '距離2m以內時，造成原傷害。';
										all_SI[6].SI_name = '距離2m以上時，每增加1m，此技能之物理貫穿減少';
										all_SI[6].SI_value = 11 - Lv_skill;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '效果';
										all_SI[27].SI_name = '也就是說，此技能最多會減少';
										all_SI[27].SI_value = 10*(11 - Lv_skill);
										all_SI[27].SI_unit = '%的物理貫穿(距離12m時)。';
										break;
									case '段數波動':
										all_SI[5].SI_name = '第一下傷害為(有效Atk+';
										all_SI[5].SI_value = 30 + Lv_skill;
										all_SI[5].SI_unit = ')×50%。';
										all_SI[6].SI_name = '第二下傷害為第一下的';
										all_SI[6].SI_value = 100 + 10*Lv_skill;
										all_SI[6].SI_unit = '%。';
										all_SI[7].SI_name = '第三下傷害為第一下的';
										all_SI[7].SI_value = 100 + 20*Lv_skill;
										all_SI[7].SI_unit = '%。';
										all_SI[16].SI_value = '補充說明';
										all_SI[27].SI_value = '段數波動。意思是三段中每段的傷害會越來越高。';
										all_SI[28].SI_value = '<br />總傷害的部分已經把三下的傷害加起來了，這邊只是補充說明。';
										break;
								}
								break;
							case 3:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '總傷害：(三次分開判定)';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 0;
										all_SI[3].SI_value = 150 + 20*Lv_skill;
										all_SI[4].SI_value = '(Agi×20%)';
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '稍慢';
										all_SI[20].SI_value = 3;
										all_SI[27].SI_value = '若技能未被迴避，將獲得鋒芒隱現效果，強化下一招技能。';
										break;
									case '鋒芒隱現':
										all_SI[5].SI_name = '施放任意技能時，該技能的傷害常數提升(角色等級/';
										all_SI[5].SI_value = (11- Lv_skill);
										all_SI[5].SI_unit = ')。並使狀態消失。';
										all_SI[16].SI_value = '狀態效果';
										all_SI[27].SI_value = '持續時間為無限。施放任意技能後此狀態結束。';
										break;
								}
								break;
							case 4:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '總傷害：(共用判定)';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 25;
										all_SI[3].SI_value = (50 + Lv_skill)*(1 + 2*Lv_skill);
										all_SI[16].SI_value = '範圍傷害';
										all_SI[17].SI_value = '慢';
										all_SI[20].SI_value = '？';
										all_SI[22].SI_value = '自身';
										all_SI[23].SI_value = (2 + Math.floor((Lv_skill+1)/4)) + '、' + (4 + 2*Math.floor((Lv_skill+1)/4));
										all_SI[27].SI_value = '此技能必定不MISS(被迴避)。';
										all_SI[28].SI_value = '<br />此技能之傷害分成兩段。二段的傷害範圍為一段的兩倍。';
										break;
								}
								break;
							case 7:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 100 + 10*Lv_skill;
										all_SI[3].SI_value = 100 + 5*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '稍慢';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 50 + 5*Lv_skill;
										all_SI[26].SI_value = '_@麻痺';
										all_SI[27].SI_name = '若敵人已被_@麻痺，則改為有';
										all_SI[27].SI_value = 5*Lv_skill;
										all_SI[27].SI_unit = '機率使敵人_@昏厥。';
										break;
								}
								break;
							case 8:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 100 + 10*Lv_skill;
										all_SI[3].SI_value = 200 + 30*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '極慢';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_value = '施放期間劃出半月弧，期間內可減免一次傷害。';
										break;
									case '半月弧':
										all_SI[5].SI_name = '受到任意傷害後，會將敵人的攻擊靜止。此技能將立即中斷，並恢復';
										all_SI[5].SI_value = 100 + 10*Lv_skill;
										all_SI[5].SI_unit = 'MP。';
										all_SI[16].SI_value = '狀態效果';
										all_SI[27].SI_value = '此技能將立即中斷，意即此技能將不會造成傷害。';
										break;
									case '靜止':
										all_SI[5].SI_value = '可減少一次受到的傷害。';
										all_SI[6].SI_value = '物理傷害約減免90%。';
										all_SI[7].SI_value = '魔法傷害約減免45%。';
										all_SI[16].SI_value = '效果';
										break;
								}
								break;
							case 9:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 10*Lv_skill;
										all_SI[3].SI_value = 100 + 20*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '慢';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_value = '施放期間將處於絕，期間內可抵擋一次傷害。抵擋成功後將會追加斷。';
										break;
									case '絕':
										all_SI[5].SI_value = '受到任意傷害後，該傷害將變為0。並使技能施放完畢後會追加斷。';
										all_SI[16].SI_value = '狀態效果';
										all_SI[27].SI_value = '只有成功抵擋任意傷害後，才會追加斷。';
										break;
									case '斷':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 30*Lv_skill;
										all_SI[3].SI_value = 500 + 100*Lv_skill;
										all_SI[16].SI_value = '單體追加傷害';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_value = '此追加傷害會在技能施放完畢後多一個斬擊的動作，才造成傷害，而非直接多一個傷害。';
										break;
								}
								break;
							case 10:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '修練心法，使身體和心靈都受到強化。';
										all_SI[6].SI_value = '';
										all_SI[16].SI_value = '被動加成';
										break;
									case '心法':
										all_SI[5].SI_name = 'HP上限+';
										all_SI[5].SI_value = Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = 'HP上限+';
										all_SI[6].SI_value = 10*Lv_skill;
										all_SI[6].SI_unit = '。';
										all_SI[7].SI_name = 'MP上限+';
										all_SI[7].SI_value = 10*Lv_skill;
										all_SI[7].SI_unit = '。';
										all_SI[16].SI_value = '被動加成';
										break;
									case '熟練度':
										all_SI[5].SI_name = 'Atk+';
										all_SI[5].SI_value = Math.floor((Lv_skill + 7)/5);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '武器Atk+';
										all_SI[6].SI_value = 3*Lv_skill;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										all_SI[27].SI_value = '只有主手裝備拔刀劍時才享有此效果。';
										break;
								}
								break;
							case 11:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '學習後，以下兩種情況將會發動瞬疾移行。';
										all_SI[6].SI_value = '進行普通攻擊(普攻)時，目標在普攻的距離外。';
										all_SI[7].SI_value = '發動拔刀劍的攻擊技能時，目標在技能的施放距離外。';
										all_SI[16].SI_value = '被動效果';
										break;
									case '瞬疾移行':
										all_SI[5].SI_name = '以極快的速度貼近目標。貼近期間若進行移動，可手動停下。<br /> 若經由普通攻擊(普攻)觸發，且沒有手動停止，則該次普攻的攻擊MP恢復+';
										all_SI[5].SI_value = 2.5*Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_value = '';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '更多細節可查看_@縮地法補述。';
										break;
								}
								break;
							case 12:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '只有副手無裝備時，才享有此技能的效果。<br />命中+';
										all_SI[5].SI_value = Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '穩定度+';
										all_SI[6].SI_value = input_SI_value_bySelection(WeapType_Cur, ['拔刀劍'], [Lv_skill, Math.floor(Lv_skill/2)]);
										all_SI[6].SI_unit = '%。';
										all_SI[7].SI_name = '暴擊率+';
										all_SI[7].SI_value = input_SI_value_bySelection(WeapType_Cur, ['拔刀劍'], [Lv_skill, Math.floor(Lv_skill/2)]);
										all_SI[7].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										all_SI[27].SI_value = '';
										break;
									case '心眼':
										all_SI[5].SI_name = '暴擊發生時，傷害公式中的Atk變為原本的';
										all_SI[5].SI_value = 100 + 5*Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '只有主手裝備拔刀劍時才享有此效果。';
										break;
								}
								break;
							case 13:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '暴擊率+';
										all_SI[5].SI_value = 20 + Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '暴擊傷害-';
										all_SI[6].SI_value = input_SI_value_bySelection(WeapType_Cur, ['拔刀劍'], [0, 15 - Lv_skill]);
										all_SI[6].SI_unit = '%。';
										all_SI[7].SI_value = '持續時間內犧牲守備。防禦力大幅降低。';
										all_SI[16].SI_value = '狀態加成';
										all_SI[17].SI_value = '快';
										all_SI[24].SI_value = 30;
										all_SI[27].SI_value = '施放任意技能後，此狀態會立即消失。(施放的該招技能會受到此技能的加成)';
										break;
									case '犧牲守備':
										all_SI[16].SI_value = '狀態加成';
										all_SI[5].SI_name = 'Def-';
										all_SI[5].SI_value = 1100 - 100*Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = 'Mdef-';
										all_SI[6].SI_value = 1100 - 100*Lv_skill;
										all_SI[6].SI_unit = '。';
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
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '阻擋率+';
										all_SI[5].SI_value = Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 2:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '阻擋率+';
										all_SI[5].SI_value = Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 5:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '閃躲率+';
										all_SI[5].SI_value = Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 6:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '閃躲率+';
										all_SI[5].SI_value = Lv_skill;
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
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '攻擊速度+';
										all_SI[5].SI_value = 5*Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 2:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 50 + 5*Lv_skill;
										all_SI[3].SI_value = 1.5*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '稍快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 90 + Lv_skill;
										all_SI[26].SI_value = '_@昏厥';
										break;
								}
								break;
							case 3:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 100 + 10*Lv_skill;
										all_SI[3].SI_value = 50 + 10*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '稍快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 10*Lv_skill;
										all_SI[26].SI_value = '_@昏厥';
										break;
								}
								break;
							case 4:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '獲得阻擋反擊的能力。';
										all_SI[6].SI_value = '未習得此技能時，阻擋時只會暫時中斷動作並重置普通攻擊。';
										break;
									case '阻擋反擊':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = input_SI_value_bySelection(AuType_Cur, ['盾牌'], ['有效Atk+盾精煉值×60', '有效Atk']);
										all_SI[2].SI_value = 10*Lv_skill;
										all_SI[3].SI_value = 10*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '無';
										all_SI[20].SI_value = 1;
										
										all_SI[27].SI_value = '阻擋反擊僅在發動阻擋時發生。';
										break;
								}
								break;
							case 5:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'Def+';
										all_SI[5].SI_value = 2*Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = 'Def+';
										all_SI[6].SI_value = 1*Lv_skill;
										all_SI[6].SI_unit = '%。';
										all_SI[7].SI_name = 'HP上限+';
										all_SI[7].SI_value = 50*Lv_skill;
										all_SI[7].SI_unit = '。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 6:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'MDef+';
										all_SI[5].SI_value = 2*Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = 'Mdef+';
										all_SI[6].SI_value = 1*Lv_skill;
										all_SI[6].SI_unit = '%。';
										all_SI[7].SI_name = 'HP上限+';
										all_SI[7].SI_value = 50*Lv_skill;
										all_SI[7].SI_unit = '。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 7:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '物理抗性+';
										all_SI[5].SI_value = '？';
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '魔法抗性-';
										all_SI[6].SI_value = '？';
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '主動加成';
										all_SI[24].SI_value = 60*Lv_skill;
										break;
								}
								break;
							case 8:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '魔法抗性+';
										all_SI[5].SI_value = '？';
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = '物理抗性-';
										all_SI[6].SI_value = '？';
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '主動加成';
										all_SI[24].SI_value = 60*Lv_skill;
										break;
								}
								break;
							case 9:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '(此技能尚無資料)';
										all_SI[16].SI_value = '隊伍效果';
										all_SI[24].SI_value = '？';
										break;
								}
								break;
						}
						break;
					case 2:
						switch (T_no_S)
						{
							case 1:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[5].SI_value = '有效Atk×' + (10 + 4*Lv_skill) + '% +小刀Atk';
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '快';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_value = '技能等級達到10時，此技能不消耗魔力。';
										break;
								}
								break;
							case 2:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '總傷害：(共用判定)';
										all_SI[1].SI_value = '有效Atk+小刀Atk×20%';
										all_SI[2].SI_value = 10 + Lv_skill;
										all_SI[3].SI_value = 75 + Math.floor(75*(Lv_skill-1)/9);
										all_SI[4].SI_value = '(Dex/' + (20-Lv_skill) +')';
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '稍快';
										all_SI[20].SI_value = 1 + Math.floor(Lv_skill/2);
										all_SI[25].SI_value = 90 + Lv_skill;
										all_SI[26].SI_value = '_@遲緩';
										break;
								}
								break;
							case 3:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '每下傷害：(共用判定)';
										all_SI[1].SI_value = '有效Atk+小刀Atk';
										all_SI[2].SI_value = 20 + 2*Lv_skill;
										all_SI[3].SI_value = 20 + 5*( Lv_skill - Math.floor((Lv_skill+6)/4));
										all_SI[4].SI_value = '(Str+Dex+Agi)×3%';
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '約3秒';
										all_SI[20].SI_value = Math.floor((Lv_skill+22)/4);
										break;
								}
								break;
							case 4:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '使用刀術技能或發動小刀的閃躲反擊時，有50%機率發動影襲。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '僅限於刀術技能或小刀的閃躲反擊才有機率發動，包括刀術技能中的所有主、被動技能。而前述以外的其他技能或攻擊皆不會發動。';
										break;
									case '影襲':
										all_SI[5].SI_value = '使該技能或該次閃躲反擊的每一次傷害都追加一次等量傷害。';
										all_SI[16].SI_value = '單體追加傷害';
										all_SI[27].SI_value = '例如：6下變12下、8下變16下等。傷害次數會變成兩倍，等同於傷害變成兩倍。';
										break;
								}
								break;
							case 5:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk+(Dex×50%+Agi×2)';
										all_SI[2].SI_value = 115 + 10*Lv_skill;
										all_SI[3].SI_value = 50 + 2.5*Lv_skill;
										all_SI[4].SI_value = '(Int/' + Lv_skill +')%';
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '稍快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 80 + 2*Lv_skill;
										all_SI[26].SI_value = '受到_@猛毒';
										break;
								}
								break;
							case 6:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '發動小刀的閃躲反擊時，有';
										all_SI[5].SI_value = 10*Lv_skill;
										all_SI[5].SI_unit = '%機率追加一次等量傷害。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '僅限於裝備小刀時的閃躲反擊才有機率觸發。<br />等同於閃躲反擊時會造成兩次傷害。';
										break;
								}
								break;
							case 7:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '使得副手裝備小刀時，普通攻擊有';
										all_SI[5].SI_value = 5*Lv_skill;
										all_SI[5].SI_unit = '%機率附加無影追襲。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '僅限於裝備小刀時的普通攻擊才有機率發動。';
										break;
									case '無影追襲':
										all_SI[0].SI_value = '傷害：';
										all_SI[5].SI_value = '有效Atk×10% +小刀Atk';
										all_SI[16].SI_value = '單體追加傷害';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_value = '無影追襲不會發生暴擊。';
										break;
								}
								break;
							case 8:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '使得「無影刃」的無影追襲發動機率提升';
										all_SI[5].SI_value = 5*Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_value = '使得「無影刃」的無影追襲傷害提升(有效Atk×10%)。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '此技能僅提升「無影刃」的無影追襲傷害與發動機率，無其他效果。';
										break;
								}
								break;
							case 9:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '使得「無影刃」的無影追襲物理貫穿+';
										all_SI[5].SI_value = 10 + 4*Lv_skill;
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
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 5*Lv_skill;
										all_SI[3].SI_value = 25 + 10*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '稍快';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 10*Lv_skill;
										all_SI[26].SI_value = '被_@逼退';
										all_SI[27].SI_name = '同時有';
										all_SI[27].SI_value = 10*Lv_skill;
										all_SI[27].SI_unit = '%機率使敵人_@遲緩。';
										all_SI[28].SI_value = '<br />使用此技能時，將會衝刺至敵人面前後才造成傷害。';
										break;
								}
								break;
							case 2:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '(此技能尚無資料)';
										break;
								}
								break;
							case 3:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '(目前只有Lv10的資料)<br />施放完畢後，將獲得絕對防禦狀態。絕對防禦期間角色無法作任何動作。';
										all_SI[16].SI_value = '效果';
										all_SI[17].SI_value = '快';
										break;
									case '絕對防禦':
										all_SI[5].SI_value = '持續時間內，可免疫一次傷害。使該傷害變為0。';
										all_SI[16].SI_value = '效果狀態';
										all_SI[24].SI_value = '不到1';
										all_SI[27].SI_value = '若成功抵擋傷害，將恢復(HP上限' + Lv_skill + '%)的HP。';
										break;
								}
								break;
							case 5:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '使用此技能時，使目標產生等同於';
										all_SI[5].SI_value = 100*Lv_skill;
										all_SI[5].SI_unit = 'MP的額外仇恨值。';
										all_SI[16].SI_value = '效果';
										all_SI[17].SI_value = '稍慢';
										all_SI[27].SI_name = '意即此技能總共會產生';
										all_SI[27].SI_value = (4-Math.max(Math.floor((Lv_skill-2)/4),0))*100 + 100*Lv_skill;
										all_SI[27].SI_unit = 'MP的仇恨值。';
										break;
								}
								break;
							case 6:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 50 + 5*Lv_skill;
										all_SI[3].SI_value = 150 + 10*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '稍快';
										all_SI[20].SI_value = 1;

										all_SI[27].SI_name = '此技能將使目標產生等同於';
										all_SI[27].SI_value = 20*Lv_skill;
										all_SI[27].SI_unit = 'MP的仇恨值。';
										all_SI[28].SI_name = '<br />意即此技能總共會產生';
										all_SI[28].SI_value = 200 + 20*Lv_skill;
										all_SI[28].SI_unit = 'MP的仇恨值。';
										break;
								}
								break;
							case 7:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：(目前只有Lv10的資料)';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 150;
										all_SI[3].SI_value = 500;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[17].SI_value = '稍快';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置';
										all_SI[23].SI_value = '？';

										all_SI[27].SI_name = '此技能將使目標產生等同於';
										all_SI[27].SI_value = '？';
										all_SI[27].SI_unit = 'MP的仇恨值。';
										all_SI[28].SI_name = '<br />意即此技能總共會產生';
										all_SI[28].SI_value = '300+？' ;
										all_SI[28].SI_unit = 'MP的仇恨值。';
										break;
								}
								break;
						}
						break
					case 4:
						switch (T_no_S)
						{
							case 1:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 10*Lv_skill;
										all_SI[3].SI_value = 10*(Lv_skill + Math.max(Lv_skill-5, 0));
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '稍慢';
										all_SI[20].SI_value = 1;
										all_SI[25].SI_value = 100;
										all_SI[26].SI_value = '被_@逼退';
										all_SI[27].SI_value = '_@逼退距離為' + (2 + Math.floor((Lv_skill+1)/2)) + 'm。(受技能等級影響)';
										break;
								}
								break;
							case 2:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 180 + 2*Lv_skill;
										all_SI[3].SI_value = 100 + 10*Lv_skill;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[17].SI_value = '快';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '自身位置-前方14m處';
										all_SI[23].SI_value = 3;

										all_SI[27].SI_value = '對_@睡眠狀態的敵人將造成2倍傷害。';
										break;
								}
								break;
							case 3:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '(此技能尚無資料)';
										break;
								}
								break;
							case 5:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '設置一個沉睡陷阱在地面上。若任意目標與_@陷阱的距離小於2m，_@陷阱將會自動觸發並消失。<br />(若任意目標與自身的距離小於3m，此技能將無法施放)';
										all_SI[16].SI_value = '陷阱';
										all_SI[17].SI_value = '慢';
										all_SI[21].SI_value = 1;

										all_SI[27].SI_value = '建議詳閱關於_@陷阱的說明。';
										break;
									case '觸發':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Matk';
										all_SI[2].SI_value = 50 + 5*Lv_skill;
										all_SI[3].SI_value = Lv_skill;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '陷阱位置';
										all_SI[23].SI_value = 2;
										all_SI[25].SI_value = 30 + 6*Lv_skill;
										all_SI[26].SI_value = '_@睡眠';
										all_SI[27].SI_name = '<br />_@陷阱觸發後，將會恢復角色';
										all_SI[27].SI_value = 10*Lv_skill;
										all_SI[27].SI_unit = 'MP。';
										break;
								}
								break;
							case 6:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '設置一個絆腳陷阱在地面上。若任意目標與_@陷阱的距離小於2m，_@陷阱將會自動觸發並消失。<br />(若任意目標與自身的距離小於3m，此技能將無法施放)';
										all_SI[16].SI_value = '陷阱';
										all_SI[17].SI_value = '慢';
										all_SI[21].SI_value = 1;

										all_SI[27].SI_value = '建議詳閱關於_@陷阱的說明。';
										break;
									case '觸發':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Matk';
										all_SI[2].SI_value = 10*Lv_skill;
										all_SI[3].SI_value = Lv_skill;
										all_SI[16].SI_value = '範圍傷害';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '陷阱位置';
										all_SI[23].SI_value = 2;
										all_SI[25].SI_value = 30 + 6*Lv_skill;
										all_SI[26].SI_value = '_@停止';
										all_SI[27].SI_name = '<br />_@陷阱觸發後，將會恢復角色';
										all_SI[27].SI_value = 10*Lv_skill;
										all_SI[27].SI_unit = 'MP。';
										break;
								}
								break;
							case 7:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '設置一個猛爆地雷在地面上。若任意目標與_@陷阱的距離小於2m，_@陷阱將會自動觸發並消失。<br />(若任意目標與自身的距離小於3m，此技能將無法施放)';
										all_SI[16].SI_value = '陷阱';
										all_SI[17].SI_value = '慢';
										all_SI[21].SI_value = 1;

										all_SI[27].SI_value = '建議詳閱關於_@陷阱的說明。';
										break;
									case '觸發':
										all_SI[5].SI_value = '(此技能尚無資料)';
										all_SI[16].SI_value = '範圍傷害';
										all_SI[20].SI_value = 1;
										all_SI[22].SI_value = '陷阱位置';
										all_SI[23].SI_value = 2;
										all_SI[25].SI_value = '？';
										all_SI[26].SI_value = '_@著火';
										all_SI[27].SI_name = '<br />_@陷阱觸發後，將會恢復角色';
										all_SI[27].SI_value = '？';
										all_SI[27].SI_unit = 'MP。';
								}
								break;
						}
						break
					case 5:
						switch (T_no_S)
						{
							case 1:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '恢復量：';
										all_SI[1].SI_value = input_SI_value_bySelection(WeapType_Cur,['法杖'],['Matk×'+Math.floor((Lv_skill+6)/4)+'% +(Int×5%)','Matk×'+Math.floor((Lv_skill+2)/4)+'%']);
										all_SI[2].SI_value = 10 + 5*Lv_skill;
										all_SI[3].SI_value = 0;
										all_SI[16].SI_value = '隊伍狀態恢復';
										all_SI[17].SI_value = '慢';
										all_SI[21].SI_value = Math.floor((Lv_skill+5)/3);
										all_SI[24].SI_value = 5*Math.floor((Lv_skill+2)/3);
										
										all_SI[28].SI_value = '施放完畢時即恢復一次，隨後每5秒恢復一次。';
										break;
								}
								break;
							case 2:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'Def+';
										all_SI[5].SI_value = 50 + Math.floor(Lv_skill*Lv_skill*1.5);
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = 'Mdef+';
										all_SI[6].SI_value = 50 + Math.floor(Lv_skill*Lv_skill*1.5);
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '隊伍狀態加成';
										all_SI[17].SI_value = '快';
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
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '使「祝福」的恢復量增加(';
										all_SI[5].SI_value = input_SI_value_bySelection(WeapType_Cur, ['法杖'], ['Matk×' + Math.floor((Lv_skill + 6)/4) + '% +' + (2*Lv_skill + 40), 'Matk×' + Math.floor((Lv_skill + 2)/4) + '% +' + (2*Lv_skill + 40)]);
										all_SI[5].SI_unit = ')。';
										all_SI[6].SI_name = '使「祝福」的恢復次數增加';
										all_SI[6].SI_value = Math.floor((Lv_skill+1)/2);
										all_SI[6].SI_unit = '次。';
										all_SI[7].SI_name = '使「祝福」的持續時間增加';
										all_SI[7].SI_value = 5*Math.floor((Lv_skill+1)/2);
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
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '此技能為複合傷害，包含物理部分與魔法部分。兩部分的傷害最後會相加，並只顯示一個數字。';
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '稍快';
										all_SI[20].SI_value = 1;
										all_SI[27].SI_value = '此技能不會被迴避。<br />裝備法杖或拳套將會影響兩種部分所佔的比例。';
										break;
									case '物理部分':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Atk';
										all_SI[2].SI_value = 50 + 5*Lv_skill;
										all_SI[3].SI_value = input_SI_value_bySelection(WeapType_Cur,['法杖', '拳套'],[(15 + 2.5*Lv_skill), (60 + 10*Lv_skill), (30 + 5*Lv_skill)]);
										break;
									case '魔法部分':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Matk';
										all_SI[2].SI_value = 50 + 5*Lv_skill;
										all_SI[3].SI_value = input_SI_value_bySelection(WeapType_Cur,['法杖', '拳套'],[(60 + 10*Lv_skill), (15 + 2.5*Lv_skill), (30 + 5*Lv_skill)]);
										break;
								}
								break;
							case 6:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '傷害：';
										all_SI[1].SI_value = '有效Matk';
										all_SI[2].SI_value = 0;
										all_SI[3].SI_value = 100 + 15*Lv_skill;
										all_SI[16].SI_value = '單體傷害';
										all_SI[17].SI_value = '稍快';
										all_SI[18].SI_value = 2;
										all_SI[20].SI_value = 1;

										all_SI[27].SI_name = '此技能之魔法貫穿+';
										all_SI[27].SI_value = Lv_skill;
										all_SI[27].SI_unit = '%。';
										break;
								}
								break;
							case 7:
								switch (Tname)
								{
									case '技能效果':
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
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '復活時間減少';
										all_SI[5].SI_value = 6*Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '即復活時間減少' + 3*6*Lv_skill + '秒。';
										break;
								}
								break;
							case 2:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '由擊敗敵人所獲取的經驗值增加';
										all_SI[5].SI_value = Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '同時存在其他經驗值加成效果時，採疊加。';
										break;
								}
								break;
							case 3:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '擊敗敵人後所有可能掉落的物品，掉落率增加';
										all_SI[5].SI_value = Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '同時存在其他掉落率加成效果時，採疊加。';
										break;
								}
								break;
							case 4:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'HP自然恢復+';
										all_SI[5].SI_value = 10*Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[5].SI_name = 'HP自然恢復+';
										all_SI[5].SI_value = 100 + 10*Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 5:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'HP上限+';
										all_SI[5].SI_value = 100*Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[5].SI_name = 'HP上限+';
										all_SI[5].SI_value = 2*Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 6:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '使角色在戰鬥狀態時，獲得調息效果。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '於非戰鬥狀態時，調息效果不會發動。';
										break;
									case '調息':
										all_SI[5].SI_name = '每3秒恢復(1+HP上限×';
										all_SI[5].SI_value = 0.04*Lv_skill;
										all_SI[5].SI_unit = '%)的HP。。';
										all_SI[16].SI_value = '被動恢復';
										break;
								}
								break;
							case 7:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'MP自然恢復+';
										all_SI[5].SI_value = 0.5*Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[5].SI_name = 'MP自然恢復+';
										all_SI[5].SI_value = 100 + 10*Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 8:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'MP上限+';
										all_SI[5].SI_value = 30*Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 9:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '使角色在戰鬥狀態時，獲得寧神效果。';
										all_SI[16].SI_value = '被動效果';
										all_SI[27].SI_value = '於非戰鬥狀態時，寧神效果不會發動。';
										break;
									case '寧神':
										all_SI[5].SI_name = '每3秒恢復(1+MP上限×';
										all_SI[5].SI_value = 0.04*Lv_skill;
										all_SI[5].SI_unit = '%)的MP。。';
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
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '(此技能尚無資料)';
										all_SI[16].SI_value = '被動效果';
										break;
								}
								break;
							case 2:
								switch (Tname)
								{
									case '技能效果':
										all_SI[0].SI_value = '恢復量：';
										all_SI[5].SI_value = 30*Lv_skill + '+(目標HP上限×' + Lv_skill + '%)';
										all_SI[16].SI_value = '單體友方恢復';
										all_SI[17].SI_value = '稍慢';
										all_SI[18].SI_value = 1;
										all_SI[21].SI_value = 1;
										break;
								}
								break;
							case 3:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '使用後可解除目標身上最多2個異常狀態。最先受到的異常狀態會最先被解除。';
										all_SI[6].SI_name = '並可獲得持續';
										all_SI[6].SI_value = (Lv_skill-5)*Math.max(Lv_skill-5,0);
										all_SI[6].SI_unit = '秒的預防效果。預防效果可抵擋所有控制技能以外的效果。';
										all_SI[16].SI_value = '單體友方效果';
										all_SI[17].SI_value = '快';
										all_SI[21].SI_value = 1;
										break;
								}
								break;
							case 4:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '使用後可於原地設置一個守護聖域。<br />(此技能尚無資料)';
										all_SI[16].SI_value = '設置效果';
										all_SI[17].SI_value = '慢';
										all_SI[21].SI_value = 1;
										break;
									case '守護聖域':
										all_SI[5].SI_value = '區域內的所有友方在受到傷害時，若該傷害未超過該友軍HP上限一定比例，將大幅減輕該傷害。';
										all_SI[16].SI_value = '區域隊伍效果';
										all_SI[22].SI_value = '設置位置';
										all_SI[23].SI_value = 3;
										all_SI[24].SI_value = '？';
										break;
								}
								break;
							case 6:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '每3秒恢復' + (10+4*Lv_skill) + 'HP。';
										all_SI[16].SI_value = '恢復光環';
										all_SI[17].SI_value = '慢';
										all_SI[22].SI_value = '光環';
										all_SI[23].SI_value = 4 + 0.6*Lv_skill;
										all_SI[24].SI_value = 900;
										all_SI[27].SI_name = '作用期間施術者的防禦力下降。';
										all_SI[27].SI_value = '(目前尚無資料)';
										all_SI[27].SI_unit = '';
										all_SI[28].SI_value = '<br />建議詳閱_@光環之說明。';
										break;
								}
								break;
							case 7:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '武器Atk+' + (10+2*Lv_skill) + '%。';
										all_SI[16].SI_value = '加成光環';
										all_SI[17].SI_value = '慢';
										all_SI[22].SI_value = '光環';
										all_SI[23].SI_value = 4 + 0.6*Lv_skill;
										all_SI[24].SI_value = 900;
										all_SI[27].SI_name = '作用期間施術者的命中下降。';
										all_SI[27].SI_value = '(目前尚無資料)';
										all_SI[27].SI_unit = '';
										all_SI[28].SI_value = '<br />建議詳閱_@光環之說明。';
										break;
								}
								break;
							case 8:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '詠唱速度+';
										all_SI[5].SI_value = 250;
										all_SI[5].SI_unit = '%。<br />(目前只有Lv10的資料)';
										all_SI[16].SI_value = '加成光環';
										all_SI[17].SI_value = '慢';
										all_SI[22].SI_value = '光環';
										all_SI[23].SI_value = 4 + 0.6*Lv_skill;
										all_SI[24].SI_value = 900;
										all_SI[27].SI_name = '作用期間施術者的MP恢復能力下降。';
										all_SI[27].SI_value = '(目前尚無資料)';
										all_SI[27].SI_unit = '';
										all_SI[28].SI_value = '<br />建議詳閱_@光環之說明。';
										break;
								}
								break;
							case 10:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '每3秒恢復' + Math.floor(10+1.5*Lv_skill) + '的MP。';
										all_SI[16].SI_value = '恢復光環';
										all_SI[17].SI_value = '慢';
										all_SI[22].SI_value = '光環';
										all_SI[23].SI_value = 4 + 0.6*Lv_skill;
										all_SI[24].SI_value = 900;
										all_SI[27].SI_name = '作用期間施術者Atk-';
										all_SI[27].SI_value = 2.5*Lv_skill;
										all_SI[27].SI_unit = '%、';
										all_SI[28].SI_name = 'Matk-';
										all_SI[28].SI_value = 2.5*Lv_skill;
										all_SI[28].SI_unit = '%。';
										all_SI[29].SI_value = '<br />建議詳閱_@光環之說明。';
										break;
								}
								break;
							case 11:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'Def+';
										all_SI[5].SI_value = 10 + 2*Lv_skill;
										all_SI[5].SI_unit = '%。';
										all_SI[6].SI_name = 'Mdef+';
										all_SI[6].SI_value = 10 + 2*Lv_skill;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '加成光環';
										all_SI[17].SI_value = '慢';
										all_SI[22].SI_value = '光環';
										all_SI[23].SI_value = 4 + 0.6*Lv_skill;
										all_SI[24].SI_value = 900;
										all_SI[27].SI_name = '作用期間施術者的迴避下降。';
										all_SI[27].SI_value = '(目前尚無資料)';
										all_SI[27].SI_unit = '';
										all_SI[28].SI_value = '<br />建議詳閱_@光環之說明。';
										break;
								}
								break;
							case 12:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '增加異常抗性。<br />(此技能尚無資料)';
										all_SI[16].SI_value = '加成光環';
										all_SI[17].SI_value = '慢';
										all_SI[22].SI_value = '光環';
										all_SI[23].SI_value = 4 + 0.6*Lv_skill;
										all_SI[24].SI_value = 900;
										all_SI[27].SI_name = '作用期間施術者的攻擊速度下降。';
										all_SI[27].SI_value = '(目前尚無資料)';
										all_SI[27].SI_unit = '';
										all_SI[28].SI_value = '<br />建議詳閱_@光環之說明。';
										break;
								}
								break;
						}
						break;
					case 2:
						switch (T_no_S)
						{
							case 1:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'Matk+(角色等級×';
										all_SI[5].SI_value = 2.5*Lv_skill;
										all_SI[5].SI_unit = '%)。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 2:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '造成魔法傷害時，有'+ Lv_skill + '%機率發動魔能高漲。';
										all_SI[16].SI_value = '被動效果';
										break;
									case '魔能高漲':
										all_SI[5].SI_value = '此魔法傷害的總傷害提升' + 2*Lv_skill + '%。';
										all_SI[16].SI_value = '被動增幅';
										break;
								}
								break;
							case 3:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '處於_@膽怯、_@翻覆、_@昏厥、擊退狀態時，將減少受到的傷害。<br />此技能尚無資料。';
										all_SI[16].SI_value = '被動效果';
										break;
								}
								break;
							case 4:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'Matk+(角色等級×';
										all_SI[5].SI_value = 2.5*Lv_skill;
										all_SI[5].SI_unit = '%)。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 6:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'Atk+(角色等級×';
										all_SI[5].SI_value = 2.5*Lv_skill;
										all_SI[5].SI_unit = '%)。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 7:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '造成物理傷害時，有'+ Lv_skill + '%機率發動弱點命中。';
										all_SI[16].SI_value = '被動效果';
										break;
									case '弱點命中':
										all_SI[5].SI_value = '此物理傷害的總傷害提升' + 2*Lv_skill + '%。';
										all_SI[16].SI_value = '被動增幅';
										break;
								}
								break;
							case 8:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '暴擊率+';
										all_SI[5].SI_value = 0.5*Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[6].SI_name = '暴擊傷害+';
										all_SI[6].SI_value = 0.5*Lv_skill;
										all_SI[6].SI_unit = '%。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 9:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'Atk+(角色等級×';
										all_SI[5].SI_value = 2.5*Lv_skill;
										all_SI[5].SI_unit = '%)。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 11:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'Def+(角色等級×';
										all_SI[5].SI_value = 2.5*Lv_skill;
										all_SI[5].SI_unit = '%)。';
										all_SI[6].SI_name = 'Mdef+(角色等級×';
										all_SI[6].SI_value = 2.5*Lv_skill;
										all_SI[6].SI_unit = '%)。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 12:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '迴避+';
										all_SI[5].SI_value = Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 13:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = '命中+';
										all_SI[5].SI_value = Lv_skill;
										all_SI[5].SI_unit = '。';
										all_SI[16].SI_value = '被動加成';
										break;
								}
								break;
							case 14:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_name = 'Def+(角色等級×';
										all_SI[5].SI_value = 2.5*Lv_skill;
										all_SI[5].SI_unit = '%)。';
										all_SI[6].SI_name = 'Mdef+(角色等級×';
										all_SI[6].SI_value = 2.5*Lv_skill;
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
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '處於靈體狀態。';
										all_SI[6].SI_value = '受魔力流動影響。';
										all_SI[7].SI_value = '受誓約約束。';
										all_SI[16].SI_value = '天賦效果';
										break;
									case '靈體':
										all_SI[5].SI_value = 'HP上限降低至1。';
										all_SI[6].SI_name = '閃躲率+';
										all_SI[6].SI_value = 100;
										all_SI[6].SI_unit = '%。';
										all_SI[7].SI_value = '獲得次元靈化效果。';
										all_SI[16].SI_value = '被動效果';
										break;
									case '次元靈化':
										all_SI[5].SI_value = '閃躲率上限提升至100%。';
										all_SI[6].SI_value = '使自身的閃躲率無法在任何情況下被削減或無視。';
										all_SI[16].SI_value = '被動效果';
										break;
									case '魔力流動':
										all_SI[5].SI_value = '受到魔法傷害時，該傷害無視下限降低至0。';
										all_SI[6].SI_value = '免疫一切異常狀態。';
										all_SI[7].SI_value = 'Matk+3900%。';
										all_SI[16].SI_value = '被動效果';
										break;
									case '誓約':
										all_SI[5].SI_value = '在造成傷害時，該傷害無視下限降低至0。';
										all_SI[16].SI_value = '被動效果';
										break;	
								}
								break;
							case 2:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '在目標腳下產生一區域，持續時間內該目標將無法離開該區域。';
										all_SI[16].SI_value = '單體效果';
										all_SI[17].SI_value = '極快';
										all_SI[18].SI_value = 1 - 0.025*Lv_skill;
										all_SI[22].SI_value = '目標位置';
										all_SI[23].SI_value = 6 - 0.5*Lv_skill;
										all_SI[24].SI_value = 2.5 + 0.25*Lv_skill;
										all_SI[27].SI_value = '此技能僅對單體有效果。就算目標外的敵人進入作用範圍，也不受此技能影響。';
										break;
								}
								break;
							case 3:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '指定一定點後開始詠唱，詠唱須至少1秒。詠唱完畢時將發生爆炸。<br />根據詠唱的時間將影響爆炸的效果。';
										all_SI[17].SI_value = '極快';
										all_SI[18].SI_value = '1~5';
										break;
									case '爆炸':	
										all_SI[5].SI_name = '每多詠唱0.5秒，影響半徑增加';
										all_SI[5].SI_value = 0.25 + 0.05*Lv_skill;
										all_SI[5].SI_unit = 'm。';
										all_SI[6].SI_name = '每多詠唱0.5秒，_@逼退距離增加';
										all_SI[6].SI_value = 0.625 + 0.125*Lv_skill;
										all_SI[6].SI_unit = 'm。';
										all_SI[16].SI_value = '範圍效果';
										all_SI[22].SI_value = '指定位置';
										all_SI[23].SI_value = (2 + 0.4*Lv_skill) +  '~' + (4 + 0.8*Lv_skill);
										all_SI[25].SI_value = 100;
										all_SI[26].SI_value = '被_@逼退'
										all_SI[27].SI_value = '<br />_@逼退距離為5~' + (10 + Lv_skill) + 'm。';
										break;
								}
								break;
							case 4:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '使目標於持續時間內無法施放任何技能。';
										all_SI[16].SI_value = '單體效果';
										all_SI[17].SI_value = '極快';
										all_SI[18].SI_value = 1.8 - 0.1*Lv_skill;
										all_SI[24].SI_value = 3 + 0.2*Lv_skill;
										all_SI[27].SI_value = '此技能無法對同一目標於' + (60 - 3*Lv_skill) + '秒內再度施放。';
										break;
								}
								break;
							case 5:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '清除目標身上所有的增益效果及減益效果。';
										all_SI[16].SI_value = '單體效果';
										all_SI[17].SI_value = '極快';
										all_SI[18].SI_value = 2 - 0.1*Lv_skill;
										all_SI[24].SI_value = 3 + 0.2*Lv_skill;
										all_SI[27].SI_value = '施放完畢後，目標獲得淨化光點的副作用。';
										break;
									case '淨化光點':
										all_SI[5].SI_value = '在受到任何增益狀態時，將清除該狀態。';
										all_SI[16].SI_value = '狀態效果';
										all_SI[24].SI_value = 5 - 0.2*Lv_skill;
										break;
								}
								break;
							case 6:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '使目標的HP恢復至上限。';
										all_SI[16].SI_value = '單體效果';
										all_SI[17].SI_value = '極快';
										all_SI[18].SI_value = 2.2 - 0.1*Lv_skill;
										all_SI[27].SI_value = '施放完畢後，目標將衰弱一段時間。';
										break;
									case '衰弱':
										all_SI[5].SI_value = '減少造成的傷害(恢復的HP百分比)%。<br />減少的傷害將在五秒內逐漸恢復。';
										all_SI[16].SI_value = '狀態效果';
										all_SI[24].SI_value = 5;
										all_SI[27].SI_value = '例如：當前HP剩下25%，則此技能會恢復75%的血量。而衰弱便會減少75%的傷害輸出，並以每秒75%×20%=15%的速度恢復至正常。';
										break;
								}
								break;
							case 7:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '使目標降低50%的傷害輸出，並受到沉默效果。';
										all_SI[16].SI_value = '狀態效果';
										all_SI[17].SI_value = '極快';
										all_SI[18].SI_value = 1.6 - 0.1*Lv_skill;
										all_SI[24].SI_value = 1;
										all_SI[27].SI_value = '降低傷害對目標正在施放或已經施放的技能也有效果。(例如：設置型技能、正在飛行但尚未擊中目標的技能)';
										break;
								}
								break;
							case 8:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '詠唱須至少0.5秒。詠唱完畢時，將往角色前方穿梭一定距離。穿梭的距離與詠唱時間有關。';
										all_SI[16].SI_value = '效果';
										all_SI[17].SI_value = '極快';
										all_SI[18].SI_value = '0.5~1.5';
										break;
									case '穿梭':
										all_SI[5].SI_value = '移動距離為' + (2+0.1*Lv_skill) + '~' + (5.5+0.25*Lv_skill) + 'm。<br />將根據詠唱時間的多寡逐漸遞增。';
										all_SI[16].SI_value = '效果';
										all_SI[17].SI_value = '極快';
										break;
								}
								break;
							case 9:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '使目標進入隱身狀態。';
										all_SI[16].SI_value = '單體效果';
										all_SI[17].SI_value = '極快';
										all_SI[18].SI_value = 2.2 - 0.1*Lv_skill;
										break;
									case '隱身':
										all_SI[5].SI_value = '不會被鎖定，且普通攻擊或施放技能都不會產生任何仇恨值。';
										all_SI[16].SI_value = '狀態效果';
										all_SI[24].SI_value = 6 + Lv_skill;
										all_SI[27].SI_value = '隱身前就擁有的仇恨值並不會消失。也就是說，可能隱身效果一結束就被鎖定。';
										break;
								}
								break;
							case 10:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '在指定區域召喚一魔法陣，魔法陣內的生物都會受到重力影響<br />(不分敵我)。';
										all_SI[16].SI_value = '效果設置';
										all_SI[17].SI_value = '極快';
										all_SI[18].SI_value = 2.6 - 0.1*Lv_skill;
										all_SI[24].SI_value = 10 + 2*Lv_skill;
										break;
									case '重力':
										all_SI[5].SI_value = '同時受到「_@遲緩」及「_@乏力」效果。';
										all_SI[16].SI_value = '狀態效果';
										all_SI[27].SI_value = '狀態持續時間為無限，只有離開魔法陣時狀態才會消失。';
										break;
								}
								break;
							case 11:
								switch (Tname)
								{
									case '技能效果':
										all_SI[5].SI_value = '在指定區域召喚一魔法陣，位於魔法陣內的隊伍成員都會受到霧氣保護。';
										all_SI[16].SI_value = '效果設置';
										all_SI[17].SI_value = '極快';
										all_SI[18].SI_value = 2.6 - 0.1*Lv_skill;
										all_SI[24].SI_value = 10 + 2*Lv_skill;
										break;
									case '霧氣':
										all_SI[5].SI_value = '隊伍成員所承受傷害的99%將會轉嫁到霧氣上。單個魔法陣的霧氣最多能吸收(Matk×' + (190+20*Lv_skill) + '%)的總傷害。';
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
				if ( Cur_Skill.Sk_branch[Cur_Skill.Sk_Gain[i].SG_Sbranch] == Tname )
				{
					if ( arm_door(Cur_Skill.Sk_Gain[i].W_Type, Cur_Skill.Sk_Gain[i].Au_Type, Cur_Skill.Sk_Gain[i].B_Type) )//當前裝備符合Skill Item Gain之裝備條件
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
	
		