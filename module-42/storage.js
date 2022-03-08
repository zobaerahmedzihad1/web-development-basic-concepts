const addToLocalStorage = () => {
  const inputId = document.getElementById("storage-id");
  const id = inputId.value;

  const inputValue = document.getElementById("storage-value");
  const value = inputValue.value;

  // set local storage.
  if (id && value) {
    localStorage.setItem(id, value);
  }

  // clear input field
  inputId.value = "";
  inputValue.value = "";
};
