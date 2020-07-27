import React from "react";
import {Dropdown} from "semantic-ui-react";
import {Link} from "react-router-dom";
import "./dropDownStyle.css";

const options = [
    { key: 'All', text: 'Show All', value: '' },
    { key: 'React', text: 'React', value: 'React' },
    { key: 'CSS', text: 'CSS', value: 'CSS' },
    { key: 'HTML', text: 'HTML', value: 'HTML' },
    { key: 'JavaScript', text: 'Javascript', value: 'Javascript' },
    { key: 'Node', text: 'Node', value: 'Node' },
    { key: 'MySQL', text: 'MySQL', value: 'MySQL' },
    { key: 'MongoDB', text: 'MongoDB', value: 'MongoDB' },
    { key: 'Handlebars', text: 'Handlebars', value: 'Handlebars' },
    { key: 'Project', text: 'Group Project', value: 'Project' },
    { key: 'API', text: 'API', value: 'API'}
]

function Form({setFilter})
{
    return (
        <Dropdown
            text='Filter'
            icon='filter'
            floating
            labeled
            button
            className='icon'
        >
            <Dropdown.Menu>
                <Dropdown.Header aria-label="DropdownMenu" icon='tags' content='Filter by skill' />
                {options.map(option => <Dropdown.Item as={Link} to={`/portfolio/${option.value}`} key={option.key} aria-label={`Option for ${option.value}`} value={option.value} onClick={() => setFilter(option.value)}>{option.text}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Form;