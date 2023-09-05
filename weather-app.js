var search=document.querySelector('.search')
var city=document.querySelector('.city')
var country=document.querySelector('.country')
var value=document.querySelector('.value')
var shortDesc=document.querySelector('.short-desc')
var visibility=document.querySelector('.visibility span')
var wind=document.querySelector('.wind span')
var sun=document.querySelector('.sun span')
var time=document.querySelector('.time');
var content=document.querySelector('.content');
var body=document.querySelector('body');


async function changeWeatherUI(capitalSearch){

  let apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=bcc33a39e6288d51c25c4ee8034245d2`
  let data= await fetch(apiURL).then(res=>  res.json());
  if(data.cod == 200){
    content.classList.remove('hide');
    console.log(data);
    city.innerText = data.name +',';
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility+'m';
    wind.innerText=data.wind.speed +'m/s';
    sun.innerText=data.main.humidity +'%';
    let temp=Math.round((data.main.temp - 273.15))+'°C';
    value.innerText=temp;
    shortDesc.innerText=data.weather[0].main;
    time.innerText=new Date().toLocaleDateString('vi');

    if(temp<=25+'°C'){
      body.setAttribute('class','cold')
    }
    if(temp>25+'°C'){
      body.setAttribute('class','hot')
    }

  }
  else{
    content.classList.add('hide');
  }
} 
search.addEventListener('keypress',function(e){
  if(e.code ==='Enter'){
    var capitalSearch = search.value.trim();
    changeWeatherUI(capitalSearch);
  };
})



