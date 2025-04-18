import { useContext, useState } from 'react'
import { AppContext } from '../context'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { Container } from 'postcss'

const Education = () => {
  const [showMore, setShowMore] = useState(true)

  const {
    education: { data, submitted, isEditing },
    handleChange,
    handleSubmit,
    handleEdit,
  } = useContext(AppContext)

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleDateString('pt-PT')
  }

  return (
    <div className="education-section">
      <div className="section-title-container">
        <h4>Education</h4>
        <button className="show-more" onClick={() => setShowMore(!showMore)}>
          {showMore ? <FaPlus /> : <FaMinus />}
        </button>
      </div>
      {showMore ? null : (
        <div className="form-container">
          {isEditing ? (
            <form className="form" onSubmit={handleSubmit('education')}>
              <div className="form-row">
                <label htmlFor="school" className="form-label">
                  School*
                </label>
                <input
                  type="text"
                  className="form-input"
                  name="school"
                  id="school"
                  value={data.school}
                  onChange={handleChange('education')}
                  placeholder="Enter school name"
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="field" className="form-label">
                  Field of Studies*
                </label>
                <input
                  type="text"
                  className="form-input"
                  name="field"
                  id="field"
                  value={data.field}
                  onChange={handleChange('education')}
                  placeholder="Enter field of study"
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="degree" className="form-label">
                  Degree
                </label>
                <input
                  type="text"
                  className="form-input"
                  name="degree"
                  id="degree"
                  value={data.degree}
                  onChange={handleChange('education')}
                  placeholder="Enter degree"
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
                    onChange={handleChange('education')}
                  />
                  <span>to</span>
                  <input
                    type="date"
                    className="form-input"
                    name="endDate"
                    id="endDate"
                    value={data.endDate}
                    onChange={handleChange('education')}
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
                <label className="form-label">School</label>
                <p>{submitted.school || 'Not specified'}</p>
              </div>

              <div className="form-row">
                <label className="form-label">Field of Studies</label>
                <p>{submitted.field || 'Not specified'}</p>
              </div>

              <div className="form-row">
                <label className="form-label">Degree</label>
                <p>{submitted.degree || 'Not specified'}</p>
              </div>

              <div className="form-row">
                <label className="form-label">Period</label>
                <p>
                  {formatDate(submitted.startDate)}{' '}
                  {formatDate(submitted.endDate)}
                </p>
              </div>

              <button
                type="button"
                className="btn btn-block"
                onClick={handleEdit('education')}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Education
