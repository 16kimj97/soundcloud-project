import "./Footer.css"
<<<<<<< HEAD

function Footer() {
    return (
        <div className="footer">

        </div>
    );
=======
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function Footer() {
  return (
    <div className="footer">
      <AudioPlayer
        // autoPlay
        // src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
        src="https://media.bgmstore.net/mp3/zcvFY.mp3"
        // src="../Footer/test.mp3"
        onPlay={(e)=>console.log(e)}
      // other props here
      />
    </div>
  );
>>>>>>> ec91776feb6056fb691c7f55db049b7049f3db34
}

export default Footer;
