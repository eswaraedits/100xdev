import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c:any,next:any){
  if(c.req.header("Autherization")){
   await next() //should be awaited
  }
  else{
    return c.text("you dont have access")
  }
}
//app.use(authMiddleware)
app.post('/', authMiddleware,async (c) => {
    const body = await c.req.json()
    console.log(body)

    console.log(c.req.header("Autherization"))
    console.log(c.req.query("params"))
    return c.text("hello hono")
})

export default app
