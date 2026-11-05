(function () {
    'use strict';

    class zhucaidan extends Laya.Script {
        constructor() {
            super();
            this.numType = 1000;
            this.strType = "hello laya";
            this.boolType = true;
        }
        onEnable() {
            if (zhucaidan.yykg == true) {
                Laya.SoundManager.playMusic("sound/zhucaidan.mp3");
                zhucaidan.yykg = false;
            }
            zhucaidan.guanka = JSON.parse(Laya.LocalStorage.getItem("guanka"));
            if (zhucaidan.guanka == null) {
                zhucaidan.guanka = 1;
            }
            zhucaidan.jyguanka = JSON.parse(Laya.LocalStorage.getItem("jyguanka"));
            if (zhucaidan.jyguanka == null) {
                zhucaidan.jyguanka = 1;
            }
            zhucaidan.hun = JSON.parse(Laya.LocalStorage.getItem("hun"));
            if (zhucaidan.hun == null) {
                zhucaidan.hun = 0;
            }
            zhucaidan.wq1dj = JSON.parse(Laya.LocalStorage.getItem("wq1dj"));
            if (zhucaidan.wq1dj == null) {
                zhucaidan.wq1dj = 1;
            }
            zhucaidan.wq2dj = JSON.parse(Laya.LocalStorage.getItem("wq2dj"));
            if (zhucaidan.wq2dj == null) {
                zhucaidan.wq2dj = 1;
            }
            zhucaidan.wq3dj = JSON.parse(Laya.LocalStorage.getItem("wq3dj"));
            if (zhucaidan.wq3dj == null) {
                zhucaidan.wq3dj = 1;
            }
            zhucaidan.wq4dj = JSON.parse(Laya.LocalStorage.getItem("wq4dj"));
            if (zhucaidan.wq4dj == null) {
                zhucaidan.wq4dj = 1;
            }
            zhucaidan.wq5dj = JSON.parse(Laya.LocalStorage.getItem("wq5dj"));
            if (zhucaidan.wq5dj == null) {
                zhucaidan.wq5dj = 1;
            }
            zhucaidan.wq6dj = JSON.parse(Laya.LocalStorage.getItem("wq6dj"));
            if (zhucaidan.wq6dj == null) {
                zhucaidan.wq6dj = 1;
            }
            zhucaidan.wq7dj = JSON.parse(Laya.LocalStorage.getItem("wq7dj"));
            if (zhucaidan.wq7dj == null) {
                zhucaidan.wq7dj = 1;
            }
            zhucaidan.wq8dj = JSON.parse(Laya.LocalStorage.getItem("wq8dj"));
            if (zhucaidan.wq8dj == null) {
                zhucaidan.wq8dj = 1;
            }
            zhucaidan.wq9dj = JSON.parse(Laya.LocalStorage.getItem("wq9dj"));
            if (zhucaidan.wq9dj == null) {
                zhucaidan.wq9dj = 1;
            }
            zhucaidan.wq10dj = JSON.parse(Laya.LocalStorage.getItem("wq10dj"));
            if (zhucaidan.wq10dj == null) {
                zhucaidan.wq10dj = 1;
            }
            zhucaidan.wq11dj = JSON.parse(Laya.LocalStorage.getItem("wq11dj"));
            if (zhucaidan.wq11dj == null) {
                zhucaidan.wq11dj = 1;
            }
            zhucaidan.wq12dj = JSON.parse(Laya.LocalStorage.getItem("wq12dj"));
            if (zhucaidan.wq12dj == null) {
                zhucaidan.wq12dj = 1;
            }
            zhucaidan.wq13dj = JSON.parse(Laya.LocalStorage.getItem("wq13dj"));
            if (zhucaidan.wq13dj == null) {
                zhucaidan.wq13dj = 1;
            }
            zhucaidan.wq14dj = JSON.parse(Laya.LocalStorage.getItem("wq14dj"));
            if (zhucaidan.wq14dj == null) {
                zhucaidan.wq14dj = 1;
            }
            zhucaidan.wq15dj = JSON.parse(Laya.LocalStorage.getItem("wq15dj"));
            if (zhucaidan.wq15dj == null) {
                zhucaidan.wq15dj = 1;
            }
            zhucaidan.wq16dj = JSON.parse(Laya.LocalStorage.getItem("wq16dj"));
            if (zhucaidan.wq16dj == null) {
                zhucaidan.wq16dj = 1;
            }
            zhucaidan.wq17dj = JSON.parse(Laya.LocalStorage.getItem("wq17dj"));
            if (zhucaidan.wq17dj == null) {
                zhucaidan.wq17dj = 1;
            }
            zhucaidan.wq18dj = JSON.parse(Laya.LocalStorage.getItem("wq18dj"));
            if (zhucaidan.wq18dj == null) {
                zhucaidan.wq18dj = 1;
            }
            zhucaidan.wq19dj = JSON.parse(Laya.LocalStorage.getItem("wq19dj"));
            if (zhucaidan.wq19dj == null) {
                zhucaidan.wq19dj = 1;
            }
            this.cgms = this.owner.getChildByName("cgms");
            this.wjms = this.owner.getChildByName("wjms");
            this.jycg = this.owner.getChildByName("jycg");
            this.wqqh = this.owner.getChildByName("wqqh");
            this.gdyx = this.owner.getChildByName("gdyx");
            this.tjsd = this.owner.getChildByName("tjsd");
            this.fx = this.owner.getChildByName("fx");
            this.phb = this.owner.getChildByName("phb");
            this.cgms.on(Laya.Event.CLICK, this, this.cgmshanshu);
            this.wjms.on(Laya.Event.CLICK, this, this.wjmshanshu);
            this.jycg.on(Laya.Event.CLICK, this, this.jycghanshu);
            this.wqqh.on(Laya.Event.CLICK, this, this.wqqhhanshu);
            this.gdyx.on(Laya.Event.CLICK, this, this.gdyxhanshu);
            this.tjsd.on(Laya.Event.CLICK, this, this.tjsdhanshu);
            this.fx.on(Laya.Event.CLICK, this, this.fxhanshu);
            this.phb.on(Laya.Event.CLICK, this, this.phbhanshu);
            this.tilizi = this.owner.getChildByName("tilizi");
            this.jiahao = this.owner.getChildByName("jiahao");
            this.leijishadi = this.owner.getChildByName("leijishadi");
            this.jiahao.on(Laya.Event.CLICK, this, this.jiahaohanshu);
            this.kggjm = this.owner.getChildByName("kggjm");
            this.kgggb = this.kggjm.getChildByName("kgggb");
            this.kgg = this.kggjm.getChildByName("kgg");
            this.buzu = this.owner.getChildByName("buzu");
            this.kgg.on(Laya.Event.CLICK, this, this.kgghanshu);
            this.kgggb.on(Laya.Event.CLICK, this, this.kgggbhanshu);
            zhucaidan.shadishu = JSON.parse(Laya.LocalStorage.getItem("shadishu"));
            if (zhucaidan.shadishu == null) {
                zhucaidan.shadishu = 0;
            }
            this.tili = JSON.parse(Laya.LocalStorage.getItem("tili"));
            if (this.tili == null) {
                this.tili = 100;
            }
        }
        cgmshanshu() {
            Laya.SoundManager.playSound("sound/an1.wav");
            if (this.tili >= 5) {
                Laya.Scene.open("xuanguan.scene");
                this.tili -= 5;
                Laya.LocalStorage.setItem("tili", JSON.stringify(this.tili));
            }
            else {
                this.buzu.y = -450;
                Laya.timer.frameOnce(70, this, this.buzusan);
            }
        }
        wjmshanshu() {
            Laya.SoundManager.playSound("sound/an1.wav");
            if (this.tili >= 5) {
                zhucaidan.guan = 31;
                Laya.Scene.open("xuanwq.scene");
                this.tili -= 5;
                Laya.LocalStorage.setItem("tili", JSON.stringify(this.tili));
            }
            else {
                this.buzu.y = -450;
                Laya.timer.frameOnce(70, this, this.buzusan);
            }
        }
        jycghanshu() {
            Laya.SoundManager.playSound("sound/an1.wav");
            if (this.tili >= 5) {
                Laya.Scene.open("xuanguanjy.scene");
                this.tili -= 5;
                Laya.LocalStorage.setItem("tili", JSON.stringify(this.tili));
            }
            else {
                this.buzu.y = -450;
                Laya.timer.frameOnce(70, this, this.buzusan);
            }
        }
        wqqhhanshu() {
            Laya.SoundManager.playSound("sound/an1.wav");
            Laya.Scene.open("wqqh.scene");
        }
        gdyxhanshu() {
            Laya.SoundManager.playSound("sound/an1.wav");
            //Laya.Browser.window.h5api.showRecommend();
			console.log("324");
        }
        tjsdhanshu() {
            Laya.SoundManager.playSound("sound/an1.wav");
            //Laya.Browser.window.h5api.submitRankScore(391, zhucaidan.shadishu);
			console.log("r3333");
        }
        fxhanshu() {
            Laya.SoundManager.playSound("sound/an1.wav");
            //Laya.Browser.window.h5api.share();
			console.log("43534");
        }
        phbhanshu() {
            Laya.SoundManager.playSound("sound/an1.wav");
            //Laya.Browser.window.h5api.showRankList();
			console.log("7897865");
        }
        jiahaohanshu() {
            Laya.SoundManager.playSound("sound/an2.wav");
            this.kggjm.y = -440;
        }
        kgghanshu() {
            Laya.SoundManager.playSound("sound/an2.wav");
            let result = Laya.Browser.window.h5api.canPlayAd(callback);
            function callback(data) {
                Laya.Browser.window.console.log("Có thể phát quảng cáo: ", data.canPlayAd, '\n', "thời gian còn lại: ", data.remain);
            }
			console.log("Chơi kết thúc");
                        Laya.SoundManager.setMusicVolume(1);
                        this.tili += 20;
                        Laya.LocalStorage.setItem("tili", JSON.stringify(this.tili));
            /* if (result) {
                Laya.Browser.window.console.log('Hàng tồn kho có sẵn');
                Laya.Browser.window.h5api.playAd(data => {
                    Laya.Browser.window.console.log('Phát dữ liệu gọi lại quảng cáo', data);
                    if (data.code == 10000) {
                        console.log("Bắt đầu phát quảng cáo");
                        Laya.SoundManager.setMusicVolume(0);
                    }
                    if (data.code == 10001) {
                        console.log("Chơi kết thúc");
                        Laya.SoundManager.setMusicVolume(1);
                        this.tili += 20;
                        Laya.LocalStorage.setItem("tili", JSON.stringify(this.tili));
                    }
                });
				console.log("2222", result);
            }
            else {
                Laya.Browser.window.console.log('Không có hàng tồn kho để chơi');
                Laya.Browser.window.h5api.playAd(data => {
                    Laya.Browser.window.console.log('Phát dữ liệu gọi lại quảng cáo', data);
                });
            } */
        }
        kgggbhanshu() {
            Laya.SoundManager.playSound("sound/an2.wav");
            this.kggjm.y = -700;
        }
        buzusan() {
            this.buzu.y = 0;
        }
        onUpdate() {
            this.tilizi.text = JSON.stringify(this.tili);
            this.leijishadi.text = "Số mạng tích lũy： " + zhucaidan.shadishu;
            if (zhucaidan.wq1dj == 1) {
                zhucaidan.wq1sh = 12;
            }
            if (zhucaidan.wq1dj == 2) {
                zhucaidan.wq1sh = 15;
            }
            if (zhucaidan.wq1dj == 3) {
                zhucaidan.wq1sh = 20;
            }
            if (zhucaidan.wq1dj == 4) {
                zhucaidan.wq1sh = 25;
            }
            if (zhucaidan.wq1dj == 5) {
                zhucaidan.wq1sh = 30;
            }
            if (zhucaidan.wq1dj == 6) {
                zhucaidan.wq1sh = 35;
            }
            if (zhucaidan.wq1dj == 7) {
                zhucaidan.wq1sh = 40;
            }
            if (zhucaidan.wq1dj == 8) {
                zhucaidan.wq1sh = 45;
            }
            if (zhucaidan.wq1dj == 9) {
                zhucaidan.wq1sh = 50;
            }
            if (zhucaidan.wq1dj == 10) {
                zhucaidan.wq1sh = 55;
            }
            if (zhucaidan.wq1dj == 11) {
                zhucaidan.wq1sh = 60;
            }
            if (zhucaidan.wq1dj == 12) {
                zhucaidan.wq1sh = 65;
            }
            if (zhucaidan.wq1dj == 13) {
                zhucaidan.wq1sh = 70;
            }
            if (zhucaidan.wq1dj == 14) {
                zhucaidan.wq1sh = 75;
            }
            if (zhucaidan.wq1dj == 15) {
                zhucaidan.wq1sh = 80;
            }
            if (zhucaidan.wq1dj == 16) {
                zhucaidan.wq1sh = 85;
            }
            if (zhucaidan.wq1dj == 17) {
                zhucaidan.wq1sh = 90;
            }
            if (zhucaidan.wq1dj == 18) {
                zhucaidan.wq1sh = 95;
            }
            if (zhucaidan.wq1dj == 19) {
                zhucaidan.wq1sh = 100;
            }
            if (zhucaidan.wq1dj == 20) {
                zhucaidan.wq1sh = 105;
            }
            if (zhucaidan.wq1dj == 21) {
                zhucaidan.wq1sh = 110;
            }
            if (zhucaidan.wq1dj == 22) {
                zhucaidan.wq1sh = 115;
            }
            if (zhucaidan.wq1dj == 23) {
                zhucaidan.wq1sh = 120;
            }
            if (zhucaidan.wq1dj == 24) {
                zhucaidan.wq1sh = 125;
            }
            if (zhucaidan.wq1dj == 25) {
                zhucaidan.wq1sh = 130;
            }
            if (zhucaidan.wq1dj == 26) {
                zhucaidan.wq1sh = 135;
            }
            if (zhucaidan.wq1dj == 27) {
                zhucaidan.wq1sh = 140;
            }
            if (zhucaidan.wq1dj == 28) {
                zhucaidan.wq1sh = 145;
            }
            if (zhucaidan.wq1dj == 29) {
                zhucaidan.wq1sh = 150;
            }
            if (zhucaidan.wq1dj == 30) {
                zhucaidan.wq1sh = 160;
            }
            if (zhucaidan.wq2dj == 1) {
                zhucaidan.wq2sh = 12;
            }
            if (zhucaidan.wq2dj == 2) {
                zhucaidan.wq2sh = 15;
            }
            if (zhucaidan.wq2dj == 3) {
                zhucaidan.wq2sh = 20;
            }
            if (zhucaidan.wq2dj == 4) {
                zhucaidan.wq2sh = 25;
            }
            if (zhucaidan.wq2dj == 5) {
                zhucaidan.wq2sh = 30;
            }
            if (zhucaidan.wq2dj == 6) {
                zhucaidan.wq2sh = 35;
            }
            if (zhucaidan.wq2dj == 7) {
                zhucaidan.wq2sh = 40;
            }
            if (zhucaidan.wq2dj == 8) {
                zhucaidan.wq2sh = 45;
            }
            if (zhucaidan.wq2dj == 9) {
                zhucaidan.wq2sh = 50;
            }
            if (zhucaidan.wq2dj == 10) {
                zhucaidan.wq2sh = 55;
            }
            if (zhucaidan.wq2dj == 11) {
                zhucaidan.wq2sh = 60;
            }
            if (zhucaidan.wq2dj == 12) {
                zhucaidan.wq2sh = 65;
            }
            if (zhucaidan.wq2dj == 13) {
                zhucaidan.wq2sh = 70;
            }
            if (zhucaidan.wq2dj == 14) {
                zhucaidan.wq2sh = 75;
            }
            if (zhucaidan.wq2dj == 15) {
                zhucaidan.wq2sh = 80;
            }
            if (zhucaidan.wq2dj == 16) {
                zhucaidan.wq2sh = 85;
            }
            if (zhucaidan.wq2dj == 17) {
                zhucaidan.wq2sh = 90;
            }
            if (zhucaidan.wq2dj == 18) {
                zhucaidan.wq2sh = 95;
            }
            if (zhucaidan.wq2dj == 19) {
                zhucaidan.wq2sh = 100;
            }
            if (zhucaidan.wq2dj == 20) {
                zhucaidan.wq2sh = 105;
            }
            if (zhucaidan.wq2dj == 21) {
                zhucaidan.wq2sh = 110;
            }
            if (zhucaidan.wq2dj == 22) {
                zhucaidan.wq2sh = 115;
            }
            if (zhucaidan.wq2dj == 23) {
                zhucaidan.wq2sh = 120;
            }
            if (zhucaidan.wq2dj == 24) {
                zhucaidan.wq2sh = 125;
            }
            if (zhucaidan.wq2dj == 25) {
                zhucaidan.wq2sh = 130;
            }
            if (zhucaidan.wq2dj == 26) {
                zhucaidan.wq2sh = 135;
            }
            if (zhucaidan.wq2dj == 27) {
                zhucaidan.wq2sh = 140;
            }
            if (zhucaidan.wq2dj == 28) {
                zhucaidan.wq2sh = 145;
            }
            if (zhucaidan.wq2dj == 29) {
                zhucaidan.wq2sh = 150;
            }
            if (zhucaidan.wq2dj == 30) {
                zhucaidan.wq2sh = 160;
            }
            if (zhucaidan.wq3dj == 1) {
                zhucaidan.wq3sh = 12;
            }
            if (zhucaidan.wq3dj == 2) {
                zhucaidan.wq3sh = 15;
            }
            if (zhucaidan.wq3dj == 3) {
                zhucaidan.wq3sh = 20;
            }
            if (zhucaidan.wq3dj == 4) {
                zhucaidan.wq3sh = 25;
            }
            if (zhucaidan.wq3dj == 5) {
                zhucaidan.wq3sh = 30;
            }
            if (zhucaidan.wq3dj == 6) {
                zhucaidan.wq3sh = 35;
            }
            if (zhucaidan.wq3dj == 7) {
                zhucaidan.wq3sh = 40;
            }
            if (zhucaidan.wq3dj == 8) {
                zhucaidan.wq3sh = 45;
            }
            if (zhucaidan.wq3dj == 9) {
                zhucaidan.wq3sh = 50;
            }
            if (zhucaidan.wq3dj == 10) {
                zhucaidan.wq3sh = 55;
            }
            if (zhucaidan.wq3dj == 11) {
                zhucaidan.wq3sh = 60;
            }
            if (zhucaidan.wq3dj == 12) {
                zhucaidan.wq3sh = 65;
            }
            if (zhucaidan.wq3dj == 13) {
                zhucaidan.wq3sh = 70;
            }
            if (zhucaidan.wq3dj == 14) {
                zhucaidan.wq3sh = 75;
            }
            if (zhucaidan.wq3dj == 15) {
                zhucaidan.wq3sh = 80;
            }
            if (zhucaidan.wq3dj == 16) {
                zhucaidan.wq3sh = 85;
            }
            if (zhucaidan.wq3dj == 17) {
                zhucaidan.wq3sh = 90;
            }
            if (zhucaidan.wq3dj == 18) {
                zhucaidan.wq3sh = 95;
            }
            if (zhucaidan.wq3dj == 19) {
                zhucaidan.wq3sh = 100;
            }
            if (zhucaidan.wq3dj == 20) {
                zhucaidan.wq3sh = 105;
            }
            if (zhucaidan.wq3dj == 21) {
                zhucaidan.wq3sh = 110;
            }
            if (zhucaidan.wq3dj == 22) {
                zhucaidan.wq3sh = 115;
            }
            if (zhucaidan.wq3dj == 23) {
                zhucaidan.wq3sh = 120;
            }
            if (zhucaidan.wq3dj == 24) {
                zhucaidan.wq3sh = 125;
            }
            if (zhucaidan.wq3dj == 25) {
                zhucaidan.wq3sh = 130;
            }
            if (zhucaidan.wq3dj == 26) {
                zhucaidan.wq3sh = 135;
            }
            if (zhucaidan.wq3dj == 27) {
                zhucaidan.wq3sh = 140;
            }
            if (zhucaidan.wq3dj == 28) {
                zhucaidan.wq3sh = 145;
            }
            if (zhucaidan.wq3dj == 29) {
                zhucaidan.wq3sh = 150;
            }
            if (zhucaidan.wq3dj == 30) {
                zhucaidan.wq3sh = 160;
            }
            if (zhucaidan.wq4dj == 1) {
                zhucaidan.wq4sh = 12;
            }
            if (zhucaidan.wq4dj == 2) {
                zhucaidan.wq4sh = 15;
            }
            if (zhucaidan.wq4dj == 3) {
                zhucaidan.wq4sh = 20;
            }
            if (zhucaidan.wq4dj == 4) {
                zhucaidan.wq4sh = 25;
            }
            if (zhucaidan.wq4dj == 5) {
                zhucaidan.wq4sh = 30;
            }
            if (zhucaidan.wq4dj == 6) {
                zhucaidan.wq4sh = 35;
            }
            if (zhucaidan.wq4dj == 7) {
                zhucaidan.wq4sh = 40;
            }
            if (zhucaidan.wq4dj == 8) {
                zhucaidan.wq4sh = 45;
            }
            if (zhucaidan.wq4dj == 9) {
                zhucaidan.wq4sh = 50;
            }
            if (zhucaidan.wq4dj == 10) {
                zhucaidan.wq4sh = 55;
            }
            if (zhucaidan.wq4dj == 11) {
                zhucaidan.wq4sh = 60;
            }
            if (zhucaidan.wq4dj == 12) {
                zhucaidan.wq4sh = 65;
            }
            if (zhucaidan.wq4dj == 13) {
                zhucaidan.wq4sh = 70;
            }
            if (zhucaidan.wq4dj == 14) {
                zhucaidan.wq4sh = 75;
            }
            if (zhucaidan.wq4dj == 15) {
                zhucaidan.wq4sh = 80;
            }
            if (zhucaidan.wq4dj == 16) {
                zhucaidan.wq4sh = 85;
            }
            if (zhucaidan.wq4dj == 17) {
                zhucaidan.wq4sh = 90;
            }
            if (zhucaidan.wq4dj == 18) {
                zhucaidan.wq4sh = 95;
            }
            if (zhucaidan.wq4dj == 19) {
                zhucaidan.wq4sh = 100;
            }
            if (zhucaidan.wq4dj == 20) {
                zhucaidan.wq4sh = 105;
            }
            if (zhucaidan.wq4dj == 21) {
                zhucaidan.wq4sh = 110;
            }
            if (zhucaidan.wq4dj == 22) {
                zhucaidan.wq4sh = 115;
            }
            if (zhucaidan.wq4dj == 23) {
                zhucaidan.wq4sh = 120;
            }
            if (zhucaidan.wq4dj == 24) {
                zhucaidan.wq4sh = 125;
            }
            if (zhucaidan.wq4dj == 25) {
                zhucaidan.wq4sh = 130;
            }
            if (zhucaidan.wq4dj == 26) {
                zhucaidan.wq4sh = 135;
            }
            if (zhucaidan.wq4dj == 27) {
                zhucaidan.wq4sh = 140;
            }
            if (zhucaidan.wq4dj == 28) {
                zhucaidan.wq4sh = 145;
            }
            if (zhucaidan.wq4dj == 29) {
                zhucaidan.wq4sh = 150;
            }
            if (zhucaidan.wq4dj == 30) {
                zhucaidan.wq4sh = 160;
            }
            if (zhucaidan.wq5dj == 1) {
                zhucaidan.wq5sh = 12;
            }
            if (zhucaidan.wq5dj == 2) {
                zhucaidan.wq5sh = 15;
            }
            if (zhucaidan.wq5dj == 3) {
                zhucaidan.wq5sh = 20;
            }
            if (zhucaidan.wq5dj == 4) {
                zhucaidan.wq5sh = 25;
            }
            if (zhucaidan.wq5dj == 5) {
                zhucaidan.wq5sh = 30;
            }
            if (zhucaidan.wq5dj == 6) {
                zhucaidan.wq5sh = 35;
            }
            if (zhucaidan.wq5dj == 7) {
                zhucaidan.wq5sh = 40;
            }
            if (zhucaidan.wq5dj == 8) {
                zhucaidan.wq5sh = 45;
            }
            if (zhucaidan.wq5dj == 9) {
                zhucaidan.wq5sh = 50;
            }
            if (zhucaidan.wq5dj == 10) {
                zhucaidan.wq5sh = 55;
            }
            if (zhucaidan.wq5dj == 11) {
                zhucaidan.wq5sh = 60;
            }
            if (zhucaidan.wq5dj == 12) {
                zhucaidan.wq5sh = 65;
            }
            if (zhucaidan.wq5dj == 13) {
                zhucaidan.wq5sh = 70;
            }
            if (zhucaidan.wq5dj == 14) {
                zhucaidan.wq5sh = 75;
            }
            if (zhucaidan.wq5dj == 15) {
                zhucaidan.wq5sh = 80;
            }
            if (zhucaidan.wq5dj == 16) {
                zhucaidan.wq5sh = 85;
            }
            if (zhucaidan.wq5dj == 17) {
                zhucaidan.wq5sh = 90;
            }
            if (zhucaidan.wq5dj == 18) {
                zhucaidan.wq5sh = 95;
            }
            if (zhucaidan.wq5dj == 19) {
                zhucaidan.wq5sh = 100;
            }
            if (zhucaidan.wq5dj == 20) {
                zhucaidan.wq5sh = 105;
            }
            if (zhucaidan.wq5dj == 21) {
                zhucaidan.wq5sh = 110;
            }
            if (zhucaidan.wq5dj == 22) {
                zhucaidan.wq5sh = 115;
            }
            if (zhucaidan.wq5dj == 23) {
                zhucaidan.wq5sh = 120;
            }
            if (zhucaidan.wq5dj == 24) {
                zhucaidan.wq5sh = 125;
            }
            if (zhucaidan.wq5dj == 25) {
                zhucaidan.wq5sh = 130;
            }
            if (zhucaidan.wq5dj == 26) {
                zhucaidan.wq5sh = 135;
            }
            if (zhucaidan.wq5dj == 27) {
                zhucaidan.wq5sh = 140;
            }
            if (zhucaidan.wq5dj == 28) {
                zhucaidan.wq5sh = 145;
            }
            if (zhucaidan.wq5dj == 29) {
                zhucaidan.wq5sh = 150;
            }
            if (zhucaidan.wq5dj == 30) {
                zhucaidan.wq5sh = 160;
            }
            if (zhucaidan.wq6dj == 1) {
                zhucaidan.wq6sh = 12;
            }
            if (zhucaidan.wq6dj == 2) {
                zhucaidan.wq6sh = 15;
            }
            if (zhucaidan.wq6dj == 3) {
                zhucaidan.wq6sh = 20;
            }
            if (zhucaidan.wq6dj == 4) {
                zhucaidan.wq6sh = 25;
            }
            if (zhucaidan.wq6dj == 5) {
                zhucaidan.wq6sh = 30;
            }
            if (zhucaidan.wq6dj == 6) {
                zhucaidan.wq6sh = 35;
            }
            if (zhucaidan.wq6dj == 7) {
                zhucaidan.wq6sh = 40;
            }
            if (zhucaidan.wq6dj == 8) {
                zhucaidan.wq6sh = 45;
            }
            if (zhucaidan.wq6dj == 9) {
                zhucaidan.wq6sh = 50;
            }
            if (zhucaidan.wq6dj == 10) {
                zhucaidan.wq6sh = 55;
            }
            if (zhucaidan.wq6dj == 11) {
                zhucaidan.wq6sh = 60;
            }
            if (zhucaidan.wq6dj == 12) {
                zhucaidan.wq6sh = 65;
            }
            if (zhucaidan.wq6dj == 13) {
                zhucaidan.wq6sh = 70;
            }
            if (zhucaidan.wq6dj == 14) {
                zhucaidan.wq6sh = 75;
            }
            if (zhucaidan.wq6dj == 15) {
                zhucaidan.wq6sh = 80;
            }
            if (zhucaidan.wq6dj == 16) {
                zhucaidan.wq6sh = 85;
            }
            if (zhucaidan.wq6dj == 17) {
                zhucaidan.wq6sh = 90;
            }
            if (zhucaidan.wq6dj == 18) {
                zhucaidan.wq6sh = 95;
            }
            if (zhucaidan.wq6dj == 19) {
                zhucaidan.wq6sh = 100;
            }
            if (zhucaidan.wq6dj == 20) {
                zhucaidan.wq6sh = 105;
            }
            if (zhucaidan.wq6dj == 21) {
                zhucaidan.wq6sh = 110;
            }
            if (zhucaidan.wq6dj == 22) {
                zhucaidan.wq6sh = 115;
            }
            if (zhucaidan.wq6dj == 23) {
                zhucaidan.wq6sh = 120;
            }
            if (zhucaidan.wq6dj == 24) {
                zhucaidan.wq6sh = 125;
            }
            if (zhucaidan.wq6dj == 25) {
                zhucaidan.wq6sh = 130;
            }
            if (zhucaidan.wq6dj == 26) {
                zhucaidan.wq6sh = 135;
            }
            if (zhucaidan.wq6dj == 27) {
                zhucaidan.wq6sh = 140;
            }
            if (zhucaidan.wq6dj == 28) {
                zhucaidan.wq6sh = 145;
            }
            if (zhucaidan.wq6dj == 29) {
                zhucaidan.wq6sh = 150;
            }
            if (zhucaidan.wq6dj == 30) {
                zhucaidan.wq6sh = 160;
            }
            if (zhucaidan.wq7dj == 1) {
                zhucaidan.wq7sh = 12;
            }
            if (zhucaidan.wq7dj == 2) {
                zhucaidan.wq7sh = 15;
            }
            if (zhucaidan.wq7dj == 3) {
                zhucaidan.wq7sh = 20;
            }
            if (zhucaidan.wq7dj == 4) {
                zhucaidan.wq7sh = 25;
            }
            if (zhucaidan.wq7dj == 5) {
                zhucaidan.wq7sh = 30;
            }
            if (zhucaidan.wq7dj == 6) {
                zhucaidan.wq7sh = 35;
            }
            if (zhucaidan.wq7dj == 7) {
                zhucaidan.wq7sh = 40;
            }
            if (zhucaidan.wq7dj == 8) {
                zhucaidan.wq7sh = 45;
            }
            if (zhucaidan.wq7dj == 9) {
                zhucaidan.wq7sh = 50;
            }
            if (zhucaidan.wq7dj == 10) {
                zhucaidan.wq7sh = 55;
            }
            if (zhucaidan.wq7dj == 11) {
                zhucaidan.wq7sh = 60;
            }
            if (zhucaidan.wq7dj == 12) {
                zhucaidan.wq7sh = 65;
            }
            if (zhucaidan.wq7dj == 13) {
                zhucaidan.wq7sh = 70;
            }
            if (zhucaidan.wq7dj == 14) {
                zhucaidan.wq7sh = 75;
            }
            if (zhucaidan.wq7dj == 15) {
                zhucaidan.wq7sh = 80;
            }
            if (zhucaidan.wq7dj == 16) {
                zhucaidan.wq7sh = 85;
            }
            if (zhucaidan.wq7dj == 17) {
                zhucaidan.wq7sh = 90;
            }
            if (zhucaidan.wq7dj == 18) {
                zhucaidan.wq7sh = 95;
            }
            if (zhucaidan.wq7dj == 19) {
                zhucaidan.wq7sh = 100;
            }
            if (zhucaidan.wq7dj == 20) {
                zhucaidan.wq7sh = 105;
            }
            if (zhucaidan.wq7dj == 21) {
                zhucaidan.wq7sh = 110;
            }
            if (zhucaidan.wq7dj == 22) {
                zhucaidan.wq7sh = 115;
            }
            if (zhucaidan.wq7dj == 23) {
                zhucaidan.wq7sh = 120;
            }
            if (zhucaidan.wq7dj == 24) {
                zhucaidan.wq7sh = 125;
            }
            if (zhucaidan.wq7dj == 25) {
                zhucaidan.wq7sh = 130;
            }
            if (zhucaidan.wq7dj == 26) {
                zhucaidan.wq7sh = 135;
            }
            if (zhucaidan.wq7dj == 27) {
                zhucaidan.wq7sh = 140;
            }
            if (zhucaidan.wq7dj == 28) {
                zhucaidan.wq7sh = 145;
            }
            if (zhucaidan.wq7dj == 29) {
                zhucaidan.wq7sh = 150;
            }
            if (zhucaidan.wq7dj == 30) {
                zhucaidan.wq7sh = 160;
            }
            if (zhucaidan.wq8dj == 1) {
                zhucaidan.wq8sh = 12;
            }
            if (zhucaidan.wq8dj == 2) {
                zhucaidan.wq8sh = 15;
            }
            if (zhucaidan.wq8dj == 3) {
                zhucaidan.wq8sh = 20;
            }
            if (zhucaidan.wq8dj == 4) {
                zhucaidan.wq8sh = 25;
            }
            if (zhucaidan.wq8dj == 5) {
                zhucaidan.wq8sh = 30;
            }
            if (zhucaidan.wq8dj == 6) {
                zhucaidan.wq8sh = 35;
            }
            if (zhucaidan.wq8dj == 7) {
                zhucaidan.wq8sh = 40;
            }
            if (zhucaidan.wq8dj == 8) {
                zhucaidan.wq8sh = 45;
            }
            if (zhucaidan.wq8dj == 9) {
                zhucaidan.wq8sh = 50;
            }
            if (zhucaidan.wq8dj == 10) {
                zhucaidan.wq8sh = 55;
            }
            if (zhucaidan.wq8dj == 11) {
                zhucaidan.wq8sh = 60;
            }
            if (zhucaidan.wq8dj == 12) {
                zhucaidan.wq8sh = 65;
            }
            if (zhucaidan.wq8dj == 13) {
                zhucaidan.wq8sh = 70;
            }
            if (zhucaidan.wq8dj == 14) {
                zhucaidan.wq8sh = 75;
            }
            if (zhucaidan.wq8dj == 15) {
                zhucaidan.wq8sh = 80;
            }
            if (zhucaidan.wq8dj == 16) {
                zhucaidan.wq8sh = 85;
            }
            if (zhucaidan.wq8dj == 17) {
                zhucaidan.wq8sh = 90;
            }
            if (zhucaidan.wq8dj == 18) {
                zhucaidan.wq8sh = 95;
            }
            if (zhucaidan.wq8dj == 19) {
                zhucaidan.wq8sh = 100;
            }
            if (zhucaidan.wq8dj == 20) {
                zhucaidan.wq8sh = 105;
            }
            if (zhucaidan.wq8dj == 21) {
                zhucaidan.wq8sh = 110;
            }
            if (zhucaidan.wq8dj == 22) {
                zhucaidan.wq8sh = 115;
            }
            if (zhucaidan.wq8dj == 23) {
                zhucaidan.wq8sh = 120;
            }
            if (zhucaidan.wq8dj == 24) {
                zhucaidan.wq8sh = 125;
            }
            if (zhucaidan.wq8dj == 25) {
                zhucaidan.wq8sh = 130;
            }
            if (zhucaidan.wq8dj == 26) {
                zhucaidan.wq8sh = 135;
            }
            if (zhucaidan.wq8dj == 27) {
                zhucaidan.wq8sh = 140;
            }
            if (zhucaidan.wq8dj == 28) {
                zhucaidan.wq8sh = 145;
            }
            if (zhucaidan.wq8dj == 29) {
                zhucaidan.wq8sh = 150;
            }
            if (zhucaidan.wq8dj == 30) {
                zhucaidan.wq8sh = 160;
            }
            if (zhucaidan.wq9dj == 1) {
                zhucaidan.wq9sh = 12;
            }
            if (zhucaidan.wq9dj == 2) {
                zhucaidan.wq9sh = 15;
            }
            if (zhucaidan.wq9dj == 3) {
                zhucaidan.wq9sh = 20;
            }
            if (zhucaidan.wq9dj == 4) {
                zhucaidan.wq9sh = 25;
            }
            if (zhucaidan.wq9dj == 5) {
                zhucaidan.wq9sh = 30;
            }
            if (zhucaidan.wq9dj == 6) {
                zhucaidan.wq9sh = 35;
            }
            if (zhucaidan.wq9dj == 7) {
                zhucaidan.wq9sh = 40;
            }
            if (zhucaidan.wq9dj == 8) {
                zhucaidan.wq9sh = 45;
            }
            if (zhucaidan.wq9dj == 9) {
                zhucaidan.wq9sh = 50;
            }
            if (zhucaidan.wq9dj == 10) {
                zhucaidan.wq9sh = 55;
            }
            if (zhucaidan.wq9dj == 11) {
                zhucaidan.wq9sh = 60;
            }
            if (zhucaidan.wq9dj == 12) {
                zhucaidan.wq9sh = 65;
            }
            if (zhucaidan.wq9dj == 13) {
                zhucaidan.wq9sh = 70;
            }
            if (zhucaidan.wq9dj == 14) {
                zhucaidan.wq9sh = 75;
            }
            if (zhucaidan.wq9dj == 15) {
                zhucaidan.wq9sh = 80;
            }
            if (zhucaidan.wq9dj == 16) {
                zhucaidan.wq9sh = 85;
            }
            if (zhucaidan.wq9dj == 17) {
                zhucaidan.wq9sh = 90;
            }
            if (zhucaidan.wq9dj == 18) {
                zhucaidan.wq9sh = 95;
            }
            if (zhucaidan.wq9dj == 19) {
                zhucaidan.wq9sh = 100;
            }
            if (zhucaidan.wq9dj == 20) {
                zhucaidan.wq9sh = 105;
            }
            if (zhucaidan.wq9dj == 21) {
                zhucaidan.wq9sh = 110;
            }
            if (zhucaidan.wq9dj == 22) {
                zhucaidan.wq9sh = 115;
            }
            if (zhucaidan.wq9dj == 23) {
                zhucaidan.wq9sh = 120;
            }
            if (zhucaidan.wq9dj == 24) {
                zhucaidan.wq9sh = 125;
            }
            if (zhucaidan.wq9dj == 25) {
                zhucaidan.wq9sh = 130;
            }
            if (zhucaidan.wq9dj == 26) {
                zhucaidan.wq9sh = 135;
            }
            if (zhucaidan.wq9dj == 27) {
                zhucaidan.wq9sh = 140;
            }
            if (zhucaidan.wq9dj == 28) {
                zhucaidan.wq9sh = 145;
            }
            if (zhucaidan.wq9dj == 29) {
                zhucaidan.wq9sh = 150;
            }
            if (zhucaidan.wq9dj == 30) {
                zhucaidan.wq9sh = 160;
            }
            if (zhucaidan.wq10dj == 1) {
                zhucaidan.wq10sh = 12;
            }
            if (zhucaidan.wq10dj == 2) {
                zhucaidan.wq10sh = 15;
            }
            if (zhucaidan.wq10dj == 3) {
                zhucaidan.wq10sh = 20;
            }
            if (zhucaidan.wq10dj == 4) {
                zhucaidan.wq10sh = 25;
            }
            if (zhucaidan.wq10dj == 5) {
                zhucaidan.wq10sh = 30;
            }
            if (zhucaidan.wq10dj == 6) {
                zhucaidan.wq10sh = 35;
            }
            if (zhucaidan.wq10dj == 7) {
                zhucaidan.wq10sh = 40;
            }
            if (zhucaidan.wq10dj == 8) {
                zhucaidan.wq10sh = 45;
            }
            if (zhucaidan.wq10dj == 9) {
                zhucaidan.wq10sh = 50;
            }
            if (zhucaidan.wq10dj == 10) {
                zhucaidan.wq10sh = 55;
            }
            if (zhucaidan.wq10dj == 11) {
                zhucaidan.wq10sh = 60;
            }
            if (zhucaidan.wq10dj == 12) {
                zhucaidan.wq10sh = 65;
            }
            if (zhucaidan.wq10dj == 13) {
                zhucaidan.wq10sh = 70;
            }
            if (zhucaidan.wq10dj == 14) {
                zhucaidan.wq10sh = 75;
            }
            if (zhucaidan.wq10dj == 15) {
                zhucaidan.wq10sh = 80;
            }
            if (zhucaidan.wq10dj == 16) {
                zhucaidan.wq10sh = 85;
            }
            if (zhucaidan.wq10dj == 17) {
                zhucaidan.wq10sh = 90;
            }
            if (zhucaidan.wq10dj == 18) {
                zhucaidan.wq10sh = 95;
            }
            if (zhucaidan.wq10dj == 19) {
                zhucaidan.wq10sh = 100;
            }
            if (zhucaidan.wq10dj == 20) {
                zhucaidan.wq10sh = 105;
            }
            if (zhucaidan.wq10dj == 21) {
                zhucaidan.wq10sh = 110;
            }
            if (zhucaidan.wq10dj == 22) {
                zhucaidan.wq10sh = 115;
            }
            if (zhucaidan.wq10dj == 23) {
                zhucaidan.wq10sh = 120;
            }
            if (zhucaidan.wq10dj == 24) {
                zhucaidan.wq10sh = 125;
            }
            if (zhucaidan.wq10dj == 25) {
                zhucaidan.wq10sh = 130;
            }
            if (zhucaidan.wq10dj == 26) {
                zhucaidan.wq10sh = 135;
            }
            if (zhucaidan.wq10dj == 27) {
                zhucaidan.wq10sh = 140;
            }
            if (zhucaidan.wq10dj == 28) {
                zhucaidan.wq10sh = 145;
            }
            if (zhucaidan.wq10dj == 29) {
                zhucaidan.wq10sh = 150;
            }
            if (zhucaidan.wq10dj == 30) {
                zhucaidan.wq10sh = 160;
            }
            if (zhucaidan.wq11dj == 1) {
                zhucaidan.wq11sh = 12;
            }
            if (zhucaidan.wq11dj == 2) {
                zhucaidan.wq11sh = 15;
            }
            if (zhucaidan.wq11dj == 3) {
                zhucaidan.wq11sh = 20;
            }
            if (zhucaidan.wq11dj == 4) {
                zhucaidan.wq11sh = 25;
            }
            if (zhucaidan.wq11dj == 5) {
                zhucaidan.wq11sh = 30;
            }
            if (zhucaidan.wq11dj == 6) {
                zhucaidan.wq11sh = 35;
            }
            if (zhucaidan.wq11dj == 7) {
                zhucaidan.wq11sh = 40;
            }
            if (zhucaidan.wq11dj == 8) {
                zhucaidan.wq11sh = 45;
            }
            if (zhucaidan.wq11dj == 9) {
                zhucaidan.wq11sh = 50;
            }
            if (zhucaidan.wq11dj == 10) {
                zhucaidan.wq11sh = 55;
            }
            if (zhucaidan.wq11dj == 11) {
                zhucaidan.wq11sh = 60;
            }
            if (zhucaidan.wq11dj == 12) {
                zhucaidan.wq11sh = 65;
            }
            if (zhucaidan.wq11dj == 13) {
                zhucaidan.wq11sh = 70;
            }
            if (zhucaidan.wq11dj == 14) {
                zhucaidan.wq11sh = 75;
            }
            if (zhucaidan.wq11dj == 15) {
                zhucaidan.wq11sh = 80;
            }
            if (zhucaidan.wq11dj == 16) {
                zhucaidan.wq11sh = 85;
            }
            if (zhucaidan.wq11dj == 17) {
                zhucaidan.wq11sh = 90;
            }
            if (zhucaidan.wq11dj == 18) {
                zhucaidan.wq11sh = 95;
            }
            if (zhucaidan.wq11dj == 19) {
                zhucaidan.wq11sh = 100;
            }
            if (zhucaidan.wq11dj == 20) {
                zhucaidan.wq11sh = 105;
            }
            if (zhucaidan.wq11dj == 21) {
                zhucaidan.wq11sh = 110;
            }
            if (zhucaidan.wq11dj == 22) {
                zhucaidan.wq11sh = 115;
            }
            if (zhucaidan.wq11dj == 23) {
                zhucaidan.wq11sh = 120;
            }
            if (zhucaidan.wq11dj == 24) {
                zhucaidan.wq11sh = 125;
            }
            if (zhucaidan.wq11dj == 25) {
                zhucaidan.wq11sh = 130;
            }
            if (zhucaidan.wq11dj == 26) {
                zhucaidan.wq11sh = 135;
            }
            if (zhucaidan.wq11dj == 27) {
                zhucaidan.wq11sh = 140;
            }
            if (zhucaidan.wq11dj == 28) {
                zhucaidan.wq11sh = 145;
            }
            if (zhucaidan.wq11dj == 29) {
                zhucaidan.wq11sh = 150;
            }
            if (zhucaidan.wq11dj == 30) {
                zhucaidan.wq11sh = 160;
            }
            if (zhucaidan.wq12dj == 1) {
                zhucaidan.wq12sh = 12;
            }
            if (zhucaidan.wq12dj == 2) {
                zhucaidan.wq12sh = 15;
            }
            if (zhucaidan.wq12dj == 3) {
                zhucaidan.wq12sh = 20;
            }
            if (zhucaidan.wq12dj == 4) {
                zhucaidan.wq12sh = 25;
            }
            if (zhucaidan.wq12dj == 5) {
                zhucaidan.wq12sh = 30;
            }
            if (zhucaidan.wq12dj == 6) {
                zhucaidan.wq12sh = 35;
            }
            if (zhucaidan.wq12dj == 7) {
                zhucaidan.wq12sh = 40;
            }
            if (zhucaidan.wq12dj == 8) {
                zhucaidan.wq12sh = 45;
            }
            if (zhucaidan.wq12dj == 9) {
                zhucaidan.wq12sh = 50;
            }
            if (zhucaidan.wq12dj == 10) {
                zhucaidan.wq12sh = 55;
            }
            if (zhucaidan.wq12dj == 11) {
                zhucaidan.wq12sh = 60;
            }
            if (zhucaidan.wq12dj == 12) {
                zhucaidan.wq12sh = 65;
            }
            if (zhucaidan.wq12dj == 13) {
                zhucaidan.wq12sh = 70;
            }
            if (zhucaidan.wq12dj == 14) {
                zhucaidan.wq12sh = 75;
            }
            if (zhucaidan.wq12dj == 15) {
                zhucaidan.wq12sh = 80;
            }
            if (zhucaidan.wq12dj == 16) {
                zhucaidan.wq12sh = 85;
            }
            if (zhucaidan.wq12dj == 17) {
                zhucaidan.wq12sh = 90;
            }
            if (zhucaidan.wq12dj == 18) {
                zhucaidan.wq12sh = 95;
            }
            if (zhucaidan.wq12dj == 19) {
                zhucaidan.wq12sh = 100;
            }
            if (zhucaidan.wq12dj == 20) {
                zhucaidan.wq12sh = 105;
            }
            if (zhucaidan.wq12dj == 21) {
                zhucaidan.wq12sh = 110;
            }
            if (zhucaidan.wq12dj == 22) {
                zhucaidan.wq12sh = 115;
            }
            if (zhucaidan.wq12dj == 23) {
                zhucaidan.wq12sh = 120;
            }
            if (zhucaidan.wq12dj == 24) {
                zhucaidan.wq12sh = 125;
            }
            if (zhucaidan.wq12dj == 25) {
                zhucaidan.wq12sh = 130;
            }
            if (zhucaidan.wq12dj == 26) {
                zhucaidan.wq12sh = 135;
            }
            if (zhucaidan.wq12dj == 27) {
                zhucaidan.wq12sh = 140;
            }
            if (zhucaidan.wq12dj == 28) {
                zhucaidan.wq12sh = 145;
            }
            if (zhucaidan.wq12dj == 29) {
                zhucaidan.wq12sh = 150;
            }
            if (zhucaidan.wq12dj == 30) {
                zhucaidan.wq12sh = 160;
            }
            if (zhucaidan.wq13dj == 1) {
                zhucaidan.wq13sh = 12;
            }
            if (zhucaidan.wq13dj == 2) {
                zhucaidan.wq13sh = 15;
            }
            if (zhucaidan.wq13dj == 3) {
                zhucaidan.wq13sh = 20;
            }
            if (zhucaidan.wq13dj == 4) {
                zhucaidan.wq13sh = 25;
            }
            if (zhucaidan.wq13dj == 5) {
                zhucaidan.wq13sh = 30;
            }
            if (zhucaidan.wq13dj == 6) {
                zhucaidan.wq13sh = 35;
            }
            if (zhucaidan.wq13dj == 7) {
                zhucaidan.wq13sh = 40;
            }
            if (zhucaidan.wq13dj == 8) {
                zhucaidan.wq13sh = 45;
            }
            if (zhucaidan.wq13dj == 9) {
                zhucaidan.wq13sh = 50;
            }
            if (zhucaidan.wq13dj == 10) {
                zhucaidan.wq13sh = 55;
            }
            if (zhucaidan.wq13dj == 11) {
                zhucaidan.wq13sh = 60;
            }
            if (zhucaidan.wq13dj == 12) {
                zhucaidan.wq13sh = 65;
            }
            if (zhucaidan.wq13dj == 13) {
                zhucaidan.wq13sh = 70;
            }
            if (zhucaidan.wq13dj == 14) {
                zhucaidan.wq13sh = 75;
            }
            if (zhucaidan.wq13dj == 15) {
                zhucaidan.wq13sh = 80;
            }
            if (zhucaidan.wq13dj == 16) {
                zhucaidan.wq13sh = 85;
            }
            if (zhucaidan.wq13dj == 17) {
                zhucaidan.wq13sh = 90;
            }
            if (zhucaidan.wq13dj == 18) {
                zhucaidan.wq13sh = 95;
            }
            if (zhucaidan.wq13dj == 19) {
                zhucaidan.wq13sh = 100;
            }
            if (zhucaidan.wq13dj == 20) {
                zhucaidan.wq13sh = 105;
            }
            if (zhucaidan.wq13dj == 21) {
                zhucaidan.wq13sh = 110;
            }
            if (zhucaidan.wq13dj == 22) {
                zhucaidan.wq13sh = 115;
            }
            if (zhucaidan.wq13dj == 23) {
                zhucaidan.wq13sh = 120;
            }
            if (zhucaidan.wq13dj == 24) {
                zhucaidan.wq13sh = 125;
            }
            if (zhucaidan.wq13dj == 25) {
                zhucaidan.wq13sh = 130;
            }
            if (zhucaidan.wq13dj == 26) {
                zhucaidan.wq13sh = 135;
            }
            if (zhucaidan.wq13dj == 27) {
                zhucaidan.wq13sh = 140;
            }
            if (zhucaidan.wq13dj == 28) {
                zhucaidan.wq13sh = 145;
            }
            if (zhucaidan.wq13dj == 29) {
                zhucaidan.wq13sh = 150;
            }
            if (zhucaidan.wq13dj == 30) {
                zhucaidan.wq13sh = 160;
            }
            if (zhucaidan.wq14dj == 1) {
                zhucaidan.wq14sh = 12;
            }
            if (zhucaidan.wq14dj == 2) {
                zhucaidan.wq14sh = 15;
            }
            if (zhucaidan.wq14dj == 3) {
                zhucaidan.wq14sh = 20;
            }
            if (zhucaidan.wq14dj == 4) {
                zhucaidan.wq14sh = 25;
            }
            if (zhucaidan.wq14dj == 5) {
                zhucaidan.wq14sh = 30;
            }
            if (zhucaidan.wq14dj == 6) {
                zhucaidan.wq14sh = 35;
            }
            if (zhucaidan.wq14dj == 7) {
                zhucaidan.wq14sh = 40;
            }
            if (zhucaidan.wq14dj == 8) {
                zhucaidan.wq14sh = 45;
            }
            if (zhucaidan.wq14dj == 9) {
                zhucaidan.wq14sh = 50;
            }
            if (zhucaidan.wq14dj == 10) {
                zhucaidan.wq14sh = 55;
            }
            if (zhucaidan.wq14dj == 11) {
                zhucaidan.wq14sh = 60;
            }
            if (zhucaidan.wq14dj == 12) {
                zhucaidan.wq14sh = 65;
            }
            if (zhucaidan.wq14dj == 13) {
                zhucaidan.wq14sh = 70;
            }
            if (zhucaidan.wq14dj == 14) {
                zhucaidan.wq14sh = 75;
            }
            if (zhucaidan.wq14dj == 15) {
                zhucaidan.wq14sh = 80;
            }
            if (zhucaidan.wq14dj == 16) {
                zhucaidan.wq14sh = 85;
            }
            if (zhucaidan.wq14dj == 17) {
                zhucaidan.wq14sh = 90;
            }
            if (zhucaidan.wq14dj == 18) {
                zhucaidan.wq14sh = 95;
            }
            if (zhucaidan.wq14dj == 19) {
                zhucaidan.wq14sh = 100;
            }
            if (zhucaidan.wq14dj == 20) {
                zhucaidan.wq14sh = 105;
            }
            if (zhucaidan.wq14dj == 21) {
                zhucaidan.wq14sh = 110;
            }
            if (zhucaidan.wq14dj == 22) {
                zhucaidan.wq14sh = 115;
            }
            if (zhucaidan.wq14dj == 23) {
                zhucaidan.wq14sh = 120;
            }
            if (zhucaidan.wq14dj == 24) {
                zhucaidan.wq14sh = 125;
            }
            if (zhucaidan.wq14dj == 25) {
                zhucaidan.wq14sh = 130;
            }
            if (zhucaidan.wq14dj == 26) {
                zhucaidan.wq14sh = 135;
            }
            if (zhucaidan.wq14dj == 27) {
                zhucaidan.wq14sh = 140;
            }
            if (zhucaidan.wq14dj == 28) {
                zhucaidan.wq14sh = 145;
            }
            if (zhucaidan.wq14dj == 29) {
                zhucaidan.wq14sh = 150;
            }
            if (zhucaidan.wq14dj == 30) {
                zhucaidan.wq14sh = 160;
            }
            if (zhucaidan.wq15dj == 1) {
                zhucaidan.wq15sh = 12;
            }
            if (zhucaidan.wq15dj == 2) {
                zhucaidan.wq15sh = 15;
            }
            if (zhucaidan.wq15dj == 3) {
                zhucaidan.wq15sh = 20;
            }
            if (zhucaidan.wq15dj == 4) {
                zhucaidan.wq15sh = 25;
            }
            if (zhucaidan.wq15dj == 5) {
                zhucaidan.wq15sh = 30;
            }
            if (zhucaidan.wq15dj == 6) {
                zhucaidan.wq15sh = 35;
            }
            if (zhucaidan.wq15dj == 7) {
                zhucaidan.wq15sh = 40;
            }
            if (zhucaidan.wq15dj == 8) {
                zhucaidan.wq15sh = 45;
            }
            if (zhucaidan.wq15dj == 9) {
                zhucaidan.wq15sh = 50;
            }
            if (zhucaidan.wq15dj == 10) {
                zhucaidan.wq15sh = 55;
            }
            if (zhucaidan.wq15dj == 11) {
                zhucaidan.wq15sh = 60;
            }
            if (zhucaidan.wq15dj == 12) {
                zhucaidan.wq15sh = 65;
            }
            if (zhucaidan.wq15dj == 13) {
                zhucaidan.wq15sh = 70;
            }
            if (zhucaidan.wq15dj == 14) {
                zhucaidan.wq15sh = 75;
            }
            if (zhucaidan.wq15dj == 15) {
                zhucaidan.wq15sh = 80;
            }
            if (zhucaidan.wq15dj == 16) {
                zhucaidan.wq15sh = 85;
            }
            if (zhucaidan.wq15dj == 17) {
                zhucaidan.wq15sh = 90;
            }
            if (zhucaidan.wq15dj == 18) {
                zhucaidan.wq15sh = 95;
            }
            if (zhucaidan.wq15dj == 19) {
                zhucaidan.wq15sh = 100;
            }
            if (zhucaidan.wq15dj == 20) {
                zhucaidan.wq15sh = 105;
            }
            if (zhucaidan.wq15dj == 21) {
                zhucaidan.wq15sh = 110;
            }
            if (zhucaidan.wq15dj == 22) {
                zhucaidan.wq15sh = 115;
            }
            if (zhucaidan.wq15dj == 23) {
                zhucaidan.wq15sh = 120;
            }
            if (zhucaidan.wq15dj == 24) {
                zhucaidan.wq15sh = 125;
            }
            if (zhucaidan.wq15dj == 25) {
                zhucaidan.wq15sh = 130;
            }
            if (zhucaidan.wq15dj == 26) {
                zhucaidan.wq15sh = 135;
            }
            if (zhucaidan.wq15dj == 27) {
                zhucaidan.wq15sh = 140;
            }
            if (zhucaidan.wq15dj == 28) {
                zhucaidan.wq15sh = 145;
            }
            if (zhucaidan.wq15dj == 29) {
                zhucaidan.wq15sh = 150;
            }
            if (zhucaidan.wq15dj == 30) {
                zhucaidan.wq15sh = 160;
            }
            if (zhucaidan.wq16dj == 1) {
                zhucaidan.wq16sh = 12;
            }
            if (zhucaidan.wq16dj == 2) {
                zhucaidan.wq16sh = 15;
            }
            if (zhucaidan.wq16dj == 3) {
                zhucaidan.wq16sh = 20;
            }
            if (zhucaidan.wq16dj == 4) {
                zhucaidan.wq16sh = 25;
            }
            if (zhucaidan.wq16dj == 5) {
                zhucaidan.wq16sh = 30;
            }
            if (zhucaidan.wq16dj == 6) {
                zhucaidan.wq16sh = 35;
            }
            if (zhucaidan.wq16dj == 7) {
                zhucaidan.wq16sh = 40;
            }
            if (zhucaidan.wq16dj == 8) {
                zhucaidan.wq16sh = 45;
            }
            if (zhucaidan.wq16dj == 9) {
                zhucaidan.wq16sh = 50;
            }
            if (zhucaidan.wq16dj == 10) {
                zhucaidan.wq16sh = 55;
            }
            if (zhucaidan.wq16dj == 11) {
                zhucaidan.wq16sh = 60;
            }
            if (zhucaidan.wq16dj == 12) {
                zhucaidan.wq16sh = 65;
            }
            if (zhucaidan.wq16dj == 13) {
                zhucaidan.wq16sh = 70;
            }
            if (zhucaidan.wq16dj == 14) {
                zhucaidan.wq16sh = 75;
            }
            if (zhucaidan.wq16dj == 15) {
                zhucaidan.wq16sh = 80;
            }
            if (zhucaidan.wq16dj == 16) {
                zhucaidan.wq16sh = 85;
            }
            if (zhucaidan.wq16dj == 17) {
                zhucaidan.wq16sh = 90;
            }
            if (zhucaidan.wq16dj == 18) {
                zhucaidan.wq16sh = 95;
            }
            if (zhucaidan.wq16dj == 19) {
                zhucaidan.wq16sh = 100;
            }
            if (zhucaidan.wq16dj == 20) {
                zhucaidan.wq16sh = 105;
            }
            if (zhucaidan.wq16dj == 21) {
                zhucaidan.wq16sh = 110;
            }
            if (zhucaidan.wq16dj == 22) {
                zhucaidan.wq16sh = 115;
            }
            if (zhucaidan.wq16dj == 23) {
                zhucaidan.wq16sh = 120;
            }
            if (zhucaidan.wq16dj == 24) {
                zhucaidan.wq16sh = 125;
            }
            if (zhucaidan.wq16dj == 25) {
                zhucaidan.wq16sh = 130;
            }
            if (zhucaidan.wq16dj == 26) {
                zhucaidan.wq16sh = 135;
            }
            if (zhucaidan.wq16dj == 27) {
                zhucaidan.wq16sh = 140;
            }
            if (zhucaidan.wq16dj == 28) {
                zhucaidan.wq16sh = 145;
            }
            if (zhucaidan.wq16dj == 29) {
                zhucaidan.wq16sh = 150;
            }
            if (zhucaidan.wq16dj == 30) {
                zhucaidan.wq16sh = 160;
            }
            if (zhucaidan.wq17dj == 1) {
                zhucaidan.wq17sh = 12;
            }
            if (zhucaidan.wq17dj == 2) {
                zhucaidan.wq17sh = 15;
            }
            if (zhucaidan.wq17dj == 3) {
                zhucaidan.wq17sh = 20;
            }
            if (zhucaidan.wq17dj == 4) {
                zhucaidan.wq17sh = 25;
            }
            if (zhucaidan.wq17dj == 5) {
                zhucaidan.wq17sh = 30;
            }
            if (zhucaidan.wq17dj == 6) {
                zhucaidan.wq17sh = 35;
            }
            if (zhucaidan.wq17dj == 7) {
                zhucaidan.wq17sh = 40;
            }
            if (zhucaidan.wq17dj == 8) {
                zhucaidan.wq17sh = 45;
            }
            if (zhucaidan.wq17dj == 9) {
                zhucaidan.wq17sh = 50;
            }
            if (zhucaidan.wq17dj == 10) {
                zhucaidan.wq17sh = 55;
            }
            if (zhucaidan.wq17dj == 11) {
                zhucaidan.wq17sh = 60;
            }
            if (zhucaidan.wq17dj == 12) {
                zhucaidan.wq17sh = 65;
            }
            if (zhucaidan.wq17dj == 13) {
                zhucaidan.wq17sh = 70;
            }
            if (zhucaidan.wq17dj == 14) {
                zhucaidan.wq17sh = 75;
            }
            if (zhucaidan.wq17dj == 15) {
                zhucaidan.wq17sh = 80;
            }
            if (zhucaidan.wq17dj == 16) {
                zhucaidan.wq17sh = 85;
            }
            if (zhucaidan.wq17dj == 17) {
                zhucaidan.wq17sh = 90;
            }
            if (zhucaidan.wq17dj == 18) {
                zhucaidan.wq17sh = 95;
            }
            if (zhucaidan.wq17dj == 19) {
                zhucaidan.wq17sh = 100;
            }
            if (zhucaidan.wq17dj == 20) {
                zhucaidan.wq17sh = 105;
            }
            if (zhucaidan.wq17dj == 21) {
                zhucaidan.wq17sh = 110;
            }
            if (zhucaidan.wq17dj == 22) {
                zhucaidan.wq17sh = 115;
            }
            if (zhucaidan.wq17dj == 23) {
                zhucaidan.wq17sh = 120;
            }
            if (zhucaidan.wq17dj == 24) {
                zhucaidan.wq17sh = 125;
            }
            if (zhucaidan.wq17dj == 25) {
                zhucaidan.wq17sh = 130;
            }
            if (zhucaidan.wq17dj == 26) {
                zhucaidan.wq17sh = 135;
            }
            if (zhucaidan.wq17dj == 27) {
                zhucaidan.wq17sh = 140;
            }
            if (zhucaidan.wq17dj == 28) {
                zhucaidan.wq17sh = 145;
            }
            if (zhucaidan.wq17dj == 29) {
                zhucaidan.wq17sh = 150;
            }
            if (zhucaidan.wq17dj == 30) {
                zhucaidan.wq17sh = 160;
            }
            if (zhucaidan.wq18dj == 1) {
                zhucaidan.wq18sh = 12;
            }
            if (zhucaidan.wq18dj == 2) {
                zhucaidan.wq18sh = 15;
            }
            if (zhucaidan.wq18dj == 3) {
                zhucaidan.wq18sh = 20;
            }
            if (zhucaidan.wq18dj == 4) {
                zhucaidan.wq18sh = 25;
            }
            if (zhucaidan.wq18dj == 5) {
                zhucaidan.wq18sh = 30;
            }
            if (zhucaidan.wq18dj == 6) {
                zhucaidan.wq18sh = 35;
            }
            if (zhucaidan.wq18dj == 7) {
                zhucaidan.wq18sh = 40;
            }
            if (zhucaidan.wq18dj == 8) {
                zhucaidan.wq18sh = 45;
            }
            if (zhucaidan.wq18dj == 9) {
                zhucaidan.wq18sh = 50;
            }
            if (zhucaidan.wq18dj == 10) {
                zhucaidan.wq18sh = 55;
            }
            if (zhucaidan.wq18dj == 11) {
                zhucaidan.wq18sh = 60;
            }
            if (zhucaidan.wq18dj == 12) {
                zhucaidan.wq18sh = 65;
            }
            if (zhucaidan.wq18dj == 13) {
                zhucaidan.wq18sh = 70;
            }
            if (zhucaidan.wq18dj == 14) {
                zhucaidan.wq18sh = 75;
            }
            if (zhucaidan.wq18dj == 15) {
                zhucaidan.wq18sh = 80;
            }
            if (zhucaidan.wq18dj == 16) {
                zhucaidan.wq18sh = 85;
            }
            if (zhucaidan.wq18dj == 17) {
                zhucaidan.wq18sh = 90;
            }
            if (zhucaidan.wq18dj == 18) {
                zhucaidan.wq18sh = 95;
            }
            if (zhucaidan.wq18dj == 19) {
                zhucaidan.wq18sh = 100;
            }
            if (zhucaidan.wq18dj == 20) {
                zhucaidan.wq18sh = 105;
            }
            if (zhucaidan.wq18dj == 21) {
                zhucaidan.wq18sh = 110;
            }
            if (zhucaidan.wq18dj == 22) {
                zhucaidan.wq18sh = 115;
            }
            if (zhucaidan.wq18dj == 23) {
                zhucaidan.wq18sh = 120;
            }
            if (zhucaidan.wq18dj == 24) {
                zhucaidan.wq18sh = 125;
            }
            if (zhucaidan.wq18dj == 25) {
                zhucaidan.wq18sh = 130;
            }
            if (zhucaidan.wq18dj == 26) {
                zhucaidan.wq18sh = 135;
            }
            if (zhucaidan.wq18dj == 27) {
                zhucaidan.wq18sh = 140;
            }
            if (zhucaidan.wq18dj == 28) {
                zhucaidan.wq18sh = 145;
            }
            if (zhucaidan.wq18dj == 29) {
                zhucaidan.wq18sh = 150;
            }
            if (zhucaidan.wq18dj == 30) {
                zhucaidan.wq18sh = 160;
            }
            if (zhucaidan.wq19dj == 1) {
                zhucaidan.wq19sh = 12;
            }
            if (zhucaidan.wq19dj == 2) {
                zhucaidan.wq19sh = 15;
            }
            if (zhucaidan.wq19dj == 3) {
                zhucaidan.wq19sh = 20;
            }
            if (zhucaidan.wq19dj == 4) {
                zhucaidan.wq19sh = 25;
            }
            if (zhucaidan.wq19dj == 5) {
                zhucaidan.wq19sh = 30;
            }
            if (zhucaidan.wq19dj == 6) {
                zhucaidan.wq19sh = 35;
            }
            if (zhucaidan.wq19dj == 7) {
                zhucaidan.wq19sh = 40;
            }
            if (zhucaidan.wq19dj == 8) {
                zhucaidan.wq19sh = 45;
            }
            if (zhucaidan.wq19dj == 9) {
                zhucaidan.wq19sh = 50;
            }
            if (zhucaidan.wq19dj == 10) {
                zhucaidan.wq19sh = 55;
            }
            if (zhucaidan.wq19dj == 11) {
                zhucaidan.wq19sh = 60;
            }
            if (zhucaidan.wq19dj == 12) {
                zhucaidan.wq19sh = 65;
            }
            if (zhucaidan.wq19dj == 13) {
                zhucaidan.wq19sh = 70;
            }
            if (zhucaidan.wq19dj == 14) {
                zhucaidan.wq19sh = 75;
            }
            if (zhucaidan.wq19dj == 15) {
                zhucaidan.wq19sh = 80;
            }
            if (zhucaidan.wq19dj == 16) {
                zhucaidan.wq19sh = 85;
            }
            if (zhucaidan.wq19dj == 17) {
                zhucaidan.wq19sh = 90;
            }
            if (zhucaidan.wq19dj == 18) {
                zhucaidan.wq19sh = 95;
            }
            if (zhucaidan.wq19dj == 19) {
                zhucaidan.wq19sh = 100;
            }
            if (zhucaidan.wq19dj == 20) {
                zhucaidan.wq19sh = 105;
            }
            if (zhucaidan.wq19dj == 21) {
                zhucaidan.wq19sh = 110;
            }
            if (zhucaidan.wq19dj == 22) {
                zhucaidan.wq19sh = 115;
            }
            if (zhucaidan.wq19dj == 23) {
                zhucaidan.wq19sh = 120;
            }
            if (zhucaidan.wq19dj == 24) {
                zhucaidan.wq19sh = 125;
            }
            if (zhucaidan.wq19dj == 25) {
                zhucaidan.wq19sh = 130;
            }
            if (zhucaidan.wq19dj == 26) {
                zhucaidan.wq19sh = 135;
            }
            if (zhucaidan.wq19dj == 27) {
                zhucaidan.wq19sh = 140;
            }
            if (zhucaidan.wq19dj == 28) {
                zhucaidan.wq19sh = 145;
            }
            if (zhucaidan.wq19dj == 29) {
                zhucaidan.wq19sh = 150;
            }
            if (zhucaidan.wq19dj == 30) {
                zhucaidan.wq19sh = 160;
            }
        }
        onMouseDown() {
            let dj;
            dj = Laya.Pool.getItemByCreateFun("hh", this.dianji.create, this.dianji);
            dj.pos(Laya.stage.mouseX, Laya.stage.mouseY);
            Laya.stage.addChild(dj);
        }
    }
    zhucaidan.zhujuewq = 1;
    zhucaidan.yykg = true;

    class zhujue extends Laya.Script {
        constructor() { super(); }
        onEnable() {
            let suijiyy;
            suijiyy = Math.round(Math.random() * 6 + 1);
            if (suijiyy == 1) {
                Laya.SoundManager.playMusic("sound/beijin1.mp3");
            }
            if (suijiyy == 2) {
                Laya.SoundManager.playMusic("sound/beijin2.mp3");
            }
            if (suijiyy == 3) {
                Laya.SoundManager.playMusic("sound/beijin3.mp3");
            }
            if (suijiyy == 4) {
                Laya.SoundManager.playMusic("sound/beijin4.mp3");
            }
            if (suijiyy == 5) {
                Laya.SoundManager.playMusic("sound/beijin5.mp3");
            }
            if (suijiyy == 6) {
                Laya.SoundManager.playMusic("sound/beijin6.mp3");
            }
            if (suijiyy == 7) {
                Laya.SoundManager.playMusic("sound/beijin7.mp3");
            }
            this.ditu = this.owner.getChildByName("ditu");
            this.ditu.gotoAndStop(Math.round(Math.random() * 13));
            zhucaidan.ditu = this.ditu;
            this.zhujue = this.owner.getChildByName("zhujue");
            this.qy = this.zhujue.getChildByName("qy");
            this.qy2 = this.zhujue.getChildByName("qy2");
            this.qy3 = this.zhujue.getChildByName("qy3");
            this.qy4 = this.zhujue.getChildByName("qy4");
            this.qy5 = this.zhujue.getChildByName("qy5");
            this.qy6 = this.zhujue.getChildByName("qy6");
            this.qy7 = this.zhujue.getChildByName("qy7");
            this.qy8 = this.zhujue.getChildByName("qy8");
            this.qy9 = this.zhujue.getChildByName("qy9");
            this.qy10 = this.zhujue.getChildByName("qy10");
            this.qy11 = this.zhujue.getChildByName("qy11");
            this.qy12 = this.zhujue.getChildByName("qy12");
            this.qy13 = this.zhujue.getChildByName("qy13");
            this.qy14 = this.zhujue.getChildByName("qy14");
            zhucaidan.zhujue = this.zhujue;
            zhucaidan.xuetiao = this.owner.getChildByName("xuetiao");
            zhucaidan.xuetiao.gotoAndStop(100);
            this.lengque1 = this.owner.getChildByName("lengque1");
            this.lengque2 = this.owner.getChildByName("lengque2");
            this.lengque3 = this.owner.getChildByName("lengque3");
            this.lengque1wc = this.owner.getChildByName("lengque1wc");
            this.lengque2wc = this.owner.getChildByName("lengque2wc");
            this.lengque3wc = this.owner.getChildByName("lengque3wc");
            this.lengque1.gotoAndStop(100);
            this.lengque2.gotoAndStop(100);
            this.lengque3.gotoAndStop(100);
            zhucaidan.dz = "zhanli";
            this.speed = 8;
            this.tiaospeed = 30;
            this.luospeed = 2;
            this.jispeed = 30;
            this.zhujue.on(Laya.Event.COMPLETE, this, this.bowan);
            this.huidaozhanli();
            this.xuni = this.owner.getChildByName("xuni");
            this.xunizuo = this.xuni.getChildByName("zuo");
            this.xuniyou = this.xuni.getChildByName("you");
            this.xunishang = this.xuni.getChildByName("shang");
            this.xunigj = this.xuni.getChildByName("gj");
            this.xunishanbi = this.xuni.getChildByName("shanbi");
            this.xuniji1 = this.xuni.getChildByName("ji1");
            this.xuniji2 = this.xuni.getChildByName("ji2");
            this.xuniji3 = this.xuni.getChildByName("ji3");
            this.xunizuo.on(Laya.Event.MOUSE_DOWN, this, this.xunizuohanshu);
            this.xuniyou.on(Laya.Event.MOUSE_DOWN, this, this.xuniyouhanshu);
            this.xunishang.on(Laya.Event.MOUSE_DOWN, this, this.xunishanghanshu);
            this.xunigj.on(Laya.Event.MOUSE_DOWN, this, this.xunigjhanshu);
            this.xunishanbi.on(Laya.Event.MOUSE_DOWN, this, this.xunishanbihanshu);
            this.xuniji1.on(Laya.Event.MOUSE_DOWN, this, this.xuniji1hanshu);
            this.xuniji2.on(Laya.Event.MOUSE_DOWN, this, this.xuniji2hanshu);
            this.xuniji3.on(Laya.Event.MOUSE_DOWN, this, this.xuniji3hanshu);
            this.xunizuo.on(Laya.Event.MOUSE_UP, this, this.xunizuoup);
            this.xuniyou.on(Laya.Event.MOUSE_UP, this, this.xuniyouup);
            this.xunizuo.on(Laya.Event.MOUSE_MOVE, this, this.xunizuohanshu);
            this.xuniyou.on(Laya.Event.MOUSE_MOVE, this, this.xuniyouhanshu);
            this.xunizuo.on(Laya.Event.MOUSE_OUT, this, this.xunizuoup);
            this.xuniyou.on(Laya.Event.MOUSE_OUT, this, this.xuniyouup);
            if (Laya.Browser.onPC == true) {
                this.xuni.y = -500;
            }
            else {
                this.xuni.y = 0;
            }
            if (zhucaidan.guan != 31) {
                this.sbjm = this.owner.getChildByName("sbjm");
                this.sbfh = this.sbjm.getChildByName("fh");
                this.sbzhucaidan = this.sbjm.getChildByName("zhucaidan");
                this.sbfh.on(Laya.Event.CLICK, this, this.sbfhhanshu);
                this.sbzhucaidan.on(Laya.Event.CLICK, this, this.zhucaidanh);
            }
        }
        xunizuohanshu() {
            if (zhucaidan.dz == "zhanli") {
                this.zhujue.scaleX = -1;
                if (zhucaidan.zhujuewq == 1) {
                    this.zhujue.play(0, true, "wq1pao");
                }
                if (zhucaidan.zhujuewq == 2) {
                    this.zhujue.play(0, true, "wq2pao");
                }
                if (zhucaidan.zhujuewq == 3) {
                    this.zhujue.play(0, true, "wq3pao");
                }
                if (zhucaidan.zhujuewq == 4) {
                    this.zhujue.play(0, true, "wq4pao");
                }
                if (zhucaidan.zhujuewq == 5) {
                    this.zhujue.play(0, true, "wq5pao");
                }
                if (zhucaidan.zhujuewq == 6) {
                    this.zhujue.play(0, true, "wq6pao");
                }
                if (zhucaidan.zhujuewq == 7) {
                    this.zhujue.play(0, true, "wq7pao");
                }
                if (zhucaidan.zhujuewq == 8) {
                    this.zhujue.play(0, true, "wq8pao");
                }
                if (zhucaidan.zhujuewq == 9) {
                    this.zhujue.play(0, true, "wq9pao");
                }
                if (zhucaidan.zhujuewq == 10) {
                    this.zhujue.play(0, true, "wq10pao");
                }
                if (zhucaidan.zhujuewq == 11) {
                    this.zhujue.play(0, true, "wq11pao");
                }
                if (zhucaidan.zhujuewq == 12) {
                    this.zhujue.play(0, true, "wq12pao");
                }
                if (zhucaidan.zhujuewq == 13) {
                    this.zhujue.play(0, true, "wq13pao");
                }
                if (zhucaidan.zhujuewq == 14) {
                    this.zhujue.play(0, true, "wq14pao");
                }
                if (zhucaidan.zhujuewq == 15) {
                    this.zhujue.play(0, true, "wq15pao");
                }
                if (zhucaidan.zhujuewq == 16) {
                    this.zhujue.play(0, true, "wq16pao");
                }
                if (zhucaidan.zhujuewq == 17) {
                    this.zhujue.play(0, true, "wq17pao");
                }
                if (zhucaidan.zhujuewq == 18) {
                    this.zhujue.play(0, true, "wq18pao");
                }
                if (zhucaidan.zhujuewq == 19) {
                    this.zhujue.play(0, true, "wq19pao");
                }
                zhucaidan.dz = "pao";
                this.zuokg = true;
            }
            if (zhucaidan.dz == "tiao") {
                this.zuokg = true;
            }
            if (zhucaidan.dz == "luo") {
                this.zuokg = true;
            }
        }
        xuniyouhanshu() {
            if (zhucaidan.dz == "zhanli") {
                this.zhujue.scaleX = 1;
                if (zhucaidan.zhujuewq == 1) {
                    this.zhujue.play(0, true, "wq1pao");
                }
                if (zhucaidan.zhujuewq == 2) {
                    this.zhujue.play(0, true, "wq2pao");
                }
                if (zhucaidan.zhujuewq == 3) {
                    this.zhujue.play(0, true, "wq3pao");
                }
                if (zhucaidan.zhujuewq == 4) {
                    this.zhujue.play(0, true, "wq4pao");
                }
                if (zhucaidan.zhujuewq == 5) {
                    this.zhujue.play(0, true, "wq5pao");
                }
                if (zhucaidan.zhujuewq == 6) {
                    this.zhujue.play(0, true, "wq6pao");
                }
                if (zhucaidan.zhujuewq == 7) {
                    this.zhujue.play(0, true, "wq7pao");
                }
                if (zhucaidan.zhujuewq == 8) {
                    this.zhujue.play(0, true, "wq8pao");
                }
                if (zhucaidan.zhujuewq == 9) {
                    this.zhujue.play(0, true, "wq9pao");
                }
                if (zhucaidan.zhujuewq == 10) {
                    this.zhujue.play(0, true, "wq10pao");
                }
                if (zhucaidan.zhujuewq == 11) {
                    this.zhujue.play(0, true, "wq11pao");
                }
                if (zhucaidan.zhujuewq == 12) {
                    this.zhujue.play(0, true, "wq12pao");
                }
                if (zhucaidan.zhujuewq == 13) {
                    this.zhujue.play(0, true, "wq13pao");
                }
                if (zhucaidan.zhujuewq == 14) {
                    this.zhujue.play(0, true, "wq14pao");
                }
                if (zhucaidan.zhujuewq == 15) {
                    this.zhujue.play(0, true, "wq15pao");
                }
                if (zhucaidan.zhujuewq == 16) {
                    this.zhujue.play(0, true, "wq16pao");
                }
                if (zhucaidan.zhujuewq == 17) {
                    this.zhujue.play(0, true, "wq17pao");
                }
                if (zhucaidan.zhujuewq == 18) {
                    this.zhujue.play(0, true, "wq18pao");
                }
                if (zhucaidan.zhujuewq == 19) {
                    this.zhujue.play(0, true, "wq19pao");
                }
                zhucaidan.dz = "pao";
                this.youkg = true;
            }
            if (zhucaidan.dz == "tiao") {
                this.youkg = true;
            }
            if (zhucaidan.dz == "luo") {
                this.youkg = true;
            }
        }
        xunishanghanshu() {
            if (zhucaidan.dz == "zhanli") {
                if (zhucaidan.zhujuewq == 1) {
                    this.zhujue.play(0, true, "wq1tiao");
                }
                if (zhucaidan.zhujuewq == 2) {
                    this.zhujue.play(0, true, "wq2tiao");
                }
                if (zhucaidan.zhujuewq == 3) {
                    this.zhujue.play(0, true, "wq3tiao");
                }
                if (zhucaidan.zhujuewq == 4) {
                    this.zhujue.play(0, true, "wq4tiao");
                }
                if (zhucaidan.zhujuewq == 5) {
                    this.zhujue.play(0, true, "wq5tiao");
                }
                if (zhucaidan.zhujuewq == 6) {
                    this.zhujue.play(0, true, "wq6tiao");
                }
                if (zhucaidan.zhujuewq == 7) {
                    this.zhujue.play(0, true, "wq7tiao");
                }
                if (zhucaidan.zhujuewq == 8) {
                    this.zhujue.play(0, true, "wq8tiao");
                }
                if (zhucaidan.zhujuewq == 9) {
                    this.zhujue.play(0, true, "wq9tiao");
                }
                if (zhucaidan.zhujuewq == 10) {
                    this.zhujue.play(0, true, "wq10tiao");
                }
                if (zhucaidan.zhujuewq == 11) {
                    this.zhujue.play(0, true, "wq11tiao");
                }
                if (zhucaidan.zhujuewq == 12) {
                    this.zhujue.play(0, true, "wq12tiao");
                }
                if (zhucaidan.zhujuewq == 13) {
                    this.zhujue.play(0, true, "wq13tiao");
                }
                if (zhucaidan.zhujuewq == 14) {
                    this.zhujue.play(0, true, "wq14tiao");
                }
                if (zhucaidan.zhujuewq == 15) {
                    this.zhujue.play(0, true, "wq15tiao");
                }
                if (zhucaidan.zhujuewq == 16) {
                    this.zhujue.play(0, true, "wq16tiao");
                }
                if (zhucaidan.zhujuewq == 17) {
                    this.zhujue.play(0, true, "wq17tiao");
                }
                if (zhucaidan.zhujuewq == 18) {
                    this.zhujue.play(0, true, "wq18tiao");
                }
                if (zhucaidan.zhujuewq == 19) {
                    this.zhujue.play(0, true, "wq19tiao");
                }
                zhucaidan.dz = "tiao";
            }
            if (zhucaidan.dz == "pao") {
                if (zhucaidan.zhujuewq == 1) {
                    this.zhujue.play(0, true, "wq1tiao");
                }
                if (zhucaidan.zhujuewq == 2) {
                    this.zhujue.play(0, true, "wq2tiao");
                }
                if (zhucaidan.zhujuewq == 3) {
                    this.zhujue.play(0, true, "wq3tiao");
                }
                if (zhucaidan.zhujuewq == 4) {
                    this.zhujue.play(0, true, "wq4tiao");
                }
                if (zhucaidan.zhujuewq == 5) {
                    this.zhujue.play(0, true, "wq5tiao");
                }
                if (zhucaidan.zhujuewq == 6) {
                    this.zhujue.play(0, true, "wq6tiao");
                }
                if (zhucaidan.zhujuewq == 7) {
                    this.zhujue.play(0, true, "wq7tiao");
                }
                if (zhucaidan.zhujuewq == 8) {
                    this.zhujue.play(0, true, "wq8tiao");
                }
                if (zhucaidan.zhujuewq == 9) {
                    this.zhujue.play(0, true, "wq9tiao");
                }
                if (zhucaidan.zhujuewq == 10) {
                    this.zhujue.play(0, true, "wq10tiao");
                }
                if (zhucaidan.zhujuewq == 11) {
                    this.zhujue.play(0, true, "wq11tiao");
                }
                if (zhucaidan.zhujuewq == 12) {
                    this.zhujue.play(0, true, "wq12tiao");
                }
                if (zhucaidan.zhujuewq == 13) {
                    this.zhujue.play(0, true, "wq13tiao");
                }
                if (zhucaidan.zhujuewq == 14) {
                    this.zhujue.play(0, true, "wq14tiao");
                }
                if (zhucaidan.zhujuewq == 15) {
                    this.zhujue.play(0, true, "wq15tiao");
                }
                if (zhucaidan.zhujuewq == 16) {
                    this.zhujue.play(0, true, "wq16tiao");
                }
                if (zhucaidan.zhujuewq == 17) {
                    this.zhujue.play(0, true, "wq17tiao");
                }
                if (zhucaidan.zhujuewq == 18) {
                    this.zhujue.play(0, true, "wq18tiao");
                }
                if (zhucaidan.zhujuewq == 19) {
                    this.zhujue.play(0, true, "wq19tiao");
                }
                zhucaidan.dz = "tiao";
            }
        }
        xunigjhanshu() {
            if (zhucaidan.dz == "zhanli" || zhucaidan.dz == "pao" || zhucaidan.dz == "tiao" || zhucaidan.dz == "luo") {
                this.pugonghanshu();
            }
            if (zhucaidan.dz == "pugong") {
                if (zhucaidan.zhujuewq == 1) {
                    if (this.zhujue.index >= 10 && this.zhujue.index <= 13) {
                        this.zhujue.play(14, true, "wq1pugong");
                    }
                    if (this.zhujue.index >= 25 && this.zhujue.index <= 29) {
                        this.zhujue.play(30, true, "wq1pugong");
                    }
                }
                if (zhucaidan.zhujuewq == 2) {
                    if (this.zhujue.index >= 11 && this.zhujue.index <= 14) {
                        this.zhujue.play(15, true, "wq2pugong");
                    }
                    if (this.zhujue.index >= 25 && this.zhujue.index <= 29) {
                        this.zhujue.play(30, true, "wq2pugong");
                    }
                }
                if (zhucaidan.zhujuewq == 3) {
                    if (this.zhujue.index >= 10 && this.zhujue.index <= 13) {
                        this.zhujue.play(14, true, "wq3pugong");
                    }
                    if (this.zhujue.index >= 25 && this.zhujue.index <= 28) {
                        this.zhujue.play(29, true, "wq3pugong");
                    }
                }
                if (zhucaidan.zhujuewq == 4) {
                    if (this.zhujue.index >= 10 && this.zhujue.index <= 13) {
                        this.zhujue.play(14, true, "wq4pugong");
                    }
                    if (this.zhujue.index >= 24 && this.zhujue.index <= 27) {
                        this.zhujue.play(28, true, "wq4pugong");
                    }
                }
                if (zhucaidan.zhujuewq == 5) {
                    if (this.zhujue.index >= 10 && this.zhujue.index <= 13) {
                        this.zhujue.play(14, true, "wq5pugong");
                    }
                    if (this.zhujue.index >= 23 && this.zhujue.index <= 26) {
                        this.zhujue.play(27, true, "wq5pugong");
                    }
                }
                if (zhucaidan.zhujuewq == 6) {
                    if (this.zhujue.index >= 9 && this.zhujue.index <= 12) {
                        this.zhujue.play(13, true, "wq6pugong");
                    }
                    if (this.zhujue.index >= 33 && this.zhujue.index <= 36) {
                        this.zhujue.play(37, true, "wq6pugong");
                    }
                }
                if (zhucaidan.zhujuewq == 7) {
                    if (this.zhujue.index >= 11 && this.zhujue.index <= 14) {
                        this.zhujue.play(15, true, "wq7pugong");
                    }
                    if (this.zhujue.index >= 25 && this.zhujue.index <= 28) {
                        this.zhujue.play(29, true, "wq7pugong");
                    }
                }
                if (zhucaidan.zhujuewq == 8) {
                    if (this.zhujue.index >= 9 && this.zhujue.index <= 11) {
                        this.zhujue.play(12, true, "wq8pugong");
                    }
                    if (this.zhujue.index >= 21 && this.zhujue.index <= 24) {
                        this.zhujue.play(25, true, "wq8pugong");
                    }
                }
                if (zhucaidan.zhujuewq == 9) {
                    if (this.zhujue.index >= 9 && this.zhujue.index <= 12) {
                        this.zhujue.play(13, true, "wq9pugong");
                    }
                    if (this.zhujue.index >= 21 && this.zhujue.index <= 25) {
                        this.zhujue.play(26, true, "wq9pugong");
                    }
                }
                if (zhucaidan.zhujuewq == 11) {
                    if (this.zhujue.index >= 13 && this.zhujue.index <= 16) {
                        this.zhujue.play(17, true, "wq11pugong");
                    }
                    if (this.zhujue.index >= 30 && this.zhujue.index <= 33) {
                        this.zhujue.play(34, true, "wq11pugong");
                    }
                }
                if (zhucaidan.zhujuewq == 12) {
                    if (this.zhujue.index >= 11 && this.zhujue.index <= 14) {
                        this.zhujue.play(15, true, "wq12pugong");
                    }
                }
                if (zhucaidan.zhujuewq == 13) {
                    if (this.zhujue.index >= 9 && this.zhujue.index <= 13) {
                        this.zhujue.play(14, true, "wq13pugong");
                    }
                    if (this.zhujue.index >= 25 && this.zhujue.index <= 28) {
                        this.zhujue.play(29, true, "wq13pugong");
                    }
                }
                if (zhucaidan.zhujuewq == 14) {
                    if (this.zhujue.index >= 11 && this.zhujue.index <= 15) {
                        this.zhujue.play(16, true, "wq14pugong");
                    }
                    if (this.zhujue.index >= 27 && this.zhujue.index <= 30) {
                        this.zhujue.play(31, true, "wq14pugong");
                    }
                }
                if (zhucaidan.zhujuewq == 15) {
                    if (this.zhujue.index >= 11 && this.zhujue.index <= 15) {
                        this.zhujue.play(16, true, "wq15pugong");
                    }
                    if (this.zhujue.index >= 25 && this.zhujue.index <= 28) {
                        this.zhujue.play(29, true, "wq15pugong");
                    }
                }
                if (zhucaidan.zhujuewq == 16) {
                    if (this.zhujue.index >= 12 && this.zhujue.index <= 16) {
                        this.zhujue.play(17, true, "wq16pugong");
                    }
                    if (this.zhujue.index >= 30 && this.zhujue.index <= 34) {
                        this.zhujue.play(35, true, "wq16pugong");
                    }
                }
                if (zhucaidan.zhujuewq == 17) {
                    if (this.zhujue.index >= 10 && this.zhujue.index <= 13) {
                        this.zhujue.play(14, true, "wq17pugong");
                    }
                    if (this.zhujue.index >= 23 && this.zhujue.index <= 26) {
                        this.zhujue.play(27, true, "wq17pugong");
                    }
                }
                if (zhucaidan.zhujuewq == 18) {
                    if (this.zhujue.index >= 12 && this.zhujue.index <= 15) {
                        this.zhujue.play(16, true, "wq18pugong");
                    }
                    if (this.zhujue.index >= 25 && this.zhujue.index <= 28) {
                        this.zhujue.play(29, true, "wq18pugong");
                    }
                }
            }
        }
        xunishanbihanshu() {
            if (zhucaidan.dz == "zhanli") {
                let suiji;
                suiji = Math.round(Math.random());
                if (suiji == 0) {
                    this.zhujue.play(0, true, "shanbi1");
                }
                if (suiji == 1) {
                    this.zhujue.play(0, true, "shanbi2");
                }
                zhucaidan.dz = "shanbi";
                Laya.SoundManager.playSound("sound/shanbi.wav");
            }
            if (zhucaidan.dz == "pao") {
                let suiji;
                suiji = Math.round(Math.random());
                if (suiji == 0) {
                    this.zhujue.play(0, true, "shanbi1");
                }
                if (suiji == 1) {
                    this.zhujue.play(0, true, "shanbi2");
                }
                zhucaidan.dz = "shanbi";
                Laya.SoundManager.playSound("sound/shanbi.wav");
            }
        }
        xuniji1hanshu() {
            if (zhucaidan.dz == "zhanli" || zhucaidan.dz == "pao" || zhucaidan.dz == "tiao" || zhucaidan.dz == "luo") {
                this.ji1hanshu();
            }
        }
        xuniji2hanshu() {
            if (zhucaidan.dz == "zhanli" || zhucaidan.dz == "pao" || zhucaidan.dz == "tiao" || zhucaidan.dz == "luo") {
                this.ji2hanshu();
            }
        }
        xuniji3hanshu() {
            if (zhucaidan.dz == "zhanli" || zhucaidan.dz == "pao" || zhucaidan.dz == "tiao" || zhucaidan.dz == "luo") {
                this.ji3hanshu();
            }
        }
        xunizuoup() {
            if (zhucaidan.dz == "pao") {
                this.huidaozhanli();
            }
            this.zuokg = false;
        }
        xuniyouup() {
            if (zhucaidan.dz == "pao") {
                this.huidaozhanli();
            }
            this.youkg = false;
        }
        sbfhhanshu() {
            let result = Laya.Browser.window.h5api.canPlayAd(callback);
            function callback(data) {
                Laya.Browser.window.console.log("Có thể phát quảng cáo: ", data.canPlayAd, '\n', "thời gian còn lại: ", data.remain);
            }
            if (result) {
                Laya.Browser.window.console.log('Hàng tồn kho có sẵn');
                Laya.Browser.window.h5api.playAd(data => {
                    Laya.Browser.window.console.log('Phát dữ liệu gọi lại quảng cáo', data);
                    if (data.code == 10000) {
                        console.log("Bắt đầu phát quảng cáo");
                        Laya.SoundManager.setMusicVolume(0);
                    }
                    if (data.code == 10001) {
                        console.log("Chơi kết thúc");
                        Laya.SoundManager.setMusicVolume(1);
                        zhucaidan.xuetiao.gotoAndStop(100);
                        this.sbjm.y = -500;
                        zhucaidan.dz = "zhanli";
                        this.zhujue.y = 430;
                        Laya.SoundManager.playSound("sound/an1.wav");
                    }
                });
				console.log("ff345");
            }
            else {
                Laya.Browser.window.console.log('Không có hàng tồn kho để chơi');
                Laya.Browser.window.h5api.playAd(data => {
                    Laya.Browser.window.console.log('Phát dữ liệu gọi lại quảng cáo', data);
                });
            }
			console.log("dfgfgg");
        }
        zhucaidanh() {
            zhucaidan.yykg = true;
            Laya.SoundManager.playSound("sound/an1.wav");
            Laya.Scene.open("zhucaidan.scene");
        }
        onUpdate() {
            if (zhucaidan.guan != 31) {
                if (zhucaidan.xuetiao.index <= 0) {
                    zhucaidan.xuetiao.gotoAndStop(0);
                    zhucaidan.dz = "si";
                    this.sbjm.y = 0;
                    this.zhujue.y = -500;
                }
            }
            if (this.lengque1.index == 100) {
                this.lengque1wc.alpha = 1;
            }
            else {
                this.lengque1wc.alpha = 0;
            }
            if (this.lengque2.index == 100) {
                this.lengque2wc.alpha = 1;
            }
            else {
                this.lengque2wc.alpha = 0;
            }
            if (this.lengque3.index == 100) {
                this.lengque3wc.alpha = 1;
            }
            else {
                this.lengque3wc.alpha = 0;
            }
            if (zhucaidan.dz == "zhanli") {
                this.tiaospeed = 30;
                this.luospeed = 2;
                this.jispeed = 30;
                if (Laya.KeyBoardManager.hasKeyDown(65)) {
                    this.zhujue.scaleX = -1;
                    if (zhucaidan.zhujuewq == 1) {
                        this.zhujue.play(0, true, "wq1pao");
                    }
                    if (zhucaidan.zhujuewq == 2) {
                        this.zhujue.play(0, true, "wq2pao");
                    }
                    if (zhucaidan.zhujuewq == 3) {
                        this.zhujue.play(0, true, "wq3pao");
                    }
                    if (zhucaidan.zhujuewq == 4) {
                        this.zhujue.play(0, true, "wq4pao");
                    }
                    if (zhucaidan.zhujuewq == 5) {
                        this.zhujue.play(0, true, "wq5pao");
                    }
                    if (zhucaidan.zhujuewq == 6) {
                        this.zhujue.play(0, true, "wq6pao");
                    }
                    if (zhucaidan.zhujuewq == 7) {
                        this.zhujue.play(0, true, "wq7pao");
                    }
                    if (zhucaidan.zhujuewq == 8) {
                        this.zhujue.play(0, true, "wq8pao");
                    }
                    if (zhucaidan.zhujuewq == 9) {
                        this.zhujue.play(0, true, "wq9pao");
                    }
                    if (zhucaidan.zhujuewq == 10) {
                        this.zhujue.play(0, true, "wq10pao");
                    }
                    if (zhucaidan.zhujuewq == 11) {
                        this.zhujue.play(0, true, "wq11pao");
                    }
                    if (zhucaidan.zhujuewq == 12) {
                        this.zhujue.play(0, true, "wq12pao");
                    }
                    if (zhucaidan.zhujuewq == 13) {
                        this.zhujue.play(0, true, "wq13pao");
                    }
                    if (zhucaidan.zhujuewq == 14) {
                        this.zhujue.play(0, true, "wq14pao");
                    }
                    if (zhucaidan.zhujuewq == 15) {
                        this.zhujue.play(0, true, "wq15pao");
                    }
                    if (zhucaidan.zhujuewq == 16) {
                        this.zhujue.play(0, true, "wq16pao");
                    }
                    if (zhucaidan.zhujuewq == 17) {
                        this.zhujue.play(0, true, "wq17pao");
                    }
                    if (zhucaidan.zhujuewq == 18) {
                        this.zhujue.play(0, true, "wq18pao");
                    }
                    if (zhucaidan.zhujuewq == 19) {
                        this.zhujue.play(0, true, "wq19pao");
                    }
                    zhucaidan.dz = "pao";
                    this.zuokg = true;
                }
                if (Laya.KeyBoardManager.hasKeyDown(68)) {
                    this.zhujue.scaleX = 1;
                    if (zhucaidan.zhujuewq == 1) {
                        this.zhujue.play(0, true, "wq1pao");
                    }
                    if (zhucaidan.zhujuewq == 2) {
                        this.zhujue.play(0, true, "wq2pao");
                    }
                    if (zhucaidan.zhujuewq == 3) {
                        this.zhujue.play(0, true, "wq3pao");
                    }
                    if (zhucaidan.zhujuewq == 4) {
                        this.zhujue.play(0, true, "wq4pao");
                    }
                    if (zhucaidan.zhujuewq == 5) {
                        this.zhujue.play(0, true, "wq5pao");
                    }
                    if (zhucaidan.zhujuewq == 6) {
                        this.zhujue.play(0, true, "wq6pao");
                    }
                    if (zhucaidan.zhujuewq == 7) {
                        this.zhujue.play(0, true, "wq7pao");
                    }
                    if (zhucaidan.zhujuewq == 8) {
                        this.zhujue.play(0, true, "wq8pao");
                    }
                    if (zhucaidan.zhujuewq == 9) {
                        this.zhujue.play(0, true, "wq9pao");
                    }
                    if (zhucaidan.zhujuewq == 10) {
                        this.zhujue.play(0, true, "wq10pao");
                    }
                    if (zhucaidan.zhujuewq == 11) {
                        this.zhujue.play(0, true, "wq11pao");
                    }
                    if (zhucaidan.zhujuewq == 12) {
                        this.zhujue.play(0, true, "wq12pao");
                    }
                    if (zhucaidan.zhujuewq == 13) {
                        this.zhujue.play(0, true, "wq13pao");
                    }
                    if (zhucaidan.zhujuewq == 14) {
                        this.zhujue.play(0, true, "wq14pao");
                    }
                    if (zhucaidan.zhujuewq == 15) {
                        this.zhujue.play(0, true, "wq15pao");
                    }
                    if (zhucaidan.zhujuewq == 16) {
                        this.zhujue.play(0, true, "wq16pao");
                    }
                    if (zhucaidan.zhujuewq == 17) {
                        this.zhujue.play(0, true, "wq17pao");
                    }
                    if (zhucaidan.zhujuewq == 18) {
                        this.zhujue.play(0, true, "wq18pao");
                    }
                    if (zhucaidan.zhujuewq == 19) {
                        this.zhujue.play(0, true, "wq19pao");
                    }
                    zhucaidan.dz = "pao";
                    this.youkg = true;
                }
                if (Laya.KeyBoardManager.hasKeyDown(75)) {
                    let suiji;
                    suiji = Math.round(Math.random());
                    if (suiji == 0) {
                        this.zhujue.play(0, true, "shanbi1");
                    }
                    if (suiji == 1) {
                        this.zhujue.play(0, true, "shanbi2");
                    }
                    zhucaidan.dz = "shanbi";
                    Laya.SoundManager.playSound("sound/shanbi.wav");
                }
                if (Laya.KeyBoardManager.hasKeyDown(87)) {
                    if (zhucaidan.zhujuewq == 1) {
                        this.zhujue.play(0, true, "wq1tiao");
                    }
                    if (zhucaidan.zhujuewq == 2) {
                        this.zhujue.play(0, true, "wq2tiao");
                    }
                    if (zhucaidan.zhujuewq == 3) {
                        this.zhujue.play(0, true, "wq3tiao");
                    }
                    if (zhucaidan.zhujuewq == 4) {
                        this.zhujue.play(0, true, "wq4tiao");
                    }
                    if (zhucaidan.zhujuewq == 5) {
                        this.zhujue.play(0, true, "wq5tiao");
                    }
                    if (zhucaidan.zhujuewq == 6) {
                        this.zhujue.play(0, true, "wq6tiao");
                    }
                    if (zhucaidan.zhujuewq == 7) {
                        this.zhujue.play(0, true, "wq7tiao");
                    }
                    if (zhucaidan.zhujuewq == 8) {
                        this.zhujue.play(0, true, "wq8tiao");
                    }
                    if (zhucaidan.zhujuewq == 9) {
                        this.zhujue.play(0, true, "wq9tiao");
                    }
                    if (zhucaidan.zhujuewq == 10) {
                        this.zhujue.play(0, true, "wq10tiao");
                    }
                    if (zhucaidan.zhujuewq == 11) {
                        this.zhujue.play(0, true, "wq11tiao");
                    }
                    if (zhucaidan.zhujuewq == 12) {
                        this.zhujue.play(0, true, "wq12tiao");
                    }
                    if (zhucaidan.zhujuewq == 13) {
                        this.zhujue.play(0, true, "wq13tiao");
                    }
                    if (zhucaidan.zhujuewq == 14) {
                        this.zhujue.play(0, true, "wq14tiao");
                    }
                    if (zhucaidan.zhujuewq == 15) {
                        this.zhujue.play(0, true, "wq15tiao");
                    }
                    if (zhucaidan.zhujuewq == 16) {
                        this.zhujue.play(0, true, "wq16tiao");
                    }
                    if (zhucaidan.zhujuewq == 17) {
                        this.zhujue.play(0, true, "wq17tiao");
                    }
                    if (zhucaidan.zhujuewq == 18) {
                        this.zhujue.play(0, true, "wq18tiao");
                    }
                    if (zhucaidan.zhujuewq == 19) {
                        this.zhujue.play(0, true, "wq19tiao");
                    }
                    zhucaidan.dz = "tiao";
                }
                if (Laya.KeyBoardManager.hasKeyDown(74)) {
                    this.pugonghanshu();
                }
                if (Laya.KeyBoardManager.hasKeyDown(85)) {
                    this.ji1hanshu();
                }
                if (Laya.KeyBoardManager.hasKeyDown(73)) {
                    this.ji2hanshu();
                }
                if (Laya.KeyBoardManager.hasKeyDown(79)) {
                    this.ji3hanshu();
                }
            }
            if (zhucaidan.dz == "pao") {
                if (Laya.KeyBoardManager.hasKeyDown(75)) {
                    let suiji;
                    suiji = Math.round(Math.random());
                    if (suiji == 0) {
                        this.zhujue.play(0, true, "shanbi1");
                    }
                    if (suiji == 1) {
                        this.zhujue.play(0, true, "shanbi2");
                    }
                    Laya.SoundManager.playSound("sound/shanbi.wav");
                    zhucaidan.dz = "shanbi";
                }
                if (Laya.KeyBoardManager.hasKeyDown(87)) {
                    if (zhucaidan.zhujuewq == 1) {
                        this.zhujue.play(0, true, "wq1tiao");
                    }
                    if (zhucaidan.zhujuewq == 2) {
                        this.zhujue.play(0, true, "wq2tiao");
                    }
                    if (zhucaidan.zhujuewq == 3) {
                        this.zhujue.play(0, true, "wq3tiao");
                    }
                    if (zhucaidan.zhujuewq == 4) {
                        this.zhujue.play(0, true, "wq4tiao");
                    }
                    if (zhucaidan.zhujuewq == 5) {
                        this.zhujue.play(0, true, "wq5tiao");
                    }
                    if (zhucaidan.zhujuewq == 6) {
                        this.zhujue.play(0, true, "wq6tiao");
                    }
                    if (zhucaidan.zhujuewq == 7) {
                        this.zhujue.play(0, true, "wq7tiao");
                    }
                    if (zhucaidan.zhujuewq == 8) {
                        this.zhujue.play(0, true, "wq8tiao");
                    }
                    if (zhucaidan.zhujuewq == 9) {
                        this.zhujue.play(0, true, "wq9tiao");
                    }
                    if (zhucaidan.zhujuewq == 10) {
                        this.zhujue.play(0, true, "wq10tiao");
                    }
                    if (zhucaidan.zhujuewq == 11) {
                        this.zhujue.play(0, true, "wq11tiao");
                    }
                    if (zhucaidan.zhujuewq == 12) {
                        this.zhujue.play(0, true, "wq12tiao");
                    }
                    if (zhucaidan.zhujuewq == 13) {
                        this.zhujue.play(0, true, "wq13tiao");
                    }
                    if (zhucaidan.zhujuewq == 14) {
                        this.zhujue.play(0, true, "wq14tiao");
                    }
                    if (zhucaidan.zhujuewq == 15) {
                        this.zhujue.play(0, true, "wq15tiao");
                    }
                    if (zhucaidan.zhujuewq == 16) {
                        this.zhujue.play(0, true, "wq16tiao");
                    }
                    if (zhucaidan.zhujuewq == 17) {
                        this.zhujue.play(0, true, "wq17tiao");
                    }
                    if (zhucaidan.zhujuewq == 18) {
                        this.zhujue.play(0, true, "wq18tiao");
                    }
                    if (zhucaidan.zhujuewq == 19) {
                        this.zhujue.play(0, true, "wq19tiao");
                    }
                    zhucaidan.dz = "tiao";
                }
                if (Laya.KeyBoardManager.hasKeyDown(74)) {
                    this.pugonghanshu();
                }
                if (Laya.KeyBoardManager.hasKeyDown(85)) {
                    this.ji1hanshu();
                }
                if (Laya.KeyBoardManager.hasKeyDown(73)) {
                    this.ji2hanshu();
                }
                if (Laya.KeyBoardManager.hasKeyDown(79)) {
                    this.ji3hanshu();
                }
            }
            if (zhucaidan.dz == "shanbi") {
                if (this.zhujue.scaleX == 1) {
                    this.zhujue.x += 15;
                    if (this.ditu.x != -1488) {
                        if (this.zhujue.x >= 400) {
                            this.zhujue.x = 400;
                            this.ditu.x -= 15;
                        }
                    }
                }
                if (this.zhujue.scaleX == -1) {
                    this.zhujue.x -= 12;
                    if (this.ditu.x != 0) {
                        if (this.zhujue.x <= 400) {
                            this.zhujue.x = 400;
                            this.ditu.x += 12;
                        }
                    }
                }
            }
            if (zhucaidan.dz == "tiao") {
                this.tiaospeed -= 2;
                this.zhujue.y -= this.tiaospeed;
                if (Laya.KeyBoardManager.hasKeyDown(65)) {
                    this.zuokg = true;
                }
                if (Laya.KeyBoardManager.hasKeyDown(68)) {
                    this.youkg = true;
                }
                if (this.tiaospeed <= 0) {
                    if (zhucaidan.zhujuewq == 1) {
                        this.zhujue.play(0, true, "wq1luo");
                    }
                    if (zhucaidan.zhujuewq == 2) {
                        this.zhujue.play(0, true, "wq2luo");
                    }
                    if (zhucaidan.zhujuewq == 3) {
                        this.zhujue.play(0, true, "wq3luo");
                    }
                    if (zhucaidan.zhujuewq == 4) {
                        this.zhujue.play(0, true, "wq4luo");
                    }
                    if (zhucaidan.zhujuewq == 5) {
                        this.zhujue.play(0, true, "wq5luo");
                    }
                    if (zhucaidan.zhujuewq == 6) {
                        this.zhujue.play(0, true, "wq6luo");
                    }
                    if (zhucaidan.zhujuewq == 7) {
                        this.zhujue.play(0, true, "wq7luo");
                    }
                    if (zhucaidan.zhujuewq == 8) {
                        this.zhujue.play(0, true, "wq8luo");
                    }
                    if (zhucaidan.zhujuewq == 9) {
                        this.zhujue.play(0, true, "wq9luo");
                    }
                    if (zhucaidan.zhujuewq == 10) {
                        this.zhujue.play(0, true, "wq10luo");
                    }
                    if (zhucaidan.zhujuewq == 11) {
                        this.zhujue.play(0, true, "wq11luo");
                    }
                    if (zhucaidan.zhujuewq == 12) {
                        this.zhujue.play(0, true, "wq12luo");
                    }
                    if (zhucaidan.zhujuewq == 13) {
                        this.zhujue.play(0, true, "wq13luo");
                    }
                    if (zhucaidan.zhujuewq == 14) {
                        this.zhujue.play(0, true, "wq14luo");
                    }
                    if (zhucaidan.zhujuewq == 15) {
                        this.zhujue.play(0, true, "wq15luo");
                    }
                    if (zhucaidan.zhujuewq == 16) {
                        this.zhujue.play(0, true, "wq16luo");
                    }
                    if (zhucaidan.zhujuewq == 17) {
                        this.zhujue.play(0, true, "wq17luo");
                    }
                    if (zhucaidan.zhujuewq == 18) {
                        this.zhujue.play(0, true, "wq18luo");
                    }
                    if (zhucaidan.zhujuewq == 19) {
                        this.zhujue.play(0, true, "wq19luo");
                    }
                    zhucaidan.dz = "luo";
                }
                if (Laya.KeyBoardManager.hasKeyDown(74)) {
                    this.pugonghanshu();
                }
                if (Laya.KeyBoardManager.hasKeyDown(85)) {
                    this.ji1hanshu();
                }
                if (Laya.KeyBoardManager.hasKeyDown(73)) {
                    this.ji2hanshu();
                }
                if (Laya.KeyBoardManager.hasKeyDown(79)) {
                    this.ji3hanshu();
                }
            }
            if (zhucaidan.dz == "luo") {
                this.luospeed += 2;
                this.zhujue.y += this.luospeed;
                if (Laya.KeyBoardManager.hasKeyDown(65)) {
                    this.zuokg = true;
                }
                if (Laya.KeyBoardManager.hasKeyDown(68)) {
                    this.youkg = true;
                }
                if (this.zhujue.y >= 430) {
                    this.zhujue.y = 430;
                    if (zhucaidan.zhujuewq == 1) {
                        this.zhujue.play(0, true, "wq1luodi");
                    }
                    if (zhucaidan.zhujuewq == 2) {
                        this.zhujue.play(0, true, "wq2luodi");
                    }
                    if (zhucaidan.zhujuewq == 3) {
                        this.zhujue.play(0, true, "wq3luodi");
                    }
                    if (zhucaidan.zhujuewq == 4) {
                        this.zhujue.play(0, true, "wq4luodi");
                    }
                    if (zhucaidan.zhujuewq == 5) {
                        this.zhujue.play(0, true, "wq5luodi");
                    }
                    if (zhucaidan.zhujuewq == 6) {
                        this.zhujue.play(0, true, "wq6luodi");
                    }
                    if (zhucaidan.zhujuewq == 7) {
                        this.zhujue.play(0, true, "wq7luodi");
                    }
                    if (zhucaidan.zhujuewq == 8) {
                        this.zhujue.play(0, true, "wq8luodi");
                    }
                    if (zhucaidan.zhujuewq == 9) {
                        this.zhujue.play(0, true, "wq9luodi");
                    }
                    if (zhucaidan.zhujuewq == 10) {
                        this.zhujue.play(0, true, "wq10luodi");
                    }
                    if (zhucaidan.zhujuewq == 11) {
                        this.zhujue.play(0, true, "wq11luodi");
                    }
                    if (zhucaidan.zhujuewq == 12) {
                        this.zhujue.play(0, true, "wq12luodi");
                    }
                    if (zhucaidan.zhujuewq == 13) {
                        this.zhujue.play(0, true, "wq13luodi");
                    }
                    if (zhucaidan.zhujuewq == 14) {
                        this.zhujue.play(0, true, "wq14luodi");
                    }
                    if (zhucaidan.zhujuewq == 15) {
                        this.zhujue.play(0, true, "wq15luodi");
                    }
                    if (zhucaidan.zhujuewq == 16) {
                        this.zhujue.play(0, true, "wq16luodi");
                    }
                    if (zhucaidan.zhujuewq == 17) {
                        this.zhujue.play(0, true, "wq17luodi");
                    }
                    if (zhucaidan.zhujuewq == 18) {
                        this.zhujue.play(0, true, "wq18luodi");
                    }
                    if (zhucaidan.zhujuewq == 19) {
                        this.zhujue.play(0, true, "wq19luodi");
                    }
                    zhucaidan.dz = "luodi";
                }
                if (Laya.KeyBoardManager.hasKeyDown(74)) {
                    this.pugonghanshu();
                }
                if (Laya.KeyBoardManager.hasKeyDown(85)) {
                    this.ji1hanshu();
                }
                if (Laya.KeyBoardManager.hasKeyDown(73)) {
                    this.ji2hanshu();
                }
                if (Laya.KeyBoardManager.hasKeyDown(79)) {
                    this.ji3hanshu();
                }
            }
            if (zhucaidan.dz == "luodi") {
                this.zuokg = false;
                this.youkg = false;
            }
            if (this.zuokg == true) {
                this.zhujue.x -= this.speed;
                if (this.ditu.x != 0) {
                    if (this.zhujue.x <= 400) {
                        this.zhujue.x = 400;
                        this.ditu.x += this.speed;
                    }
                }
            }
            if (this.youkg == true) {
                this.zhujue.x += this.speed;
                if (this.ditu.x != -1488) {
                    if (this.zhujue.x >= 400) {
                        this.zhujue.x = 400;
                        this.ditu.x -= this.speed;
                    }
                }
            }
            if (this.ditu.x >= 0) {
                this.ditu.x = 0;
            }
            if (this.ditu.x <= -1488) {
                this.ditu.x = -1488;
            }
            if (this.zhujue.x <= 10) {
                this.zhujue.x = 10;
            }
            if (this.zhujue.x >= 790) {
                this.zhujue.x = 790;
            }
            if (zhucaidan.dz == "pugong") {
                this.zuokg = false;
                this.youkg = false;
                if (zhucaidan.zhujuewq == 1) {
                    if (this.zhujue.index == 13 || this.zhujue.index == 29) {
                        if (this.zhujue.y == 430) {
                            this.huidaozhanli();
                        }
                        if (this.zhujue.y < 430) {
                            this.xialuo();
                        }
                    }
                    if (this.zhujue.index >= 10 && this.zhujue.index <= 13) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(14, true, "wq1pugong");
                        }
                    }
                    if (this.zhujue.index >= 25 && this.zhujue.index <= 29) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(30, true, "wq1pugong");
                        }
                    }
                    if (this.zhujue.index == 4 || this.zhujue.index == 20) {
                        Laya.SoundManager.playSound("sound/hui1.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq1sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh1.create, this.hh1);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 36) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq1sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh1.create, this.hh1);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 2) {
                    if (this.zhujue.index == 14 || this.zhujue.index == 29) {
                        if (this.zhujue.y == 430) {
                            this.huidaozhanli();
                        }
                        if (this.zhujue.y < 430) {
                            this.xialuo();
                        }
                    }
                    if (this.zhujue.index >= 11 && this.zhujue.index <= 14) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(15, true, "wq2pugong");
                        }
                    }
                    if (this.zhujue.index >= 25 && this.zhujue.index <= 29) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(30, true, "wq2pugong");
                        }
                    }
                    if (this.zhujue.index == 5 || this.zhujue.index == 20) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq2sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 34) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq2sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 3) {
                    if (this.zhujue.index == 13 || this.zhujue.index == 28) {
                        if (this.zhujue.y == 430) {
                            this.huidaozhanli();
                        }
                        if (this.zhujue.y < 430) {
                            this.xialuo();
                        }
                    }
                    if (this.zhujue.index >= 10 && this.zhujue.index <= 13) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(14, true, "wq3pugong");
                        }
                    }
                    if (this.zhujue.index >= 25 && this.zhujue.index <= 28) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(29, true, "wq3pugong");
                        }
                    }
                    if (this.zhujue.index == 5 || this.zhujue.index == 20 || this.zhujue.index == 34) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq3sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 43) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq3sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 4) {
                    if (this.zhujue.index == 13 || this.zhujue.index == 27) {
                        if (this.zhujue.y == 430) {
                            this.huidaozhanli();
                        }
                        if (this.zhujue.y < 430) {
                            this.xialuo();
                        }
                    }
                    if (this.zhujue.index >= 10 && this.zhujue.index <= 13) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(14, true, "wq4pugong");
                        }
                    }
                    if (this.zhujue.index >= 24 && this.zhujue.index <= 27) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(28, true, "wq4pugong");
                        }
                    }
                    if (this.zhujue.index == 5 || this.zhujue.index == 19) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq4sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh5.create, this.hh5);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 33) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq4sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh5.create, this.hh5);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 5) {
                    if (this.zhujue.index == 13 || this.zhujue.index == 26) {
                        if (this.zhujue.y == 430) {
                            this.huidaozhanli();
                        }
                        if (this.zhujue.y < 430) {
                            this.xialuo();
                        }
                    }
                    if (this.zhujue.index >= 10 && this.zhujue.index <= 13) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(14, true, "wq5pugong");
                        }
                    }
                    if (this.zhujue.index >= 23 && this.zhujue.index <= 26) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(27, true, "wq5pugong");
                        }
                    }
                    if (this.zhujue.index == 6 || this.zhujue.index == 19) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq5sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh6.create, this.hh6);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 33) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq5sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh6.create, this.hh6);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 6) {
                    if (this.zhujue.index == 12 || this.zhujue.index == 36) {
                        if (this.zhujue.y == 430) {
                            this.huidaozhanli();
                        }
                        if (this.zhujue.y < 430) {
                            this.xialuo();
                        }
                    }
                    if (this.zhujue.index >= 9 && this.zhujue.index <= 12) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(13, true, "wq6pugong");
                        }
                    }
                    if (this.zhujue.index >= 33 && this.zhujue.index <= 36) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(37, true, "wq6pugong");
                        }
                    }
                    if (this.zhujue.index == 4 || this.zhujue.index == 17 || this.zhujue.index == 23 || this.zhujue.index == 29) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq6sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh7.create, this.hh7);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 42) {
                        Laya.SoundManager.playSound("sound/pi1.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy4.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq6sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh7.create, this.hh7);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index >= 42 && this.zhujue.index <= 54) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x += 20;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 20;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x -= 20;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 20;
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 7) {
                    if (this.zhujue.index == 14 || this.zhujue.index == 28) {
                        if (this.zhujue.y == 430) {
                            this.huidaozhanli();
                        }
                        if (this.zhujue.y < 430) {
                            this.xialuo();
                        }
                    }
                    if (this.zhujue.index >= 11 && this.zhujue.index <= 14) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(15, true, "wq7pugong");
                        }
                    }
                    if (this.zhujue.index >= 25 && this.zhujue.index <= 28) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(29, true, "wq7pugong");
                        }
                    }
                    if (this.zhujue.index == 5 || this.zhujue.index == 20) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq7sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh8.create, this.hh8);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.sy2hanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 34) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy4.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq7sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh8.create, this.hh8);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.sy2hanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 8) {
                    if (this.zhujue.index == 11 || this.zhujue.index == 24) {
                        if (this.zhujue.y == 430) {
                            this.huidaozhanli();
                        }
                        if (this.zhujue.y < 430) {
                            this.xialuo();
                        }
                    }
                    if (this.zhujue.index >= 9 && this.zhujue.index <= 11) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(12, true, "wq8pugong");
                        }
                    }
                    if (this.zhujue.index >= 21 && this.zhujue.index <= 24) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(25, true, "wq8pugong");
                        }
                    }
                    if (this.zhujue.index == 4 || this.zhujue.index == 17) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq8sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 29) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq8sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 9) {
                    if (this.zhujue.index == 12 || this.zhujue.index == 25) {
                        if (this.zhujue.y == 430) {
                            this.huidaozhanli();
                        }
                        if (this.zhujue.y < 430) {
                            this.xialuo();
                        }
                    }
                    if (this.zhujue.index >= 9 && this.zhujue.index <= 12) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(13, true, "wq9pugong");
                        }
                    }
                    if (this.zhujue.index >= 21 && this.zhujue.index <= 25) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(26, true, "wq9pugong");
                        }
                    }
                    if (this.zhujue.index == 5 || this.zhujue.index == 18) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq9sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 31) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq9sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 10) {
                    if (this.zhujue.index == 0) {
                        Laya.SoundManager.playSound("sound/bingjian.wav");
                    }
                    if (this.zhujue.index == 6) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq10sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 8) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy4.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq10sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 10) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy6.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq10sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 11) {
                    if (this.zhujue.index == 16 || this.zhujue.index == 33) {
                        if (this.zhujue.y == 430) {
                            this.huidaozhanli();
                        }
                        if (this.zhujue.y < 430) {
                            this.xialuo();
                        }
                    }
                    if (this.zhujue.index >= 13 && this.zhujue.index <= 16) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(17, true, "wq11pugong");
                        }
                    }
                    if (this.zhujue.index >= 30 && this.zhujue.index <= 33) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(34, true, "wq11pugong");
                        }
                    }
                    if (this.zhujue.index >= 34 && this.zhujue.index <= 40) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x += 6;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 6;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x -= 6;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 6;
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 6) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq11sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 41 || this.zhujue.index == 43 || this.zhujue.index == 23) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy10.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq11sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 12) {
                    if (this.zhujue.index == 14) {
                        if (this.zhujue.y == 430) {
                            this.huidaozhanli();
                        }
                        if (this.zhujue.y < 430) {
                            this.xialuo();
                        }
                    }
                    if (this.zhujue.index >= 11 && this.zhujue.index <= 14) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(15, true, "wq12pugong");
                        }
                    }
                    if (this.zhujue.index == 5) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq12sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 20) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq12sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 13) {
                    if (this.zhujue.index == 13 || this.zhujue.index == 28) {
                        if (this.zhujue.y == 430) {
                            this.huidaozhanli();
                        }
                        if (this.zhujue.y < 430) {
                            this.xialuo();
                        }
                    }
                    if (this.zhujue.index >= 9 && this.zhujue.index <= 13) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(14, true, "wq13pugong");
                        }
                    }
                    if (this.zhujue.index >= 25 && this.zhujue.index <= 28) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(29, true, "wq13pugong");
                        }
                    }
                    if (this.zhujue.index == 5 || this.zhujue.index == 19) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq13sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh7.create, this.hh7);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 34) {
                        Laya.SoundManager.playSound("sound/pi1.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy4.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq13sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh7.create, this.hh7);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 14) {
                    if (this.zhujue.index == 15 || this.zhujue.index == 30) {
                        if (this.zhujue.y == 430) {
                            this.huidaozhanli();
                        }
                        if (this.zhujue.y < 430) {
                            this.xialuo();
                        }
                    }
                    if (this.zhujue.index >= 11 && this.zhujue.index <= 15) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(16, true, "wq14pugong");
                        }
                    }
                    if (this.zhujue.index >= 27 && this.zhujue.index <= 30) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(31, true, "wq14pugong");
                        }
                    }
                    if (this.zhujue.index == 6 || this.zhujue.index == 22) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq14sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 37) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq14sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 15) {
                    if (this.zhujue.index == 15 || this.zhujue.index == 28) {
                        if (this.zhujue.y == 430) {
                            this.huidaozhanli();
                        }
                        if (this.zhujue.y < 430) {
                            this.xialuo();
                        }
                    }
                    if (this.zhujue.index >= 11 && this.zhujue.index <= 15) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(16, true, "wq15pugong");
                        }
                    }
                    if (this.zhujue.index >= 25 && this.zhujue.index <= 28) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(29, true, "wq15pugong");
                        }
                    }
                    if (this.zhujue.index == 6 || this.zhujue.index == 20) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq15sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 34) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq15sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 16) {
                    if (this.zhujue.index == 16 || this.zhujue.index == 34) {
                        if (this.zhujue.y == 430) {
                            this.huidaozhanli();
                        }
                        if (this.zhujue.y < 430) {
                            this.xialuo();
                        }
                    }
                    if (this.zhujue.index >= 12 && this.zhujue.index <= 16) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(17, true, "wq16pugong");
                        }
                    }
                    if (this.zhujue.index >= 30 && this.zhujue.index <= 34) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(35, true, "wq16pugong");
                        }
                    }
                    if (this.zhujue.index >= 54 && this.zhujue.index <= 63) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x += 10;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 10;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x -= 10;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 10;
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 6 || this.zhujue.index == 23) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq16sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 41) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq16sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 54) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy13.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq16sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 17) {
                    if (this.zhujue.index == 13 || this.zhujue.index == 26) {
                        if (this.zhujue.y == 430) {
                            this.huidaozhanli();
                        }
                        if (this.zhujue.y < 430) {
                            this.xialuo();
                        }
                    }
                    if (this.zhujue.index >= 10 && this.zhujue.index <= 13) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(14, true, "wq17pugong");
                        }
                    }
                    if (this.zhujue.index >= 23 && this.zhujue.index <= 26) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(27, true, "wq17pugong");
                        }
                    }
                    if (this.zhujue.index == 4 || this.zhujue.index == 18) {
                        Laya.SoundManager.playSound("sound/hui2.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq17sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 31) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq17sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 54) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy13.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq17sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 18) {
                    if (this.zhujue.index == 15 || this.zhujue.index == 28) {
                        if (this.zhujue.y == 430) {
                            this.huidaozhanli();
                        }
                        if (this.zhujue.y < 430) {
                            this.xialuo();
                        }
                    }
                    if (this.zhujue.index >= 12 && this.zhujue.index <= 15) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(16, true, "wq18pugong");
                        }
                    }
                    if (this.zhujue.index >= 25 && this.zhujue.index <= 28) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.zhujue.play(29, true, "wq18pugong");
                        }
                    }
                    if (this.zhujue.index == 6 || this.zhujue.index == 20) {
                        Laya.SoundManager.playSound("sound/guangjianhui.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq18sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh6.create, this.hh6);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    Laya.SoundManager.playSound("sound/guangjian.wav");
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 34) {
                        Laya.SoundManager.playSound("sound/guangjianhui.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq18sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh6.create, this.hh6);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    Laya.SoundManager.playSound("sound/guangjian.wav");
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 19) {
                    if (this.zhujue.index == 5) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq19sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh8.create, this.hh8);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.sy2hanshu();
                                }
                            }
                        }
                    }
                }
            }
            if (zhucaidan.dz == "ji1") {
                this.zuokg = false;
                this.youkg = false;
                if (zhucaidan.zhujuewq == 1) {
                    if (this.zhujue.index >= 5 && this.zhujue.index <= 14) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x += 30;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 30;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x -= 30;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 30;
                                }
                            }
                        }
                    }
                    if (this.zhujue.index >= 16 && this.zhujue.index <= 25) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x -= 30;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 30;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x += 30;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 30;
                                }
                            }
                        }
                    }
                    if (this.zhujue.index >= 21) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.pugonghanshu();
                        }
                        if (Laya.KeyBoardManager.hasKeyDown(85)) {
                            this.ji1hanshu();
                        }
                        if (Laya.KeyBoardManager.hasKeyDown(73)) {
                            this.ji2hanshu();
                        }
                        if (Laya.KeyBoardManager.hasKeyDown(79)) {
                            this.ji3hanshu();
                        }
                    }
                    if (this.zhujue.index == 5 || this.zhujue.index == 8) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq1sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh1.create, this.hh1);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 16 || this.zhujue.index == 19) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy3.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq1sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh1.create, this.hh1);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 5) {
                        Laya.SoundManager.playSound("sound/pi1.wav");
                    }
                    if (this.zhujue.index == 16) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                    }
                }
                if (zhucaidan.zhujuewq == 2) {
                    if (this.zhujue.index == 2 || this.zhujue.index == 6 || this.zhujue.index == 10 || this.zhujue.index == 14 || this.zhujue.index == 18 || this.zhujue.index == 22 || this.zhujue.index == 26 || this.zhujue.index == 30 || this.zhujue.index == 34 || this.zhujue.index == 38 || this.zhujue.index == 42 || this.zhujue.index == 46) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy5.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq2sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                        Laya.SoundManager.playSound("sound/hui3.wav");
                    }
                    if (this.zhujue.index >= 25) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.pugonghanshu();
                        }
                        if (Laya.KeyBoardManager.hasKeyDown(85)) {
                            this.ji1hanshu();
                        }
                        if (Laya.KeyBoardManager.hasKeyDown(73)) {
                            this.ji2hanshu();
                        }
                        if (Laya.KeyBoardManager.hasKeyDown(79)) {
                            this.ji3hanshu();
                        }
                    }
                    if (Laya.KeyBoardManager.hasKeyDown(65)) {
                        this.zuokg = true;
                    }
                    if (Laya.KeyBoardManager.hasKeyDown(68)) {
                        this.youkg = true;
                    }
                }
                if (zhucaidan.zhujuewq == 3) {
                    if (this.zhujue.index == 5) {
                        Laya.SoundManager.playSound("sound/pi1.wav");
                    }
                    if (this.zhujue.index >= 6 && this.zhujue.index <= 15) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x += 30;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 30;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x -= 30;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 30;
                                }
                            }
                        }
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq3sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                    this.zhujue.play(16, true, "wq3ji1");
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 19 || this.zhujue.index == 29 || this.zhujue.index == 37) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq3sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 46) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq3sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 4) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 14;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.index == 7) {
                        Laya.SoundManager.playSound("sound/zadi.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq4sh + Math.round(Math.random() * 300);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh5.create, this.hh5);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.sy2hanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 5) {
                    if (this.zhujue.index >= 6 && this.zhujue.index <= 15) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x += 20;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 20;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x -= 20;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 20;
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 5) {
                        Laya.SoundManager.playSound("sound/pi1.wav");
                    }
                    if (this.zhujue.index == 6 || this.zhujue.index == 8 || this.zhujue.index == 11) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy5.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq5sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh6.create, this.hh6);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 15) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy5.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq5sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh6.create, this.hh6);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 6) {
                    if (this.zhujue.index == 4 || this.zhujue.index == 9 || this.zhujue.index == 14) {
                        Laya.SoundManager.playSound("sound/pi1.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq6sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh7.create, this.hh7);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 19) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq6sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh7.create, this.hh7);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 7) {
                    if (this.zhujue.index == 4 || this.zhujue.index == 8 || this.zhujue.index == 12 || this.zhujue.index == 16 || this.zhujue.index == 20 || this.zhujue.index == 24) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy4.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq7sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh8.create, this.hh8);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.sy2hanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 28) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy4.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq7sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh8.create, this.hh8);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.sy2hanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 8) {
                    if (this.zhujue.index >= 0 && this.zhujue.index <= 8) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x -= 12;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 12;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x += 12;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 12;
                                }
                            }
                        }
                    }
                    if (this.zhujue.index >= 10 && this.zhujue.index <= 16) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x += 40;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 40;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x -= 40;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 40;
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 11) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                    }
                    if (this.zhujue.index == 11 || this.zhujue.index == 13 || this.zhujue.index == 16) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy5.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq8sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 9) {
                    if (this.zhujue.index == 2 || this.zhujue.index == 5 || this.zhujue.index == 8 || this.zhujue.index == 11 || this.zhujue.index == 15 || this.zhujue.index == 18 || this.zhujue.index == 21 || this.zhujue.index == 25 || this.zhujue.index == 28) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq9sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 10) {
                    if (this.zhujue.index == 2) {
                        Laya.SoundManager.playSound("sound/bingjian.wav");
                    }
                    if (this.zhujue.index == 6) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq10sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 8) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy4.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq10sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 10) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy11.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq10sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 11) {
                    if (this.zhujue.index >= 0 && this.zhujue.index <= 10) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x -= 20;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 20;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x += 20;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 20;
                                }
                            }
                        }
                    }
                    if (this.zhujue.index >= 11 && this.zhujue.index <= 18) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x += 40;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 40;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x -= 40;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 40;
                                }
                            }
                        }
                    }
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 10;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.index == 10 || this.zhujue.index == 0) {
                        Laya.SoundManager.playSound("sound/jianqi.wav");
                    }
                    if (this.zhujue.index == 1 || this.zhujue.index == 4 || this.zhujue.index == 7) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy4.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq11sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 11 || this.zhujue.index == 14 || this.zhujue.index == 17) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy7.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq11sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 12) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 10;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (Laya.KeyBoardManager.hasKeyDown(65)) {
                        this.zuokg = true;
                    }
                    if (Laya.KeyBoardManager.hasKeyDown(68)) {
                        this.youkg = true;
                    }
                    if (this.zhujue.index == 2 || this.zhujue.index == 5 || this.zhujue.index == 8 || this.zhujue.index == 11 || this.zhujue.index == 15 || this.zhujue.index == 18 || this.zhujue.index == 21 || this.zhujue.index == 25 || this.zhujue.index == 28 || this.zhujue.index == 32 || this.zhujue.index == 36 || this.zhujue.index == 40 || this.zhujue.index == 44 || this.zhujue.index == 48 || this.zhujue.index == 52 || this.zhujue.index == 56 || this.zhujue.index == 60 || this.zhujue.index == 64 || this.zhujue.index == 68) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy8.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq12sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 13) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 14;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.index >= 13 && this.zhujue.index <= 80) {
                        if (Laya.KeyBoardManager.hasKeyDown(65)) {
                            this.zuokg = true;
                        }
                        if (Laya.KeyBoardManager.hasKeyDown(68)) {
                            this.youkg = true;
                        }
                        if (Laya.KeyBoardManager.hasKeyDown(74) || Laya.KeyBoardManager.hasKeyDown(85)) {
                            this.zhujue.play(81);
                        }
                    }
                    if (this.zhujue.index >= 81) {
                        if (this.jispeed > 0) {
                            this.jispeed--;
                        }
                        this.zhujue.y -= this.jispeed;
                    }
                    if (this.zhujue.index == 81 || this.zhujue.index == 83) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy8.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq13sh + Math.round(Math.random() * 150);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh7.create, this.hh7);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 6) {
                        Laya.SoundManager.playSound("sound/zuandi.wav");
                    }
                    if (this.zhujue.index == 81) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                    }
                }
                if (zhucaidan.zhujuewq == 14) {
                    if (this.zhujue.index == 6 || this.zhujue.index == 10 || this.zhujue.index == 14 || this.zhujue.index == 18 || this.zhujue.index == 22 || this.zhujue.index == 26) {
                        Laya.SoundManager.playSound("sound/hui1.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq14sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 30) {
                        Laya.SoundManager.playSound("sound/hui1.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq14sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 15) {
                    if (this.zhujue.index == 5 || this.zhujue.index == 16) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq15sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 29) {
                        Laya.SoundManager.playSound("sound/huoyan.wav");
                    }
                    if (this.zhujue.index == 29 || this.zhujue.index == 31 || this.zhujue.index == 33) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq15sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    Laya.SoundManager.playSound("sound/huoquan.wav");
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 35) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq15sh + Math.round(Math.random() * 60);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    Laya.SoundManager.playSound("sound/huoquan.wav");
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 16) {
                    if (this.zhujue.index == 4 || this.zhujue.index == 8 || this.zhujue.index == 12 || this.zhujue.index == 16 || this.zhujue.index == 20 || this.zhujue.index == 24 || this.zhujue.index == 28 || this.zhujue.index == 32 || this.zhujue.index == 36 || this.zhujue.index == 40 || this.zhujue.index == 36 || this.zhujue.index == 40 || this.zhujue.index == 44 || this.zhujue.index == 48) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy11.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq16sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 17) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 15;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.index == 7 || this.zhujue.index == 10 || this.zhujue.index == 13 || this.zhujue.index == 16) {
                        Laya.SoundManager.playSound("sound/dian.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy4.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq17sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 20) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy4.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq17sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 18) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 15;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.index == 6) {
                        Laya.SoundManager.playSound("sound/jiguang.wav");
                    }
                    if (this.zhujue.index == 7 || this.zhujue.index == 10 || this.zhujue.index == 13 || this.zhujue.index == 16 || this.zhujue.index == 20 || this.zhujue.index == 24 || this.zhujue.index == 28 || this.zhujue.index == 32) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy14.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq18sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh6.create, this.hh6);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.sy2hanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 34) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy14.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq18sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh6.create, this.hh6);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.sy2hanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 19) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 15;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.index == 1) {
                        Laya.SoundManager.playSound("sound/huoyan.wav");
                    }
                    if (this.zhujue.index == 1 || this.zhujue.index == 3 || this.zhujue.index == 5) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy12.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq19sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh8.create, this.hh8);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    Laya.SoundManager.playSound("sound/huoquan.wav");
                                }
                            }
                        }
                    }
                }
            }
            if (zhucaidan.dz == "ji2") {
                this.zuokg = false;
                this.youkg = false;
                if (zhucaidan.zhujuewq == 1) {
                    if (this.zhujue.index >= 70) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.pugonghanshu();
                        }
                        if (Laya.KeyBoardManager.hasKeyDown(85)) {
                            this.ji1hanshu();
                        }
                        if (Laya.KeyBoardManager.hasKeyDown(73)) {
                            this.ji2hanshu();
                        }
                        if (Laya.KeyBoardManager.hasKeyDown(79)) {
                            this.ji3hanshu();
                        }
                    }
                    if (this.zhujue.index == 4 || this.zhujue.index == 8 || this.zhujue.index == 12 || this.zhujue.index == 16 || this.zhujue.index == 20 || this.zhujue.index == 24 || this.zhujue.index == 28 || this.zhujue.index == 32 || this.zhujue.index == 36 || this.zhujue.index == 40 || this.zhujue.index == 44 || this.zhujue.index == 48 || this.zhujue.index == 52 || this.zhujue.index == 56 || this.zhujue.index == 60 || this.zhujue.index == 65 || this.zhujue.index == 70) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq1sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh1.create, this.hh1);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                        Laya.SoundManager.playSound("sound/hui3.wav");
                    }
                    if (this.zhujue.index == 74) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq1sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh1.create, this.hh1);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 2) {
                    if (this.zhujue.index >= 40) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.pugonghanshu();
                        }
                        if (Laya.KeyBoardManager.hasKeyDown(85)) {
                            this.ji1hanshu();
                        }
                        if (Laya.KeyBoardManager.hasKeyDown(73)) {
                            this.ji2hanshu();
                        }
                        if (Laya.KeyBoardManager.hasKeyDown(79)) {
                            this.ji3hanshu();
                        }
                    }
                    if (this.zhujue.index == 4 || this.zhujue.index == 8 || this.zhujue.index == 12 || this.zhujue.index == 16 || this.zhujue.index == 20 || this.zhujue.index == 24 || this.zhujue.index == 28 || this.zhujue.index == 32 || this.zhujue.index == 36) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq2sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                        Laya.SoundManager.playSound("sound/hui1.wav");
                    }
                    if (this.zhujue.index == 38) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq2sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 3) {
                    if (this.zhujue.index == 5) {
                        Laya.SoundManager.playSound("sound/pi1.wav");
                    }
                    if (this.zhujue.index >= 5 && this.zhujue.index <= 15) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x += 30;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 30;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x -= 30;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 30;
                                }
                            }
                        }
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq3sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                    this.zhujue.play(16, true, "wq3ji2");
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 16) {
                        Laya.SoundManager.playSound("sound/huo.wav");
                    }
                    if (this.zhujue.index == 17 || this.zhujue.index == 22 || this.zhujue.index == 26 || this.zhujue.index == 30) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy4.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq3sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh4.create, this.hh4);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.sy2hanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 35) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy4.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq3sh + Math.round(Math.random() * 60);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh4.create, this.hh4);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.sy2hanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 4) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 8;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.scaleX == 1) {
                        this.zhujue.x += 6;
                        if (this.ditu.x != -1488) {
                            if (this.zhujue.x >= 400) {
                                this.zhujue.x = 400;
                                this.ditu.x -= 6;
                            }
                        }
                    }
                    if (this.zhujue.scaleX == -1) {
                        this.zhujue.x -= 6;
                        if (this.ditu.x != 0) {
                            if (this.zhujue.x <= 400) {
                                this.zhujue.x = 400;
                                this.ditu.x += 6;
                            }
                        }
                    }
                    if (this.zhujue.index == 11) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                    }
                    if (this.zhujue.index == 11 || this.zhujue.index == 14 || this.zhujue.index == 16 || this.zhujue.index == 18) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy10.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq4sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 20) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy10.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq4sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 5) {
                    if (this.zhujue.index == 1) {
                        Laya.SoundManager.playSound("sound/feng.wav");
                    }
                    if (this.zhujue.index == 2 || this.zhujue.index == 6 || this.zhujue.index == 10 || this.zhujue.index == 14 || this.zhujue.index == 18 || this.zhujue.index == 22 || this.zhujue.index == 26 || this.zhujue.index == 30 || this.zhujue.index == 34 || this.zhujue.index == 38 || this.zhujue.index == 42 || this.zhujue.index == 46) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy8.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq5sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh6.create, this.hh6);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 52) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy8.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq5sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh6.create, this.hh6);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 6) {
                    if (this.zhujue.index > 4) {
                        if (this.jispeed > 0) {
                            this.jispeed -= 2;
                        }
                        this.zhujue.y -= this.jispeed;
                    }
                    if (this.zhujue.index == 4) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                    }
                    if (this.zhujue.index == 4 || this.zhujue.index == 6) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy8.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq6sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh7.create, this.hh7);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 8) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy8.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq6sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh7.create, this.hh7);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 7) {
                    if (this.zhujue.index == 2 || this.zhujue.index == 6 || this.zhujue.index == 10 || this.zhujue.index == 14 || this.zhujue.index == 18 || this.zhujue.index == 22 || this.zhujue.index == 26 || this.zhujue.index == 30 || this.zhujue.index == 34 || this.zhujue.index == 38 || this.zhujue.index == 42 || this.zhujue.index == 46) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy8.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq7sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh8.create, this.hh8);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.sy2hanshu();
                                }
                            }
                        }
                        Laya.SoundManager.playSound("sound/hui3.wav");
                    }
                    if (this.zhujue.index == 49) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy8.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq7sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh8.create, this.hh8);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.sy2hanshu();
                                }
                            }
                        }
                        Laya.SoundManager.playSound("sound/hui3.wav");
                    }
                }
                if (zhucaidan.zhujuewq == 8) {
                    if (this.zhujue.index == 5) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                    }
                    if (this.zhujue.index == 6 || this.zhujue.index == 8 || this.zhujue.index == 10) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq8sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 9) {
                    if (Laya.KeyBoardManager.hasKeyDown(65)) {
                        this.zuokg = true;
                    }
                    if (Laya.KeyBoardManager.hasKeyDown(68)) {
                        this.youkg = true;
                    }
                    if (this.zhujue.index == 2 || this.zhujue.index == 5 || this.zhujue.index == 8 || this.zhujue.index == 11 || this.zhujue.index == 15 || this.zhujue.index == 18 || this.zhujue.index == 21 || this.zhujue.index == 25 || this.zhujue.index == 28 || this.zhujue.index == 32 || this.zhujue.index == 36 || this.zhujue.index == 40 || this.zhujue.index == 44 || this.zhujue.index == 48 || this.zhujue.index == 52 || this.zhujue.index == 56 || this.zhujue.index == 60 || this.zhujue.index == 64 || this.zhujue.index == 68 || this.zhujue.index == 72 || this.zhujue.index == 76 || this.zhujue.index == 80 || this.zhujue.index == 84 || this.zhujue.index == 88 || this.zhujue.index == 92 || this.zhujue.index == 96 || this.zhujue.index == 99) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy8.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq9sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 10) {
                    if (this.zhujue.index == 0 || this.zhujue.index == 8 || this.zhujue.index == 16 || this.zhujue.index == 24 || this.zhujue.index == 32) {
                        Laya.SoundManager.playSound("sound/bingjian.wav");
                    }
                    if (this.zhujue.index == 5 || this.zhujue.index == 13 || this.zhujue.index == 22 || this.zhujue.index == 29 || this.zhujue.index == 37) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq10sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 7 || this.zhujue.index == 16 || this.zhujue.index == 24 || this.zhujue.index == 31 || this.zhujue.index == 39) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy4.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq10sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 10 || this.zhujue.index == 19 || this.zhujue.index == 26 || this.zhujue.index == 33 || this.zhujue.index == 41) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy6.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq10sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 11) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 10;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.index == 6 || this.zhujue.index == 21) {
                        Laya.SoundManager.playSound("sound/jianqi.wav");
                    }
                    if (this.zhujue.index == 6 || this.zhujue.index == 21) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq11sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 9 || this.zhujue.index == 24) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq11sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 12 || this.zhujue.index == 27) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq11sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 12) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 10;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.index >= 19 && this.zhujue.index <= 27) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x += 6;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 6;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x -= 6;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 6;
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 4 || this.zhujue.index == 13) {
                        Laya.SoundManager.playSound("sound/pi1.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq12sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 27) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                    }
                    if (this.zhujue.index == 28 || this.zhujue.index == 31 || this.zhujue.index == 33) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy10.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq12sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 13) {
                    if (this.zhujue.index == 5 || this.zhujue.index == 15 || this.zhujue.index == 25 || this.zhujue.index == 35 || this.zhujue.index == 45 || this.zhujue.index == 56) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                    }
                    if (this.zhujue.index == 7 || this.zhujue.index == 10 || this.zhujue.index == 17 || this.zhujue.index == 20 || this.zhujue.index == 27 || this.zhujue.index == 30 || this.zhujue.index == 37 || this.zhujue.index == 40 || this.zhujue.index == 47 || this.zhujue.index == 50 || this.zhujue.index == 57) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq13sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh7.create, this.hh7);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 60) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq13sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh7.create, this.hh7);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 14) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 12;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.index == 6 || this.zhujue.index == 10 || this.zhujue.index == 14 || this.zhujue.index == 18 || this.zhujue.index == 22) {
                        Laya.SoundManager.playSound("sound/dian.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy11.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq14sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    Laya.SoundManager.playSound("sound/dianmingzhong.wav");
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 31) {
                        Laya.SoundManager.playSound("sound/jianqi.wav");
                    }
                    if (this.zhujue.index == 32 || this.zhujue.index == 35 || this.zhujue.index == 38) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq14sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 15) {
                    if (this.zhujue.index >= 5 && this.zhujue.index <= 12) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x += 10;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 10;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x -= 10;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 10;
                                }
                            }
                        }
                    }
                    if (this.zhujue.index >= 17 && this.zhujue.index <= 24) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x += 10;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 10;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x -= 10;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 10;
                                }
                            }
                        }
                    }
                    if (this.zhujue.index >= 28 && this.zhujue.index <= 35) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x += 10;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 10;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x -= 10;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 10;
                                }
                            }
                        }
                    }
                    if (this.zhujue.index >= 41 && this.zhujue.index <= 48) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x += 10;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 10;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x -= 10;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 10;
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 5 || this.zhujue.index == 17 || this.zhujue.index == 28 || this.zhujue.index == 41) {
                        Laya.SoundManager.playSound("sound/pi1.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq15sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 16) {
                    if (this.zhujue.index >= 22) {
                        if (this.jispeed > 0) {
                            this.jispeed--;
                        }
                        this.zhujue.y -= this.jispeed;
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x += 10;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 10;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x -= 10;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 10;
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 5 || this.zhujue.index == 22) {
                        Laya.SoundManager.playSound("sound/pi1.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy13.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq16sh + Math.round(Math.random() * 80);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 17) {
                    if (this.zhujue.index >= 5 && this.zhujue.index <= 13) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x += 40;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 40;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x -= 40;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 40;
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 5) {
                        Laya.SoundManager.playSound("sound/pi1.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy5.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq17sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 8) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy5.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq17sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 18) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 8;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.index == 16) {
                        Laya.SoundManager.playSound("sound/jianqi.wav");
                    }
                    if (this.zhujue.index == 20 || this.zhujue.index == 23) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy5.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq18sh + Math.round(Math.random() * 150);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh6.create, this.hh6);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 19) {
                    if (this.zhujue.index == 5 || this.zhujue.index == 10 || this.zhujue.index == 15 || this.zhujue.index == 20 || this.zhujue.index == 25) {
                        Laya.SoundManager.playSound("sound/huo.wav");
                    }
                    if (this.zhujue.index == 5 || this.zhujue.index == 9 || this.zhujue.index == 12 || this.zhujue.index == 16 || this.zhujue.index == 19 || this.zhujue.index == 22 || this.zhujue.index == 26) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy13.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq19sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh8.create, this.hh8);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    Laya.SoundManager.playSound("sound/huoquan.wav");
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 28) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy5.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq19sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh8.create, this.hh8);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    Laya.SoundManager.playSound("sound/huoquan.wav");
                                }
                            }
                        }
                    }
                }
            }
            if (zhucaidan.dz == "ji3") {
                this.zuokg = false;
                this.youkg = false;
                if (zhucaidan.zhujuewq == 1) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 10;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.index >= 26) {
                        if (Laya.KeyBoardManager.hasKeyDown(74)) {
                            this.pugonghanshu();
                        }
                        if (Laya.KeyBoardManager.hasKeyDown(85)) {
                            this.ji1hanshu();
                        }
                        if (Laya.KeyBoardManager.hasKeyDown(73)) {
                            this.ji2hanshu();
                        }
                        if (Laya.KeyBoardManager.hasKeyDown(79)) {
                            this.ji3hanshu();
                        }
                    }
                    if (this.zhujue.index == 6) {
                        Laya.SoundManager.playSound("sound/pi1.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq1sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh1.create, this.hh1);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 13) {
                        Laya.SoundManager.playSound("sound/pi1.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq1sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh1.create, this.hh1);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 20) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy4.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq1sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh1.create, this.hh1);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 2) {
                    if (this.zhujue.index == 4) {
                        Laya.SoundManager.playSound("sound/jianqi.wav");
                    }
                    if (this.zhujue.index == 6 || this.zhujue.index == 8) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq2sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 10 || this.zhujue.index == 12) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy2.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq2sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 14 || this.zhujue.index == 16) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy4.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq2sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 18 || this.zhujue.index == 20) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy6.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq2sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 3) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 10;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.index == 5) {
                        Laya.SoundManager.playSound("sound/pi1.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy8.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq3sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 10) {
                        Laya.SoundManager.playSound("sound/pi1.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy5.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq3sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 15) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy7.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq3sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 4) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 6;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.index >= 5 && this.zhujue.index <= 60) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x += 4;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 4;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x -= 4;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 4;
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 5 || this.zhujue.index == 8 || this.zhujue.index == 11 || this.zhujue.index == 15 || this.zhujue.index == 19 || this.zhujue.index == 23 || this.zhujue.index == 26 || this.zhujue.index == 30 || this.zhujue.index == 34 || this.zhujue.index == 38 || this.zhujue.index == 42 || this.zhujue.index == 46 || this.zhujue.index == 50 || this.zhujue.index == 54 || this.zhujue.index == 58) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy8.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq4sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh5.create, this.hh5);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                        Laya.SoundManager.playSound("sound/hui3.wav");
                    }
                }
                if (zhucaidan.zhujuewq == 5) {
                    if (this.zhujue.index == 6 || this.zhujue.index == 9 || this.zhujue.index == 13 || this.zhujue.index == 16 || this.zhujue.index == 20 || this.zhujue.index == 24 || this.zhujue.index == 28 || this.zhujue.index == 32 || this.zhujue.index == 35) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq5sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh6.create, this.hh6);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                        Laya.SoundManager.playSound("sound/hui3.wav");
                    }
                }
                if (zhucaidan.zhujuewq == 6) {
                    if (this.zhujue.index == 5) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                    }
                    if (this.zhujue.index == 6 || this.zhujue.index == 8 || this.zhujue.index == 10) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq6sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh7.create, this.hh7);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 7) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 6;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.scaleX == 1) {
                        this.zhujue.x += 4;
                        if (this.ditu.x != -1488) {
                            if (this.zhujue.x >= 400) {
                                this.zhujue.x = 400;
                                this.ditu.x -= 4;
                            }
                        }
                    }
                    if (this.zhujue.scaleX == -1) {
                        this.zhujue.x -= 4;
                        if (this.ditu.x != 0) {
                            if (this.zhujue.x <= 400) {
                                this.zhujue.x = 400;
                                this.ditu.x += 4;
                            }
                        }
                    }
                    if (this.zhujue.index == 2 || this.zhujue.index == 6 || this.zhujue.index == 10 || this.zhujue.index == 14 || this.zhujue.index == 18 || this.zhujue.index == 22 || this.zhujue.index == 26 || this.zhujue.index == 30 || this.zhujue.index == 34 || this.zhujue.index == 38 || this.zhujue.index == 42 || this.zhujue.index == 46 || this.zhujue.index == 49) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy8.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq7sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh8.create, this.hh8);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.sy2hanshu();
                                }
                            }
                        }
                        Laya.SoundManager.playSound("sound/hui3.wav");
                    }
                }
                if (zhucaidan.zhujuewq == 8) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 10;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.index < 18) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x += 6;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 6;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x -= 6;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 6;
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 11 || this.zhujue.index == 23 || this.zhujue.index == 31) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                    }
                    if (this.zhujue.index == 12 || this.zhujue.index == 15 || this.zhujue.index == 18) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy10.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq8sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 23) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq8sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 31) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq8sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 9) {
                    if (this.zhujue.index > 4) {
                        if (this.jispeed > 0) {
                            this.jispeed -= 2;
                        }
                        this.zhujue.y -= this.jispeed;
                    }
                    if (this.zhujue.index == 4) {
                        Laya.SoundManager.playSound("sound/pi2.wav");
                    }
                    if (this.zhujue.index == 4 || this.zhujue.index == 6) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy8.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq9sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 8) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy8.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq9sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 10) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 6;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.index == 2 || this.zhujue.index == 10 || this.zhujue.index == 14 || this.zhujue.index == 18 || this.zhujue.index == 22 || this.zhujue.index == 26) {
                        Laya.SoundManager.playSound("sound/bingjian.wav");
                    }
                    if (this.zhujue.index == 13 || this.zhujue.index == 17 || this.zhujue.index == 21 || this.zhujue.index == 26 || this.zhujue.index == 30 || this.zhujue.index == 34) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy11.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq10sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 11) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 6;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.index == 6 || this.zhujue.index == 9) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq11sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 11 || this.zhujue.index == 15 || this.zhujue.index == 19 || this.zhujue.index == 23 || this.zhujue.index == 27) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq11sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    Laya.SoundManager.playSound("sound/huoquan.wav");
                                }
                            }
                        }
                        Laya.SoundManager.playSound("sound/huoyan.wav");
                    }
                    if (this.zhujue.index == 30) {
                        Laya.SoundManager.playSound("sound/huoyan.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq11sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    Laya.SoundManager.playSound("sound/huoquan.wav");
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 12) {
                    if (this.zhujue.index == 5) {
                        Laya.SoundManager.playSound("sound/pi1.wav");
                    }
                    if (this.zhujue.index >= 5 && this.zhujue.index <= 12) {
                        if (this.zhujue.scaleX == 1) {
                            this.zhujue.x += 30;
                            if (this.ditu.x != -1488) {
                                if (this.zhujue.x >= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x -= 30;
                                }
                            }
                        }
                        if (this.zhujue.scaleX == -1) {
                            this.zhujue.x -= 30;
                            if (this.ditu.x != 0) {
                                if (this.zhujue.x <= 400) {
                                    this.zhujue.x = 400;
                                    this.ditu.x += 30;
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 5 || this.zhujue.index == 8) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy8.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq12sh + Math.round(Math.random() * 120);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh9.create, this.hh9);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 13) {
                    if (this.zhujue.index == 2 || this.zhujue.index == 6 || this.zhujue.index == 10 || this.zhujue.index == 14 || this.zhujue.index == 18 || this.zhujue.index == 22 || this.zhujue.index == 26 || this.zhujue.index == 30 || this.zhujue.index == 34 || this.zhujue.index == 38 || this.zhujue.index == 42 || this.zhujue.index == 46 || this.zhujue.index == 50 || this.zhujue.index == 54 || this.zhujue.index == 58) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy12.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq13sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh7.create, this.hh7);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                        Laya.SoundManager.playSound("sound/pi2.wav");
                    }
                }
                if (zhucaidan.zhujuewq == 14) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 12;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.scaleX == 1) {
                        this.zhujue.x += 12;
                        if (this.ditu.x != -1488) {
                            if (this.zhujue.x >= 400) {
                                this.zhujue.x = 400;
                                this.ditu.x -= 12;
                            }
                        }
                    }
                    if (this.zhujue.scaleX == -1) {
                        this.zhujue.x -= 12;
                        if (this.ditu.x != 0) {
                            if (this.zhujue.x <= 400) {
                                this.zhujue.x = 400;
                                this.ditu.x += 12;
                            }
                        }
                    }
                    if (Laya.KeyBoardManager.hasKeyDown(65)) {
                        this.zhujue.scaleX = -1;
                    }
                    if (Laya.KeyBoardManager.hasKeyDown(68)) {
                        this.zhujue.scaleX = 1;
                    }
                    if (this.zhujue.index == 2 || this.zhujue.index == 6 || this.zhujue.index == 10 || this.zhujue.index == 14 || this.zhujue.index == 18 || this.zhujue.index == 22 || this.zhujue.index == 26 || this.zhujue.index == 30 || this.zhujue.index == 34 || this.zhujue.index == 38 || this.zhujue.index == 42 || this.zhujue.index == 46 || this.zhujue.index == 50 || this.zhujue.index == 54 || this.zhujue.index == 58) {
                        Laya.SoundManager.playSound("sound/hui3.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy8.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq14sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 15) {
                    if (this.zhujue.index == 2 || this.zhujue.index == 6 || this.zhujue.index == 10 || this.zhujue.index == 14 || this.zhujue.index == 18 || this.zhujue.index == 22 || this.zhujue.index == 26 || this.zhujue.index == 30) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy12.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq15sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh3.create, this.hh3);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                        Laya.SoundManager.playSound("sound/pi2.wav");
                    }
                }
                if (zhucaidan.zhujuewq == 16) {
                    if (this.zhujue.index == 6 || this.zhujue.index == 22 || this.zhujue.index == 39 || this.zhujue.index == 53 || this.zhujue.index == 66 || this.zhujue.index == 80) {
                        Laya.SoundManager.playSound("sound/jianqi.wav");
                    }
                    if (this.zhujue.index == 8 || this.zhujue.index == 12 || this.zhujue.index == 24 || this.zhujue.index == 28 || this.zhujue.index == 40 || this.zhujue.index == 44 || this.zhujue.index == 55 || this.zhujue.index == 59 || this.zhujue.index == 68 || this.zhujue.index == 72 || this.zhujue.index == 82 || this.zhujue.index == 86) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq16sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.syhanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 17) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 20;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.index == 2 || this.zhujue.index == 6 || this.zhujue.index == 10 || this.zhujue.index == 14 || this.zhujue.index == 18 || this.zhujue.index == 22 || this.zhujue.index == 26 || this.zhujue.index == 30 || this.zhujue.index == 34 || this.zhujue.index == 38) {
                        Laya.SoundManager.playSound("sound/dian.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy12.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq17sh + Math.round(Math.random() * 30);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh2.create, this.hh2);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    Laya.SoundManager.playSound("sound/dianmingzhong.wav");
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 18) {
                    if (this.zhujue.index == 6) {
                        Laya.SoundManager.playSound("sound/jiguang.wav");
                    }
                    if (this.zhujue.index == 7 || this.zhujue.index == 10 || this.zhujue.index == 13 || this.zhujue.index == 16 || this.zhujue.index == 20 || this.zhujue.index == 24 || this.zhujue.index == 28 || this.zhujue.index == 32) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "ss");
                                        zhucaidan["diren" + i].skewX = 0.1;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq18sh + Math.round(Math.random() * 40);
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh6.create, this.hh6);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.sy2hanshu();
                                }
                            }
                        }
                    }
                    if (this.zhujue.index == 34) {
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy9.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq18sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh6.create, this.hh6);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    this.sy2hanshu();
                                }
                            }
                        }
                    }
                }
                if (zhucaidan.zhujuewq == 19) {
                    if (this.zhujue.y < 430) {
                        this.zhujue.y += 15;
                    }
                    if (this.zhujue.y >= 430) {
                        this.zhujue.y = 430;
                    }
                    if (this.zhujue.index == 1 || this.zhujue.index == 6 || this.zhujue.index == 13 || this.zhujue.index == 18 || this.zhujue.index == 24 || this.zhujue.index == 31 || this.zhujue.index == 37 || this.zhujue.index == 43 || this.zhujue.index == 50 || this.zhujue.index == 58) {
                        Laya.SoundManager.playSound("sound/huoqiu2.wav");
                    }
                    if (this.zhujue.index == 8 || this.zhujue.index == 14 || this.zhujue.index == 20 || this.zhujue.index == 26 || this.zhujue.index == 32 || this.zhujue.index == 38 || this.zhujue.index == 44 || this.zhujue.index == 50 || this.zhujue.index == 57 || this.zhujue.index == 65) {
                        Laya.SoundManager.playSound("sound/baozha2.wav");
                        let i;
                        for (i = 1; i <= 10; i++) {
                            if (this.qy12.hitTestPoint(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y)) {
                                if (zhucaidan["diren" + i].skewX != 0.25) {
                                    if (zhucaidan.guan < 40) {
                                        zhucaidan["diren" + i + "an"].play(0, true, "dafei");
                                        zhucaidan["diren" + i].skewX = 0.2;
                                    }
                                    ;
                                    zhucaidan["diren" + i + "xue"] -= zhucaidan.wq19sh;
                                    let hh;
                                    hh = Laya.Pool.getItemByCreateFun("hh", this.hh8.create, this.hh8);
                                    hh.pos(zhucaidan["diren" + i].x, zhucaidan["diren" + i].y - 50);
                                    Laya.stage.addChild(hh);
                                    Laya.SoundManager.playSound("sound/huoquan.wav");
                                }
                            }
                        }
                    }
                }
            }
        }
        onKeyUp(up) {
            if (zhucaidan.dz == "pao") {
                if (up.keyCode == 65 || up.keyCode == 68) {
                    this.huidaozhanli();
                }
            }
            if (up.keyCode == 65) {
                this.zuokg = false;
            }
            if (up.keyCode == 68) {
                this.youkg = false;
            }
        }
        bowan() {
            if (zhucaidan.dz == "shanbi") {
                this.huidaozhanli();
            }
            if (zhucaidan.dz == "luodi") {
                this.huidaozhanli();
            }
            if (zhucaidan.dz == "pugong") {
                if (this.zhujue.y == 430) {
                    this.huidaozhanli();
                }
                if (this.zhujue.y < 430) {
                    this.xialuo();
                }
            }
            if (zhucaidan.dz == "ji1") {
                if (this.zhujue.y == 430) {
                    this.huidaozhanli();
                }
                if (this.zhujue.y < 430) {
                    this.xialuo();
                }
            }
            if (zhucaidan.dz == "ji2") {
                if (this.zhujue.y == 430) {
                    this.huidaozhanli();
                }
                if (this.zhujue.y < 430) {
                    this.xialuo();
                }
            }
            if (zhucaidan.dz == "ji3") {
                if (this.zhujue.y == 430) {
                    this.huidaozhanli();
                }
                if (this.zhujue.y < 430) {
                    this.xialuo();
                }
            }
        }
        huidaozhanli() {
            zhucaidan.dz = "zhanli";
            if (zhucaidan.zhujuewq == 1) {
                this.zhujue.play(0, true, "wq1zhanli");
            }
            if (zhucaidan.zhujuewq == 2) {
                this.zhujue.play(0, true, "wq2zhanli");
            }
            if (zhucaidan.zhujuewq == 3) {
                this.zhujue.play(0, true, "wq3zhanli");
            }
            if (zhucaidan.zhujuewq == 4) {
                this.zhujue.play(0, true, "wq4zhanli");
            }
            if (zhucaidan.zhujuewq == 5) {
                this.zhujue.play(0, true, "wq5zhanli");
            }
            if (zhucaidan.zhujuewq == 6) {
                this.zhujue.play(0, true, "wq6zhanli");
            }
            if (zhucaidan.zhujuewq == 7) {
                this.zhujue.play(0, true, "wq7zhanli");
            }
            if (zhucaidan.zhujuewq == 8) {
                this.zhujue.play(0, true, "wq8zhanli");
            }
            if (zhucaidan.zhujuewq == 9) {
                this.zhujue.play(0, true, "wq9zhanli");
            }
            if (zhucaidan.zhujuewq == 10) {
                this.zhujue.play(0, true, "wq10zhanli");
            }
            if (zhucaidan.zhujuewq == 11) {
                this.zhujue.play(0, true, "wq11zhanli");
            }
            if (zhucaidan.zhujuewq == 12) {
                this.zhujue.play(0, true, "wq12zhanli");
            }
            if (zhucaidan.zhujuewq == 13) {
                this.zhujue.play(0, true, "wq13zhanli");
            }
            if (zhucaidan.zhujuewq == 14) {
                this.zhujue.play(0, true, "wq14zhanli");
            }
            if (zhucaidan.zhujuewq == 15) {
                this.zhujue.play(0, true, "wq15zhanli");
            }
            if (zhucaidan.zhujuewq == 16) {
                this.zhujue.play(0, true, "wq16zhanli");
            }
            if (zhucaidan.zhujuewq == 17) {
                this.zhujue.play(0, true, "wq17zhanli");
            }
            if (zhucaidan.zhujuewq == 18) {
                this.zhujue.play(0, true, "wq18zhanli");
            }
            if (zhucaidan.zhujuewq == 19) {
                this.zhujue.play(0, true, "wq19zhanli");
            }
        }
        xialuo() {
            if (zhucaidan.zhujuewq == 1) {
                this.zhujue.play(0, true, "wq1luo");
            }
            if (zhucaidan.zhujuewq == 2) {
                this.zhujue.play(0, true, "wq2luo");
            }
            if (zhucaidan.zhujuewq == 3) {
                this.zhujue.play(0, true, "wq3luo");
            }
            if (zhucaidan.zhujuewq == 4) {
                this.zhujue.play(0, true, "wq4luo");
            }
            if (zhucaidan.zhujuewq == 5) {
                this.zhujue.play(0, true, "wq5luo");
            }
            if (zhucaidan.zhujuewq == 6) {
                this.zhujue.play(0, true, "wq6luo");
            }
            if (zhucaidan.zhujuewq == 7) {
                this.zhujue.play(0, true, "wq7luo");
            }
            if (zhucaidan.zhujuewq == 8) {
                this.zhujue.play(0, true, "wq8luo");
            }
            if (zhucaidan.zhujuewq == 9) {
                this.zhujue.play(0, true, "wq9luo");
            }
            if (zhucaidan.zhujuewq == 10) {
                this.zhujue.play(0, true, "wq10luo");
            }
            if (zhucaidan.zhujuewq == 11) {
                this.zhujue.play(0, true, "wq11luo");
            }
            if (zhucaidan.zhujuewq == 12) {
                this.zhujue.play(0, true, "wq12luo");
            }
            if (zhucaidan.zhujuewq == 13) {
                this.zhujue.play(0, true, "wq13luo");
            }
            if (zhucaidan.zhujuewq == 14) {
                this.zhujue.play(0, true, "wq14luo");
            }
            if (zhucaidan.zhujuewq == 15) {
                this.zhujue.play(0, true, "wq15luo");
            }
            if (zhucaidan.zhujuewq == 16) {
                this.zhujue.play(0, true, "wq16luo");
            }
            if (zhucaidan.zhujuewq == 17) {
                this.zhujue.play(0, true, "wq17luo");
            }
            if (zhucaidan.zhujuewq == 18) {
                this.zhujue.play(0, true, "wq18luo");
            }
            if (zhucaidan.zhujuewq == 19) {
                this.zhujue.play(0, true, "wq19luo");
            }
            zhucaidan.dz = "luo";
        }
        pugonghanshu() {
            if (zhucaidan.zhujuewq == 1) {
                this.zhujue.play(0, true, "wq1pugong");
            }
            if (zhucaidan.zhujuewq == 2) {
                this.zhujue.play(0, true, "wq2pugong");
            }
            if (zhucaidan.zhujuewq == 3) {
                this.zhujue.play(0, true, "wq3pugong");
            }
            if (zhucaidan.zhujuewq == 4) {
                this.zhujue.play(0, true, "wq4pugong");
            }
            if (zhucaidan.zhujuewq == 5) {
                this.zhujue.play(0, true, "wq5pugong");
            }
            if (zhucaidan.zhujuewq == 6) {
                this.zhujue.play(0, true, "wq6pugong");
            }
            if (zhucaidan.zhujuewq == 7) {
                this.zhujue.play(0, true, "wq7pugong");
            }
            if (zhucaidan.zhujuewq == 8) {
                this.zhujue.play(0, true, "wq8pugong");
            }
            if (zhucaidan.zhujuewq == 9) {
                this.zhujue.play(0, true, "wq9pugong");
            }
            if (zhucaidan.zhujuewq == 10) {
                this.zhujue.play(0, true, "wq10pugong");
            }
            if (zhucaidan.zhujuewq == 11) {
                this.zhujue.play(0, true, "wq11pugong");
            }
            if (zhucaidan.zhujuewq == 12) {
                this.zhujue.play(0, true, "wq12pugong");
            }
            if (zhucaidan.zhujuewq == 13) {
                this.zhujue.play(0, true, "wq13pugong");
            }
            if (zhucaidan.zhujuewq == 14) {
                this.zhujue.play(0, true, "wq14pugong");
            }
            if (zhucaidan.zhujuewq == 15) {
                this.zhujue.play(0, true, "wq15pugong");
            }
            if (zhucaidan.zhujuewq == 16) {
                this.zhujue.play(0, true, "wq16pugong");
            }
            if (zhucaidan.zhujuewq == 17) {
                this.zhujue.play(0, true, "wq17pugong");
            }
            if (zhucaidan.zhujuewq == 18) {
                this.zhujue.play(0, true, "wq18pugong");
            }
            if (zhucaidan.zhujuewq == 19) {
                this.zhujue.play(0, true, "wq19pugong");
            }
            zhucaidan.dz = "pugong";
        }
        ji1hanshu() {
            if (this.lengque1.index == 100) {
                if (zhucaidan.zhujuewq == 1) {
                    this.zhujue.play(0, true, "wq1ji1");
                }
                if (zhucaidan.zhujuewq == 2) {
                    this.zhujue.play(0, true, "wq2ji1");
                }
                if (zhucaidan.zhujuewq == 3) {
                    this.zhujue.play(0, true, "wq3ji1");
                }
                if (zhucaidan.zhujuewq == 4) {
                    this.zhujue.play(0, true, "wq4ji1");
                }
                if (zhucaidan.zhujuewq == 5) {
                    this.zhujue.play(0, true, "wq5ji1");
                }
                if (zhucaidan.zhujuewq == 6) {
                    this.zhujue.play(0, true, "wq6ji1");
                }
                if (zhucaidan.zhujuewq == 7) {
                    this.zhujue.play(0, true, "wq7ji1");
                }
                if (zhucaidan.zhujuewq == 8) {
                    this.zhujue.play(0, true, "wq8ji1");
                }
                if (zhucaidan.zhujuewq == 9) {
                    this.zhujue.play(0, true, "wq9ji1");
                }
                if (zhucaidan.zhujuewq == 10) {
                    this.zhujue.play(0, true, "wq10ji1");
                }
                if (zhucaidan.zhujuewq == 11) {
                    this.zhujue.play(0, true, "wq11ji1");
                }
                if (zhucaidan.zhujuewq == 12) {
                    this.zhujue.play(0, true, "wq12ji1");
                }
                if (zhucaidan.zhujuewq == 13) {
                    this.zhujue.play(0, true, "wq13ji1");
                }
                if (zhucaidan.zhujuewq == 14) {
                    this.zhujue.play(0, true, "wq14ji1");
                }
                if (zhucaidan.zhujuewq == 15) {
                    this.zhujue.play(0, true, "wq15ji1");
                }
                if (zhucaidan.zhujuewq == 16) {
                    this.zhujue.play(0, true, "wq16ji1");
                }
                if (zhucaidan.zhujuewq == 17) {
                    this.zhujue.play(0, true, "wq17ji1");
                }
                if (zhucaidan.zhujuewq == 18) {
                    this.zhujue.play(0, true, "wq18ji1");
                }
                if (zhucaidan.zhujuewq == 19) {
                    this.zhujue.play(0, true, "wq19ji1");
                }
                zhucaidan.dz = "ji1";
                this.lengque1.play(0, false);
            }
        }
        ji2hanshu() {
            if (this.lengque2.index == 100) {
                if (zhucaidan.zhujuewq == 1) {
                    this.zhujue.play(0, true, "wq1ji2");
                }
                if (zhucaidan.zhujuewq == 2) {
                    this.zhujue.play(0, true, "wq2ji2");
                }
                if (zhucaidan.zhujuewq == 3) {
                    this.zhujue.play(0, true, "wq3ji2");
                }
                if (zhucaidan.zhujuewq == 4) {
                    this.zhujue.play(0, true, "wq4ji2");
                }
                if (zhucaidan.zhujuewq == 5) {
                    this.zhujue.play(0, true, "wq5ji2");
                }
                if (zhucaidan.zhujuewq == 6) {
                    this.zhujue.play(0, true, "wq6ji2");
                }
                if (zhucaidan.zhujuewq == 7) {
                    this.zhujue.play(0, true, "wq7ji2");
                }
                if (zhucaidan.zhujuewq == 8) {
                    this.zhujue.play(0, true, "wq8ji2");
                }
                if (zhucaidan.zhujuewq == 9) {
                    this.zhujue.play(0, true, "wq9ji2");
                }
                if (zhucaidan.zhujuewq == 10) {
                    this.zhujue.play(0, true, "wq10ji2");
                }
                if (zhucaidan.zhujuewq == 11) {
                    this.zhujue.play(0, true, "wq11ji2");
                }
                if (zhucaidan.zhujuewq == 12) {
                    this.zhujue.play(0, true, "wq12ji2");
                }
                if (zhucaidan.zhujuewq == 13) {
                    this.zhujue.play(0, true, "wq13ji2");
                }
                if (zhucaidan.zhujuewq == 14) {
                    this.zhujue.play(0, true, "wq14ji2");
                }
                if (zhucaidan.zhujuewq == 15) {
                    this.zhujue.play(0, true, "wq15ji2");
                }
                if (zhucaidan.zhujuewq == 16) {
                    this.zhujue.play(0, true, "wq16ji2");
                }
                if (zhucaidan.zhujuewq == 17) {
                    this.zhujue.play(0, true, "wq17ji2");
                }
                if (zhucaidan.zhujuewq == 18) {
                    this.zhujue.play(0, true, "wq18ji2");
                }
                if (zhucaidan.zhujuewq == 19) {
                    this.zhujue.play(0, true, "wq19ji2");
                }
                zhucaidan.dz = "ji2";
                this.lengque2.play(0, false);
            }
        }
        ji3hanshu() {
            if (this.lengque3.index == 100) {
                if (zhucaidan.zhujuewq == 1) {
                    this.zhujue.play(0, true, "wq1ji3");
                }
                if (zhucaidan.zhujuewq == 2) {
                    this.zhujue.play(0, true, "wq2ji3");
                }
                if (zhucaidan.zhujuewq == 3) {
                    this.zhujue.play(0, true, "wq3ji3");
                }
                if (zhucaidan.zhujuewq == 4) {
                    this.zhujue.play(0, true, "wq4ji3");
                }
                if (zhucaidan.zhujuewq == 5) {
                    this.zhujue.play(0, true, "wq5ji3");
                }
                if (zhucaidan.zhujuewq == 6) {
                    this.zhujue.play(0, true, "wq6ji3");
                }
                if (zhucaidan.zhujuewq == 7) {
                    this.zhujue.play(0, true, "wq7ji3");
                }
                if (zhucaidan.zhujuewq == 8) {
                    this.zhujue.play(0, true, "wq8ji3");
                }
                if (zhucaidan.zhujuewq == 9) {
                    this.zhujue.play(0, true, "wq9ji3");
                }
                if (zhucaidan.zhujuewq == 10) {
                    this.zhujue.play(0, true, "wq10ji3");
                }
                if (zhucaidan.zhujuewq == 11) {
                    this.zhujue.play(0, true, "wq11ji3");
                }
                if (zhucaidan.zhujuewq == 12) {
                    this.zhujue.play(0, true, "wq12ji3");
                }
                if (zhucaidan.zhujuewq == 13) {
                    this.zhujue.play(0, true, "wq13ji3");
                }
                if (zhucaidan.zhujuewq == 14) {
                    this.zhujue.play(0, true, "wq14ji3");
                }
                if (zhucaidan.zhujuewq == 15) {
                    this.zhujue.play(0, true, "wq15ji3");
                }
                if (zhucaidan.zhujuewq == 16) {
                    this.zhujue.play(0, true, "wq16ji3");
                }
                if (zhucaidan.zhujuewq == 17) {
                    this.zhujue.play(0, true, "wq17ji3");
                }
                if (zhucaidan.zhujuewq == 18) {
                    this.zhujue.play(0, true, "wq18ji3");
                }
                if (zhucaidan.zhujuewq == 19) {
                    this.zhujue.play(0, true, "wq19ji3");
                }
                zhucaidan.dz = "ji3";
                this.lengque3.play(0, false);
            }
        }
        syhanshu() {
            let sy = Math.round(Math.random() * 11 + 1);
            if (sy == 1) {
                Laya.SoundManager.playSound("sound/kan1.wav");
            }
            if (sy == 2) {
                Laya.SoundManager.playSound("sound/kan2.wav");
            }
            if (sy == 3) {
                Laya.SoundManager.playSound("sound/kan3.wav");
            }
            if (sy == 4) {
                Laya.SoundManager.playSound("sound/kan4.wav");
            }
            if (sy == 5) {
                Laya.SoundManager.playSound("sound/kan5.wav");
            }
            if (sy == 6) {
                Laya.SoundManager.playSound("sound/kan6.wav");
            }
            if (sy == 7) {
                Laya.SoundManager.playSound("sound/kan7.wav");
            }
            if (sy == 8) {
                Laya.SoundManager.playSound("sound/kan8.wav");
            }
            if (sy == 9) {
                Laya.SoundManager.playSound("sound/kan9.wav");
            }
            if (sy == 10) {
                Laya.SoundManager.playSound("sound/kan10.wav");
            }
            if (sy == 11) {
                Laya.SoundManager.playSound("sound/kan11.wav");
            }
        }
        sy2hanshu() {
            let sy = Math.round(Math.random() * 3 + 1);
            if (sy == 1) {
                Laya.SoundManager.playSound("sound/quan1.wav");
            }
            if (sy == 2) {
                Laya.SoundManager.playSound("sound/quan2.wav");
            }
            if (sy == 3) {
                Laya.SoundManager.playSound("sound/quan3.wav");
            }
            if (sy == 4) {
                Laya.SoundManager.playSound("sound/quan4.wav");
            }
        }
        onMouseDown() {
            window.focus();
        }
    }

    class guan1 extends Laya.Script {
        constructor() { super(); }
        onEnable() {
            zhucaidan.direnshu = this.direnshuz;
            zhucaidan.diren1xue = this.d1xue;
            zhucaidan.diren2xue = this.d2xue;
            zhucaidan.diren3xue = this.d3xue;
            zhucaidan.diren4xue = this.d4xue;
            zhucaidan.diren5xue = this.d5xue;
            zhucaidan.diren6xue = this.d6xue;
            zhucaidan.diren7xue = this.d7xue;
            zhucaidan.diren8xue = this.d8xue;
            zhucaidan.diren9xue = this.d9xue;
            zhucaidan.diren10xue = this.d10xue;
            this.diren1xuetiao = this.owner.getChildByName("diren1").getChildByName("xuetiao");
            this.diren2xuetiao = this.owner.getChildByName("diren2").getChildByName("xuetiao");
            this.diren3xuetiao = this.owner.getChildByName("diren3").getChildByName("xuetiao");
            this.diren4xuetiao = this.owner.getChildByName("diren4").getChildByName("xuetiao");
            this.diren5xuetiao = this.owner.getChildByName("diren5").getChildByName("xuetiao");
            this.diren6xuetiao = this.owner.getChildByName("diren6").getChildByName("xuetiao");
            this.diren7xuetiao = this.owner.getChildByName("diren7").getChildByName("xuetiao");
            this.diren8xuetiao = this.owner.getChildByName("diren8").getChildByName("xuetiao");
            this.diren9xuetiao = this.owner.getChildByName("diren9").getChildByName("xuetiao");
            this.diren10xuetiao = this.owner.getChildByName("diren10").getChildByName("xuetiao");
            zhucaidan.diren1 = this.owner.getChildByName("diren1");
            zhucaidan.diren2 = this.owner.getChildByName("diren2");
            zhucaidan.diren3 = this.owner.getChildByName("diren3");
            zhucaidan.diren4 = this.owner.getChildByName("diren4");
            zhucaidan.diren5 = this.owner.getChildByName("diren5");
            zhucaidan.diren6 = this.owner.getChildByName("diren6");
            zhucaidan.diren7 = this.owner.getChildByName("diren7");
            zhucaidan.diren8 = this.owner.getChildByName("diren8");
            zhucaidan.diren9 = this.owner.getChildByName("diren9");
            zhucaidan.diren10 = this.owner.getChildByName("diren10");
            zhucaidan.diren1an = zhucaidan.diren1.getChildByName("diren");
            zhucaidan.diren2an = zhucaidan.diren2.getChildByName("diren");
            zhucaidan.diren3an = zhucaidan.diren3.getChildByName("diren");
            zhucaidan.diren4an = zhucaidan.diren4.getChildByName("diren");
            zhucaidan.diren5an = zhucaidan.diren5.getChildByName("diren");
            zhucaidan.diren6an = zhucaidan.diren6.getChildByName("diren");
            zhucaidan.diren7an = zhucaidan.diren7.getChildByName("diren");
            zhucaidan.diren8an = zhucaidan.diren8.getChildByName("diren");
            zhucaidan.diren9an = zhucaidan.diren9.getChildByName("diren");
            zhucaidan.diren10an = zhucaidan.diren10.getChildByName("diren");
            this.sljm = this.owner.getChildByName("sljm");
            this.shengli = this.sljm.getChildByName("shengli");
            this.shenglizi1 = this.shengli.getChildByName("an1");
            this.shenglizi2 = this.shengli.getChildByName("an2");
            this.shenglizi3 = this.shengli.getChildByName("an3");
            this.slzhucaidan = this.sljm.getChildByName("zhucaidan");
            this.slxiayiguan = this.sljm.getChildByName("xiayiguan");
            this.slxuanwq = this.sljm.getChildByName("xuanwq");
            this.slxuanguan = this.sljm.getChildByName("xuanguan");
            this.slzhucaidan.on(Laya.Event.CLICK, this, this.slzhucaidanh);
            this.slxiayiguan.on(Laya.Event.CLICK, this, this.slxiayiguanh);
            this.slxuanwq.on(Laya.Event.CLICK, this, this.slxuanwqh);
            this.slxuanguan.on(Laya.Event.CLICK, this, this.slxuanguanh);
            this.slkg = true;
            this.huodehun = this.sljm.getChildByName("huodehun");
            this.kgghun = this.sljm.getChildByName("kgghun");
            this.kgghun.on(Laya.Event.CLICK, this, this.kgghunhanshu);
            this.guankazi = this.owner.getChildByName("guankazi");
            this.guankazitime = 0;
            this.guankazi.alpha = 0;
            this.guankazikg = true;
            this.slxuanguan.visible = false;
        }
        onUpdate() {
            if (this.guankazikg == true) {
                if (this.guankazi.alpha < 1) {
                    this.guankazi.alpha += 0.05;
                }
            }
            if (this.guankazi.alpha == 1) {
                this.guankazitime++;
                this.guankazikg = false;
            }
            if (this.guankazitime > 100) {
                this.guankazi.alpha -= 0.05;
            }
            if (this.guankazi.alpha < 0) {
                this.guankazi.destroy();
            }
            this.diren1xuetiao.play(Math.round(zhucaidan.diren1xue / this.d1xue * 100));
            this.diren2xuetiao.play(Math.round(zhucaidan.diren2xue / this.d2xue * 100));
            this.diren3xuetiao.play(Math.round(zhucaidan.diren3xue / this.d3xue * 100));
            this.diren4xuetiao.play(Math.round(zhucaidan.diren4xue / this.d4xue * 100));
            this.diren5xuetiao.play(Math.round(zhucaidan.diren5xue / this.d5xue * 100));
            this.diren6xuetiao.play(Math.round(zhucaidan.diren6xue / this.d6xue * 100));
            this.diren7xuetiao.play(Math.round(zhucaidan.diren7xue / this.d7xue * 100));
            this.diren8xuetiao.play(Math.round(zhucaidan.diren8xue / this.d8xue * 100));
            this.diren9xuetiao.play(Math.round(zhucaidan.diren9xue / this.d9xue * 100));
            this.diren10xuetiao.play(Math.round(zhucaidan.diren10xue / this.d10xue * 100));
            if (zhucaidan.diren1xue < 0) {
                zhucaidan.diren1an.play(0, true, "si");
                this.diren1xuetiao.alpha = 0;
                zhucaidan.diren1.skewX = 0.25;
                zhucaidan.direnshu--;
                zhucaidan.diren1xue = this.d1xue;
            }
            if (zhucaidan.diren2xue < 0) {
                zhucaidan.diren2an.play(0, true, "si");
                this.diren2xuetiao.alpha = 0;
                zhucaidan.diren2.skewX = 0.25;
                zhucaidan.direnshu--;
                zhucaidan.diren2xue = this.d2xue;
            }
            if (zhucaidan.diren3xue < 0) {
                zhucaidan.diren3an.play(0, true, "si");
                this.diren3xuetiao.alpha = 0;
                zhucaidan.diren3.skewX = 0.25;
                zhucaidan.direnshu--;
                zhucaidan.diren3xue = this.d3xue;
            }
            if (zhucaidan.diren4xue < 0) {
                zhucaidan.diren4an.play(0, true, "si");
                this.diren4xuetiao.alpha = 0;
                zhucaidan.diren4.skewX = 0.25;
                zhucaidan.direnshu--;
                zhucaidan.diren4xue = this.d4xue;
            }
            if (zhucaidan.diren5xue < 0) {
                zhucaidan.diren5an.play(0, true, "si");
                this.diren5xuetiao.alpha = 0;
                zhucaidan.diren5.skewX = 0.25;
                zhucaidan.direnshu--;
                zhucaidan.diren5xue = this.d5xue;
            }
            if (zhucaidan.diren6xue < 0) {
                zhucaidan.diren6an.play(0, true, "si");
                this.diren6xuetiao.alpha = 0;
                zhucaidan.diren6.skewX = 0.25;
                zhucaidan.direnshu--;
                zhucaidan.diren6xue = this.d6xue;
            }
            if (zhucaidan.diren7xue < 0) {
                zhucaidan.diren7an.play(0, true, "si");
                this.diren7xuetiao.alpha = 0;
                zhucaidan.diren7.skewX = 0.25;
                zhucaidan.direnshu--;
                zhucaidan.diren7xue = this.d7xue;
            }
            if (zhucaidan.diren8xue < 0) {
                zhucaidan.diren8an.play(0, true, "si");
                this.diren8xuetiao.alpha = 0;
                zhucaidan.diren8.skewX = 0.25;
                zhucaidan.direnshu--;
                zhucaidan.diren8xue = this.d8xue;
            }
            if (zhucaidan.diren9xue < 0) {
                zhucaidan.diren9an.play(0, true, "si");
                this.diren9xuetiao.alpha = 0;
                zhucaidan.diren9.skewX = 0.25;
                zhucaidan.direnshu--;
                zhucaidan.diren9xue = this.d9xue;
            }
            if (zhucaidan.diren10xue < 0) {
                zhucaidan.diren10an.play(0, true, "si");
                this.diren10xuetiao.alpha = 0;
                zhucaidan.diren10.skewX = 0.25;
                zhucaidan.direnshu--;
                zhucaidan.diren10xue = this.d10xue;
            }
            if (this.slkg == true) {
                if (zhucaidan.direnshu <= 0) {
                    if (zhucaidan.diren1.y == -200 && zhucaidan.diren2.y == -200 && zhucaidan.diren3.y == -200 && zhucaidan.diren4.y == -200 && zhucaidan.diren5.y == -200 && zhucaidan.diren6.y == -200 && zhucaidan.diren7.y == -200 && zhucaidan.diren8.y == -200 && zhucaidan.diren9.y == -200 && zhucaidan.diren10.y == -200) {
                        this.sljm.y = 0;
                        this.shenglizi1.play();
                        this.shenglizi2.play();
                        this.shenglizi3.play();
                        this.slkg = false;
                        this.huode = Math.round(Math.random() * 99 + 1);
                        this.huodehun.text = "Nhận " + this.huode +  " linh hồn";
                        zhucaidan.hun += this.huode;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        if (zhucaidan.guanka == zhucaidan.guan) {
                            zhucaidan.guanka++;
                            Laya.LocalStorage.setItem("guanka", JSON.stringify(zhucaidan.guanka));
                        }
                    }
                }
            }
        }
        slzhucaidanh() {
            zhucaidan.yykg = true;
            Laya.SoundManager.playSound("sound/an1.wav");
            Laya.Scene.open("zhucaidan.scene");
        }
        slxiayiguanh() {
            zhucaidan.guan++;
            Laya.SoundManager.playSound("sound/an1.wav");
            Laya.Scene.open("jiazai2.scene");
        }
        slxuanwqh() {
            Laya.SoundManager.playSound("sound/an1.wav");
            Laya.Scene.open("xuanwq.scene");
        }
        slxuanguanh() {
            Laya.SoundManager.playSound("sound/an1.wav");
            Laya.Scene.open("xuanguan.scene");
        }
        kgghunhanshu() {
            let result = Laya.Browser.window.h5api.canPlayAd(callback);
            function callback(data) {
                Laya.Browser.window.console.log("Có thể phát quảng cáo: ", data.canPlayAd, '\n', "thời gian còn lại: ", data.remain);
            }
            if (result) {
                Laya.Browser.window.console.log('Hàng tồn kho có sẵn');
                Laya.Browser.window.h5api.playAd(data => {
                    Laya.Browser.window.console.log('Phát dữ liệu gọi lại quảng cáo', data);
                    if (data.code == 10000) {
                        console.log("Bắt đầu phát quảng cáo");
                        Laya.SoundManager.setMusicVolume(0);
                    }
                    if (data.code == 10001) {
                        console.log("Chơi kết thúc");
                        Laya.SoundManager.setMusicVolume(1);
                        Laya.SoundManager.playSound("sound/an1.wav");
                        this.huode = this.huode * 10;
                        this.huodehun.text = "Nhận " + this.huode +  " linh hồn";
                        zhucaidan.hun += this.huode;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                    }
                });
            }
            else {
                Laya.Browser.window.console.log('Không có hàng tồn kho để chơi');
                Laya.Browser.window.h5api.playAd(data => {
                    Laya.Browser.window.console.log('Phát dữ liệu gọi lại quảng cáo', data);
                });
            }
        }
    }

    class diren1 extends Laya.Script {
        constructor() { super(); }
        onEnable() {
            this.owner.x = Math.random() * 1500 + 500;
            this.dafeispeed = 20;
            this.luospeed = 2;
            this.diren = this.owner.getChildByName("diren");
            this.xuetiao = this.owner.getChildByName("xuetiao");
            this.dz = "chuxian";
            this.diren.on(Laya.Event.COMPLETE, this, this.bowan);
            this.diren.play(0, true, "chuxian");
            this.pos = this.owner.x;
            this.owner.y = 430;
            this.qy = this.owner.getChildByName("qy");
        }
        onUpdate() {
            this.owner.x = zhucaidan.ditu.x + this.pos;
            if (this.owner.y >= 430) {
                this.owner.y = 430;
            }
            if (this.owner.skewX == 0) {
                if (this.dz == "zou") {
                    if (this.owner.x > zhucaidan.zhujue.x + 50) {
                        this.diren.scaleX = 0.7;
                        this.qy.scaleX = 1;
                        this.pos -= this.speed;
                    }
                    if (this.owner.x < zhucaidan.zhujue.x - 50) {
                        this.diren.scaleX = -0.7;
                        this.qy.scaleX = -1;
                        this.pos += this.speed;
                    }
                }
            }
            if (this.owner.skewX == 0.1) {
                if (this.owner.x > zhucaidan.zhujue.x + 50) {
                    this.diren.scaleX = 0.7;
                    this.qy.scaleX = 1;
                }
                if (this.owner.x < zhucaidan.zhujue.x - 50) {
                    this.diren.scaleX = -0.7;
                    this.qy.scaleX = -1;
                }
            }
            if (this.owner.skewX == 0.2) {
                this.dafeispeed--;
                this.owner.y -= this.dafeispeed;
                if (this.dafeispeed <= 0) {
                    this.dafeispeed = 20;
                    this.luospeed = 2;
                    this.diren.play(0, true, "luo");
                    this.owner.skewX = 0.21;
                }
                if (this.diren.scaleX == 0.7) {
                    this.pos += 3;
                }
                if (this.diren.scaleX == -0.7) {
                    this.pos -= 3;
                }
            }
            if (this.owner.skewX == 0.21) {
                this.luospeed++;
                if (this.owner.y < 430) {
                    this.owner.y += this.luospeed;
                }
                if (this.owner.y >= 430) {
                    this.dafeispeed = 20;
                    this.luospeed = 2;
                    this.diren.play(0, true, "luodi");
                    this.owner.skewX = 0.22;
                }
                if (this.diren.scaleX == 0.7) {
                    this.pos += 3;
                }
                if (this.diren.scaleX == -0.7) {
                    this.pos -= 3;
                }
            }
            if (this.dz == "gj") {
                if (this.diren.index == this.gjz) {
                    if (this.qy.hitTestPoint(zhucaidan.zhujue.x, zhucaidan.zhujue.y)) {
                        zhucaidan.xuetiao.gotoAndStop(zhucaidan.xuetiao.index - this.sh);
                        Laya.SoundManager.playSound("sound/kan11.wav");
                        let hh2 = Laya.Pool.getItemByCreateFun("hh", this.hh.create, this.hh);
                        hh2.pos(zhucaidan.zhujue.x, zhucaidan.zhujue.y - 50);
                        Laya.stage.addChild(hh2);
                    }
                }
            }
        }
        bowan() {
            if (this.dz == "chuxian") {
                this.diren.play(0, true, "zhanli");
                this.dz = "zhanli";
            }
            if (this.owner.skewX == 0) {
                if (this.dz == "zhanli" || this.dz == "zou" || this.dz == "gj") {
                    let suiji;
                    suiji = Math.round(Math.random() * 4);
                    if (suiji == 0 || suiji == 1) {
                        this.diren.play(0, true, "zhanli");
                        this.dz = "zhanli";
                    }
                    if (suiji == 2 || suiji == 3) {
                        this.diren.play(0, true, "zou");
                        this.dz = "zou";
                    }
                    if (suiji == 4) {
                        this.diren.play(0, true, "gj");
                        this.dz = "gj";
                    }
                    this.owner.skewX = 0;
                }
            }
            if (this.owner.skewX == 0.1) {
                if (this.owner.y < 430) {
                    this.diren.play(0, true, "luo");
                    this.owner.skewX = 0.21;
                }
                else if (this.owner.y == 430) {
                    this.diren.play(0, true, "zhanli");
                    this.dz = "zhanli";
                    this.owner.skewX = 0;
                }
            }
            if (this.owner.skewX == 0.22) {
                this.diren.play(0, true, "zhanli");
                this.dz = "zhanli";
                this.owner.skewX = 0;
            }
            if (this.owner.skewX == 0.25) {
                zhucaidan.shadishu++;
                Laya.LocalStorage.setItem("shadishu", JSON.stringify(zhucaidan.shadishu));
                if (zhucaidan.direnshu > 0) {
                    let sj;
                    sj = Math.round(Math.random());
                    if (sj == 0) {
                        this.pos -= Math.random() * 600 + 100;
                    }
                    if (sj == 1) {
                        this.pos += Math.random() * 600 + 100;
                    }
                    this.owner.y = 430;
                    this.diren.play(0, true, "chuxian");
                    this.dz = "chuxian";
                    this.owner.skewX = 0;
                    this.xuetiao.alpha = 1;
                }
                else {
                    this.owner.removeSelf();
                    this.owner.y = -200;
                }
            }
        }
    }

    class shenglizi extends Laya.Script {
        constructor() {
            super();
            this.intType = 1000;
            this.numType = 1000;
            this.strType = "hello laya";
            this.boolType = true;
        }
        onEnable() {
            this.an1 = this.owner.getChildByName("an1");
            this.an2 = this.owner.getChildByName("an2");
            this.an3 = this.owner.getChildByName("an3");
            this.an1.on(Laya.Event.COMPLETE, this, this.an1hanshu);
            this.an2.on(Laya.Event.COMPLETE, this, this.an2hanshu);
            this.an3.on(Laya.Event.COMPLETE, this, this.an3hanshu);
        }
        an1hanshu() {
            this.an1.gotoAndStop(20);
        }
        an2hanshu() {
            this.an2.removeSelf();
        }
        an3hanshu() {
            this.an3.removeSelf();
        }
    }

    class wujing extends Laya.Script {
        constructor() { super(); }
        onEnable() {
            this.shadishu = 0;
            this.hun = 0;
            this.shadishuzi2 = this.owner.getChildByName("shadishuzi2");
            zhucaidan.direnshu = this.direnshuz;
            zhucaidan.diren1xue = this.d1xue;
            zhucaidan.diren2xue = this.d2xue;
            zhucaidan.diren3xue = this.d3xue;
            zhucaidan.diren4xue = this.d4xue;
            zhucaidan.diren5xue = this.d5xue;
            zhucaidan.diren6xue = this.d6xue;
            zhucaidan.diren7xue = this.d7xue;
            zhucaidan.diren8xue = this.d8xue;
            zhucaidan.diren9xue = this.d9xue;
            zhucaidan.diren10xue = this.d10xue;
            this.diren1xuetiao = this.owner.getChildByName("diren1").getChildByName("xuetiao");
            this.diren2xuetiao = this.owner.getChildByName("diren2").getChildByName("xuetiao");
            this.diren3xuetiao = this.owner.getChildByName("diren3").getChildByName("xuetiao");
            this.diren4xuetiao = this.owner.getChildByName("diren4").getChildByName("xuetiao");
            this.diren5xuetiao = this.owner.getChildByName("diren5").getChildByName("xuetiao");
            this.diren6xuetiao = this.owner.getChildByName("diren6").getChildByName("xuetiao");
            this.diren7xuetiao = this.owner.getChildByName("diren7").getChildByName("xuetiao");
            this.diren8xuetiao = this.owner.getChildByName("diren8").getChildByName("xuetiao");
            this.diren9xuetiao = this.owner.getChildByName("diren9").getChildByName("xuetiao");
            this.diren10xuetiao = this.owner.getChildByName("diren10").getChildByName("xuetiao");
            zhucaidan.diren1 = this.owner.getChildByName("diren1");
            zhucaidan.diren2 = this.owner.getChildByName("diren2");
            zhucaidan.diren3 = this.owner.getChildByName("diren3");
            zhucaidan.diren4 = this.owner.getChildByName("diren4");
            zhucaidan.diren5 = this.owner.getChildByName("diren5");
            zhucaidan.diren6 = this.owner.getChildByName("diren6");
            zhucaidan.diren7 = this.owner.getChildByName("diren7");
            zhucaidan.diren8 = this.owner.getChildByName("diren8");
            zhucaidan.diren9 = this.owner.getChildByName("diren9");
            zhucaidan.diren10 = this.owner.getChildByName("diren10");
            zhucaidan.diren1an = zhucaidan.diren1.getChildByName("diren");
            zhucaidan.diren2an = zhucaidan.diren2.getChildByName("diren");
            zhucaidan.diren3an = zhucaidan.diren3.getChildByName("diren");
            zhucaidan.diren4an = zhucaidan.diren4.getChildByName("diren");
            zhucaidan.diren5an = zhucaidan.diren5.getChildByName("diren");
            zhucaidan.diren6an = zhucaidan.diren6.getChildByName("diren");
            zhucaidan.diren7an = zhucaidan.diren7.getChildByName("diren");
            zhucaidan.diren8an = zhucaidan.diren8.getChildByName("diren");
            zhucaidan.diren9an = zhucaidan.diren9.getChildByName("diren");
            zhucaidan.diren10an = zhucaidan.diren10.getChildByName("diren");
            this.wujinjm = this.owner.getChildByName("wujinjm");
            this.shadishuzi = this.wujinjm.getChildByName("shadishuzi");
            this.huodehunzi = this.wujinjm.getChildByName("huodehunzi");
            this.sc = this.wujinjm.getChildByName("sc");
            this.kgg = this.wujinjm.getChildByName("kgg");
            this.fh = this.wujinjm.getChildByName("fh");
            this.zcd = this.wujinjm.getChildByName("zcd");
            this.sc.on(Laya.Event.CLICK, this, this.schanshu);
            this.kgg.on(Laya.Event.CLICK, this, this.kgghanshu);
            this.fh.on(Laya.Event.CLICK, this, this.fhhanshu);
            this.zcd.on(Laya.Event.CLICK, this, this.zcdhanshu);
        }
        schanshu() {
            Laya.SoundManager.playSound("sound/an1.wav");
            Laya.Browser.window.h5api.submitRankScore(403, this.shadishu);
        }
        kgghanshu() {
            let result = Laya.Browser.window.h5api.canPlayAd(callback);
            function callback(data) {
                Laya.Browser.window.console.log("Có thể phát quảng cáo: ", data.canPlayAd, '\n', "thời gian còn lại: ", data.remain);
            }
            if (result) {
                Laya.Browser.window.console.log('Hàng tồn kho có sẵn');
                Laya.Browser.window.h5api.playAd(data => {
                    Laya.Browser.window.console.log('Phát dữ liệu gọi lại quảng cáo', data);
                    if (data.code == 10000) {
                        console.log("Bắt đầu phát quảng cáo");
                        Laya.SoundManager.setMusicVolume(0);
                    }
                    if (data.code == 10001) {
                        console.log("Chơi kết thúc");
                        Laya.SoundManager.setMusicVolume(1);
                        Laya.SoundManager.playSound("sound/an1.wav");
                        this.hun = this.hun * 10;
                        zhucaidan.hun += this.hun;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                    }
                });
            }
            else {
                Laya.Browser.window.console.log('Không có hàng tồn kho để chơi');
                Laya.Browser.window.h5api.playAd(data => {
                    Laya.Browser.window.console.log('Phát dữ liệu gọi lại quảng cáo', data);
                });
            }
        }
        fhhanshu() {
            let result = Laya.Browser.window.h5api.canPlayAd(callback);
            function callback(data) {
                Laya.Browser.window.console.log("Có thể phát quảng cáo: ", data.canPlayAd, '\n', "thời gian còn lại: ", data.remain);
            }
            if (result) {
                Laya.Browser.window.console.log('Hàng tồn kho có sẵn');
                Laya.Browser.window.h5api.playAd(data => {
                    Laya.Browser.window.console.log('Phát dữ liệu gọi lại quảng cáo', data);
                    if (data.code == 10000) {
                        console.log("Bắt đầu phát quảng cáo");
                        Laya.SoundManager.setMusicVolume(0);
                    }
                    if (data.code == 10001) {
                        console.log("Chơi kết thúc");
                        Laya.SoundManager.setMusicVolume(1);
                        Laya.SoundManager.playSound("sound/an1.wav");
                        zhucaidan.xuetiao.gotoAndStop(100);
                        this.wujinjm.y = 0;
                        zhucaidan.dz = "zhanli";
                        zhucaidan.zhujue.y = 430;
                    }
                });
            }
            else {
                Laya.Browser.window.console.log('Không có hàng tồn kho để chơi');
                Laya.Browser.window.h5api.playAd(data => {
                    Laya.Browser.window.console.log('Phát dữ liệu gọi lại quảng cáo', data);
                });
            }
			//console.log("346ff", data.code);
        }
        zcdhanshu() {
            Laya.SoundManager.playSound("sound/an1.wav");
            zhucaidan.hun += this.hun;
            Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
            zhucaidan.yykg = true;
            Laya.Scene.open("zhucaidan.scene");
        }
        onUpdate() {
            if (zhucaidan.xuetiao.index <= 0) {
                zhucaidan.xuetiao.gotoAndStop(0);
                zhucaidan.dz = "si";
                this.wujinjm.y = 507;
                zhucaidan.zhujue.y = -500;
            }
            this.shadishuzi2.text = "Đã hạ： " + this.shadishu;
            this.shadishuzi.text = "Đã hạ:" + this.shadishu;
            this.huodehunzi.text = "Nhận: " + this.hun + " linh hồn";
            this.diren1xuetiao.play(Math.round(zhucaidan.diren1xue / this.d1xue * 100));
            this.diren2xuetiao.play(Math.round(zhucaidan.diren2xue / this.d2xue * 100));
            this.diren3xuetiao.play(Math.round(zhucaidan.diren3xue / this.d3xue * 100));
            this.diren4xuetiao.play(Math.round(zhucaidan.diren4xue / this.d4xue * 100));
            this.diren5xuetiao.play(Math.round(zhucaidan.diren5xue / this.d5xue * 100));
            this.diren6xuetiao.play(Math.round(zhucaidan.diren6xue / this.d6xue * 100));
            this.diren7xuetiao.play(Math.round(zhucaidan.diren7xue / this.d7xue * 100));
            this.diren8xuetiao.play(Math.round(zhucaidan.diren8xue / this.d8xue * 100));
            this.diren9xuetiao.play(Math.round(zhucaidan.diren9xue / this.d9xue * 100));
            this.diren10xuetiao.play(Math.round(zhucaidan.diren10xue / this.d10xue * 100));
            if (zhucaidan.diren1xue < 0) {
                zhucaidan.diren1an.play(0, true, "si");
                this.diren1xuetiao.alpha = 0;
                this.shadishu++;
                this.hun += Math.round(Math.random() * 5);
                zhucaidan.diren1.skewX = 0.25;
                zhucaidan.diren1xue = this.d1xue;
            }
            if (zhucaidan.diren2xue < 0) {
                zhucaidan.diren2an.play(0, true, "si");
                this.diren2xuetiao.alpha = 0;
                this.shadishu++;
                this.hun += Math.round(Math.random() * 5);
                zhucaidan.diren2.skewX = 0.25;
                zhucaidan.diren2xue = this.d2xue;
            }
            if (zhucaidan.diren3xue < 0) {
                zhucaidan.diren3an.play(0, true, "si");
                this.diren3xuetiao.alpha = 0;
                this.shadishu++;
                this.hun += Math.round(Math.random() * 5);
                zhucaidan.diren3.skewX = 0.25;
                zhucaidan.diren3xue = this.d3xue;
            }
            if (zhucaidan.diren4xue < 0) {
                zhucaidan.diren4an.play(0, true, "si");
                this.diren4xuetiao.alpha = 0;
                this.shadishu++;
                this.hun += Math.round(Math.random() * 5);
                zhucaidan.diren4.skewX = 0.25;
                zhucaidan.diren4xue = this.d4xue;
            }
            if (zhucaidan.diren5xue < 0) {
                zhucaidan.diren5an.play(0, true, "si");
                this.diren5xuetiao.alpha = 0;
                this.shadishu++;
                this.hun += Math.round(Math.random() * 5);
                zhucaidan.diren5.skewX = 0.25;
                zhucaidan.diren5xue = this.d5xue;
            }
            if (zhucaidan.diren6xue < 0) {
                zhucaidan.diren6an.play(0, true, "si");
                this.diren6xuetiao.alpha = 0;
                this.shadishu++;
                this.hun += Math.round(Math.random() * 5);
                zhucaidan.diren6.skewX = 0.25;
                zhucaidan.diren6xue = this.d6xue;
            }
            if (zhucaidan.diren7xue < 0) {
                zhucaidan.diren7an.play(0, true, "si");
                this.diren7xuetiao.alpha = 0;
                this.shadishu++;
                this.hun += Math.round(Math.random() * 5);
                zhucaidan.diren7.skewX = 0.25;
                zhucaidan.diren7xue = this.d7xue;
            }
            if (zhucaidan.diren8xue < 0) {
                zhucaidan.diren8an.play(0, true, "si");
                this.diren8xuetiao.alpha = 0;
                this.shadishu++;
                this.hun += Math.round(Math.random() * 5);
                zhucaidan.diren8.skewX = 0.25;
                zhucaidan.diren8xue = this.d8xue;
            }
            if (zhucaidan.diren9xue < 0) {
                zhucaidan.diren9an.play(0, true, "si");
                this.diren9xuetiao.alpha = 0;
                this.shadishu++;
                this.hun += Math.round(Math.random() * 5);
                zhucaidan.diren9.skewX = 0.25;
                zhucaidan.diren9xue = this.d9xue;
            }
            if (zhucaidan.diren10xue < 0) {
                zhucaidan.diren10an.play(0, true, "si");
                this.diren10xuetiao.alpha = 0;
                this.shadishu++;
                this.hun += Math.round(Math.random() * 5);
                zhucaidan.diren10.skewX = 0.25;
                zhucaidan.diren10xue = this.d10xue;
            }
        }
        slzhucaidanh() {
            Laya.Scene.open("zhucaidan.scene");
        }
        slxiayiguanh() {
            zhucaidan.guan++;
            Laya.Scene.open("jiazai2.scene");
        }
        slxuanwqh() {
            Laya.Scene.open("xuanwq.scene");
        }
        slxuanguanh() {
            Laya.Scene.open("xuanguan.scene");
        }
    }

    class jiazai extends Laya.Script {
        constructor() {
            super();
            this.jindu = 0;
        }
        onEnable() {
            this.jindutiao = this.owner.getChildByName("jindutiao");
            this.jiazaizi = this.owner.getChildByName("jiazaizi");
            Laya.Scene.load("kaishi.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("zhucaidan.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("xuanguan.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("xuanguanjy.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("xuanwq.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("wqqh.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan1.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan2.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan3.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan4.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan5.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan6.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan7.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan8.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan9.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan10.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan11.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan12.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan13.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan14.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan15.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan16.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan17.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan18.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan19.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan20.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan21.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan22.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan23.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan24.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan25.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan26.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan27.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan28.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan29.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guan30.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("guanwujin.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("jyguan1.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("jyguan2.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("jyguan3.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("jyguan4.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("jyguan5.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("jyguan6.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("jyguan7.scene", new Laya.Handler(this, this.wc));
            Laya.Scene.load("jiazai2.scene", new Laya.Handler(this, this.wc));
        }
        wc() {
            this.jindu++;
        }
        onUpdate() {
            if (this.jindu >= 45) {
                Laya.Scene.open("kaishi.scene");
            }
            this.jindutiao.play(this.jindu);
            this.jiazaizi.text = Math.round(this.jindutiao.index / 45 * 100) + "%";
        }
    }

    class jiazai2 extends Laya.Script {
        constructor() { super(); }
        onEnable() {
            this.jindutiao = this.owner.getChildByName("jindutiao");
            this.jindutiao.play();
            this.jindutiao.on(Laya.Event.COMPLETE, this, this.wc2);
        }
        wc2() {
            if (zhucaidan.guan == 1) {
                Laya.Scene.open("guan1.scene");
            }
            if (zhucaidan.guan == 2) {
                Laya.Scene.open("guan2.scene");
            }
            if (zhucaidan.guan == 3) {
                Laya.Scene.open("guan3.scene");
            }
            if (zhucaidan.guan == 4) {
                Laya.Scene.open("guan4.scene");
            }
            if (zhucaidan.guan == 5) {
                Laya.Scene.open("guan5.scene");
            }
            if (zhucaidan.guan == 6) {
                Laya.Scene.open("guan6.scene");
            }
            if (zhucaidan.guan == 7) {
                Laya.Scene.open("guan7.scene");
            }
            if (zhucaidan.guan == 8) {
                Laya.Scene.open("guan8.scene");
            }
            if (zhucaidan.guan == 9) {
                Laya.Scene.open("guan9.scene");
            }
            if (zhucaidan.guan == 10) {
                Laya.Scene.open("guan10.scene");
            }
            if (zhucaidan.guan == 11) {
                Laya.Scene.open("guan11.scene");
            }
            if (zhucaidan.guan == 12) {
                Laya.Scene.open("guan12.scene");
            }
            if (zhucaidan.guan == 13) {
                Laya.Scene.open("guan13.scene");
            }
            if (zhucaidan.guan == 14) {
                Laya.Scene.open("guan14.scene");
            }
            if (zhucaidan.guan == 15) {
                Laya.Scene.open("guan15.scene");
            }
            if (zhucaidan.guan == 16) {
                Laya.Scene.open("guan16.scene");
            }
            if (zhucaidan.guan == 17) {
                Laya.Scene.open("guan17.scene");
            }
            if (zhucaidan.guan == 18) {
                Laya.Scene.open("guan18.scene");
            }
            if (zhucaidan.guan == 19) {
                Laya.Scene.open("guan19.scene");
            }
            if (zhucaidan.guan == 20) {
                Laya.Scene.open("guan20.scene");
            }
            if (zhucaidan.guan == 21) {
                Laya.Scene.open("guan21.scene");
            }
            if (zhucaidan.guan == 22) {
                Laya.Scene.open("guan22.scene");
            }
            if (zhucaidan.guan == 23) {
                Laya.Scene.open("guan23.scene");
            }
            if (zhucaidan.guan == 24) {
                Laya.Scene.open("guan24.scene");
            }
            if (zhucaidan.guan == 25) {
                Laya.Scene.open("guan25.scene");
            }
            if (zhucaidan.guan == 26) {
                Laya.Scene.open("guan26.scene");
            }
            if (zhucaidan.guan == 27) {
                Laya.Scene.open("guan27.scene");
            }
            if (zhucaidan.guan == 28) {
                Laya.Scene.open("guan28.scene");
            }
            if (zhucaidan.guan == 29) {
                Laya.Scene.open("guan29.scene");
            }
            if (zhucaidan.guan == 30) {
                Laya.Scene.open("guan30.scene");
            }
            if (zhucaidan.guan == 31) {
                Laya.Scene.open("guanwujin.scene");
            }
            if (zhucaidan.guan == 41) {
                Laya.Scene.open("jyguan1.scene");
            }
            if (zhucaidan.guan == 42) {
                Laya.Scene.open("jyguan2.scene");
            }
            if (zhucaidan.guan == 43) {
                Laya.Scene.open("jyguan3.scene");
            }
            if (zhucaidan.guan == 44) {
                Laya.Scene.open("jyguan4.scene");
            }
            if (zhucaidan.guan == 45) {
                Laya.Scene.open("jyguan5.scene");
            }
            if (zhucaidan.guan == 46) {
                Laya.Scene.open("jyguan6.scene");
            }
            if (zhucaidan.guan == 47) {
                Laya.Scene.open("jyguan7.scene");
            }
        }
    }

    class jydiren extends Laya.Script {
        constructor() { super(); }
        onEnable() {
            this.owner.x = Math.random() * 1500 + 500;
            this.dafeispeed = 20;
            this.luospeed = 2;
            this.diren = this.owner.getChildByName("diren");
            this.xuetiao = this.owner.getChildByName("xuetiao");
            this.dz = "chuxian";
            this.diren.on(Laya.Event.COMPLETE, this, this.bowan);
            this.diren.play(0, true, "chuxian");
            this.pos = this.owner.x;
            this.owner.y = 430;
            this.qy = this.owner.getChildByName("qy");
        }
        onUpdate() {
            this.owner.x = zhucaidan.ditu.x + this.pos;
            if (this.owner.y >= 430) {
                this.owner.y = 430;
            }
            if (this.owner.skewX == 0) {
                if (this.dz == "zou") {
                    if (this.owner.x > zhucaidan.zhujue.x + 100) {
                        this.diren.scaleX = 2;
                        this.qy.scaleX = 1;
                        this.pos -= this.speed;
                    }
                    if (this.owner.x < zhucaidan.zhujue.x - 100) {
                        this.diren.scaleX = -2;
                        this.qy.scaleX = -1;
                        this.pos += this.speed;
                    }
                }
            }
            if (this.dz == "gj") {
                if (this.diren.index == this.gjz) {
                    if (this.qy.hitTestPoint(zhucaidan.zhujue.x, zhucaidan.zhujue.y)) {
                        zhucaidan.xuetiao.gotoAndStop(zhucaidan.xuetiao.index - this.sh);
                        Laya.SoundManager.playSound("sound/kan11.wav");
                        let hh2 = Laya.Pool.getItemByCreateFun("hh", this.hh.create, this.hh);
                        hh2.pos(zhucaidan.zhujue.x, zhucaidan.zhujue.y - 50);
                        Laya.stage.addChild(hh2);
                    }
                }
            }
        }
        bowan() {
            if (this.dz == "chuxian") {
                this.diren.play(0, true, "zhanli");
                this.dz = "zhanli";
            }
            if (this.owner.skewX == 0) {
                if (this.dz == "zhanli" || this.dz == "zou" || this.dz == "gj") {
                    let suiji;
                    suiji = Math.round(Math.random() * 5);
                    if (suiji == 0) {
                        this.diren.play(0, true, "zhanli");
                        this.dz = "zhanli";
                    }
                    if (suiji == 1 || suiji == 2) {
                        this.diren.play(0, true, "zou");
                        this.dz = "zou";
                    }
                    if (suiji == 4 || suiji == 3 || suiji == 5) {
                        this.diren.play(0, true, "gj");
                        this.dz = "gj";
                    }
                    this.owner.skewX = 0;
                }
            }
            if (this.owner.skewX == 0.25) {
                zhucaidan.shadishu++;
                Laya.LocalStorage.setItem("shadishu", JSON.stringify(zhucaidan.shadishu));
                this.owner.removeSelf();
                this.owner.y = -200;
            }
        }
    }

    class jyguan extends Laya.Script {
        constructor() { super(); }
        onEnable() {
            zhucaidan.jyguan = this.jyguand;
            zhucaidan.diren1xue = this.d1xue;
            this.jydirenxue = this.owner.getChildByName("jydirenxue");
            this.diren1xuetiao = this.owner.getChildByName("diren1").getChildByName("xuetiao");
            zhucaidan.diren1 = this.owner.getChildByName("diren1");
            zhucaidan.diren2 = this.owner.getChildByName("diren2");
            zhucaidan.diren3 = this.owner.getChildByName("diren3");
            zhucaidan.diren4 = this.owner.getChildByName("diren4");
            zhucaidan.diren5 = this.owner.getChildByName("diren5");
            zhucaidan.diren6 = this.owner.getChildByName("diren6");
            zhucaidan.diren7 = this.owner.getChildByName("diren7");
            zhucaidan.diren8 = this.owner.getChildByName("diren8");
            zhucaidan.diren9 = this.owner.getChildByName("diren9");
            zhucaidan.diren10 = this.owner.getChildByName("diren10");
            zhucaidan.diren1an = zhucaidan.diren1.getChildByName("diren");
            this.sljm = this.owner.getChildByName("sljm");
            this.shengli = this.sljm.getChildByName("shengli");
            this.shenglizi1 = this.shengli.getChildByName("an1");
            this.shenglizi2 = this.shengli.getChildByName("an2");
            this.shenglizi3 = this.shengli.getChildByName("an3");
            this.slzhucaidan = this.sljm.getChildByName("zhucaidan");
            this.slxiayiguan = this.sljm.getChildByName("xiayiguan");
            this.slxuanwq = this.sljm.getChildByName("xuanwq");
            this.slxuanguan = this.sljm.getChildByName("xuanguan");
            this.slzhucaidan.on(Laya.Event.CLICK, this, this.slzhucaidanh);
            this.slxiayiguan.on(Laya.Event.CLICK, this, this.slxiayiguanh);
            this.slxuanwq.on(Laya.Event.CLICK, this, this.slxuanwqh);
            this.slxuanguan.on(Laya.Event.CLICK, this, this.slxuanguanh);
            this.slkg = true;
            this.huodehun = this.sljm.getChildByName("huodehun");
            this.kgghun = this.sljm.getChildByName("kgghun");
            this.kgghun.on(Laya.Event.CLICK, this, this.kgghunhanshu);
            this.slxuanguan.visible = false;
        }
        onUpdate() {
            this.diren1xuetiao.play(Math.round(zhucaidan.diren1xue / this.d1xue * 100));
            if (zhucaidan.diren1xue < 0) {
                this.jydirenxue.visible = false;
                zhucaidan.diren1an.play(0, true, "si");
                this.diren1xuetiao.alpha = 0;
                zhucaidan.diren1.skewX = 0.25;
                zhucaidan.direnshu--;
                zhucaidan.diren1xue = this.d1xue;
            }
            this.jydirenxue.play(this.diren1xuetiao.index);
            if (this.slkg == true) {
                if (zhucaidan.diren1.y == -200) {
                    this.sljm.y = 0;
                    this.shenglizi1.play();
                    this.shenglizi2.play();
                    this.shenglizi3.play();
                    this.slkg = false;
                    this.huode = Math.round(Math.random() * 99 + 1);
                    this.huodehun.text = "Nhận " + this.huode +  " linh hồn";
                    zhucaidan.hun += this.huode;
                    Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                    if (zhucaidan.jyguanka == zhucaidan.jyguan) {
                        zhucaidan.jyguanka++;
                        Laya.LocalStorage.setItem("jyguanka", JSON.stringify(zhucaidan.jyguanka));
                    }
                }
            }
        }
        slzhucaidanh() {
            zhucaidan.yykg = true;
            Laya.SoundManager.playSound("sound/an1.wav");
            Laya.Scene.open("zhucaidan.scene");
        }
        slxiayiguanh() {
            Laya.SoundManager.playSound("sound/an1.wav");
            if (zhucaidan.jyguan == 1) {
                zhucaidan.guan = 42;
            }
            if (zhucaidan.jyguan == 2) {
                zhucaidan.guan = 43;
            }
            if (zhucaidan.jyguan == 3) {
                zhucaidan.guan = 44;
            }
            if (zhucaidan.jyguan == 4) {
                zhucaidan.guan = 45;
            }
            if (zhucaidan.jyguan == 5) {
                zhucaidan.guan = 46;
            }
            if (zhucaidan.jyguan == 6) {
                zhucaidan.guan = 47;
            }
            if (zhucaidan.jyguan == 7) {
                zhucaidan.guan = 47;
            }
            Laya.Scene.open("jiazai2.scene");
        }
        slxuanwqh() {
            Laya.SoundManager.playSound("sound/an1.wav");
            Laya.Scene.open("xuanwq.scene");
        }
        slxuanguanh() {
            Laya.SoundManager.playSound("sound/an1.wav");
            Laya.Scene.open("xuanguanjy.scene");
        }
        kgghunhanshu() {
            let result = Laya.Browser.window.h5api.canPlayAd(callback);
            function callback(data) {
                Laya.Browser.window.console.log("Có thể phát quảng cáo: ", data.canPlayAd, '\n', "thời gian còn lại: ", data.remain);
            }
            if (result) {
                Laya.Browser.window.console.log('Hàng tồn kho có sẵn');
                Laya.Browser.window.h5api.playAd(data => {
                    Laya.Browser.window.console.log('Phát dữ liệu gọi lại quảng cáo', data);
                    if (data.code == 10000) {
                        console.log("Bắt đầu phát quảng cáo");
                        Laya.SoundManager.setMusicVolume(0);
                    }
                    if (data.code == 10001) {
                        console.log("Chơi kết thúc");
                        Laya.SoundManager.setMusicVolume(1);
                        Laya.SoundManager.playSound("sound/an1.wav");
                        this.huode = this.huode * 10;
                        this.huodehun.text = "Nhận " + this.huode +  " linh hồn";
                        zhucaidan.hun += this.huode;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                    }
                });
            }
            else {
                Laya.Browser.window.console.log('Không có hàng tồn kho để chơi');
                Laya.Browser.window.h5api.playAd(data => {
                    Laya.Browser.window.console.log('Phát dữ liệu gọi lại quảng cáo', data);
                });
            }
        }
    }

    class san extends Laya.Script {
        constructor() {
            super();
            this.intType = 1000;
            this.numType = 1000;
            this.strType = "hello laya";
            this.boolType = true;
        }
        onEnable() {
            this.owner.on(Laya.Event.COMPLETE, this, this.sanhanshu);
        }
        sanhanshu() {
            this.owner.destroy();
        }
    }

    class kaishi extends Laya.Script {
        constructor() {
            super();
            this.intType = 1000;
            this.numType = 1000;
            this.strType = "hello laya";
            this.boolType = true;
        }
        onEnable() {
            this.kaishi = this.owner.getChildByName("kaishi");
            this.kaishi.on(Laya.Event.CLICK, this, this.kaishihanshu);
        }
        kaishihanshu() {
            Laya.SoundManager.playSound("sound/an1.wav");
            Laya.Scene.open("zhucaidan.scene");
        }
    }

    class qianghua extends Laya.Script {
        constructor() {
            super();
            this.intType = 1000;
            this.numType = 1000;
            this.strType = "hello laya";
            this.boolType = true;
        }
        onEnable() {
            this.wq1 = this.owner.getChildByName("wq1");
            this.wq2 = this.owner.getChildByName("wq2");
            this.wq3 = this.owner.getChildByName("wq3");
            this.wq4 = this.owner.getChildByName("wq4");
            this.wq5 = this.owner.getChildByName("wq5");
            this.wq6 = this.owner.getChildByName("wq6");
            this.wq7 = this.owner.getChildByName("wq7");
            this.wq8 = this.owner.getChildByName("wq8");
            this.wq9 = this.owner.getChildByName("wq9");
            this.wq10 = this.owner.getChildByName("wq10");
            this.wq11 = this.owner.getChildByName("wq11");
            this.wq12 = this.owner.getChildByName("wq12");
            this.wq13 = this.owner.getChildByName("wq13");
            this.wq14 = this.owner.getChildByName("wq14");
            this.wq15 = this.owner.getChildByName("wq15");
            this.wq16 = this.owner.getChildByName("wq16");
            this.wq17 = this.owner.getChildByName("wq17");
            this.wq18 = this.owner.getChildByName("wq18");
            this.wq19 = this.owner.getChildByName("wq19");
            this.jiantouzuo = this.owner.getChildByName("jiantouzuo");
            this.jiantouyou = this.owner.getChildByName("jiantouyou");
            this.jiantouzuo.on(Laya.Event.CLICK, this, this.jiantouzuohanshu);
            this.jiantouyou.on(Laya.Event.CLICK, this, this.jiantouyouhanshu);
            this.jiantouzuo.on(Laya.Event.MOUSE_MOVE, this, this.zuoda);
            this.jiantouzuo.on(Laya.Event.MOUSE_DOWN, this, this.zuoda);
            this.jiantouyou.on(Laya.Event.MOUSE_MOVE, this, this.youda);
            this.jiantouyou.on(Laya.Event.MOUSE_DOWN, this, this.youda);
            this.jiantouzuo.on(Laya.Event.MOUSE_OUT, this, this.zuoxiao);
            this.jiantouzuo.on(Laya.Event.MOUSE_UP, this, this.zuoxiao);
            this.jiantouyou.on(Laya.Event.MOUSE_OUT, this, this.youxiao);
            this.jiantouyou.on(Laya.Event.MOUSE_UP, this, this.youxiao);
            this.fan = this.owner.getChildByName("fan");
            this.fan.on(Laya.Event.CLICK, this, this.fanhanshu);
            this.qianghua = this.owner.getChildByName("qianghua");
            this.qianghua.on(Laya.Event.CLICK, this, this.quedinhanshu);
            this.dj = this.owner.getChildByName("dj");
            this.hun = this.owner.getChildByName("hun");
            this.baozha = this.owner.getChildByName("baozha");
            this.baozha.on(Laya.Event.COMPLETE, this, this.baozhahanshu);
            this.shengjitexiao = this.owner.getChildByName("shengjitexiao");
            this.shengjitexiao.on(Laya.Event.COMPLETE, this, this.shengjihanshu);
            this.kggjiahun = this.owner.getChildByName("kggjiahun");
            this.kggjiahun.on(Laya.Event.CLICK, this, this.kggjiahunh);
        }
        baozhahanshu() {
            this.baozha.alpha = 0;
            this.baozha.stop();
        }
        jiantouzuohanshu() {
            Laya.SoundManager.playSound("sound/an2.wav");
            this.baozha.rotation = Math.random() * 360;
            this.baozha.alpha = 1;
            this.baozha.play(0);
            if (this.wq1.x == 400) {
                this.wq1.x = 1000;
                this.wq19.pos(400, 190);
            }
            else if (this.wq19.x == 400) {
                this.wq19.x = 1000;
                this.wq18.pos(400, 190);
            }
            else if (this.wq18.x == 400) {
                this.wq18.x = 1000;
                this.wq17.pos(400, 190);
            }
            else if (this.wq17.x == 400) {
                this.wq17.x = 1000;
                this.wq16.pos(400, 190);
            }
            else if (this.wq16.x == 400) {
                this.wq16.x = 1000;
                this.wq15.pos(400, 190);
            }
            else if (this.wq15.x == 400) {
                this.wq15.x = 1000;
                this.wq14.pos(400, 190);
            }
            else if (this.wq14.x == 400) {
                this.wq14.x = 1000;
                this.wq13.pos(400, 190);
            }
            else if (this.wq13.x == 400) {
                this.wq13.x = 1000;
                this.wq12.pos(400, 190);
            }
            else if (this.wq12.x == 400) {
                this.wq12.x = 1000;
                this.wq11.pos(400, 190);
            }
            else if (this.wq11.x == 400) {
                this.wq11.x = 1000;
                this.wq10.pos(400, 190);
            }
            else if (this.wq10.x == 400) {
                this.wq10.x = 1000;
                this.wq9.pos(400, 190);
            }
            else if (this.wq9.x == 400) {
                this.wq9.x = 1000;
                this.wq8.pos(400, 190);
            }
            else if (this.wq8.x == 400) {
                this.wq8.x = 1000;
                this.wq7.pos(400, 190);
            }
            else if (this.wq7.x == 400) {
                this.wq7.x = 1000;
                this.wq6.pos(400, 190);
            }
            else if (this.wq6.x == 400) {
                this.wq6.x = 1000;
                this.wq5.pos(400, 190);
            }
            else if (this.wq5.x == 400) {
                this.wq5.x = 1000;
                this.wq4.pos(400, 190);
            }
            else if (this.wq4.x == 400) {
                this.wq4.x = 1000;
                this.wq3.pos(400, 190);
            }
            else if (this.wq3.x == 400) {
                this.wq3.x = 1000;
                this.wq2.pos(400, 190);
            }
            else if (this.wq2.x == 400) {
                this.wq2.x = 1000;
                this.wq1.pos(400, 190);
            }
        }
        jiantouyouhanshu() {
            Laya.SoundManager.playSound("sound/an2.wav");
            this.baozha.rotation = Math.random() * 360;
            this.baozha.alpha = 1;
            this.baozha.play(0);
            if (this.wq1.x == 400) {
                this.wq1.x = 1000;
                this.wq2.pos(400, 190);
            }
            else if (this.wq2.x == 400) {
                this.wq2.x = 1000;
                this.wq3.pos(400, 190);
            }
            else if (this.wq3.x == 400) {
                this.wq3.x = 1000;
                this.wq4.pos(400, 190);
            }
            else if (this.wq4.x == 400) {
                this.wq4.x = 1000;
                this.wq5.pos(400, 190);
            }
            else if (this.wq5.x == 400) {
                this.wq5.x = 1000;
                this.wq6.pos(400, 190);
            }
            else if (this.wq6.x == 400) {
                this.wq6.x = 1000;
                this.wq7.pos(400, 190);
            }
            else if (this.wq7.x == 400) {
                this.wq7.x = 1000;
                this.wq8.pos(400, 190);
            }
            else if (this.wq8.x == 400) {
                this.wq8.x = 1000;
                this.wq9.pos(400, 190);
            }
            else if (this.wq9.x == 400) {
                this.wq9.x = 1000;
                this.wq10.pos(400, 190);
            }
            else if (this.wq10.x == 400) {
                this.wq10.x = 1000;
                this.wq11.pos(400, 190);
            }
            else if (this.wq11.x == 400) {
                this.wq11.x = 1000;
                this.wq12.pos(400, 190);
            }
            else if (this.wq12.x == 400) {
                this.wq12.x = 1000;
                this.wq13.pos(400, 190);
            }
            else if (this.wq13.x == 400) {
                this.wq13.x = 1000;
                this.wq14.pos(400, 190);
            }
            else if (this.wq14.x == 400) {
                this.wq14.x = 1000;
                this.wq15.pos(400, 190);
            }
            else if (this.wq15.x == 400) {
                this.wq15.x = 1000;
                this.wq16.pos(400, 190);
            }
            else if (this.wq16.x == 400) {
                this.wq16.x = 1000;
                this.wq17.pos(400, 190);
            }
            else if (this.wq17.x == 400) {
                this.wq17.x = 1000;
                this.wq18.pos(400, 190);
            }
            else if (this.wq18.x == 400) {
                this.wq18.x = 1000;
                this.wq19.pos(400, 190);
            }
            else if (this.wq19.x == 400) {
                this.wq19.x = 1000;
                this.wq1.pos(400, 190);
            }
        }
        zuoda() {
            this.jiantouzuo.scale(-1.5, 1.5);
        }
        youda() {
            this.jiantouyou.scale(1.5, 1.5);
        }
        zuoxiao() {
            this.jiantouzuo.scale(-1, 1);
        }
        youxiao() {
            this.jiantouyou.scale(1, 1);
        }
        fanhanshu() {
            Laya.SoundManager.playSound("sound/an1.wav");
            Laya.Scene.open("zhucaidan.scene");
        }
        quedinhanshu() {
            if (zhucaidan.hun >= 500) {
                if (this.wq1.x == 400) {
                    if (zhucaidan.wq1dj < 30) {
                        zhucaidan.wq1dj++;
                        Laya.LocalStorage.setItem("wq1dj", JSON.stringify(zhucaidan.wq1dj));
                        this.shengjitexiao.visible = true;
                        this.shengjitexiao.play();
                        zhucaidan.hun -= 500;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        Laya.SoundManager.playSound("sound/shengji.wav");
                    }
                }
                if (this.wq2.x == 400) {
                    if (zhucaidan.wq2dj < 30) {
                        zhucaidan.wq2dj++;
                        Laya.LocalStorage.setItem("wq2dj", JSON.stringify(zhucaidan.wq2dj));
                        this.shengjitexiao.visible = true;
                        this.shengjitexiao.play();
                        zhucaidan.hun -= 500;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        Laya.SoundManager.playSound("sound/shengji.wav");
                    }
                }
                if (this.wq3.x == 400) {
                    if (zhucaidan.wq3dj < 30) {
                        zhucaidan.wq3dj++;
                        Laya.LocalStorage.setItem("wq3dj", JSON.stringify(zhucaidan.wq3dj));
                        this.shengjitexiao.visible = true;
                        this.shengjitexiao.play();
                        zhucaidan.hun -= 500;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        Laya.SoundManager.playSound("sound/shengji.wav");
                    }
                }
                if (this.wq4.x == 400) {
                    if (zhucaidan.wq4dj < 30) {
                        zhucaidan.wq4dj++;
                        Laya.LocalStorage.setItem("wq4dj", JSON.stringify(zhucaidan.wq4dj));
                        this.shengjitexiao.visible = true;
                        this.shengjitexiao.play();
                        zhucaidan.hun -= 500;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        Laya.SoundManager.playSound("sound/shengji.wav");
                    }
                }
                if (this.wq5.x == 400) {
                    if (zhucaidan.wq5dj < 30) {
                        zhucaidan.wq5dj++;
                        Laya.LocalStorage.setItem("wq5dj", JSON.stringify(zhucaidan.wq5dj));
                        this.shengjitexiao.visible = true;
                        this.shengjitexiao.play();
                        zhucaidan.hun -= 500;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        Laya.SoundManager.playSound("sound/shengji.wav");
                    }
                }
                if (this.wq6.x == 400) {
                    if (zhucaidan.wq6dj < 30) {
                        zhucaidan.wq6dj++;
                        Laya.LocalStorage.setItem("wq6dj", JSON.stringify(zhucaidan.wq6dj));
                        this.shengjitexiao.visible = true;
                        this.shengjitexiao.play();
                        zhucaidan.hun -= 500;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        Laya.SoundManager.playSound("sound/shengji.wav");
                    }
                }
                if (this.wq7.x == 400) {
                    if (zhucaidan.wq7dj < 30) {
                        zhucaidan.wq7dj++;
                        Laya.LocalStorage.setItem("wq7dj", JSON.stringify(zhucaidan.wq7dj));
                        this.shengjitexiao.visible = true;
                        this.shengjitexiao.play();
                        zhucaidan.hun -= 500;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        Laya.SoundManager.playSound("sound/shengji.wav");
                    }
                }
                if (this.wq8.x == 400) {
                    if (zhucaidan.wq8dj < 30) {
                        zhucaidan.wq8dj++;
                        Laya.LocalStorage.setItem("wq8dj", JSON.stringify(zhucaidan.wq8dj));
                        this.shengjitexiao.visible = true;
                        this.shengjitexiao.play();
                        zhucaidan.hun -= 500;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        Laya.SoundManager.playSound("sound/shengji.wav");
                    }
                }
                if (this.wq9.x == 400) {
                    if (zhucaidan.wq9dj < 30) {
                        zhucaidan.wq9dj++;
                        Laya.LocalStorage.setItem("wq9dj", JSON.stringify(zhucaidan.wq9dj));
                        this.shengjitexiao.visible = true;
                        this.shengjitexiao.play();
                        zhucaidan.hun -= 500;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        Laya.SoundManager.playSound("sound/shengji.wav");
                    }
                }
                if (this.wq10.x == 400) {
                    if (zhucaidan.wq10dj < 30) {
                        zhucaidan.wq10dj++;
                        Laya.LocalStorage.setItem("wq10dj", JSON.stringify(zhucaidan.wq10dj));
                        this.shengjitexiao.visible = true;
                        this.shengjitexiao.play();
                        zhucaidan.hun -= 500;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        Laya.SoundManager.playSound("sound/shengji.wav");
                    }
                }
                if (this.wq11.x == 400) {
                    if (zhucaidan.wq11dj < 30) {
                        zhucaidan.wq11dj++;
                        Laya.LocalStorage.setItem("wq11dj", JSON.stringify(zhucaidan.wq11dj));
                        this.shengjitexiao.visible = true;
                        this.shengjitexiao.play();
                        zhucaidan.hun -= 500;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        Laya.SoundManager.playSound("sound/shengji.wav");
                    }
                }
                if (this.wq12.x == 400) {
                    if (zhucaidan.wq12dj < 30) {
                        zhucaidan.wq12dj++;
                        Laya.LocalStorage.setItem("wq12dj", JSON.stringify(zhucaidan.wq12dj));
                        this.shengjitexiao.visible = true;
                        this.shengjitexiao.play();
                        zhucaidan.hun -= 500;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        Laya.SoundManager.playSound("sound/shengji.wav");
                    }
                }
                if (this.wq13.x == 400) {
                    if (zhucaidan.wq13dj < 30) {
                        zhucaidan.wq13dj++;
                        Laya.LocalStorage.setItem("wq13dj", JSON.stringify(zhucaidan.wq13dj));
                        this.shengjitexiao.visible = true;
                        this.shengjitexiao.play();
                        zhucaidan.hun -= 500;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        Laya.SoundManager.playSound("sound/shengji.wav");
                    }
                }
                if (this.wq14.x == 400) {
                    if (zhucaidan.wq14dj < 30) {
                        zhucaidan.wq14dj++;
                        Laya.LocalStorage.setItem("wq14dj", JSON.stringify(zhucaidan.wq14dj));
                        this.shengjitexiao.visible = true;
                        this.shengjitexiao.play();
                        zhucaidan.hun -= 500;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        Laya.SoundManager.playSound("sound/shengji.wav");
                    }
                }
                if (this.wq15.x == 400) {
                    if (zhucaidan.wq15dj < 30) {
                        zhucaidan.wq15dj++;
                        Laya.LocalStorage.setItem("wq15dj", JSON.stringify(zhucaidan.wq15dj));
                        this.shengjitexiao.visible = true;
                        this.shengjitexiao.play();
                        zhucaidan.hun -= 500;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        Laya.SoundManager.playSound("sound/shengji.wav");
                    }
                }
                if (this.wq16.x == 400) {
                    if (zhucaidan.wq16dj < 30) {
                        zhucaidan.wq16dj++;
                        Laya.LocalStorage.setItem("wq16dj", JSON.stringify(zhucaidan.wq16dj));
                        this.shengjitexiao.visible = true;
                        this.shengjitexiao.play();
                        zhucaidan.hun -= 500;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        Laya.SoundManager.playSound("sound/shengji.wav");
                    }
                }
                if (this.wq17.x == 400) {
                    if (zhucaidan.wq17dj < 30) {
                        zhucaidan.wq17dj++;
                        Laya.LocalStorage.setItem("wq17dj", JSON.stringify(zhucaidan.wq17dj));
                        this.shengjitexiao.visible = true;
                        this.shengjitexiao.play();
                        zhucaidan.hun -= 500;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        Laya.SoundManager.playSound("sound/shengji.wav");
                    }
                }
                if (this.wq18.x == 400) {
                    if (zhucaidan.wq18dj < 30) {
                        zhucaidan.wq18dj++;
                        Laya.LocalStorage.setItem("wq18dj", JSON.stringify(zhucaidan.wq18dj));
                        this.shengjitexiao.visible = true;
                        this.shengjitexiao.play();
                        zhucaidan.hun -= 500;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        Laya.SoundManager.playSound("sound/shengji.wav");
                    }
                }
                if (this.wq19.x == 400) {
                    if (zhucaidan.wq19dj < 30) {
                        zhucaidan.wq19dj++;
                        Laya.LocalStorage.setItem("wq19dj", JSON.stringify(zhucaidan.wq19dj));
                        this.shengjitexiao.visible = true;
                        this.shengjitexiao.play();
                        zhucaidan.hun -= 500;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                        Laya.SoundManager.playSound("sound/shengji.wav");
                    }
                }
            }
        }
        kggjiahunh() {
            Laya.SoundManager.playSound("sound/an1.wav");
            let result = Laya.Browser.window.h5api.canPlayAd(callback);
            function callback(data) {
                Laya.Browser.window.console.log("Có thể phát quảng cáo: ", data.canPlayAd, '\n', "thời gian còn lại: ", data.remain);
            }
            if (result) {
                Laya.Browser.window.console.log('Hàng tồn kho có sẵn');
                Laya.Browser.window.h5api.playAd(data => {
                    Laya.Browser.window.console.log('Phát dữ liệu gọi lại quảng cáo', data);
                    if (data.code == 10000) {
                        console.log("Bắt đầu phát quảng cáo");
                        Laya.SoundManager.setMusicVolume(0);
                    }
                    if (data.code == 10001) {
                        console.log("Chơi kết thúc");
                        Laya.SoundManager.setMusicVolume(1);
                        zhucaidan.hun += 2000;
                        Laya.LocalStorage.setItem("hun", JSON.stringify(zhucaidan.hun));
                    }
                });
            }
            else {
                Laya.Browser.window.console.log('Không có hàng tồn kho để chơi');
                Laya.Browser.window.h5api.playAd(data => {
                    Laya.Browser.window.console.log('Phát dữ liệu gọi lại quảng cáo', data);
                });
            }
        }
        onUpdate() {
            this.hun.text = "Linh hồn sở hữu: " + zhucaidan.hun;
            if (this.wq1.x == 400) {
                this.dj.text = "Hạng: " + zhucaidan.wq1dj;
            }
            if (this.wq2.x == 400) {
                this.dj.text = "Hạng: " + zhucaidan.wq2dj;
            }
            if (this.wq3.x == 400) {
                this.dj.text = "Hạng: " + zhucaidan.wq3dj;
            }
            if (this.wq4.x == 400) {
                this.dj.text = "Hạng: " + zhucaidan.wq4dj;
            }
            if (this.wq5.x == 400) {
                this.dj.text = "Hạng: " + zhucaidan.wq5dj;
            }
            if (this.wq6.x == 400) {
                this.dj.text = "Hạng: " + zhucaidan.wq6dj;
            }
            if (this.wq7.x == 400) {
                this.dj.text = "Hạng: " + zhucaidan.wq7dj;
            }
            if (this.wq8.x == 400) {
                this.dj.text = "Hạng: " + zhucaidan.wq8dj;
            }
            if (this.wq9.x == 400) {
                this.dj.text = "Hạng: " + zhucaidan.wq9dj;
            }
            if (this.wq10.x == 400) {
                this.dj.text = "Hạng: " + zhucaidan.wq10dj;
            }
            if (this.wq11.x == 400) {
                this.dj.text = "Hạng: " + zhucaidan.wq11dj;
            }
            if (this.wq12.x == 400) {
                this.dj.text = "Hạng: " + zhucaidan.wq12dj;
            }
            if (this.wq13.x == 400) {
                this.dj.text = "Hạng: " + zhucaidan.wq13dj;
            }
            if (this.wq14.x == 400) {
                this.dj.text = "Hạng: " + zhucaidan.wq14dj;
            }
            if (this.wq15.x == 400) {
                this.dj.text = "Hạng: " + zhucaidan.wq15dj;
            }
            if (this.wq16.x == 400) {
                this.dj.text = "Hạng: " + zhucaidan.wq16dj;
            }
            if (this.wq17.x == 400) {
                this.dj.text = "Hạng: " + zhucaidan.wq17dj;
            }
            if (this.wq18.x == 400) {
                this.dj.text = "Hạng: " + zhucaidan.wq18dj;
            }
            if (this.wq19.x == 400) {
                this.dj.text = "Hạng: " + zhucaidan.wq19dj;
            }
        }
        shengjihanshu() {
            this.shengjitexiao.visible = false;
        }
    }

    class xuanguan extends Laya.Script {
        constructor() {
            super();
            this.numType = 1000;
            this.strType = "hello laya";
            this.boolType = false;
        }
        onEnable() {
            this.guan1 = this.owner.getChildByName("guan1");
            this.guan2 = this.owner.getChildByName("guan2");
            this.guan3 = this.owner.getChildByName("guan3");
            this.guan4 = this.owner.getChildByName("guan4");
            this.guan5 = this.owner.getChildByName("guan5");
            this.guan6 = this.owner.getChildByName("guan6");
            this.guan7 = this.owner.getChildByName("guan7");
            this.guan8 = this.owner.getChildByName("guan8");
            this.guan9 = this.owner.getChildByName("guan9");
            this.guan10 = this.owner.getChildByName("guan10");
            this.guan11 = this.owner.getChildByName("guan11");
            this.guan12 = this.owner.getChildByName("guan12");
            this.guan13 = this.owner.getChildByName("guan13");
            this.guan14 = this.owner.getChildByName("guan14");
            this.guan15 = this.owner.getChildByName("guan15");
            this.guan16 = this.owner.getChildByName("guan16");
            this.guan17 = this.owner.getChildByName("guan17");
            this.guan18 = this.owner.getChildByName("guan18");
            this.guan19 = this.owner.getChildByName("guan19");
            this.guan20 = this.owner.getChildByName("guan20");
            this.guan21 = this.owner.getChildByName("guan21");
            this.guan22 = this.owner.getChildByName("guan22");
            this.guan23 = this.owner.getChildByName("guan23");
            this.guan24 = this.owner.getChildByName("guan24");
            this.guan25 = this.owner.getChildByName("guan25");
            this.guan26 = this.owner.getChildByName("guan26");
            this.guan27 = this.owner.getChildByName("guan27");
            this.guan28 = this.owner.getChildByName("guan28");
            this.guan29 = this.owner.getChildByName("guan29");
            this.guan30 = this.owner.getChildByName("guan30");
            this.fanye = this.owner.getChildByName("fanye");
            this.fanye2 = this.owner.getChildByName("fanye2");
            this.shangyiye = this.owner.getChildByName("shangyiye");
            this.xiayiye = this.owner.getChildByName("xiayiye");
            this.guan1.on(Laya.Event.CLICK, this, this.guan1hanshu);
            this.guan2.on(Laya.Event.CLICK, this, this.guan2hanshu);
            this.guan3.on(Laya.Event.CLICK, this, this.guan3hanshu);
            this.guan4.on(Laya.Event.CLICK, this, this.guan4hanshu);
            this.guan5.on(Laya.Event.CLICK, this, this.guan5hanshu);
            this.guan6.on(Laya.Event.CLICK, this, this.guan6hanshu);
            this.guan7.on(Laya.Event.CLICK, this, this.guan7hanshu);
            this.guan8.on(Laya.Event.CLICK, this, this.guan8hanshu);
            this.guan9.on(Laya.Event.CLICK, this, this.guan9hanshu);
            this.guan10.on(Laya.Event.CLICK, this, this.guan10hanshu);
            this.guan11.on(Laya.Event.CLICK, this, this.guan11hanshu);
            this.guan12.on(Laya.Event.CLICK, this, this.guan12hanshu);
            this.guan13.on(Laya.Event.CLICK, this, this.guan13hanshu);
            this.guan14.on(Laya.Event.CLICK, this, this.guan14hanshu);
            this.guan15.on(Laya.Event.CLICK, this, this.guan15hanshu);
            this.guan16.on(Laya.Event.CLICK, this, this.guan16hanshu);
            this.guan17.on(Laya.Event.CLICK, this, this.guan17hanshu);
            this.guan18.on(Laya.Event.CLICK, this, this.guan18hanshu);
            this.guan19.on(Laya.Event.CLICK, this, this.guan19hanshu);
            this.guan20.on(Laya.Event.CLICK, this, this.guan20hanshu);
            this.guan21.on(Laya.Event.CLICK, this, this.guan21hanshu);
            this.guan22.on(Laya.Event.CLICK, this, this.guan22hanshu);
            this.guan23.on(Laya.Event.CLICK, this, this.guan23hanshu);
            this.guan24.on(Laya.Event.CLICK, this, this.guan24hanshu);
            this.guan25.on(Laya.Event.CLICK, this, this.guan25hanshu);
            this.guan26.on(Laya.Event.CLICK, this, this.guan26hanshu);
            this.guan27.on(Laya.Event.CLICK, this, this.guan27hanshu);
            this.guan28.on(Laya.Event.CLICK, this, this.guan28hanshu);
            this.guan29.on(Laya.Event.CLICK, this, this.guan29hanshu);
            this.guan30.on(Laya.Event.CLICK, this, this.guan30hanshu);
            this.shangyiye.on(Laya.Event.CLICK, this, this.shangyiyehanshu);
            this.xiayiye.on(Laya.Event.CLICK, this, this.xiayiyehanshu);
            this.guan1.pos(420, 30);
            this.guan2.pos(420, 118);
            this.guan3.pos(420, 205);
            this.guan4.pos(420, 293);
            this.guan5.pos(420, 380);
            this.fanye.on(Laya.Event.COMPLETE, this, this.fanyehanshu);
            this.fanye2.on(Laya.Event.COMPLETE, this, this.fanye2hanshu);
            this.fanhui = this.owner.getChildByName("fanhui");
            this.fanhui.on(Laya.Event.CLICK, this, this.fanhuihanshu);
            this.suo2 = this.guan2.getChildByName("suo");
            this.suo3 = this.guan3.getChildByName("suo");
            this.suo4 = this.guan4.getChildByName("suo");
            this.suo5 = this.guan5.getChildByName("suo");
            this.suo6 = this.guan6.getChildByName("suo");
            this.suo7 = this.guan7.getChildByName("suo");
            this.suo8 = this.guan8.getChildByName("suo");
            this.suo9 = this.guan9.getChildByName("suo");
            this.suo10 = this.guan10.getChildByName("suo");
            this.suo11 = this.guan11.getChildByName("suo");
            this.suo12 = this.guan12.getChildByName("suo");
            this.suo13 = this.guan13.getChildByName("suo");
            this.suo14 = this.guan14.getChildByName("suo");
            this.suo15 = this.guan15.getChildByName("suo");
            this.suo16 = this.guan16.getChildByName("suo");
            this.suo17 = this.guan17.getChildByName("suo");
            this.suo18 = this.guan18.getChildByName("suo");
            this.suo19 = this.guan19.getChildByName("suo");
            this.suo20 = this.guan20.getChildByName("suo");
            this.suo21 = this.guan21.getChildByName("suo");
            this.suo22 = this.guan22.getChildByName("suo");
            this.suo23 = this.guan23.getChildByName("suo");
            this.suo24 = this.guan24.getChildByName("suo");
            this.suo25 = this.guan25.getChildByName("suo");
            this.suo26 = this.guan26.getChildByName("suo");
            this.suo27 = this.guan27.getChildByName("suo");
            this.suo28 = this.guan28.getChildByName("suo");
            this.suo29 = this.guan29.getChildByName("suo");
            this.suo30 = this.guan30.getChildByName("suo");
        }
        guan1hanshu() {
            if (zhucaidan.guanka >= 1) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 1;
            }
        }
        guan2hanshu() {
            if (zhucaidan.guanka >= 2) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 2;
            }
        }
        guan3hanshu() {
            if (zhucaidan.guanka >= 3) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 3;
            }
        }
        guan4hanshu() {
            if (zhucaidan.guanka >= 4) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 4;
            }
        }
        guan5hanshu() {
            if (zhucaidan.guanka >= 5) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 5;
            }
        }
        guan6hanshu() {
            if (zhucaidan.guanka >= 6) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 6;
            }
        }
        guan7hanshu() {
            if (zhucaidan.guanka >= 7) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 7;
            }
        }
        guan8hanshu() {
            if (zhucaidan.guanka >= 8) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 8;
            }
        }
        guan9hanshu() {
            if (zhucaidan.guanka >= 9) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 9;
            }
        }
        guan10hanshu() {
            if (zhucaidan.guanka >= 10) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 10;
            }
        }
        guan11hanshu() {
            if (zhucaidan.guanka >= 11) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 11;
            }
        }
        guan12hanshu() {
            if (zhucaidan.guanka >= 12) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 12;
            }
        }
        guan13hanshu() {
            if (zhucaidan.guanka >= 13) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 13;
            }
        }
        guan14hanshu() {
            if (zhucaidan.guanka >= 14) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 14;
            }
        }
        guan15hanshu() {
            if (zhucaidan.guanka >= 15) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 15;
            }
        }
        guan16hanshu() {
            if (zhucaidan.guanka >= 16) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 16;
            }
        }
        guan17hanshu() {
            if (zhucaidan.guanka >= 17) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 17;
            }
        }
        guan18hanshu() {
            if (zhucaidan.guanka >= 18) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 18;
            }
        }
        guan19hanshu() {
            if (zhucaidan.guanka >= 19) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 19;
            }
        }
        guan20hanshu() {
            if (zhucaidan.guanka >= 20) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 20;
            }
        }
        guan21hanshu() {
            if (zhucaidan.guanka >= 21) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 21;
            }
        }
        guan22hanshu() {
            if (zhucaidan.guanka >= 22) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 22;
            }
        }
        guan23hanshu() {
            if (zhucaidan.guanka >= 23) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 23;
            }
        }
        guan24hanshu() {
            if (zhucaidan.guanka >= 24) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 24;
            }
        }
        guan25hanshu() {
            if (zhucaidan.guanka >= 25) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 25;
            }
        }
        guan26hanshu() {
            if (zhucaidan.guanka >= 26) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 26;
            }
        }
        guan27hanshu() {
            if (zhucaidan.guanka >= 27) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 27;
            }
        }
        guan28hanshu() {
            if (zhucaidan.guanka >= 28) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 28;
            }
        }
        guan29hanshu() {
            if (zhucaidan.guanka >= 29) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 29;
            }
        }
        guan30hanshu() {
            if (zhucaidan.guanka >= 30) {
                Laya.SoundManager.playSound("sound/an1.wav");
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 30;
            }
        }
        shangyiyehanshu() {
            Laya.SoundManager.playSound("sound/fanye.wav");
            this.fanye2.alpha = 1;
            this.fanye2.play();
            if (this.guan26.y == 30 && this.guan26.x == 420) {
                this.guan26.y = 600;
                this.guan27.y = 600;
                this.guan28.y = 600;
                this.guan29.y = 600;
                this.guan30.y = 600;
                this.guan21.pos(420, 30);
                this.guan22.pos(420, 118);
                this.guan23.pos(420, 205);
                this.guan24.pos(420, 293);
                this.guan25.pos(420, 380);
            }
            else if (this.guan21.y == 30 && this.guan21.x == 420) {
                this.guan21.y = 600;
                this.guan22.y = 600;
                this.guan23.y = 600;
                this.guan24.y = 600;
                this.guan25.y = 600;
                this.guan16.pos(420, 30);
                this.guan17.pos(420, 118);
                this.guan18.pos(420, 205);
                this.guan19.pos(420, 293);
                this.guan20.pos(420, 380);
            }
            else if (this.guan16.y == 30 && this.guan16.x == 420) {
                this.guan16.y = 600;
                this.guan17.y = 600;
                this.guan18.y = 600;
                this.guan19.y = 600;
                this.guan20.y = 600;
                this.guan11.pos(420, 30);
                this.guan12.pos(420, 118);
                this.guan13.pos(420, 205);
                this.guan14.pos(420, 293);
                this.guan15.pos(420, 380);
            }
            else if (this.guan11.y == 30 && this.guan11.x == 420) {
                this.guan11.y = 600;
                this.guan12.y = 600;
                this.guan13.y = 600;
                this.guan14.y = 600;
                this.guan15.y = 600;
                this.guan6.pos(420, 30);
                this.guan7.pos(420, 118);
                this.guan8.pos(420, 205);
                this.guan9.pos(420, 293);
                this.guan10.pos(420, 380);
            }
            else if (this.guan6.y == 30 && this.guan6.x == 420) {
                this.guan6.y = 600;
                this.guan7.y = 600;
                this.guan8.y = 600;
                this.guan9.y = 600;
                this.guan10.y = 600;
                this.guan1.pos(420, 30);
                this.guan2.pos(420, 118);
                this.guan3.pos(420, 205);
                this.guan4.pos(420, 293);
                this.guan5.pos(420, 380);
            }
        }
        xiayiyehanshu() {
            Laya.SoundManager.playSound("sound/fanye.wav");
            this.fanye.alpha = 1;
            this.fanye.play();
            if (this.guan1.y == 30 && this.guan1.x == 420) {
                this.guan1.y = 600;
                this.guan2.y = 600;
                this.guan3.y = 600;
                this.guan4.y = 600;
                this.guan5.y = 600;
                this.guan6.pos(420, 30);
                this.guan7.pos(420, 118);
                this.guan8.pos(420, 205);
                this.guan9.pos(420, 293);
                this.guan10.pos(420, 380);
            }
            else if (this.guan6.y == 30 && this.guan6.x == 420) {
                this.guan6.y = 600;
                this.guan7.y = 600;
                this.guan8.y = 600;
                this.guan9.y = 600;
                this.guan10.y = 600;
                this.guan11.pos(420, 30);
                this.guan12.pos(420, 118);
                this.guan13.pos(420, 205);
                this.guan14.pos(420, 293);
                this.guan15.pos(420, 380);
            }
            else if (this.guan11.y == 30 && this.guan11.x == 420) {
                this.guan11.y = 600;
                this.guan12.y = 600;
                this.guan13.y = 600;
                this.guan14.y = 600;
                this.guan15.y = 600;
                this.guan16.pos(420, 30);
                this.guan17.pos(420, 118);
                this.guan18.pos(420, 205);
                this.guan19.pos(420, 293);
                this.guan20.pos(420, 380);
            }
            else if (this.guan16.y == 30 && this.guan16.x == 420) {
                this.guan16.y = 600;
                this.guan17.y = 600;
                this.guan18.y = 600;
                this.guan19.y = 600;
                this.guan20.y = 600;
                this.guan21.pos(420, 30);
                this.guan22.pos(420, 118);
                this.guan23.pos(420, 205);
                this.guan24.pos(420, 293);
                this.guan25.pos(420, 380);
            }
            else if (this.guan21.y == 30 && this.guan21.x == 420) {
                this.guan21.y = 600;
                this.guan22.y = 600;
                this.guan23.y = 600;
                this.guan24.y = 600;
                this.guan25.y = 600;
                this.guan26.pos(420, 30);
                this.guan27.pos(420, 118);
                this.guan28.pos(420, 205);
                this.guan29.pos(420, 293);
                this.guan30.pos(420, 380);
            }
        }
        onUpdate() {
            if (this.guan1.y == 30 && this.guan1.x == 420) {
                this.shangyiye.y = -100;
            }
            else {
                this.shangyiye.y = 30;
            }
            if (this.guan26.y == 30 && this.guan26.x == 420) {
                this.xiayiye.y = 600;
            }
            else {
                this.xiayiye.y = 405;
            }
            if (zhucaidan.guanka >= 2) {
                this.suo2.visible = false;
            }
            if (zhucaidan.guanka >= 3) {
                this.suo3.visible = false;
            }
            if (zhucaidan.guanka >= 4) {
                this.suo4.visible = false;
            }
            if (zhucaidan.guanka >= 5) {
                this.suo5.visible = false;
            }
            if (zhucaidan.guanka >= 6) {
                this.suo6.visible = false;
            }
            if (zhucaidan.guanka >= 7) {
                this.suo7.visible = false;
            }
            if (zhucaidan.guanka >= 8) {
                this.suo8.visible = false;
            }
            if (zhucaidan.guanka >= 9) {
                this.suo9.visible = false;
            }
            if (zhucaidan.guanka >= 10) {
                this.suo10.visible = false;
            }
            if (zhucaidan.guanka >= 11) {
                this.suo11.visible = false;
            }
            if (zhucaidan.guanka >= 12) {
                this.suo12.visible = false;
            }
            if (zhucaidan.guanka >= 13) {
                this.suo13.visible = false;
            }
            if (zhucaidan.guanka >= 14) {
                this.suo14.visible = false;
            }
            if (zhucaidan.guanka >= 15) {
                this.suo15.visible = false;
            }
            if (zhucaidan.guanka >= 16) {
                this.suo16.visible = false;
            }
            if (zhucaidan.guanka >= 17) {
                this.suo17.visible = false;
            }
            if (zhucaidan.guanka >= 18) {
                this.suo18.visible = false;
            }
            if (zhucaidan.guanka >= 19) {
                this.suo19.visible = false;
            }
            if (zhucaidan.guanka >= 20) {
                this.suo20.visible = false;
            }
            if (zhucaidan.guanka >= 21) {
                this.suo21.visible = false;
            }
            if (zhucaidan.guanka >= 22) {
                this.suo22.visible = false;
            }
            if (zhucaidan.guanka >= 23) {
                this.suo23.visible = false;
            }
            if (zhucaidan.guanka >= 24) {
                this.suo24.visible = false;
            }
            if (zhucaidan.guanka >= 25) {
                this.suo25.visible = false;
            }
            if (zhucaidan.guanka >= 26) {
                this.suo26.visible = false;
            }
            if (zhucaidan.guanka >= 27) {
                this.suo27.visible = false;
            }
            if (zhucaidan.guanka >= 28) {
                this.suo28.visible = false;
            }
            if (zhucaidan.guanka >= 29) {
                this.suo29.visible = false;
            }
            if (zhucaidan.guanka >= 30) {
                this.suo30.visible = false;
            }
        }
        fanyehanshu() {
            this.fanye.alpha = 0;
        }
        fanye2hanshu() {
            this.fanye2.alpha = 0;
        }
        fanhuihanshu() {
            Laya.SoundManager.playSound("sound/an1.wav");
            Laya.Scene.open("zhucaidan.scene");
        }
        onMouseDown() {
            let dj;
            dj = Laya.Pool.getItemByCreateFun("hh", this.dianji.create, this.dianji);
            dj.pos(Laya.stage.mouseX, Laya.stage.mouseY);
            Laya.stage.addChild(dj);
        }
    }

    class jyxuanguan extends Laya.Script {
        constructor() {
            super();
            this.numType = 1000;
            this.strType = "hello laya";
            this.boolType = true;
        }
        onEnable() {
            this.guan1 = this.owner.getChildByName("guan1");
            this.guan2 = this.owner.getChildByName("guan2");
            this.guan3 = this.owner.getChildByName("guan3");
            this.guan4 = this.owner.getChildByName("guan4");
            this.guan5 = this.owner.getChildByName("guan5");
            this.guan6 = this.owner.getChildByName("guan6");
            this.guan7 = this.owner.getChildByName("guan7");
            this.guan1.on(Laya.Event.CLICK, this, this.guan1hanshu);
            this.guan2.on(Laya.Event.CLICK, this, this.guan2hanshu);
            this.guan3.on(Laya.Event.CLICK, this, this.guan3hanshu);
            this.guan4.on(Laya.Event.CLICK, this, this.guan4hanshu);
            this.guan5.on(Laya.Event.CLICK, this, this.guan5hanshu);
            this.guan6.on(Laya.Event.CLICK, this, this.guan6hanshu);
            this.guan7.on(Laya.Event.CLICK, this, this.guan7hanshu);
            this.guan2suo = this.guan2.getChildByName("suo");
            this.guan3suo = this.guan3.getChildByName("suo");
            this.guan4suo = this.guan4.getChildByName("suo");
            this.guan5suo = this.guan5.getChildByName("suo");
            this.guan6suo = this.guan6.getChildByName("suo");
            this.guan7suo = this.guan7.getChildByName("suo");
            this.fanhui = this.owner.getChildByName("fanhui");
            this.shangyiye = this.owner.getChildByName("shangyiye");
            this.xiayiye = this.owner.getChildByName("xiayiye");
            this.fanye1 = this.owner.getChildByName("fanye1");
            this.fanye2 = this.owner.getChildByName("fanye2");
            this.fanye1.on(Laya.Event.COMPLETE, this, this.fanye1hanshu);
            this.fanye2.on(Laya.Event.COMPLETE, this, this.fanye2hanshu);
            this.fanhui.on(Laya.Event.CLICK, this, this.fanhuihanshu);
            this.shangyiye.on(Laya.Event.CLICK, this, this.shangyiyehanshu);
            this.xiayiye.on(Laya.Event.CLICK, this, this.xiayiyehanshu);
            this.shangyiye.visible = false;
        }
        fanhuihanshu() {
            Laya.Scene.open("zhucaidan.scene");
        }
        shangyiyehanshu() {
            Laya.SoundManager.playSound("sound/fanye.wav");
            this.guan5.y = 600;
            this.guan6.y = 600;
            this.guan7.y = 600;
            this.guan1.y = 65;
            this.guan2.y = 65;
            this.guan3.y = 65;
            this.guan4.y = 65;
            this.shangyiye.visible = false;
            this.xiayiye.visible = true;
            this.fanye2.play();
            this.fanye2.visible = true;
        }
        xiayiyehanshu() {
            Laya.SoundManager.playSound("sound/fanye.wav");
            this.guan1.y = 600;
            this.guan2.y = 600;
            this.guan3.y = 600;
            this.guan4.y = 600;
            this.guan5.y = 65;
            this.guan6.y = 65;
            this.guan7.y = 65;
            this.xiayiye.visible = false;
            this.shangyiye.visible = true;
            this.fanye1.play();
            this.fanye1.visible = true;
        }
        fanye1hanshu() {
            this.fanye1.visible = false;
        }
        fanye2hanshu() {
            this.fanye2.visible = false;
        }
        onMouseDown() {
            let dj;
            dj = Laya.Pool.getItemByCreateFun("hh", this.dianji.create, this.dianji);
            dj.pos(Laya.stage.mouseX, Laya.stage.mouseY);
            Laya.stage.addChild(dj);
        }
        guan1hanshu() {
            if (zhucaidan.jyguanka >= 1) {
                zhucaidan.jyguan = 1;
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 41;
                Laya.SoundManager.playSound("sound/an1.wav");
            }
        }
        guan2hanshu() {
            if (zhucaidan.jyguanka >= 2) {
                zhucaidan.jyguan = 2;
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 42;
                Laya.SoundManager.playSound("sound/an1.wav");
            }
        }
        guan3hanshu() {
            if (zhucaidan.jyguanka >= 3) {
                zhucaidan.jyguan = 3;
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 43;
                Laya.SoundManager.playSound("sound/an1.wav");
            }
        }
        guan4hanshu() {
            if (zhucaidan.jyguanka >= 4) {
                zhucaidan.jyguan = 4;
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 44;
                Laya.SoundManager.playSound("sound/an1.wav");
            }
        }
        guan5hanshu() {
            if (zhucaidan.jyguanka >= 5) {
                zhucaidan.jyguan = 5;
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 45;
                Laya.SoundManager.playSound("sound/an1.wav");
            }
        }
        guan6hanshu() {
            if (zhucaidan.jyguanka >= 6) {
                zhucaidan.jyguan = 6;
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 46;
                Laya.SoundManager.playSound("sound/an1.wav");
            }
        }
        guan7hanshu() {
            if (zhucaidan.jyguanka >= 7) {
                zhucaidan.jyguan = 7;
                Laya.Scene.open("xuanwq.scene");
                zhucaidan.guan = 47;
                Laya.SoundManager.playSound("sound/an1.wav");
            }
        }
        onUpdate() {
            if (zhucaidan.jyguanka >= 2) {
                this.guan2suo.visible = false;
            }
            if (zhucaidan.jyguanka >= 3) {
                this.guan3suo.visible = false;
            }
            if (zhucaidan.jyguanka >= 4) {
                this.guan4suo.visible = false;
            }
            if (zhucaidan.jyguanka >= 5) {
                this.guan5suo.visible = false;
            }
            if (zhucaidan.jyguanka >= 6) {
                this.guan6suo.visible = false;
            }
            if (zhucaidan.jyguanka >= 7) {
                this.guan7suo.visible = false;
            }
        }
    }

    class xuanwq extends Laya.Script {
        constructor() {
            super();
            this.intType = 1000;
            this.numType = 1000;
            this.strType = "hello laya";
            this.boolType = true;
        }
        onEnable() {
            this.wq1 = this.owner.getChildByName("wq1");
            this.wq2 = this.owner.getChildByName("wq2");
            this.wq3 = this.owner.getChildByName("wq3");
            this.wq4 = this.owner.getChildByName("wq4");
            this.wq5 = this.owner.getChildByName("wq5");
            this.wq6 = this.owner.getChildByName("wq6");
            this.wq7 = this.owner.getChildByName("wq7");
            this.wq8 = this.owner.getChildByName("wq8");
            this.wq9 = this.owner.getChildByName("wq9");
            this.wq10 = this.owner.getChildByName("wq10");
            this.wq11 = this.owner.getChildByName("wq11");
            this.wq12 = this.owner.getChildByName("wq12");
            this.wq13 = this.owner.getChildByName("wq13");
            this.wq14 = this.owner.getChildByName("wq14");
            this.wq15 = this.owner.getChildByName("wq15");
            this.wq16 = this.owner.getChildByName("wq16");
            this.wq17 = this.owner.getChildByName("wq17");
            this.wq18 = this.owner.getChildByName("wq18");
            this.wq19 = this.owner.getChildByName("wq19");
            this.jiantouzuo = this.owner.getChildByName("jiantouzuo");
            this.jiantouyou = this.owner.getChildByName("jiantouyou");
            this.jiantouzuo.on(Laya.Event.CLICK, this, this.jiantouzuohanshu);
            this.jiantouyou.on(Laya.Event.CLICK, this, this.jiantouyouhanshu);
            this.jiantouzuo.on(Laya.Event.MOUSE_MOVE, this, this.zuoda);
            this.jiantouzuo.on(Laya.Event.MOUSE_DOWN, this, this.zuoda);
            this.jiantouyou.on(Laya.Event.MOUSE_MOVE, this, this.youda);
            this.jiantouyou.on(Laya.Event.MOUSE_DOWN, this, this.youda);
            this.jiantouzuo.on(Laya.Event.MOUSE_OUT, this, this.zuoxiao);
            this.jiantouzuo.on(Laya.Event.MOUSE_UP, this, this.zuoxiao);
            this.jiantouyou.on(Laya.Event.MOUSE_OUT, this, this.youxiao);
            this.jiantouyou.on(Laya.Event.MOUSE_UP, this, this.youxiao);
            this.fan = this.owner.getChildByName("fan");
            this.fan.on(Laya.Event.CLICK, this, this.fanhanshu);
            this.quedin = this.owner.getChildByName("quedin");
            this.quedin.on(Laya.Event.CLICK, this, this.quedinhanshu);
            this.baozha = this.owner.getChildByName("baozha");
            this.baozha.on(Laya.Event.COMPLETE, this, this.baozhahanshu);
            this.djzi = this.owner.getChildByName("dj");
        }
        baozhahanshu() {
            this.baozha.alpha = 0;
            this.baozha.stop();
        }
        jiantouzuohanshu() {
            Laya.SoundManager.playSound("sound/an2.wav");
            this.baozha.rotation = Math.random() * 360;
            this.baozha.alpha = 1;
            this.baozha.play(0);
            if (this.wq1.x == 400) {
                this.wq1.x = 1000;
                this.wq19.pos(400, 190);
            }
            else if (this.wq19.x == 400) {
                this.wq19.x = 1000;
                this.wq18.pos(400, 190);
            }
            else if (this.wq18.x == 400) {
                this.wq18.x = 1000;
                this.wq17.pos(400, 190);
            }
            else if (this.wq17.x == 400) {
                this.wq17.x = 1000;
                this.wq16.pos(400, 190);
            }
            else if (this.wq16.x == 400) {
                this.wq16.x = 1000;
                this.wq15.pos(400, 190);
            }
            else if (this.wq15.x == 400) {
                this.wq15.x = 1000;
                this.wq14.pos(400, 190);
            }
            else if (this.wq14.x == 400) {
                this.wq14.x = 1000;
                this.wq13.pos(400, 190);
            }
            else if (this.wq13.x == 400) {
                this.wq13.x = 1000;
                this.wq12.pos(400, 190);
            }
            else if (this.wq12.x == 400) {
                this.wq12.x = 1000;
                this.wq11.pos(400, 190);
            }
            else if (this.wq11.x == 400) {
                this.wq11.x = 1000;
                this.wq10.pos(400, 190);
            }
            else if (this.wq10.x == 400) {
                this.wq10.x = 1000;
                this.wq9.pos(400, 190);
            }
            else if (this.wq9.x == 400) {
                this.wq9.x = 1000;
                this.wq8.pos(400, 190);
            }
            else if (this.wq8.x == 400) {
                this.wq8.x = 1000;
                this.wq7.pos(400, 190);
            }
            else if (this.wq7.x == 400) {
                this.wq7.x = 1000;
                this.wq6.pos(400, 190);
            }
            else if (this.wq6.x == 400) {
                this.wq6.x = 1000;
                this.wq5.pos(400, 190);
            }
            else if (this.wq5.x == 400) {
                this.wq5.x = 1000;
                this.wq4.pos(400, 190);
            }
            else if (this.wq4.x == 400) {
                this.wq4.x = 1000;
                this.wq3.pos(400, 190);
            }
            else if (this.wq3.x == 400) {
                this.wq3.x = 1000;
                this.wq2.pos(400, 190);
            }
            else if (this.wq2.x == 400) {
                this.wq2.x = 1000;
                this.wq1.pos(400, 190);
            }
        }
        jiantouyouhanshu() {
            Laya.SoundManager.playSound("sound/an2.wav");
            this.baozha.rotation = Math.random() * 360;
            this.baozha.alpha = 1;
            this.baozha.play(0);
            if (this.wq1.x == 400) {
                this.wq1.x = 1000;
                this.wq2.pos(400, 190);
            }
            else if (this.wq2.x == 400) {
                this.wq2.x = 1000;
                this.wq3.pos(400, 190);
            }
            else if (this.wq3.x == 400) {
                this.wq3.x = 1000;
                this.wq4.pos(400, 190);
            }
            else if (this.wq4.x == 400) {
                this.wq4.x = 1000;
                this.wq5.pos(400, 190);
            }
            else if (this.wq5.x == 400) {
                this.wq5.x = 1000;
                this.wq6.pos(400, 190);
            }
            else if (this.wq6.x == 400) {
                this.wq6.x = 1000;
                this.wq7.pos(400, 190);
            }
            else if (this.wq7.x == 400) {
                this.wq7.x = 1000;
                this.wq8.pos(400, 190);
            }
            else if (this.wq8.x == 400) {
                this.wq8.x = 1000;
                this.wq9.pos(400, 190);
            }
            else if (this.wq9.x == 400) {
                this.wq9.x = 1000;
                this.wq10.pos(400, 190);
            }
            else if (this.wq10.x == 400) {
                this.wq10.x = 1000;
                this.wq11.pos(400, 190);
            }
            else if (this.wq11.x == 400) {
                this.wq11.x = 1000;
                this.wq12.pos(400, 190);
            }
            else if (this.wq12.x == 400) {
                this.wq12.x = 1000;
                this.wq13.pos(400, 190);
            }
            else if (this.wq13.x == 400) {
                this.wq13.x = 1000;
                this.wq14.pos(400, 190);
            }
            else if (this.wq14.x == 400) {
                this.wq14.x = 1000;
                this.wq15.pos(400, 190);
            }
            else if (this.wq15.x == 400) {
                this.wq15.x = 1000;
                this.wq16.pos(400, 190);
            }
            else if (this.wq16.x == 400) {
                this.wq16.x = 1000;
                this.wq17.pos(400, 190);
            }
            else if (this.wq17.x == 400) {
                this.wq17.x = 1000;
                this.wq18.pos(400, 190);
            }
            else if (this.wq18.x == 400) {
                this.wq18.x = 1000;
                this.wq19.pos(400, 190);
            }
            else if (this.wq19.x == 400) {
                this.wq19.x = 1000;
                this.wq1.pos(400, 190);
            }
        }
        zuoda() {
            this.jiantouzuo.scale(-1.5, 1.5);
        }
        youda() {
            this.jiantouyou.scale(1.5, 1.5);
        }
        zuoxiao() {
            this.jiantouzuo.scale(-1, 1);
        }
        youxiao() {
            this.jiantouyou.scale(1, 1);
        }
        fanhanshu() {
            Laya.SoundManager.playSound("sound/an1.wav");
            Laya.Scene.open("zhucaidan.scene");
        }
        quedinhanshu() {
            Laya.SoundManager.playSound("sound/an1.wav");
            Laya.Scene.open("jiazai2.scene");
        }
        onUpdate() {
            if (this.wq1.x == 400) {
                zhucaidan.zhujuewq = 1;
                this.djzi.text = "Hạng: " + zhucaidan.wq1dj;
            }
            else if (this.wq2.x == 400) {
                zhucaidan.zhujuewq = 2;
                this.djzi.text = "Hạng: " + zhucaidan.wq2dj;
            }
            else if (this.wq3.x == 400) {
                zhucaidan.zhujuewq = 3;
                this.djzi.text = "Hạng: " + zhucaidan.wq3dj;
            }
            else if (this.wq4.x == 400) {
                zhucaidan.zhujuewq = 4;
                this.djzi.text = "Hạng: " + zhucaidan.wq4dj;
            }
            else if (this.wq5.x == 400) {
                zhucaidan.zhujuewq = 5;
                this.djzi.text = "Hạng: " + zhucaidan.wq5dj;
            }
            else if (this.wq6.x == 400) {
                zhucaidan.zhujuewq = 6;
                this.djzi.text = "Hạng: " + zhucaidan.wq6dj;
            }
            else if (this.wq7.x == 400) {
                zhucaidan.zhujuewq = 7;
                this.djzi.text = "Hạng: " + zhucaidan.wq7dj;
            }
            else if (this.wq8.x == 400) {
                zhucaidan.zhujuewq = 8;
                this.djzi.text = "Hạng: " + zhucaidan.wq8dj;
            }
            else if (this.wq9.x == 400) {
                zhucaidan.zhujuewq = 9;
                this.djzi.text = "Hạng: " + zhucaidan.wq9dj;
            }
            else if (this.wq10.x == 400) {
                zhucaidan.zhujuewq = 10;
                this.djzi.text = "Hạng: " + zhucaidan.wq10dj;
            }
            else if (this.wq11.x == 400) {
                zhucaidan.zhujuewq = 11;
                this.djzi.text = "Hạng: " + zhucaidan.wq11dj;
            }
            else if (this.wq12.x == 400) {
                zhucaidan.zhujuewq = 12;
                this.djzi.text = "Hạng: " + zhucaidan.wq12dj;
            }
            else if (this.wq13.x == 400) {
                zhucaidan.zhujuewq = 13;
                this.djzi.text = "Hạng: " + zhucaidan.wq13dj;
            }
            else if (this.wq14.x == 400) {
                zhucaidan.zhujuewq = 14;
                this.djzi.text = "Hạng: " + zhucaidan.wq14dj;
            }
            else if (this.wq15.x == 400) {
                zhucaidan.zhujuewq = 15;
                this.djzi.text = "Hạng: " + zhucaidan.wq15dj;
            }
            else if (this.wq16.x == 400) {
                zhucaidan.zhujuewq = 16;
                this.djzi.text = "Hạng: " + zhucaidan.wq16dj;
            }
            else if (this.wq17.x == 400) {
                zhucaidan.zhujuewq = 17;
                this.djzi.text = "Hạng: " + zhucaidan.wq17dj;
            }
            else if (this.wq18.x == 400) {
                zhucaidan.zhujuewq = 18;
                this.djzi.text = "Hạng: " + zhucaidan.wq18dj;
            }
            else if (this.wq19.x == 400) {
                zhucaidan.zhujuewq = 19;
                this.djzi.text = "Hạng: " + zhucaidan.wq19dj;
            }
        }
    }

    class dianjitexiao extends Laya.Script {
        constructor() {
            super();
            this.intType = 1000;
            this.numType = 1000;
            this.strType = "hello laya";
            this.boolType = true;
        }
        onEnable() {
            this.an = this.owner.getChildByName("an");
            this.an.on(Laya.Event.COMPLETE, this, this.anhanshu);
        }
        anhanshu() {
            this.owner.destroy();
        }
    }

    class hhsan extends Laya.Script {
        constructor() {
            super();
            this.intType = 1000;
            this.numType = 1000;
            this.strType = "hello laya";
            this.boolType = true;
        }
        onEnable() {
            this.an = this.owner.getChildByName("an");
            this.an.on(Laya.Event.COMPLETE, this, this.san);
            this.an.rotation = Math.random() * 360;
        }
        san() {
            this.owner.destroy();
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("zhujue.ts", zhujue);
            reg("guan1.ts", guan1);
            reg("diren1.ts", diren1);
            reg("shenglizi.ts", shenglizi);
            reg("wujing.ts", wujing);
            reg("jiazai.ts", jiazai);
            reg("jiazai2.ts", jiazai2);
            reg("jydiren.ts", jydiren);
            reg("jyguan.ts", jyguan);
            reg("san.ts", san);
            reg("kaishi.ts", kaishi);
            reg("qianghua.ts", qianghua);
            reg("xuanguan.ts", xuanguan);
            reg("jyxuanguan.ts", jyxuanguan);
            reg("xuanwq.ts", xuanwq);
            reg("zhucaidan.ts", zhucaidan);
            reg("dianjitexiao.ts", dianjitexiao);
            reg("hhsan.ts", hhsan);
        }
    }
    GameConfig.width = 800;
    GameConfig.height = 480;
    GameConfig.scaleMode = "showall";
    GameConfig.screenMode = "horizontal";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "jiazai.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
