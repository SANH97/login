" use strict"
const UserStorag = require("./UserStorag");

class User{
    constructor(body){
        this.body = body ;
    }
    login(){
        const body = this.body
       const {id,password} = UserStorag.getUserInfo(body.id);
     
       if(id){
            if(id ===body.id && password===body.password){
                return{success: true};
            }
            return{success:false, msg:"비번다름"};
        }
        return { success :false,msg:"아이디다름"};

    }
}

module.exports = User;