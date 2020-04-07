// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/login','post',function(option){
    /*const postValue ={"username":"admin", "password": "123456"};*/
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            isLogged: true,
            currentUser: {
                id: 1,
                username: "luoxinghan",
                typeId: 1,
                imgUrl: "https://avatars1.githubusercontent.com/u/30335361?s=460&v=4"
            }
        }
    })
});
