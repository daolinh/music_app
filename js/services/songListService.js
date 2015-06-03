angular.module('music.services').service("ListSongService",function(){    
  var listSinger = [{
                    singerID:"001",
                    name:"Chi Dan",
                    image:"images/singer-chidan.jpg",
                    Des:""
                  },
                  {
                    singerID:"002",
                    name:"Thanh Ngoc",
                    image:"images/singer-thanhngoc.jpg",
                    Des:"",
                  },
                  {
                    singerID:"003",
                    name:"Isaac Thai",
                    image:"images/singer-isaacThai.jpg",
                    Des:"",
                  },
                  {
                    singerID:"004",
                    name:"Vinh Thuyen Kim",
                    image:"images/singer-vinhthuyenkim.jpg",
                    Des:"",
                  }];
    
  var listSong = [{
                        songID:"0001",
                        name:"Wedding Dress",
                        singerID:"001",  
                        image:"images/singer-chidan.jpg",
                        author:"",
                        kind:"",
                        link:"music/wedding_dress_Chidan.mp3"
                    },
                    {
                        songID:"0002",
                        name:"Nơi Sâu Thẳm Nỗi Đau",
                        singerID:"002",
                        image:"images/singer-thanhngoc.jpg",
                        author:"Nguyen Van Chung",
                        kind:"Nhac viet",
                        link:"music/Noi_Sau_Tham_Noi_Dau_ThanhNgoc.mp3"
                    },
                    {
                        songID:"0003",
                        name:"I Believe In You",
                        singerID:"003",
                        image:"images/singer-isaacThai.jpg",
                        author:"",
                        kind:"pop, Au My",
                        link:"music/I_Believe_In_You_IsaacThai.mp3"
                    },
                    {
                        songID:"0004",
                        name:"Chợt Buồn",
                        singerID:"004",
                        image:"images/singer-vinhthuyenkim.jpg",
                        author:"Huynh Phong",
                        kind:"Nhac viet",
                        link:"music/Chot_Buon_VinhThuyenKim.mp3"
                    }];

   return{
        getListSong: function(){
            return listSong;
        },
        getSongbyID: function(id){
            var songSelected={};
            for(var i=0; i <= listSong.length; i++){
                if (listSong[i].songID==id) {
                    songSelected = listSong[i];
                    break;
                }
            }
            for(var i=0; i <= listSinger.length; i++){
                if (listSinger[i].singerID ==  songSelected.singerID){
                    songSelected.singerName = listSinger[i].name;
                        break;
                }
            }
            return songSelected;
        }
    }
})