// hardcoded DB
const users = [
    new User("guy", "iAdani", "77777"),
    new User("chen", "Chnana", "55555"),
    new User("yotam", "Yotatm", "12345")
];

function User(username, nickname, password) {
    this.username = username;
    this.nickname = nickname;
    this.password = password;
    this.chats = new Map();
    this.lastSeen = "";
}

function AddUser(username, nickname, password) {
    if (UsernameExistsCheck(username)) return <div Username already in use />
    users.push(new User(username, nickname, password));
}

// checks if details are valid for login
function LoginCheck(username, password) {
    if (!(UsernameExistsCheck(username))) return false;
    let user = users.find(user => user.username === username);
    return (user.password === password);
}

// checks if username exists in DB
function UsernameExistsCheck(username) {
    return (users.find(user => user.username === username)) ? true : false;
}

// returns current user's nickname
function GetNickname(username) {
    if (UsernameExistsCheck(username)) {
        return users.find(user => user.username === username).nickname;
    }
}

function GetChats(user, recepient) {

}

export { AddUser, LoginCheck, UsernameExistsCheck, GetNickname, GetChats }
