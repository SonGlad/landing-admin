import { StyledDinamicContactPanel } from "./DinamicContactPanel.styled";
import {ReactComponent as UserIcon} from "../../../../images/svg-icons/user.svg";
import {ReactComponent as PnoneIcon} from "../../../../images/svg-icons/phone.svg";
import {ReactComponent as EmailIcon} from "../../../../images/svg-icons/email.svg";
import {ReactComponent as CheckedIcon} from "../../../../images/svg-icons/check.svg";
import {ReactComponent as CheckBoxIcon} from "../../../../images/svg-icons/rectangle.svg";
import {ReactComponent as TrashIcon} from "../../../../images/svg-icons/trash.svg";
import { useDispatch } from "react-redux";
import { useData } from "../../../../hooks/useData";
import { openModalUpdateContact, setUpdateContactModalData } from "../../../../redux/Modal/modal-slice";
import { onFilterChange } from "../../../../redux/Data/data-slice";


export const DinamicContactPanel = ({expandedIndex, handleListClick}) => {
    const { isContactsByResource, isFilter} = useData();
    const dispatch = useDispatch();


    const ContactsByResource = Object.entries(isContactsByResource).map(([resource, contacts]) => {
        const newContacts = contacts.filter(contact => contact.newContact);
        const regularContacts = contacts.filter(contact => !contact.newContact);
        const sortedContacts = [...newContacts, ...regularContacts];

        const filteredContacts = sortedContacts.filter(contact => 
            contact.name.toLowerCase().includes(isFilter.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(isFilter.toLowerCase()) ||
            contact.email.toLowerCase().includes(isFilter.toLowerCase()) ||
            contact.phone.replace(/\D/g, '').includes(isFilter)
        );

        return [resource, filteredContacts];
    });


    const openModalUpdate = (_id) => {
        
        const contact = ContactsByResource
        .flatMap(([resource, sortedContacts]) => sortedContacts)
        .find(contact => contact._id === _id);

        dispatch(setUpdateContactModalData(contact))
        dispatch(openModalUpdateContact());
    };

    const handleFilterChange = (event) => {
        dispatch(onFilterChange(event.target.value));
    };


    return(
        <StyledDinamicContactPanel style={{ width: expandedIndex ? '100%' : 'auto' }}>
        {ContactsByResource && ContactsByResource.length > 0 && ContactsByResource.map(([resource, sortedContacts], index) => (
            <div
                    key={index}
                    className={`content-container ${expandedIndex === index ? 'expanded' : ''}`}
                    onClick={() => handleListClick(index)}
                >
                    <h2 className={`content-title ${expandedIndex === index ? 'expanded' : ''}`}>{resource}</h2>
                    {expandedIndex === index && (
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
                                        value={isFilter}
                                        onChange={handleFilterChange}
                                        >
                                    </input>
                                </label>
                            </div>
                            <div className="nav-btn-block delete-btn-block">
                                <div className='checkbox-container all-checkbox-container'>
                                    <input className="checkbox"
                                        type="checkbox"
                                        name="user_agreement" 
                                        id="selectAllCheckbox"
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
                    {expandedIndex === index && (
                        <ul className="contact-list">
                            {sortedContacts.map(({_id, name, lastName, email, phone, newContact}) => (
                                <li key={_id} className="contact-item">
                                    {newContact && <h3>NEW</h3>}
                                    <div className="contact-item-container">
                                        <div className='checkbox-container'>
                                            <input className="checkbox"
                                                type="checkbox"
                                                name="user_agreement" 
                                                id={_id}
                                                // checked={checkbox.includes(contact._id)}
                                                // onChange={() => handleCheckboxChange(contact._id)}
                                            />
                                            <div className="custom-checkbox">
                                                <CheckBoxIcon className="custom-checkbox-before" width="15" height="15"/>
                                                <CheckedIcon className="custom-checkbox-after" width="15" height="15"/>
                                            </div>
                                            <button type="button" className="trash-button">
                                                <TrashIcon className="trash-icon" width={15} height={15}/>
                                            </button>
                                        </div>
                                        <div className="item-content-cont" onClick={() => openModalUpdate(_id)}>
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
            ))}
        </StyledDinamicContactPanel>
    )
};