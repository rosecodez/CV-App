/* eslint-disable react/prop-types */
export function EditButton({ onClick }) {
    return (
        <button onClick={onClick}>Edit</button>
    );
}

export function SubmitButton({ onClick }) {
    return (
        <button onClick={onClick}>Submit</button>
    );
}
