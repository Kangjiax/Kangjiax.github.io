//  animate(dom,obj,callback);
// 目标属性值 = 当前属性值 + 步长
// 步长 = （目标属性值 - 当前属性值）/ 数字
//  1.0 定义函数 animate
function animate(dom,obj,callback) {
    // 判断形参是否有值
    if(dom == undefined || obj == undefined){
        // 没有值，终止代码
        return ;
    }
    // 用定时器函数 先清除定时器函数
    clearInterval(dom.timer);
    // 记录定时器函数的毫秒值 30
    // var mseconds = 1000 / 60 ;
    var mseconds = 30 ;
    // 执行定时器函数
    dom.timer = setInterval(function(){
        // 进入定时器函数作用域 
        // 定义布尔值 （为了更好停止定时器函数）
        var isChange = true;
        // 循环 obj 对象
        // console.log(obj);//{borderRadius: 100, width: 200, height: 300}
        for(var key in obj ){
            // 目标属性值
            var targetV = parseInt(obj[key]);
            // 当前属性值
            var currentV = parseInt(getComputedStyle(dom)[key]);
            // 记录步长
            var speed = (targetV - currentV) / 5;
            // 处理小数点
            // -0.1 == -1
            // 0.5 ==  1
            speed = speed < 0 ? Math.floor(speed) : Math.ceil(speed);
            // 判断 若出现当前属性值不等于目标属性值  设置布尔值为false
            if(currentV != targetV){
                isChange = false;
            }
            // 设置dom的样式
            dom.style[key] = currentV + speed +"px";
        }
        // 循环结束之后 
        // 判断是否要停止定时器函数
        if(isChange){
            // 停止定时器函数
            clearInterval(dom.timer);
            // console.log("停止")
            // 判断是否存在callback 函数
            if(typeof callback === "function") callback();
        }
    },mseconds)
}