var Local = {};
var hasPassed = function(d){ return new Date() > d; }

Local.VO_Enabled = true;

Local.Text = {
    ui_ReleaseDate: hasPassed(new Date(2016,0,29)) ? '' : 'IN THEATERS JANUARY 29',

    ui_Menu: 'MENU',

    ui_ResumeGame: 'CHƠI TIẾP',

    ui_RestartGame: 'CHƠI MỚI',

    ui_CloseMenu: 'ĐÓNG MENU',

    ui_StartGame: 'BẮT ĐẦU',

    ui_Watch: 'FACEBOOK',

    ui_WatchURL: 'https://www.facebook.com/localhost/',

    ui_OfficialSite: 'GAME KHÁC',

    ui_OfficialSiteURL: 'https://localhost/',

    ui_PlayAgain: 'THỬ LẠI',

    ui_TournamentMode: 'NGẪU NHIÊN',

    ui_PracticeMode: 'CHỌN ĐỐI THỦ',

    ui_Next: 'TIẾP',

    ui_Back: 'LÙI LẠI',

    ui_ChooseFighter: 'CHỌN NHÂN VẬT:',

    ui_ChooseOpponent: 'CHỌN ĐỐI THỦ:',

    // for mobile ui
    ui_Attack: 'TẤN CÔNG',
    ui_Special: 'KĨ NĂNG',

    ui_Location: 'CHỌN CẢNH:',

    ui_Location0: 'CẢNH 1',
    ui_Location1: 'CẢNH 2',
    ui_Location2: 'CẢNH 3',
    ui_Location3: 'CẢNH 4',
    ui_Location4: 'CẢNH 5',
    ui_Location5: 'CẢNH 6',

    // appended to character name. eg PO WINS
    ui_Wins: ' THẮNG',


    char_po: 'PO',
    char_shifu: 'SHIFU',
    char_meimei: 'MEI MEI',
    char_tigress: 'TIGRESS',
    char_kai: 'KAI',
    char_viper: 'VIPER',
    char_mantis: 'MANTIS',
    char_monkey: 'MONKEY',
    char_crane: 'CRANE',


    legal_Copy: 'KUNG FU PANDA 3 © 2015 DreamWorks Animation L.L.C. All Rights Reserved.',

    //legal_Links: {'TERMS OF USE': 'http://www.dreamworksanimation.com/termsofuse.html', 'PRIVACY POLICY': 'http://www.dreamworksanimation.com/privacypolicy.html'},

    legal_Share: 'SHARE: ',

    // for twitter
    legal_ShareCopy: 'The Furious Fight',

    /* legal_ShareLinks: { // keys are fontawesome icon names: http://fortawesome.github.io/Font-Awesome/icons/
      'facebook': 'https://www.facebook.com/sharer/sharer.php?u=<%= url %>',
      'twitter': 'https://twitter.com/intent/tweet/?text=<%= text %>&url=<%= url %>',
      'google-plus': 'https://plus.google.com/share?url=<%= url %>',
    }, */

    payoff_ShareCopy: 'The Furious Fight',

    /* payoff_ShareLinks: { // keys are fontawesome icon names: http://fortawesome.github.io/Font-Awesome/icons/
      'facebook': 'https://www.facebook.com/sharer/sharer.php?u=<%= url %>',
      'twitter': 'https://twitter.com/intent/tweet/?text=<%= text %>&url=<%= url %>',
    }, */


    game_Ouch: 'OUCH!',

    game_Chi: 'THÊM MẠNG!',


    payoff_Brag: 'BRAG:',
    payoff_Master: 'YOU\'VE PROVEN YOURSELF TO BE A MASTER WITH <%= char %>!',
    payoff_CanYouMaster: 'CAN YOU MASTER EVERY CHARACTER?',

    payoff_Distance: 'DISTANCE',

    payoff_GreatJob: 'TUYỆT VỜI!',
    payoff_Unlock: 'You\'ve unlocked the Prize Word:',
    payoff_PrizeWord: 'NUNCHUKS',

    payoff_Copy: 'Collect all 4 words by playing each <%= games_url("Kung Fu Panda 3 Game") %>. Then, <%= code_url("enter them on our website") %> to be entered to win a trip for two to the birthplace of Kung Fu... in China!',
    payoff_GamesURL: 'http://',
    payoff_CodeURL: 'http://',

    payoff_UnlockChar: 'YOU\'VE UNLOCKED A NEW CHARACTER!',
    payoff_UnlockBG: 'YOU\'VE UNLOCKED A NEW BACKGROUND!',


    inst_Title: 'CÁCH CHƠI:',

    inst_CopyMove: '',

    inst_CopyMoveDesktop: 'Sử dụng các phím mũi tên để di chuyển.',

    inst_CopyMoveMobile: 'Chạm tay vào các phím mũi tên.',

    inst_CopyAttack: '',

    inst_CopyAttackMobile: 'Chạm tay vào phím tấn công',

    inst_CopyAttackDesktop: 'Sử dụng phím Z để tấn công',

    inst_CopySpecial: '',

    inst_CopySpecialMobile: 'Khi nạp đầy thanh năng lượng bạn có thể sử dụng kĩ năng để tấn công đối thủ!',

    inst_CopySpecialDesktop: 'Khi nạp đầy thanh năng lượng bạn có thể sử dụng kĩ năng để tấn công đối thủ',

    inst_CopyChiMeter: 'MÁU',

    inst_LetsFight: 'BẮT ĐẦU!',


    inst_Copy: 'ĐÀO TẠO VỆ SĨ BẢO VỆ PANDA VILLAGE!',

    inst_JumpDesktop: 'PRESS ANY KEY TO JUMP - HOLD TO GO HIGHER',
    inst_JumpMobile: 'TAP TO JUMP - HOLD TO GO HIGHER',

    inst_Food: 'COLLECT FOOD AND CHI (EXTRA LIFE!)',

    inst_Avoid: 'AVOID ENEMIES & OBSTACLES',


};

Local.tracking_id = 'furious_fight';
