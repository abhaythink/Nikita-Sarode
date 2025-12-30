/*


let arr=[ 10,20,30,40,50,60 ];

let a=100;
a="hello";
let p=a.length;

let ans= arr.filter(n=> %2=n=0 ).map(n => n+10  ).reduce((t,n)=> t+n,0);
arr.sort((a,b)=> b-a  );
arr.reverse();

let arr1 = arr.slice(1,2 );

let nums= arr.join(' ');

arr.sort((a,b)=>(a-b));


arr.filter(n=> n%2!= 0 ).forEach(n=> console.log(n) );
let ans=arr.reduce( (t,n) => t+n , 0 );


console.log( ans );


user={
    Name :{
        firstName:"abc",
        surName:"abc1"
    },
    age : 
    {
        getValue( g )
        {
            return g ;
        }
    },
    id:1000

}


Object.keys(user).forEach( (key,value)=> 
    console.log(key," ", user[key]));


let n ="nikita";

function callName(name)
{
    let x=10;
    x="hihii";

    var y=1000;
    y="hello";
    
    console.log("hello ",name+" "+  x+" "+ y   );
}

callName( "h" );


let a=100;
let ans=add( 1,2,3);
console.log( ans );
function add(  )
{
    let sum=0;
    for(let i=0;i<arguments.length;i++)
        sum+=arguments[i];
    return sum;
}



let a=10;
let b=20; 

switch( a+b)
{
    case 1:
        console.log("one");
        break;
    case 10:
        {
        console.log("ten");
        break;
        }
    default:
        console.log("default");
}

let s="hello world";
s.substring

let user={
    name:
    {
        call :function(name ){
            return "Hello "+name.length  ;
        }
    },
    age:20,
    id:1001
}
console.log( user.name.call("nikita"));


user={
    name:{
        firstName:"sonu",
        surName:"kumar"
    },
    // age:function(age ){
    //     return age;
    // },
    id:1002
}

for(let k in user)
{
    console.log(k +" "+ user[k] )
}


let user=new Map();
user.set( "name", "nikita" );
user.set('age' ,20 );
user.set( 'id' ,1003 );
user.delete('age' );
console.log( user.size);








let para2= document.getElementById("p2");
console.log( para2.innerText );
para2.style.color="white";
para2.style.backgroundColor="grey";
para2.style.padding="10px";
para2.style.margin="10px";



// arrows functions.

function isEven()
{
    return n%2==0;
}

var arr=[10,20,30,35,50];
var ans=arr.every((n)=>n%2===0);
console.log( ans );




function user()
{
    console.log("hello , good morning ");
}

function greet(callBack)
{
    callBack();
}

greet( user );



for(let i=0;i<3;i++)
{
    console.log( i );
}

console.log( i );





function say(a )
{
    let sum =0;

    for(let i=0;i<arguments.length;i++)
    {
        sum+= arguments[i];
    }
    return sum;
}

let sum=say( 1,2,33 );

console.log( sum );





user={
    id:"1001",
    name:"nikita",
    age:20,
    getDetaild:function()
    {
        return this.id+" "+this.name+" "+ this.age;
    }
}

for( let k in user )
{
    console.log( k +" "+ user[k]   )
}

let ans=user ;

console.log( ans.getDetaild()  +"-- " )






let ar=[10,20,30,'hello',12.3 ,true ];

let ans = function call( ar )
{
    let sum=0;
    for(let i=0;i<ar.length;i++)
    {
        if(typeof(ar[i])=="number" )
            sum+=ar[i];
    }
    return sum;
}

console.log(  ans(ar ) );



// for(let i=0;i<ar.length;i++ )
// {
//     console.log(  ar[i] );

// }





function call( no )
{
    console.log(" call  ");
    return function( )
    {
        return " inner function - "+ no*no ;
    }
}

let s2=call(5 );
let s3= s2();

console.log( s3 );








let firstp= new Promise((resolve,reject)=>
{
    //async code.
    
setTimeout(function sayMyname()
{
    console.log("sonu...");
},10000 );
resolve(1);


})

console.log( firstp );





let p1=new Promise((resolve,reject)=>
{   
    setTimeout(resolve,1000,"first");

})
let p2=new Promise((resolve,reject)=>
{   
    setTimeout(reject,2000,"second");

})
let p3=new Promise((resolve,reject)=>
{   
    setTimeout(resolve,3000,"third");

})


Promise.all([p1,p2,p3] ).then((msg)=>{
    console.log("success");

}).catch((e)=>{
    console.log("error")
});





async function postData()
{
    
    // await-? jo paryat data milat nhi backend kadun to paryant next task/block exe hot nhi, empty/undefined.
     let response= await fetch('https://jsonplaceholder.typicode.com/users',{
        method:"POST",
        headers:{"Content-Type":"application/json"

        },
        body: JSON.stringify({
      name: "Nikita",
      email: "nikita@gmail.com",
      city: "Pune"
    })
     });
    let data=await response.json();
    console.log(data);

    console.log("hello ");
}

postData();
async function getUsers()
{
       let resp= await fetch('https://jsonplaceholder.typicode.com/users',
        {
            method:"GET"
        }
       );
    let ans=await resp.json();
    console.log("Ur data : ", ans );
}
getUsers();


// closure.
function out()
{
    let name='hii';
    function inner()
    {
        console.log("inside :",name);
    }
    return inner;
}

let ans=out();
ans();

{
    var b=29;
    console.log(b);
}

//console.log("b : ",b);

function call()
{
    let b=20;
    console.log(b);
}
call();

console.log(b);


let p1=new Promise((res,rej)=>{
    res('solved 1..');
    return 'true';
});


let p2=new Promise((res,rej)=>{
    res('solved 2..');
});


let p3 =new Promise((res,rej)=>{
    res('solved.. '+ rej )
});


// console.log( p3 );

p1
.then((msg)=>{
    console.log( msg );
    return "promise 1... "+ msg ;
}).then((msg)=>{
    console.log( msg );
    return "promise 2... "+ msg ;
}).then((msg)=>{
    console.log( msg);
    return "promise 3";
})
.catch((e)=>{
    console.log("error...");
});


*/







