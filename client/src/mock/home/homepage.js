import Mock from "mockjs";

export default Mock.mock('/api/homepage/home','get',{
    success: true,
    data: {
        code: 200,
        homeWebDes: "1233123",
        homeImgList: [{
            id: 1,
            imgUrl: "https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/417473/pexels-photo-417473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w",
            content: "Abner & Hutchins"
        },{
            id: 2,
            imgUrl: "https://images.pexels.com/photos/1306835/pexels-photo-1306835.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/1306835/pexels-photo-1306835.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/1306835/pexels-photo-1306835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/1306835/pexels-photo-1306835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w",
            content: "Валерий"
        },{
            id: 3,
            imgUrl: "https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w",
            content: "Deidre"
        }],
        homeAlbums: [{
            id: 1,
            buskerName: "Megan Buerger",
            imgUrl: "https://media.pitchfork.com/photos/5e7a730bcfc3810009cca530/1:1/w_320/a2503291994_10.jpg",
            albumName: "Cenizas",
            author: "Nicolás Jaar",
            describe: "The Chilean American producer’s latest album is his most probing and existential, taking influences from all over his career and placing them into grim atmospheres that slip in and out of reality",
            sales: 315,
            score: 8.0,
            publishTime: "2018-03-14 12:00:00"
        },{
            id: 3,
            buskerName: "Joshua Copperman",
            imgUrl: "https://media.pitchfork.com/photos/5e72807bba9c2b0009225090/1:1/w_320/Devotion_Margaret%20Glaspy.jpg",
            albumName: "Devotion",
            author: "Margaret Glaspy",
            describe: "Without the self-assurance of her debut, the New York songwriter’s second full-length is an album in search of an identity.",
            sales: 21,
            score: 5.3,
            publishTime: "2020-01-13 12:00:00"
        }]
    }
})
