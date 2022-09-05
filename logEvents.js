const { format } = require('date-fns');
const { v4: uuid } = require('uuid'); // v4 version of uuid
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    // if the mylogs folder doesnot exists
    if (!fs.existsSync(path.join(__dirname, 'mylogs'))) {
      await fsPromises.mkdir(path.join(__dirname, 'mylogs'));
    }

    await fsPromises.appendFile(
      path.join(__dirname, 'mylogs', 'eventLog.txt'),
      logItem
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = logEvents;
