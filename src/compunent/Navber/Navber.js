import React from 'react';
import './Navber.css';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link, useMatch, useResolvedPath, } from "react-router-dom";
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
// import { signOut } from 'firebase/auth';


const Navber = () => {
  function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
      <div >
        <Link
          style={{ color: match ? "#f4024e" : "white" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
     
      </div>
    );
  }
  // const [user, loading, error] = useAuthState(auth);
  // const navigate=useNavigate();
  // const singout=()=>{
  //   signOut(auth).than(()=>{
  //     navigate('/login')

  //   })
  //   .catch((error) => {
  //     // An error happened.
  //   });

  //  }
 
  return (
    <div className='header'>
    <Navbar  expand="lg">
<Container fluid>
<h1 ><Link className='text-white text-decoration-none' to="/"><span className='text-black text-4xl'>E</span>arn<span className='text-black'>M</span>oney</Link></h1> 
<Navbar.Toggle aria-controls="navbarScroll" />
<Navbar.Collapse id="navbarScroll">
<Nav
className="me-auto my-2 my-lg-0"
style={{ maxHeight: '100px' }}
navbarScroll
>

</Nav>
<div className='navber-item'>
    <li><CustomLink to='/'>Home</CustomLink></li>
    <li><CustomLink to='/cricket'>Cricket</CustomLink></li>
    <li><CustomLink to='/football'>Football</CustomLink></li>
      <li><CustomLink to='/profile'>Profile</CustomLink></li> 
      <li><CustomLink to='/admin'>Admin</CustomLink></li> 
           <li><CustomLink  to='/logout' >Log Out</CustomLink></li>
            <li><CustomLink to='login'>Log in</CustomLink></li> 
         
</div>

</Navbar.Collapse>
</Container>
</Navbar>
    
</div>
  )}

export default Navber;