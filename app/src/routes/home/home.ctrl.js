
const users ={
    id :["kimsang", "김","이"],
    password :["1234", "123","1234"],
}

const output ={

  hello :(req,res)=>{
        res.render("home/index");
    },
    
  login :(req,res) =>{
        res.render("home/login");
    },
};
const process ={
    login: (req,res)=>{
        const id =  req.body.id,
        password = req.body.password;
        if(users.id.includes(id)){
          const idx= users.id.indexOf(id);
          if(users.password[idx]===password){
            return res.json({
                success : true,
            });
          }
        }
        return res.json({
            success : false,
            msg: "싪패",
        });
        console.log(id,password)
    },
}

module.exports ={
   output,
   process,
};