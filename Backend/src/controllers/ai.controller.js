const aiService = require('../services/ai.services')


module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    if(!code){
      return res.status(400).json({ error: 'Code is required' });
  }
 const response = await aiService(prompt);
res.send(response);
}