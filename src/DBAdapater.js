// hardcoded DB
const users = new Map([
    new User("guy", "iAdani", "77777"),
    new User("chen", "Chnana", "55555"),
    new User("yotam", "Yotatm", "12345")
].map(user => {
    return [user.username, user]
}));

users.get("yotam").chats.set("guy", [new Message(true, "3:54pm", "Bitches b strollin")]).set("chen", [new Message(true, "2:37am", "ma at rotza?!@")])

function User(username, nickname, password) {
    this.username = username;
    this.nickname = nickname;
    this.password = password;
    this.chats = new Map();
    this.lastSeen = new Date();
}

function Message(received, time, message) {
    this.isReceived = received;
    this.time = time;
    this.message = message;
}

// checks if username exists in DB
function UserExists(username) {
    return (users.has(username));
}

// adds user to user pool database
function AddUser(username, nickname, password) {
    let usernameLower = username.toLowerCase()
    if (UserExists(usernameLower)) return false;
    users.set(usernameLower, new User(usernameLower, nickname, password));
}

// checks if details are valid for login
function LoginCheck(username, password) {
    if (!UserExists(username)) return false;
    let user = users.get(username);
    return (user.password === password);
}

// returns current user's nickname
function GetNickname(username) {
    if (UserExists(username)) {
        return users.get(username).nickname;
    }
}

function GetContacts(user) {
    return (UserExists(user)) ? [...users.get(user).chats.keys()] : false;
}

function GetChats(user, recipient) {
    return (UserExists(user) && UserExists(recipient)) ? users.get(user).chats.get(recipient) : [];
}

function GetLastMessage(user, recipient) {
    if (UserExists(user) && UserExists(recipient)) {
        let msg = users.get(user).chats.get(recipient).find(msg => msg.isReceived);
        return msg.message;
    }
}

function GetLastSeen(user) {
    if (UserExists(user)) {
        var curTime = users.get(user).lastSeen;
        return [curTime.getDate(), curTime.toTimeString()];
    }
}

export { AddUser, LoginCheck, UserExists, GetNickname, GetChats, GetContacts, GetLastMessage, GetLastSeen }
