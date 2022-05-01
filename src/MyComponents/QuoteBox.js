import React, { useState } from "react";
import quotes from "../quotes.json";

const QuoteBox = () =>{

    let randomPhrases = Math.floor(Math.random() * quotes.length);
    let randomColor = `rgb(${Math.floor(Math.random() * (255))},${Math.floor(Math.random() * (255))},${Math.floor(Math.random() * (255))})`;

    const [ index, setIndex] = useState(randomPhrases);
    const [indexColor, setIndexColor] = useState(randomColor);

    const changePhrase = ()=> {
        randomPhrases = Math.floor(Math.random() * quotes.length)
        setIndex(randomPhrases);

        randomColor = `rgb(${Math.floor(Math.random() * (255))},${Math.floor(Math.random() * (255))},${Math.floor(Math.random() * (255))})`;
        setIndexColor(randomColor);
    };


    return (

        <div className="quote-box" style={{background: indexColor}}>

            <div className="quote-box-container" style={{color: indexColor}}>

                <div>
                    <i class="fa-solid fa-quote-left"></i>
                    <p>{quotes[index].quote}</p>
                </div>
                <div>
                    <p>{quotes[index].author}</p>
                    <div onClick={changePhrase}>
                        <i class="fa-solid fa-shuffle"></i>
                    </div>
                </div>

            </div>

        </div>

    );

};

export default QuoteBox