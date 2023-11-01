import './card.css'

const Card = (properties) => {
    return (
        <div className='card'>
            <ul classname="catalog">
                <li className='product'>
                    <div className='cover_image'>
                        <img src={properties.imgUrl} alt='meal_image' className='product_image'/>
                    </div>
                    <div className='content'>
                        <div className='cover_title'>
                            <h5 className='title'>{properties.title}</h5>
                        </div>
                        <div className='product_footer'>
                            <p className='subtitle'>{properties.subtitle}</p>
                            <p className='price'>{properties.price}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
} 

export default Card;