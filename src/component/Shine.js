import React ,{useEffect, useRef} from 'react';
import './Shine.css';

const Shine = ({imgUrl}) => {

    const shineRef = useRef(null);

    useEffect(() => {
        let xP=0;
        const animate = () => {
            shineRef.current.style.backgroundPosition = `${xP}px 0px`;
            xP += 1;
            requestAnimationFrame(animate);
        };
        animate();
    },[]);

    return (
        <img className="shine" ref={shineRef} src={imgUrl} ></img>
    )
};
export default Shine;