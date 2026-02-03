const router = require('express').Router();
const { deleteTasks } = require('../controllers/deleteTaskControllers');

router.delete('/delete_task/:itemId', deleteTasks);
module.exports = router;
