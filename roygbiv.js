var color=["red","orange","yellow","green","blue","indigo","violet"]
let i=0
function change(){
    if(i>=color.length-1){
   i=0;
   }
   
   document.body.style.backgroundColor=color[i]
   document.getElementById("next").innerHTML=" "+color[i]
   i++
}