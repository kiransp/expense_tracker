function Form() {
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Submitted");
        }}
      >
        <div className=" mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input id="description" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input id="amount" type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Category
          </label>
          <select id="category" className="form-select">
            <option selected></option>
            <option value="1">Groceries</option>
            <option value="2">Utilities</option>
            <option value="3">Entertainment</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
