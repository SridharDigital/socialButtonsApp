const Button = (props) => {
  return <button className={props.class + " button"}>{props.name}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="main-heading">Social Buttons</h1>
    <div className="button-container">
      <div>
        <Button name="Like" class="like" />
      </div>
      <div>
        <Button name="Comment" class="comment" />
      </div>
      <div>
        {" "}
        <Button name="Share" class="share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
