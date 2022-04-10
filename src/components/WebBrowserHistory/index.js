import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class WebBrowserHistory extends Component {
  state = {searchValue: '', historyList: this.props}

  filteredHistoryItems = event =>
    this.setState({searchValue: event.target.value})

  deleteHistory = historyId => {
    const {historyList} = this.state
    let filteredHistoryItems

    if (typeof historyList.length !== 'number') {
      const {initialHistoryList} = historyList
      filteredHistoryItems = initialHistoryList.filter(
        historyItem => historyItem.id !== historyId,
      )
    } else {
      filteredHistoryItems = historyList.filter(
        historyItem => historyItem.id !== historyId,
      )
    }

    this.setState({historyList: filteredHistoryItems})
  }

  render() {
    const {searchValue, historyList} = this.state
    let filteredHistoryResults

    if (typeof historyList.length !== 'number') {
      const {initialHistoryList} = historyList
      filteredHistoryResults = initialHistoryList.filter(historyItem =>
        historyItem.title.toLowerCase().includes(searchValue.toLowerCase()),
      )
    } else {
      filteredHistoryResults = historyList.filter(historyItem =>
        historyItem.title.toLowerCase().includes(searchValue.toLowerCase()),
      )
    }

    const isHistoryNull = filteredHistoryResults.length !== 0
    const nullHistoryClass = isHistoryNull ? null : 'no-history'

    return (
      <div>
        <div className="history-top-view">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search"
            />
            <div>
              <hr className="vertical-line" />
            </div>
            <input
              type="search"
              placeholder="Search history"
              className="input"
              onChange={this.filteredHistoryItems}
              value={searchValue}
            />
          </div>
        </div>
        {isHistoryNull && (
          <div className="container">
            <ul className="history-container">
              {filteredHistoryResults.map(historyItem => (
                <HistoryItem
                  historyItem={historyItem}
                  functionName={this.deleteHistory}
                  key={historyItem.id}
                />
              ))}
            </ul>
          </div>
        )}
        {!isHistoryNull && (
          <p className={nullHistoryClass}>There is no history to show</p>
        )}
      </div>
    )
  }
}

export default WebBrowserHistory
