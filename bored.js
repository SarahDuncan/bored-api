const axios = require('axios');
const baseUrl = 'http://www.boredapi.com';

async function GetRandomActivity() {
  const res = await axios.get(baseUrl + '/api/activity/');
  const data = res.data;
  console.log(data);
}

async function GetActivityByType() {
    var type = 'recreational';
    const res = await axios.get(baseUrl + '/api/activity?type=' + type);
    const data = res.data;
    console.log(data);
  }

async function GetActivityByPeople(){
    var numPeople = 2;
    const res = await axios.get(baseUrl + '/api/activity?participants=' + numPeople);
    const data = res.data;
    console.log(data);
}

async function GetActivityByPrice()
{
    var price = 0.5;
    const res = await axios.get(baseUrl + '/api/activity?price=' + price);
    const data = res.data;
    console.log(data);
}

async function GetActivityByPriceRange(){
    var minPrice = 0;
    var maxPrice = 0.9;
    const res = await axios.get(baseUrl + '/api/activity?minprice=' + minPrice + '&maxprice=' + maxPrice);
    const data = res.data;
    console.log(data);
}

async function GetActivityByAccessibility(){
    var accessibility = 0.2;
    const res = await axios.get(baseUrl + '/api/activity?accessibility=' + accessibility);
    const data = res.data;
    console.log(data);
}

async function GetActivityByAccessibilityRange(){
    var minAccessibility = 0;
    var maxAccessibility = 0.9;
    const res = await axios.get(baseUrl + '/api/activity?minaccessibility=' + minAccessibility + '&maxaccessibility=' + maxAccessibility);
    const data = res.data;
    console.log(data);
}

GetRandomActivity();
GetActivityByAccessibility();
GetActivityByAccessibilityRange();
GetActivityByPeople();
GetActivityByPrice();
GetActivityByPriceRange();
GetActivityByType();