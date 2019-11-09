var express = require('express');
var router = express.Router();
var crypto=require('crypto');
var pbkdf2=require('pbkdf2-password')
var fs=require('fs');


router.get('/',function(req,res){
    console.log("signup입니다");
})
router.post('/',function(req,res){
    let id=req.body.id;
    let pw=req.body.pw;
    let pwCheck=req.body.pwCheck;
    if(pw!=pwCheck){
        console.log("비밀번호와 확인을 다시하세요");
        res.write("다시");
    }
    else{
crypto.randomBytes(64,(err,result)=>{
  
    if(err){
        console.log("randomBytesError err:"+err)
    }
    else{
        var salt=result.toString('base64');
        crypto.pbkdf2(pw,salt,10000,64,'sha512',(err,result)=>{
            if(err){
                console.log("pbkdf2 error"+err);
            }
            else{
                var pbPw=result.toString('base64');
                const userData={
                    id:id,
                    pw:pbPw,
                    salt:salt
                }
                fs.writeFile("userData.txt",JSON.stringify(userData),'utf-8',err=>{
                    if(err){
                        console.log("fs쓰기 에러"+err);
                    }
                    else{
                        console.log("저장완료");
                        res.end();
                    }
                })
            }
        })
    }
    
})
}

})
module.exports = router;
