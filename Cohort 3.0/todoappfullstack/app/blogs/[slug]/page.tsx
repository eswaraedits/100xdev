import axios from "axios"
//api/course/[anything],,this anything catched by params (params.anything), to axios get api/course/${anything}
//params is an object of slugs, you have to do {postid} not postid because you dont want whole object you want single object
export default async function({params}:{params:Promise<{slug:string}>}){
    //const {slug} = params //[postid] 
    //const slug = params.slug
    //const slug = (await params.slug) //params is a promise
    console.log(params)
    //random gibrish
  /*   const p = new Promise((resolve)=>{
    console.log("hello there ")
    resolve("done")
})
console.log(p)
setTimeout(()=>{console.log(p)},2000) */

    const slug = (await params).slug
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    const blog = response.data
    return <div>
        <div className="text-3xl font-bold">{blog.title}</div>
        <div className="text-xl font-semibold ">
            {blog.body}
        </div>
    </div>
}


//slug is a shorthand for a blogpost/video/url contains these.... 



