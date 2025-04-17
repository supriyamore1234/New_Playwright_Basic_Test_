const {test,expect}=require('@playwright/test')
//import from playwright/test 
//start writing test
//name to test provide first ,second pass annonimus function//page is fixture
//using fixture we can access all methods 
//
test('Home Page',async({page})=>{
await page.goto('https://www.demoblaze.com/index.html');
//js is asynchonised programming language execution happens asynchronously //to need promise to execute one by one
//so need async keyword and await makes wait for promice
//when page get loaded then goto will work 
//
const pageTitle=await page.title();
console.log('page title is:',pageTitle);
//expect to validate used
await expect(page).toHaveTitle('STORE');

const pageUrl=page.url();
console.log('Page URL is :',pageUrl);
//to validate url 
await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
//to close
await page.close();
})