let tbody = document.getElementById('postData');
let jsonData = [];
let pageNo=1;
let pageSize=10;


async function getAllPosts() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    jsonData = await response.json();
    console.log('jsonData:' , jsonData);
    displayData();
}

function displayData(){
    tbody.innerHTML = ""; 

    let start = (pageNo - 1)* pageSize;
    let end = start + pageSize ;
    let postPaginate = jsonData.slice(start, end);
    
    postPaginate.forEach((post) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${post.id}</td>
            <td>${post.userId}</td>
            <td>${post.title}</td>
            <td>${post.body.substring(0,90)}</td>
            <td>
                <button class="action-btn edit" onclick="editPost(${post.id})">Edit</button>
                <button class="action-btn delete" onclick="deletePost(${post.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    })
}

getAllPosts();

let btnPost= document.getElementById('create');

async function postData() {

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                title: "foo",
                body: "bar",
                userId: 2,
            }),
        });
        const post = await response.json();
       
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${post.id}</td>
            <td>${post.userId}</td>
            <td>${post.title}</td>
            <td>${post.body.substring(0, 90)}</td>
            <td>
                <button onclick="editPost(${post.id})">Edit</button>
                <button onclick="deletePost(${post.id})">Delete</button>
            </td>`;

        tbody.appendChild(row);
        jsonData.unshift(post);  // added in array
        console.log("after add new row :", jsonData );
}


function deletePost( id )
{
    let res=fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE'
    }).then((msg)=>{
        
        jsonData= jsonData.filter( row => row.id != id );
        displayData();
        console.log(` ---- row deleted with id : ${id} --- `, res );
    }).catch(error => {
        console.error('Error:', error);
    });
}




//pagination
function nextPage()
{
    let totalPage=jsonData.length/pageSize;
    if(pageNo<totalPage)
    {
        pageNo++;
        displayData();
    }
}



