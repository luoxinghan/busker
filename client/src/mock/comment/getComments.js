import Mock from "mockjs";

export default Mock.mock('/api/comment/comments', 'get', {
    success: true,
    data: {
        code: 200,
        comments: [{
            id: 1,
            albumId: 2,
            userName: "NickName",
            content: "Not good I dont like it.",
            star: 2,
            publishTime: "2020-02-11 14:20:19"
        }, {
            id: 2,
            albumId: 2,
            userName: "What",
            content: "Nice Album, I love it so much!!",
            star: 5,
            publishTime: "2020-02-11 14:20:19"
        }]
    }
})
