// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/upload/dbpicture','post',function(option){
    //这个是要存入数据库的image所有拥有一个id字段
    return Mock.mock({
        success: true,
        message: "上传成功!",
        data: {
            imageId: 1,
            name: "ACyIbrQNcJwxGM7.jpg",
            url: "https://i.loli.net/2019/11/17/pudaovbTefSJsDx.jpg"
        }
    })
    //上传失败
    /*
        success: false,
        message: "上传失败!",
        data: {
            name: "ACyIbrQNcJwxGM7.jpg",
            status: "error"
        }
    */
});
