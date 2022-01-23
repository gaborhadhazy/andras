import React, {useEffect, useState} from 'react';
import axios from "axios";


function Slider(props) {
    const [slider, setSlider] = useState([])
    const [current_index, set_current_index] = useState(0)

    const step_action = (value) => {
      let _index = current_index
        _index += value

        if(_index > slider.length -1) {
            _index = 0
        }else if (_index < 0) {
            _index = slider.length -1
        }

        set_current_index(_index)
    }

    const fetch_slider = () => {
        axios ({
            method: "get",
            url: "http://localhost:3001/slider"
        }).then(res => setSlider(res.data))
    }

    useEffect(() => {
        fetch_slider()
    }, [])

    return (
        <div className="slider-container">
          <div className="image-container">
              {
                  slider.map((slider_item, index) => <img key={slider_item.id} className={`slider-image ${current_index === index? "active":""}`} src={slider_item.img} alt=""/>)
              }
          </div>

            <div className="step-button-container">
                <i className="fas fa-chevron-left" onClick={e => step_action(-1)}/>
                <i className="fas fa-chevron-right" onClick={e => step_action(+1)}/>
            </div>
        </div>
    );
}

export default Slider;