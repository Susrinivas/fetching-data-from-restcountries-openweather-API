 fetch("https://restcountries.eu/rest/v2/all")
 .then(response => {
    return response.json();
}).then(res =>{
    console.log(res);
    displayCountryCards(res);
}).catch(error => {
    console.log(error);
});

function displayCountryCards(res){
    console.log(res.length);
    let div1 = createElements('div','row');
    
    for(let i = 0 ; i < res.length ; i++){

        let div2 = createElements('div','col-lg-4 col-sm-12');
        let divcard = createElements('div','card text-center');
        let cardheader = createElements('div','card-header bg-dark text-white');
        cardheader.textContent = res[i].name;
        let cardbody = createElements('div','card-body card1');
        let cardimage = createElements('img','card-img-top');
        let image = res[i].flag;
        cardimage.setAttribute('src', image);
        let cardtitle1 = createElements('div','card-title');
        cardtitle1.innerHTML = "Capital: " + res[i].capital;
        let Capital = res[i].capital;
        //console.log(Capital)
        let cardtitle2 = createElements('div','card-title');
        cardtitle2.innerHTML = "Region: " + res[i].region;
        let cardtitle3 = createElements('div','card-title')
        cardtitle3.innerHTML = "Country Code: " + res[i].cioc;
        let button = createElements('a','btn btn-primary border bg-primary');
        button.textContent = "Click for Weather"
        button.addEventListener('click', getWeatherdata.bind(this,Capital))
        cardbody.append(cardimage, cardtitle1, cardtitle2, cardtitle3, button);
        divcard.append(cardheader, cardbody);
        div2.append(divcard);
        div1.append(div2);
     let ids = document.getElementById('divid');
     ids.append(div1);
            
    }
}

function getWeatherdata(Capital){
    
      //console.log(temp)
            let a = `http://api.openweathermap.org/data/2.5/weather?q=${Capital}&appid=4845eae592bc4361e1188544444f8109&units=metric`
            fetch(a)
            .then(response => {
                return response.json();
            }).then(result => {
                console.log(result)
                console.log(`Temperature of ${Capital} is`, result.main.temp ,'degree celsius');
                console.log(`Humidity of ${Capital} is`, result.main.humidity ,'grams per metre cube');
                console.log(`pressure of ${Capital} is`, result.main.pressure ,'kg per metre second square');
                
            }).catch(err => {
                console.log(err);
            })
    
}


function createElements(elem, classname = '', idname = ''){
   // let elem = document.getElementById('divid');
    let element = document.createElement(elem);
    element.setAttribute('class', classname);
    element.setAttribute('id', idname)
    return element;
}