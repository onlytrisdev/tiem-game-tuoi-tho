


const scriptsInEvents = {

		async ["Es-Loading_Event7_Act1"](runtime, localVars)
		{
			try {
			    let canvas = document.querySelector('canvas');
			    if (!canvas) {
			        return;
			    }
			
			    canvas.style.position = 'relative';
				canvas.style.boxShadow = 'rgb(0 0 0) 0px 0px 15px 10px';
				document.body.style.height = '100vh';
			
			    let bg = document.querySelector('.game-bg');
			    if (!bg) {
			        bg = document.createElement('div');
			        bg.classList.add('game-bg');
			        canvas.parentNode.insertBefore(bg, canvas);
			    }
			
			    bg.style.cssText = `
			        left: 0;
			        right: 0;
			        top: 0;
			        bottom: 0;
			        z-index: 0;
			        position: fixed;
			        background-image: url(${localVars.image});
			        background-position: center;
			        background-repeat: no-repeat;
			        background-size: cover;
			        filter: blur(3px);
			    `;
			} catch (err) {
			    console.error(err);
			}
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

