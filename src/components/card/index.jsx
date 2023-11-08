import './card.css'

export default()=>{
    return (<div className='card-wrapper'>
        <div className='card'>
            <div className='card-img-frame'>
                <img className='card-img'  src='democardimg.png'/>
            </div>
            <div className='card-content'>
                <span className='card-content-pill'>
                    100 Follows
                </span>
            </div>
        </div>
        <p className='card-label'>New English Songs</p>
    </div>)
}