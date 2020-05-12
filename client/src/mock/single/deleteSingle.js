// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/single/delete','post',function(option){
    console.log("DeleteSingle", option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "成功删除！"
        }
    })
});
