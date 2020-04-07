// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/busker/add','post',function(option){
    /*const postValue ={ buskerId:id, nickName: values.nickname, dateOfBirth: values.birth, instruments: values.instrument, introduction: values.introduce, sex: values.sex, iconId: iconId};*/
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "新增成功！"
        }
    })
});
