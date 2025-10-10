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
  if (!storedAppData.includes(id.toString())) {
    storedAppData.push(id.toString());
    localStorage.setItem("install", JSON.stringify(storedAppData));
  }
};

const removeFromStoredDB = (id) => {
  const storedAppData = getStoreApp();
  const updatedData = storedAppData.filter(appId => appId !== id.toString());
  localStorage.setItem("install", JSON.stringify(updatedData));
};



export { addToStoredDB, getStoreApp, removeFromStoredDB };
