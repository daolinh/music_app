angular.module('music.services').service("LoginService",function($http){
    var users = [{
                    username:"admin",
                    password:"1111"
                },
                {
                    username:"user1",
                    password:"1111"
                },
                {
                    username:"user2",
                    password:"1111"
                },
                {
                    username:"user3",
                    password:"1111"    
                }];
 return {
        checkLogin: function(username, password){
            var result = false;
            for (var i=0; i<users.length; i++){
                if (users[i].username == username){
                    if(users[i].password == password){
                        result = true;
                        break;
                    }
                }
            }	
            return result;
        }
    };

});