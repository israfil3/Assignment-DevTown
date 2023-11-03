import israfil2 from '../../../aJson/Israfil1.json'

import Lottie from 'lottie-react';
import { Button, Div, H1, LotImg, P } from '../../HomepageStyle';
const Slider = () => {
    return (
          <Div >
            <div>
                <H1>Collect your Product</H1>
                <P>choose your favourite product <br /> at a good price and good quality. </P>
                <Button>add product</Button>
            </div>
            <LotImg>
                <Lottie loop={true} animationData={israfil2}></Lottie>
            </LotImg>
          </Div>
    );
};

export default Slider;