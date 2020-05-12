// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/trail/add','post',function(option){
    console.log("Trail Add", option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "新增成功！"
        }
    })
});
