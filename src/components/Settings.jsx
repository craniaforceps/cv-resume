import React from 'react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useGlobalContext } from '../context' // Corrigindo a importação para o arquivo correto

const Settings = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext() // Usando o hook customizado

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  )
}

export default Settings
