import { useContext } from 'react'
import { AppContext } from '../context'

const Experience = () => {
  const {
    experience: { data, submitted, isEditing },
    handleChange,
    handleSubmit,
    handleEdit,
  } = useContext(AppContext)

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleDateString('pt-PT')
  }

  return (
    <div className="experience-section">
      <h4>Experience</h4>

      {isEditing ? (
        <form className="form" onSubmit={handleSubmit('experience')}>
          <div className="form-row">
            <label htmlFor="company" className="form-label">
              Company*
            </label>
            <input
              type="text"
              className="form-input"
              name="company"
              id="company"
              value={data.company}
              onChange={handleChange('experience')}
              placeholder="Enter company name"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="position" className="form-label">
              Position title*
            </label>
            <input
              type="text"
              className="form-input"
              name="position"
              id="position"
              value={data.position}
              onChange={handleChange('experience')}
              placeholder="Enter title position"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="responsibilities" className="form-label">
              responsibilities
            </label>
            <input
              type="text"
              className="form-input"
              name="responsibilities"
              id="responsibilities"
              value={data.responsibilities}
              onChange={handleChange('experience')}
              placeholder="Enter main responsibilities"
            />
          </div>

          <div className="form-row">
            <label className="form-label">Period</label>
            <div className="date-group">
              <input
                type="date"
                className="form-input"
                name="startDate"
                id="startDate"
                value={data.startDate}
                onChange={handleChange('experience')}
              />
              <span>to</span>
              <input
                type="date"
                className="form-input"
                name="endDate"
                id="endDate"
                value={data.endDate}
                onChange={handleChange('experience')}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-block">
            Save
          </button>
        </form>
      ) : (
        <div className="form-display">
          <div className="form-row">
            <label className="form-label">Company</label>
            <p>{submitted.company || 'Not specified'}</p>
          </div>

          <div className="form-row">
            <label className="form-label">Position title</label>
            <p>{submitted.position || 'Not specified'}</p>
          </div>

          <div className="form-row">
            <label className="form-label">Main responsibilities</label>
            <p>{submitted.responsibilities || 'Not specified'}</p>
          </div>

          <div className="form-row">
            <label className="form-label">Period</label>
            <p>
              {formatDate(submitted.startDate)}-{formatDate(submitted.endDate)}
            </p>
          </div>

          <button
            type="button"
            className="btn btn-block"
            onClick={handleEdit('experience')}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  )
}

export default Experience
