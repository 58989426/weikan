
function back() {
    api.closeWin();
}

function inArray(needle, array) {
    if (typeof needle == "string" || typeof needle == "number") {
        var len = array.length;
        for (var i = 0; i < len; i++) {
            if (needle === array[i]) {
                return true;
            }
        }
        return false;
    }
}
/**
 * [isDefine 判断值是否定义]
 * @param  {[string]}  value
 * @return {Boolean}
 */
function isDefine(value) {
	if (value == null || value == "" || value == "undefined" || value == undefined || value == "null" || value == "(null)" || value == 'NULL' || typeof(value) == 'undefined') {
		return false;
	} else {
		value = value + "";
		value = value.replace(/\s/g, ""); //全局匹配空白字符
		if (value == "") {
			return false;
		}
		return true;
	}
}
/**
 * [openFrame 打开frame]
 * @param  {[string]}	name      	[frame名称]
 * @param  {[string]} 	url      	[页面地址]
 * @param  {[object]} 	pageParam 	[对象参数组]
 * @param  {[string]} 	isBounces 	[是否弹动]
 * @link http://www.kancloud.cn/hongweizhiyuan/apicloud_function/270222
 */
function openFrame(name, url, pageParam,isBounces) {
	if (isDefine(pageParam)) {
		var pageParam = pageParam;
	} else {
		pageParam = new Object();
	}
	var header =document.querySelector('header');
	$api.fixStatusBar(header);
	var headerPos = $api.offset(header);

  var footer = $api.dom('footer'); // 获取 footer 标签元素
  var footerH = $api.fixTabBar(footer);

	api.openFrame({
		name: name,
		url: url,
		pageParam: pageParam,
		bounces: isBounces ? isBounces:true,
		slidBackEnabled: 'false',
    reload:true,
		rect: {
			x: 0,
			y: headerPos.h,
			w: 'auto',
			h: 'auto',
      marginBottom:footerH
		}
	})
}
/**
 * [openWin 打开新窗口]
 * @param  {[string]} name      [win名称]
 * @param  {[string]} url       [页面地址]
 * @param  {[object]} pageParam [对象参数组]
 */
function openWin(name, url, pageParam) {
	if (isDefine(pageParam)) {
		var pageParam = pageParam;
	} else {
		pageParam = new Object();
	}
	api.openWin({
		name: name,
		url: url,
		pageParam: pageParam,
    bounces: false,
	});
}
/**
 * [fix_android_ios 解决沉浸式的问题]
 * @author Hongwei
 * @param {[obj]} color [头部颜色 | darkgray 深灰色 | black 黑色 | green 绿色，如果不是以上这几种颜色，可以自定义颜色 ]
 * @link http://www.kancloud.cn/hongweizhiyuan/apicloud_function/270056
 * @eg fix_android_ios('darkgray')  or fix_android_ios('FF0000')
 */
function fix_android_ios(color){
	switch(color)
	{
		case 'darkgray':
			color = "#303247"
			break;
		case 'black':
			color = "#000000"
			break;
		case 'white':
			color = "#FFFFFF"
			break;
		case 'green':
			color = "#01b980"
			break;
		default:
			color = color
	}
	api.setStatusBarStyle({
		style : 'light',
		color: color
	});
	var header = document.querySelector('header');
	$api.fixIos7Bar(header);
	$api.fixStatusBar(header);
}
