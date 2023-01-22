

require("dotenv").config();

//postgres connection..........
const db = require("./db");


//const morgan=require("morgan");
const express = require("express");
const app = express();

//use of middleware
app.use(express.json());

// middleware exmple...
/* app.use((req,res,next)=>{
res.status(404).json({
    status:"fail",
})  ;  
});


*/

//app.use(morgan("tiny"));

//get all restaurants....
app.get("/api/v1/restaurants", async (req, res) => {
    try {

        const results = await db.query("select * from restaurants");

        console.log(results);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows,
            },
        });
    }
catch (err) {
        console.log(err);
    
}

});

//get a resturants by id
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);
    res.status(200).json({
        status: "success",
        data: {
            restaurants: "ratobhale"
        }
    })
}
);
// create restaurants.........
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);
    res.status(201).json({
        status: "success",
        data: {
            restaurants: "bhatti"
        }
    })


})


//..Update a restaurants...
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(300).json({
        status: "success",
        data: {
            restaurants: "sukre pasal"
        }
    });
});

//delete...

app.delete("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(300).json({
        status: "success",

    });
});



const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`its up and listening at ${port}`);

}); 