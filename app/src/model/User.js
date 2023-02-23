" use strict"
const UserStorag = require("./UserStorag");
const {response} = require("express");

class User{
    constructor(body){
        this.body = body ;
    }
    async login(){
        const client = this.body
        const {id, password} =await UserStorag.getUserInfo(client.id);
     
       if(id){
            if(id ===client.id && password===client.password){
                return{success: true};
            }
            return{success:false, msg:"비번다름"};
        }
        return { success :false,msg:"아이디다름"};
    }
    register(){
        const client = this.body
        const response = UserStorag.save(client);
        return response; 
    }
}

module.exports = User;