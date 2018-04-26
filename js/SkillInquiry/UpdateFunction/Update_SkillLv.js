
	function get_skillLv(){
		let cnt = 1;
		let doc = document.getElementById('skillLv_' + String(cnt));
		while ( doc ) 
		{
			if ( doc.className == 'SkillLv_button_current' )
			{
				let T_skillLv = ( doc.id.charAt(doc.id.length-1) == "0") ? 10 : parseInt( doc.id.charAt(doc.id.length-1) );
				return T_skillLv;
			}
			++cnt;
			doc = document.getElementById('skillLv_' + String(cnt));
		}
		alert("Error <get_skillLv>");
	}

	function updateSite_skillLv(temp){
		if ( temp.className == 'SkillLv_button_current' )
		{
			return;
		}
		let cnt = 1;
		let doc = document.getElementById('skillLv_' + String(cnt));
		while ( doc ) 
		{
			if ( doc.className == 'SkillLv_button_current' )
			{
				doc.className = 'SkillLv_button';
				break;
			}
			++cnt;
			doc = document.getElementById('skillLv_' + String(cnt));
		}
		temp.className = 'SkillLv_button_current';
		
		if (Skill_CurBtn != '')
		{
			document.getElementById('ShowCaption_5').style.display = 'none';
			update_of_skill( document.getElementById(Skill_CurBtn), true);
		}
	}