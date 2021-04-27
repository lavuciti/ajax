//prvi nacin

// let xml = new XMLHttpRequest();
//
// xml.open("get","https://mysafeinfo.com/api/data?list=beatlesalbums&format=json&case=default");
// xml.onreadystatechange = function(){
//   if(xml.readyState == 4 && xml.status == 200){
//     console.log(xml.responseText);
//   }
// }
// xml.send();
//xml.responseText

//drugi nacin
// let getDate = new Promise(function(resolve,reject){
//   let xml = new XMLHttpRequest();
//
//   xml.open("get","https://mysafeinfo.com/api/data?list=beatlesalbums&format=json&case=default");
//   xml.onreadystatechange = function(){
//     if(xml.readyState == 4 && xml.status == 200){
//       resolve(JSON.parse(xml.responseText))
//     }
//   }
//   xml.send();
// })
//
// getDate.then((data)=>{
//   console.log(data);
//
// },(err)=>{
//
// })

//treci nacin

// fetch("https://mysafeinfo.com/api/data?list=beatlesalbums&format=json&case=default")
// .then(prom=>{
//   return prom.json()
// })
// .then(res=>{
//   console.log(res);
// })

//cetvrti nacin sa sajta https://github.com/axios/axios u index.html iskopiramo <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
axios.get("https://mysafeinfo.com/api/data?list=beatlesalbums&format=json&case=default")
.then(res=>{
  console.log(res.data);
})
