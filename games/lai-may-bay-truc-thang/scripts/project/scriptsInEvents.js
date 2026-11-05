(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(89368986, "init", {
	clickmap:true,
	trackLinks:true,
	accurateTrackBounce:true
});



function plsSendGoal(metric){ //напишите удобное вам название
	ym(89368986,'reachGoal',metric); //строчка копируется из настройки цели с вашим идентификатором
	console.log('цель отправлена'); 
}



const scriptsInEvents = {

		async Events_sheet_Event1_Act26(runtime, localVars)
		{
			plsSendGoal(runtime.globalVars.Level&"1");
		},

		async Events_sheet_Event7_Act2(runtime, localVars)
		{
			plsSendGoal("exit_to_menu");
		},

		async Events_sheet_Event31_Act3(runtime, localVars)
		{
			plsSendGoal("death");
		},

		async Events_sheet_Event38_Act3(runtime, localVars)
		{
			plsSendGoal(runtime.globalVars.Level&"2");
		},

		async Events_sheet_Event46_Act1(runtime, localVars)
		{
			plsSendGoal("views_of_reward");
		},

		async Events_sheet_Event47_Act2(runtime, localVars)
		{
			plsSendGoal("cancellation_of_reward");
		},

		async Tutorial_events_Event1_Act19(runtime, localVars)
		{
			plsSendGoal("01");
		},

		async Tutorial_events_Event55_Act1(runtime, localVars)
		{
			plsSendGoal("02");
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

