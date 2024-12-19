export default async (req, res) => {
    const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
    console.log({
      timestamp: new Date(),
      method: req.method,
      path: req.url,
      clientIP,
      headers: req.headers,
    });
  
    res.status(200).json({ message: 'Request logged!' });
  };
  