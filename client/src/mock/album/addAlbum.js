// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/album/add','post',function(option){
    /*const postValue ={ buskerId: 1, albumName: "", author: "", imgUrl: "", price: 35.31, sales: 0, score: 0, describe: "", publishTime: "2020-12-11 12:00:00};*/
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "新增成功！"
        }
    })
});
