import React, { useState } from 'react';
import './Rate.scss';


export default function Rate(props) {

    const backgroundUp = {
        backgroundColor: props.backgroundUp,
      };
      const backgroundCenter = {
        backgroundColor: props.backgroundCenter,
      };

    const [selected, setSelected] = useState('');

    function handleChange() {
        setSelected(selected ? '' : 'selected');
    }

    return (
        <section onClick={handleChange} className={`rateCard ${selected}`}>
            <h1 className='title' style={backgroundUp}>Безлимитный {props.price}</h1>
            <div className='price' style={backgroundCenter}>
                <div className='price__container'>
                    <div className='price__container_currency'>руб</div> <span>{props.price}</span>/мес
                    </div>
            </div>
            <div className='speed'>до {props.speed} Мбит/сек</div>
            <div className='text'>Объём включенного трафика не ограничен</div>
        </section>
    )
}