import Column from "./Column";

function Table(){
    return(
        <>
        <table>
        <tbody>
        <tr><Column data="Good"/></tr>
        <tr><Column data="Morning"/></tr>
        </tbody>
        </table>
        </>
    );
}

export default Table