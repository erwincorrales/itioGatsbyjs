import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

import { useLocation } from '@reach/router';

import MenuButton from './button';

import * as st from './header.module.css';

const Header = ({nohome}) => {
  const [show, setShow] = React.useState(false);

  const location = useLocation().pathname;
    
  let urlFolderProduction = '/itioGatsbyjs/'
  if ( process.env.NODE_ENV === 'development')
    urlFolderProduction = '/'

  return(
  <header className={st.navbar}
  >  
    <Link to='/'>
      <StaticImage
        src="../images/logoHeader.png"
        alt='ITIO logo'
        width={302}
        placeholder='blurred'
        className={st.brand}
      />
    </Link>

    {
      !show ?(
        <div className='d-flex d-md-none flex-column justify-content-between align-self-center ' style={{marginRight:'25px', padding: '10px', cursor:'pointer'}} onClick={()=>setShow(!show)}>
            <div className='rounded-circle' style={{width:'8px', height:'8px', border: '2px solid black', marginBottom:'3px'}}></div>
            <div className='rounded-circle' style={{width:'8px', height:'8px', border: '2px solid black' , marginBottom:'3px'}}></div>
            <div className='rounded-circle' style={{width:'8px', height:'8px', border: '2px solid black',marginBottom: '7px'}}></div>
        </div>    
      ):(
        <span className={st.closeicon} onClick={()=>setShow(!show)}>x</span>
      )
    }

    <nav className={show ? st.nav : st.hide}>
      <Link to='/cases' className={st.link}  onClick={()=>setShow(false)}>
        <StaticImage src='../images/header/itiostudiesicon.png' width={84} className='d-md-none' alt='casefolder'/>
        <MenuButton label='CASE STUDIES' pressed ={location === `${urlFolderProduction}cases`} />
      </Link>
      <Link to='/careers' className={st.link} onClick={()=>setShow(false)}>
        <StaticImage src='../images/header/itiocontacticon.png' width={84} className='d-md-none' alt='casefolder'/>
        <MenuButton label='CAREERS' pressed ={location === `${urlFolderProduction}careers`}/>
      </Link>
      <Link to ='/contact' className={st.link} onClick={()=>setShow(false)}>
        <StaticImage src='../images/header/itiocareericon.png' width={84} className='d-md-none' alt='casefolder'/>
        <MenuButton label='CONTACT' pressed ={location === `${urlFolderProduction}contact`}/>
      </Link>  
      {
        !nohome &&(    
          <Link to='/' className={location === `${urlFolderProduction}` ? 'd-none': st.link} onClick={()=>setShow(false)}>
            <MenuButton label='HOME'/>
          </Link>
        )
      }
      
    </nav>
  </header>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
