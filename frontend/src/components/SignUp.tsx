import { signUpUser } from "../utils/api/users";

const SignUp = (props: SignUpProps) => {
  const { setSignUp } = props;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { elements }: any = event.target;

    signUpUser({
      firstname: elements.firstname.value,
      name: elements.name.value,
      email: elements.email.value,
      password: elements.password.value,
    });
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
          >
            <h1 className="mb-8 text-3xl text-center">S'inscrire</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              placeholder="Nom"
              required
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="firstname"
              placeholder="Prénom"
              required
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              required
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              required
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
              required
            />

            <button className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1">
              Create Account
            </button>
          </form>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <button
              className="no-underline border-b border-blue text-blue ml-6"
              onClick={() => setSignUp(false)}
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

type SignUpProps = {
  setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
};

export default SignUp;
