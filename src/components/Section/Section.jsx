import './section.css'
import Card from '../cards/Card'

const Section = (properties) => {

    const result = [];
    Object.keys(properties.data).forEach((key, index) => {
        result.push(properties.data[key]);
    });

    return (
        <div className='section'>
            <div className='container'>
                <div className="section_header">
                    <h2 className='title2'>{properties.title}</h2>
                </div>
                <div className="section_cards">
                {result.map((meal, index) => {
                    return (
                        <Card title={meal.title} subtitle={meal.subtitle} imgUrl={meal.image} price={meal.price}/>
                    )
                })}
                </div>
            </div>
        </div>
    );
} 

export default Section;