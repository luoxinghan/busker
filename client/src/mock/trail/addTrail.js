// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/trail/add','post',function(option){
    /*const postValue ={
        buskerId: 2,//这里是创建人的ID
        time: "2020-01-12 12:00:00",
        site: "",
        address: "",
        telephone: "",
        like: 0,
        imgUrl: "",
        details: "",
        buskers: [{//这里是用户选择的演出人
            buskerId: 1
        },{
            buskerId: 3
        }]
    };*/
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "新增成功！"
        }
    })
});
