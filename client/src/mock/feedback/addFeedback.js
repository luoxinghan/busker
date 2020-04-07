// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/feedback/add','post',function(option){
    /*const postValue ={
        firstName: "",
        lastName: "",
        email: "",
        content: "",
        publishTime: ""
    };*/
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "新增成功！"
        }
    })
});
