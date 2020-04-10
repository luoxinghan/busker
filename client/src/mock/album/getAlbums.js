import Mock from "mockjs";

export default Mock.mock('/api/album/albums','get',{
    success: true,
    data: {
        code: 200,
        albumsList: [{
            albumsId: 1,
            buskerId: 1,
            buskerName: "Isabelia herrera",
            albumsName: "After Hours",
            author: "The Weekend",
            imgUrl: "https://media.pitchfork.com/photos/5e6fcda64b101700083a93ce/1:1/w_160/After%20Hours_The%20Weeknd.jpg",
            publishTime: "2020-04-02 23:21:39"
        },{
            albumsId: 2,
            buskerId: 3,
            buskerName: "Andy Beta",
            albumsName: "Who Sent You? I Sent You? How About You?",
            author: "Irreversible Entanglements",
            imgUrl: "https://media.pitchfork.com/photos/5e7115dc4b101700083a93d7/1:1/w_160/Who%20Sent%20You?_Irreversible%20Entanglements.jpg",
            publishTime: "2020-04-01 23:21:39"
        },{
            albumsId: 4,
            buskerId: 5,
            buskerName: "Ruth Saxelby",
            albumsName: "Fountain",
            author: "Lyra Pramuk",
            imgUrl: "https://media.pitchfork.com/photos/5e72887e25a55d0008c629d3/1:1/w_160/Fountain_Lyra%20Pramuk.jpg",
            publishTime: "2020-03-31 23:21:39"
        },{
            albumsId: 5,
            buskerId: 7,
            buskerName: "Paul A. Thompson",
            albumsName: "3.15.20",
            author: "Childish Gambino",
            imgUrl: "https://media.pitchfork.com/photos/5e79231f2a54c60008d8e38f/1:1/w_160/3.15.20_Childish%20Gambino.jpg",
            publishTime: "2020-03-22 23:21:39"
        },{
            albumsId: 6,
            buskerId: 10,
            buskerName: "Alphonse Pierre",
            albumsName: "PARTYNEXTDOOR",
            author: "PARTYMOBILE",
            imgUrl: "https://media.pitchfork.com/photos/5e7e6f191f638000081a6a18/1:1/w_160/partymobile.jpg",
            publishTime: "2020-03-21 13:04:12"
        },{
            albumsId: 7,
            buskerId: 9,
            buskerName: "Kathryn St. Asaph",
            albumsName: "Before Love Came to Kill Us",
            author: "Jessie Reyez",
            imgUrl: "https://media.pitchfork.com/photos/5e83770fe4c42e0008da7c7c/1:1/w_160/Before%20Love%20Came%20to%20Kill%20Us_Jessie%20Reyez.jpg",
            publishTime: "2020-03-21 03:00:13"
        },{
            albumsId: 8,
            buskerId: 11,
            buskerName: "Sean T. Collins",
            albumsName: "Ghosts V: Together / Ghosts VI: Locusts",
            author: "Nice Inch Nails",
            imgUrl: "https://media.pitchfork.com/photos/5e7e69a2fd3a8b0008fc4f47/1:1/w_160/ghostsv.jpg",
            publishTime: "2020-03-20 12:31:03"
        },{
            albumsId: 9,
            buskerId: 12,
            buskerName: "Rob Arcand",
            albumsName: "Snapshot of a Beginner",
            author: "Nap Eyes",
            imgUrl: "https://media.pitchfork.com/photos/5e7e746f1f638000081a6a1c/1:1/w_160/snapshot.jpg",
            publishTime: "2020-03-14 19:02:11"
        },{
            albumsId: 10,
            buskerId: 13,
            buskerName: "Matthew Ismael Ruiz",
            albumsName: "We Are Sent Here by History",
            author: "Shabaka and the Ancestors",
            imgUrl: "https://media.pitchfork.com/photos/5e7284725138f70008053491/1:1/w_160/History_Shabaka%20Ancestors.jpg",
            publishTime: "2020-03-12 10:20:12"
        },{
            albumsId: 12,
            buskerId: 14,
            buskerName: "Evan RyTlewski",
            albumsName: "Empty Country",
            author: "Empty Country",
            imgUrl: "https://media.pitchfork.com/photos/5e74e8222a54c60008d8e383/1:1/w_160/Empty%20Country_Empty%20Country.jpg",
            publishTime: "2020-03-12: 01:01:01"
        }]
    }
})
