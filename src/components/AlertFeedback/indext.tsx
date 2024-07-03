import './altertFeedback.styles.css'

import { useEffect, useState } from 'react';

import { AlertProps } from './altertFeedback.types'
import { FaCheckCircle } from "react-icons/fa";
import { VscError } from "react-icons/vsc";

export function AlertFeedback({ message, type }: AlertProps) {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);
        return () => clearTimeout(timer); 
    }, []);
    
  if (!visible)  {
    return null
  }
  const type_styles = type === 'success' ? 'success' : 'error';

  return (
      <div className='alert_container'>
          <div className={`${type_styles}`}>
              {type === 'success' && <FaCheckCircle className='alert_icon_success' />}
              {type === 'error' && <VscError className='alert_icon_error' />}
              {message}
          </div>
      </div>
  );
}
