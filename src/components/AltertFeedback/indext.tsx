import './altertFeedback.styles.css'

import { AlertProps } from './altertFeedback.types'
import { FaCheckCircle } from "react-icons/fa";
import { VscError } from "react-icons/vsc";

export function AlertFeeback({ message, type }: AlertProps) {
 
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
