


const scriptsInEvents = {

	async _global_Event6_Act1(runtime, localVars)
	{
		var n = localVars.number;
		
		if ( !isNaN( parseInt(n) ) ){
			runtime.setReturnValue(1);
		}else{
			runtime.setReturnValue(0);
		}
	},

	async _global_Event8_Act1(runtime, localVars)
	{
		var number = localVars.number; 
		var temp = localVars.number; 
		
		/* */
		
		var tabUnits = ["K","M","B","T","A","B","C","D","E","F","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz"];
		
		/*
		var tabUnits = ["a","b","c","d","e","f","g","h","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz"];
		*/
		
		/* var tabUnits = ["a","b","c","d","e","f","g","h"]; */
		
		var highnumber = false;
		var bignumber = 1000;
		var tabposition = -1;
		var p_atomepersecond = true;
		var unit;
		
		if (number >= bignumber) {
		            highnumber = true;
		            while (number >= bignumber) { bignumber *= 1000; tabposition++; }
		            //while (number >= bignumber && tabposition < 4 ) { bignumber *= 1000; tabposition++; }
		            number /= (bignumber / 1000);
		            unit = tabUnits[tabposition];
		        } else unit = "";
		        if (unit == undefined) return temp.toExponential(2);
		        var toround = (highnumber == true) ? (p_atomepersecond == true) ? 100 : 100 : 10;
		        var res = Math.round(number * toround) / toround;
		        localVars.ret = [res.toLocaleString().replace(",", ".") + '' + unit];
	},

	async _global_Event38_Act1(runtime, localVars)
	{
		runtime.setReturnValue(runtime.layout.getLayer(localVars.layerName).opacity*100);
	},

	async _global_Event39_Act1(runtime, localVars)
	{
		runtime.setReturnValue(runtime.layout.getLayer(localVars.layerName).isVisible?1:0);
	},

	async _global_Event40_Act1(runtime, localVars)
	{
		let found = 0;
		
		runtime.getAllLayouts().forEach(function(i){
			if(i.name == localVars.layout_name)
			{
				found = 1;
			}
		});
		
		runtime.setReturnValue(found);
	},

	async _global_Event50_Act1(runtime, localVars)
	{
		var ln;
		var lln;
		var u = new URL( window.location.href );
		var ln_param = u.searchParams.get('lang');
		lln = runtime.globalVars.language;
		
		if ( ln_param != "" && ln_param != null ){
		    // runtime.globalVars.language = ln_param.substring(0,2);
		    runtime.globalVars.language = ln_param;
		}
		/*
		if ( window.location.hash != ""){
		    ln = window.location.hash.substring(1,3);
		    runtime.globalVars.language = ln;
		}
		*/
		console.log("changing language from " + lln + " to " + runtime.globalVars.language );
	},

	async _global_Event54_Act1(runtime, localVars)
	{
		// abc
		var text =  localVars.text;
		
		while( text.includes("{") ){
		  
			var key = text.slice(text.indexOf('{') +1,text.indexOf('}'));
			// console.log(key);
			var key_text = runtime.callFunction("get_string",key);
			// console.log( key_text );
			
			if ( key_text != "" ){
				text = text.replace("{"+key+"}", key_text );	
			}else{
				// text = text.replace("{"+key+"}", "||"+key+"/|" );		
				text = text.replace("{"+key+"}", key );
			}
		     
		  	// document.getElementById("texto").innerHTML += '<br>' + text;
			// text = "a";
		}
		
		// text = text.replace("||","{");
		// text = text.replace("/|","}");
		console.log("Translating...");
		runtime.setReturnValue(text);
	},

	async _global_Event64_Act1(runtime, localVars)
	{
		window.addEventListener('keydown', ev => {
		    if (['ArrowDown', 'ArrowUp','ArrowLeft','ArrowRight', ' '].includes(ev.key)) {
		        // ArrowLeft, ArrowRight
		        ev.preventDefault();
		    }
		});
		window.addEventListener('wheel', ev => ev.preventDefault(), { passive: false });
	},

	async _global_Event91_Act1(runtime, localVars)
	{
		var text = localVars.text;
		
		while( text.includes("{{") && text.includes("}}") ){ 
			var key = text.slice(text.indexOf('{{') +2,text.indexOf('}}'));
			// console.log(key);
			// var key_text = runtime.callFunction("get_string",key);
			var key_text = runtime.globalVars[key];
			// console.log( key_text );
			
			if ( key_text !== "" ){
				text = text.replace("{{"+key+"}}", key_text );	
			}else{
				text = text.replace("{{"+key+"}}", key );
			}
		}     
		
		/*
		*/
		runtime.setReturnValue(text);
		
		
	},

	async _buttons_Event2_Act1(runtime, localVars)
	{
		const botInst = runtime.objects.Buttons.getFirstPickedInstance();
		
		if ( botInst.instVars.function != '' ){
			runtime.callFunction(botInst.instVars.function,...botInst.instVars.args.split(","))
		}
		
	},

	async _gameplay_Event6_Act1(runtime, localVars)
	{
		const savedata_map = runtime.objects.SaveData.getFirstInstance().getDataMap();
		
		savedata_map.forEach(function(val, key){
		  //console.log(key + " " + val);
		  if ( runtime.globalVars[key] != null && typeof runtime.globalVars[key] != 'undefined' ){
		  
		  	const valor = runtime.globalVars[key];
		  	//console.log("existe la global " + key + " su valor es: " + valor + "actualizando savedata...");
			savedata_map.set(key,valor);
			
		  }else{
		  	//console.log("No existe la globa: " + key );
		  }
		  
		});
		//console.log( savedata_map );
		
	},

	async _gameplay_Event7_Act1(runtime, localVars)
	{
		const savedata_map = runtime.objects.SaveData.getFirstInstance().getDataMap();
		
		savedata_map.forEach(function(val, key){
		  //console.log(key + " " + val);
		  if ( runtime.globalVars[key] != null && typeof runtime.globalVars[key] != 'undefined' ){
		  
		  	const valor = runtime.globalVars[key];
		  	//console.log("existe la global " + key + " su valor es: " + valor + "actualizando global...");
			
			// savedata_map.set(key,valor);
			runtime.globalVars[key] = val;
			
		  }else{
		  	//console.log("No existe la globa: " + key );
		  }
		  
		});
		//console.log( savedata_map );
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

