// function digitalClock(){
//     let hour=document.getElementById("h");
//     let min= document.getElementById("m");
//     let sec=document.getElementById("s");
//     let ampm=document.getElementById("wT");
//     let time=new Date();

//     let hr=time.getHours();
//     let mi=time.getMinutes();
//     let se=time.getSeconds();

//     if(hr==0){
//         hr=12;
//     }
//     if(hr<10)
//        hr="0"+hr
    
//     if(hr>12){
//        hr=hr-12; 
//        ampm.innerText="PM"
//     }
       
    
//     if(mi<10)
//        mi="0"+mi;
    
//     if(se<10)
//       se="0"+se;   

    

//     h.innerText=hr;
//     m.innerText=mi;
//     s.innerText=se;


// }
// setInterval(digitalClock,1000);