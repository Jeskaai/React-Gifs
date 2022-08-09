
import { useState } from 'react';

import { AddCategory , GifGrid } from './componets';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece' ]);

    const  onAddCategory = ( newCategory ) => {

      if( categories.includes(newCategory)) return;
       setCategories([newCategory , ...categories,])
       //setcategories( cat => [...categories, 'League of lengeds']);
    }

  return (
    <>
     
      <h1>GitExpertApp</h1>

      <AddCategory 
       onNewCategory= { event => onAddCategory(event)}
       //currentCategories={ categories }
      />


        
        { 
            categories.map( (category)  => (
                <GifGrid 
                  key={ category }
                  category={ category }/>
            ))
            }
      
        
       

    </>
  )
}
