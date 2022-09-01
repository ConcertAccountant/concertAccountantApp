import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import { Link } from "react-router-dom";
import {auth} from './Firebase';
<<<<<<< HEAD
import SearchResults from "./SearchResults";
import GetPrivateList from './GetPrivateList';
import GetList from './GetList';
import { Link} from "react-router-dom";
=======
import Nav from "./Nav";
import Header from "./Header";
>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37

function Login () {
    
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, loginRegisterEmail] = useState("");
    const [loginPassword, loginRegisterPassword] = useState("");
    const [ modal, setModal ] = useState(false);
    const [user, setUser] = useState({});

    useEffect (() => { onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser.uid);
    })
<<<<<<< HEAD
}, [user]);
=======
    }, [user]);

    console.log(user)

>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37

    const register = async () => {
        try {
            await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        } catch (error) {
        }
    }

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        } catch (error) {
        }
    }

    const logout = async () => {
        await signOut(auth);
    }

    const toggleModal = () => {
        setModal(!modal);
    }
    
    if(modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }

    return (
<<<<<<< HEAD

        <>
        <div className="login">

            <div>
                <h3>Register</h3>
                <input placeholder="email" onChange={(e) => {
                    setRegisterEmail(e.target.value);
                } }></input>
                <input placeholder="password" onChange={(e) => {
                    setRegisterPassword(e.target.value);
                } }></input>

                <button onClick={register}>create user</button>
            </div>
=======
        <>
        <Nav user={user}/> 
        <Header />
            <div className="authorization wrapper">
                <div className="login">
                    <h3>Login</h3>
                    <input 
                        placeholder="email" 
                        onChange={(e) => {
                        loginRegisterEmail(e.target.value);
                        }}>
                    </input>
>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37

                    <input 
                        placeholder="password" 
                        onChange={(e) => {
                        loginRegisterPassword(e.target.value);
                        }}>
                    </input>

                    <button 
                        onClick={login}
                        disabled={!(loginEmail  && loginPassword)}
                        ><Link to={{pathname:"/SearchResults", search:`?userid=${user}`}}>Log In</Link>
                    </button>

                    <p>
                        Don't have an account? 
                        <button 
                        onClick={toggleModal}
                        className="signUpBtn"> 
                        Sign Up
                        </button>
                    </p>
                </div>
            
            
          <div>
            <h3>User logged in</h3>
            <p>{user?.email}</p>
            <button onClick={logout}>logout</button>
          </div>

                {
                    modal && (
                        <div className="signUpModal">
                            <div className="overlay">
                                <div className="register">
                                    <h3>Register</h3>
                                    <input 
                                        placeholder="email" 
                                        onChange={(e) => {
                                        setRegisterEmail(e.target.value);
                                        }}>
                                    </input>

                                    <input 
                                        placeholder="password" 
                                        onChange={(e) => {
                                        setRegisterPassword(e.target.value);
                                        }}>
                                    </input>

                                    <button 
                                        onClick={register}
                                        disabled={!(registerEmail  && registerPassword)}
                                        className="signUpBtn"> <Link to={{pathname:"/SearchResults", search:`?userid=${user}`}}>Sign Up</Link>
                                    </button>

                                    <button
                                        className="closeSignUp"
                                        onClick={toggleModal}
                                        >X
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
<<<<<<< HEAD

        </div>
        <ul>
            <li><Link to="/components/SearchResults">Search For An Event</Link></li>
            <li> <Link to="/components/GetList">View the Public Lists</Link></li>
        </ul>
       
           

        {/* 

        <section>
            <div className="privateListContainer wrapper">
                <GetPrivateList user={user}/> 
            </div>
        </section> */}
        </>

=======
        </>
>>>>>>> af538e56e497447db882f4abc4a30c657d83ed37
    )
}

export default Login;