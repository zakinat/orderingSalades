import React,{useState} from 'react'
import {RiMenu3Line,RiCloseLine } from 'react-icons/ri'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import logo from '../images/Logo.svg'
import {useSelector} from 'react-redux' 
import {useModal} from '../hooks'
import {Modal} from '../components'
import {Carte} from './'

const Menu =({clsToggle})=>{
    return(
        <>
         <p><a href='#oursalad' onClick={clsToggle?()=>clsToggle(false):undefined}>Order our salad</a></p>
         <p><a href='#makeursalad' onClick={clsToggle?()=>clsToggle(false):undefined}>Make your own salad</a></p>
        </>
    )
    
}

const Navbar = () => {

    const {isShowing, toggle} =useModal()
    const [toggleMenu, setToggleMenu] = useState(false);
    const carteOrders = useSelector(state => state.carteList.carteList)
    return (
        <div className='navbar gradient__bg'>
            <div className='navbar__links'>
                <div className='navbar__links-logo'>
                    <a href='#home'><img src={logo}  alt='logo'/></a>
                </div>
                <div className='navbar__links-container'>
                   <Menu/>
                </div>
            </div>

            <div className='navbar__carte'>
                <AiOutlineShoppingCart className='icon_hover' color="#fff" size={35} onClick={toggle} />
                {carteOrders.length>0 ? <span className='navbar__carte-badge'>{carteOrders.length}</span>:undefined}
                <Modal isShowing={isShowing} toggle={toggle}>
                    {carteOrders.length>0 ? <Carte/>: <h1>Carte is empty</h1>}
                </Modal>
            </div>

            <div className='navbar__menu'>
                    {toggleMenu
                        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                    {toggleMenu &&
                    (
                        <div className='navbar__menu-container scale-up-center'>
                            <div className='navbar__menu-container-links'>
                              <Menu clsToggle={setToggleMenu}/>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Navbar
