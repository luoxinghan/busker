// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/album/buy','post',function(option){
    console.log("BuyAlbum", option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "Successful purchase!",
            haveAlbum: true
        }
    })
});
