// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/moment/add','post',function(option){
    console.log("Moment Add", option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "新增成功！"
        }
    })
});
