const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const mongoURI = "mongodb+srv://atlas-sample-dataset-load-67fa9b082a23d632b37b8292:<Kavya10>@cluster0.oonzddt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch(err => console.error("MongoDB connection error:", err));

const donorSchema = new mongoose.Schema({
    name: String,
    img: String,
    bloodGroup: String
});

const Donor = mongoose.model("Donor", donorSchema);

app.get("/donors", async (req, res) => {
    try {
        const donors = await Donor.find();
        res.json(donors);
    } catch (err) {
        res.status(500).send("Error fetching donors");
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


   