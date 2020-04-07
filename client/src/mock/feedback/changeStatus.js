// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/feedback/status','post',function(option){
    /*const postValue ={
        feedbackId: 3
        status: 3
    };*/
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "修改成功！"
        }
    })
});
