var app = app || {}

app.modules = app.modules || {}

app.modules.storage = {
	lastError: 0,

	methods: {
		getStorage: function(storageType) {
			var storage;

			switch (storageType){
				case 'session':
					if(isPhonegap) {
						storage = app.modules.storage.sessionFallback || window.sessionStorage;	
					} else {
						storage = app.modules.storage.sessionFallback || famobi.sessionStorage;
					}
					break;
				default:
					if(isPhonegap) {
						storage = app.modules.storage.localFallback || window.localStorage;
					} else {
						storage = app.modules.storage.localFallback || famobi.localStorage;
					}
					break;
			}
			return storage;
		},
		store: function(key, value, type){
			key = key+"";
			if (typeof value == "object")
				value = JSON.stringify(value);
			value = value+"";
			try {
				return app.getStorage(type).setItem(key, value);
			} catch (e){
				// No storage
				app.modules.storage.lastError = 1;
				return false;
			}
		},
		storeSession: function(key, value){
			return app.store(key, value, 'session');
		},
		get: function(key, type){
			var value = app.getStorage(type).getItem(key);
			try {
				return JSON.parse(value+"");
			} catch(ex){
				return value;
			}
		},
		del: function(key, type) {
			key = key+"";
			return app.getStorage(type).removeItem(key);
		},
		clearStorage: function(type) {
			var storage = app.getStorage(type);

			return storage.clear();
		},
		storageSupported: function() {
			app.store("info:isSupported", "1");

			return !app.modules.storage.lastError;
		}
	},
	init: function() {
		jQuery.extend(app, this.methods);

		if(!app.storageSupported()){
			app.modules.storage.sessionFallback = new storageFallback();
			app.modules.storage.localFallback = new storageFallback();

			// app.modules.dialog.add(__("notification_private_mode"), 'notification-bubble' , {"once": true, "id": "notification_private_mode"});
		}
	}
}

function storageFallback(){
	var storage = {};
};

storageFallback.prototype.setItem = function(key, value){
	this.storage[key] = value;
};

storageFallback.prototype.getItem = function(key){
	try{
		return this.storage[key];
	}catch(e){
		return false;
	}
};

storageFallback.prototype.removeItem = function(key){
	try{
		delete this.storage[key];
		return true;
	}catch(e){
		return false;
	}
};

storageFallback.prototype.clear = function(){
	try{
		this.storage = {};
		return true;
	}catch(e){
		return false;
	}
};

/**
 * INIT:
 */
// jQuery.each(app.modules, function(key, module) {
// 	if ("init" in module) {
// 		module.init();
// 	}
// });

/**
 * USAGE:
 */
// app.store("test", "test")
// 
// app.get("test")
// "test"