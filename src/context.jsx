import { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  // Estado para a secção Education
  const [education, setEducation] = useState({
    data: { school: '', field: '', degree: '', startDate: '', endDate: '' },
    submitted: null, // Dados submetidos (modo visualização)
    isEditing: true, // true = modo edição, false = modo visualização
  })

  // Estado para a secção Experience
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

  // Estado para a secção General Info
  const [generalInfo, setGeneralInfo] = useState({
    data: { name: '', email: '', phone: '' },
    submitted: null,
    isEditing: true,
  })

  /**
   * Manipulador genérico de alterações em inputs
   * @param {string} section - Nome da seção ('education', 'experience', 'generalInfo')
   * @returns {function} Função handler para o evento onChange
   */
  const handleChange = (section) => (e) => {
    const { name, value } = e.target

    // Mapeia cada seção para sua função de atualização correspondente
    const updater = {
      education: setEducation,
      experience: setExperience,
      generalInfo: setGeneralInfo,
    }

    // Atualiza o estado usando a função correspondente à seção
    updater[section]((prev) => ({
      ...prev, // Mantém o resto do estado
      data: {
        ...prev.data, // Mantém os outros campos
        [name]: value, // Atualiza apenas o campo que mudou
      },
    }))
  }

  /**
   * Manipulador genérico de submit de formulários
   * @param {string} section - Nome da seção
   * @param {Event} e - Evento do formulário
   */
  const handleSubmit = (section) => (e) => {
    e.preventDefault()

    const updater = {
      education: setEducation,
      experience: setExperience,
      generalInfo: setGeneralInfo,
    }

    // Ao submeter:
    updater[section]((prev) => ({
      data: prev.data, // Mantém os dados atuais (pode limpar se quiser)
      submitted: prev.data, // Salva cópia dos dados submetidos
      isEditing: false, // Sai do modo edição
    }))
  }

  /**
   * Ativa o modo edição para uma seção
   * @param {string} section - Nome da seção a editar
   */
  const handleEdit = (section) => () => {
    const updater = {
      education: setEducation,
      experience: setExperience,
      generalInfo: setGeneralInfo,
    }

    // Entra no modo edição
    updater[section]((prev) => ({
      ...prev,
      isEditing: true,
    }))
  }

  return (
    <AppContext.Provider
      value={{
        education,
        experience,
        generalInfo,
        handleChange,
        handleSubmit,
        handleEdit,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
