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
import { onFilterChange, toggleCheckboxState, toggleSelectAllCheckboxDynamic } from "../../../../redux/Data/data-slice";
import { deleteContactById, updateNewContactById } from "../../../../redux/Data/data-operation";


export const DinamicContactPanel = ({expandedIndex, handleListClick}) => {
    const { isContactsByResource, isFilter, isCheckbox} = useData();
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

        const Checked = filteredContacts.length > 0 && filteredContacts.every(contact => isCheckbox.includes(contact._id));

        return [resource, filteredContacts, Checked];
    });


    const openModalUpdate = (_id) => {
        
        const contact = ContactsByResource
        .flatMap(([resource, sortedContacts]) => sortedContacts)
        .find(contact => contact._id === _id);

        dispatch(setUpdateContactModalData(contact))
        dispatch(openModalUpdateContact());
        dispatch(updateNewContactById({ 
            id: _id, 
            data: { newContact: false }
        }));
    };


    const handleFilterChange = (event) => {
        dispatch(onFilterChange(event.target.value));
    };


    const handleCheckboxChange = (_id) => {
        dispatch(toggleCheckboxState({_id}));
    };


    const handleSelectAllChange = (sortedContacts) => {
        dispatch(toggleSelectAllCheckboxDynamic(sortedContacts));
    };


    const onDeleteContact = (_id)  => {
        dispatch(deleteContactById(_id));
    };


    const handleDeleteAllSelected = () => {
        isCheckbox.forEach((_id) => {
          onDeleteContact(_id);
        });
    };



    return(
        <StyledDinamicContactPanel style={{ width: expandedIndex ? '100%' : 'auto' }}>
        {ContactsByResource && ContactsByResource.length > 0 && ContactsByResource.map(([resource, sortedContacts, Checked], index) => (
            <div
                    key={index}
                    className={`content-container ${expandedIndex === index ? 'expanded' : ''}`}
                    onClick={() => handleListClick(index)}
                >
                    <h2 className={`content-title ${expandedIndex === index ? 'expanded' : ''}`}>{resource}: {sortedContacts.length}</h2>
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
                                        checked={Checked}
                                        onChange={() => handleSelectAllChange(sortedContacts)}
                                    />
                                    <div className="custom-checkbox">
                                        <CheckBoxIcon className="custom-checkbox-before" width="15" height="15"/>
                                        <CheckedIcon className="custom-checkbox-after" width="15" height="15"/>
                                    </div>
                                    </div>
                                <p>Select All</p>
                                {Checked && (
                                    <button type="button" className="filter-btn delete-btn" onClick={handleDeleteAllSelected}>
                                        Delete All
                                    </button>
                                )}
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
                                                checked={isCheckbox.includes(_id)}
                                                onChange={() => handleCheckboxChange(_id)}
                                            />
                                            <div className="custom-checkbox">
                                                <CheckBoxIcon className="custom-checkbox-before" width="15" height="15"/>
                                                <CheckedIcon className="custom-checkbox-after" width="15" height="15"/>
                                            </div>
                                            {isCheckbox.includes(_id) && (
                                                <button type="button" className="trash-button" onClick={() => onDeleteContact(_id)}>
                                                    <TrashIcon className="trash-icon" width={15} height={15}/>
                                                </button>
                                            )}
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