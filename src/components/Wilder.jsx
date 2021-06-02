import React from 'react';
import StyledCard from '../styles/StyledCard';

const Wilder = ({ id, firstName, lastName, language, group, delegate, url }) => {

    return (
        <>
            <StyledCard
                border='1px solid grey'
                boxShadow='0px 5px 10px 2px grey'
                margin="2rem"
                width="20%"
                height="auto"
            >

                <img width="50px" src={url} alt="avatar" />
                <div className={id}>
                    <h4>{group}</h4>
                    <h5>{firstName} {lastName.toUpperCase()}</h5>
                    <p>Language : {language}</p>
                    <p>Delegate : {delegate ? "Yep" : "No way"}</p>
                </div>
            </StyledCard>
        </>
    )
}


export default Wilder;