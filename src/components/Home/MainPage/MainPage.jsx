import { StyledMainPage } from "./MainPage.styled";
import { Section } from "../../Section/Section";
import { Container } from "../../Container/Container";
import { AsidePanel } from "./AsidePanel/AsidePanel";
import { CreateContact } from "./CreateContact/CreateContact";
import { AllContactPanel } from "./AllContactPanel/AllContactPanel";
import { DinamicContactPanel } from "./DinamicContactPanel/DinamicContactPanel";
import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from "react-redux";
import {getAllContacts, getAllByResource} from "../../../redux/Data/data-operation";


export const MainPage = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [allContactsPanel, setAllContactsPanel] = useState(true);
    const dispatch = useDispatch();


    const fetchData = useCallback(() => {
        dispatch(getAllContacts());
        dispatch(getAllByResource());
    },[dispatch]);


    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 5 * 60 * 1000);
        return () => clearInterval(intervalId);
    }, [fetchData]);

    
    const handleListClick = (index) => {
        setAllContactsPanel(false)
        setExpandedIndex(prevIndex => {
            if (prevIndex === index) {
                return prevIndex;
            }
            return index;
        });
    };
    

    const handleAllContactsPanelClick = () => {
        setAllContactsPanel(true);
        setExpandedIndex(null);
    };

    
    return(
        <Section>
            <Container>
                <StyledMainPage>
                    <AsidePanel/>
                    <div className="info-cont">
                        <CreateContact/>
                        <div className="main-content">
                            <AllContactPanel 
                                handleAllContactsPanelClick={handleAllContactsPanelClick}
                                allContactsPanel={allContactsPanel}
                            />
                            <DinamicContactPanel
                                handleListClick={handleListClick}
                                expandedIndex={expandedIndex}
                            />
                        </div>
                    </div>
                </StyledMainPage>
            </Container>
        </Section>
    )
};