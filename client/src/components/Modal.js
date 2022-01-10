import React,{ useEffect, useCallback} from 'react'
import {createPortal} from 'react-dom'
import {RiCloseLine } from 'react-icons/ri'
const modalEl= document.getElementById('modal-root')



const Modal = ({isShowing, toggle, children}) => {

    const handleEscape= useCallback(
        (e) => {
            if(e=== 27) toggle()
        },
        [],
    )

    useEffect(() => {
        if(isShowing) document.addEventListener('keydown', handleEscape, false)
        return () => {
            document.removeEventListener('keydown', handleEscape, false)
        }
    }, [handleEscape, isShowing])


    return createPortal(
        isShowing ? 
            <div className={isShowing ? 'overlay' : 'hide'} >
                <div className={isShowing ? 'modal' : 'hide'}>
                    <div className='modal__header'>
                        <RiCloseLine color="#000" size={27} onClick={toggle} /> 
                    </div>
                    {children}
                </div>
            </div> : null 
        , modalEl
    )
}

export default Modal
