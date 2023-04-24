import {signInWithGoogle} from '../../firebase';
const Login =()=>{
    return (
        <div className ="dashboard">
            <button onClick ={signInWithGoogle}>
                Sign in Google
            </button>

        </div>
    )
}
export default Login;