import{test,expect} from '@playwright/test'
test.beforeAll(async()=>{
  console.log("Before All tests:")
})
test.afterAll(async()=>{
  console.log("After All tests:")
})
test.beforeEach(async(page)=>{
  console.log("Before Each tests:")
})
test.afterEach(async(page)=>{
  console.log("After Each tests:")
})


test.describe('grouing test1',()=>{
  test('Test1',async({page})=>{
    console.log("Test 1...")
  })
  
  test('Test2',async({page})=>{
    console.log("Test 2...")
  })
  
})

test.describe('Grouping test2',()=>{
  test('Test3',async({page})=>{
    console.log("Test 3...")
  })
  test('Test4',async({page})=>{
    console.log("Test 4...")
  })
})
