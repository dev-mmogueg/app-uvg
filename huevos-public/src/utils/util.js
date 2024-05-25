/* ---- GET TOKEN AND HEADEERS */
export const getHeaders = (type = '') => {
  let headers;
  switch (type) {
    case 'file':
      headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': (localStorage.getItem('4afe1w1') ? localStorage.getItem('4afe1w1') : sessionStorage.getItem('4afe1w1'))
      }
      break;
    default:
      headers = {
        'Content-Type': 'application/json',
        'Authorization': (localStorage.getItem('4afe1w1') ? localStorage.getItem('4afe1w1') : sessionStorage.getItem('4afe1w1'))
      }
      break;
  }
  return headers;
}

export const verify = (data = {}) => {
  const keys = Object.keys(data);
  const ob = data;
  isEmpty(ob, '', keys);
  const r_msg = msg;
  msg = '';
  return r_msg.trim();
}

const isEmpty = (data = {}, key_p = '', keys = []) => {
  for (const key of keys) {
    if (data[key] === undefined ||
      data[key] === null ||
      data[key] === '') {
      msg += `Param ${key_p ? key_p + '.' : ''}${key} is required\n`;
    } else if (data[key] instanceof Object) {
      isEmpty(data[key], `${key_p ? key_p + '.' : ''}${key}`, Object.keys(data[key]));
    }
  }
}