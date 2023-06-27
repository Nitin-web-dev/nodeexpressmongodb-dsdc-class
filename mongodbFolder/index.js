const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful"))
  .catch((err) => {
    console.log(err);
  });

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  batch: String,
  city: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Playlist = new mongoose.model("Playlist", playlistSchema);

const createDocument = async () => {
  try {
    const newPlaylist1 = new Playlist({
      name: "vishal",
      batch: "full stack developer",
      city: "faridabad",
      active: true,
    });
    const newPlaylist2 = new Playlist({
      name: "rahul",
      batch: "full stack developer",
      city: "delhi",
      active: true,
    });
    const newPlaylist3 = new Playlist({
      name: "akash",
      batch: "full stack developer",
      city: "gurugram",
      active: true,
    });
    const newPlaylist4 = new Playlist({
      name: "akash",
      batch: "full stack developer",
      city: "gurugram",
      active: true,
    });
    const newPlaylist5 = new Playlist({
      name: "akash",
      batch: "full stack developer",
      city: "faridabad",
      active: true,
    });

    // const result = await newPlaylist.save(); // for single input
    const result = await Playlist.insertMany([
      newPlaylist1,
      newPlaylist2,
      newPlaylist3,
      newPlaylist4,
      newPlaylist5,
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// createDocument();

const getData = async () => {
  try {
    // const result = await  Playlist.find({city:'faridabad'}).select({name: 1,city: 1}).countDocuments();
    const result = await Playlist.find({
      $or: [{ city: "faridabad" }, { city: "delhi" }],
    }).select({ name: 1, city: 1 });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// getData();

const updateDocument = async (_id) => {
  try {
    const updateData = await Playlist.findByIdAndUpdate(
      { _id },
      { $set: { city: "goa" } },
      { new: true, usefindAndModify: true }
    );
    console.log(updateData);
  } catch (err) {
    console.log(err);
  }
};

// updateDocument("649a5de14ce40a3aa18e181f")

const delelteDocument = async (_id) => {
  try {
    const deleteUpdate = await Playlist.findByIdAndDelete({ _id });
    console.log(deleteUpdate);
  } catch (error) {
    console.log(error);
  }
};

// delelteDocument("649a5de14ce40a3aa18e181f")
