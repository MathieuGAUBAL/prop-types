import { useEffect, useState } from 'react';
import StyledContainer from '../styles/StyledContainer';
import Wilder from './Wilder';


const Wilders = ({ currentGroup }) => {
    const [wilders, setWilders] = useState([]);

    useEffect(() => {
        fetch('/api.json')
            .then(res => res.json())
            .then(data => setWilders(data.results))
            .catch(error => console.log(error))
    }, [])
    return (

        <StyledContainer flex flexWrap>
            {
                wilders
                    .filter(wilder => wilder.group === currentGroup)
                    .map(wilder => (
                        <Wilder key={wilder.id} {...wilder} />
                    ))
            }
        </StyledContainer>
    )
}


export default Wilders;