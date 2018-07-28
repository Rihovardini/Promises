if(!Array.prototype.map){
    Array.prototype.Map=function(callback){
        var length=this.length,
            arr=new Array(length),
            count=0,
            givenArr=this,
            context;
        
        if(arguments[1]){
        var context=arguments[1];
        }
        if((typeof (callback)!=="function")){
            throw new Error(callback+" it's not a function");
        }

        if(arguments[1]){
            var context=arguments[1];
        }
        

        if(!Array.isArray(givenArr)){
            throw new Error(givenArr+" it's not an array");
        }

    while(count<length){
        var current=this[count],
            middleResult;
            
            middleResult=callback.call(context,current,count,givenArr);
        
        arr[count]=middleResult;
        count++;
        }
        return arr; 
        };
}        
        let arr=[1,2,3].map(function(el){
            return el+1;
        });
        console.log(arr);

Array.prototype.polFilter=function(callback){
    
    var length=this.length,
        currentArray=this,
        count=0,
        currentElement=null;
        newArray=[],
        context;
    
    if((typeof (callback)!=="function")){
        throw new Error(callback+" it's not a function");
    }

    if(arguments[1]){
        context=arguments[1];
    }
    

    if(!Array.isArray(currentArray)){
        throw new Error(currentArray+" it's not an array");
    }    

        while(count<length){
            currentElement=currentArray[count];
            
            if(callback.call(context,currentElement,count,currentArray)){
                newArray.push(currentElement);
            }

            count++;
        }
    return newArray;
}

    var arr2=[1,0,2,3,-1].polFilter(function(el,i){
        return el>1;
    });

console.log(arr2);


Array.prototype.polyReduce=function (callback,sum) {
    var currentArray=this,
        currentElement=null,
        count=0;
    
    if(!sum){
       sum=currentArray[0];
       count=1;

    }

    if((typeof (callback)!=="function")){
       throw new Error(callback+" it's not a function");
    }
    
    if(arguments[2]){
       var context=arguments[1];
    }
        
    
    if(!Array.isArray(currentArray)){
        throw new Error(currentArray+" it's not an array");
    }   
    
    for(count;count<currentArray.length;count++){
        currentElement=currentArray[count];
        sum=callback.call(context,sum,currentElement,count,currentArray); 
    }
            
    return sum;
}

let arr1=[1,2,3].polyReduce(function(sum,el){
    return sum+el;
},4);
console.log(arr1);