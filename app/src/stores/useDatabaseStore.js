import { create } from 'zustand';

import languages from './Database/Languages';
import announcements from './Database/Announcements';

export const useDatabaseStore = create((set, get) => ({
    LanguagesAvailable: languages,
    Announcements: announcements,

    addAnnouncement: (announcement) => {
        console.log(announcement);
        console.log(get().Announcements)
        const Announcements = get().Announcements;
        console.log(Announcements);
        Announcements.push(announcement);
        console.log(Announcements);
        set((state) => ({
            Announcements: Announcements,
        }));
    }
}));
