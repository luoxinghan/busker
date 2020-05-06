// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/album/singles','post',function(option){
    console.log("getAlbumSingles", option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            singles: [{
                singleId: 1,
                singleName: "被紧急的游戏",
                singleLink: "https://2019334.xyz/share/1.%20%E8%A2%AB%E7%A6%81%E5%BF%8C%E7%9A%84%E6%B8%B8%E6%88%8F%282004%29/01%E9%BB%91%E8%89%B2%E4%BF%A1%E5%B0%81.mp3",
                singleDescription: "Hello",
                singleType: ["Folk", "Chinese"],
                singlePublishedTime: 1586770000000,
                singleAuthor: "Hoen & Pink Floyed",
                singleStatus: 1,
                order: 1
            },{
                singleId: 3,
                singleName: "Yellow",
                singleLink: "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3",
                singleDescription: "Hello",
                singleType: ["English","Popular"],
                singlePublishedTime: 1586770000000,
                singleAuthor: "Hoen & Pink Floyed",
                singleStatus: 1,
                order: 2,
            }]
        }
    })
});
