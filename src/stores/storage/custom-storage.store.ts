import { createJSONStorage, StateStorage } from "zustand/middleware";

const sessionStorageApi:StateStorage = {
    getItem: function (name: string): string | null | Promise<string | null> {
        return sessionStorage.getItem(name);
    },
    setItem: function (name: string, value: string): unknown | Promise<unknown> {
        return sessionStorage.setItem(name, value);
    },
    removeItem: function (name: string): unknown | Promise<unknown> {
        console.log(name)

        return
    }
}

export const customSessionStorage = createJSONStorage( () => sessionStorageApi );  