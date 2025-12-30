import mongoose from "mongoose";
const OpportunitySchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            trim:true
        },
        description:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true,
            index:true
        },
        type:{
            type:String,
            enum:["job","internship","scholarship","event"],
            required:true
        },
        eligibilty:{
            type:String
        },
        deadline:{
            type:Date
        },
        location:{
            type:String
        },
        source:{
            type:String
        },
        link:{
            type:String
        },
        tags:{
            type:[String],
            index:true
        },
        difficultylevel:{
            type:Number,
            min:1,
            max:5
        },
        learningtimemonths:{
            type:Number
        },
        demandScore: {
            type: Number,
            min: 0,
            max: 100
        },
        competitionScore: {
            type: Number,
            min: 0,
            max: 100
        },
        growthRate: {
            type: Number
        },
        historicalDemand: [
        {
            year: Number,
            value: Number
        }]
        },
        {
            timestamps: true
        }
)

export default mongoose.model("Opportunity",OpportunitySchema)