function enterphone() {
    var enterphone_ua = navigator.userAgent;
    var enterphone_ipad = enterphone_ua.match(/(iPad).*OS\s([\d_]+)/);
    var enterphone_isIphone = !enterphone_ipad && enterphone_ua.match(/(iPhone\sOS)\s([\d_]+)/);
    var enterphone_isAndroid= enterphone_ua.match(/(Android)\s+([\d.]+)/);
    var enterphone_isMobile = enterphone_isIphone || enterphone_isAndroid;
    if(!enterphone_isMobile) {
        var enterp_url = document.location.href;
        enterp_url = enterp_url.replace('/phone/','/pc/');
        location.href = enterp_url;  
    }
}
enterphone();