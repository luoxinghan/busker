// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/moment/add','post',function(option){
    /*const postValue ={
        buskerId: 2,//这里是创建人的ID
        address: "",
        tendency: 0,
        content: "",
        images: [{
            imageId: 1
        },{
            imageId: 2
        }],
        videos:[{
            url: "tPcCWqQsFBA"
        },{
            url: "tPcCWqQsFBA"
        }],
        postTime: ""
    };*/
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "新增成功！"
        }
    })
});
