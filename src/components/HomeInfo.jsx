import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import{agriculture,minerals,profile,industry,nature,minerals2} from "../assets/images";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-4xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Welcome to
        <span className='font-semibold mx-2 text-white'>Purulia</span>
        
        <br />
       
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='flex'>
        <p className='font-medium sm:text-5xl text-center '>
          PROFILE
          <img src={profile} className='w-70 h-60 object-contain' />
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn '>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='flex'>
        <p className='font-medium text-center sm:text-5xl'>
          NATURE 
          <img src={nature}  className='w-60 h-45 object-contain' />
          

        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        CULTURE 
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Learn more
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }


  if (currentStage === 5) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        HISTORY
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Learn more
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }if (currentStage === 6) {
    return (
      <div className='flex'>
      <p className='font-medium sm:text-5xl text-center text-white'>
        MINERALS
        <Link to='/About'>
         <img src={minerals}  className='w-40 h-35 ' /></Link>
       

      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn sm:text-4xl w-20 h-10'>
        Learn more
        <img src={arrow} alt='arrow' className='w-8 h-8 object-contain' />
      </Link>
    </div>
    );
  }if (currentStage === 7) {
    return (
      <div className='flex'>
      <p className='font-medium sm:text-5xl text-center'>
        INDUSTRY 
        <img src={industry}  className='w-70 h-60 object-contain' />
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Learn more
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  if (currentStage === 8) {
    return (
      <div className='flex'>
      <p className='font-medium sm:text-5xl text-center '>
        AGRICULTURE
        <Link to='/contact'>
        <img src={agriculture} className='object-cover w-60 h-30 '/></Link>
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn 5xl w-20 h-10 '>
      
        Learn more
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  if (currentStage === 9) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        TOURISM
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Learn more
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  if (currentStage === 10) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        TRANSPORT
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Learn more
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }







  return null;
};

export default HomeInfo;
