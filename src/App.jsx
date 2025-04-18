import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Experience from './components/Experience'
import Education from './components/Education'
import Title from './components/Title'
import Settings from './components/Settings'

function App() {
  return (
    <main>
      <Settings />
      <Title />
      <GeneralInfo />
      <Education />
      <Experience />
    </main>
  )
}

export default App
