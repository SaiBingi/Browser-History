import './index.css'

const HistoryItem = props => {
  const {historyItem, functionName} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onDeleteHistory = () => functionName(id)

  return (
    <li className="history-item">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="domain-delete">
        <div className="domain-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="domain-content">
            <p className="domain-title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <div className="delete-icon">
          <button
            type="button"
            testid="delete"
            className="button"
            onClick={onDeleteHistory}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
