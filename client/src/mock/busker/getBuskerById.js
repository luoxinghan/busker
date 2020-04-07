// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/busker/detail', 'post', function (option) {
    /*const postValue ={"buskerId":1};*/
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            busker: {
                id: 1,
                imgUrl: "https://avatars1.githubusercontent.com/u/30335361?s=460&v=4",
                buskerName: "ColdPlay",
                sex: 1,
                age: 19,
                instrument: "Guitar",
                introduce: "nice man",
                moments: [{
                    id: 3,
                    time: "2019-04-16T12:17:53.000Z",
                    buskerName: "ColdPlay",
                    address: "г. Гродно, ул. Ожешко, 22, ауд.120",
                    describe: "55555555",
                    tendency: 90,
                    images: [{
                        id: 4,
                        imageUrl: "https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w"
                    }],
                    videos: []
                }, {
                    id: 4,
                    time: "2019-03-26T08:33:16.000Z",
                    buskerName: "ed sheeran",
                    address: "г. Гродно, ул. Ожешко, 22, ауд.120",
                    describe: "000000000000",
                    tendency: 90,
                    images: [],
                    videos: [{
                        id: 6,
                        videoUrl: "W_sdEBKrJUE"
                    }]
                }],
                trails: [{
                    id: 3,
                    time: "2019-04-30T21:00:00.000Z",
                    name: "coldPlay",
                    address: "ChongQing, China",
                    describe: "aghdsg",
                    imgUrl: "//img.alicdn.com/imgextra/i1/2251059038/O1CN01vgwaBm2GdS9yA4EQg_!!0-item_pic.jpg_q60.jpg_.webp"
                }, {
                    id: 2,
                    time: "2019-03-15T21:00:00.000Z",
                    name: "ed shrenn",
                    address: "grodno, belarus",
                    describe: "2019年 全国舞台艺术优秀作品展演 全国优秀民族歌剧展演 中央歌剧院 原创歌剧《命运》   时间:2019年3月2-3日 地点:北京二七剧场             主创人员   出品人:袁平 总监制:刘云志 监制:杨雄、么红、李丹阳   作曲:捞仔 编剧:朱海 导演:曹其敬 指挥:杨洋、袁丁 舞美设计:马连庆 执行导演:沈亮 合唱指挥:周昊宇 乐团首席:杜玄   灯光设计:袁京男、晁毅 服装设",
                    imgUrl: "//img.alicdn.com/imgextra/i1/2251059038/O1CN01vgwaBm2GdS9yA4EQg_!!0-item_pic.jpg_q60.jpg_.webp"
                }],
                albums: [{
                    albumsId: 1,
                    albumsName: "After Hours",
                    author: "The Weekend",
                    imgUrl: "https://media.pitchfork.com/photos/5e6fcda64b101700083a93ce/1:1/w_160/After%20Hours_The%20Weeknd.jpg",
                    publishTime: "2020-04-02 23:21:39"
                }, {
                    albumsId: 2,
                    albumsName: "After Hours",
                    author: "The Weekend",
                    imgUrl: "https://media.pitchfork.com/photos/5e6fcda64b101700083a93ce/1:1/w_160/After%20Hours_The%20Weeknd.jpg",
                    publishTime: "2020-04-02 23:21:39"
                }]
            }
        }
    })
});
