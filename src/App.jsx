import './App.css'
import {useState} from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Welcome from './Components/Welcome'
import Courses from './Components/Courses'
import Students from './Components/Students'
import Staff from './Components/Staff'


function App() {

const [activeComponent, setActiveComponent] = useState('welcome')

const renderComponent = () => {
  switch(activeComponent) {
    case 'staff' :
      return <Staff />
    case 'students' :
      return <Students />
    case 'courses' :
      return <Courses />
    case 'welcome' :
      return <Welcome />
    default : <Welcome />;
  }
}


  return (
    <>
      <Banner></Banner>
      <Navbar setActiveComponent={setActiveComponent}></Navbar>
      <main>
        {renderComponent()}
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
