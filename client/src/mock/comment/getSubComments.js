// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/comment/sub','post',function(option){
    console.log("getSubComments", option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            subcomments: [{
                commentId: 14,
                userId: 2,
                userName: "NickName 2",
                imgUrl: "https://avatars1.githubusercontent.com/u/30335361?s=460&v=4",
                content: "Not good I dont like it.",
                star: 2,
                publishTime: "2020-02-11 14:20:19",
                hasReplies: 1
            }, {
                commentId: 8,
                userId: 2,
                userName: "What 2",
                imgUrl: "https://avatars1.githubusercontent.com/u/14561783?s=460&v=4",
                content: "Nice Album, I love it so much!!",
                star: 5,
                publishTime: "1586770000000",
                hasReplies: null
            }]
        }
    })
});
