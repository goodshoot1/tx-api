var express = require('express');
const {route} = require('.');
var router = express.Router();


let hasWithdrawPassword = false;

let hasBankCard = false;

let hasAlipay = false;


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
            "hasWithdrawPassword": hasWithdrawPassword,
            "hasBankCard": hasBankCard,
            "hasJoin": 2,
            "hasAlipay": hasAlipay,
            "openAlipay": true,
            "openUsdt": true,
            "hasUSDT": false
        }
    })
})

router.get('/config', (req, res) => {
    console.log(' req.query', req.query)
    const {terminal} = req.query;

    // if (!terminal) {
    //     res.send({
    //         msg: "参数不正确",
    //         status: 20000
    //     })
    //     return;
    // }

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

/**
 * 回收金额
 */
router.post('/recycle', (req, res) => {
    res.send({"status": 10000, "msg": "回收游戏余额成功", "data": {"wallet": 0.0, "balance": 0.0}})
})


router.post('/payConfig', (req, res) => {
    res.send({
        "status": 10000,
        "msg": "查询成功",
        "data": [{
            "channel": 15,
            "scancode": "card",
            "scanname": "VIP转账",
            "icon": "https://line.jzs001.cn/group1/M00/00/9C/DsBDFV8qvw6APlXoAAAOhdGKLQM690.jpg",
            "type": 6,
            "paymentChannel": "16",
            "config": [{
                "payId": 3668,
                "minquota": 200.0,
                "maxquota": 10000.0,
                "paymentName": "MAFG",
                "scancode": "card",
                "scanname": "VIP转账",
                "solidStatus": 0,
                "channels": [{"code": "ali", "desc": "支付宝转账"}, {"code": "yl", "desc": "银联转账"}]
            }]
        }, {
            "channel": 14,
            "scancode": "kf",
            "scanname": "天下尊享支付",
            "icon": "https://line.jzs001.cn/group1/M00/00/7A/Z_QBx18Bp_SAE4gGAAADmClhtIo177.jpg",
            "type": 5,
            "paymentChannel": "15",
            "config": [{
                "payId": 3696,
                "minquota": 10.0,
                "maxquota": 50000.0,
                "paymentName": "ZXKF",
                "scancode": "kf",
                "scanname": "VIP支付",
                "solidStatus": 0
            }, {
                "payId": 3821,
                "minquota": 10.0,
                "maxquota": 50000.0,
                "paymentName": "ZXSZ",
                "scancode": "kf",
                "scanname": "数字支付",
                "solidStatus": 0
            }]
        }, {
            "channel": 5,
            "scancode": "yl",
            "scanname": "银联支付",
            "icon": "https://line.txwl-888.com/group1/M00/00/2F/ZxcuGF5LTjKAJxjFAAAIdpzEHY4254.png",
            "type": 2,
            "paymentChannel": "7",
            "config": []
        }, {
            "channel": 11,
            "scancode": "bit",
            "scanname": "加密货币支付",
            "icon": "https://line.txwl-888.com/group1/M00/00/2F/ZxcuGF5LTqiAUiUzAAAKZqW6gnA420.png",
            "type": 2,
            "paymentChannel": "14",
            "config": [{
                "payId": 4203,
                "minquota": 10.0,
                "maxquota": 5000.0,
                "paymentName": "TG",
                "scancode": "bit",
                "scanname": "P88882019",
                "solidStatus": 0
            }]
        }, {
            "channel": 10,
            "scancode": "ysf",
            "scanname": "云闪付",
            "icon": "https://line.txwl-888.com/group1/M00/00/2F/ZxcuGF5LTpSAE8irAAAJOek1zow633.png",
            "type": 2,
            "paymentChannel": "12",
            "config": [{
                "payId": 3540,
                "minquota": 20.0,
                "maxquota": 5000.0,
                "paymentName": "KC",
                "scancode": "ysf",
                "scanname": "P88882019",
                "solidStatus": 0
            }]
        }, {
            "channel": 7,
            "scancode": "kj",
            "scanname": "快捷支付",
            "icon": "https://line.txwl-888.com/group1/M00/00/2E/DsBDFV5LTK2AeX7BAAAKhUdmA1k245.png",
            "type": 2,
            "paymentChannel": "9",
            "config": [{
                "payId": 3540,
                "minquota": 20.0,
                "maxquota": 5000.0,
                "paymentName": "KC",
                "scancode": "kj",
                "scanname": "P88882019",
                "solidStatus": 0
            }]
        }, {
            "channel": 3,
            "scancode": "ali",
            "scanname": "支付宝支付",
            "icon": "https://line.txwl-888.com/group1/M00/00/2F/ZxcuGF5Ki0aADrqAAAAJTOT7d78069.png",
            "type": 2,
            "paymentChannel": "4",
            "config": [{
                "payId": 3882,
                "minquota": 100.0,
                "maxquota": 10000.0,
                "paymentName": "TAOB",
                "scancode": "ali",
                "scanname": "P88882019",
                "solidStatus": 0
            }, {
                "payId": 3065,
                "minquota": 800.0,
                "maxquota": 10000.0,
                "paymentName": "TXH",
                "scancode": "ali",
                "scanname": "10020",
                "solidStatus": 0
            }]
        }]
    })
})


router.post('/pay/online/scan', (req, res) => {
    const {scancode, payId, amount} = req.body;

    if (!scancode || !payId) {
        res.send({
            msg: "参数不正确",
            status: 20000
        })
    } else {

        setTimeout(() => {
            res.send({
                "status": 10000,
                "msg": "创建支付订单成功",
                "terminal": "0",
                "data": {
                    "url": "https://h5.topgate.io/wgate/#/login?type=3&orderId=TC02201114212738467cR943R5s&mchId=4800",
                    "username": "linz001",
                    "orderNo": "YHHtg2020111421273833433416481",
                    "amount": amount,
                    "viewType": "link"
                }
            })
        }, 3000)

    }
})

/**
 *  channel ali yl
 */
router.post('/pay/scan', (req, res) => {

    const {username, cardType, amount} = req.body;

    if (!username || !cardType || !amount) {
        res.send({
            msg: "参数不正确",
            status: 20000
        })
    } else {
        res.send({
            "status": 10000,
            "msg": "创建支付订单成功",
            "terminal": "0",
            "data": {
                "data":
                    [{"name": "银行", "value": "绵阳市商业银行"}, {
                        "name": "账号",
                        "value": "6223670100008727876"
                    }, {"name": "开户名", "value": "杨迅垚"}],
                "orderNo": "YHHmafg2020111421400420620622932",
                "amount": amount,
                "viewType": "datamap",
                "orderTime": "2020-11-14 21:40:04"
            }
        })
    }
})

/**
 * 修改提款密码
 */
router.post('/modifyPassword', (req, res) => {
    const {password, rePassword} = req.body;
    if (!password && !rePassword) {
        res.send({
            msg: "参数不正确",
            status: 20000
        })
    } else {
        hasWithdrawPassword = true;
        res.send({"status": 10000, "msg": "设定用户提款密码成功"})
    }
})


router.get('usdt/getBaseInfo', (req, res) => {
    res.send({
        "status": 10000,
        "msg": "获取数字货币基础配置 ,PayAgreementList协议,CurrencyWalletList钱包类型",
        "data": {
            "PayAgreementList": [{"id": 11, "payAgreement": "ERC20", "payType": 1}],
            "CurrencyWalletList": [{"id": 15, "walletType": "火币"}, {"id": 16, "walletType": "IMtoken"}, {
                "id": 17,
                "walletType": "比特派"
            }, {"id": 18, "walletType": "其他钱包"}]
        }
    })
})


router.post('/game/transfer', (req, res) => {
    const {amount, inValue, outValue} = req.body;
    if (!amount && !inValue && !outValue) {
        res.send({
            msg: "参数不正确",
            status: 20000
        })
    } else {
        setTimeout(() => {
            res.send({
                "status": 10000, "msg": "转账成功", data: {
                    wallet: 4444, totalBalance: 6666, integral: 0
                }
            })
        }, 4000)

    }
})


router.post('/usdt/wallet', (req, res) => {
    const {account, walletTypeId, walletAgreementId, walletAddress} = req.body;

    if (!account && !walletTypeId && !walletAgreementId && !walletAddress) {
        res.send({
            msg: "参数不正确",
            status: 20000
        })
    } else {
        res.send({"status": 10000, "msg": "设置成功"})
    }
})

router.get('/withdraw/config', (req, res) => {
    res.send({
        "status": 10000,
        "msg": "查询平台提款配置成功",
        "data": {
            "cid": 18,
            "uid": 4004592,
            "cagent": "yhh",
            "markingQuantity": 0.0,
            "userQuantity": 0.0,
            "winAmount": 0.0,
            "userWinamount": 0.0,
            "userQuantityHistory": 0.0,
            "withdrawConfig": 30.0,
            "withdrawManageFee": 0,
            "withdrawFee": 0.0,
            "minWithdrawMoney": 100.0,
            "maxWithdrawMoney": 500000.0,
            "freeWithdrawTime": 4,
            "todaytimes": 0,
            "totalCounts": 0,
            "todayCounts": 0,
            "usdtMinWithdrawMoney": 100.0,
            "usdtMaxWithdrawMoney": 1000000.0,
            "usdtWithdrawFee": 0.0,
            "usdtCompulsoryWithdrawalFee": 0.0,
            "aliMinWithdrawMoney": 100.0,
            "aliMaxWithdrawMoney": 10000.0,
            "aliWithdrawFee": 0.0,
            "aliCompulsoryWithdrawalFee": 30.0,
            "minWithdrawTime": 0,
            "maxWithdrawTime": 24
        }
    })
})

/**
 * 修改添加提款密码
 */
router.post('/modify/withdrawPwd', (req, res) => {
    const {password, rePassword} = req.body;
    if (!password && !rePassword) {
        res.send({
            msg: "参数不正确",
            status: 20000
        })
    } else {
        res.send({"status": 10000, "msg": "设定用户提款密码成功"})
    }
})


/**
 * 添加银行卡
 */
router.post('/addBank', (req, res) => {
    const {cardUsername, bankId, cardNum, cardAddress, password} = req.body;
    if (!cardUsername && !bankId && !cardNum && !cardAddress && !password) {
        res.send({
            msg: "参数不正确",
            status: 20000
        })
    } else {
        res.send({"status": 10000, "msg": "添加银行卡成功"})
    }
})

/**
 * 获取银行卡信息
 */
router.get('/getBankTypes', (req, res) => {
    res.send({
        "status": 10000,
        "msg": "查询成功",
        "data": [{"bankId": 1, "bankName": "中国农业银行"}, {"bankId": 2, "bankName": "中国银行"}, {
            "bankId": 3,
            "bankName": "交通银行"
        }, {"bankId": 4, "bankName": "中国建设银行"}, {"bankId": 5, "bankName": "中国工商银行"}, {
            "bankId": 6,
            "bankName": "中国邮政储蓄银行"
        }, {"bankId": 7, "bankName": "招商银行"}, {"bankId": 8, "bankName": "浦发银行"}, {
            "bankId": 9,
            "bankName": "中国光大银行"
        }, {"bankId": 10, "bankName": "中信银行"}, {"bankId": 11, "bankName": "平安银行"}, {
            "bankId": 12,
            "bankName": "中国民生银行"
        }, {"bankId": 13, "bankName": "华夏银行"}, {"bankId": 14, "bankName": "广发银行"}, {
            "bankId": 15,
            "bankName": "北京银行"
        }, {"bankId": 16, "bankName": "上海银行"}, {"bankId": 17, "bankName": "兴业银行"}, {
            "bankId": 18,
            "bankName": "广西农村信用社"
        }, {"bankId": 19, "bankName": "东莞农村商业银行"}, {"bankId": 20, "bankName": "深圳发展银行"}, {
            "bankId": 21,
            "bankName": "广东农信"
        }, {"bankId": 22, "bankName": "河北银行"}, {"bankId": 23, "bankName": "郑州银行 "}, {
            "bankId": 24,
            "bankName": "洛阳银行 "
        }, {"bankId": 25, "bankName": "哈尔滨银行"}, {"bankId": 26, "bankName": "汉口银行"}, {
            "bankId": 27,
            "bankName": "长沙银行"
        }, {"bankId": 28, "bankName": "吉林银行"}, {"bankId": 29, "bankName": "江苏银行"}, {
            "bankId": 30,
            "bankName": "南京银行"
        }, {"bankId": 31, "bankName": "九江银行"}, {"bankId": 32, "bankName": "南昌银行"}, {
            "bankId": 33,
            "bankName": "盛京银行"
        }, {"bankId": 34, "bankName": "营口银行"}, {"bankId": 35, "bankName": "宁夏银行"}, {
            "bankId": 36,
            "bankName": "内蒙古银行"
        }, {"bankId": 37, "bankName": "青海银行"}, {"bankId": 38, "bankName": "恒丰银行"}, {
            "bankId": 39,
            "bankName": "烟台银行"
        }, {"bankId": 40, "bankName": "晋商银行"}, {"bankId": 41, "bankName": "长安银行"}, {
            "bankId": 42,
            "bankName": "成都银行"
        }, {"bankId": 43, "bankName": "渤海银行"}, {"bankId": 44, "bankName": "天津银行"}, {
            "bankId": 45,
            "bankName": "浙商银行"
        }, {"bankId": 46, "bankName": "杭州银行"}, {"bankId": 47, "bankName": "宁波银行"}, {
            "bankId": 48,
            "bankName": "温州银行"
        }, {"bankId": 49, "bankName": "厦门银行"}, {"bankId": 50, "bankName": "泉州银行"}, {
            "bankId": 51,
            "bankName": "兰州银行"
        }, {"bankId": 52, "bankName": "深圳农村商业银行"}, {"bankId": 53, "bankName": "广州银行"}, {
            "bankId": 54,
            "bankName": "广州农村商业银行"
        }, {"bankId": 55, "bankName": "东莞银行"}, {"bankId": 56, "bankName": "广西北部湾银行"}, {
            "bankId": 57,
            "bankName": "河北省农村信用社联合社"
        }, {"bankId": 58, "bankName": "福建省农村信用社联合社"}, {"bankId": 99, "bankName": "其它银行"}]
    })
})


/**
 * 添加支付宝
 */
router.post('/addAlipay', (req, res) => {
    const {aliAccount, aliUsername, password} = req.body;
    if (!aliAccount && !aliUsername && !password) {
        res.send({
            msg: "参数不正确",
            status: 20000
        })
    } else {
        res.send({"status": 10000, "msg": "添加支付宝账号成功"})
    }
})

/**
 * 支付宝信息
 */
router.get('/alipayInfo', (req, res) => {
    res.send({
        "status": 10000,
        "msg": "查询支付宝信息成功",
        "data": {"id": 12, "uid": 451, "aliUsername": "你好", "aliAccount": "3****43@qq.com"}
    })
})


/**
 * 银行卡信息
 */
router.get('/bankInfo', (req, res) => {
    const {terminal} = req.query;
    res.send({
        "status": 10000,
        "msg": "查询银行卡信息成功",
        "data": [{
            "id": 55,
            "cardUsername": "罗夏",
            "cardNum": "9889********9889",
            "cardAddress": "北京市市辖区西城区交通银行",
            "addTime": "2020-11-28 18:00:18",
            "bankName": "交通银行",
            "isDefault": 0
        }, {
            "id": 53,
            "cardUsername": "王五",
            "cardNum": "3432********3453",
            "cardAddress": "山西省阳泉市平定县山西撒旦法撒旦法",
            "addTime": "2020-11-26 21:18:13",
            "bankName": "招商银行",
            "isDefault": 1
        }, {
            "id": 54,
            "cardUsername": "张三",
            "cardNum": "5566********6545",
            "cardAddress": "天津市市辖区和平区中国银行",
            "addTime": "2020-11-28 17:51:59",
            "bankName": "中国银行",
            "isDefault": 1
        }, {
            "id": 56,
            "cardUsername": "雾凇",
            "cardNum": "5345********3490",
            "cardAddress": "河北省秦皇岛市青龙满族自治县建设银行",
            "addTime": "2020-11-29 14:52:38",
            "bankName": "中国建设银行",
            "isDefault": 1
        }]
    })
})

/**
 * 获取提款信息
 */
router.get('/withDrawConfig', (req, res) => {
    const {terminal} = req.query;
    res.send({
        "status": 10000,
        "msg": "查询平台提款配置成功",
        "data": {
            "cid": 5,
            "uid": 445,
            "cagent": "txw",
            "markingQuantity": 0.0,
            "userQuantity": 0.0,
            "winAmount": 0.0,
            "userWinamount": 0.0,
            "userQuantityHistory": 0.0,
            "withdrawConfig": 8.0,
            "withdrawManageFee": 0,
            "withdrawFee": 5.0,
            "minWithdrawMoney": 100.0,
            "maxWithdrawMoney": 500001.0,
            "freeWithdrawTime": 0,
            "todaytimes": 0,
            "totalCounts": 0,
            "todayCounts": 0,
            "usdtMinWithdrawMoney": 100.0,
            "usdtMaxWithdrawMoney": 100.0,
            "usdtWithdrawFee": 0.0,
            "usdtCompulsoryWithdrawalFee": 0.0,
            "aliMinWithdrawMoney": 100.0,
            "aliMaxWithdrawMoney": 100.0,
            "aliWithdrawFee": 5.0,
            "aliCompulsoryWithdrawalFee": 8.0,
            "minWithdrawTime": 0,
            "maxWithdrawTime": 24
        }
    })
})

/**
 * 添加银行卡
 */
router.post('/addBankCard', (req, res) => {
    const {cardUsername, bankId, cardNum, cardAddress, password} = req.body;
    if (!cardUsername && !bankId && !cardNum && !cardAddress && !password) {
        res.send({
            msg: "参数不正确",
            status: 20000
        })
    } else {
        res.send({"status": 10000, "msg": "添加银行卡成功"})
    }

})


module.exports = router;
