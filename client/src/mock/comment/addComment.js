// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/comment/add','post',function(option){
    /*const postValue ={
        userId: 3,
        albumId: 2,
        content: "特别棒的专辑！",
        star: 5,
        publishTime: "2020-12-11 23:00:01"
    };*/
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "新增成功！"
        }
    })
});
