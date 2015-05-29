angular.module('music.services').service("ListSongService",function(){    
  var listSinger = [{
                    singerID:"001",
                    name:"Chi Dan",
                    Des:""
                  },
                  {
                    singerID:"002",
                    name:"Thanh Ngoc",
                    Des:"",
                  },
                  {
                    singerID:"003",
                    name:"Isaac Thai",
                    Des:"Thanh Ngoc",
                  }];
    
  var listSong = [{
                        songID:0001,
                        name:"Wedding Dress",
                        singerID:001,  
                        image:"images/singer-chidan.jpg",
                        link:""
                    },
                    {
                        songID:0002,
                        name:"Nơi Sâu Thẳm Nỗi Đau",
                        singerID:002,
                        image:"images/singer-thanhngoc.jpg",
                        link:""
                    },
                    {
                        songID:0003,
                        name:"I Believe In You",
                        singerID:003,
                        image:"images/singer-isaacThai.jpg",
                        link:""
                    },
                    {
                        songID:0002,
                        name:"Wedding Dress",
                        singerID:001,
                        image:"images/singer-chidan.jpg",
                        link:""
                    },
                    {
                        songID:0002,
                        name:"Wedding Dress",
                        singer:001,
                        image:"images/singer-chidan.jpg",
                        link:""
                    },
                    {
                        songID:0002,
                        name:"Wedding Dress",
                        singer:001,
                        image:"images/singer-chidan.jpg",
                        link:""
                    },
                    {
                        songID:0002,
                        name:"Wedding Dress",
                        singer:001,
                        image:"images/singer-chidan.jpg",
                        link:""
                    },
                    {
                        songID:0002,
                        name:"Wedding Dress",
                        singer:001,
                        image:"images/singer-chidan.jpg",
                        link:""
                    },
                    {
                        songID:0002,
                        name:"Wedding Dress",
                        singer:001,
                        image:"images/singer-chidan.jpg",
                        link:""
                    },
                    {
                        songID:0002,
                        name:"Wedding Dress",
                        singer:001,
                        image:"images/singer-chidan.jpg",
                        link:""
                    }];

    return{
        getListSong: function(){
            return listSong;
        }
    
    }
})