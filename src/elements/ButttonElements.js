import { Link } from 'gatsby';
import styled from 'styled-components';

export const ButtonWrapper = styled(Link)`
  padding: 0.5rem;
  background-color: ${props => props.theme.colors.main1};
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.light1};
  font-weight: 700;
  font-size: 0.875rem;
  width: fit-content;
  transition: filter 0.3s ease;
  text-decoration: none;
  &:hover, &:focus {
    filter: brightness(110%);
  }
`;
