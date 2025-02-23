import { useShallow } from "zustand/shallow";
import { WhiteCard } from "../../components"
import { useBearStore } from "../../stores"

const Bears = ():JSX.Element => {

    const bears = useBearStore(  useShallow( state => state.bears ) );
    const doNothing = useBearStore( state => state.doNothing );
    const addBear = useBearStore( state => state.addBear );
    const clearBears = useBearStore( state => state.clearBears );

    return (
        <WhiteCard >
          <h2>Osos</h2>

            <button onClick={ doNothing } className="btn mt-5 mb-2">Hacer nada</button>
            <button onClick={ addBear } className="btn my-2">Añadir oso</button>
            <button onClick={ clearBears } className="btn mt-2 mb-5">Eliminar osos</button>

            <pre>
                { JSON.stringify(bears, null, 2) }
            </pre>

        </WhiteCard>
    )
}

export { Bears }