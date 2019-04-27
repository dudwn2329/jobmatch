const request = require('request');
const c = require('cheerio');

const options = {
    url: 'http://y-y.hs.kr/lunch.view?date=20190429',
    headers: {
        'User-Agent':'Mozilla/5.0'
        
    }
}
request(options, function(err, res, body){
    if(err != null){
        console.log(err);
        return;
    }
    $ = c.load(body);
    let menu = $(".menuName > span");
    
    console.log(menu);
    
});