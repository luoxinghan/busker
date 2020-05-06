// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/album/comments','post',function(option){
    console.log("getAlbumComments", option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            comments: [{
                commentId: 1,
                userId: 2,
                userName: "Hello",
                imgUrl: "https://avatars1.githubusercontent.com/u/30335361?s=460&v=4",
                content: "这张专辑太好听了吧！",
                star: 5,
                publishTime: "2019-02-21 12:00:00",
                hasReplies: 2
            },{
                commentId: 2,
                userId: 3,
                userName: "What",
                imgUrl: "https://avatars1.githubusercontent.com/u/30335361?s=460&v=4",
                content: "这张专辑太好听了吧！",
                star: 5,
                publishTime: 1586770000000,
                hasReplies: 4
            },{
                commentId: 3,
                userId: 3,
                userName: "Hello3",
                imgUrl: "https://avatars1.githubusercontent.com/u/14561783?s=460&v=4",
                content: "这张专辑太好听了吧！",
                star: 1,
                publishTime: 1586770000000,
                hasReplies: 1
            },{
                commentId: 4,
                userId: 5,
                userName: "Hello4",
                imgUrl: "https://avatars1.githubusercontent.com/u/15577175?s=460&v=4",
                content: "这张专辑太好听了吧！",
                star: 3,
                publishTime: 1586770000000
            }]
        }
    })
});
