import React from 'react';
import { useSpring, animated, config } from 'react-spring';

import cellGradient from '../images/cell-gradient-reverse.jpg';

const NameSection = (props) => {

    const titleSpring = useSpring({from:{
                                    opacity: 0,
                                    marginRight: '10rem',
                                    textShadow: '0px 0px #555555'
                                    }, to:{
                                    opacity: 1,
                                    marginRight: '1rem',
                                    textShadow: '2px 2px #DDDDDD',
                                }, config:config.slow});

    return (
        <div className="h-72 md:h-88 lg:h-96 w-full shadow-md bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${cellGradient})`}} > 
          <div style={{ backgroundImage: `url(${props.img})` }} className="flex flex-row h-56 md:h-72 lg:h-80 w-full bg-fixed bg-cover " >
          </div>
            <animated.div style={titleSpring} className="absolute font-bold text-5xl text-bee right-0 z-30">
              {props.title}
            </animated.div>
        </div>
    );
};

export default NameSection;