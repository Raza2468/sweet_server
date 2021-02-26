import { Link, useHistory } from 'react-router-dom';

function Login() {
    return(
       
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
                        <MDBBtn disabled={loading} type="submit">Log in</MDBBtn>
                        {/* <p>Alerady Have an account? <Link to="./Login">Log In</Link> </p> */}
                    </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer >

    )

}
export {
    Login
}