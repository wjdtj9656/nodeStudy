var express =require('express');
var bodyParser=require('body-parser');
var crypto=require('crypto');
var fs=require('fs');
var app=express();
var hasher=bkfd2();
var bkfd2=require('pbkdf2-password');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

var userData=[];
    app.post('/userlist',function(request,response){
        var id=request.body.id;
        var password=request.body.password;
        var repassword=request.body.repassword;
        var salt=5
        var hashPassword=crypto.createHash("sha512").update(password+salt).digest("hex");
        var hashRePassword=crypto.createHash("sha512").update(repassword+salt).digest("hex");
        var user={
            id:id,
            password:hashPassword,
            repassword:hashRePassword,
            salt:salt
        }
        if(password!=repassword){
            console.log("비밀번호 확인을 다시입력하세요.");
            response.end("비밀번호 확인을 다시 입력하세요");
        }

        else if(password==repassword){                
    userData.push(user);
    response.send({
        message:"데이터를 추가했습니다.",
        data:user
        });
    }
    
    fs.writeFile('userData.txt',JSON.stringify(userData),'utf-8',(err)=>{
        if(err) throw err;
        console.log("저장 완료");
    })

    })
    app.get('/userlist/:id',function(request,response){
        var id=Number(request.params.id);
        response.send(userData[id]);
    })
app.listen(12345,function(){
    console.log("server is running");
})