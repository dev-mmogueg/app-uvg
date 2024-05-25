'use strict'

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mc = require('connect-multiparty');
let msg = '';

/* --- UPLOAD INSTANCE --- */
exports.uploads = mc();

/* --- ENCRYPT --- */
exports.encrypt = (text = '') => bcrypt.hashSync(text, 10);

/* --- CHECK --- */
exports.check = (text = '', hash = '') => bcrypt.compareSync(text, hash);

/* --- VERIFY TOKEN --- */
exports.check_tk = (tk = '') => jwt.verify(tk, `${process.env.KEY_DECODE}`);

/* --- VERIFY --- */
exports.verify = (data = {}) => {
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

/* ----- RANDOM NUMBER ----- */
exports.randomNo = (length = 0, hex = false) => {
  let no = '';
  for (let i = 0; i < length; i++) {
    let num = Math.floor(Math.random() * (57 - 48)) + 48;
    let letra = Math.floor(Math.random() * (122 - 97)) + 97;
    let decision = Math.floor(Math.random() * (4 - 2)) + 2;
    let caracter;
    if (hex) {
      if (decision == 3)
        caracter = String.fromCharCode(num);
      else if (decision == 2)
        caracter = String.fromCharCode(letra);
      no += `${caracter}`;
    } else {
      caracter = String.fromCharCode(num);
      no += `${caracter}`;
    }
  }
  return no;
}

/* ----- IS_IMAGE ----- */
exports.isImage = (extension = '') => {
  if (extension !== 'png' &&
    extension !== 'jpg' &&
    extension !== 'jpeg') return false;
  return true
}

/* ----- IS_PDF ----- */
exports.isPDF = (extension = '') => {
  if (extension !== 'pdf')
    return false;
  return true
}

/* --- GENERATE COD HEX --- */
exports.genCodHex = (cod = '', cant = 0, index_separator = []) => {
  let num_hex = '';
  let arr_hex = [];
  // Valida los parametros
  if (index_separator.length < 0)
    throw new Error(`Invalid param 'index_separator'.`);
  if (cant === 0)
    throw new Error(`Param 'cant' is required.`);

  if (cod === '') {
    // Si el codigo es null comienza desde 0
    num_hex += '1';
  } else {
    // Si existe un codigo, convierte el numero hexadecimal a decimal
    let num = parseInt(cod.replace(/[-]+/g, '').toUpperCase(), 16);
    // Remplaza la cantidad por la del codigo dado
    cant = cod.replace(/[-]+/g, '').length;
    // Array para almenar los indices donde estan los separadores
    index_separator = [];
    // Aumenta 1 al numero dado por el codigo decimal
    num++;
    // Convierte el numero decimal a hexadecimal
    num_hex = num.toString(16).toUpperCase();
    // Guarda los indices donde estan los ceparadores
    for (let i = 0; i < cod.length; i++)
      if (cod[i] === '-')
        index_separator.push(i);
  }
  // Declaracion de constante de numeros faltantes
  const turns = cant - num_hex.length;
  // Ciclo para agregar 0 a la izquierda al tamanio del codigo
  for (let i = 0; i < turns; i++)
    num_hex = `0${num_hex}`;
  // Separar String por caracter para poder insertar separadores
  arr_hex = num_hex.split('');
  // Si existe separadores entra si no regresa un numero hexadecimal sin separadores
  if (index_separator.length > 0)
    // Ciclo para poder insertar separadores
    for (let i = 0; i < index_separator.length; i++)
      /* El indice 0 no es afectado, de lo contrario se le suma una ya que si el separador esta en 4 
        en la siguiente vuelta estaria en la posicion 4 pero contando el separadot*/
      arr_hex.splice((i === 0 ? index_separator[i] : (index_separator[i] + 1)), 0, '-');
  // Catea Array a String
  num_hex = arr_hex.join('');
  // Retorna el numero hexdecimal
  return num_hex;
}