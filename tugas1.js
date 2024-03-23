const workingDayCheck = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jum\'at'];
            let check = dataDay.find((item) => {
                return item === day;
            });
            if (check) {
                resolve(check);
            } else {
                reject(new Error('Hari ini bukan hari kerja'));
            }
        }, 3000);
    });
}

async function output() {
    try {
        let result = await workingDayCheck("jum\'at");
        console.log("Executing try catch block");
        console.log(result);
    } catch (error) {
        console.log("Executing try catch block");
        console.log(error.message);
    }
    /*Try catch block dalam penggunaan asynchronous dapat dipakai
    ketika kita menggunakan metode async await untuk menangkap value
    dari fungsi asynchronous nya, konsepnya mirip dengan then catch
    hanya saja try catch ini bukan syntax khusus untuk handle asynchronous
    sehingga diperlukannya fungsi dengan metode async await*/
}
workingDayCheck('minggu')
    .then((resolve) => {
        console.log("Executing then catch block");
        console.log(resolve+"\n");
    })
    .catch((error) => {
        console.log("Executing then catch block");
        console.error(error.message+"\n");
    });
    /*then catch block merupakan metode khusus untuk mengambil value
    dari callback proses asynchronous dengan metode Promise, konsepnya
    mirip dengan if else, kesimpulannya pada block then akan di eksekusi
    jika callback Promise mengembalikan nilai resolve, sedangkan block catch
    akan dieksekusi jika nilai yang dikembalikan adalah reject*/

output();