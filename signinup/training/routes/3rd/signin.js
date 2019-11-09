var express = require('express');
var router = express.Router();
var crypto=require('crypto');
var pbkdf2=require('pbkdf2-password')
var fs=require('fs');

router.get('/',function(req,res){
    console.log("signin입니다");
    var fs = require('fs');

    
})
router.post('/',function(req,res){
    let id=req.body.id;
    let pw=req.body.pw;
    fs.readFile('userData.txt', 'utf-8', (err, result) => {
        if(err) throw err;
       else{
          var salt=JSON.parse(result).salt;
        crypto.pbkdf2(pw,salt,10000,64,'sha512',(err,result2)=>{
            if(err){
                console.log("pbkdf2 error"+err);
            }
            else{
                var serPassword=result2.toString('base64')
                if(JSON.parse(result).pw==serPassword){
                    console.log("로그인 성공!")
                    res.write("로그인 성공!")
                    res.end();
                }
                else{
                    console.log("로그인 실패!");
                    res.write("로그인 실패!");
                    res.end();
                }

            }
        })
       }
      });
    
})

module.exports = router;
