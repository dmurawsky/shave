import Link from 'next/link'
import PropTypes from 'prop-types'
 // is-active
const liClassName = (gaps, active) => (gaps && active ?
  'steps-segment has-gaps is-active' : gaps && !active ?
  'steps-segment has-gaps' : !gaps && active ?
  'steps-segment is-active' :
  'steps-segment'
)

const Step = ({icon, linked, href, first, heading, gaps, hollow, active}) => (linked ? (
  <li id={first?'firstStep':''} className={liClassName(gaps, active)}>
    <Link href={href}>
      <a className="has-text-dark">
        <span className={hollow?'steps-marker is-hollow':'steps-marker'}>
          <span className="icon"><i className={'fa fa-' + icon}></i></span>
        </span>
        <div className="steps-content"><p className="heading">{heading}</p></div>
      </a>
    </Link>
  </li>
) : (
  <li className={liClassName(gaps, active)}>
    <span className={hollow?'steps-marker is-hollow':'steps-marker'}>
      <span className="icon"><i className={'fa fa-' + icon}></i></span>
    </span>
    <div className="steps-content"><p className="heading">{heading}</p></div>
  </li>
))

Step.propTypes = {
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  first: PropTypes.bool.isRequired,
  linked: PropTypes.bool,
  gaps: PropTypes.bool,
  hollow: PropTypes.bool,
}

export default Step
