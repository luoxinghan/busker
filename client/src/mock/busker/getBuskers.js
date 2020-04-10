import Mock from "mockjs";

export default Mock.mock('/api/busker/buskers','get',{
    //所有的busker就可以 直接在前台进行分页。
    //原本的api为/api/busker/buskerList
    success: true,
    data: {
        code: 200,
        buskerList: [{
            id: 1,
            imgUrl: "https://avatars1.githubusercontent.com/u/30335361?s=460&v=4",
            buskerName: "GOrogoj jOgha",
            age: 14,
            sex: 1,
            instrument: "Guitar, Piano",
            introduce: "introduce",
            recentPerform: "2019-04-23",
            tendencyAllHot: 121
        },{
            id: 2,
            imgUrl: "https://avatars1.githubusercontent.com/u/15577175?s=460&v=4",
            buskerName: "Busker",
            age: 23,
            sex: 1,
            instrument: "Guitar, Piano",
            introduce: "introduce",
            recentPerform: "2019-04-23",
            tendencyAllHot: 415
        },{
            id: 3,
            imgUrl: "https://avatars1.githubusercontent.com/u/30145671?s=460&v=4",
            buskerName: "Busker",
            age: 15,
            sex: 1,
            instrument: "Guitar, Piano",
            introduce: "introduce",
            recentPerform: "2019-04-23",
            tendencyAllHot: 215
        },{
            id: 4,
            imgUrl: "https://avatars1.githubusercontent.com/u/14561783?s=460&v=4",
            buskerName: "Busker",
            age: 27,
            sex: 1,
            instrument: "Guitar, Piano",
            introduce: "introduce",
            recentPerform: "2019-04-23",
            tendencyAllHot: 167
        },{
            id: 5,
            imgUrl: "https://avatars1.githubusercontent.com/u/1467898?s=460&v=4",
            buskerName: "Busker",
            age: 12,
            sex: 1,
            instrument: "Guitar, Piano",
            introduce: "introduce",
            recentPerform: "2019-04-23",
            tendencyAllHot: 4681
        },{
            id: 6,
            imgUrl: "https://avatars1.githubusercontent.com/u/1125996?s=460&v=4",
            buskerName: "Busker",
            age: 41,
            sex: 1,
            instrument: "Guitar, Piano",
            introduce: "introduce",
            recentPerform: "2019-04-23",
            tendencyAllHot: 2341
        },{
            id: 7,
            imgUrl: "https://avatars1.githubusercontent.com/u/30335361?s=460&v=4",
            buskerName: "Busker",
            age: 62,
            sex: 1,
            instrument: "Guitar, Piano",
            introduce: "introduce",
            recentPerform: "2019-04-23",
            tendencyAllHot: 4156
        },{
            id: 8,
            imgUrl: "https://api.adorable.io/avatars/285/adf.png",
            buskerName: "Busker",
            age: 11,
            sex: 1,
            instrument: "Guitar, Piano",
            introduce: "introduce",
            recentPerform: "2019-04-23",
            tendencyAllHot: 713
        },{
            id: 9,
            imgUrl: "https://avatars1.githubusercontent.com/u/30335361?s=460&v=4",
            buskerName: "Busker",
            age: 23,
            sex: 1,
            instrument: "Guitar, Piano",
            introduce: "introduce",
            recentPerform: "2019-04-23",
            tendencyAllHot: 144
        },{
            id: 10,
            imgUrl: "https://api.adorable.io/avatars/400/abott@adorable.io.png",
            buskerName: "Busker",
            age: 23,
            sex: 1,
            instrument: "Guitar, Piano",
            introduce: "introduce",
            recentPerform: "2019-04-23",
            tendencyAllHot: 3
        }]
    }
})
