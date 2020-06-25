const Model = require("./mongoose/banner");

function inputdata() {
    var data = [{
        "big_img": "images/banners/banner1.jpg",
        "small_img": "images/banners/1.jpg",
        "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        "kind": 3,
        "title": "西游2",
        "number": 27,
        "actor": "吴亦凡/ 姚晨 / 林更新 / 巴特尔 / 王丽坤 / 林允 / 包贝尔",
        "content": "唐三藏带与三徒踏上取西经之路，表面上一片和谐但其实却暗中互相对抗，面和心不和。经历一连串的捉妖事件之后，师徒开始互相体谅到对方的苦处和心结，终于把内部矛盾化解，同心合力成为无坚不摧的驱魔团队。"

    }, {
        "big_img": "images/banners/banner2.jpg",
        "small_img": "images/banners/2.jpg",
        "video": "http://vjs.zencdn.net/v/oceans.mp4",
        "kind": 3,
        "title": "游戏规则",
        "number": 27,
        "actor": "何润东 / 黄子韬 / 娜扎 / 王学圻 / 古力娜扎 / 秋瓷炫 / 高捷 / 师鹏 ",
        "content": "李子豪与方杰历经多次血雨腥风，逐渐成为生死兄弟。不料，方杰爱慕已久的对象—唐先生的爱女唐芊芊，却对李子豪一见钟情，而李子豪此时却也发现心上人蓝若云，在自己被捕期间成了唐先生的情妇。 唐先生为称霸上海滩，布下惊天骗局，而这个骗局里最重要的一环就是李子豪。可唐先生并不知，李子豪的真实身份是暗杀组织蓝衣社成员。 唐先生最终查出子豪的真实身份，两人正面对峙，一声枪响，最终倒下的是谁？方杰会作何选择？芊芊又怎么面对父亲和爱人的生死之斗……。"
    }, {
        "big_img": "images/banners/banner3.jpg",
        "small_img": "images/banners/3.jpg",
        "video": "https://media.w3.org/2010/05/sintel/trailer.mp4",
        "kind": 3,
        "title": "决战食神",
        "number": 27,
        "actor": "葛优 / 谢霆锋 / 唐嫣 / 郑容和 / 白冰 / 杜海涛 / 王太利 / 詹瑞文  ",
        "content": "高天赐（谢霆锋 饰）出生在厨师世家，从小就热爱烹饪。然而父亲对他的梦想却冷言相向，导致他负气之后离家出走。之后天赐一直跟着师父洪七（葛优 饰）生活在一起，天赐长大后和两小无猜的海胆妹（唐嫣 饰）一起经营老店，成为春风里七记大排档的当家主厨。天赐立志要做一碗让父亲感动的面，得到父亲的认可。随着春风里的老街拆迁临近，一位海归米其林主厨安保罗（郑容和 饰）向天赐发起了厨艺挑战，一场关乎“人、情、味”的终极决战即将打响……"
    }, {
        "big_img": "images/banners/banner4.jpg",
        "small_img": "images/banners/4.jpg",
        "video": "http://mirror.aarnet.edu.au/pub/TED-talks/911Mothers_2010W-480p.mp4",
        "kind": 3,
        "title": "乘风破浪",
        "number": 27,
        "actor": "邓超 / 彭于晏 / 赵丽颖 / 董子健 / 金士杰 / 易小星 / 张本煜 / 李荣浩 ",
        "content": "赛车手阿浪（邓超 饰）一直对父亲（彭于晏 饰）反对自己的赛车事业耿耿于怀，在向父亲证明自己的过程中，阿浪却意外卷入了一场奇妙的冒险。他在这段经历中结识了一群兄弟好友，一同闯过许多奇幻的经历，也对自己的身世有了更多的了解。"
    }, {
        "big_img": "images/banners/banner5.jpg",
        "small_img": "images/banners/5.jpg",
        "video": "http://vjs.zencdn.net/v/oceans.mp4",
        "kind": 3,
        "title": "合约男友",
        "number": 27,
        "actor": "郑秀文 / 张孝全 / 林雪 / 冯文娟 / 弦子 / 金巧巧 / 尹子维 / 李茂  ",
        "content": "保险公司CEO叶瑾（郑秀文 饰），是众人心中不怒而威的霸道女总裁，对爱情感到绝望的她认为只有对孩子的感情才是永恒的，于是决定借精生子。在严格的层层筛选后，帅气不羁的快递员肖博（张孝全 饰）意外成为孩子父亲的最终人选。有苦难言的肖博，义无反顾地签订了“变态”合约。而此时故事才刚刚开始…"
    }, {
        "big_img": "images/banners/banner6.jpg",
        "small_img": "images/banners/6.jpg",
        "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        "kind": 3,
        "title": "咱们分手吧",
        "number": 27,
        "actor": "王靖云 / 金粮 / 郭力行 / 韦蔼芯 / 迟志强 / 但艳 / 金良  ",
        "content": "影片讲述清纯小护士叶晓彤发现农民工男友方强出轨提出分手。富二代韩铭川对叶晓彤发起追求，方强也穷追不舍的道歉挽留。此时富家女金莉莉对方强的暧昧，韩铭川的”旧爱“几条线索一起展开，围绕分手，展开故事。"
    }, {
        "big_img": "images/banners/banner7.jpg",
        "small_img": "images/banners/7.jpg",
        "video": "https://media.w3.org/2010/05/sintel/trailer.mp4",
        "kind": 3,
        "title": "别在电梯说",
        "number": 27,
        "actor": " 叶可儿 / 陈晓桑 / 叶思彤 / 袁诗贻 ",
        "content": "蓝馨，叶飘飘和乔以菲三个女生是大学室友。一次三个女生去图书馆时，突发电梯故障，为了打发时间，被困在电梯里的三人还有另外一男一女，讲起了恐怖故事。当另一名女生正要说电梯禁忌故事时，电梯们开了，大家便高兴的跑了出去。没有想到的是，她们在电梯中所说竟然分别应验。三分在万分惊恐下找到当时电梯里的另外两人，男生告诉她们自己没有发生任何异常，他建议找到另一个女孩子。女孩告诉她们要想破除诅咒就必须重聚电梯听她讲完故事：一个月前蓝馨在电梯遇到一个心脏病发的女孩，而她却没有伸出援手，导致女孩没能及时获救最终死亡，而她正是已故女孩的妹妹，为了使蓝馨受到良心和道德的谴责才策划了这一切。"
    }, {
        "big_img": "images/banners/banner8.jpg",
        "small_img": "images/banners/8.jpg",
        "video": "http://vjs.zencdn.net/v/oceans.mp4",
        "kind": 3,
        "title": "天空之眼",
        "number": 27,
        "actor": "  海伦·米伦 / 亚伦·保尔 / 艾伦·瑞克曼 / 巴克德·阿巴蒂 / 杰瑞米·诺森 ",
        "content": "　　凯瑟琳上校（海伦·米伦 Helen Mirren 饰）率英国情报单位追捕一名女性恐怖分子长达六年，经由美军加入高空监视行动，好不容易在秘密基地找到疑似她的身影，特种部队准备活捉她时，高空侦查人员却意外发现该名恐怖分子正与其他人密谋自杀炸弹攻击，为了防止伤害，凯瑟琳下令轰炸秘密基地将敌人歼灭。当无人战斗机的驾驶员史蒂夫（亚伦·保尔 Aaron Paul 饰）瞄准目标后，却发现这个“秘密基地”竟然是普通的民居，而一名女孩更是跑进他的攻击范围玩耍，原本单纯的跨国逮捕行动瞬间变成复杂难解的反恐任务……"
    }, {
        "big_img": "images/banners/banner9.jpg",
        "small_img": "images/banners/9.jpg",
        "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        "kind": 3,
        "title": "致命甜心",
        "number": 27,
        "actor": "刘哲 / 赖晶晶 / 杨娉婷 / 阮浩然 / 徐文正 ",
        "content": "摄影师李志锋凭借自己俊朗的外形和高超的摄影技巧，俘获了无数未成年少女的芳心。他将这些女孩诱骗至家中，拍下COS照片后将她们奸杀，成为了COS界最冷酷无情的少女杀手。如今李志锋的新猎物Mary，已被引入猎场，李志锋让她换上美漫中哈莉奎茵的服装，拍摄照片，并试图猎杀。然而令他意想不到的事发生了，Mary，竟然是真正的哈莉奎茵。"
    }]
    console.log(`开始导入数据...有${data.length}条数据需要导入：`)
    var count=0;
    for (item of data) {
        let { big_img, small_img, video, kind, title, number, actor, content } = item;
        var model = new Model({
            big_img, 
            small_img, 
            video, 
            kind, 
            title, 
            number, 
            actor,
            content,
            type:10
        });
        model.save((err,result)=>{
            if(err){
                console.log(err);
                console.log("有一条数据导入出错")
            }else{
                count++;
                var mes=`导入成功一条数据，
                已经导入${count}条，
                还剩${data.length-count}条`
                console.log(mes)
            }
        })
    }
}
inputdata();