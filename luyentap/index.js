// list = [
// {username: 'Tung'},
// {username: 'Nhung'},
// {username: 'Hue'},
// ];
// //  const abc = list.find((item)=>{
// //     console.log(item, typeof item)
// //     if (typeof item == 'number')
// //     return item == '4'
// //  })
// //  console.log('abc', abc);
// const abc = list.filter((item)=>{
    
//         return item.username.includes('n')
        
    

// });
// console.log(abc)
// tx = [
//     {firstName: 'Ngoc',
//     lastName: 'Nhung',
// },
// {firstName: 'vũ',
//  lastName: 'Tuyền'
// },
// {firstName: 'Nham',
// lastName: 'Hue',

// },
// ]
// let tex = tx.map((item)=>{
//     return item.firstName + ' ' + item.lastName
// });;
// console.log(tex)
// id =[ 1, 5, 66, 92, 11, 55];
// const ih= id.sort((number1, number)=>{
//     return number- number1;
// });
// console.log(ih)
// const calInput = document.querySelector(' .screen-input');
// const calResult = document.querySelector('.screen-result');
// const calEquaBtn = document.querySelector('.cal-equal-btn');

// const calNumBtns = document.querySelectorAll('.cal-btn');
// calNumBtns.forEach((calBtn) => {
//     calBtn.addEventListener('click', () => {
//         const a = calBtn.getAttribute('cal-value');
        
//         calInput.value += a;  
//     });
// });
// calEquaBtn.addEventListener('click', () => {
//     calResult.innerText = eval(calInput.value);
//     console.log(calResult.innerText = eval(calInput.value))

// });

// const inputElem = document.querySelector('.cal-screen .screen-input');
//     const resultElem = document.querySelector('.cal-screen .screen-result');
    
//     inputElem.value = '';
//     console.log('a',inputElem.value)
//     resultElem.innerText = '';
    
//     const calBtns = document.querySelectorAll('.cal-btn');
    
//     calBtns.forEach((calBtn) => {
//       calBtn.addEventListener('click', () => {
//         const value = calBtn.getAttribute('cal-value');
//         inputElem.value += value;
//       });
//     });
    
//     const equalBtn = document.querySelector(
//       '.cal-equal-btn-wrapper .cal-equal-btn'
//     );
//     equalBtn.addEventListener('click', () => {
    //   resultElem.innerText = eval(inputElem.value);
    // });              
    const iput = document.querySelector('.cal-screen .screen-input');
    const result = document.querySelector('.cal-screen .screen-result');
    const calequa = document.querySelector('.cal-equal-btn');
    const calbtn = document.querySelectorAll('.cal-btn');
    console.log(calbtn,);

    calbtn.forEach((callbtn) => {
      callbtn.addEventListener('click', () =>{
        // alert('yes'+ ' ' + callbtn.innerText)
        const value = callbtn.getAttribute('cal-value');
        iput.value += value
       const detes = document.querySelector('.dete .xoa')
    detes.addEventListener('click', () =>{
        
    })
      })
    });
    calequa.addEventListener('click', () =>{
    result.innerText = eval(iput.value)});





