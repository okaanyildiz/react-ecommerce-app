import { signInWithGooglePopup } from '../utils/Firebase'

function SignIn() {

    async function logGoogleUser() {
        const response = await signInWithGooglePopup();
        console.log(response)
    }

    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    )
}

export default SignIn