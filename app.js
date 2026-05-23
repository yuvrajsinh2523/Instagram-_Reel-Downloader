const express=require("express");
const app=express();
const path=require("path");
const port=8080;
const {instagramGetUrl}=require("instagram-url-direct");
const ejsMate=require("ejs-mate");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.engine("ejs",ejsMate);

app.listen(port,()=>{
    console.log(`your post ${port} is working`);
})

app.get("/",(req,res)=>{
    res.render("index.ejs",{videoUrl:null,error:null});
})

app.post("/download",async (req,res)=>{
    try{
        const {reelUrl}=req.body;
        const data=await instagramGetUrl(reelUrl);

        res.render("index.ejs",
            {videoUrl:data.url_list[0]
            ,error:null})
    
    
    }catch(err){
        console.log(err);
    }

})
