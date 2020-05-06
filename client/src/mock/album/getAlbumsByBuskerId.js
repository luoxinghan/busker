// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/album/buskerId','post',function(option){
    console.log("Busker",option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            albumsList: [{
                albumsId: 1,
                buskerId: 4,
                buskerName: "Snow Patrol",
                albumsName: "Eyes Open",
                author: "Irreversible Entanglements",
                price: "70.31",
                score: 4.9,
                sales: 1,
                singleNumber: 4,
                albumStatus: 4,
                imgUrl: "https://media.pitchfork.com/photos/5e6fcda64b101700083a93ce/1:1/w_160/After%20Hours_The%20Weeknd.jpg",
                describe: "Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum,",
                publishTime: 1586769952768
            },{
                albumsId: 5,
                buskerId: 4,
                buskerName: "Snow Patrol",
                albumsName: "Who Sent You? I Sent You? How About You?",
                price: "2.1",
                score: 8.2,
                sales: 1,
                singleNumber: 4,
                albumStatus: 2,
                imgUrl: "https://media.pitchfork.com/photos/5e6fcda64b101700083a93ce/1:1/w_160/After%20Hours_The%20Weeknd.jpg",
                describe: "Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum,",
                publishTime: 1586769952768
            }]
        }
    })
});
