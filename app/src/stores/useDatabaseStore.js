import { create } from 'zustand';

import languages from './Database/Languages';
import announcements from './Database/Announcements';

export const useDatabaseStore = create((set, get) => ({
    LanguagesAvailable: languages,
    Announcements: announcements,

    addAnnouncement: (announcement) => {
        const Announcements = get().Announcements;
        Announcements.push(announcement);
        set((state) => ({
            Announcements: Announcements,
        }));
    },

    removeAnnouncement: (announcement) => {
        const Announcements = get().Announcements;
        const index = Announcements.indexOf(announcement);
        Announcements.splice(index, 1);
        set((state) => ({
            Announcements: Announcements,
        }));
    }

}));
