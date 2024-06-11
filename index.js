import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;

const reverseSentence = (sentence) => {
    const reversed = sentence.split('').reverse().join('');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
};

const inputSentence = 'Hello, world!';
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence);
const data = [
    { name: 'John' },
    { name: 'Jane' },
    { name: 'Alex' }
];

const names = data.map(item => item.name);
console.log(names);
const nestedData = [
    [
        { name: 'John' },
        { name: 'Jane' }
    ],
    [
        { name: 'Bob' }
    ]
];
const names = nestedData.flatMap(arr => arr.map(item => item.name));
console.log(names);