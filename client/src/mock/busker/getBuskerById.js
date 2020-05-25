// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/busker/detail', 'post', function (option) {
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            busker: {
                id: 4,
                imgUrl: "https://avatars1.githubusercontent.com/u/30335361?s=460&v=4",
                buskerName: "ColdPlay",
                sex: 1,
                age: 899251200,
                instrument: "Guitar",
                introduce: "nice man",
                recentPerform: 4,
                tendencyAllHot: 10
            }
        }
    })
});
