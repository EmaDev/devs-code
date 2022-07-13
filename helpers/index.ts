export const moneyFormatter = (price:number) => {
    const dollarUSLocale = Intl.NumberFormat('en-US');

    return dollarUSLocale.format(price);
}