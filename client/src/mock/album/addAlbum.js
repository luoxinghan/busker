// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/album/add','post',function(option){
    console.log(option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "新增成功！"
        }
    })
});
