const background = require('../../assets/wall-background.jpg');

export default {
  wall: {
    display: 'flex',
    flex: 1,
    height: "100%",
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    justifyContent: 'center',
    padding: 50,
  },
};
