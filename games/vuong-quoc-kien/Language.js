var Language = (function(){
    var root = {};
    root.language = "vi";

    root.data = [
        {"cn":"加载中","en-us":"Loading","pt-br":"Carregando","vi":"Đang tải","id":"Memuat"},
        {"cn":"棘刺切叶蚁","en-us":"Spiny Leafcutter Ant","pt-br":"Formiga Cortadeira Espinhosa","vi":"Kiến Cắt Lá Gai","id":"Semut Pemotong Daun Berduri"},
        {"cn":"尖颚切叶蚁","en-us":"Sharp Leafcutter Ant","pt-br":"Formiga Cortadeira Afiada","vi":"Kiến Cắt Lá Thép","id":"Semut Pemotong Daun Tajam"},
        {"cn":"橙黄行军蚁","en-us":"Orange Army Ant","pt-br":"Formiga do Exército Laranja","vi":"Kiến Hành Quân Cam","id":"Semut Tentara Jingga"},
        {"cn":"剑齿行军蚁","en-us":"Sabertooth Army Ant","pt-br":"Formiga do Exército Dente de Sabre","vi":"Kiến Hành Quân Răng Kiếm","id":"Semut Tentara Sabertooth"},
        {"cn":"金沙子弹蚁","en-us":"Golden Bullet Ant","pt-br":"Formiga Bala Dourada","vi":"Kiến Đạn Kim Sa","id":"Semut Peluru Emas"},
        {"cn":"深蓝子弹蚁","en-us":"Dark Blue Bullet Ant","pt-br":"Formiga Bala Azul-Escura","vi":"Kiến Đạn Xanh Đậm","id":"Semut Peluru Biru Tua"},
        {"cn":"赤金变异蚁","en-us":"Red Golden Mutant Ant","pt-br":"Formiga Mutante Dourada Vermelha","vi":"Kiến Biến Dị Đỏ Kim","id":"Semut Mutan Emas Merah"},
        {"cn":"热砂变异蚁","en-us":"Hot Sand Mutant Ant","pt-br":"Formiga Mutante da Areia Quente","vi":"Kiến Biến Dị Cát Nóng","id":"Semut Mutan Pasir Panas"},
        {"cn":"翠绿装甲蚁","en-us":"Emerald Armored Ant","pt-br":"Formiga-de-Armadura Esmeralda","vi":"Kiến Giáp Thúy Lục","id":"Semut Lapis Baja Zamrud"},
        {"cn":"硬化装甲蚁","en-us":"Hardened Armored Ant","pt-br":"Formiga-de-Armadura Endurecida","vi":"Kiến Giáp Sừng Hóa","id":"Semut Lapis Baja yang Dikeraskan"},
        {"cn":"全异巨首蚁","en-us":"Mutant Giant Ant","pt-br":"Formiga Gigante Mutante","vi":"Kiến Khổng Lồ Toàn Dị","id":"Semut Raksasa Mutan"},
        {"cn":"褐岩巨首蚁","en-us":"Brown Rock Giant Ant","pt-br":"Formiga Gigante de Rocha Marrom","vi":"Kiến Khổng Lồ Đá Nâu","id":"Semut Raksasa Batu Cokelat"},
        {"cn":"中华大狼蛛","en-us":"Sinensis Spider","pt-br":"Aranha Sinensis","vi":"Nhện Trung Quốc","id":"Laba-laba Sinensis"},
        {"cn":"帝王毒蜘蛛","en-us":"Poisonous Emperor Spider","pt-br":"Aranha Imperador Venenosa","vi":"Nhện Độc Đế Vương","id":"Laba-laba Kaisar Beracun"},
        {"cn":"硬甲变异蛛","en-us":"Mutant Shell Spider","pt-br":"Aranha com Casca Mutante","vi":"Nhện Biến Dị Sừng Hóa","id":"Laba-laba Cangkang Mutan"},
        {"cn":"深红独角仙","en-us":"Crimson Horned Beetle","pt-br":"Besouro-de-Chifre Carmesim","vi":"Bọ Hung Độc Giác Hồng Đen","id":"Kumbang Bertanduk Merah"},
        {"cn":"墨绿独角仙","en-us":"Dark Green Horned Beetle","pt-br":"Besouro-de-Chifre Verde-Escuro","vi":"Bọ Hung Độc Giác Xanh Tối","id":"Kumbang Bertanduk Hijau Tua"},
        {"cn":"紫荆独角仙","en-us":"Bauhinia Horned Beetle","pt-br":"Besouro-de-Chifre Bauhinia","vi":"Bọ Hung Độc Giác Tử Kinh","id":"Kumbang Bertanduk Bauhinia"},
        {"cn":"领取","en-us":"Get","pt-br":"Obter","vi":"Nhận","id":"Dapatkan"},
        {"cn":"双倍领取","en-us":"Get X 2","pt-br":"Obter X 2","vi":"Nhận X 2","id":"Dapatkan X 2"},
        {"cn":"看视频双倍领取","en-us":"Watch ads X 2","pt-br":"Assistir a anúncios X 2","vi":"Xem quảng cáo X 2","id":"Tonton iklan X 2"},
        {"cn":"经典模式","en-us":"Classic","pt-br":"Clássico","vi":"Chế Độ Kinh Điển","id":"Klasik"},
        {"cn":"吞噬一切可吞噬之物","en-us":"Devour anything you \ncan","pt-br":"Devore tudo o que \npuder","vi":"Ăn sạch những thứ \ncó thể ăn","id":"Makan apa saja yang \nkamu bisa"},
        {"cn":"龙蛋战争","en-us":"Dino Eggs Battle","pt-br":"Batalha dos Ovos \nde Dinossauro","vi":"Chiến Tranh Trứng \nKhủng Long","id":"Pertempuran \nTelur Dino"},
        {"cn":"收集最多龙蛋的玩家获得胜利","en-us":"Collect the most dino \neggs to win","pt-br":"Colete o maior número \nde ovos de dinossauro \npara ganhar","vi":"Người chơi thu thập \nnhiều trứng khủng long \nnhất sẽ giành chiến \nthắng","id":"Kumpulkan telur dino \npaling banyak untuk \nmenang"},
        {"cn":"大逃杀","en-us":"Battle Royale","pt-br":"Batalha Real","vi":"Đại Đồ Sát","id":"Battle Royale"},
        {"cn":"存活到最后的玩家获得胜利","en-us":"Stay alive until the game ends","pt-br":"Fique vivo até o fim do jogo","vi":"Người chơi sống sót sau cùng sẽ giành chiến thắng","id":"Tetap hidup sampai game berakhir"},
        {"cn":"钻石挖掘","en-us":"Digging Diamonds","pt-br":"Excavando Diamantes","vi":"Đào Kim Cương","id":"Menggali Berlian"},
        {"cn":"在限定时间得到更多的金币","en-us":"Collect the most coins to win within time limit","pt-br":"Colete o maior número de moedas para ganhar dentro do limite de tempo","vi":"Thu thập nhiều xu nhất trong kỳ hạn","id":"Kumpulkan koin terbanyak untuk menang dalam batas waktu"},
        {"cn":"普通","en-us":"Common","pt-br":"Comum","vi":"Thường","id":"Umum"},
        {"cn":"稀有","en-us":"Rare","pt-br":"Raro","vi":"Hy Hữu","id":"Langka"},
        {"cn":"史诗","en-us":"Epic","pt-br":"Épico","vi":"Hoành Tráng","id":"Epik"},
        {"cn":"传说","en-us":"Legendary","pt-br":"Lendária","vi":"Huyền Thoại","id":"Legendaris"},
        {"cn":"正在使用","en-us":"Using","pt-br":"Usando","vi":"Đang dùng","id":"Menggunakan"},
        {"cn":"使用角色","en-us":"Use insect","pt-br":"Usar inseto","vi":"Dùng côn trùng","id":"Gunakan serangga"},
        {"cn":"已解锁此角色","en-us":"This insect is unlocked","pt-br":"Este inseto está desbloqueado","vi":"Đã mở khóa","id":"Serangga ini tidak terkunci"},
        {"cn":"未完成","en-us":"Incomplete","pt-br":"Não concluída","vi":"Chưa hoàn..","id":"Tidak lengkap"},
        {"cn":"昆虫猎人","en-us":"Insect Hunter","pt-br":"Caçador de Insetos","vi":"Thợ Săn Côn Trùng","id":"Pemburu Serangga"},
        {"cn":"巨人杀手","en-us":"Killer to Giants","pt-br":"Matador de Gigantes","vi":"Sát Thủ Khổng Lồ","id":"Pembunuh untuk Raksasa"},
        {"cn":"传承之子","en-us":"Son of Legacy","pt-br":"Filho do Legado","vi":"Đệ Tử Truyền Thừa","id":"Putra Warisan"},
        {"cn":"甜品大师","en-us":"Dessert Master","pt-br":"Mestre das Sobremesas","vi":"Đại Sư Món Ngọt","id":"Guru Makanan Penutup"},
        {"cn":"水果爱好者","en-us":"Fruit Lover","pt-br":"Adorador de Frutas","vi":"Người Thích Trái Mọng","id":"Pecinta Buah"},
        {"cn":"桂冠之王","en-us":"Laurel Crown","pt-br":"Coroa de Louros","vi":"Quán Quân Nguyệt Quế","id":"Mahkota Laurel"},
        {"cn":"富甲天下","en-us":"The Richest","pt-br":"O Mais Rico","vi":"Giàu Nhất Thiên Hạ","id":"Yang Terkaya"},
        {"cn":"实力赞助","en-us":"Sponsor","pt-br":"Ptrocinador","vi":"Nhà tài trợ","id":"Sponsor"},
        {"cn":"吞噬xx只昆虫","en-us":"Devour xx insects","pt-br":"Devore xx insetos","vi":"Ăn xx côn trùng","id":"Melahap xx serangga"},
        {"cn":"击杀xx只200g以上敌人","en-us":"Kill xx enemies above 200g","pt-br":"Mate xx inimigos acima de 200g","vi":"Giết xx kẻ thù trên 200g","id":"Bunuh xx musuh di atas 200g"},
        {"cn":"使用复活xx次","en-us":"Use revival xx times","pt-br":"Use reviver xx vezes","vi":"Dùng hồi sinh xx lần","id":"Gunakan kebangkitan xx kali"},
        {"cn":"吃掉xx个糕点","en-us":"Eat xx cakes","pt-br":"Coma xx bolos","vi":"Ăn xx bánh","id":"Makan xx kue"},
        {"cn":"吃掉xx颗水果","en-us":"Eat xx fruits","pt-br":"Coma xx frutas","vi":"Ăn xx trái cây","id":"Makan xx buah"},
        {"cn":"在比赛中赢得xx次冠军","en-us":"Win 1st place xx times in games","pt-br":"Ganhou xx campeonatos","vi":"Giành chức vô địch xx","id":"Memenangkan kejuaraan xx"},
        {"cn":"观看xx次视频广告","en-us":"Watch ads xx times","pt-br":"Assista aos anúncios XX vezes","vi":"Xem QC xx lần","id":"Tonton iklan xx kali"},
        {"cn":"获得xx枚金币","en-us":"Get xx coins","pt-br":"Obtenha xx moedas","vi":"Nhận xx xu","id":"Dapatkan xx koin"},
        {"cn":"每日任务","en-us":"Daily Tasks","pt-br":"Tarefas diárias","vi":"Nhiệm vụ mỗi ngày","id":"Tugas Harian"},
        {"cn":"登陆一次游戏","en-us":"Login the game 1 time","pt-br":"Faça login no jogo 1 vez","vi":"Đăng nhập trò chơi một lần","id":"Masuk game 1 kali"},
        {"cn":"使用1次无敌护盾","en-us":"Use invicible shield 1 time","pt-br":"Use o escudo invencível 1 vez","vi":"Dùng khiên vô địch 1 lần","id":"Gunakan perisai tak terkalahkan 1 kali"},
        {"cn":"游玩1次龙蛋争霸模式","en-us":"Play in Dino Eggs Battle mode 1 time","pt-br":"Jogue a Batalha dos Ovos de Dinossauro 1 vez","vi":"Chơi chế độ Chiến Tranh Trứng Khủng Long 1 lần","id":"Mainkan 1 kali dalam mode Telur Naga"},
        {"cn":"消耗2000枚金币","en-us":"Spend 2000 coins","pt-br":"Gaste 2000 moedas","vi":"Dùng 2.000 xu","id":"Belanjakan 2.000 koin"},
        {"cn":"游玩1次大逃杀模式","en-us":"Play in Battle Royale mode 1 time","pt-br":"Jogue Batalha Real 1 vez","vi":"Chơi chế độ Đại Đồ Sát 1 lần","id":"Mainkan dalam mode Battle Royale 1 kali"},
        {"cn":"消耗500枚钻石","en-us":"Spend 500 diamonds","pt-br":"Gunakan 500 berlian","vi":"Dùng 500 kim cương","id":"Gaste 500 diamantes"},
        {"cn":"游玩1次钻石挖掘模式","en-us":"Play in Digging Diamonds mode1 time","pt-br":"Jogue Excavando Diamantes 1 vez","vi":"Chơi chế độ Đào Kim Cương 1 lần","id":"Mainkan Mode Berlian 1 kali"},
        {"cn":"使用幸运转盘进行一次抽奖","en-us":"Play lucky wheel 1 time","pt-br":"Jogue o sorteio da sorte 1 vez","vi":"Dùng Vòng Quay May Mắn rút thăm 1 lần","id":"Mainkan roda keberuntungan 1 kali"},
        {"cn":"已领取","en-us":"Claimed","pt-br":"Reivindicada","vi":"Đã nhận","id":"Diklaim"},
        {"cn":"抽奖","en-us":"Play","pt-br":"Jogar","vi":"Rút thăm","id":"Main"},
        {"cn":"免费","en-us":"free","pt-br":"grátis","vi":"miễn phí","id":"Gratis"},
        {"cn":"第1天","en-us":"Day 1","pt-br":"Dia 1","vi":"Ngày 1","id":"Hari 1"},
        {"cn":"第2天","en-us":"Day 2","pt-br":"Dia 2","vi":"Ngày 2","id":"Hari 2"},
        {"cn":"第3天","en-us":"Day 3","pt-br":"Dia 3","vi":"Ngày 3","id":"Hari 3"},
        {"cn":"第4天","en-us":"Day 4","pt-br":"Dia 4","vi":"Ngày 4","id":"Hari 4"},
        {"cn":"第5天","en-us":"Day 5","pt-br":"Dia 5","vi":"Ngày 5","id":"Hari 5"},
        {"cn":"第6天","en-us":"Day 6","pt-br":"Dia 6","vi":"Ngày 6","id":"Hari 6"},
        {"cn":"第7天","en-us":"Day 7","pt-br":"Dia 7","vi":"Ngày 7","id":"Hari 7"},
        {"cn":"次日签到","en-us":"Sign in 2th","pt-br":"Cadastre-se 2º","vi":"Đăng nhập thứ 2","id":"Masuk tanggal 2"},
        {"cn":"七日签到","en-us":"Sign in 7th","pt-br":"Cadastre-se 7º","vi":"Đăng nhập thứ 7","id":"Masuk tanggal 7"},
        {"cn":"金币礼包","en-us":"Coin Pack","pt-br":"Pacote de Moedas","vi":"Gói Xu","id":"Paket Koin"},
        {"cn":"钻石礼包","en-us":"Diamond Pack","pt-br":"Pacote de Diamantes","vi":"Gói Kim Cương","id":"Paket Berlian"},
        {"cn":"皮肤试用","en-us":"Free skin trial","pt-br":"Teste de skin grátis","vi":"Dùng thử skin","id":"Uji coba skin gratis"},
        {"cn":"初始体重+500g","en-us":"Inital weight +500g","pt-br":"Peso inicial +500g","vi":"Cân nặng ban đầu +500g","id":"Berat awal +500 gram"},
        {"cn":"免费试用","en-us":"Free trial","pt-br":"Teste grátis","vi":"Dùng thử miễn phí","id":"Uji coba gratis"},
        {"cn":"直接进入游戏","en-us":"Enter game now","pt-br":"Entre no jogo agora","vi":"Vào trò chơi trực tiếp","id":"Masuk game sekarang"},
        {"cn":"hago玩家1","en-us":"Literati","pt-br":"Enigmista","vi":"Hà Nhi","id":"Waton Wani"},
        {"cn":"hago玩家2","en-us":"Raprap","pt-br":"Elétron","vi":"Kiên Cường","id":"Cawan"},
        {"cn":"hago玩家3","en-us":"Hario","pt-br":"Sonhadora","vi":"Gia Hân","id":"Gagah Perkasa"},
        {"cn":"hago玩家4","en-us":"Lolita","pt-br":"Pobre Criatura","vi":"Điện Tử","id":"Pejuang"},
        {"cn":"hago玩家5","en-us":"Breaker","pt-br":"Sempre Jovem","vi":"Sắt","id":"Legenda"},
        {"cn":"hago玩家6","en-us":"Atom","pt-br":"Brilhante","vi":"Thùy Ngân","id":"Bandot Tua"},
        {"cn":"hago玩家7","en-us":"Dreamer","pt-br":"Lenda","vi":"Thu Hà","id":"Literati"},
        {"cn":"hago玩家8","en-us":"She-Wolf","pt-br":"Beisebol","vi":"Xu Hào","id":"Cowok Sejati"},
        {"cn":"hago玩家9","en-us":"Suportiou","pt-br":"Subcultura","vi":"Quí Moon","id":"Yang Spesial"},
        {"cn":"hago玩家10","en-us":"Smoke Bomb","pt-br":"Criancinha","vi":"Đạt Ngô","id":"Teman Sekelas"},
        {"cn":"hago玩家11","en-us":"Slungshot","pt-br":"Novato","vi":"Thiên Tài","id":"Gajah Oleng"},
        {"cn":"hago玩家12","en-us":"Spectre","pt-br":"Rádio","vi":"Dihya","id":"Radium"},
        {"cn":"hago玩家13","en-us":"Dingdong","pt-br":"Ruptura","vi":"Chiến Hữu","id":"Si Rambut Api"},
        {"cn":"hago玩家14","en-us":"ProcSocks","pt-br":"Hora do Chá","vi":"Sơn Hoàng","id":"Pendekar Mabuk"},
        {"cn":"hago玩家15","en-us":"Newbie","pt-br":"Colega de Sala","vi":"Thu Quỳnh","id":"Pengembara"},
        {"cn":"hago玩家16","en-us":"Rancor","pt-br":"Estilingue","vi":"Thảo Bế","id":"Pemula"},
        {"cn":"hago玩家17","en-us":"Vainglory","pt-br":"Woody","vi":"Hải An","id":"Caprice"},
        {"cn":"hago玩家18","en-us":"Lil Kid","pt-br":"Mais Um","vi":"Tuấn Phạm","id":"Anak Kecil"},
        {"cn":"hago玩家19","en-us":"Steppe","pt-br":"Rancor","vi":"Thư Bùi","id":"Anti Stres"},
        {"cn":"hago玩家20","en-us":"Super Piggy","pt-br":"Problema P","vi":"Kim Ân","id":"Pengelana"},
        {"cn":"hago玩家21","en-us":"Caprice","pt-br":"Bomba de Fumaça","vi":"Bán Hạ","id":"Antibedil"},
        {"cn":"hago玩家22","en-us":"DoubleMess","pt-br":"Venom","vi":"Đặc Biệt","id":"Pria Miskin"},
        {"cn":"hago玩家23","en-us":"Puzzler","pt-br":"Loba","vi":"Tân Thủ","id":"Anak Pintar"},
        {"cn":"hago玩家24","en-us":"Smart Boy","pt-br":"Quebrador","vi":"Bạn Học","id":"Udang"},
        {"cn":"hago玩家25","en-us":"Hardlife","pt-br":"Raprap","vi":"Hoàng Hôn","id":"Kaya"},
        {"cn":"hago玩家26","en-us":"Venom","pt-br":"O Especial","vi":"Linh Dương","id":"Muda Selamanya"},
        {"cn":"hago玩家27","en-us":"Diviner","pt-br":"Cachorro de Fogo","vi":"Nhóc Tỳ","id":"Anak Langit"},
        {"cn":"hago玩家28","en-us":"Anna","pt-br":"Bruxa","vi":"Literati","id":"Vainglory"},
        {"cn":"hago玩家29","en-us":"Future Live","pt-br":"Não Chores Mais","vi":"Bất Lão","id":"Ganteng Darisono"},
        {"cn":"hago玩家30","en-us":"Funny Games","pt-br":"Soberano","vi":"Con Tôm","id":"Katapel"},
        {"cn":"hago玩家31","en-us":"Teatime","pt-br":"Átomo","vi":"Chia Cắt","id":"Dendam"},
        {"cn":"hago玩家32","en-us":"Crucible","pt-br":"Dihya","vi":"Chí Tường","id":"Subkultur"},
        {"cn":"hago玩家33","en-us":"Baseball","pt-br":"Kiddo","vi":"Minh Khánh","id":"Dewa Asmara"},
        {"cn":"hago玩家34","en-us":"Classmate","pt-br":"Vanglória","vi":"Bóng Ma","id":"Lelaki Tangguh"},
        {"cn":"hago玩家35","en-us":"Dihya","pt-br":"Lolita","vi":"Duy Nguyễn","id":"Teman Kecil"},
        {"cn":"hago玩家36","en-us":"Married Man","pt-br":"Suporte","vi":"Linh Chi","id":"Padang Rumput"},
        {"cn":"hago玩家37","en-us":"Subculture","pt-br":"Cadinho","vi":"Goshawk","id":"Bom Asap"},
        {"cn":"hago玩家38","en-us":"Hardcore","pt-br":"Homem-morcego","vi":"Lang Nữ","id":"Pejuang Cinta"},
        {"cn":"hago玩家39","en-us":"Special One","pt-br":"Dingdong","vi":"Mai Hương","id":"Pemecah"},
        {"cn":"hago玩家40","en-us":"Mental","pt-br":"Nobre Alemão","vi":"Vi Phạm","id":"Anak"},
        {"cn":"hago玩家41","en-us":"Radium","pt-br":"Companheiro","vi":"Bom Khói","id":"Puzzler"},
        {"cn":"hago玩家42","en-us":"Natural Gold","pt-br":"Camarão","vi":"Lolita","id":"Dihya"},
        {"cn":"hago玩家43","en-us":"Haᴄer","pt-br":"Capricho","vi":"Nghèo Hèn","id":"Kebo Ngepet"},
        {"cn":"hago玩家44","en-us":"Sparky","pt-br":"Ás","vi":"Nam Anh","id":"Detektif Jono"},
        {"cn":"hago玩家45","en-us":"Woody","pt-br":"Açor","vi":"Hiền Hồ","id":"Goshawk"},
        {"cn":"hago玩家46","en-us":"Legend","pt-br":"ProcSocks","vi":"Radium","id":"Sarjana Abadi"},
        {"cn":"hago玩家47","en-us":"Firedog","pt-br":"Rico","vi":"Minh Dương","id":"Elektron"},
        {"cn":"hago玩家48","en-us":"Irons","pt-br":"Espectro","vi":"Đường Vy","id":"Besi"},
        {"cn":"hago玩家49","en-us":"Electron","pt-br":"Lutador da Luz","vi":"Thảo Nguyên","id":"Senopati Manja"},
        {"cn":"hago玩家50","en-us":"LightFighter","pt-br":"Super Porco","vi":"Tú Bảo","id":"Cewek Manis"},
        {"cn":"hago玩家51","en-us":"Poor Guy","pt-br":"Literati","vi":"Thù Oán","id":"Atom"},
        {"cn":"hago玩家52","en-us":"Wealthy","pt-br":"Punk","vi":"Nọc Độc","id":"Hantu"},
        {"cn":"hago玩家53","en-us":"Shrimp","pt-br":"Bagunça Dobrada","vi":"Phá Hoại","id":"Pelanggaran"},
        {"cn":"hago玩家54","en-us":"Lil Fellow","pt-br":"Saltador","vi":"Phú Ông","id":"Venom"},
        {"cn":"hago玩家55","en-us":"Kiddo","pt-br":"Ferros","vi":"Ná Thở","id":"Lolita"},
        {"cn":"hago玩家56","en-us":"Goshawk","pt-br":"Dica de Ouro","vi":"Nhóc","id":"Pemuda Linglung"},
        {"cn":"hago玩家57","en-us":"Forever Young","pt-br":"Estepe","vi":"Vương Giả","id":"Serigala Betina"},
        {"cn":"hago玩家58","en-us":"Scary Ninja","pt-br":"Dançarina","vi":"Nguyên Tử","id":"Peramal"},
        {"cn":"hago玩家59","en-us":"Jumper","pt-br":"Garoto Esperto","vi":"Hùng Tú","id":"Jejaka Tingting"},
        {"cn":"hago玩家60","en-us":"Breach","pt-br":"Adivinhador","vi":"Thách Đố","id":"Monyet Ganteng"},
        {"cn":"你","en-us":"You","pt-br":"Você","vi":"Bạn","id":"Kamu"},
        {"cn":"任务每天0点刷新，完成后可获得相应奖励","en-us":"Tasks refresh at 00:00 every day. Complete tasks to get corresponding \nrewards","pt-br":"As tarefas são atualizadas à 00h, todos os dias. Conclua as tarefas para obter \nas recompensas correspondentes","vi":"Nhiệm vụ làm mới lúc 00:00 mỗi ngày, hoàn thành để nhận phần thưởng \ntương ứng","id":"Tugas direfresh pukul 00.00 setiap hari. Selesaikan tugas untuk mendapatkan \nhadiah yang sesuai"},
        {"cn":"复活","en-us":"Revive","pt-br":"Renascimento","vi":"Tái sinh","id":"kebangkitan"},
        {"cn":"关闭","en-us":"Close","pt-br":"Fecho","vi":"Khép kín","id":"Penutup"},
        {"cn":"看视频复活","en-us":"Watch the video resurrection","pt-br":"Assista ao vídeo da ressurreição","vi":"Xem QC để hồi sinh sinh","id":"Tonton video kebangkitan"},
        {"cn":"游戏暂停","en-us":"Pause game","pt-br":"Pausar jogo","vi":"Tạm ngưng trò chơi","id":"Jeda game"},
        {"cn":"回主菜单","en-us":"Back to menu","pt-br":"Voltar para o menu","vi":"Quay lại menu","id":"Kembali ke menu"},
        {"cn":"继续游戏","en-us":"Continue game","pt-br":"Continuar jogo","vi":"Tiếp tục trò chơi","id":"Lanjutkan game"},
        {"cn":"剩余时间","en-us":"Remaining time","pt-br":"Tempo restante","vi":"Thời gian còn lại","id":"Waktu tersisa"},
        {"cn":"剩余玩家","en-us":"Player","pt-br":"Jogador","vi":"Người chơi","id":"Pemain"},
        {"cn":"您的排名","en-us":"Your ranking","pt-br":"Sua classificação","vi":"Thứ hạng của bạn","id":"Peringkatmu"},
        {"cn":"您的体重","en-us":"Your weight","pt-br":"Seu peso","vi":"Cân nặng của bạn","id":"Bobotmu"},
        {"cn":"继续","en-us":"Continue","pt-br":"Continuar","vi":"Tiếp tục","id":"Lanjut"},
        {"cn":"看视频获得5倍奖励","en-us":"Watch video 5x","pt-br":"Assista ao vídeo x5","vi":"Xem video 5x","id":"Tonton video 5x"},
        //未翻译
        {"cn":"第（）名","en-us":"()th place","pt-br":"()º lugar","vi":"Hạng ()","id":"Tempat ke-()"},
        {"cn":"皮肤","en-us":"Skins","pt-br":"Skins","vi":"Skin","id":"Skin"},
        {"cn":"成就","en-us":"Achieve.","pt-br":"Conq.","vi":"Thành Tích","id":"Capaian"},
        {"cn":"任务","en-us":"Tasks","pt-br":"Tarefas","vi":"Nhiệm Vụ","id":"Tugas"},
        {"cn":"转盘","en-us":"Wheel","pt-br":"Sorteio da Sorte","vi":"Vòng Quay","id":"Roda"},
        {"cn":"签到","en-us":"Check-in","pt-br":"Check-in","vi":"Điểm Danh","id":"Check-in"},
        {"cn":"使用中","en-us":"In use","pt-br":"Em uso","vi":"Đang dùng","id":"Digunakan"},
        {"cn":"已拥有","en-us":"Owned","pt-br":"Possui","vi":"Đã sở hữu","id":"Dimiliki"},
        {"cn":"解锁","en-us":"Unlock","pt-br":"Desbloquear","vi":"Mở khóa","id":"Buka kunci"},
        {"cn":"幸运转盘","en-us":"Lucky Wheel","pt-br":"Roleta da Sorte","vi":"Vòng Quay May Mắn","id":"Roda Keberuntungan"},
        {"cn":"获得奖励","en-us":"Get rewards","pt-br":"Obter recompensas","vi":"Nhận thưởng","id":"Dapatkan hadiah"},
        {"cn":"签到奖励","en-us":"Check-in reward","pt-br":"Recompensa de check-in","vi":"Phần Thưởng Điểm Danh","id":"Hadiah check-in"},
        
        
        {"cn":"加速飞鞋","en-us":"Speed Up Shoes","pt-br":"Sapatos de aceleração","vi":"Giày Tăng Tốc","id":"Percepat Sepatu"},
        {"cn":"移动速度增加20%","en-us":"speed + 20%","pt-br":"Rapidez + 20%","vi":"tốc độ + 20%","id":"kecepatan + 20%"},
        {"cn":"成长药水","en-us":"Growth Potion","pt-br":"Poção de Crescimento","vi":"Thuốc Tăng Trưởng","id":"Ramuan Pertumbuhan"},
        {"cn":"成长速度增加100%","en-us":"Grow + 100%","pt-br":"Crescer + 100%","vi":"Lớn lên + 100%","id":"Tumbuh + 100%"},
        {"cn":"巨无霸","en-us":"Giant Insect","pt-br":"Inseto Gigante","vi":"To Vô Đối","id":"Serangga Raksasa"},
        {"cn":"初始体重增加500g","en-us":"Initial weight +500g","pt-br":"Peso inicial +500g","vi":"Cân nặng ban đầu +500g","id":"Berat awal +500 gram"},
  
        {"cn":"吃到食物的成长值+500%","en-us":"Growth by taking foods +500%","pt-br":"Crescimento por ingestão de alimentos +500%","vi":"Điểm tăng trưởng nhờ ăn đồ ăn +500%","id":"Pertumbuhan dengan mengambil makanan +500%"},
        {"cn":"移动速度+60%","en-us":"Movement speed +60%","pt-br":"Velocidade dos movimentos +60%","vi":"Tốc độ di chuyển +60%","id":"Kecepatan gerakan +60%"},
        {"cn":"护盾补给","en-us":"Shield","pt-br":"Escudo","vi":"Khiên","id":"Perisai"},
        {"cn":"进入护盾状态，自身无敌！","en-us":"You are invincible under shield protection!","pt-br":"Você é invencível sob a proteção do escudo!","vi":"Trong khi khiên bảo vệ, bạn sẽ bất tử!","id":"Kamu tak terkalahkan dengan perlindungan perisai!"},
        {"cn":"排行榜","en-us":"Ranking","pt-br":"Classificação","vi":"Thứ Hạng","id":"Peringkat"},
        {"cn":"击杀","en-us":"Killed","pt-br":"Matou","vi":"đã hạ gục","id":"Terbunuh"},
       
        {"cn":"自己","en-us":"You","pt-br":"Você","vi":"Bản thân","id":"Kamu"},
        {"cn":"倒计时","en-us":"Countdown","pt-br":"Contagem regressiva","vi":"Đếm ngược","id":"Hitung mundur"},
       

        {"cn":"30秒后游戏场即将关闭","en-us":"The current game ends in 30 secs","pt-br":"O jogo atual terminará em 30 seg.","vi":"Trò chơi hiện tại kết thúc sau 30 giây","id":"Game saat ini berakhir dalam 30 detik"},
     
        ]
        
        root.getName =function(val){
            for (let i = 0; i < root.data.length; i++) {
                if (root.data[i].cn == val) {
                    return root.data[i][root.language];
                }
            }
        }

        root.setNameLength =function(n,leng){
            return n.length > leng ? n.substring(0,leng) + "..." : n;
        }

        root.getLanguage = function(){
            if(typeof hg == "undefined")return;
            let res = hg.getSystemInfoSync();
            let arr = ["id","pt-br","vi"]
    
            for(let i = 0; i < arr.length; i++){
                if(res.language == arr[i]){
                    root.language = res.language + "";
                    return;
                }else{
                    root.language = "en-us"
                }
            }
        }

    return root;
})();


