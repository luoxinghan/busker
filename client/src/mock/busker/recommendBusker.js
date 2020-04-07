import Mock from "mockjs";

export default Mock.mock('/api/busker/recommend', 'get', {
    success: true,
    data: {
        code: 200,
        recommendBusker: [{
            id: 1,
            imgUrl: "https://avatars1.githubusercontent.com/u/30335361?s=460&v=4",
            buskerName: "Busker",
            age: 23,
            sex: 1,
            instrument: "Guitar, Piano",
            introduce: "introduce",
            recentPerform: "2019-04-23",
            tendencyAllHot: 10445
        }, {
            id: 2,
            imgUrl: "https://avatars1.githubusercontent.com/u/15577175?s=460&v=4",
            buskerName: "GOrogoj jOgha",
            age: 23,
            sex: 1,
            instrument: "Guitar, Piano",
            introduce: "introduce",
            recentPerform: "2019-04-23",
            tendencyAllHot: 10445
        }],
    }
})