" use strict"
const UserStorag = require("./UserStorag");
const {response} = require("express");

class User{
    constructor(body){
        this.body = body ;
    }
    async login(){
        const client = this.body
        try{
        const{id, password}=  await UserStorag.getUserInfo(client.id);
        
        if(id){
            if(id ===client.id && password===client.password){
                return{success: true};
                }
            return{success:false, msg:"비번다름"};
            }
        return { success :false,msg:"아이디다름"};
        }catch(err){
            return {success: false,msg:err}
        }
    }
    async register(){
        const client = this.body
        try{
        const response = await UserStorag.save(client);
        return response; 
        }catch(err){
           return{success: false,msg:err};
        }
    }
}

module.exports = User;