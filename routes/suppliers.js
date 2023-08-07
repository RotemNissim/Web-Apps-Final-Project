const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

// Supplier routes
router.post('/', supplierController.createSupplier);
router.get('/', supplierController.getAllSuppliers);
router.put('/:supplierId', supplierController.updateSupplier);
router.delete('/:supplierId', supplierController.deleteSupplier);

module.exports = router;