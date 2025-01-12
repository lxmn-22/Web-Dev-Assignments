import { useState } from "react";
import { Flip, ToastContainer, toast } from 'react-toastify';
import User from "./components/User";

// form-validation-react
function App() {

  // Two way binding using useState Hook.
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  // OPTIMIZED: 
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  const handleChanges = (e) => {
    // destructuring object.
    const{ name, value } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]:value
    }))
  }

  const [error, setError] = useState("");

  // declaring useState Hook, which will store the users data.
  const [users, setUsers] = useState([]);
  
  const notify = () => toast.success("Account Created");

  // To stop page reloading/re-rendering, creating form-handler.
  const submitHandler = (e) => {
    // ".preventDefault()" stops the default behaviour of an event in the component/app.
    // prevent page reload
    e.preventDefault();

    // Checking password length.
    if(formData.password.length < 8) {
      setError("Password must be 08 character long");
      return;
    }

    // Checking whether password & confirm password matches or not.
    if(formData.password != formData.confirmPassword) {
      setError("Password & Confirm Password must be same");
      return;
    }

    // Regex to verify at least a capital letter in password.
    if(!/[A-Z]/.test(formData.password)) {
      setError("Password must contain any capital letter");
      return;
    }

    // Regex to verify special characters in password.
    if(!/[!@#$%^&*()<>,."]/.test(formData.password)) {
      setError("Password must contains any special character");
      return;
    }

    /* 
      "users" declared empty array, here i used spread function on users, it'll store all the
      data into it whoever creates account their credentials will be stored in "users".
    */
    // setUsers([...users,{ name, email, password }]);

    setUsers((prevUsers) => [
      ...prevUsers, {
        name:formData.name,
        email:formData.email,
        password:formData.password
      }
    ]);

    // Declared "null" after clicking to submit button to reset the input fields.
    setError("")
    // setName("")
    // setEmail("")
    // setPassword("")
    // setConfirmPassword("")

    setFormData({
      name:"",
      email:"",
      password:"",
      confirmPassword:""
    })
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="w-96 rounded-lg p-6">
          <div className="w-full shadow-md rounded-lg p-6 max-w-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-7 text-center">Create an Account</h2>

            <form onSubmit={(e) => { submitHandler(e) }} className="flex flex-col gap-4">
              <input 
              className="w-full border border-gray-300 text-sm px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" 
              type="text" 
              name="name"
              placeholder="Name"
              value={formData.name} 
              onChange={handleChanges} 
              required
              />
              <input
              className="w-full border border-gray-300 text-sm px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" 
              type="email" 
              name="email"
              placeholder="Email" 
              value={formData.email} 
              onChange={handleChanges} 
              required 
              />
              <input 
              className="w-full border border-gray-300 text-sm px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" 
              type="password" 
              name="password"
              placeholder="Password" 
              value={formData.password} 
              onChange={handleChanges} 
              required
              />
              <input 
              className="w-full border border-gray-300 text-sm px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" 
              type="password" 
              name="confirmPassword"
              placeholder="Confirm Password" 
              value={formData.confirmPassword} 
              onChange={handleChanges} 
              required 
              />

              {error && (
                <p className="text-red-600 text-xs font-semibold">
                  {error}
                </p>
              )}

              <button onClick={notify} className="bg-blue-500 w-full rounded text-white py-1.5">
                Submit
              </button>
            </form>
          </div>
          <p className="text-xs text-gray-600 mt-5 text-center">By registering, you agree to our <span className="text-indigo-500">Terms & Conditions</span> and <span className="text-indigo-500">Privacy Policy</span>.</p>
        </div>
        <ToastContainer 
          position="top-center" 
          autoClose={3000}
          closeOnClick={false}
          transition={Flip}
        />
      </div>
      
      {/* Checking whether "users" storing the user data. */}
      {users.map(function(element, index) {
          return <User key={index} element={element} />
      })}
    </>
  )
}

export default App
