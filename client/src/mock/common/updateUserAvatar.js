// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/image/avatar','post',function(option){
    console.log(...option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "上传成功",
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
