// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/trail/delete','post',function(option){
    /*const postValue = {"trailId":1}*/
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "成功删除！"
        }
    })
});
