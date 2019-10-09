module.exports={
    
    isEven : (i) => {
        if(i%2==0){
        console.log("짝수입니다");
        }
        else if(i%2!=0){
        console.log("홀수입니다.");
        }
        
    },
    bino:(i)=>{
        if(i%2==0){
            var k=1;
            for(var j=0;j<i;j++){
                k*=2;
            }
        }
        console.log(k);
    },
    sReverse:(i)=>{
        if(typeof i==='string'){
            var str='';
            for(var j=i.length-1;j>=0;j--){
                str+=i[j];
            }
            console.log(str);     
        }
    }
}
