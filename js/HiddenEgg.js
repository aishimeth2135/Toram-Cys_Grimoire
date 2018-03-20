	
	var BagItem = function (EName ,Name, Url, Desc, HasGet){
		this.BI_EName = EName;
		this.BI_Name = Name;
		this.BI_Url = Url;
		this.BI_Desc = Desc;
		this.BI_HasGet = HasGet;
	}
	var All_BagItem = []; //Img Size : 44*44 (px)
	All_BagItem.push(new BagItem('TheStar', '星星', "https://i.imgur.com/ol8NHL4.png", "分類：？。<br>就像它自己說的，這也許真的只是一顆星星。", false));
	All_BagItem.push(new BagItem('TheStick', '白色棒子', "https://i.imgur.com/sz3Xh5s.png", "分類：？。<br>就只是個白色的棒子，聽說在禁不起騷擾的時候會說出提示。", false));
	All_BagItem.push(new BagItem('TheStarStick', '魔法棒', "https://i.imgur.com/dlf1WZc.png", "分類：主手武器。<br>一支樣貌奇特的東西，看著它便有種萌萌的感覺。", false));
	All_BagItem.push(new BagItem('ThePaper', '空白的筆記', "https://i.imgur.com/eNx1Fy9.png", "分類：？。<br>一個空白的筆記，上面有著幾個圓形的汙漬。連它的主人是誰都不得而知了吧。", false));
	
	function AddSkillTree_StarStick(){
		all_skilltree_type[3].STt_skilltree.push(new the_skilltree(1,'魔法？'));
		all_skilltree_type[3].STt_skilltree[0].ST_skill.push(
			new the_skill(1,'(天賦)？'),		//0
			new the_skill(2,'魔力空間'),
			new the_skill(3,'凝氣爆裂'),		//2
			new the_skill(4,'技巧封印'),
			new the_skill(5,'淨化'),			//4
			new the_skill(6,'光耀之息'),		//5
			new the_skill(7,'能量衰退'),
			new the_skill(8,'空間穿梭'),		//7
			new the_skill(9,'隱化'),			//8
			new the_skill(10,'魔法陣-重力'),	//9
			new the_skill(11,'魔法陣-霧氣')		//10
			);
			
		all_skilltree_type[3].STt_skilltree[0].ST_skill[0].Sk_branch.push('技能效果','靈體','次元靈化','魔力流動','誓約');
		all_skilltree_type[3].STt_skilltree[0].ST_skill[2].Sk_branch.push('技能效果','爆炸');
		all_skilltree_type[3].STt_skilltree[0].ST_skill[4].Sk_branch.push('技能效果','淨化光點');
		all_skilltree_type[3].STt_skilltree[0].ST_skill[5].Sk_branch.push('技能效果','衰弱');
		all_skilltree_type[3].STt_skilltree[0].ST_skill[7].Sk_branch.push('技能效果','穿梭');
		all_skilltree_type[3].STt_skilltree[0].ST_skill[8].Sk_branch.push('技能效果','隱身');
		all_skilltree_type[3].STt_skilltree[0].ST_skill[9].Sk_branch.push('技能效果','重力');
		all_skilltree_type[3].STt_skilltree[0].ST_skill[10].Sk_branch.push('技能效果','霧氣');
		
		
		All_WeapType.push('魔法棒');
		for (var i=0;i<all_skilltree_type[3].STt_skilltree[0].ST_skill.length;i++)
		{
			all_skilltree_type[3].STt_skilltree[0].ST_skill[i].Sk_W_type.push('魔法棒');
		}
		
	}
	
	var HasOpenBag = false;
	function OpenBag(temp) {
		var T = true;
		
		if (HasOpenBag)
		{
			Hide_TheBag();
		}
		else {
			$("#TheBag").show(250);
			HasOpenBag = true;
			var doc = document.getElementById("open_Bag");
			doc.style.backgroundColor = "#AE8F00";
			doc.style.color = "#FFFFFF";
			doc.innerHTML = "關閉";
		}
		
		var k = 1;
		for (var i=0;i<All_BagItem.length;i++)
		{	
			if (All_BagItem[i].BI_HasGet)
			{
				document.getElementById("BagItemField_" + String(k)).innerHTML = "<img id=\"" + All_BagItem[i].BI_EName + "\" src=\"" + All_BagItem[i].BI_Url + "\" onmouseover=\"Show_BagItemDesc(this)\" onmouseout=\"Hide_BagItemDesc(this)\">";
				k++;
			}
		}
	}
	
	function Show_BagItemDesc(temp) {
		for (var i=0;i<All_BagItem.length;i++)
		{	
			if (temp.id == All_BagItem[i].BI_EName)
			{
				var doc = document.getElementById("BagItem_Desc");
				doc.style.top = "3.6rem";
				doc.style.left = "0.5rem";
				doc.innerHTML = All_BagItem[i].BI_Desc;
				$("#BagItem_Desc").show(250);
			}
		}
	}
	function Hide_BagItemDesc(temp) {
		$("#BagItem_Desc").hide(250);
	}
	
	function Hide_TheBag() {
		var doc = document.getElementById("open_Bag");
		doc.style.backgroundColor = "rgba(255, 252, 235,0.85)";
		doc.style.color = "#AE8F00";
		doc.innerHTML = "道具欄";
		$("#TheBag").hide(250);
		HasOpenBag = false;
	}
	
	var Picture_HintDiv_door = true;
	var TheStar_count = 0;
	function onclickOf_TheStar(temp){
		if (Picture_HintDiv_door)
		{
			Hide_TheBag();
			var doc = document.getElementById("Picture_HintDiv");
			$("#Picture_HintDiv").hide(250);
			doc.style.top = (parseFloat(temp.style.top) + 4.5) + "rem";
			doc.style.left = (parseFloat(temp.style.left) + 1) + "rem";
			
			var Ttext = "";
			switch (TheStar_count)
			{
				case 0:
				case 1:
					Ttext = "這只是一個星星。";
					All_BagItem[0].BI_HasGet = true;
					break;
				case 2:
					Ttext = "這只是一個星星......";
					break;
				case 3:
					Ttext = "都說這只是一個星星了！";
					break;
				case 4:
					Ttext = "你還點！";
					break;
				case 5:
					Ttext = "可惡！再點呀！";
					break;
				case 6:
					Ttext = "叫你再點就真的點喔？";
					break;
				case 7:
					Ttext = "......我警告你不要再點了喔。";
					break;
				case 8:
					Ttext = "你還點！不理你了，哼！";
					break;
				case 9:
					Ttext = "真的不理你了啦！";
					break;
				default:
					Ttext = "(不理你了)";
			}
			
			doc.innerHTML = Ttext;
			$("#Picture_HintDiv").show(250);
			TheStar_count++;
			Picture_HintDiv_door = false;
			var Timer_Hide_Picture_HintDiv = setTimeout("Hide_Picture_HintDiv()",1600);
		}
	}
	function Hide_Picture_HintDiv(){
	$("#Picture_HintDiv").hide(250);
	Picture_HintDiv_door = true;
	}
	
	var TheStick_count = 0;
	function onclickOf_TheStick(temp){
		if (Picture_HintDiv_door)
		{
			Hide_TheBag();
			var doc = document.getElementById("Picture_HintDiv");
			$("#Picture_HintDiv").hide(250);
			doc.style.top = (parseFloat(temp.style.top) + 4) + "rem";
			doc.style.left = (parseFloat(temp.style.left) + 6) + "rem";
			
			var Ttext = "";
			switch (TheStick_count)
			{
				case 0:
				case 5:
					Ttext = "白色的棒子。";
					break;
				case 1:
				case 2:
					Ttext = "一個白色的棒子。";
					All_BagItem[1].BI_HasGet = true;
					break;
				case 3:
					Ttext = "......";
					break;
				case 4:
					Ttext = "......白色的棒子。";
					break;
				case 6:
					Ttext = "你給我冷靜喔......";
					break;
				case 7:
					Ttext = "......再點我也沒用了。";
					break;
				case 8:
					Ttext = "......還點，都說沒用了。";
					break;
				case 9:
					Ttext = "咳咳咳......";
					break;
				case 12:
					Ttext = "好吧，給你一個提示......<br>要聽清楚喔，";
					break;
				case 13:
					Ttext = "只有找到我是沒用的。";
					break;
				case 14:
					Ttext = "提示我只再說一次......<br>只有找到我是沒用的。";
					break;
				default:
					Ttext = "(再也沒反應了)";
			}
			
			doc.innerHTML = Ttext;
			$("#Picture_HintDiv").show(250);
			TheStick_count++;
			Picture_HintDiv_door = false;
			var Timer_Hide_Picture_HintDiv = setTimeout("Hide_Picture_HintDiv()",1600);
		}
	}
	function Hide_Picture_HintDiv(){
	$("#Picture_HintDiv").hide(250);
	Picture_HintDiv_door = true;
	}
	
	var HasGet_StarStick = false;
	function Get_StarStick() {
		All_BagItem[2].BI_HasGet = true;
		var doc = document.getElementById("Picture_HintDiv");
		doc.style.top = "17rem";
		doc.style.left = "30rem";
		doc.innerHTML = "<div style=\"background-color:	#DFFFDF;border-radius:6rem;margin:0.8rem;\"><img src=\"https://i.imgur.com/qSpX6mu.png\" style=\"margin:0.4rem;\"></div><div style=\"text-align:center;\">獲得了魔法棒。</div>";
		$("#Picture_HintDiv").show(250);
		AddSkillTree_StarStick();
		Picture_HintDiv_door = false;
		var Timer_Hide_Picture_HintDiv = setTimeout("Hide_Picture_HintDiv()",5000);
	}