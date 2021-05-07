import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import CartEmpty from '../../components/CartEmpty';
import CartView from '../../components/CartView';

const VirtualCart: React.FC = () => {
  const [showEmpty, setShowEmpty] = useState(false);
  const [showCart,setShowCart] = useState(false);
  const Items = useSelector((state:any) => state.products);
  console.log("#################3",Items);
  useEffect(() => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    if(Items.length===0)
    {
      setShowCart(false);
      //setShowEmpty(true);
      console.log("length=0");
    }

    else{
      setShowCart(true);
      //setShowEmpty(false);
      console.log("length>0");
    }
  }, [Items])

//   const getCartItems = () => {
//     if(Items.length===0)
//     {
//       setShowCart(false);
//       console.log("");
//     }

//     else{
//       setShowCart(true);
//       console.log("");
//     }
    
// }

  return (
    <>
  {showCart ?
  (<CartView />)
:(<CartEmpty />)
  }
</>

  )
};

export default VirtualCart;
