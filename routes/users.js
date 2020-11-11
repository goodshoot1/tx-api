var express = require('express');
const {route} = require('.');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.get('/info', (req, res) => {
    res.send({
        "status": 10000,
        "msg": "查询成功",
        "data": {
            "uid": 3899487,
            "username": "weide1235",
            "userTypeName": "新会员",
            "loginMobile": "",
            "mobile": "13887656588",
            "wallet": 1000.0,
            "integral": 8888.0,
            "totalBalance": 0.0,
            "regDate": "2020-11-08 20:17:01",
            "loginDate": "2020-11-09 20:38:38",
            "vipLevel": "1",
            "realname": "会员",
            "weixin": "sdf324",
            "email": "",
            "qq": "",
            "rmk": "",
            "unread": 0,
            "hasMobile": false,
            "hasWithdrawPassword": false,
            "hasBankCard": false,
            "hasJoin": 2,
            "hasAlipay": false,
            "openAlipay": true,
            "openUsdt": true,
            "hasUSDT": false
        }
    })
})

router.get('/config', (req, res) => {
    console.log(' req.query', req.query)
    const {terminal} = req.query;

    if (!terminal) {
        res.send({
            msg: "参数不正确",
            status: 20000
        })
        return;
    }

    res.send(
        {
            "status": 10000,
            "msg": "查询成功",
            "data": [{
                "gameCode": "GGBY",
                "gameName": "GG捕鱼",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn/menuList/YHHB/0/transfer/ggby.png",
                "sortNo": 0
            }, {
                "gameCode": "OG",
                "gameName": "OG视讯",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/og.png",
                "sortNo": 0
            }, {
                "gameCode": "DTQP",
                "gameName": "大唐棋牌",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/dt.png",
                "sortNo": 0
            }, {
                "gameCode": "VR",
                "gameName": "VR彩票",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/vr.png",
                "sortNo": 0
            }, {
                "gameCode": "HABA",
                "gameName": "HABA电子",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/haba.png",
                "sortNo": 0
            }, {
                "gameCode": "PS",
                "gameName": "PS电子",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/ps.png",
                "sortNo": 0
            }, {
                "gameCode": "DS",
                "gameName": "DS视讯",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/ds.png",
                "sortNo": 0
            }, {
                "gameCode": "HG",
                "gameName": "皇冠体育",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/hg.png",
                "sortNo": 0
            }, {
                "gameCode": "IBC",
                "gameName": "沙巴体育",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/ibc.png",
                "sortNo": 0
            }, {
                "gameCode": "AGIN",
                "gameName": "AGIN视讯/电子/捕鱼/体育",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/ag.png",
                "sortNo": 0
            }, {
                "gameCode": "BG",
                "gameName": "BG视讯",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/bg.png",
                "sortNo": 0
            }, {
                "gameCode": "JDB",
                "gameName": "JDB电子",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/jdb.png",
                "sortNo": 0
            }, {
                "gameCode": "PT",
                "gameName": "PT电子",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/pt.png",
                "sortNo": 0
            }, {
                "gameCode": "SW",
                "gameName": "SW电子",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/sw.png",
                "sortNo": 0
            }, {
                "gameCode": "CQJ",
                "gameName": "CQ9电子",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/cq9.png",
                "sortNo": 0
            }, {
                "gameCode": "KYQP",
                "gameName": "开元棋牌",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/ky.png",
                "sortNo": 0
            }, {
                "gameCode": "LYQP",
                "gameName": "乐游棋牌",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/ly.png",
                "sortNo": 0
            }, {
                "gameCode": "ESW",
                "gameName": "德胜棋牌",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/dsqp.png",
                "sortNo": 0
            }, {
                "gameCode": "CG",
                "gameName": "卡卡湾视讯",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/cg.png",
                "sortNo": 0
            }, {
                "gameCode": "TF",
                "gameName": "雷火电竞",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/lhdj.png",
                "sortNo": 0
            }, {
                "gameCode": "IM",
                "gameName": "IM游戏",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/im.png",
                "sortNo": 0
            }, {
                "gameCode": "HLQP",
                "gameName": "欢乐棋牌",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/hlqp.png",
                "sortNo": 0
            }, {
                "gameCode": "IGPJ",
                "gameName": "IG彩票新",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/igx.png",
                "sortNo": 0
            }, {
                "gameCode": "IG",
                "gameName": "IG彩票/IG电子",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/ig.png",
                "sortNo": 0
            }, {
                "gameCode": "PP",
                "gameName": "PP电子",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn/menuList/YHHB/0/transfer/pp.png",
                "sortNo": 0
            }, {
                "gameCode": "BBIN",
                "gameName": "BBIN视讯/电子",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/bbin.png",
                "sortNo": 0
            }, {
                "gameCode": "GY",
                "gameName": "GY彩票",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn/menuList/YHHB/0/transfer/gy.png",
                "sortNo": 0
            }, {
                "gameCode": "OB",
                "gameName": "欧博视讯",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn/menuList/YHHB/0/transfer/abg.png",
                "sortNo": 0
            }, {
                "gameCode": "WM",
                "gameName": "WM视讯",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn/menuList/YHHB/0/transfer/wm.png",
                "sortNo": 0
            }, {
                "gameCode": "NMG",
                "gameName": "MG电子",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn/menuList/YHHB/0/transfer/nmg.png",
                "sortNo": 0
            }, {
                "gameCode": "TXH",
                "gameName": "WG视讯",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn/menuList/YHHB/0/transfer/txh.png",
                "sortNo": 0
            }, {
                "gameCode": "GG",
                "gameName": "GG彩票",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn/menuList/YHHB/0/transfer/gg.png",
                "sortNo": 0
            }]
        }
    )
})


