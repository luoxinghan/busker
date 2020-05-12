import Mock from "mockjs";

export default Mock.mock('/api/single/type', 'get', {
    success: true,
    data: {
        code: 200,
        singleTypes: [{
            typeId: 1,
            typeName: "Pop"
        },{
            typeId: 2,
            typeName: "Rock"
        },{
            typeId: 3,
            typeName: "Folk"
        },{
            typeId: 4,
            typeName: "Popular"
        }]
    }
})
