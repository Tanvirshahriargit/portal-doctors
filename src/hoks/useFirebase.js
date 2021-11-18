import { useEffect, useState } from "react";
import initializeFirebase from "../pages/LogIn/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword ,updateProfile , getIdToken} from "firebase/auth";


// inititize firebase
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const [token , setToken] = useState('')
    // admin check 
    const [admin, setAdmin]= useState(false)

    const auth = getAuth();

    const registerUser = (email, password ,name, navigate) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                const newUser = { email, displayName: name }
                setUser(newUser);

                // save user to database 
                saveUser(email, name, "POST")

                navigate("/");

                // send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {    
                  }).catch((error) => {
                    
                  });
                // Signed in 
                const user = userCredential.user;

            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => {
                setLoading(false)
            })
            ;
    }

    // Google Log In 
    const signInwithGoogle = (location, navigate) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                navigate(destination)
                const user = result.user;
                saveUser(user.email, user.displayName, "PUT")
                setAuthError('')

            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setLoading(false)
            });
    }

    // login User
    const logInUser = (email, password, location, navigate) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination)

                setAuthError("")
                const user = userCredential.user;

            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setLoading(false)
            });
    }


    // observer user Sate 
    useEffect(() => {
        const unsubcrible = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                    setToken(idToken)
                })
            } else {
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubcrible;
    }, [])

    // saveUser Data send 
    useEffect(() => {
        fetch(`https://shrouded-retreat-34385.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])


    //logot
    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {

            // An error happened.
        })
            .finally(() => {
                setLoading(false)
            })
            ;
    }

    // save user fect
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://shrouded-retreat-34385.herokuapp.com/users', {
            method:method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        token,
        admin,
        registerUser,
        logOut,
        logInUser,
        signInwithGoogle,
        loading,
        authError
    }
}
export default useFirebase;