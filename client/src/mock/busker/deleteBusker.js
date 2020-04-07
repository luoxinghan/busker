// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/busker/delete','post',function(option){
    /*const postValue = {"buskerId":1}*/
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "成功删除！"
        }
    })
});
