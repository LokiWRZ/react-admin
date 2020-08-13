export function getRedirectPath({type,avatar}){
    let url = (type === 'admin') ? '/admin':'/genius'
    if(!avatar){
        url = 'layout'
    }
    return url
}
