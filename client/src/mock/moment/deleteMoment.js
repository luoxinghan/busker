// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/moment/delete','post',function(option){
    /*const postValue = {"momentId":1}*/
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "成功删除！"
        }
    })
});
