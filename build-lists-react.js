const rootElement = document.getElementById("lists");

const root = ReactDOM.createRoot(rootElement);

const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const SubList = (props) => {

    const {start} = props;
    let arr = Array.from({ length: 5 }, (value, index) => index+ start);

    return (<div class="list-col">
    <ul>
    {
      arr.map((i) => (<li> {i} </li>))  
    }
    </ul>
    </div>)
}

const List = () => {
    const {start, setStart} = React.useState(1)

    const onMore = () => {
        console.log("More button clicked")
    }

    return (<div id="lists-wrapper">
    <SubList start={1}/>
    <SubList start={6}/>
    <div class="list-col">
        <button id="more-btn" onClick={onMore}>Show More</button>
    </div>   
    </div>
    )
}

root.render(
    <List />
);

