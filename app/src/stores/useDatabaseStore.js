import { create } from 'zustand';

import languages from './Database/Languages';
import announcements from './Database/Announcements';

export const useDatabaseStore = create((set, get) => ({
    LanguagesAvailable: languages,
    Announcements: announcements,

    addAnnouncement: (announcement) => set(state => ({ Announcements: [...state.Announcements, announcement] })),
}));
