interface Props {
    text?: string;
}

function TextDisplay(props: Props) {
    return <>
        <p>Reading (debounced) value from store: { props.text }</p>
    </>
}

export default TextDisplay;