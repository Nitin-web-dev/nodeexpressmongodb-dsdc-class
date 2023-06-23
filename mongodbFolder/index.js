const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('connection successful')).catch((err) => {
    console.log(err);
})


const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    batch: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

const Playlist = new mongoose.model('Playlist' , playlistSchema);

const createDocument  = async ()  => {
    try{
        const newPlaylist  = new Playlist({
            name: 'vishal',
            batch: 'full stack developer',
            active : true
        })

        const result = await newPlaylist.save();
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
    
}

createDocument();