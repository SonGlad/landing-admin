import { StyledUserMenu } from "./userMenu.styled";
import { NavLink } from 'react-router-dom';
import { ReactComponent as ArrowDown } from '../../../images/svg-icons/arrow-down.svg';
import { ReactComponent as SettingIcon2 } from '../../../images/svg-icons/setting-2.svg';
import { ReactComponent as LogoutIcon } from '../../../images/svg-icons/logout.svg';
import DefaltAvatar from "../../../images/images/profile-circle.png";
import {useCallback, useEffect, useRef, useState} from 'react';


export const UserMenu = () => {
    const userInfoBlock = useRef(null);
    const [isMenuBox, setMenuBox] = useState(false);


    const toggleUserMenuDrop = () => {
        setMenuBox(prevState => !prevState);
    };

    const LogOut = () => {
        setMenuBox(false);
        setTimeout(() => {
        //   dispatch(logOut());
        },250)
    };


    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            setMenuBox(false);;
        }
    },[]);


    const handleBackgroundClick = useCallback(event => {
        if (userInfoBlock.current && !userInfoBlock.current.contains(event.target)) {
          setMenuBox(false);
        }
    },[]);
    
    
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleBackgroundClick);
    
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
          document.removeEventListener('click', handleBackgroundClick);
        };
    },[handleBackgroundClick, handleKeyPress]);



    const toggleUserMenuDropCont = () => {
        return isMenuBox ? 'show-info-container' : '';
    };
    const toggleUserMenuDropArrow = () => {
        return isMenuBox ? 'arrow-svg-close' : '';
    };

    
    return(
        <StyledUserMenu>
            <div className="user-cont" ref={userInfoBlock}>
                <div className="user-name-cont">
                    <p className="user-name"><span>Name: </span>ALEXANDER</p>
                    <p className="user-name"><span>Role: </span>Developer</p>
                </div>
                <button className="user-menu-btn" type="button" onClick={toggleUserMenuDrop}>
                    <div className="for-user-avater">
                        <img className="user-avatar-img" src={DefaltAvatar} alt="avatar" />
                    </div>
                    <ArrowDown className={`arrow-svg ${toggleUserMenuDropArrow()}`}/>
                </button>
                <div className={`user-info-cont ${toggleUserMenuDropCont()}`}>
                    <ul className="list-user-menu">
                    <li className="item-user-menu">
                        <NavLink className="link-setting" to="" onClick={toggleUserMenuDrop}>
                            <SettingIcon2 className="setting-icon" />
                            Setting
                        </NavLink>
                    </li>
                    <li className="item-user-menu">
                        <button className="button-link-logout" type="button" onClick={LogOut}>
                            <LogoutIcon className="logout-icon" />
                            Log out
                        </button>
                    </li>
                    </ul>
                </div>
            </div>
        </StyledUserMenu>
    )
};