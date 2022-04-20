import { TypeOf } from "yup";

export default class DataManager{

    static inst;
    static users;
    static memes;
    funcs;
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
                password: '2345',
                profilePic: require("../images/cat.jpg"),
            },
            {
                id: '1',
                username: 'Jon',
                email: 'js@gmail.com',
                password: '3456',
                profilePic: require("../images/old.jpg"),
            },
        ];
        DataManager.memes = [
            [
                {id: 0,
                image: require("../images/nose.jpg"),
                date: '1/1/2022',
                descrip: "jimmys picking his nose again!",
                like: false,
                category: 'Jimmy',},

                {id: 1,
                image: require("../images/tape.jpg"),
                date: '2/1/2022',
                descrip: "jimmys taped up dad!",
                like: true,
                category: 'Dad',},
                {
                id: 2,
                image: require("../images/old.jpg"),
                date: '2/1/2022',
                descrip: "grandpa!",
                like: true,
                category: 'GPa',},
                {
                id: 3,
                image: require("../images/cat.jpg"),
                date: '2/1/2022',
                descrip: "pops cool cat!",
                like: true,
                category: 'GPa',}

            ], [], []];

        this.currentUser = -1;
        this.funcs = [];
    }

    static getInst(){
        if (DataManager.inst == null)
            DataManager.inst = new DataManager();

        return DataManager.inst;
    }

    getMemes(filter){
        // console.log(DataManager.memes[this.currentUser].length);
        let x = DataManager.memes[this.currentUser].filter(filter);
        // console.log(x.length);
        return x;
    }

    addUser(user){
        DataManager.users.push(user);
        DataManager.memes.push([]);

    }

    addMeme(meme){
        meme.id = DataManager.memes[this.currentUser].length; 
        DataManager.memes[this.currentUser].push(meme);
        // console.log(typeof(meme.image));
        this.refreshAll();
    }

    setMeme(meme){
        DataManager.memes[this.currentUser][meme.id]=meme;
        this.refreshAll();
    }

    deleteMeme(meme){
        let arr = DataManager.memes[this.currentUser];
        arr[meme.id] = arr[arr.length-1];
        arr[meme.id].id = meme.id;
        arr.pop();
        this.refreshAll()
    }

    setUser(email, password){
        email = email.trim();
        email = email.toLowerCase();
        for (let i = 0; i < DataManager.users.length; i++){
            if (DataManager.users[i].email === email){
                if (DataManager.users[i].password === password) {
                    this.currentUser = i;
                    this.refreshAll();
                    return this.currentUser;
                } else {
                    break;
                }
            }
        }
        this.refreshAll();
        this.currentUser = -1;
        return this.currentUser;
    }

    getUser(){
        console.log('current user ' + this.currentUser.toString());
        if (this.currentUser == -1)
            return null;
            
        // console.log(typeof(this.currentUser));
        return DataManager.users[this.currentUser];
    }

    getCategories(){
        let catList = [];
        let done = [];
        let memes = DataManager.memes[this.currentUser];

        for (let i = 0; i < memes.length; i++){
            if (!done.includes(memes[i].category)){
                done.push(memes[i].category);
                catList.push(memes[i]);
                
            }
        }

        // console.log('cats');
        // console.log(catList);

        return catList;
    }

    addRefresh(func){
        if (!this.funcs.includes(func))
            this.funcs.push(func);
    }
    refreshAll(){
        for (let i = 0; i < this.funcs.length; i++){
            this.funcs[i](null);
        }
    }



}