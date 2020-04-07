// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/comment/delete','post',function(option){
    /*const postValue = {"commentId":1}*/
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "成功删除！"
        }
    })
});
