import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function listing() {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
  
    useEffect(() => {


    }, [id]);
  
    return (
      <div>
        { }
      </div>
    );
  }
  
  export default listing;