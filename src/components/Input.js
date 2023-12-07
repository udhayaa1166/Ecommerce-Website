function Input({ handleChange, value, title, name, color }){
    return(
    <label className='sidebar-label-container'>
        <input type='radio' name={name} onChange={handleChange} value={value}/>
        <span style={{ backgroundColor: color }} className='checkmark'></span>{title}
    </label>
 );
} 

export default Input