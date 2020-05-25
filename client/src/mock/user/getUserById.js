// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/user/detail', 'post', function (option) {
    console.log("User Detail",option.body);
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            user: {
                id: 4,
                imgUrl: "https://avatars1.githubusercontent.com/u/30335361?s=460&v=4",
                username: "qjlglij@gmail.com",
                balance: 11,
                sex: 1,
                dateOfBirth: 1586769952768,
                registeredTime: 1586769952768
            }
        }
    })
});
