// Write your code here
import './index.css'

const TabItem = props => {
  const {onClickTabUpdate, tabId, displayText} = props

  const onClickTab = () => {
    onClickTabUpdate(tabId)
  }

  return (
    <li>
      <button className="tab-button" onClick={onClickTab} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
