export const ColoredMessage = (props) => {
  console.log(props);

  const { color, children} = props;

  const contentStyle = {
    color,
    fontSize: "20px",
  };

  return <p style={ contentStyle }>{ children }</p>;
};