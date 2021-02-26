import { useEffect, useRef, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Alert } from 'react-bootstrap'
// import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
// import axios from "";
// import './Singup.css'



const Signup = () => {
    const url = "http://localhost:3001";
    // const history = useHistory();
    let name = useRef();
    let email = useRef();
    let password = useRef();
    let passwordConfirm = useRef();
    // const { signup } = useAuth();
    // const { signup, currentUser } = useAuth();
    let [error, setError] = useState('')
    let [loading, setLoading] = useState(false)
    let history = useHistory()
    
    
     async function signup() {
        // e.preventDefault()
        
        console.log(email.current.state.innerValue);
        // console.log(password.current.value );
        // console.log(passwordConfirm.current.value );
        if (password.current.state.innerValue !== passwordConfirm.current.state.innerValue) {
// alert('Password do not match')
            return setError('Password do not match')

        } 
        try {
            setError("login succes full")
            setLoading(true)
            // await signup(email.current.state.innerValue, password.current.state.innerValue)
            // history.push("/product")
            axios({
                method: 'post',
                url: url + '/auth/signup',
                data: {
                   name:name.current.state.innerValue,
                   email:email.current.state.innerValue,
                   password:password.current.state.innerValue,
                }
            }).then((response) => {
                if (response.data.status === 200) {
                    alert(response.data.message)
                } else {
                    alert(response.data.message);
                }
            }).catch((error) => {
                console.log(error);
            });
        }
         catch {
            setError('Fail to craete an account')

        }

        setLoading(false)
    }

    return (

        <MDBContainer className="singup_boader">
            <MDBRow>
                <MDBCol md="6">
                    <form noValidate
                        onSubmit={(e) => {
                            e.preventDefault();
                            signup();
                        }}>
                        <h1 className="h1 text-center mb-4">Sign up</h1>
                    {/* {currentUser.email} */}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <div className="grey-text">
                        <MDBInput label="Type your name" icon="user" type="text" ref={name} validate />
                        <MDBInput label="Type your email" icon="envelope" type="email"     ref={email}  />
                        <MDBInput label="Type your password" icon="lock" type="password" ref={password} validate />
                        <MDBInput label="Type your RE-password" icon="lock" type="password" ref={passwordConfirm} validate />
                    </div>
                    <div className="text-center">
                        <MDBBtn disabled={loading} type="submit">Sign up</MDBBtn>
                        <p>Alerady Have an account? <Link to="./Login">Log In</Link> </p>
                    </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer >

    );
};

export default Signup;