router.post('/batch', (req, res) => {

    res.send(
        {
            "status": 10000,
            "msg": "查询成功",
            "data": [{
                "gameCode": "DTQP",
                "gameName": "大唐棋牌",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/dt.png",
                "sortNo": 0
            }, {
                "gameCode": "OG",
                "gameName": "OG视讯",
                "balance": 0.0,
                "gameImg": "https://gamelist.mobanwang.com.cn//menuList/YHHB/0/transfer/og.png",
                "sortNo": 0
            }]
        }
    )
})

router.post('/register', (req, res) => {
    const {username, password, phoneNumber, wechat, commend} = req.body;
    if (!username || !password || !phoneNumber || !wechat) {
        res.send({
            msg: "参数不正确",
            status: 20000
        })
        return;
    }

    res.send(
        {
            "status": 10000,
            "msg": "注册成功",
            "terminal": "0",
            "data": {
                "username": username,
                "integral": "8888.00",
                "token": "jB632o+kL+Vvmg/Nx/wbYqKbuzBjM70k61GKkFX4+D3IfMto1C++bQambmq3cCpR3hwY4GtgKF0Z9aArcIUhL74kEIuVWzMEwSXUqgrl9DU/zPF6lqUlgZ68IhnmseRkH+9/O0eD8OXK6W9WWDTKKS4aoD3eSwureR4Mzc6EFeo3KWrW4pFaDSQVOFJsB0XkDyTUBOEMrmb5ot+WEmA3nTILOwfOOUpCE0wUQDK0XtNWREaz1gGWHMXypfutR9P+ypmCr9aCdB8DxSp/toLxquwnl2p8neH3qcmcA6VAOHlKqHe00pZkzsfXkS0nf+KfqynXZzbiyiTuI2pgya8OQzsgirrgeKLDYTsJu/aXhlPHz4HHlk+fds6AFJ2O1oa1zQlgZJNIVgoIzrfQOzS9X+x3mrQwjrXramCmKQnIfQBWid8UKqy4NRJc8wDcvinNv6DwI8KRmVSns/rZOmzf+DAhEWt2kEiURFy7AZTtWzAFTGhseg4NVt0Zyy9M2FFT",
                "noread": 0,
                "wallet": "1000.00",
                "isActive": 0
            }
        }
    )


})


module.exports = router;
