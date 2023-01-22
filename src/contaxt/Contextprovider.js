import { createContext,useState } from "react"


export const LoginContext=createContext(null);
const Contextprovider=({children})=>{
              const [account,setaccount]=useState('');
              return (
                     <LoginContext.Provider value={{account,setaccount}}>
                         {children}
                     </LoginContext.Provider>
              )
}
export default Contextprovider;


//here we can use account at anywhere in any file....