export const sortMailsByDate = (mails) => {
    return mails.sort((a, b) => {
        const date1 = a.date.split('.').reverse().join('.');
        const date2 = b.date.split('.').reverse().join('.');
        if(date1 < date2) {
            return 1;
        }
        else if (date1 > date2) {
            return -1;
        }
        else {
            return 0;
        }  
    });
}