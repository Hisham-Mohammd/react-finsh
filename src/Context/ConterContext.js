import { createContext , useState} from "react";

 export let  ConterContext=createContext();

export default function ConterContextProvider(props) {
    const [count, setCount] = useState(0);
    return <>
   
    
    <ConterContext.Provider value={{count}} >
    {props.children}
    </ConterContext.Provider>
    </>
}

