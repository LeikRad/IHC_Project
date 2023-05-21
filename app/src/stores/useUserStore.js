import { create } from 'zustand';
import messages from './Database/messages';

export const useUserStore = create((set, get) => ({
    accounts: [],

    chats: messages,

    logged_in: false,

    is_student: false,

    completed_registation: false,
    completed_disponibility: false,
    completed_announcement: false,

    false_notifications: 0,

    first_name: null,
    final_name: null,
    username: null,
    password: null,
    email: null,
    nationality: null,
    image: null,
    phone: null,

    messages_to_read: null,
    messages: null,

    list_of_certifications: null,
    list_of_know_languages: null,
    list_of_learn_languages: null,
    list_of_classes: null,

    add_notification: () => {
        set((state) => ({
            false_notifications: state.false_notifications + 1,
        }));
    },

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

            completed_registation: false,
            completed_disponibility: false,
            completed_announcement: false,

            false_notifications: 0,


            list_of_know_languages: null,
            list_of_learn_languages: null,
            list_of_classes: null,
            list_of_certifications: null,
            messages_to_read: null,
            messages: null,
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
            messages_to_read: null,
            messages: null,
        }));
        console.log(user["first_name"] + " " + user["final_name"])
        user["username"] = user["first_name"] + " " + user["final_name"];
        user["image"] = null;
        user["phone"] = null;
        user["list_of_certifications"] = null;
        user["list_of_know_languages"] = null;
        user["list_of_learn_languages"] = null;
        user["list_of_classes"] = null;
        user["messages_to_read"] = null;
        user["messages"] = null;
        const accounts = get().accounts;
        accounts.push(user);
        console.log(get().accounts);
    },

    add_registation: () => {
        set(() => ({
            completed_registation: true,
        }));
    },

    add_disponibility: () => {
        set(() => ({
            completed_disponibility: true,
        }));
    },

    add_announcement: () => {
        set(() => ({
            completed_announcement: true,
        }));
    },

    update_user: (user) => {
        // phone: phone,
        //     certifications: certifications,
        //     description: description,
        //     profile_picture: profile_picture

        set(() => ({
            phone: user["phone"],
            list_of_certifications: user["certifications"],
            description: user["description"],
            image: user["profile_picture"],
            list_of_know_languages: user["list_of_know_languages"],
        }));
    },

}));


