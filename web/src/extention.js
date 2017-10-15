/**
 * 生成随机UUID
 */
function randomGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

/**
* 获取URL中所有参数集合
* 返回一个对象
* */
function getAllUrlParams(url) {
    // 从url(可选)或window对象获取查询字符串
    let queryString = url ? url.split('?')[1] : window.location.search.slice(1);
    let obj = {};
    if (queryString) {
        // 查询字符串不包含#后面的部分，因此去掉它
        queryString = queryString.split('#')[0];
        let arr = queryString.split('&');
        for (let i=0; i<arr.length; i++) {
            // 分离出key和value
            let a = arr[i].split('=');
            // 考虑到这样的参数：list[]=thing1&list[]=thing2
            let paramNum = undefined;
            let paramName = a[0].replace(/\[\d*\]/, function(v) {
                paramNum = v.slice(1,-1);
                return '';
            });
            // 设置参数值（如果为空则设置为true）
            let paramValue = typeof(a[1])==='undefined' ? true : a[1];
            // （可选）保持大小写一致
            paramName = paramName.toLowerCase();
            paramValue = paramValue.toLowerCase();
            // 如果参数名已经存在
            if (obj[paramName]) {
                // 将值转成数组（如果还是字符串）
                if (typeof obj[paramName] === 'string') {
                    obj[paramName] = [obj[paramName]];
                }
                // 如果没有指定数组索引
                if (typeof paramNum === 'undefined') {
                    // 将值放到数组的末尾
                    obj[paramName].push(paramValue);
                }
                // 如果指定了数组索引
                else {
                    // 将值放在索引位置
                    obj[paramName][paramNum] = paramValue;
                }
            }
            // 如果参数名不存在则设置它
            else {
                obj[paramName] = paramValue;
            }
        }
    }

    return obj;
}

/**
* 获取url参数
* @name:参数名
* */
function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

/**
* 从当前页面的url中得到参数
* */
function getParam(name) {
    let params = window.location.href;

    let start = params.indexOf(name + "=");
    if (start < 0) return "";

    start += name.length + 1;
    let end = params.indexOf("&", start);

    if (end > 0) {
        return params.substring(start, end);
    } else {
        return params.substring(start);
    }
}

/**
* 生成时间戳
* */
function timestamp(){
    let D = new Date();
    let year = D.getFullYear();
    let month = D.getMonth()+1;
    let day = D.getDate();
    let h= D.getHours();
    let m= D.getMinutes();
    let random=parseInt(Math.random()*100000);
    return year+""+month+""+day+""+h+""+m+""+random;
}

/**
 * 生成随机整数（包括min和max）
 * @min：随机数最小数
 * @max：随机数最大数
 */
function randomBetween(min, max){
    return min+Math.floor( Math.random() * (max-min+1) );
}

/**
 * 表单匹配验证
 * @type：验证类型
 * 	"number"：是否全为数字
 * 	"mobile"：是否正确手机号码
 * 	"email"：是否正确邮箱
 * 	"id"：是否正确身份证号
 */
function checkFormReg(argv,type){
    let regNumber=/^-?\d+(\.\d+)?$/;
    let regMobile=/^1[3|4|5|7|8]\d{9}$/;
    let regEmail=/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
    let regID=/(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
    let reg="";

    switch(type){
        case "number":
            reg=regNumber;
            break;
        case "mobile":
            reg=regMobile;
            break;
        case "email":
            reg=regEmail;
            break;
        case "id":
            reg=regID;
            break;
        default:
            alert("参数有误");
    }

    return reg.test(argv);
}

/**
 * 获取当前系统时间并格式化
 * @参数无
 */
function getLocalDate(){
    let myTime=new Date();
    let iYear=myTime.getFullYear();
    let iMonth=myTime.getMonth()+1;
    let iDate=myTime.getDate();
    let iWeek=myTime.getDay();
    let iHous=myTime.getHours();
    let iMin=myTime.getMinutes();
    let iSec=myTime.getSeconds();

    switch(iWeek){
        case 0:
            iWeek='星期天';
            break;
        case 1:
            iWeek='星期一';
            break;
        case 2:
            iWeek='星期二';
            break;
        case 3:
            iWeek='星期三';
            break;
        case 4:
            iWeek='星期四';
            break;
        case 5:
            iWeek='星期五';
            break;
        case 6:
            iWeek='星期六';
            break;
    }

    let date=iYear+'年'+ iMonth+'月'+iDate +'日'+iWeek+ totwo(iHous)+' : '+totwo( iMin)+' : ' +totwo(iSec);

    return date;

    function totwo(n){		//让时分秒单位数时前加0
        return n<10 ? '0'+n : ''+n;
    }
}

/**
 * 判断用户设备类型
 */
function userUa() {
    var browser={
        versions:function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            return {//移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                weixin: u.indexOf('MicroMessenger') > -1, //是否微信
                qq: u.match(/\sQQ/i) == " qq" //是否QQ
            };
        }(),
        language:(navigator.browserLanguage || navigator.language).toLowerCase()
    }
}

/**
 * 判断横竖屏
 */

/**
 * 去除空格
 * @type default-所有空格  1-前后空格  2-前空格 3-后空格
 */
function trimMode(str,type){
    switch (type){
        case 1:return str.replace(/(^\s*)|(\s*$)/g, "");
        case 2:return str.replace(/(^\s*)/g, "");
        case 3:return str.replace(/(\s*$)/g, "");
        default:return str.replace(/\s+/g,"");
    }
}

/**
 * 倒计时
 */



Object.assign(Number.prototype,{
    /**
     * 格式化货币
     * @money：货币符号 "$" "￥"，不传则默认只有数值
     *
     * @返回：新值，不改变原值
     */
    formatMoney(money){
        // 保留2位小数并转字符串
        let result=this.roundTo(2).toString();
        let format=result.split('').reverse().join('').replace(/(\d{3}(?=\d)(?!\d+\.|$))/g, '$1,').split('').reverse().join('');

        return money ? money+format : format;
        // console.log( round.replace(/(.{3})/g,'$1,') );
    },
    /**
     * 保留n位小数
     * @n：保留多少位
     * @t：不够位数是否补0（true / 无）
     *
     * @返回：新值，不改变原值
     */
    roundTo(n,t){
        let that=this;
        let zero;

        // 若无小数位
        try{
            zero=n-this.toString().split(".")[1].length;
        }catch(e){
            zero=0;
        }

        if( t && zero>=0 ){

            if( zero>0 ){
                for(let i=0;i<zero;i++){
                    that+="0";
                };
            }else if( zero==0 ){
                that+="";
            }

            // 注意：typeof that = string
            return that;

        };

        return Math.round( that*Math.pow(10,n) ) / Math.pow(10,n);
        // return !t ? Math.round( that*Math.pow(10,n) ) / Math.pow(10,n) : that;
    }
});

/**
 * 数组去重
 * @参数无
 *
 * @返回：去重后的数组，改变原数组
 */

Object.assign(Array.prototype,{
    removeRepeat(){
        for(let i=0;i<this.length;i++){
            for(let j=i+1;j<this.length;j++){
                if(this[i]===this[j]){
                    this.splice(j,1);
                    j--;
                }
            }
        }
        return this;
    }
})


export {
    randomGuid,
    getAllUrlParams,
    getQueryString,
    getParam,
    timestamp,
    randomBetween,
    checkFormReg,
    getLocalDate,
    userUa,
    trimMode
}
