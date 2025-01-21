import mongoose from "mongoose";
const jobSchema = new mongoose.Schema(
  {
    email: String, // this will be passed in from the user auth details
    jobType: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    payRange: {
      type: String,
      required: true,
    },
    comments: String,
    businessAddress: {
      type: String,
      required: true,
    },

    phone: Number,
  },
  {
    timestamps: true,
  }
);

//indexes

jobSchema.index({ jobType: 1 });
export default mongoose.model("Job", jobSchema);
