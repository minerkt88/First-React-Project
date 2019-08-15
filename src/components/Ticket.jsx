import React from 'react';
import PropTypes from 'prop-types';

const Ticket = props => {
    return (
        <div>
            <h3>{props.location} - {props.names}</h3>
            <p>{props.issue}</p>
        </div>
    );
}

Ticket.propTypes = {
    location: PropTypes.string.isRequired,
    names: PropTypes.string.isRequired,
    issue: PropTypes.string
};

export default Ticket;
