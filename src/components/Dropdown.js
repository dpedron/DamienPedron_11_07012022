import chevron from '../assets/chevron-drop.png';
import '../styles/css/Dropdown.css';

function Dropdown(props){
    const title = props.title;
    const content = props.content;
    const select = props.select;
    
    return (
        <div className='dropdown'>
            <button className="dropdown--title close" onClick={ (e) => e.currentTarget.classList.contains("close") ? e.currentTarget.classList.remove("close") : e.currentTarget.classList.add("close")}>
                {title}
                <img className={`chevron chevron--${select}`} src={chevron} alt=''/>
            </button>
            <div className={`dropdown--content dropdown--content--${select} `}>{content}</div>
        </div>
    )
}

export default Dropdown;