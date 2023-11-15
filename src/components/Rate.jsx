import React from 'react';
import './Rate.scss';


export default function Rate(props) {

    const backgroundUp = {
        backgroundColor: props.backgroundUp,
      };
      const backgroundCenter = {
        backgroundColor: props.backgroundCenter,
      };

      const isSelected = props.selected;
      let selectedStyle;
      isSelected && (selectedStyle = 'selected');

    return (
        <section className={`rateCard ${selectedStyle}`}>
            <h1 className='title' style={backgroundUp}>Безлимитный {props.price}</h1>
            <div className='price' style={backgroundCenter}>
                <div className='price__container'>
                    <div className='price__container_currency'>руб</div> <span>{props.price}</span>/мес
                    </div>
            </div>
            <div className='speed'>до {props.speed} Мбит/сек</div>
            <div className='text'>Объём включённого трафика не ограничен</div>
        </section>
    )
}