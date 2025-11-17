function daysUntil(today, targetday) {
    const date1 = new Date(today);
    const date2 = new Date(targetday);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}

console.log(daysUntil("2024-10-12", "2024-12-25"));