import { StyledAllContactsPanel } from "./AllContactsPanel";
import {ReactComponent as UserIcon} from "../../../../images/svg-icons/user.svg";
import {ReactComponent as PnoneIcon} from "../../../../images/svg-icons/phone.svg";
import {ReactComponent as EmailIcon} from "../../../../images/svg-icons/email.svg";
import {ReactComponent as CheckedIcon} from "../../../../images/svg-icons/check.svg";
import {ReactComponent as CheckBoxIcon} from "../../../../images/svg-icons/rectangle.svg";
import {ReactComponent as TrashIcon} from "../../../../images/svg-icons/trash.svg";
import { useData } from "../../../../hooks/useData";


export const AllContactPanel = ({handleAllContactsPanelClick, allContactsPanel}) => {
    const { isContacts } = useData();

    
    const newContacts = isContacts.filter(contact => contact.newContact);
    const otherContacts = isContacts.filter(contact => !contact.newContact);
    const contactsToShow = [...newContacts, ...otherContacts];



    return(
        <StyledAllContactsPanel>
            <div
                className={`content-container ${allContactsPanel ? 'expanded' : ''}`}
                onClick={handleAllContactsPanelClick}
            >
                <h2 className={`content-title ${allContactsPanel ? 'expanded' : ''}`}>All Contacts</h2>
                {allContactsPanel && (
                    <div className="filter-btn-block">
                        <div className="nav-btn-block">
                            <button type="button" className="filter-btn">All</button>
                            <button type="button" className="filter-btn">New</button>
                        </div>
                        <div className="nav-btn-block">
                            <label className='filter-label' htmlFor="filter">
                                <input className="input"
                                    type="text"
                                    name="filter"
                                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                    required
                                    placeholder='Type for search contact'
                                    id="filter"
                                    // value={filter}
                                    // onChange={handleFilterChange}
                                    >
                                </input>
                            </label>
                        </div>
                        <div className="nav-btn-block delete-btn-block">
                            <div className='checkbox-container'>
                                <input className="checkbox"
                                    type="checkbox"
                                    name="user_agreement" 
                                    // id={id}
                                    // checked={checkbox.includes(id)}
                                    // onChange={() => handleCheckboxChange(id)}
                                />
                                <div className="custom-checkbox">
                                    <CheckBoxIcon className="custom-checkbox-before" width="15" height="15"/>
                                    <CheckedIcon className="custom-checkbox-after" width="15" height="15"/>
                                </div>
                                </div>
                            <p>Select All</p>
                            <button type="button" className="filter-btn delete-btn">Delete All</button>
                        </div>
                    </div>
                )}
                    {allContactsPanel && (
                        <ul className="contact-list">
                            {contactsToShow.map(({_id, name, lastName, email, phone, newContact}) => (
                                <li key={_id} className="contact-item">
                                    {newContact && <h3>NEW</h3>}
                                    <div className="contact-item-container">
                                        <div className='checkbox-container'>
                                            <input className="checkbox"
                                                type="checkbox"
                                                name="user_agreement" 
                                                id={_id}
                                                // checked={checkbox.includes(id)}
                                                // onChange={() => handleCheckboxChange(id)}
                                            />
                                            <div className="custom-checkbox">
                                                <CheckBoxIcon className="custom-checkbox-before" width="15" height="15"/>
                                                <CheckedIcon className="custom-checkbox-after" width="15" height="15"/>
                                            </div>
                                        </div>
                                        <div className="item-content-cont">
                                            <button type="button" className="trash-button">
                                                <TrashIcon className="trash-icon" width={15} height={15}/>
                                            </button>
                                            <div className="item-container">
                                                <UserIcon className="icon" width="15" height="15"/>
                                                <p className="item-text">Name: {name}</p>
                                            </div>
                                            <div className="item-container">
                                                <UserIcon className="icon" width="15" height="15"/>
                                                <p className="item-text">Last Name: {lastName}</p>
                                            </div>
                                            <div className="item-container">
                                                <EmailIcon className="icon" width="15" height="15"/>
                                                <p className="item-text">Email: {email}</p>
                                            </div>
                                            <div className="item-container">
                                                <PnoneIcon className="icon" width="15" height="15"/>
                                                <p className="item-text">Phone: {phone}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
            </div>
        </StyledAllContactsPanel>
    )
};