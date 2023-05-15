import { create } from 'zustand';


export const useUserStore = create((set, get) => ({
    accounts : [],
    
    logged_in: false,

    is_student: false,
    
    first_name: null,
    final_name: null,
    username: null,
    password: null,
    email: null,
    nationality: null,
    image: null,    
    phone: null,

    list_of_certifications: null,
    list_of_know_languages: null,
    list_of_learn_languages: null,
    list_of_classes: null,

    login: (email, password) => { 
        let account = null;  
        for (let i = 0; i < get().accounts.length; i++) {
            if (get().accounts[i]["email"] === email && get().accounts[i]["password"] === password) {
                account = get().accounts[i];
                break;
        
            }
        }
        set(() => ({
            email: email,
            password: password,
            logged_in: true,

            username: account["username"],
            first_name: account["first_name"],
            final_name: account["final_name"],
            nationality: account["nationality"],
            is_student: account["is_student"],
            image: account["image"],
            phone: account["phone"],
            list_of_know_languages: account["list_of_know_languages"],
            list_of_learn_languages: account["list_of_learn_languages"],

            list_of_classes: account["list_of_classes"],
            list_of_certifications: account["list_of_certifications"],
            
        }));
    },

    logout: () => {
        set(() => ({
            logged_in: false,
            username: null,
            password: null,
            first_name: null,
            final_name: null,
            email: null,
            nationality: null,
            image: null,
            phone: null,
            is_student: false,

            list_of_know_languages: null,
            list_of_learn_languages: null,
            list_of_classes: null,
            list_of_certifications: null,
        }));
    },

    create_user: (user) => {
        console.log(user);

        set(() => ({
            username: user["first_name"] + " " + user["final_name"],
            password: user["password"],
            first_name: user["first_name"],
            final_name: user["final_name"],
            email: user["email"],
            nationality: user["nationality"],
            logged_in: true,
            is_student: user["is_student"],
            image: null,
            phone: null,
            
            list_of_certifications: null,
            list_of_know_languages: null,
            list_of_learn_languages: null,
            list_of_classes: null,
        }));
        console.log(user["first_name"] + " " + user["final_name"])
        user["username"] = user["first_name"] + " " + user["final_name"];
        user["image"] = null;
        user["phone"] = null;
        user["list_of_certifications"] = null;
        user["list_of_know_languages"] = null;
        user["list_of_learn_languages"] = null;
        user["list_of_classes"] = null;
        const accounts = get().accounts;
        accounts.push(user);
        console.log(get().accounts);
    },

}));


