import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import HookForm from './components/HookForm/HookForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import RefForm from './components/RefForm/RefForm';
// import ReusableForm from './components/ReusableForm/ReusableForm';

function App() {

  // const handleSignUp = (data) => {
  //   // e.preventDefault()
  //   console.log('sign up', data)
  // }
  // const handleUpdateProfile = (data) => {
  //   // e.preventDefault()
  //   console.log('Update Profile', data)
  // }

  return (
    <>
     {/* <SimpleForm /> */}
     {/* <StatefulForm /> */}
     {/* <RefForm /> */}
     {/* <HookForm /> */}
     {/* <ReusableForm 
     formTitle={"Sign up"} 
     handleSubmit={handleSignUp}>
      <div>
        <h2>Sign Up</h2>
        <p>You have to sign up to see your profile</p>
      </div>
     </ReusableForm>
     <ReusableForm 
     formTitle={'Profile Update'} 
     handleSubmit={handleUpdateProfile} 
     submitBtnTitle="Update">
      <div>
        <h2>Update Profile</h2>
        <p>Always up to date your profile</p>
      </div>
     </ReusableForm> */}
     <Grandpa />
    </>
  )
}

export default App
