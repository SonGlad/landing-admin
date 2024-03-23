import { StyledUserMenu } from "./UserMenu.styled";
import { ReactComponent as ArrowDown } from '../../../images/svg-icons/arrow-down.svg';
import { ReactComponent as SettingIcon2 } from '../../../images/svg-icons/setting-2.svg';
import { ReactComponent as LogoutIcon } from '../../../images/svg-icons/logout.svg';
import DefaltAvatar from "../../../images/images/profile-circle.png";
import {useCallback, useEffect, useRef, useState} from 'react';
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/Auth/auth-operation";
import { useAuth } from "../../../hooks/useAuth";
import { openModalSettings } from "../../../redux/Modal/modal-slice"


export const UserMenu = () => {
    const userInfoBlock = useRef(null);
    const [isMenuBox, setMenuBox] = useState(false);
    const { userName, userRole, userAvatarURL } = useAuth();
    const dispatch = useDispatch();


    const toggleUserMenuDrop = () => {
        setMenuBox(prevState => !prevState);
    };

    const LogOut = () => {
        setMenuBox(false);
        setTimeout(() => {
          dispatch(logOut());
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


    const openSettingsModal = () => {
        toggleUserMenuDrop();
        dispatch(openModalSettings());
    };

    
    return(
        <StyledUserMenu>
            <div className="user-cont" ref={userInfoBlock}>
                <div className="user-name-cont">
                    <span>Name: <p>{userName}</p></span>
                    <span>Role: <p>{userRole}</p></span>
                </div>
                <button className="user-menu-btn" type="button" onClick={toggleUserMenuDrop}>
                    <div className="for-user-avater">
                        <img className="user-avatar-img" src={userAvatarURL || DefaltAvatar} alt="avatar" />
                    </div>
                    <ArrowDown className={`arrow-svg ${toggleUserMenuDropArrow()}`}/>
                </button>
                <div className={`user-info-cont ${toggleUserMenuDropCont()}`}>
                    <ul className="list-user-menu">
                    <li className="item-user-menu">
                        <button className="button-setting" type="button" onClick={openSettingsModal}>
                            <SettingIcon2 className="setting-icon" />
                            Setting
                        </button>
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