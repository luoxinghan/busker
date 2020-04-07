// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/register','post',function(option){
    /*const postValue ={"username":"admin", "password": "123456", "type": 1};*/
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "注册成功"
        }
    })
});
