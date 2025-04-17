import { useContext } from 'react'
import { AppContext } from '../context'

const GeneralInfo = () => {
  const {
    generalInfo: { data, submitted, isEditing },
    handleChange,
    handleSubmit,
    handleEdit,
  } = useContext(AppContext)

  return (
    <div className="general-info-section">
      <h4>General Information</h4>

      {isEditing ? (
        <form className="form" onSubmit={handleSubmit('generalInfo')}>
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              Name*
            </label>
            <input
              type="text"
              className="form-input"
              name="name"
              id="name"
              value={data.name}
              onChange={handleChange('generalInfo')}
              placeholder="Your full name"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="email" className="form-label">
              Email*
            </label>
            <input
              type="email"
              className="form-input"
              name="email"
              id="email"
              value={data.email}
              onChange={handleChange('generalInfo')}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="phone" className="form-label">
              Phone number
            </label>
            <input
              type="tel"
              className="form-input"
              name="phone"
              id="phone"
              value={data.phone}
              onChange={handleChange('generalInfo')}
              placeholder="+123 456 7890"
            />
          </div>

          <button type="submit" className="btn btn-block">
            {submitted ? 'Update' : 'Submit'}
          </button>
        </form>
      ) : (
        <div className="form-display">
          <div className="form-row">
            <label className="form-label">Name</label>
            <p>{submitted.name || 'Not specified'}</p>
          </div>

          <div className="form-row">
            <label className="form-label">Email</label>
            <p>{submitted.email || 'Not specified'}</p>
          </div>

          <div className="form-row">
            <label className="form-label">Phone number</label>
            <p>{submitted.phone || 'Not specified'}</p>
          </div>

          <button
            type="button"
            className="btn btn-block"
            onClick={handleEdit('generalInfo')}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  )
}

export default GeneralInfo
