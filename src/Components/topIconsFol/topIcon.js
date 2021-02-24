import React, {Fragment} from 'react'
import { useSpring, animated } from 'react-spring';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles(theme =>({
    root: {
        maxWidth: "13em",
      [theme.breakpoints.down("xs")] : {
      maxWidth: "4.5em",
      height: "4.5em",
      marginTop: "1em",
      padding: "none",
      },
      marginTop: "1em",
      marginLeft: "1em",
      marginRight: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
      paddingLeft: "2.5em",
      paddingRight: 0,
      background: "transparent",
      boxShadow: 'none',
    },
   image:{
    
   },
   media: {
    height: "4em",
    alignItems: "center",
    objectFit: "scale-down",
    [theme.breakpoints.down("xs")] : {
        maxWidth: "4.5em",
        height: "4.5em",
        marginTop: "1em",
        padding: "none",
        },
  },
}));



const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const TopIcon = ({ IconImage }) => {
    const classes = useStyles();
    const [props, set] = useSpring(()=> ({xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 }}))

    return (
        <Fragment>
            <animated.div onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
                className={classes.image}>         
                <Card className={classes.root}>
                <CardMedia
          component="img"
          alt="Icon"
          image={IconImage}
          title="Icon"
          className={classes.media}
        />
                </Card>
            </animated.div>
            
        </Fragment>


);
}

export default TopIcon;