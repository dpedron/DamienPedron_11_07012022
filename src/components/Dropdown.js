import chevron from '../assets/chevron-drop.png'

function Dropdown(props){
    const title = props.title;
    const content = props.content;
    const select = props.select;

    const hideShow = () => {
        const dropContent = document.querySelector('.dropdown--content--' + select);
        const chevron = document.querySelector('.chevron--' + select);
        if(dropContent.classList.contains("close")){
            dropContent.style.display = 'block';
            dropContent.classList.remove("close");
            chevron.style.transform = 'rotate(180deg)';
        } else {
            dropContent.style.display = 'none';
            dropContent.classList.add("close");
            chevron.style.transform = 'rotate(0deg)';
        }
    } 

           
    

    return (
        <div className='dropdown'>
            <button className="dropdown--title" onClick={hideShow}>
                {title}
                <img className={`chevron chevron--${select}`} src={chevron} alt=''/>
            </button>
            <div className={`dropdown--content dropdown--content--${select} close`}>{content}</div>
        </div>
    )
}

export default Dropdown;