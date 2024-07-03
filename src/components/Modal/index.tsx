import './modal.styles.css'

interface ModalProps {
    isOpen:boolean,
    children: React.ReactNode;  
}

export function Modal( {isOpen, children }: ModalProps){
    if(!isOpen){
        return null
    }
    return(
        <div className="modal">
           <div className='modal_content'>
            {children}
           </div>
        </div>
    )
    
}