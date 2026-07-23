// ============================================================
// 岗位合成器 - 内容数据文件
// 替换游戏要素只需要改这个文件，index.html 是引擎，不用动。
// 改完自查：浏览器打开 index.html?debug=1 看数据校验报告；
// 摆放道具位置：打开 index.html?edit=1 直接拖动道具，再点"导出数据"。
// 详细说明见 CONTENT_GUIDE.md
// ============================================================
window.GAME_DATA={

// 存档版本号：整套换内容时必须改（比如 v23），玩家旧存档会自动作废
version:'v22',

// ---------- 图片图标开关 ----------
// 把 useImages 改成 true 后，游戏会按以下约定自动加载图片，缺图的自动显示 emoji：
//   assets/items/<道具id>.png   （如 assets/items/keyboard.png）
//   assets/jobs/<岗位名>.png    （如 assets/jobs/会计.png）
//   assets/rooms/<房间id>.png   （如 assets/rooms/front.png）
// 需要的完整文件名清单见 assets/MANIFEST.md
// 个别条目想用别的文件名：给该条数据加 img:'items/xxx.png' 即可覆盖约定
useImages:false,
assetBase:'assets/',


// ---------- 房间 ----------
// id: 唯一英文标识  name/emoji: 显示  unlockAt: 需要合成多少个岗位才解锁(0=默认开放)
// unlockText: 未解锁时的提示  scene: 场景主题CSS(front/admin/lab/market/boss，新房间可先用'plain')
// entrance:true 表示公司平面图上的正门入口房间
rooms:[
  {id:'front',name:'前台',emoji:'🛎️',unlockAt:0,scene:'front',entrance:true},
  {id:'admin',name:'职能室',emoji:'📋',unlockAt:2,unlockText:'合成2个岗位解锁',scene:'admin'},
  {id:'lab',name:'研发室',emoji:'🔬',unlockAt:0,scene:'lab'},
  {id:'market',name:'市场室',emoji:'📣',unlockAt:5,unlockText:'合成5个岗位解锁',scene:'market'},
  {id:'boss',name:'老板办公室',emoji:'🚪',unlockAt:10,unlockText:'合成10个岗位解锁',scene:'boss'},
],

// ---------- 公司平面图布局 ----------
// 每个子数组是一行；一行只放一个房间时会横跨整行（适合做入口/大堂）
mapLayout:[['lab','market'],['admin','boss'],['front']],

// ---------- 基础道具 ----------
// id: 唯一英文标识（配方里用它引用）  room: 所在房间id
// x,y: 位置百分比（x=距左 y=距上），建议用 ?edit=1 拖出来再导出
baseItems:[
  // lab - 研发室：桌面放键盘/显示器/咖啡，灯泡吊天花板，图表贴白板，虫子爬地上
  {id:'keyboard',emoji:'⌨️',name:'键盘',room:'lab',x:20,y:37},
  {id:'coffee',emoji:'☕',name:'咖啡',room:'lab',x:52,y:37},
  {id:'bug',emoji:'🐛',name:'虫子',room:'lab',x:66,y:72},
  {id:'bulb',emoji:'💡',name:'灯泡',room:'lab',x:45,y:7},
  {id:'monitor',emoji:'🖥️',name:'显示器',room:'lab',x:36,y:35},
  {id:'chart',emoji:'📊',name:'图表',room:'lab',x:22,y:9},
  // front - 前台：电话/花瓶在接待台上，钥匙挂墙板，面具挂墙，伞插伞架，快递在收货区地上
  {id:'phone',emoji:'📞',name:'电话',room:'front',x:31,y:36},
  {id:'mask',emoji:'🎭',name:'面具',room:'front',x:46,y:17},
  {id:'key',emoji:'🔑',name:'钥匙',room:'front',x:81,y:19},
  {id:'vase',emoji:'🌸',name:'花瓶',room:'front',x:63,y:36},
  {id:'umbrella',emoji:'☂️',name:'雨伞',room:'front',x:3,y:52},
  {id:'parcel',emoji:'📦',name:'快递',room:'front',x:18,y:67},
  // admin - 职能室：桌面放算盘/印章/剪刀，文件夹在拉开的抽屉上，日历挂白板，锅在茶水角
  {id:'abacus',emoji:'🧮',name:'算盘',room:'admin',x:26,y:37},
  {id:'pot',emoji:'🍳',name:'锅',room:'admin',x:78,y:33},
  {id:'scissors',emoji:'✂️',name:'剪刀',room:'admin',x:57,y:37},
  {id:'folder',emoji:'📁',name:'文件夹',room:'admin',x:4,y:36},
  {id:'stamp',emoji:'🔏',name:'印章',room:'admin',x:42,y:37},
  {id:'calendar',emoji:'📅',name:'日历',room:'admin',x:29,y:9},
  // market - 市场室：喇叭/饼在工作台，便利贴在创意墙，颜料在画架，相机在三脚架，礼品堆托盘
  {id:'horn',emoji:'📢',name:'喇叭',room:'market',x:10,y:38},
  {id:'pie',emoji:'🥧',name:'饼',room:'market',x:28,y:38},
  {id:'note',emoji:'📝',name:'便利贴',room:'market',x:7,y:9},
  {id:'paint',emoji:'🎨',name:'颜料',room:'market',x:78,y:33},
  {id:'camera',emoji:'📸',name:'相机',room:'market',x:62,y:36},
  {id:'gift',emoji:'🎁',name:'礼品',room:'market',x:68,y:64},
  // boss - 老板办公室：领带挂衣帽架，奖杯/红酒在书柜层板，钢笔/折扇在大班台，沙发即沙发
  {id:'tie',emoji:'👔',name:'领带',room:'boss',x:2,y:14},
  {id:'trophy',emoji:'🏆',name:'奖杯',room:'boss',x:74,y:8},
  {id:'pen',emoji:'🖋️',name:'钢笔',room:'boss',x:19,y:38},
  {id:'sofa',emoji:'🛋️',name:'沙发',room:'boss',x:6,y:52},
  {id:'wine',emoji:'🍷',name:'红酒',room:'boss',x:74,y:36},
  {id:'fan',emoji:'🪭',name:'折扇',room:'boss',x:49,y:38},
],

// ---------- 物品合成配方 ----------
// a + b 两个道具id => result 新物品（会出现在 room 房间的 x,y 位置）
itemRecipes:[
  {a:'keyboard',b:'bug',result:'bugcode',emoji:'🪲',name:'Bug代码',desc:'键盘敲出虫子',room:'lab',x:62,y:8},
  {a:'coffee',b:'monitor',result:'workstation',emoji:'🏢',name:'工位',desc:'咖啡+屏幕=程序员工位',room:'lab',x:76,y:37},
  {a:'scissors',b:'folder',result:'layoff',emoji:'📄',name:'裁员通知',desc:'剪掉你的档案',room:'admin',x:55,y:9},
  {a:'horn',b:'pie',result:'ppt',emoji:'📽️',name:'PPT',desc:'大声画饼=演示文稿',room:'market',x:50,y:8},
  {a:'tie',b:'trophy',result:'power',emoji:'👑',name:'权力',desc:'穿得体面+功绩=权力',room:'boss',x:33,y:18},
  {a:'phone',b:'mask',result:'fakesmile',emoji:'😊',name:'职业微笑',desc:'接电话戴面具=职业假笑',room:'front',x:47,y:36},
  {a:'abacus',b:'stamp',result:'budget',emoji:'💰',name:'预算',desc:'算完盖章=批预算',room:'admin',x:3,y:4},
  {a:'note',b:'chart',result:'prd',emoji:'📑',name:'需求文档',desc:'贴需求+画图表=PRD',room:'market',x:24,y:9},
  {a:'paint',b:'camera',result:'poster',emoji:'🖼️',name:'海报',desc:'上色+拍照=宣传海报',room:'market',x:46,y:29},
  {a:'pen',b:'calendar',result:'contract',emoji:'📜',name:'合同',desc:'签字+约定日期=合同',room:'admin',x:80,y:10},
  {a:'bulb',b:'note',result:'patent',emoji:'💎',name:'专利',desc:'灵感+记录=专利',room:'lab',x:81,y:29},
  {a:'wine',b:'sofa',result:'secret',emoji:'🚪',name:'密室',desc:'红酒+沙发=老板密室',room:'boss',x:74,y:22},
  {a:'key',b:'parcel',result:'warehouse',emoji:'🏭',name:'仓库',desc:'钥匙开箱=仓库管理',room:'front',x:40,y:67},
  {a:'vase',b:'umbrella',result:'fengshui',emoji:'🏯',name:'风水局',desc:'花瓶+伞=玄学摆设',room:'front',x:80,y:36},
  {a:'fan',b:'pot',result:'jianghu',emoji:'⚔️',name:'江湖',desc:'折扇+锅=江湖气',room:'boss',x:30,y:63},
],

// ---------- 岗位配方 ----------
// a + b => 岗位。desc 里的 \n 会换行显示
jobRecipes:[
  {a:'abacus',b:'pot',job:'会计',emoji:'🧑‍💼',desc:'能算账，更能背锅。\n数字算得清清楚楚，黑锅背得明明白白。'},
  {a:'scissors',b:'mask',job:'HR',emoji:'🤵',desc:'微笑着递上裁员通知书。\n面带微笑是职业素养，手持剪刀是业务需要。'},
  {a:'phone',b:'horn',job:'销售',emoji:'📣',desc:'左手电话右手喇叭，能打能吆喝。\n只要脸皮够厚，全世界都是客户。'},
  {a:'key',b:'vase',job:'前台',emoji:'💁',desc:'管钥匙管花瓶，公司的门面担当。\n来访登记、快递签收、浇花换水，一个人就是服务队。'},
  {a:'bug',b:'bulb',job:'测试工程师',emoji:'🔬',desc:'在黑暗中寻找Bug的提灯人。\n开发说"在我电脑上是好的"，测试说"但在我这不行"。'},
  {a:'coffee',b:'keyboard',job:'程序员',emoji:'👨‍💻',desc:'靠咖啡续命，靠键盘吃饭。\n改一个Bug，生三个Bug，生生不息。'},
  {a:'calendar',b:'horn',job:'项目经理',emoji:'🗓️',desc:'翻着日历催进度，喇叭从不离手。\n什么都不会，但什么都能催。'},
  {a:'tie',b:'pie',job:'CEO',emoji:'🤴',desc:'西装革履，专业画饼三十年。\n今天的饼虽然大，但明天的会更大！'},
  {a:'note',b:'pie',job:'产品经理',emoji:'📋',desc:'需求贴满墙，交付靠画饼。\n这个需求很简单，怎么实现我不管。'},
  {a:'pen',b:'folder',job:'法务',emoji:'⚖️',desc:'逐字逐句审合同，每个逗号都是武器。\n别人看到字，法务看到钱。'},
  {a:'paint',b:'gift',job:'设计师',emoji:'🎨',desc:'颜料+礼品=每个作品都是送给甲方的礼物。\n"这个蓝色能不能再蓝一点？"'},
  {a:'sofa',b:'coffee',job:'实习生',emoji:'🐣',desc:'蹭沙发喝咖啡，工资约等于零。\n但简历上能写一行字。'},
  {a:'trophy',b:'stamp',job:'领导',emoji:'👑',desc:'拿奖杯装门面，盖印章定乾坤。\n开会举手同意，签字一挥而就。'},
  {a:'parcel',b:'umbrella',job:'外卖骑手',emoji:'🛵',desc:'风雨无阻送快递。\n导航说三分钟到，客户说怎么还没到。'},
  {a:'fan',b:'wine',job:'投资人',emoji:'🦈',desc:'扇着折扇品红酒，"赛道不错，再看看"。\n投了一百个项目，成了一个就够了。'},
  {a:'bugcode',b:'bulb',job:'测试架构师',emoji:'🏗️',desc:'在Bug的海洋里寻找那束光。\n不仅要找Bug，还要设计找Bug的系统。'},
  {a:'workstation',b:'bug',job:'运维工程师',emoji:'🔧',desc:'守着工位修Bug，凌晨三点是常态。\n服务器比女朋友重要，因为它真的会在半夜找你。'},
  {a:'layoff',b:'fakesmile',job:'裁员专家',emoji:'📉',desc:'笑着把你优化掉。\n优化、毕业、人员调整——花式说再见。'},
  {a:'ppt',b:'power',job:'战略顾问',emoji:'🎩',desc:'PPT治国，权力背书。\n一页PPT收费十万，内容全是废话。'},
  {a:'budget',b:'ppt',job:'财务总监',emoji:'💼',desc:'算完预算做PPT，钱是怎么花的全靠演。\n数字不会说谎，但做PPT的人会。'},
  {a:'prd',b:'keyboard',job:'全栈工程师',emoji:'🦸',desc:'自己写需求自己开发，一个人就是一支队伍。\n前端后端运维测试，全都是我。'},
  {a:'poster',b:'horn',job:'市场总监',emoji:'📺',desc:'海报贴满城，喇叭喊破天。\n品牌知名度是喊出来的。'},
  {a:'contract',b:'abacus',job:'审计',emoji:'🕵️',desc:'拿着合同查着账，三年前的一毛钱也不放过。\n审计面前，人人平等。'},
  {a:'patent',b:'trophy',job:'首席科学家',emoji:'🧪',desc:'专利等身，奖杯满柜。\n实验室比家里待的时间长。'},
  {a:'secret',b:'phone',job:'办公室政治家',emoji:'🐍',desc:'密室里打电话，暗中操控一切。\n谁升职谁离职，都在他的通讯录里。'},
  {a:'warehouse',b:'calendar',job:'供应链经理',emoji:'🚚',desc:'管着仓库看着日历，供货准时是信仰。\n一个零件延迟，整条线停产。'},
  {a:'fengshui',b:'sofa',job:'行政主管',emoji:'🏛️',desc:'办公室风水她说了算，工位朝向有讲究。\n绿植摆放都是学问。'},
  {a:'jianghu',b:'mask',job:'商务总监',emoji:'🤝',desc:'江湖气+戴面具，饭局上无往不胜。\n三杯酒下肚，合同就签了。'},
  {a:'fakesmile',b:'note',job:'客服',emoji:'🎧',desc:'永远微笑着说"已记录"。\n你的问题我已记录，请耐心等待（永远等待）。'},
  {a:'power',b:'contract',job:'董事长',emoji:'🏰',desc:'权力在手，签字为王。\n开不开会无所谓，决定早就做好了。'},
  {a:'keyboard',b:'phone',job:'远程客服',emoji:'🏠',desc:'键盘敲字电话聊，在家上班也挺累。'},
  {a:'keyboard',b:'chart',job:'数据分析师',emoji:'📈',desc:'键盘飞速敲，图表满屏跑。'},
  {a:'keyboard',b:'pen',job:'技术文档工程师',emoji:'📝',desc:'一手键盘一手钢笔，代码和文档两手抓。'},
  {a:'keyboard',b:'note',job:'需求搬运工',emoji:'🏗️',desc:'把便利贴上的需求敲进电脑，就是我的全部工作。'},
  {a:'keyboard',b:'gift',job:'电商运营',emoji:'🛒',desc:'键盘下单送礼品，双十一的幕后英雄。'},
  {a:'coffee',b:'horn',job:'培训讲师',emoji:'🎤',desc:'灌了三杯咖啡，嗓子喊了一天。'},
  {a:'coffee',b:'chart',job:'咨询顾问',emoji:'☕',desc:'喝着咖啡看图表，一小时收费两千。'},
  {a:'coffee',b:'calendar',job:'打工人',emoji:'🫠',desc:'咖啡续命看日历，还有三天才到周五。'},
  {a:'coffee',b:'mask',job:'职场演员',emoji:'🎬',desc:'喝完咖啡戴上面具，又是元气满满的一天（假的）。'},
  {a:'coffee',b:'gift',job:'公关经理',emoji:'🎀',desc:'咖啡约人送礼品，人脉就是这么来的。'},
  {a:'bug',b:'chart',job:'QA主管',emoji:'🔎',desc:'用图表统计Bug数量——这个月又创新高了。'},
  {a:'bug',b:'scissors',job:'代码审查员',emoji:'🧐',desc:'找到虫子就剪掉，一刀一个准。'},
  {a:'bug',b:'mask',job:'甩锅工程师',emoji:'🤷',desc:'这个Bug不是我的，我只是路过。'},
  {a:'bug',b:'phone',job:'技术支持',emoji:'📱',desc:'电话响了，又是Bug。'},
  {a:'bulb',b:'keyboard',job:'极客',emoji:'🤓',desc:'灵感来了就敲代码，一敲就是通宵。'},
  {a:'bulb',b:'trophy',job:'发明家',emoji:'💡',desc:'灯泡亮了奖杯到了，专利墙又多了一块。'},
  {a:'bulb',b:'tie',job:'创业者',emoji:'🚀',desc:'有想法穿西装，就差一个程序员了。'},
  {a:'bulb',b:'horn',job:'布道师',emoji:'📡',desc:'灯泡代表想法，喇叭负责传播。'},
  {a:'monitor',b:'chart',job:'大屏工程师',emoji:'🖥️',desc:'把图表放到大屏上，领导最爱看这个。'},
  {a:'monitor',b:'phone',job:'网管',emoji:'🔌',desc:'盯着屏幕接电话——又断网了是吧？'},
  {a:'monitor',b:'pen',job:'UI设计师',emoji:'✏️',desc:'屏幕上画来画去，像素级别的强迫症。'},
  {a:'monitor',b:'calendar',job:'考勤专员',emoji:'⏰',desc:'盯着屏幕查考勤，迟到一分钟也跑不掉。'},
  {a:'monitor',b:'mask',job:'摸鱼达人',emoji:'🐟',desc:'屏幕前戴着面具假装工作。'},
  {a:'chart',b:'calendar',job:'周报写手',emoji:'📝',desc:'图表+日期，一篇周报就搞定。'},
  {a:'chart',b:'horn',job:'路演专家',emoji:'💹',desc:'拿着图表上台吹，投资人听得直点头。'},
  {a:'chart',b:'trophy',job:'绩效考核官',emoji:'🏅',desc:'用图表说话，奖杯给谁我说了算。'},
  {a:'camera',b:'horn',job:'自媒体博主',emoji:'📲',desc:'拍了照就发，流量比工资重要。'},
  {a:'camera',b:'gift',job:'电商摄影师',emoji:'📷',desc:'把礼品拍出高级感，五毛特效变五千。'},
  {a:'camera',b:'tie',job:'商务摄影师',emoji:'🤵',desc:'西装革履拍证件照，背景一定要蓝色。'},
  {a:'camera',b:'key',job:'安防主管',emoji:'🔐',desc:'监控摄像+钥匙管理，整栋楼都在我眼皮底下。'},
  {a:'gift',b:'horn',job:'活动策划',emoji:'🎉',desc:'礼品加喇叭，年会就差一个主持人了。'},
  {a:'gift',b:'trophy',job:'颁奖策划',emoji:'🏆',desc:'奖杯配礼品，仪式感拉满。'},
  {a:'gift',b:'note',job:'行政助理',emoji:'📌',desc:'备礼品记便签，老板的生活全靠我。'},
  {a:'gift',b:'umbrella',job:'地推专员',emoji:'🌂',desc:'送把伞扫个码，拉新就这么简单。'},
  {a:'pen',b:'trophy',job:'签约达人',emoji:'🖊️',desc:'钢笔签合同，奖杯摆满桌。'},
  {a:'pen',b:'mask',job:'枪手',emoji:'👻',desc:'戴着面具执笔，谁也不知道作者是谁。'},
  {a:'pen',b:'wine',job:'文案总监',emoji:'🍸',desc:'喝杯红酒找灵感，写出来的都是金句。'},
  {a:'sofa',b:'parcel',job:'代收点老板',emoji:'🏪',desc:'沙发上坐着收快递，躺赚就是这么来的。'},
  {a:'sofa',b:'calendar',job:'退休领导',emoji:'👴',desc:'沙发上翻日历，每天都是周末。'},
  {a:'stamp',b:'scissors',job:'办公室刺客',emoji:'🗡️',desc:'盖完章就裁人，一气呵成。'},
  {a:'stamp',b:'horn',job:'政委',emoji:'📯',desc:'印章在手喇叭在口，传达精神是本职。'},
  {a:'pot',b:'mask',job:'背锅侠',emoji:'🦹',desc:'戴着面具背着锅，默默承受一切。'},
  {a:'pot',b:'phone',job:'外卖店老板',emoji:'🍜',desc:'锅里炒菜电话响——外卖又来单了。'},
  {a:'vase',b:'gift',job:'花艺师',emoji:'💐',desc:'花瓶插花包装好，一束花卖三百八。'},
  {a:'umbrella',b:'wine',job:'酒吧老板',emoji:'🍹',desc:'雨天撑伞去酒吧，别人喝酒我数钱。'},
  {a:'fan',b:'tie',job:'国风网红',emoji:'🧧',desc:'折扇配领带，国潮风拿捏了。'},
  {a:'fan',b:'camera',job:'综艺导演',emoji:'🎬',desc:'扇子一摇镜头一转，下一个节目开始。'},
  {a:'fan',b:'note',job:'编剧',emoji:'🎭',desc:'扇着扇子写剧本，灵感全在手腕上。'},
  {a:'fan',b:'coffee',job:'相声演员',emoji:'🎙️',desc:'折扇配咖啡，说学逗唱新时代。'},
  {a:'abacus',b:'chart',job:'精算师',emoji:'🔢',desc:'算盘打图表看，保险公司的隐藏BOSS。'},
  {a:'abacus',b:'calendar',job:'薪酬专员',emoji:'💵',desc:'算盘+日历=每月最重要的那一天。'},
  {a:'abacus',b:'scissors',job:'成本杀手',emoji:'🔪',desc:'算盘一响剪刀一挥，预算砍到骨头里。'},
  {a:'abacus',b:'phone',job:'催债专员',emoji:'💸',desc:'算盘算完打电话——您的账单已逾期。'},
  {a:'folder',b:'calendar',job:'档案管理员',emoji:'🗄️',desc:'文件夹+日历=每份文件都有归宿。'},
  {a:'folder',b:'horn',job:'新闻发言人',emoji:'🎙️',desc:'拿着文件夹对着喇叭念，官方口径一字不差。'},
  {a:'folder',b:'gift',job:'采购专员',emoji:'🛍️',desc:'文件夹里是报价单，礼品是供应商送的（不是）。'},
  {a:'folder',b:'monitor',job:'文档工程师',emoji:'💾',desc:'文件夹搬到屏幕上，纸质时代的终结者。'},
  {a:'vase',b:'trophy',job:'展厅设计师',emoji:'🏛️',desc:'花瓶和奖杯怎么摆，学问大着呢。'},
  {a:'vase',b:'pen',job:'书法家',emoji:'🖌️',desc:'花瓶插笔，案头清供，写字是修行。'},
  {a:'parcel',b:'horn',job:'物流调度',emoji:'🚛',desc:'快递到了喊一嗓子，整栋楼都听见了。'},
],

// ---------- 彩蛋组合 ----------
// [道具a, 道具b, 彩蛋文案]：不产出东西，只弹吐槽
easterEggs:[
  ['coffee','pot','恭喜你发明了……煮咖啡？这不需要合成台。'],
  ['vase','wine','你是来插花还是来喝酒的？下班了再说。'],
  ['gift','parcel','快递套礼品，礼品套快递，俄罗斯套娃是吧？'],
  ['bug','pot','虫子下锅了……这是荒野求生还是办公室？'],
  ['key','stamp','钥匙配印章？你是想私刻公章吗？已报警。'],
  ['fan','umbrella','一手伞一手扇，你到底是热还是冷？'],
  ['sofa','tie','领带往沙发上一甩——你这是下班了吧？'],
  ['pen','scissors','拿剪刀削钢笔？这是什么年代的操作？'],
  ['coffee','wine','红酒兑咖啡？你的胃在发出警告。'],
  ['bug','wine','虫子掉进红酒里了！服务员——退货！'],
  ['bug','gift','把虫子包装成礼物？你是要恶作剧吗？'],
  ['pot','trophy','拿锅当奖杯？比赛项目是：炒菜。'],
  ['monitor','umbrella','给显示器撑把伞？你是怕它淋雨吗？'],
  ['bug','sofa','沙发上有虫子！快叫除虫公司！'],
  ['paint','wine','颜料兑红酒……这幅画有酒香味。'],
  ['pot','vase','花瓶+锅=花盆？去找园艺部门吧。'],
  ['fan','stamp','扇着扇子盖印章，你当自己是知县大人？'],
  ['horn','mask','喇叭配面具——你是想当匿名广播员吗？'],
  ['calendar','trophy','日历上圈了发奖日期，但奖杯不是给你的。'],
  ['keyboard','sofa','键盘放沙发上敲？这就是传说中的躺平式办公。'],
  ['pie','stamp','饼上盖个章就是官方认证的饼了？格局打开。'],
  ['scissors','wine','剪刀开红酒——你是不是找不到开瓶器？'],
  ['coffee','scissors','咖啡加剪刀？你打算剪掉加班时间吗？'],
  ['parcel','tie','快递里是领带？上班第一天从拆快递开始。'],
  ['pot','pen','锅里插钢笔？是行为艺术还是精神状态不好？'],
],

// ---------- 通用合成失败文案（随机抽一条） ----------
genericFails:[
  '这两样东西互相看了一眼，默默走开了。',
  '合成炉表示：就这？',
  '恭喜你发现了一个无效组合！收藏它吧（并不能）。',
  '你是认真的吗？这俩根本不搭啊。',
  '建议你多去几个房间逛逛再来。',
  '合成失败。不是所有的相遇都有结果。',
  '叮——什么都没发生，但你失去了三秒钟。',
  '这个组合太前卫了，系统还没准备好。',
  '也许在平行宇宙里，这个组合能成功。',
  '两个物品在合成台上躺了一会儿，觉得没意思，走了。',
  '系统检测到你在瞎试——没关系，大家都是这么过来的。',
  '这不是合成，这是摆烂。',
],

// ---------- 房间家具布景 ----------
// 每个房间一段HTML，class="f xxx" 对应 index.html <style> 里的家具CSS
// 新房间没画家具可以先给空字符串 ''
roomDecos:{
  front:'<div class="f front-door"></div><div class="f front-mat">WELCOME</div><div class="f front-logo">🏢 摸鱼科技</div><div class="f front-clock">🕐</div><div class="f front-counter"></div><div class="f front-keyrack"></div><div class="f front-shelf"></div><div class="f front-stand"></div><div class="f front-tape"></div><div class="f front-plant">🪴</div>',
  admin:'<div class="f admin-cabinet"></div><div class="f admin-drawer"></div><div class="f admin-board"></div><div class="f admin-cork"></div><div class="f admin-frame"></div><div class="f admin-chair"></div><div class="f admin-desk"></div><div class="f admin-pantry"></div>',
  lab:'<div class="f lab-led"></div><div class="f lab-server"></div><div class="f lab-board"></div><div class="f lab-wallmon"></div><div class="f lab-cord"></div><div class="f lab-frame"></div><div class="f lab-desk"></div><div class="f lab-cable"></div>',
  market:'<div class="f market-bunting"></div><div class="f market-ideawall"></div><div class="f market-screen"></div><div class="f market-frame"></div><div class="f market-easel"></div><div class="f market-tripod"></div><div class="f market-table"></div><div class="f market-pallet"></div>',
  boss:'<div class="f boss-window"></div><div class="f boss-shelf"></div><div class="f boss-rack"></div><div class="f boss-rug"></div><div class="f boss-chair"></div><div class="f boss-desk"></div><div class="f boss-sofa"></div><div class="f boss-table"></div>',
},
};
