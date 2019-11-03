
const fs=require('fs');
const crypto=require('crypto');
var readline=require('readline-sync');
var bkfd2=require('pbkdf2-password');
var hasher=bkfd2();


var data=fs.readFile('./userData.txt','utf-8',function(err,data){
    var InputId=readline.question('');
    var InputPassword=readline.question('');
    var salt=5
    var hashPassword=crypto.createHash("sha512").update(InputPassword+salt).digest("hex");
    for(let i=0;i<JSON.parse(data).length;i++){
        if(JSON.parse(data)[i].id==InputId){
            if(JSON.parse(data)[i].password==hashPassword){
            console.log("로그인 성공")
            break;
            }
            console.log("로그인 실패")
        }
        else{
        
        }
    }
})

