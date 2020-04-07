import Mock from "mockjs";

export default Mock.mock('/api/trail/trails','get',{
    success: true,
    data: {
        code: 200,
        trailList: [{
            id: 1,
            time: "2019-05-25",
            trailName: "Jay Chou",
            site:"Pizza & Coffe Restaurant",
            address: "г. Гродно, ул. Ожешко, 22, ауд.120",
            likes: 1385,
            describe: "Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum,",
            imgUrl: "//img.alicdn.com/imgextra/i1/2251059038/O1CN01vgwaBm2GdS9yA4EQg_!!0-item_pic.jpg_q60.jpg_.webp"
        },{
            id: 2,
            time: "2019-06-22",
            trailName: "YoGa",
            site:"Pizza & Coffe Restaurant",
            address: "Olympic Sports Center, Ji Nan, China",
            likes: 1385,
            describe: "Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum,",
            imgUrl: "//img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01ceFMOH2GdS9cT2M5U_!!0-item_pic.jpg_q60.jpg_.webp"
        },{
            id: 3,
            time: "2019-06-29",
            trailName: "Chang Yen-ting",
            site:"Pizza & Coffe Restaurant",
            address: "Wuliangye Financial City Performing Arts Center, ChengDu, China",
            likes: 1385,
            describe: "Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum,",
            imgUrl: "//img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01tSttKG2GdS9zcWeVT_!!0-item_pic.jpg_q60.jpg_.webp"
        }]
    }
})
