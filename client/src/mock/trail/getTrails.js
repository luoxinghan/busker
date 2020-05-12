import Mock from "mockjs";

export default Mock.mock('/api/trail/trailers','get',{
    success: true,
    data: {
        code: 200,
        trailList: [{
            id: 1,
            buskerId: 4,
            buskerName: "Jay Chou",
            participant: "Hoen & Snow Patrol",
            performingTime: "2019-05-25 12:00:00",
            publishedTime: "2019-05-25 12:00:00",
            performAddress: "г. Гродно, ул. Ожешко, 22, ауд.120",
            likes: 1385,
            describe: "Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum,",
            imgUrl: "//img.alicdn.com/imgextra/i1/2251059038/O1CN01vgwaBm2GdS9yA4EQg_!!0-item_pic.jpg_q60.jpg_.webp"
        },{
            id: 2,
            buskerId: 1,
            buskerName: "YoGa",
            participant: "Nicole & Snow Patrol",
            performingTime: "2019-05-25 12:00:00",
            publishedTime: "2019-05-25 12:00:00",
            performAddress: "г. Гродно, ул. Ожешко, 22, ауд.120",
            likes: 1385,
            describe: "Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum,",
            imgUrl: "//img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01ceFMOH2GdS9cT2M5U_!!0-item_pic.jpg_q60.jpg_.webp"
        },{
            id: 3,
            buskerId: 2,
            buskerName: "YoGa",
            participant: "Nicole & Snow Patrol",
            performingTime: "2019-05-25 12:00:00",
            publishedTime: "2019-05-25 12:00:00",
            performAddress: "г. Гродно, ул. Ожешко, 22, ауд.120",
            likes: 1385,
            describe: "Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum,",
            imgUrl: "//img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01tSttKG2GdS9zcWeVT_!!0-item_pic.jpg_q60.jpg_.webp"
        }]
    }
})
