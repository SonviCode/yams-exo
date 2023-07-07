import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import { useState } from 'react';



function App() {
  const [signUp, setSignUp] = useState<boolean>(false);

  return (
    <>
      {/* <h1 className="">YAMS</h1> */}
      {signUp ? (
        <SignUp setSignUp={setSignUp} />
      ) : (
        <SignIn setSignUp={setSignUp} />
      )}
    </>
  )
}

export default App
