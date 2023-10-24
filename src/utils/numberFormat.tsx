export const formatPhoneNumber = (phoneNumber:string) => {
    // Your formatting logic can go here
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    }

    let countryKey = phoneNumber[0] === '+'  ? '+' : '';
    countryKey = phoneNumber[0] === '0'  ? '0' : '';
    const restOfNumber = phoneNumber.slice(countryKey.length);

    let formattedNumber = countryKey;
    for (let i = 0; i < restOfNumber.length; i += 3) {
      if(i === 3){
        formattedNumber += restOfNumber.slice(i, i + 4) + ' ';
        i+=1
      }
      else{
        formattedNumber += restOfNumber.slice(i, i + 3) + ' ';
      }
    }

    return formattedNumber.trim();
}
export const validateNumberAndSplitThemWithCommas = (val:string) => {
     // A regular expression to remove non-numeric characters
     const formattedValue = val.replace(/[^0-9.]/g, '');
     // Format the numeric value with commas
     const numberWithCommas = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
     return numberWithCommas
}