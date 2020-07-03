/** utitlity function to convert date object into yyyy/mm/dd format */

export const parseDate = date => {
    let month = date.getMonth() + 1;
    month = month > 9 ? month : `0${month}`;
    let newDate = date.getDate();
    newDate = newDate > 9 ? newDate : `0${newDate}`;
    return `${date.getFullYear()}/${month}/${newDate}`;
  };
  
  /** utitlity function to convert date string to date object format */

  export const convertDate = startDate => {
    if (startDate) {
      const dateString = startDate.split("/");
      return new Date(dateString[0], dateString[1] - 1, dateString[2]);
    }
    return null;
  };
