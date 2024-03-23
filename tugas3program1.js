const searchName = (find, amount) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const names = [
                "Abigail", "Alexandra", "Alison",
                "Amanda", "Angela", "Bella",
                "Carol", "Caroline", "Carolyn",
                "Deirdre", "Diana", "Elizabeth",
                "Ella", "Faith", "Olivia", "Penelope"
            ]
            let newNames = names.filter((name) => {
                return name.toLowerCase().includes(find.toLowerCase());
            });
            if (newNames.length > 0) {
                resolve(newNames.slice(0, amount));
            } else {
                reject(new Error("Not Found"));
            }
        }, 2000);
    });
}

searchName("rol", 2)
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((reject) => {
        console.log(reject);
    })