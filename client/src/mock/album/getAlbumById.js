// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/album/detail','post',function(option){
    /*const postValue ={"albumId":1};*/
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            album: {
                albumsId: 1,
                buskerId: 2,
                buskerName: "Isabelia herrera",
                albumsName: "After Hours",
                author: "The Weekend",
                price: "12.33",
                score: 8.0,//根据所有评论的分数相加 再除以人数 再乘以2取一位小数
                sales: 57,
                imgUrl: "https://media.pitchfork.com/photos/5e6fcda64b101700083a93ce/1:1/w_160/After%20Hours_The%20Weeknd.jpg",
                describe: "Welcome to the website. If you're here, you're likely looking to find random words. Random Word Generator is the perfect tool to help you do this. While this tool isn't a word creator, it is a word generator that will generate random words for a variety of activities or uses. Even better, it allows you to adjust the parameters of the random words to best fit your needs.",
                publishTime: "2020-04-02 23:21:39"
            }
        }
    })
});
