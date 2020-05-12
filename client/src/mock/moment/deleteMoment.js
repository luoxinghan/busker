// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/moment/delete','post',function(option){
    console.log("DeleteMoment", option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "成功删除！"
        }
    })
});
