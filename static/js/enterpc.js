function enterpc() {
    var enterpc_ua = navigator.userAgent;
    var enterpc_ipad = enterpc_ua.match(/(iPad).*OS\s([\d_]+)/);
    var enterpc_isIphone = !enterpc_ipad && enterpc_ua.match(/(iPhone\sOS)\s([\d_]+)/);
    var enterpc_isAndroid= enterpc_ua.match(/(Android)\s+([\d.]+)/);
    var enterpc_isMobile = enterpc_isIphone || enterpc_isAndroid;
    if(enterpc_isMobile) {
        var enterp_url = document.location.href;
        enterp_url = enterp_url.replace('/pc/','/phone/')
        location.href = enterp_url;  
    }
}
enterpc();