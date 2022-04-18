import { TypeOf } from "yup";

export default class DataManager{

    static inst;
    static users;
    static memes;
    currentUser;

    constructor(){
        console.log("constructing data");
        DataManager.users = [
            {
                id: '44816936',
                username: 'Jacob',
                email: 'jacob.temperley@students.mq.edu.au',
                password: '1234',
                profilePic: require("../images/happy-man.png"),
            },
            {
                id: '0',
                username: 'Guest',
                email: 'guest@gmail.com',
                password: '2345'
            },
            {
                id: '1',
                username: 'Jon',
                email: 'js@gmail.com',
                password: '3456'
            },
        ];
        DataManager.memes = [[], [], []];
        currentUser = -1;
    }

    static getInst(){
        if (DataManager.inst == null)
            DataManager.inst = new DataManager();

        return DataManager.inst;
    }

    addUser(user){
        DataManager.users.push(user);
        DataManager.memes.push([]);

    }

    addMeme(userId, meme){
        let i = users.findIndex((ele) => ele.id === userId);
        DataManager.memes[i].push(meme);
    }

    setUser(email, password){
        email = email.trim();
        email = email.toLowerCase();
        for (let i = 0; i < DataManager.users.length; i++){
            if (DataManager.users[i].email === email){
                if (DataManager.users[i].password === password) {
                    this.currentUser = i;
                    return this.currentUser;
                } else {
                    break;
                }
            }
        }
        this.currentUser = -1;
        return this.currentUser;
    }

    getUser(){
        console.log('current user ' + this.currentUser.toString());
        if (this.currentUser == -1)
            return null;
            
        console.log(typeof(this.currentUser));
        return DataManager.users[this.currentUser];
    }




}