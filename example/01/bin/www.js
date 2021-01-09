//引入nodejs的http模块
const _http = require('http');
//引入自定义业务模块
const serverHandle = require('../app');
//配置常量
const _web={
    PORT: 5000
};
//创建服务器
const server = _http.createServer(serverHandle.serverHandler);
//监听端口
server.listen(_web.PORT, ()=>{
    console.log('server running at PORT:'+_web.PORT);
})