import { create } from 'zustand';


const defaultTheme = localStorage.getItem("th") || "dark";

document.body.setAttribute('data-theme', defaultTheme);

export const useUserStore = create((set, get) => ({
    logged_in: true,

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
            phone: null,

            list_of_know_languages: null,
            list_of_learn_languages: null,
            list_of_classes: null,
        }));
    }

}));


