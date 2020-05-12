// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/album/delete','post',function(option){
    console.log("Delete Album", option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "成功删除！"
        }
    })
});