const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow-right');
const shopwer = document.querySelectorAll('.image-wrapper .image-shower');
    let index = 1;

    shopwer[index].classList.add('active')
 
    function moveleft (){
     shopwer[index].classList.add('active-left-to-right')
    }

    left.addEventListener('click', () => { 
     moveleft(index);
    
    
    });
    function moveright (){
      shopwer[index].classList.add('active-right-to-left')
     }
 
     right.addEventListener('click', () => { 
      moveright(index);
     
     
     });
    // .remove('next-active-right-to-left');
    //     activeIndex = nextIndex;
    //     isMoving = false;
    //   };
    //   timeout = setTimeout(timeoutFunc, 1000);
    // }

    // let arrowLeft = document.querySelector('.arrow-wrapper .arrow-left');
    // let arrowRight = document.querySelector('.arrow-wrapper .arrow-right');
    // arrowLeft.addEventListener('click', function () {
    //   moveNext(activeIndex);
    // });

    // arrowRight.addEventListener('click', function () {
    //   moveBack(activeIndex);
    // });let activeIndex = 0;
    // let imageShowers = document.querySelectorAll('.image-shower');
    // let total = imageShowers.length;

    // let timeout;
    // let interval;
    // let timoutFunction;
    // function start() {
    //   interval = setInterval(() => {
    //     moveNext(activeIndex, 1);
    //   }, 4000);
    // }

    // start();
    // let isMoving = false;

    // function moveNext(curIndex) {
    //   if (isMoving) {
    //     return;
    //   }
    //   isMoving = true;
    //   let nextIndex = (curIndex + 1) % total;
    //   imageShowers[curIndex].classList.add('active-left-to-right');
    //   imageShowers[nextIndex].classList.add('next-active-left-to-right');
    //   timeoutFunc = () => {
    //     imageShowers[curIndex].classList.remove('active');
    //     imageShowers[nextIndex].classList.add('active');
    //     imageShowers[curIndex].classList.remove('active-left-to-right');
    //     imageShowers[nextIndex].classList.remove('next-active-left-to-right');
    //     activeIndex = nextIndex;
    //     isMoving = false;
    //   };
    //   timeout = setTimeout(timeoutFunc, 1000);
    // }

    // function moveBack(curIndex) {
    //   if (isMoving) {
    //     return;
    //   }
    //   isMoving = true;
    //   let nextIndex = (curIndex - 1 + total) % total;
    //   imageShowers[curIndex].classList.add('active-right-to-left');
    //   imageShowers[nextIndex].classList.add('next-active-right-to-left');
    //   timeoutFunc = () => {
    //     imageShowers[curIndex].classList.remove('active');
    //     imageShowers[nextIndex].classList.add('active');
    //     imageShowers[curIndex].classList.remove('active-right-to-left');
    //     imageShowers[nextIndex].classList
    buyIphone = new Promise ((resolve, reject) =>{ 
    setTimeout (()=>{
      let success = new Date().getTime() % 2 == 0
      if(success){
      const data = {name: 'Cuc'};
          resolve(data)}
          else {
            reject ({ message: 'Error1'})
          }
    },2000)
    });
       buyIphone.then((data)=>{
console.log(data)})
.catch((err)=>{console.log(err)})
    console.log(buyIphone)
     
    // const totalCaseElem =document.querySelector('.js-total-cases');
    // const totalDeathsElem =document.querySelector('.js-total-cases');
    // const totalRecoveredElem =document.querySelector('.js-total-cases');
    // const refreshBtn =document.querySelector('.js-total-cases');
    
    // function febData (apiUrl){
    //   var xhttp = new XMLHttpRequest();
    //   xhttp.onreadystatechange = function () {
    //   if (this.readyState === 4 && this.status == 200){
         
    //      const date = JSON.parse(this.responseText)
    //      const {Global} = date;
    //      const {TotalConfirmed, TotalDeaths, TotalRecovered} = Global
    //      console.log(Global)
    //      updateData(TotalConfirmed, TotalDeaths,  TotalRecovered);
    //    }
    //   };
    //   xhttp.open('GET', apiUrl, true);
    //   xhttp.send();
    // }
    // febData('https://api.covid19api.com/summary');
    let totolCaseElem = document.querySelector(".js-total-cases")
    let deathsElem = document.querySelector(".js-deaths")
    let recoveredElem = document.querySelector(".js-recovered")
    let btnRefreshElem = document.querySelector(".js-btn-refresh")

    function getData(apiUrl) {
      return new Promise(resolve => {
          const xhttp = new XMLHttpRequest();
          xhttp.onload = function () {
              let dataObj = JSON.parse(this.responseText)
              resolve(dataObj)
          }
          xhttp.open("GET", apiUrl);
          xhttp.send();
      })
    }

    // async/await
    btnRefreshElem.addEventListener("click", async () => {
        let dataObj = await getData("https://api.covid19api.com/summary")
        let totalConfirmed = dataObj.Global.TotalConfirmed
        let totalDeaths = dataObj.Global.TotalDeaths
        let totalRecovered = dataObj.Global.TotalRecovered
        totolCaseElem.textContent = totalConfirmed
        deathsElem.textContent = totalDeaths
        recoveredElem.textContent = totalRecovered
    });

    const gio = document.querySelector(".hour");

        function updateTime(hours, minutes, seconds,) {
          gio.innerText = `${hours.toString().padStart(2, "0")}: ${minutes.toString().padStart(2, "0")}: ${seconds.toString().padStart(2, "0")}`

        }
        setInterval(() =>{
          const now = new Date();
          const hours = now.getHours();
          const minutes = now.getMinutes();
          const  seconds = now.getSeconds();
          updateTime(hours, minutes, seconds,);

        },);