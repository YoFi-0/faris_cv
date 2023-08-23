import express, { Response } from "express";
import https from "https"
import path from "path";
import fs from "fs"
import fss from "fs/promises"
import cors from "cors";
import axios from "axios";

const htmlPublic = (res: Response, htmldir: string, file_name: string = "index.html") => {
    return res.sendFile(path.join(__dirname, `public/${htmldir}/${file_name}`))
}
const ssl_config = {
    ssl_files_path:`C:/Certbot/archive/farisab.com`,
    privte_key_failename:"privkey1.pem",
    cert_filename:"fullchain1.pem"
}
const app = express()
const cert =  fs.readFileSync(path.join(ssl_config.ssl_files_path, ssl_config.cert_filename))
const privte_key = fs.readFileSync(path.join(ssl_config.ssl_files_path, ssl_config.privte_key_failename))
const appSSl = https.createServer({
    cert:cert,
    key:privte_key
}, app)
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.redirect('/index')

})

app.get(/([A-z]|[0-9])/g, (req, res) => {
    res.redirect("/not_found")
})
app.get("/not_found", (req, res) => {
    res.status(404)
    res.render("not_found")
})
app.post("/hmode", cors({
    credentials:true,
    optionsSuccessStatus: 200,
    origin:"https://2s2game.2s2yz.repl.co",
}), async (req, res) => {
    const data_path = path.join(__dirname, "/hmod/vistors.txt")
    var readLast = Number(await fss.readFile(data_path, "utf-8"));
    if(isNaN(readLast)){
        return res.send("not ok");
    }
    readLast++
    fss.writeFile(data_path, `${readLast}`, 'utf-8')
    res.send("ok")
    try{
        axios({
            method:"POST",
            url:"https://discord.com/api/webhooks/1140508894603513957/XmIE81bCNp9wZBcEiwxzLNrSO1OCtWiw3UtLO913rhGp3UjgwZqXYNYrBL8CQGuUOwBi",
            data:{
                content:`vistors are ${readLast}`,
            }
        })
    } catch(err){

    }
})



appSSl.listen(443, () => {
    console.log("servar satrting in port 443");
})
