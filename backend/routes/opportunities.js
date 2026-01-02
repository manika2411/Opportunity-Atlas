import express from "express";
import Opportunity from "../models/Opportunity.js";

const router=express.Router()

router.get("/", async (req, res) => {
  try {
    const { type, location, sort } = req.query;

    let filter = {};
    if (type) filter.type = type;
    if (location) filter.location = location;

    let query = Opportunity.find(filter);

    if (sort === "deadline") {
      query = query.sort({ deadline: 1 });
    }

    if (sort === "recent") {
      query = query.sort({ createdAt: -1 });
    }

    const opportunities = await query;
    res.status(200).json(opportunities);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch opportunities" });
  }
});


router.post("/", async(req,res)=>{
    try{
        const opportunity = new Opportunity(req.body)
        const savedOpportunity=await opportunity.save()
        res.status(201).json(savedOpportunity)
    }
    catch(error){
        res.status(400).json({message:"Failed to create opportunity",error})
    }
})

router.get("/:id", async (req,res)=>{
    try{
        const opportunity=await Opportunity.findById(req.params.id)
        if (!opportunity)
        {
            return res.status(404).json({message:"Opportinity not found"})
        }
        res.status(200).json(opportinity)
    }
    catch(error){
        res.status(400).json({message:"Invalid ID"})
    }
})

export default router