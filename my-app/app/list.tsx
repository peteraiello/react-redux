import React, {useEffect, useState} from 'react';

interface ListProps {
  getItems: () => (string | number)[];
}

export default function List({ getItems }: ListProps) {
    
    const [items, setItems] = useState<(string | number)[]>([])

    useEffect(() => {
        setItems(getItems())
        console.log('updating items')
    }, [getItems])

    return items.map((item) => <div key={item}>{item}</div>)
}