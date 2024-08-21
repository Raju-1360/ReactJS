import React, { useState } from 'react';

export const Derived = () => {
    const [del, setDel] = useState([
        { name: "raju", age: "15" },
        { name: "Roy", age: "105" },
        { name: "Root", age: "155" },
    ]);

    const count = del.length;
    const average = del.reduce((acc, curele) => acc + parseInt(curele.age, 10), 0) / count;

    console.log('Count:', count); // Output: 3
    console.log('Average Age:', average); // Output: 91.66666666666667

    return (
        <div>
            <p>Count: {count}</p>
            <p>Average Age: {average.toFixed(2)}</p>
        </div>
    );
};

/*In React, derived state refers to state variables that are calculated based on other state variables or 
props. Instead of storing these derived values directly in the state, they are computed dynamically during 
the render phase. This ensures consistency and avoids unnecessary state management.
 Derived state can be calculated using existing state or props and often includes values like counts,
 
 
 averages, or filtered lists. By keeping derived state out of the component's state,
 the logic remains simpler and less prone to bug */
