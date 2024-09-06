const process = (src, filepath, config) => {

  const mdToJson = JSON.stringify(src)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
    .replace('"', '');
  
  return {
    code: `module.exports = '${mdToJson}'`
  };
};

module.exports = {
  process
};
