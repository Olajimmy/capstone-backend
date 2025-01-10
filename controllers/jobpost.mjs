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

const editEntry = async (req, res) => {
  console.log("editing");
  try {
    const editedEntry = await Job.findByIdAndUpdate(req.params.id);
    res.status(200).json(editedEntry);
  } catch (err) {
    res.send(err).status(400);
  }
};
export default { seed, getEntries, addEntry, deleteEntry, editEntry };
