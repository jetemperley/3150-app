/*  
    Author: Jacob Temperley
    Email: jacob.temperley@student.mq.edu.au
    Student num: 44816936
*/

// the datamanager that stores all memory and user information
// also regulates user access

export default class DataManager{

    static inst;
    static users;
    static memes;
    updateObserver;
    currentUser;

    constructor(){
        console.log("constructing data");
        // a list of users
        DataManager.users = [
            {
                id: '0',
                username: 'Jacob',
                email: 'jacob@gmail.com',
                password: '1234',
                profilePic: require("../images/happy-man.png"),
            },
            {
                id: '1',
                username: 'Guest',
                email: 'guest@gmail.com',
                password: '2345',
                profilePic: require("../images/cat.jpg"),
            },
            {
                id: '2',
                username: 'Jon',
                email: 'js@gmail.com',
                password: '3456',
                profilePic: require("../images/old.jpg"),
            },
        ];
        // a list of memes, with each sub array coresponding to a user
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

            ], [
                {id: 0,
                    image: require("../images/nose.jpg"),
                    date: '1/1/2022',
                    descrip: "this shoudl only appear on the guest login!",
                    like: false,
                    category: 'Jimmy',},
            ], [
                {id: 0,
                    image: require("../images/nose.jpg"),
                    date: '1/1/2022',
                    descrip: "this should only appear on jons login!",
                    like: false,
                    category: 'Jimmy',},
            ]];
        
        this.currentUser = -1;
        // this is the update observer list
        this.updateObserver = [];
    }

    // get this singleton
    static getInst(){
        if (DataManager.inst == null)
            DataManager.inst = new DataManager();

        return DataManager.inst;
    }

    // get an array of memes based on the filter
    getMemes(filter){
        // console.log(DataManager.memes[this.currentUser].length);
        let x = DataManager.memes[this.currentUser].filter(filter);
        // console.log(x.length);
        return x;
    }

    // add an arbitrary user
    addUser(user){
        user.email = user.email.toLowerCase();
        user.id = DataManager.users.length;
        DataManager.users.push(user);
        DataManager.memes.push([]);

    }

    // add a meme for this user
    addMeme(meme){
        meme.id = DataManager.memes[this.currentUser].length; 
        DataManager.memes[this.currentUser].push(meme);
        // console.log(typeof(meme.image));
        this.refreshAll();
    }

    // overwrite a meme (used for editing)
    setMeme(meme){
        DataManager.memes[this.currentUser][meme.id]=meme;
        this.refreshAll();
    }

    // remove the supplied meme
    deleteMeme(meme){
        let arr = DataManager.memes[this.currentUser];
        arr[meme.id] = arr[arr.length-1];
        arr[meme.id].id = meme.id;
        arr.pop();
        this.refreshAll()
    }

    // logs the suppled user in
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

    // get the index for a user
    getUser(){
        console.log('current user ' + this.currentUser.toString());
        if (this.currentUser == -1)
            return null;
            
        // console.log(typeof(this.currentUser));
        return DataManager.users[this.currentUser];
    }

    // get a list of all the catagories for this user
    // represented by a list of memes 
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

    // adds a hook to observe and refresh
    addRefresh(hook){
        if (!this.updateObserver.includes(hook))
            this.updateObserver.push(hook);
    }

    // sets all the hooks, causing every component to refresh 
    refreshAll(){
        for (let i = 0; i < this.updateObserver.length; i++){
            this.updateObserver[i](null);
        }
    }



}