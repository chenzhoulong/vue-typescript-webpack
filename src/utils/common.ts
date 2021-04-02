export function getUrlParam(url: string, name: string){
    let reg = new RegExp("(.*)?"+ name +"=([^&]*)(&|$)");
    let r = url.match(reg);
    return r != null ? unescape(r[2]) : null;
}