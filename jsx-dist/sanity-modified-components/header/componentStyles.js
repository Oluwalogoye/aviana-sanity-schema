import styled from 'styled-components';
export const HeaderContainer = styled.div`
  header { 
    /* color: #fff; */
    background-color: #fff;
    color: #000; 

    /* New styles for sticky header */
    /* position: fixed; */
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000; /* Ensures the header stays above other content */

    font-family: 'Arial', sans-serif;
  }

  header .bottom-line {
    height: 4px;
    background-color: #771800;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    padding: 0 20px;
  }

  nav .logo img {
    width: 75px; /* Adjust as needed */
  }

  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  nav ul li {
    display: inline-block;
    margin-right: 20px; /* Adjust spacing as needed */
  }

  nav ul li a {
    text-decoration: none;
    color: #000;
    transition: color 0.3s;
    font-size: 1rem;
    font-weight: 400;

    display: block;
    padding: 25px 15px;
    position: relative;

    cursor: pointer;
  }

  nav ul li a:hover, nav ul li a:focus {
    color: #fa3200;
  }

  nav ul li a.clicked {
    color: #fa3200;
  }

  nav ul li {
    position: relative;
  }

  nav ul li ul {
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    background-color: #000; /* Adjust as needed */
  }

  nav ul li:hover ul {
    display: block;
  }

  /* Hamburger Icon Style */
  .hamburger {
    display: none;
    cursor: pointer;

    padding: 15px 15px;

    color: #fa3200;
  }

  /* Smaller Screens */
  @media screen and (max-width: 1000px) {
    .hamburger {
      display: block;
    }

    nav ul {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: #fff;
    }

    .menu-open {
      display: block;
    }
  }

  .hamburger-icon {
    font-size: 30px; /* Adjust the size */
    cursor: pointer;
    /* Add any additional styling as needed */
  }

  /* Base styles for mobile-nav */
  .mobile-nav {
    background-color: #000;
    color: #fff; /* White text */
    font-family: Arial, sans-serif;
    /*
    position: fixed; /* Use fixed position to cover the entire viewport */
    */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    z-index: 999; /* Ensure it's above other content */
    display: flex; /* Use Flexbox for centering */
    align-items: center; /* Center vertically */
    justify-content: center; /* Center horizontally */
  }

  /* Container for the navigation links */
  .nav-links-container {
    text-align: center;
  }

  /* Styling for each nav item */
  .mobile-nav a {
    display: block; /* Each link takes up the full line */
    color: #fff;
    padding: 10px 0; /* Padding above and below each link */
    text-decoration: none;
    margin: 8px 0; /* Margin between links */
    transition: color 0.3s;

    cursor: pointer;
  }

  /* Hover effect for each nav item */
  .mobile-nav a:hover {
    color: #fa3200;
  }

  /* Specific style for the active nav item */
`;