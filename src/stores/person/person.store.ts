import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
// import { customSessionStorage } from "../storage/custom-storage.store";
import { firebaseStorage } from "../storage/firabase-storage.store";

interface PersonState {
    firstName: string;
    lastName: string;
}

interface Actions {
    setFirstName: (value: string) => void;
    setLastName: (value: string) => void;
}

const storeAPI: StateCreator<PersonState & Actions, [["zustand/devtools", never]]> = (set) =>({
    firstName: '',
    lastName: '',
    
    setFirstName: (value: string) => set(({
        firstName: value
    }), false, 'setFirstName' ),
    setLastName: (value: string) => set(({
        lastName: value
    }), false, 'setLastName' )
});

export const usePersonStore = create<PersonState & Actions>()(
    devtools(
        persist(
            storeAPI
        , { 
            name: 'person-store',
            // storage: customSessionStorage
            storage: firebaseStorage
        })
    )
);