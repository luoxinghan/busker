// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/trail/detail','post',function(option){
    console.log("GetTrailDetail", option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            isLike: false,
            trail: {
                id: 1,
                buskerId: 4,
                buskerName: "Jay Chou",
                buskerImg: "https://avatars1.githubusercontent.com/u/30335361?s=460&v=4",
                participant: "Hoen & Snow Patrol",
                performingTime: "2019-05-25 12:00:00",
                publishedTime: "2019-05-25 12:00:00",
                performAddress: "г. Гродно, ул. Ожешко, 22, ауд.120",
                likes: 1385,
                status: 1,
                describe: "Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem et placerat vestibulum,",
                imgUrl: "//img.alicdn.com/imgextra/i1/2251059038/O1CN01vgwaBm2GdS9yA4EQg_!!0-item_pic.jpg_q60.jpg_.webp"
            }
        }
    })
});
