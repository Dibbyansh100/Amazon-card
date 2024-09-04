function  handleClick() {
    console.log("Hello!");
}
function handleMouseOver() {
    console.log("bye!");
}
function handleDblClick() {
    console.log("you double clicked");
}
export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quod incidunt explicabo nulla corrupti maiores est deserunt, laborum exercitationem recusandae, numquam aperiam. Reprehenderit, vitae alias sit eaque illum cupiditate rerum!</p>
            <p>
                <button onDoubleClick={handleDblClick}>double click me!</button>
            </p>
        </div>
    );
}