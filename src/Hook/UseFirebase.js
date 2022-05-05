import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import initialAuthentication from "../Componant/Firebase/Firebase.initial";
//import { useNavigate } from 'react-router';
initialAuthentication();

const UseFirebase=()=>
{
    //let navigate = useNavigate();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [error,SetError]=useState('');
    const [user, setUser]=useState({});

    const GoogleSignIn=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            //console.log(user);
        }).catch((error) => {
            
            SetError(error.message);
            
        });
   }

        useEffect(()=>
        {
        onAuthStateChanged(auth, (user) => {
            if (user) {
            
                setUser(user);
            } 
            });
        },[])

        const logOut=()=>
        {
            signOut(auth)
            .then(() => {
                setUser({});
              })
              .catch((error) => {
                SetError(error.message)
              });
    
        }

        const SignEmail=(email,password,navigate)=>
        {
            //console.log(navigate)
            //console.log(email,password)
            
            createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                //console.log(result.user);
                setUser(result.user);
               navigate('/')
                
            })
            .catch((error) => {
               
                SetError(error.message)
                alert(error.message)
               
            });

        }
        // if user Already Registerd
        const RegisterdEmail=(email,pass)=>
        {
            // console.log(email)
            // console.log(pass)
            signInWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                // Signed in 
                setUser(result.user);
               
                // ...
            })
            .catch((error) => {
                alert(error.message)
                SetError(error.message)
            });
        }
return{
    GoogleSignIn,
    error,
    user,
    logOut,
    SignEmail,
    RegisterdEmail
}

}
export default UseFirebase;