import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    // Set debounced text only triggers if nothing is changed for text in 500 milliseconds.
    // If text is changed before then the clean up method will run before the next invocation of this
    // useEffect and restart the timer.
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    // After 500 milliseconds is passed and there are no changes to debounced text, this useEffect will trigger
    // making an API call.
    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });

            setTranslated(data.data.translations[0].translatedText);
        };

        doTranslation();
    }, [language, debouncedText]);

    return (
        <div>
            <h1 className="ui header">
                {translated}
            </h1>
        </div>
    );
};

export default Convert;