import Mock from "mockjs";

export default Mock.mock('/api/moment/moments', 'get', {
    success: true,
    data: {
        code: 200,
        momentList: [{
            id: 1,
            time: 1586770000000,
            buskerName: "Busker1",
            address: "China, ChongQing",
            describe: "动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容",
            tendency: 123,
            images: [{
                id: 1,
                imageUrl: "https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w"
            }, {
                id: 2,
                imageUrl: "https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w"
            }],
            videos: []
        }, {
            id: 2,
            time: "2018-03-11 15:16:17",
            buskerName: "Busker1",
            address: "China, ChongQing",
            describe: "动态的内容",
            tendency: 123,
            images: [{
                id: 1,
                imageUrl: "https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w"
            }, {
                id: 2,
                imageUrl: "https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w"
            }],
            videos: [{
                id: 1,
                videoUrl: "s1pSx-ngqJs"
            }, {
                id: 2,
                videoUrl: "Ico2q2M24JU"
            }]
        },{
            id: 3,
            time: "2018-03-11 15:16:17",
            buskerName: "Busker1",
            address: "China, ChongQing",
            describe: "动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容",
            tendency: 123,
            images: [{
                id: 1,
                imageUrl: "https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w"
            }, {
                id: 2,
                imageUrl: "https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w"
            }],
            videos: [{
                id: 1,
                videoUrl: "s1pSx-ngqJs"
            }, {
                id: 2,
                videoUrl: "Ico2q2M24JU"
            }]
        }]
    }
})
