class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time}seconds of ${this.title}!`)
    };
}
    
watcher1 = new Video('Happy unbirthday', 'Jenyfer', 197);
watcher1.watch();

watcher2 = new Video('Singin\' in the Rain', 'Arielle', 256);
watcher2.watch();

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
const videoList = [
    { title: 'Sex and the City: Pilot', uploader: 'Arielle', time: 1230 },
    { title: 'Models and Mortals', uploader: 'Carrie', time: 1230 },
    { title: 'Bay of Married Pigs', uploader: 'Samantha', time: 1230 },
    { title: 'Valley of the Twenty-Something Guys', uploader: 'Charlotte', time: 1230 },
    { title: 'The Power of Female Sex', uploader: 'Miranda', time: 1230 }
]
// Bonus: Loop through the array to instantiate those instances.

const videoLoop = videoList.map(video => new Video(video.title, video.uploader, video.time));
console.log(videoLoop.forEach(video => video.watch()));
