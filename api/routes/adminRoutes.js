const router = require('express').Router();
const {
  ensureAuthenticated,
  ensureAuthorized
} = require('../middleware/authMiddleware');
const { register } = require('../controllers/authController');

const { getAll, getOne } = require('../controllers/adminController');

router.get('/users', ensureAuthenticated, ensureAuthorized(['admin']), async (req, res) => {
  /*
    #swagger.tags = ['Admin']
    #swagger.security = [{
      'Authorization': []
    }]
  */
  await getAll(req, res);
});

router.get('/users/:id', ensureAuthenticated, ensureAuthorized(['admin']), async (req, res) => {

  /*
    #swagger.tags = ['Admin']
    #swagger.security = [{
      'Authorization': []
    }]
  */
  await getOne(req, res);
});

router.get('/seed', async (req, res) => {
  //#swagger.tags = ['Admin'] 
  const admin = {
    name: 'Admin Essien',
    email: 'essiennsikakns06@gmail.com',
    password: '123456'
  };

  await register(admin, 'admin', res);
});

module.exports = router;