import styled from 'styled-components';

export const CalendarWrapper = styled.div`
    width: calc(100% / 3);
    border: 1px solid #000;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    
    .rdp-root {
        --rdp-accent-color: #FFCF00;
    }

    .rdp-root, .rdp-months, .rdp-month {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .rdp-month {
        flex-direction: column;
    }

    .rdp-month_caption, .rdp-month_grid {
        width: 100%;
    }
`;