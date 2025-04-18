import { createContext, useState, useEffect, useContext } from 'react'

// Criando o AppContext
export const AppContext = createContext()

// Função para verificar o tema preferido pelo usuário
const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches
  const storedDarkMode = localStorage.getItem('darkTheme') === 'true'
  return storedDarkMode || prefersDarkMode
}

// O AppProvider vai envolver o restante do app e prover o contexto
export const AppProvider = ({ children }) => {
  // Dark mode state
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())

  // Função para alternar entre dark mode e light mode
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  }

  // Estados para as seções de educação, experiência e informações gerais
  const [education, setEducation] = useState({
    data: { school: '', field: '', degree: '', startDate: '', endDate: '' },
    submitted: null,
    isEditing: true,
  })

  const [experience, setExperience] = useState({
    data: {
      company: '',
      position: '',
      responsibilities: '',
      startDate: '',
      endDate: '',
    },
    submitted: null,
    isEditing: true,
  })

  const [generalInfo, setGeneralInfo] = useState({
    data: { name: '', email: '', phone: '' },
    submitted: null,
    isEditing: true,
  })

  // Funções para manipular dados das seções
  const handleChange = (section) => (e) => {
    const { name, value } = e.target
    const updater = {
      education: setEducation,
      experience: setExperience,
      generalInfo: setGeneralInfo,
    }

    updater[section]((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value,
      },
    }))
  }

  const handleSubmit = (section) => (e) => {
    e.preventDefault()
    const updater = {
      education: setEducation,
      experience: setExperience,
      generalInfo: setGeneralInfo,
    }

    updater[section]((prev) => ({
      data: prev.data,
      submitted: prev.data,
      isEditing: false,
    }))
  }

  const handleEdit = (section) => () => {
    const updater = {
      education: setEducation,
      experience: setExperience,
      generalInfo: setGeneralInfo,
    }

    updater[section]((prev) => ({
      ...prev,
      isEditing: true,
    }))
  }

  // Efeito para aplicar o tema escuro ao corpo da página
  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])

  return (
    <AppContext.Provider
      value={{
        education,
        experience,
        generalInfo,
        handleChange,
        handleSubmit,
        handleEdit,
        isDarkTheme,
        toggleDarkTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Hook customizado para acessar o contexto global
export const useGlobalContext = () => useContext(AppContext)
