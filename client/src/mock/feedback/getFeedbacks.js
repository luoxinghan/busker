import Mock from "mockjs";

export default Mock.mock('/api/feedback/feedbacks', 'get', {
    success: true,
    data: {
        code: 200,
        feedbacks: [{
            feedbackId: 1,
            firstName: "Li",
            lastName: "Hao",
            email: "ljljg@gmail.com",
            content: "jlkjajsdglj",
            publishTime: "2020-02-11 14:20:19",
            status: 1
        }, {
            feedbackId: 2,
            firstName: "Li",
            lastName: "Hao",
            email: "ljljg@gmail.com",
            content: "jlkjajsdglj",
            publishTime: "2020-02-11 14:20:19",
            status: 2
        }]
    }
})
