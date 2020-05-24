// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/captcha','post',function(option){
    console.log("Captcha", option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            captcha: 'R2TVk'
        }
    })
});
