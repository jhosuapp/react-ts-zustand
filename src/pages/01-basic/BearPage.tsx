import { useBearStore } from '../../stores';
import { BearItem } from './BearItem';

export const BearPage = () => {

  const blackBears = useBearStore( state => state.blackBears );
  const increaseBlackBears = useBearStore( state => state.increaseBlackBears ); 
  const polarBears = useBearStore( state => state.polarBears );
  const increasePolarBears = useBearStore( state => state.increasePolarBears ); 
  const pandaBears = useBearStore( state => state.pandaBears );
  const increasePandaBears = useBearStore( state => state.increasePandaBears ); 

  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

        <BearItem  
          counterBears={ blackBears }  
          eventBears={ increaseBlackBears } 
          title={ 'Osos negros' }
          /> 
        <BearItem  
          counterBears={ polarBears } 
          eventBears={ increasePolarBears } 
          title={ 'Osos polares' }
        /> 
        <BearItem  
          counterBears={ pandaBears } 
          eventBears={ increasePandaBears } 
          title={ 'Osos pandas' } 
        /> 

      </div>

    </>
  );
};