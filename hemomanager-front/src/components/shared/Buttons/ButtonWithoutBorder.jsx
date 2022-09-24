export function ButtonWithoutBorder (props) {
    return (<>
        <div className="button-container">
            <button>{ (props.name).toUpperCase() }</button>
        </div>
    </>)
}