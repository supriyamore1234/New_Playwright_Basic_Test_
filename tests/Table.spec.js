import {test,expect} from '@playwright/test'
test('Table',async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/')
  const table=await page.locator('#productTable')
  //Total number of rows and coloumns
  const columns=await table.locator('thead tr th')
  console.log("Number of coloumns : ",await columns.count())
  expect(await columns.count()).toBe(4)
  const rows = await table.locator('tbody tr')
  console.log("Number of rows : ",await rows.count())
  expect (await rows.count()).toBe(5)

  //select check box for one checkbox
//  const matchedRow= rows.filter({
//     has:page.locator('td'),
//     hasText:'4'
//   })
//   matchedRow.locator('input').check()

// Selct Multiple checkboxes
   selectProduct(rows,page,'2')
  await selectProduct(rows,page,'3')
  await selectProduct(rows,page,'4')
  // await selectProduct(rows,page,'')
  // await selectProduct(rows,page,'5')

  await page.waitForTimeout(5000)
  
  //4.Print all product details using loop
  // for(let i=0;i<await rows.count();i++)
  // {
  //   const row=rows.nth(i);
  //   const tds=row.locator('td')
  //   for(let j=0;j<await tds.count()-1;j++)
  //   {
  //     console.log(await tds.nth(j).textContent())
  //   }
  // }

  //5.Read Data From All the pages in the table 
  const pages= await page.locator('.pagination li a')
  console.log('Number of pages in the table:',await pages.count())
  //for loop for repeatation f pages
  for(let p=0;p< await pages.count();p++)
  {
    if(p>0){
      await pages.nth(p).click()

      for(let i=0;i<await rows.count();i++)
        {
          const row=rows.nth(i);
          const tds=row.locator('td')
          for(let j=0;j<await tds.count()-1;j++)
          {
            console.log(await tds.nth(j).textContent())
          }
        }
        await page.waitForTimeout(3000);
    }
  }

})

//Select multiple checkboxes

async function selectProduct(rows,page,name)
{
  const matchedRow= rows.filter({
    has:page.locator('td'),
    hasText:name
  });

  matchedRow.locator('input').check();
  // await expect(matchedRow).toBeChecked();
  await page.waitForTimeout(5000)

}
