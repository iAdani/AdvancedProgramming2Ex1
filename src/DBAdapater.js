
// Hardcoded DB
const usernames = ["guy"    , "chen"    , "yotam"];
const passwords = ["77777"  , "55555"   , "12345"];
const nicknames = ["Adani"  , "Chen"    , "Yotatm"];

// Add a new user to the DB
function AddUser(username, password) {
    usernames.push(username.toLowerCase());
    passwords.push(password);
}

// Check if login is valid
function LoginCheck(username, password) {
    for (var i = 0; i < usernames.length; i++) {
        if ((username === usernames[i]) && (password === passwords[i])) return i;
    }

    return -1;
}

// Check if username already exists
function UsernameExistsCheck(username) {
    for (var i = 0; i < usernames.length; i++) {
        if (username === usernames[i]) return true;
    }

    return false;
}

export {AddUser, LoginCheck, UsernameExistsCheck}
