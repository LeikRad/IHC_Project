import { create } from 'zustand';


const defaultTheme = localStorage.getItem("th") || "dark";

document.body.setAttribute('data-theme', defaultTheme);

export const useStudentStore = create((set, get) => ({
    logged_in: false,

    theme: defaultTheme,

    first_name: null,
    final_name: null,
    username: null,
    password: null,
    email: null,
    nationality: null,
    image: null,    

    list_of_know_languages: null,
    list_of_learn_languages: null,
    list_of_classes: null,

    setTheme: (theme) => {
        localStorage.setItem("th", theme);
        document.body.setAttribute('data-theme', theme);
        set({ theme });
    },

    login: (username, password) => {    
        set(() => ({
            username: username,
            password: password,
            logged_in: true,
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

            list_of_know_languages: null,
            list_of_learn_languages: null,
            list_of_classes: null,
        }));
    }

}));

