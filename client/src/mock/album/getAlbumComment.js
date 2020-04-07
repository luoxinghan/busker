// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/album/comment','post',function(option){
    /*const postValue ={"albumId":1};*/
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            comment: [{
                commentId: 1,
                userId: 2,
                userName: "Hello",
                content: "这张专辑太好听了吧！",
                star: 5,
                publishTime: "2019-02-21 12:00:00"
            },{
                commentId: 2,
                userId: 3,
                userName: "Hello",
                content: "这张专辑太好听了吧！",
                star: 5,
                publishTime: "2019-02-21 12:00:00"
            },{
                commentId: 3,
                userId: 3,
                userName: "Hello",
                content: "这张专辑太好听了吧！",
                star: 1,
                publishTime: "2019-02-21 12:00:00"
            },{
                commentId: 4,
                userId: 5,
                userName: "Hello",
                content: "这张专辑太好听了吧！",
                star: 5,
                publishTime: "2019-02-21 12:00:00"
            }]
        }
    })
});
