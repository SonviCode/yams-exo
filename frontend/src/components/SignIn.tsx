import { loginUser } from "../utils/api/users";

const SignIn = (props: SignInProps) => {
  const { setSignUp } = props;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { elements }: any = event.target;

    loginUser(elements.email.value, elements.password.value);
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
          >
            <h1 className="mb-8 text-3xl text-center">Se connecter</h1>

            <input
              type="text"
              className="inputFormConnexion"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="inputFormConnexion"
              name="password"
              placeholder="Password"
            />

            <button className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1">
              Se connecter
            </button>
          </form>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <button
              onClick={() => setSignUp(true)}
              className="no-underline border-b border-blue text-blue ml-6"
            >
              Log in
            </button>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

type SignInProps = {
  setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
};

export default SignIn;
