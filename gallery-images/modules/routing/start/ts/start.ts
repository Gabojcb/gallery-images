
import {routing}  from   "@beyond-js/kernel/routing";




routing.redirect = async function redirect(uri: any): Promise<any> {
console.log(uri)
    if(uri.pathname === '/') return "/home";
	return uri.pathname;
};

