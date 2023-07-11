const express = require("express")
const fs = require("fs")
//const path = require("path");

//path
//const dirPath = path.join(__dirName,"timestamps");
//console.log("dirPath", dirPath)

const app = express()

const data = [
    {
        id:"1234578",
        numberOfSeats: 60,
        price: 4500,
        ifBooked:"true",
        amenities: ["chairs", " AC", "Discolights"],
        CustomerName: "surya kumar yadav",
        date: "08-july-2023",
        startTime: "09-july-2023 at 2PM",
        endTime: "10-july-2023 at 10AM",
        RoomName:"normal",
        RoomId: 391236,
    },

    {
        id:"87745542",
        numberOfSeats: 100,
        price: 4500,
        ifBooked:"true",
        amenities: ["chairs", " AC", "Discolights"],
        CustomerName: "virat kohil",
        date: "08-july-2023",
        startTime: "09-july-2023 at 2PM",
        endTime: "10-july-2023 at 10AM",
        RoomName:"normal",
        RoomId: 955226,
    },
    {
        id:"57812308",
        numberOfSeats: 60,
        price: 4500,
        ifBooked:"false",
        amenities: ["chairs", " AC", "Discolights"],
        CustomerName: "rohit sharma",
        date: "",
        startTime: "",
        endTime: "",
        RoomName:"",
        RoomId: "",
    },
]
//get hall details

app.get("/hall/details",(req,res)=>{
    if(req.query){
        const{ifBooked} = req.query;
        console.log(ifBooked)
        let filterHall = data;
        if(ifBooked){
       filterHall = filterHall.filter((halls)=>halls.ifBooked ===ifBooked)     

        }
        res.send(filterHall)
        
    } else{
        req.send(data)
    }
})

//get hall details
app.get("/hall/details/id",(req, res)=>{
    const {id} = req.params;
    console.log(id)
    const{ifBooked} = req.query;
    console.log(ifBooked)
    let filterHall = data;
    if(ifBooked){
        filterHall = filterHall.filter((hall)=>halls.ifBooked === ifBooked)
    }
    res.send(filterHall)
    const specificHall =data.find(hall=>hall.id ===id);
    res.send(specificHall)
})







app.listen(9000, ()=>console.log(`server started in localhost:9000`))