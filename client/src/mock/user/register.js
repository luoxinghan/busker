// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/register','post',function(option){
    console.log("Register", option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "注册成功"
        }
    })
});
