import React from 'react';

const Footer = (props) => {
    const greetingHandler = () => {
        const hours = new Date().getHours();
        let result = {
            styles: {
                fontSize: '20px',
                color: ''
            },
            greeting: ''
        };
        if (hours < 12) {
            result.styles.color = '#04756f';
            result.greeting = "good morning";
            return result;
        }
        else if (hours >= 12 && hours < 17) {
            result.styles.color = '#8914A3';
            result.greeting = "Good Afternoon";
            return result;
        }
        else {
            result.styles.color = '#D90000';
            result.greeting = "Good Night";
            return result;
        }
    }
    const greetingResult = greetingHandler()

    return (
        <div className="Footer">
            <h4>&copy; company TODO</h4>
            <h4>this is the footer</h4>
            <h4 style={greetingResult.styles}>{greetingResult.greeting}</h4>
        </div>
    );
}


export default Footer