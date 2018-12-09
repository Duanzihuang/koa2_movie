const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const {resolve} = require('path')

app.use(views(resolve(__dirname,"statics/views"),{
    extension:'pug'
}))

app.use(async (ctx,next)=>{
    await ctx.render('index',{
        you:'伟',
        me:'段子'
    })
})

app.listen(3000)