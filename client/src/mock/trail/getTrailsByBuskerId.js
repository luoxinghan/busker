// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/trail/buskerId','post',function(option){
    console.log("Busker",option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            trailList: [{
                id: 1,
                buskerId: 4,
                performingTime: 1586769952768,
                publishedTime: 1586769952768,
                performAddress: "г. Гродно, ул. Ожешко, 22, ауд.120",
                describe: "Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum,",
                imgUrl: "//img.alicdn.com/imgextra/i1/2251059038/O1CN01vgwaBm2GdS9yA4EQg_!!0-item_pic.jpg_q60.jpg_.webp",
                likes: 4144,
                buskers: "CodePlay & Westlife"
            },{
                id: 2,
                buskerId: 4,
                performingTime: 1586769952768,
                publishedTime: 1586769952768,
                performAddress: "Grodno, Belarusг. Гродно, ул. Ожешко, 22, ауд.120",
                describe: "Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum,",
                imgUrl: "http://img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01ceFMOH2GdS9cT2M5U_!!0-item_pic.jpg_q60.jpg_.webp",
                likes: 4,
                buskers: "Hoen & Snow Patrol"
            }]
        }
    })
});
