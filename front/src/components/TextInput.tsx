import { useState, useEffect } from 'react'
import StoreManager from '../store/StoreManager'

interface Props {
  storeManager: StoreManager;
}

function TextInput(props: Props) {
    const { storeManager } = props;

    const [text, setText] = useState<string>('');

    useEffect(() => {
        if (text) {
            const debouncedUpdate = setTimeout(() => {
                storeManager.setText(text);
            }, 1000)

            return () => {
                clearTimeout(debouncedUpdate);
            };
        }
    }, [ text, storeManager ])

    return <>
        <p>Redux example:</p>
        <input
            placeholder="modify me"
            type="text"
            value={text}
            onChange={({ target: { value }}) => setText(value) } />
    </>
}

export default TextInput;