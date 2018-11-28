import styled from 'styled-components';
import { colors } from '../../constants/theme'

export const Container = styled.div`
  display: flow-root;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  max-width: 1080px;
  margin: 0 auto;
  .search-input {
    width: 100%;
    input {
      width: 100%;
      padding: 16px 32px;
    }
  }
  .resultsContainer {
    display: grid;
    grid-row-gap: 16px;
    padding: 84px 0;
    align-content: start;
    align-items: start;
    .domain-item {
    grid-auto-rows: minmax(min-content, max-content);
      border-top: 2px solid ${colors.green};
      padding: 24px 0;
      display: grid;
      grid-template-columns: 0.25fr 0.75fr;
      width: 100%;
      align-self: start;
      transition: all 0.3s ease;
      &:hover {
        transition: all 0.3s ease;
        background-color: ${colors.green};
        .organisation {
          color: ${colors.dark_grey};
          opacity: 1;
        }
      }
      .domain-name {
        color: ${colors.white};
        font-weight: 600;
        justify-self: flex-start;
        margin-left: 16px;
      }
      .organisation {
        color: ${colors.green};
        justify-self: flex-end;
        font-weight: 600;
        opacity: 0.5;
        margin-right: 16px;
        text-align: right;
      }
    }
  }
`;
