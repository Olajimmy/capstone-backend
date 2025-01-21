import Job from "../models/jobpost.mjs";

async function seed(req, res) {
  const TODAY = new Date();
  try {
    await Job.create([
      {
        user: "dave",
        jobType: TODAY,
        jobDescription:
          "i need someone to pain an entire house of 3 bedrooms and 3 bathrooms",
        payRange: "we shall discuss this",
        comments: "call me to talk turkey",
        businessAddress: "Palo Alto",
        phone: "1234567890",
      },
      {
        user: "dave",
        jobType: TODAY,
        jobDescription:
          "i need someone to pain an entire house of 3 bedrooms and 3 bathrooms",
        payRange: "we shall discuss this",
        comments: "call me to talk turkey",
        businessAddress: "Palo Alto",
        phone: "1234567890",
      },
      {
        user: "dave",
        jobType: TODAY,
        jobDescription:
          "i need someone to pain an entire house of 3 bedrooms and 3 bathrooms",
        payRange: "we shall discuss this",
        comments: "call me to talk turkey",
        businessAddress: "Palo Alto",
        phone: "1234567890",
      },
      {
        user: "dave",
        jobType: TODAY,
        jobDescription:
          "i need someone to pain an entire house of 3 bedrooms and 3 bathrooms",
        payRange: "we shall discuss this",
        comments: "call me to talk turkey",
        businessAddress: "Palo Alto",
        phone: "1234567890",
      },
    ]);
    res.send("success").status(200);
  } catch (err) {
    res.send(err).status(400);
  }
}

const getEntries = async (req, res) => {
  try {
    const foundEntries = await Job.find({});
    res.status(200).json(foundEntries);
  } catch (err) {
    res.send(err).status(400);
  }
};

const addEntry = async (req, res) => {
  console.log(`body: `, req.body);
  try {
    const createdEntry = await Job.create(req.body);
    console.log("createdEntry", createdEntry);
    res.status(200).json(createdEntry);
    // console.log('in addEntry');
    // res.send('added').status(400)
  } catch (err) {
    res.send(err).status(400);
  }
};

const deleteEntry = async (req, res) => {
  console.log(`deleting`);
  try {
    const deletedEntry = await Job.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedEntry);
  } catch (err) {
    res.send(err).status(400);
  }
};

const saveEntry = async (req, res) => {
  try {
    // Retrieve the update data from the request body
    const newValue = req.body;

    // Find the job by ID and update it
    const editedEntry = await Job.findByIdAndUpdate(
      req.params.id, // The job ID from the URL params
      newValue, // The data to update the job with (from req.body)
      { new: true } // The `new` option returns the updated document
    );

    // If no entry was found and updated
    if (!editedEntry) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Send the updated job post back as a response
    res.status(200).json(editedEntry);
    console.log("Job post updated successfully:", editedEntry);
  } catch (err) {
    console.error("Error updating job post:", err);
    res.status(400).send(err);
  }
};

// const editEntry = async (req, res) => {
//   try {
//     const editedEntry = await Job.findByIdAndUpdate(req.params.id);
//     res.status(200).json(editedEntry);
//     console.log("editing");
//   } catch (err) {
//     res.send(err).status(400);
//   }
// };
export default { seed, getEntries, addEntry, deleteEntry, saveEntry };
