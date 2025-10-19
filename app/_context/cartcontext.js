"use client"
import { createContext ,useState} from "react";

export const cartcontext = createContext(null);
export function CartContextProvider({children}) {
  const [cartnum, setcartnum] = useState(0);
  const [togglecart, settogglecart] = useState(false);
   const [cartdata, setcartdata] = useState([]);
    return (
      <cartcontext.Provider
        value={{
          cartnum,
          setcartnum,
          togglecart,
          settogglecart,
          cartdata,
          setcartdata,
        }}
      >
        {children}
      </cartcontext.Provider>
    );

}
