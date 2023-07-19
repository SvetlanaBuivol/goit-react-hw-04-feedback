import React from 'react';
import PropTypes from 'prop-types';
import { SectionFeedback, TitleSection } from './Section.styled';

const Section = ({ title, children }) => (
    <SectionFeedback>
        <TitleSection>{title}</TitleSection>
        {children}
    </SectionFeedback>
);

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}