// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/login/logout','post',function(option){
    console.log("User Logout",option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            isLogged: false,
        }
    })
});
