import PropTypes from 'prop-types';
import { SectionStyled } from 'components/Section/SectionStyled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <h2>{title}</h2>
      {children}
    </SectionStyled>
  );
};

Section.prototype = {
  title: PropTypes.string,
};
