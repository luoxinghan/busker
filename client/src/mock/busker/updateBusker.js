// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/busker/update','post',function(option){
    console.log(option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "修改成功！"
        }
    })
});
