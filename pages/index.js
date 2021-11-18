import firebase from '../firebase'
import Button from '../components/ui/button'
import GoogleProvider from '../components/auth/provider/google'

import NavBar from '../components/navbar'
import Brand from './../components/branding'

export default function Home() {
  
  return (
     <div>
       <NavBar/>
       <Brand title="Home Page" tagline="directory app start"/>

      <Button bgcolor="tomato" color="white">
        {/* children */}
        sign up with firebase
      </Button>

      <GoogleProvider>sign up with google</GoogleProvider>

      {/* <Button bgcolor="blue" color="white">sign up with something</Button>
      <Button bgcolor="orange" color="white">sign up with something</Button> */}
     </div>
     
       
    
  )
}
