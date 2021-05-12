import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import ListEmpty from '../../components/ListEmpty';
import ShopList from '../../components/ShopList';

const VirtualCart: React.FC = () => {
  const [showList,setShowList] = useState(false);
  const ListItems = useSelector((state:any) => state.shoplist);
  console.log("#################3",ListItems);
  useEffect(() => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    if(ListItems.length===0)
    {
      setShowList(false);
    }

    else{
      setShowList(true);
    }
  }, [ListItems])

  return (
    <>
  {showList ?
  (<ShopList />)
:(<ListEmpty />)
  }
</>

  )
};

export default VirtualCart;
