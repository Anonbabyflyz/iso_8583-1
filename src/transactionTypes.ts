let transType = {
  '00': 'Goods and services',
  '01': 'Cash withdrawal',
  '02': 'Adjustment',
  '03': 'Check cash / guarantee',
  '04': 'Check verification',
  '05': 'Eurocheque',
  '06': 'Travellers check',
  '07': 'Letter of credit',
  '08': 'Giro (postal banking)',
  '09': 'Goods and services with cash back',
  '10': 'Non-cash financial instrument (e.g. wire transfer)',
  '11': 'Quasi-cash and scrip',
  '12': 'General debit (see field 127.33 Extended Transaction Type)',
  '19': 'Visa Cash load settlement reversal',
  '20': 'Returns (refund)',
  '21': 'Deposit',
  '22': 'Adjustment',
  '23': 'Check deposit guarantee',
  '24': 'Check deposit',
  '25': 'General credit (see field 127.33 Extended Transaction Type)',
  '28': 'Merchandise request',
  '29': 'Visa cash load settlement',
  '30': 'Available balance inquiry',
  '31': 'Balance inquiry',
  '32': 'General inquiry (see field 127.33 Extended Transaction Type)',
  '35': 'Full-statement inquiry',
  '36': 'Merchandise inquiry (e.g. wire transfer inquiry)',
  '37': 'Card verification inquiry',
  '38': 'Mini-statement inquiry',
  '39': 'Linked account inquiry',
  '40': 'Cardholder accounts transfer',
  '42': 'General transfer (see field 127.33 Extended Transaction Type)',
  '50': 'Payment from account',
  '51': 'Payment by deposit',
  '52': 'General payment (see field 127.33 Extended Transaction Type)',
  '53': 'Payment to account',
  '54': 'Payment from account to account',
  '90': 'Place hold on card',
  '91': 'General admin (see field 127.33 Extended Transaction Type)',
  '92': 'Change PIN',
  '93': 'Dead-end general admin (see field 127.33 Extended Transaction Type)'
};

module.exports = transType;