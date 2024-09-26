import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function QuoteGenerator() {
    const [numberOfQuotes, setNumberOfQuotes] = useState(1);
    const [quotes, setQuotes] = useState([]);
    const [displayedQuotes, setDisplayedQuotes] = useState([]);

    const handleInputChange = (e) => {
        const value = Math.max(1, Math.min(5, e.target.value));
        setNumberOfQuotes(value);
    };

    const fetchQuotes = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/quotes');
            console.log(response);


            setQuotes(response.data.quotes);
            console.log('Fetched quotes:', response.data.quotes);

            generateRandomQuotes(response.data.quotes);
        } catch (err) {
            setError('Failed to fetch quotes');
        }
    };

    const generateRandomNumber = (max) => {
        return Math.floor(Math.random() * max);
    };

    const generateRandomQuotes = (quotesArray) => {
        const selectedQuotes = [];
        const uniqueIndices = new Set();

        while (selectedQuotes.length < numberOfQuotes && selectedQuotes.length < quotesArray.length) {
            const randomIndex = generateRandomNumber(quotesArray.length);
            if (!uniqueIndices.has(randomIndex)) {
                uniqueIndices.add(randomIndex);
                selectedQuotes.push(quotesArray[randomIndex]);
            }
        }

        setDisplayedQuotes(selectedQuotes);
    };

    useEffect(() => {
        fetchQuotes();
    }, []);

    return (
        <>
            <Container style={{ backgroundColor: '#f5edbc' }}>
                <Row className='justify-content-between align-items-center'>

                    <Col xs="auto" ></Col>

                    <Col xs="auto" className='mt-3'>
                        <h1 className='text-center gradient-header'>Random Quotes Generator</h1>
                        <div className='border border-5 rounded p-3 m-2'>
                            <p>"Welcome to our random quote generator, where inspiration is just a click away! This website offers a curated selection of motivational, insightful, and thought-provoking quotes from a diverse range of authors, philosophers, and historical figures. Whether you're looking for a spark of creativity, a moment of reflection, or a positive boost to your day, our random quote generator is designed to provide you with meaningful and impactful words.
                                With each click, you’ll receive a fresh, unique quote, making it the perfect tool for anyone in need of daily inspiration or motivation. You can explore quotes across different categories such as life, success, love, and wisdom, ensuring that there's something for everyone. Plus, our simple and elegant design ensures that the focus remains on the power of the words themselves."
                            </p>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center ">
                            <h3 className="mb-4 mt-3 gradient-header" style={{ fontSize: '1.5rem' }}>Customize Your Quote Generation</h3>

                            <div className="d-flex flex-column align-items-center mb-4 border border-5 p-3 rounded">
                                <label htmlFor="quoteCount" className="form-label">Number of Quotes:</label>
                                <input
                                    onChange={handleInputChange}
                                    value={numberOfQuotes}
                                    type="number"
                                    className="form-control mb-2"
                                    min="1"
                                    max="5"
                                    id="quoteCount"
                                    placeholder="Enter number of quotes"
                                />

                                <label htmlFor="quoteRange" className="form-label">Adjust Quote Range:</label>
                                <input
                                    onChange={handleInputChange}
                                    value={numberOfQuotes}
                                    type="range"
                                    className="form-range mb-2"
                                    min="1"
                                    max="5"
                                    id="quoteRange"
                                />
                                <button className="btn btn-primary btn-lg generate-button"
                                    onClick={() => generateRandomQuotes(quotes)}>
                                    Generate Random Quote(s)
                                </button>
                            </div>
                        </div>

                        <div className='quote-box m-4'>
                            {displayedQuotes.map((item) => (
                                <div className='quote-item' style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
                                    <p style={{ fontSize: '2rem' }}>"{item.quote}"</p>
                                    <p style={{ fontStyle: 'italic', fontSize: '18px', marginTop: '10px' }}>- {item.author}</p>
                                </div>
                            ))}
                        </div>

                    </Col>

                    <Col xs="auto"></Col>
                </Row>
            </Container>
            <footer className='mt-3' style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center', color:'white' }}>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Shon Mathew. All rights reserved.</p>
                </div>
            </footer>

        </>
    );
}

export default QuoteGenerator;
