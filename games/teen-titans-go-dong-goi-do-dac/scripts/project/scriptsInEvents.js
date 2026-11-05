


const scriptsInEvents = {

	async _global_Event27_Act1(runtime, localVars)
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
		// console.log("changing language from " + lln + " to " + runtime.globalVars.language );
	},

	async _global_Event30_Act1(runtime, localVars)
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
		
		// console.log("Translating...");
		
		runtime.setReturnValue(text);
	},

	async _global_Event58_Act1(runtime, localVars)
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

	async _global_Event59_Act1(runtime, localVars)
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
		
	},

	async _global_Event61_Act1(runtime, localVars)
	{
		runtime.setReturnValue(runtime.layout.getLayer(localVars.layerName).opacity*100);
	},

	async _global_Event62_Act1(runtime, localVars)
	{
		runtime.setReturnValue(runtime.layout.getLayer(localVars.layerName).isVisible?1:0);
	},

	async _dialog_writter_Event6_Act1(runtime, localVars)
	{
		console.log ( runtime.objects.SpeakCharacter.getFirstPickedInstance().animation )
		window.char = runtime.objects.SpeakCharacter.getFirstPickedInstance();
		
	},

	async _buttons_Event1_Act1(runtime, localVars)
	{
		const botInst = runtime.objects.Buttons.getFirstPickedInstance();
		runtime.callFunction(botInst.instVars.function,...botInst.instVars.args.split(","))
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

