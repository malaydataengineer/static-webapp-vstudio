module.exports = async function (context, req) {
  context.log('HTTP function processed a request.');

  const name = req.query.name || (req.body && req.body.name) || 'world';

  context.res = {
    status: 200,
    body: {
      message: `Hello, ${name}! This is your HTTP function.`,
      method: req.method,
      timestamp: new Date().toISOString(),
    },
  };
};
