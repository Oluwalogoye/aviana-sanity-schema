import React, { useState, useEffect } from 'react'

import Header from '../../sanity-modified-components/header/Header'
import { 
  fetchMenuItems
} from '../../utils/contentUtils'

import styles from '../indexStyles'

const MenuBlock = ({ content }) => {
  
  console.log("MenuBlock content:", content);

  const { title, menuItems, logo } = content;

  const [ localMenuItems, setLocalMenuItems ] = useState(null);

  const localMenuBlock = {
    title: title,
    menuItems: [],
    logo: logo
  }

  useEffect(() => {
    
    fetchMenuItems(menuItems).then(result => {
      
      localMenuBlock.menuItems = result;

      setLocalMenuItems(result);

    })
  }, [menuItems]);

  if (!localMenuItems) return (<div>Loading ...</div>)
  
  return <Header content={localMenuBlock} />

}


const MenuBlockPreview = ({ document }) => {
  return <MenuBlock style={styles.body} content={document.displayed} /> 
}

export default MenuBlockPreview;