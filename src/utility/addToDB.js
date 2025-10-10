const getStoreApp = () => {
    const storedAppStr = localStorage.getItem("install");
    if (storedAppStr) {
        return JSON.parse(storedAppStr);
    } else {
        return [];
    }
};

const addToStoredDB = (id) => {
    const storedAppData = getStoreApp();

    if (storedAppData.includes(id)) {
        alert('Exist');
    } else {
        storedAppData.push(id);
        localStorage.setItem("install", JSON.stringify(storedAppData)); // ✅ save updated list
        console.log(storedAppData);
    }
};

const removeFromStoredDB = (id) => {
  const storedAppData = getStoreApp(); // get array from localStorage

  // filter out the app you want to remove
  const updatedData = storedAppData.filter(appId => appId !== id);

  // save the updated list back to localStorage
  localStorage.setItem("install", JSON.stringify(updatedData));
  console.log("Removed:", id);
};

export { addToStoredDB, getStoreApp, removeFromStoredDB };
