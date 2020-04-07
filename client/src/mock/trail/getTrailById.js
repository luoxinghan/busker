// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/trail/detail','post',function(option){
    /*const postValue ={"trailId":"1"};*/
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            trail: {
                id: 1,
                trailName: "Mai Tian Music Festival",
                time: "2020-03-25 11:59:59",
                site:"Pizza & Coffe Restaurant",
                address: "г. Гродно, ул. Ожешко, 22, ауд.120",
                telephone:"+123415566",
                describe: "Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum,",
                imgUrl: "http://img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01ceFMOH2GdS9cT2M5U_!!0-item_pic.jpg_q60.jpg_.webp",
                likes: 1385,
                buskers: [{
                    id: 1,
                    imgUrl: "https://avatars1.githubusercontent.com/u/30335361?s=460&v=4",
                    buskerName: "Busker",
                },{
                    id: 2,
                    imgUrl: "https://avatars1.githubusercontent.com/u/15577175?s=460&v=4",
                    buskerName: "GOrogoj jOgha",
                }]
            }
        }
    })
});
