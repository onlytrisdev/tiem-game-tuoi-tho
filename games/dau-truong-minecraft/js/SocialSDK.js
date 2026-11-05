class Social 
{

    constructor(isDebug)
    {
        this.saveName = "LBG0000053";

        this.isReady = false; // сдк проинициализировалось и готово к использованию
        this.isDebug = isDebug; // чтобы и локально можно было нормально тестить

        this.lang = "en";

        this.gameplay = false;
    }

    async initialize(options)
    {
        if (!options)
        {
            options = {};
        }

        return new Promise(async (resolve, reject) =>
        {
            if (this.isDebug)
            {
                this.isReady = true;
                resolve();

                return;
            }

            

            resolve();
        });
    }

    async showAds(type, onClose, onRewarded, onError) 
    {
        // при вызове рекламы, заодно отключаем звук

        return new Promise((resolve, reject) => 
        {
            if (this.isDebug)
            {
                

                if (onRewarded)
                {
                    onRewarded();
                }
                
                if (onClose)
                {
                  onClose(true);
                }
 

                resolve();
            }
            else
            {

                if (type == Social.ADS_INTERSTITIAL)
                {
                    const callbacks = {
                        adFinished: () => {
                            if (onClose) 
                            {
                                onClose();
                            }

                            resolve(null);
                        },
                        adError: (e) => {
                            if (onError)
                            {
                                onError(e);
                            }
                            
                            if (onClose) 
                            {
                                onClose(false);
                            }

                            reject();
                        },
                        adStarted: () => console.log("Start midgame ad")
                    };

                   
                }
                else
                {
                    const callbacks = {
                        adFinished: () => {
                            if (onRewarded)
                            {
                                onRewarded();
                            }

                            if (onClose) 
                            {
                                onClose();
                            }

                            resolve(null);
                        },
                        adError: (e) => {
                            // Включаем звук
                            if (onError)
                            {
                                onError(e);
                            }

                            // if (onRewarded)
                            // {
                            //     onRewarded();
                            // }
                            
                            if (onClose) 
                            {
                                onClose(false);
                            }
                            
                            reject();
                        },
                        adStarted: () => console.log("Start rewarded ad"),
                      };

                      
                }

            }   
        });
    }

    gameplayStart()
    {
        if (this.gameplay)
        {
            return;
        }

        this.gameplay = true;

        if (this.isDebug)
        {
            console.log("gameplayStart");
            return;
        }

        
    }

    gameplayStop()
    {
        if (!this.gameplay)
        {
            return;
        }

        this.gameplay = false;

        if (this.isDebug)
        {
            console.log("gameplayStop");
            return;
        }
        
       
    }

    loadingStart()
    {
        if (this.isDebug)
        {
            console.log("loadingStart");
            return;
        }
        
        
    }

    loadingStop()
    {
        if (this.isDebug)
        {
            console.log("loadingStop");
            return;
        }
        
        
    }

    save(data)
    {
        const strData = JSON.stringify(data);
 
            localStorage.setItem(this.saveName, strData);
        
        
    }

    // count - это костыль для яндекса, передавать сюда ничего не надо
    // если пользователь новенький, то возвращает null, иначе объект с сохранками
    async load()
    {
        return new Promise(async (resolve, reject) => 
        {
           
                const data = localStorage.getItem(this.saveName);

                if (data) 
                {
                    resolve(JSON.parse(data));
                }
                else 
                {
                    resolve(null);
                }
            
        }); 
    }

    setProgress(value, lbName = "lbLevels") 
    {  }

}

Social.ADS_REWARD = "reward";
Social.ADS_INTERSTITIAL = "interstitial";

