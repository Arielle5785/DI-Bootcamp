let user = {
    userName: 'BillyTheKid',
    password:'pass'
}

const database = [user];

let newsfeed = [
    { userName: user.userName, timeline: ['clicked', 'button pushed', 'submitted form'] },
    { userName: 'tommy', timeline: ['messaged', 'joined'] },
    { userName: 'Floyd', timeline: [] }];

console.log(newsfeed)