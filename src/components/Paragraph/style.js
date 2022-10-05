import StyledText from "components/Text/style";
import styled, { css } from "styled-components";

const StyledParagraph = styled(StyledText)`
    ${({ ellipsis }) => ellipsis &&
        css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `}
`;

export default StyledParagraph;
