import { useShallow } from "zustand/shallow";
import { WhiteCard } from "../../components"
import { useBearStore } from "../../stores"

const Bears = ():JSX.Element => {

    const bears = useBearStore(  useShallow( state => state.bears ) );
    const doNothing = useBearStore( state => state.doNothing );

    return (
        <WhiteCard >
          <h2>Osos</h2>

            <button onClick={ doNothing } className="btn my-5">Do nothing</button>

            <pre>
                { JSON.stringify(bears, null, 2) }
            </pre>

        </WhiteCard>
    )
}

export { Bears }