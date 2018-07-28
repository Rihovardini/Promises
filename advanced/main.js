function polyPromise(calback){
   let result =calback(function(data){
       return data;
   },function(data){
       return data;
   });
}

// let prom=new polyPromise(function(res,rej){
//     let a=res({name:"ihor"});
//     console.log(a);
// });


