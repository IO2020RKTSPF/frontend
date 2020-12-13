function MessagePage(props) {
  const { messageId } = props.match.params;
  console.log(messageId);
  return <h1>{messageId}</h1>;
}
export default MessagePage;
