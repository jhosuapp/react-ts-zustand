import { create } from 'zustand'

type BearIncrease = (by: number) => void;
type BearCount = number;

interface BearState {
    blackBears: BearCount;
    polarBears: BearCount;
    pandaBears: BearCount;
    
    increaseBlackBears: BearIncrease;
    increasePolarBears: BearIncrease;
    increasePandaBears: BearIncrease;
}

export const useBearStore = create<BearState>()((set) => ({
    blackBears: 0,
    polarBears: 5,
    pandaBears: 10,

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
    )
}));