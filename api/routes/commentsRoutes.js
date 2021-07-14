const router = require('express').Router();
const { ensureAuthenticated } = require('../middleware/authMiddleware');
const { validationRules, validate } = require('../validations/commentValidator');
const { addOne, removeOne } = require('../controllers/commentsController');


router.post('/comments', ensureAuthenticated, validationRules(), validate, async (req, res) => {
  /*  #swagger.tags = ['Posts']
      #swagger.security = [{
      "Authorization": []
      }]
      #swagger.parameters['obj'] = {
        in: 'body',
        required: true,
        schema: { $ref: "#/definitions/CommentModel" }
  } */
  await addOne(req, res);
});


router.delete('/comments/:id', ensureAuthenticated, async (req, res) => {
  /*  #swagger.tags = ['Posts']
      #swagger.security = [{
      "Authorization": []
      }]
  */
  await removeOne(req, res);
});

module.exports = router;
