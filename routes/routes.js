const express = require ('express')
const router = express.Router();
const myControllers = require('../controllers/myControllers')


/**
 * App Routes 
*/
router.get('/', myControllers.homepage);

// get user main routes
router.get('/messages', myControllers.messages);
router.get('/events', myControllers.events);
router.get('/register', myControllers.register);
router.get('/library', myControllers.library);


// get the admin dashboard routes
router.get('/admin/dashboard', myControllers.dashboard);
router.get('/admin/new-messages', myControllers.adminMessages);
router.get('/admin/new-lib', myControllers.adminLibrary);
router.get('/admin/new-rhema', myControllers.adminRhema);
router.get('/admin/new-events', myControllers.adminEvents);
router.get('/admin/view-events/:id', myControllers.viewEvents);
router.get('/admin/all-events', myControllers.allEvents);
router.post('/admin/new-events', myControllers.adminNewEvents);
router.get('/admin/edit-events/:id', myControllers.editEvents);
router.put('/admin/edit-events/:id',myControllers.editPostEvents);
router.delete('/admin/delete/:id', myControllers.deleteEvent)


module.exports = router;