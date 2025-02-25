import { createJSONStorage, StateStorage } from "zustand/middleware";

const firebaseUrl = 'https://zustand-72f73-default-rtdb.firebaseio.com/zustand';

const firebaseApi:StateStorage = {
    getItem: async function (name: string): Promise<string | null> {
        try {
            const data = await fetch(`${firebaseUrl}/${name}.json`).then( res => res.json() );
            return JSON.stringify(data);
        } catch (error) {
            throw error;
        }
    },
    setItem: async function (name: string, value: string): Promise<void> {
        try {
            await fetch(`${firebaseUrl}/${name}.json`, {
                method: 'PUT',
                body: value
            }).then( res => res.json() );

            return;
        } catch (error) {
            throw error;
        }
    },
    removeItem: function (name: string): unknown | Promise<unknown> {
        console.log(name)

        return
    }
}

export const firebaseStorage = createJSONStorage( () => firebaseApi );  