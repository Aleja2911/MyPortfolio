import React, { useState, useCallback, Fragment } from 'react';
import { useTransition, animated } from 'react-spring';

// import IntroCardProfile from './profileCardSlide';
import ProfileCard from './profileCard';
import imageSample from '../../Images/A2.svg';

const pages = [
    ({ style }) => <animated.div style={{ ...style,  cursor: 'pointer'}}> <img src={imageSample} className='nameTitleImage' alt="" /> </animated.div>,
    ({ style }) => <animated.div style={{ ...style,  cursor: 'pointer'}}> <ProfileCard /> </animated.div>,
  ]

const ProfileCardSlide = () => {
    const [index, set] = useState(0)
    const onClick = useCallback(() => set(state => (state + 1) % 2), [])
    const transitions = useTransition(index, p => p, {
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })
return (
<Fragment>
    <div className="simple-trans-main" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />   
      })} 
    </div>
  
</Fragment>
)

}


export default ProfileCardSlide;

// const Page = pages[item]
// <Page key={key} style={props} />