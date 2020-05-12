// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/trail/like','post',function(option){
    console.log("Like Trail", option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "成功喜欢！"
        }
    })
});
