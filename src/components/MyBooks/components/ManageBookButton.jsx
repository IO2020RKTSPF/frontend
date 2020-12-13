import Button from "../../Button/Button";

function ManageBookButton() {
  const handleEdit = (e) => {
    e.stopPropagation();
    console.log("Edit Clicked");
  };
  const handleDelete = (e) => {
    e.stopPropagation();
    console.log("Deleted Clicked");
  };

  return (
    <div className="result-button">
      <Button className="disable" text="Edytuj" onClick={handleEdit} />
      <Button className="disable" text="Usuń" onClick={handleDelete} />
    </div>
  );
}
export default ManageBookButton;
