import Mock from "mockjs";

Mock.mock('废弃', 'post', function (option) {
    console.log("getSubComments", option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            comments: [{
                commentId: 1,
                userId: 2,
                userName: "NickName",
                content: "Not good I dont like it.",
                star: 2,
                publishTime: "2020-02-11 14:20:19",
                hasReplies: 2
            }, {
                commentId: 2,
                userId: 2,
                userName: "What",
                content: "Nice Album, I love it so much!!",
                star: 5,
                publishTime: "1586770000000",
                hasReplies: null
            }, {
                commentId: 4,
                userId: 2,
                userName: "What",
                content: "Nice Album, I love it so much!!",
                star: 3,
                publishTime: "1586770000000"
            }]
        }
    })
});
