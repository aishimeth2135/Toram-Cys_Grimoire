document.getElementById('Section_4_Menu_1').addEventListener('click', function thisClick(){
	let inputChange = function(){
		var levelExpCalc = {
			calcSumExp: function(start, end){
				let result = 0;
				for (let i=start; i<end; ++i)
					result += this.calcExp(i);
				return result;
			},
			toFormat: function(a, b){
				return this.calcSumExp(a, b).toString().split('').reverse().join('').match(/\d{1,3}/g).join(',').split('').reverse().join('');
			},
			calcExp: function(curLv){
				return parseInt(curLv*curLv*curLv*curLv/40) + curLv*2;
			},
			toSimple: function(n){
				let unit = '';
				if ( n >= 10000 )
				{
					n /= 1000;
					unit = 'k';
					if ( n >= 1000 )
					{
						n /= 1000;
						unit = 'm';
					}
				}
				return ( parseInt(n) == n ? n : n.toFixed(2)) + unit;
			}
		};
		
		let range = [180, 1]; /* RANGE */
		let doc = document.getElementById('LevelExpCalc_head');
		let a = doc.getElementsByClassName('_input1')[0];
		let b = doc.getElementsByClassName('_input2')[0];
		let a_v = parseInt(a.value);
		let b_v = parseInt(b.value);
		
		if ( a_v > range[0] ) a_v = range[0];
		if ( b_v > range[0] ) b_v = range[0];
		if ( a_v < range[1] ) a_v = range[1];
		if ( b_v < range[1] ) b_v = range[1];
		
		if ( a_v > b_v )
		{
			let t = a_v;
			a_v = b_v;
			b_v = t;
		}
		a.value = a_v;
		b.value = b_v;
		document.getElementById('LevelExpCalc_showExp').innerHTML = levelExpCalc.toFormat(a_v, b_v);
		
		doc = document.getElementById('LevelExpCalc_tableMain');
		let _styleList = doc.getAttribute('data-tablestyle');
		_styleList = _styleList.split(',');
		for (let i=0; i<_styleList.length; ++i)
		{
			let _t = _styleList[i].split('+');
			_styleList[i] = ` style="background-color:${_t[0]};color:${_t[1]};"`;
		}
		
		let _ul = '<ul class="_titleShow">';
		let _lis = document.getElementById('LevelExpCalc_tableMain_menu').getElementsByClassName('_cur');
		for (let i=0; i<_lis.length; ++i)
			_ul += `<li${_styleList[i]}>${_lis[i].innerHTML}</li>`;
		_ul += `<div class="_foot">${document.getElementById("LevelExpCalc_tableMain_tableScope_SwichSMEXP").getElementsByClassName("_cur")[0].outerHTML}</div></ul>`;
		
		let lvStep = parseInt(document.getElementById('LevelExpCalc_tableMain_tableScope_lvStep').value), cnt = parseInt(a_v/lvStep);
		let _table = '<table><tbody>';
		
		while ( lvStep*(cnt+1) <= b_v )
		{
			let _start = 1+lvStep*cnt, _end = lvStep*(cnt+1);
			_table += `<tr><td class="_tdHead">${_start}~${_end}</td>`;
			let _exp = levelExpCalc.calcSumExp(_start, _end);
			for (let i=0; i<_lis.length; ++i)
			{
				let _t;
				let mode = document.getElementById('LevelExpCalc_tableMain_tableScope_SwichSMEXP').getAttribute('data-mode');
				switch (mode)
				{
					case 'stk': _t = parseInt(_lis[i].getAttribute('data-sexp')); break;
					case 'mission': _t = parseInt(_lis[i].getAttribute('data-mexp')); break;
				}
				_t = (true/* 待建置 */) ? Math.ceil(_exp/_t) : (_exp/_t).toFixed(2);
				let _minLv = parseInt(_lis[i].getAttribute('data-minlv'));
				_table += `<td${_styleList[i]}>`;
				_table += _start >= _minLv ? `${levelExpCalc.toSimple(_t)}` : '-';
				_table += '</td>';
			}
			_table += '</tr>';
			++cnt;
		}
		_table += '</tbody><tfoot><tr><td class="_tdHead"><a data-langtext="總和"></a></td>';
		for (let i=0; i<_lis.length; ++i)
		{
			let _exp = levelExpCalc.calcSumExp(a_v, b_v);
			let _t;
			let mode = document.getElementById('LevelExpCalc_tableMain_tableScope_SwichSMEXP').getAttribute('data-mode');
			switch (mode)
			{
				case 'stk': _t = parseInt(_lis[i].getAttribute('data-sexp')); break;
				case 'mission': _t = parseInt(_lis[i].getAttribute('data-mexp')); break;
			}
			_t = (true/* 待建置 */) ? Math.ceil(_exp/_t) : (_exp/_t).toFixed(2);
			let _minLv = parseInt(_lis[i].getAttribute('data-minlv'));
			_table += `<td${_styleList[i]}>`;
			_table += `${levelExpCalc.toSimple(_t)}`;
			_table += '</td>';
		}
		_table += '</tr></tfoot></table>';
		doc = document.getElementById('LevelExpCalc_tableMain_tableScope');
		doc.innerHTML = _ul + _table;
		resetInnerLang(doc);
	}
	document.getElementById('LevelExpCalc_tableMain_tableScope_SwichSMEXP').addEventListener('click', function(){
		let _a = this.getElementsByTagName('a');
		_a[0].className = _a[0].className != '_cur' ? '_cur' : '';
		_a[1].className = _a[0].className != '_cur' ? '_cur' : '';
		this.setAttribute('data-mode', this.getAttribute('data-mode') == 'stk' ? 'mission' : 'stk');
		inputChange();
	});
	document.getElementById('LevelExpCalc_TabletoPng').addEventListener('click', function(){
		let _ul = document.getElementById('LevelExpCalc_tableMain_tableScope').getElementsByClassName('_titleShow')[0];
		let pro = new Promise((resolve, reject) => {
			_ul.style.position = 'static';
			resolve('success');
		});
		pro.then(() => {return new Promise((resolve, reject)=>{
			generateImgTo('LevelExpCalc_tableMain_tableScope', 'LevelExpCalc_showImage');
			resolve('success');
		})}).then(()=>{
			_ul.style.position = 'sticky';
		});
	});
	let doc;
	doc = document.getElementById('LevelExpCalc_tableMain_tableScope_lvStep');
	doc.value = 5;
	doc.addEventListener('change', inputChange );
	
	{
		let range = [180, 1]; /* RANGE */
		doc = document.getElementById('LevelExpCalc_head').getElementsByClassName('_input1')[0];
		doc.value = range[1];
		doc.addEventListener('change', inputChange);
	
		doc = document.getElementById('LevelExpCalc_head').getElementsByClassName('_input2')[0];
		doc.value = range[0];
		doc.addEventListener('change', inputChange);
	}
	let missionItem = [
		{name: 'EXP'										, stkExp: 1	, missionExp: 1, minLv: 0},
		{name: 'Nisel Wood|,|尼賽爾木材|,|ニセル木材'		, stkExp: 33264	, missionExp: 10080	, minLv: 27},
		{name: 'Bitter Nut|,|澀樹果|,|渋い木の実'			, stkExp: 46800	, missionExp: 18720	, minLv: 25},
		{name: 'Huge Iron Ball|,|巨大鐵球|,|巨大な鉄球'		, stkExp: 297000, missionExp: 90000	, minLv: 45},
		{name: 'Nightmare Crystal|,|惡夢結晶|,|悪夢の結晶'	, stkExp: 300000, missionExp: 300000, minLv: 50}
	];
	doc = document.getElementById('LevelExpCalc_tableMain');
	doc.setAttribute('data-tablestyle', "#FFECF5+#9F0050,#ECFFFF+#005757,#F1E1FF+#4B0091,#FFF3EE+#BB3D00,#D2E9FF+#004B97");
	
	let _html = '';
	for (let i=0; i<missionItem.length; ++i)
	{
		let t = missionItem[i];
		_html += `<li data-sexp="${t.stkExp}" data-mexp="${t.missionExp}" data-minlv="${t.minLv}" class="_cur"><a data-langtext="${t.name}"></a></li>`;
	}
	doc = document.getElementById('LevelExpCalc_tableMain_menu');
	doc.innerHTML = _html;
	let _ary = doc.getElementsByTagName('li');
	for (let i=0; i<_ary.length; ++i)
	{
		_ary[i].addEventListener('click', function(){
			this.className = this.className == '' ? '_cur' : '';
			inputChange();
		});
	}
	
	doc = document.getElementById('LevelExpCalc_setTableColorStyle').getElementsByTagName('textarea')[0];
	doc.value = "#FFECF5+#9F0050,#ECFFFF+#005757,#F1E1FF+#4B0091,#FFF3EE+#BB3D00,#D2E9FF+#004B97";
	doc.addEventListener('blur', function(){
		if (this.value == "@")
			this.value = "#FFECF5+#9F0050,#ECFFFF+#005757,#F1E1FF+#4B0091,#FFF3EE+#BB3D00,#D2E9FF+#004B97";
		if (this.value == "")
			this.value = document.getElementById('LevelExpCalc_tableMain').getAttribute('data-tablestyle');
		let _ary = this.value.toUpperCase().match(/#([ABCDEF0-9]{6}|[ABCDEF0-9]{3})\+#([ABCDEF0-9]{6}|[ABCDEF0-9]{3})/g);
		this.value = _ary.join(',');
		let tdNum = 5; /* Numbers of [DOM]:td */
		while(_ary.length < tdNum)
		{
			let L = _ary.length;
			_ary.length += L;
			for (let i=0; i<L; ++i)
				_ary[L+i] = _ary[i];
		}
		let _html = "";
		for (let i=0; i<_ary.length; ++i)
		{
			let _t = _ary[i].split('+');
			_html += `<td style="background-color:${_t[0]};color:${_t[1]};">Cy</td>`;
		}
		this.parentNode.getElementsByClassName('_table1')[0].innerHTML = _html;
		document.getElementById('LevelExpCalc_tableMain').setAttribute('data-tablestyle', _ary.join(','));
		inputChange();
	});
	{
		let _ary = document.getElementById('LevelExpCalc_tableMain').getAttribute('data-tablestyle').toUpperCase().match(/#([ABCDEF0-9]{6}|[ABCDEF0-9]{3})\+#([ABCDEF0-9]{6}|[ABCDEF0-9]{3})/g);
		let _html = "";
		for (let i=0; i<_ary.length; ++i)
		{
			let _t = _ary[i].split('+');
			_html += `<td style="background-color:${_t[0]};color:${_t[1]};">Cy</td>`;
		}
		doc.parentNode.getElementsByClassName('_table1')[0].innerHTML = _html;
	}
	
	inputChange();
	doc = null;
	resetInnerLang(document.getElementById('Section_4_Page_1'));
	document.getElementById('Section_4_Menu_1').removeEventListener('click', thisClick);
});
