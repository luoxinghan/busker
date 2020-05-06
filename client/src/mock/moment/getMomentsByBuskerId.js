// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/moment/buskerId', 'post', function (option) {
    console.log("Busker", option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            momentList: [{
                id: 1,
                time: 1486770012160,
                buskerId: 4,
                buskerName: "Busker1",
                address: "China, ChongQing",
                describe: "动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容",
                tendency: 123,
                images: [
                    {
                        id: 1,
                        imageUrl: "https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w"
                    },
                    {
                        id: 2,
                        imageUrl: "https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w"
                    }
                ],
                videos: [
                    {
                        id: 1,
                        videoUrl: "s1pSx-ngqJs"
                    }, {
                        id: 2,
                        videoUrl: "Ico2q2M24JU"
                    }, {
                        id: 3,
                        videoUrl: "s1pSx-ngqJs"
                    }, {
                        id: 4,
                        videoUrl: "Ico2q2M24JU"
                    }
                ]
            }, {
                id: 3,
                time: 1486770012160,
                buskerId: 4,
                buskerName: "BusAf",
                address: "China, ChongQing",
                describe: "动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容动态的内容",
                tendency: 14,
                images: [{
                    id: 1,
                    imageUrl: "https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w"
                }, {
                    id: 2,
                    imageUrl: "https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w"
                }]
            }]
        }
    })
});
