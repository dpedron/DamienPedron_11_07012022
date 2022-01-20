import chevron from '../assets/chevron-drop.png';
import '../styles/css/Dropdown.css';

/**
 * This is the dropdown component used in housing and about pages
 */

function Dropdown(props) {
  const title = props.title; // Set the title of the dropdown
  const content = props.content; // Set the content of the dropdown

  return (
    <div className="dropdown">
      <button
        className="dropdown--title close" // Close class is used to display/hide dropdown content and rotate the chevron
        onClick={
          (e) =>
            e.currentTarget.classList.contains('close') // The dropdown is closed ...
              ? e.currentTarget.classList.remove('close') // open him
              : e.currentTarget.classList.add('close') // The dropdown is opened, close him
        }
      >
        {title}
        <img className={`chevron`} src={chevron} alt="" />
      </button>
      <div className={`dropdown--content`}>{content}</div>
    </div>
  );
}

export default Dropdown;
