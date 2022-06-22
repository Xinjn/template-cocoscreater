cc.Class({
    extends: cc.Component,

    properties: {
        StatusBar: {
            default: null,       
            type: cc.Node, 
        },
        MenuBar: {
            default: null,       
            type: cc.Node, 
        },
        left: {
            default: null,       
            type: cc.Node, 
        },
        center: {
            default: null,       
            type: cc.Node, 
        },
        right: {
            default: null,       
            type: cc.Node, 
        },
        Header: {
            default: null,       
            type: cc.Node, 
        },
        Main: {
            default: null,       
            type: cc.Node, 
        },
        Footer: {
            default: null,       
            type: cc.Node, 
        }
    },
    onLoad() {
        // 初始化数据
        this.init()
    },
    start() { 
        this.fitUI()
    },
    update(dt) { },
    init() {
        //获取数据
        this.fetchData()
        this.hashData()

        this.getNode()
        this.getComponent() 
        this.getAnimation()
        this.setEventListener()
        this.renderUI()
    },
    // 请求数据
    fetchData() {

    },
    hashData(){
    },
    // 获取节点
    getNode() {
        // 当前节点子节点
        // this.bookFlash = this.bookWrapNode.getChildByName("bookFlash")
    },
    // 获取组件事件
    getComponent() {
        this.mainWidget = this.Main.getComponent(cc.Widget);
        this.centerWidget = this.center.getComponent(cc.Widget);
    },
    // 获取动效事件
    getAnimation() {
        // 音乐
        // this.musicAnimation = this.musicNode.getComponent(cc.Animation)
    },
    // 设置监听
    setEventListener() {
        // 按钮
        // this.buttonNode.on("touchstart", this.onButton, this)
    },
    renderUI() {

    },
    //客户端判断：判断是Android还是iOS
    judgeClient() {
        let client = '';
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {  //判断iPhone|iPad|iPod|iOS
            client = 'iOS';
        } else if (/(Android)/i.test(navigator.userAgent)) {  //判断Android
            client = 'Android';
        } else {
            client = 'PC';
        }
        return client;
    },
    //自适应宽度(沉浸式)
    fitUI(){
        const _this = this
        //视图中屏幕尺寸（1倍尺寸）
        const size = cc.view.getFrameSize()
        const {width,height } = size

        // 机型判断
        var client = this.judgeClient()

        //屏幕尺寸、设备
        console.log(width,height,client);

        // 端内方法：获取安卓机状态栏高度
        if(window.grounp){
            console.log("安卓机高度",this.fixAndroidStateBar());
            const fixAndroidStateBar = this.fixAndroidStateBar()
            this.StatusBar.height = fixAndroidStateBar*2
        }

        // widget组件
        if(client === "iOS"){
            if(height < 740){ 
                console.log("ios:",client,"情况一");
                this.StatusBar.height = 40

            }else {
                console.log("ios:",client,"情况二");
                this.StatusBar.height = 88
            }
            this.Header.height = this.StatusBar.height + this.MenuBar.height
        }else{ //Android(PC)
            if(height > 810){ 
                console.log("Android/PC:",client,"情况1");


            }else if(height > 748 && height < 810){ 
                console.log("Android/PC:",client,"情况2");


            }else if(height < 748 && height > 640){
                console.log("Android/PC:",client,"情况3");
    

            }else if(height < 640 && height > 600){ 
                console.log("Android/PC:",client,"情况4");
              
            }else {
                console.log("Android/PC:",client,"情况5");

            }
            this.Header.height = this.StatusBar.height + this.MenuBar.height
        }

        this.centerWidget.left = this.left.width
        this.centerWidget.right = this.right.width

        this.mainWidget.top = this.Header.height
        this.mainWidget.bottom = this.Footer.height
    },
    // 方法

});
