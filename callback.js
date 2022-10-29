 const divElement = document.createElement("div");
 divElement.className = 'container-md bg-success  ';
 divElement.style.height = "100px";



 const h1Element = document.createElement("h1");
 divElement.append(h1Element);
 document.body.append(divElement);
 divElement.style.width = '100%';
 h1Element.style.textAlign = 'center';
 h1Element.style.direction = 'coloumn';
 setTimeout(() => {
   h1Element.innerHTML = "";
   let countdown = 10;
   h1Element.style.color = 'white'
   //countdown--;
   h1Element.innerText = countdown;
   setTimeout(() => {
     h1Element.innerHTML = "";
     let countdown = 10;
     countdown--;
     h1Element.innerText = countdown;
     setTimeout(() => {
       h1Element.innerHTML = "";
       let countdown = 9;
       countdown--;
       h1Element.innerText = countdown;
       setTimeout(() => {
         h1Element.innerHTML = "";
         let countdown = 8;
         countdown--;
         h1Element.innerText = countdown;
         setTimeout(() => {
           h1Element.innerHTML = "";
           let countdown = 7;
           countdown--;
           h1Element.innerText = countdown;
           setTimeout(() => {
             h1Element.innerHTML = "";
             let countdown = 6;
             countdown--;
             h1Element.innerText = countdown;
             setTimeout(() => {
               h1Element.innerHTML = "";
               let countdown = 5;
               countdown--;
               h1Element.innerText = countdown;
               setTimeout(() => {
                 h1Element.innerHTML = "";
                 let countdown = 4;
                 countdown--;
                 h1Element.innerText = countdown;
                 setTimeout(() => {
                   h1Element.innerHTML = "";
                   let countdown = 3;
                   countdown--;
                   h1Element.innerText = countdown;
                   setTimeout(() => {
                     h1Element.innerHTML = "";
                     let countdown = 2;
                     countdown--;
                     h1Element.innerText = countdown;
                     setTimeout(() => {
                       h1Element.innerHTML = "";
                       let countdown = 1;
                       countdown--;
                       h1Element.innerText = 'HAPPY INDEPENDANCE DAY';
                       h1Element.style.color = 'blue';
                       h1Element.className = "msgDiv";
                       h1Element.style.background = "linear-gradient( orange,white,green)";
                       
                     }, 1000);
                   }, 1000);
                 }, 1000);
               }, 1000);
             }, 1000);
           }, 1000);
         }, 1000);
       }, 1000);
     }, 1000);
   }, 1000);
 }, 1000);