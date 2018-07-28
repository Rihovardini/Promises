
//task 5

function tenToOne(n){
    if(n>-1){
        console.log(n);
        tenToOne(n-1);
    }
}

tenToOne(10);

// task 3

let promiseTest1=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve({
      name:"Ania",
      last:"Boda"
    })
  },1000)
  });
};
let result=promiseTest1();
result.then(data=>console.log(data))


// task4

let promiseTest4=()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
      resolve({
        name:"Ania",
        last:"Boda"
      })
    },1000)
    });
  };

    let getRslt=new Promise((resolve,reject)=>{
        resolve(promiseTest4());
    });
    let test= async() =>{
      const result = await getRslt();
      console.log(result);
    }
  
  test(); 