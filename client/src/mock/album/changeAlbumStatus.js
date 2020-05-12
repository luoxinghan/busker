// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/album/status','post',function(option){
    console.log("Change Album Status", option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "成功修改！"
        }
    })
});
