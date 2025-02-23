import { WhiteCard } from "../../components"

interface Props {
    counterBears: number;
    eventBears: (by: number) => void;
    title: string;
}

const BearItem = ({ counterBears, eventBears, title }:Props):JSX.Element => {
    return (
        <WhiteCard centered>
          <h2>{ title }</h2>

          <div className="flex flex-col md:flex-row">
            <button onClick={ ()=> eventBears(+1) }> +1</button>
            <span className="text-3xl mx-2 lg:mx-10"> { counterBears } </span>
            <button onClick={ ()=> eventBears(-1) }>-1</button>
          </div>

        </WhiteCard>
    )
}

export { BearItem }