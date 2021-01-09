// 业务模块
const serverHandler = (req,res) => {
    // 设置请求头
    res.setHeader('Content-Type','application/json');
    // 响应数据
    const responseData = {
        name: 'hx',
        age: 25
    };
    // 向服务器发出消息已完成的信号
    // res.end –> (data(数据),encoding(编码格式)，callback(回调函数))
    res.end(JSON.stringify(responseData));
}

module.exports = {
    serverHandler,
}