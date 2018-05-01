import React from 'react';

const Single = ({ question, onChange }) => {
  return (
    question.items.map((item, index) => {
      let input;

      return (
        <div key={index}>
          <label>
            <input
              type='radio'
              name={question.id}
              value={index}
              onChange={() => onChange(input.name, input.value)}
              ref={node => input = node}
            />
            {'  '}{item.name}
          </label>
        </div>
      );
    })
  );
}

export default Single
