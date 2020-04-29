// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/login','post',function(option){
    /*const postValue ={"username":"adsf@gmail.com","password":"adsfasdf","tenDaysChecked":true,"usertype":1};*/
    console.log(option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            isLogged: true,
            currentUser: {
                id: 4,
                username: "aaaa@gmail.com",
                typeId: 1,
                imgUrl: "https://avatars1.githubusercontent.com/u/30335361?s=460&v=4"
            }
        }
    })
});
