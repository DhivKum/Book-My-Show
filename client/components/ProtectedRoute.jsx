import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({children}) {
  const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
          // User is authenticated
          navigate('/'); // Redirect to home page if authenticated
        } else {
          // User is not authenticated
          navigate('/login'); // Redirect to login page if not authenticated
        }
    }, []);

  return (
    <div>
      {children}
    </div>
  )
}

export default ProtectedRoute