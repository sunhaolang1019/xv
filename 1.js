var http = require('http')
// 创建一个服务器
var httpObj = http.createServe(function(request,response){
    console.log("有人来了");
    response.write('给你玩牛肉');
    response.end();
         
})
http.listen(8080);