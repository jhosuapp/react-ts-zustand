import { create } from 'zustand'

type BearIncrease = (by: number) => void;
type BearCount = number;
type Bears = {
    id: number;
    name: string;
}

interface BearState {
    bears: Bears[];

    blackBears: BearCount;
    polarBears: BearCount;
    pandaBears: BearCount;
    
    increaseBlackBears: BearIncrease;
    increasePolarBears: BearIncrease;
    increasePandaBears: BearIncrease;
    
    doNothing: () => void;
    addBear: () => void;
    clearBears: () => void;

    computed: {
        totalBears: number
    }
}

export const useBearStore = create<BearState>()((set, get) => ({
    bears: [{ id: 1, name: 'Bear #1' }],
    blackBears: 0,
    polarBears: 5,
    pandaBears: 10,

    computed: {
        get totalBears(){
            return get().blackBears + get().polarBears + get().pandaBears + get().bears.length;
        }
    },

    increaseBlackBears: (by: number) => set(
        (state) => ({
            blackBears: state.blackBears + by
        })
    ),
    increasePolarBears: (by: number) => set(
        (state) => ({
            polarBears: state.polarBears + by
        })
    ),
    increasePandaBears: (by: number) => set(
        (state) => ({
            pandaBears: state.pandaBears + by
        })
    ),
    doNothing: () => set(
        (state) => ({
            bears: [...state.bears]
        })
    ),
    addBear: () => set(
        (state) => ({
            bears: [...state.bears, { id: state.bears.length + 1, name: `Oso #${state.bears.length + 1}` }]
        })
    ),
    clearBears: () => set(
        {
            bears: []
        }
    )
}));