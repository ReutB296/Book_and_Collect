import './home.css';
import TypeWriterEffect from 'react-typewriter-effect';

const myRef = document.querySelector('.title')


export default function Home(){
    return(
    <div className='home_container'>
        <div className= 'homeBox'>
             {/* <h1 className="title"></h1>  */}
            <TypeWriterEffect
            textStyle={{ fontFamily: 'Freestyle Script' }}
            startDelay={100}
            cursorColor="black"
            text="Book and Collect"
            typeSpeed={100}
         
          />
        </div>
    </div>
    )
}